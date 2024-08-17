export enum inputDirection {
	'Up',
	'Left',
	'Down',
	'Right',
}

// used to convery keyboard input into directions
export const inputDirectionMap = new Map<string, inputDirection>([
	['w', inputDirection.Up],
	['a', inputDirection.Left],
	['s', inputDirection.Down],
	['d', inputDirection.Right],
	['W', inputDirection.Up],
	['A', inputDirection.Left],
	['S', inputDirection.Down],
	['D', inputDirection.Right],
	['ArrowUp', inputDirection.Up],
	['ArrowLeft', inputDirection.Left],
	['ArrowDown', inputDirection.Down],
	['ArrowRight', inputDirection.Right],
]);

export const inputMode: string[] = ['Free', 'Code List', 'Blind'];

export const hideGeneralCodesMode: string[] = ['Show All', 'Hide Mission Specific', 'Hide All General'];
