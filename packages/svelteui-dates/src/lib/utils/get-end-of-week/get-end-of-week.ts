import type { FirstDayOfWeek } from '../../types';

export function getEndOfWeek(date: Date, firstDayOfWeek: FirstDayOfWeek = 'monday') {
	const value = new Date(date);
	console.log(value);
	const day = value.getDay();
	const isSunday = firstDayOfWeek === 'sunday';

	const clampToLastDay = 7 - (isSunday ? day + 1 : day);

	if ((isSunday && day !== 6) || day !== 0) {
		value.setDate(value.getDate() + clampToLastDay);
		console.log(value);
	}

	return value;
}
