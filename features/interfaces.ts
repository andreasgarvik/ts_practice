interface Vehicle {
	name: string
	year: number
	broken: boolean
	summary(): string
}

const oldCivic = {
	name: 'civic',
	year: 2000,
	broken: true,
	summary(): string {
		return 'summary'
	},
}

const printVehicle = (vehicle: Vehicle) => {
	console.log(vehicle.name)
}

printVehicle(oldCivic)
