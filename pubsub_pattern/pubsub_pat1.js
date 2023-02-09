class PubSub {
	constructor() {
		// storage for topics that can be broadcast or listened to
		this.topics = {};
		// topic identifier
		this.subUid = -1;
	}

	publish(topic, args) {
		if (!this.topics[topic]) {
			return false;
		}

		const subscribers = this.topics[topic];
		let len = subscribers ? subscribers.length : 0;

		while ((len -= 1)) {
			subscribers[len].func(topic, args);
		}
		console.log(this);
		return this;
	}

	subscribe(topic, func) {
		if (!this.topics[topic]) {
			this.topics[topic] = [];
		}
		const token = (++this.subUid).toString();
		this.topics[topic].push({
			token,
			func,
		});
		return token;
	}

	unsubscribe(token) {
		for (const m in this.topics) {
			if (this.topics[m]) {
				const index = this.topics[m].findIndex(
					(topic) => topic.token === token
				);
				if (index !== -1) {
					this.topics[m].splice(index, 1);
					return token;
				}
			}
		}
		return this;
	}
}

const pubsub = new PubSub();

pubsub.subscribe('/addFavorite', (topic, args) => {
	console.log('test', topic, args);
});

pubsub.publish('/addFavorite', ['test']);
