class Boat {
	color: string = 'red'

	get formattedColor(): string {
		return `The color of the boat is ${this.color}`
	}

	@logError
	pilot(): void {
		throw new Error()
		console.log('swish')
	}
}
function logError(target: any, key: string, desc: PropertyDescriptor): void {
	const method = desc.value

	desc.value = function () {
		try {
			method()
		} catch (e) {
			console.log('haaa..')
		}
	}
}

new Boat().pilot()
