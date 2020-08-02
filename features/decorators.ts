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
	console.log(target)
	console.log(key)
}
