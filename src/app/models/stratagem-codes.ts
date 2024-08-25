import { inputDirection } from './stratagem-inputs';

export interface stratagemCode {
	name: string;
	icon: string;
	code: inputDirection[];
	sound: string[];
	voice: string[];
	postSound: string[];
	colour: 'red' | 'blue' | 'yellow';
	borderColour: 'red' | 'blue' | 'yellow' | 'green';
	deployType: 'drop-pod' | 'drop-pod-nolid' | 'pelican' | 'beam-only' | 'skip'; // "skip" is for things such as re-arming Eagle-1 or mission critical stratagems that just activate
	type: '' | 'Supply' | 'Mission' | 'Defensive' | 'Offensive';
	subType: '' | 'General' | 'Backpack' | 'Support Weapon' | 'Other' | 'Orbital' | 'Eagle';
}

// export const reinforcementsVoices: string[] = [
// 	'reinforcements-female-1-1',
// 	// 'reinforcements-female-1-2',
// 	// 'reinforcements-female-2-1',
// 	// 'reinforcements-female-2-2',
// 	'reinforcements-male-1-1',
// 	// 'reinforcements-male-1-2',
// 	// 'reinforcements-male-2-1',
// 	// 'reinforcements-male-2-2',
// ]

export const reinforcementConfirmVoices: string[] = ['ship-reinforcements-1', 'ship-reinforcements-2'];

export const sosVoices: string[] = [
	'sos-beacon-female-1-1',
	'sos-beacon-female-1-2',
	'sos-beacon-female-2-1',
	'sos-beacon-female-2-2',
	'sos-beacon-male-1-1',
	'sos-beacon-male-1-2',
	'sos-beacon-male-2-1',
	'sos-beacon-male-2-2',
];

export const walkerVoices: string[] = [
	'walker-female-1-1',
	'walker-female-1-2',
	'walker-female-2-1',
	'walker-female-2-2',
	'walker-male-1-1',
	'walker-male-1-2',
	'walker-male-2-1',
	'walker-male-2-2',
];

export const objectiveStratagemAvailableVoices: string[] = ['ship-objective-stratagem-available-1', 'ship-objective-stratagem-available-2'];

export const seafSounds: string[] = ['seaf-explosive', 'seaf=mininuke', 'seaf-highyield', 'seaf-static', 'seaf-smoke', 'seaf-napalm'];

export const hellbombVoice: string[] = ['ship-mission-hellbomb-1', /* 'ship-mission-hellbomb-2',*/ 'ship-mission-hellbomb-3' /* 'ship-mission-hellbomb-4'*/];

export const orbitalBarrageVoices: string[] = [
	'ship-orbital-barrage-1',
	'ship-orbital-barrage-2',
	'ship-orbital-barrage-3',
	'ship-orbital-barrage-4',
	'ship-orbital-barrage-5',
	'ship-orbital-barrage-6',
];
export const orbitalStrikeVoices: string[] = [
	'ship-orbital-strike-1',
	'ship-orbital-strike-2',
	'ship-orbital-strike-3',
	'ship-orbital-strike-4',
	'ship-orbital-strike-5',
	'ship-orbital-strike-6',
];
export const orbitalGasVoices: string[] = ['ship-orbital-gas-1', 'ship-orbital-gas-2', 'ship-orbital-gas-3', 'ship-orbital-gas-4'];
export const orbitalNonLethalVoice: string[] = [
	'ship-orbital-nonlethal-1',
	'ship-orbital-nonlethal-2',
	'ship-orbital-nonlethal-3',
	'ship-orbital-nonlethal-4',
	'ship-orbital-nonlethal-5',
	'ship-orbital-nonlethal-6',
];
export const orbitalSmokeVoice: string[] = ['ship-orbital-smoke-1', 'ship-orbital-smoke-2', 'ship-orbital-smoke-3', 'ship-orbital-smoke-4'];
export const orbitalLaserVoice: string[] = ['ship-orbital-laser-1', 'ship-orbital-laser-2', 'ship-orbital-laser-3' /* 'ship-orbital-laser-4'*/];
export const eagleDeployVoices: string[] = [
	'eagle-administoring_freedom',
	'eagle-attack_underway',
	'eagle-comin_in_hot',
	'eagle-delivering_payload',
	'eagle-democracys_on_its_way',
	'eagle-eat_liberty',
	'eagle-here_comes_the_cavalry',
	'eagle-unleashing_democracy',
];
export const eagleRearmVoices: string[] = [
	'rearm-be_back_shortly-1',
	'rearm-be_back_shortly-2',
	'rearm-leaving_combat_zone',
	'rearm-returning_to_destoyer_for_resupply',
	'rearm-withdrawing_to_rearm',
];
export const eagleHitVocies: string[] = [
	'eagle-hit-and_stay_down',
	'eagle-hit-now_thats_what_i_call_liberty',
	'eagle-hit-another_one_bites_the_dust',
	'eagle-hit-boom',
	'eagle-hit-enemy_down_baby',
	'eagle-hit-got_em',
	'eagle-hit-liberty_dispensed',
	'eagle-hit-nailed_em',
	'eagle-hit-never_misses',
	'eagle-hit-right_on_target',
];
export const weaponEmplacementVoices: string[] = ['ship-weaponemplacement-1', 'ship-weaponemplacement-2', 'ship-weaponemplacement-3', 'ship-weaponemplacement-4'];
export const fortificationVoices: string[] = [
	'ship-fortification-1',
	'ship-fortification-2',
	'ship-fortification-3',
	'ship-fortification-4',
	'ship-fortification-5',
	'ship-fortification-6',
];
export const equipmentPackageVoices: string[] = [
	'ship-equipmentpackage-1',
	'ship-equipmentpackage-2',
	'ship-equipmentpackage-3',
	'ship-equipmentpackage-4',
	'ship-equipmentpackage-5',
	'ship-equipmentpackage-6',
];
export const supportWeaponVoices: string[] = [
	'ship-supportweapon-1',
	'ship-supportweapon-2',
	'ship-supportweapon-3',
	'ship-supportweapon-4',
	'ship-supportweapon-5',
	'ship-supportweapon-6',
];
export const minefieldVoices: string[] = ['ship-minefield-1', 'ship-minefield-2', 'ship-minefield-3', 'ship-minefield-4'];
export const sentryVoices: string[] = ['ship-sentry-1', 'ship-sentry-2', 'ship-sentry-3', 'ship-sentry-4', 'ship-sentry-5', 'ship-sentry-6'];

export const genericStratagemCode: stratagemCode = {
	name: 'Stratagem',
	icon: '',
	code: [],
	sound: [],
	voice: [],
	postSound: [],
	colour: 'yellow',
	borderColour: 'yellow',
	deployType: 'beam-only',
	type: '',
	subType: '',
};

export const stratagemCodes: stratagemCode[] = [
	{
		name: 'Reinforce',
		icon: 'reinforce',
		code: [inputDirection.Up, inputDirection.Down, inputDirection.Right, inputDirection.Left, inputDirection.Up],
		sound: [],
		voice: reinforcementConfirmVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'yellow',
		deployType: 'drop-pod',
		type: 'Mission',
		subType: 'General',
	},
	{
		name: 'SOS Beacon',
		icon: 'sos',
		code: [inputDirection.Up, inputDirection.Down, inputDirection.Right, inputDirection.Up],
		sound: ['stratagem-mission-sos'],
		voice: sosVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'yellow',
		deployType: 'beam-only',
		type: 'Mission',
		subType: 'General',
	},
	{
		name: 'Resupply',
		icon: 'resupply',
		code: [inputDirection.Down, inputDirection.Down, inputDirection.Up, inputDirection.Right],
		sound: [],
		voice: equipmentPackageVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'yellow',
		deployType: 'drop-pod',
		type: 'Mission',
		subType: 'General',
	},
	{
		name: 'Eagle Rearm',
		icon: 'eagle-rearm',
		code: [inputDirection.Up, inputDirection.Up, inputDirection.Left, inputDirection.Up, inputDirection.Right],
		sound: [],
		voice: eagleRearmVoices,
		postSound: [],
		colour: 'yellow',
		borderColour: 'yellow',
		deployType: 'skip',
		type: 'Mission',
		subType: 'General',
	},
	{
		name: 'SEAF Artillery',
		icon: 'seaf-atrillery',
		code: [inputDirection.Right, inputDirection.Up, inputDirection.Up, inputDirection.Down],
		sound: seafSounds,
		voice: [],
		postSound: [],
		colour: 'blue',
		borderColour: 'yellow',
		deployType: 'beam-only',
		type: 'Mission',
		subType: '',
	},
	{
		name: 'Hellbomb',
		icon: 'hellbomb',
		code: [inputDirection.Down, inputDirection.Up, inputDirection.Left, inputDirection.Down, inputDirection.Up, inputDirection.Right, inputDirection.Down, inputDirection.Up],
		sound: ['stratagem-mission-hellbomb'],
		voice: hellbombVoice,
		postSound: [],
		colour: 'red',
		borderColour: 'yellow',
		deployType: 'drop-pod-nolid',
		type: 'Mission',
		subType: '',
	},
	{
		name: 'Upload Data',
		icon: 'upload-data',
		code: [inputDirection.Left, inputDirection.Right, inputDirection.Up, inputDirection.Up, inputDirection.Up],
		sound: ['stratagem-mission-upload'],
		voice: [],
		postSound: [],
		colour: 'yellow',
		borderColour: 'yellow',
		deployType: 'skip',
		type: 'Mission',
		subType: '',
	},
	{
		name: 'Super Earth Flag',
		icon: 'super-earth-flag',
		code: [inputDirection.Down, inputDirection.Up, inputDirection.Down, inputDirection.Up],
		sound: ['stratagem-mission-flag'],
		voice: [],
		postSound: [],
		colour: 'blue',
		borderColour: 'yellow',
		deployType: 'skip',
		type: 'Mission',
		subType: '',
	},
	{
		name: 'SSSD Delivery',
		icon: 'sssd',
		code: [inputDirection.Down, inputDirection.Down, inputDirection.Down, inputDirection.Up, inputDirection.Up],
		sound: [],
		voice: objectiveStratagemAvailableVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'yellow',
		deployType: 'drop-pod',
		type: 'Mission',
		subType: '',
	},
	{
		name: 'Seismic Probe',
		icon: 'seismic-probe',
		code: [inputDirection.Up, inputDirection.Up, inputDirection.Left, inputDirection.Right, inputDirection.Down, inputDirection.Down],
		sound: ['stratagem-mission-prospecting-drill'],
		voice: objectiveStratagemAvailableVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'yellow',
		deployType: 'skip',
		type: 'Mission',
		subType: '',
	},
	{
		name: 'Prospecting Drill',
		icon: 'prospecting-drill',
		code: [inputDirection.Down, inputDirection.Down, inputDirection.Left, inputDirection.Right, inputDirection.Down, inputDirection.Down],
		sound: ['stratagem-mission-prospecting-drill'],
		voice: objectiveStratagemAvailableVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'yellow',
		deployType: 'skip',
		type: 'Mission',
		subType: '',
	},
	{
		name: 'Orbital Illumination Flare',
		icon: 'orbital-illumination-flare',
		code: [inputDirection.Right, inputDirection.Right, inputDirection.Left, inputDirection.Left],
		sound: [],
		voice: objectiveStratagemAvailableVoices,
		postSound: [],
		colour: 'yellow',
		borderColour: 'yellow',
		deployType: 'skip',
		type: 'Mission',
		subType: '',
	},
	{
		name: 'Dark Fluid Vessel',
		icon: 'tectonic-drill',
		code: [inputDirection.Up, inputDirection.Down, inputDirection.Up, inputDirection.Down, inputDirection.Up, inputDirection.Down],
		sound: [],
		voice: objectiveStratagemAvailableVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'yellow',
		deployType: 'drop-pod',
		type: 'Mission',
		subType: '',
	},
	{
		name: 'Tectonic Drill',
		icon: 'dark-fluid-vessel',
		code: [inputDirection.Up, inputDirection.Left, inputDirection.Right, inputDirection.Down, inputDirection.Up, inputDirection.Up],
		sound: ['stratagem-mission-prospecting-drill'],
		voice: objectiveStratagemAvailableVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'yellow',
		deployType: 'skip',
		type: 'Mission',
		subType: '',
	},
	{
		name: 'Hive Breaker Drill',
		icon: 'hive-breaker-drill',
		code: [inputDirection.Left, inputDirection.Up, inputDirection.Down, inputDirection.Right, inputDirection.Down, inputDirection.Down],
		sound: ['stratagem-mission-prospecting-drill'],
		voice: objectiveStratagemAvailableVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'yellow',
		deployType: 'skip',
		type: 'Mission',
		subType: '',
	},

	{
		name: 'Orbital Gatling Barrage',
		icon: 'orbital-gatling',
		code: [inputDirection.Right, inputDirection.Down, inputDirection.Left, inputDirection.Up, inputDirection.Up],
		sound: ['stratagem-orbital-gatlingbarrage'],
		voice: orbitalBarrageVoices,
		postSound: [],
		colour: 'red',
		borderColour: 'red',
		deployType: 'beam-only',
		type: 'Offensive',
		subType: 'Orbital',
	},
	{
		name: 'Orbital Airburst Strike',
		icon: 'orbital-airburst',
		code: [inputDirection.Right, inputDirection.Right, inputDirection.Right],
		sound: ['stratagem-orbital-airburst'],
		voice: orbitalStrikeVoices,
		postSound: [],
		colour: 'red',
		borderColour: 'red',
		deployType: 'beam-only',
		type: 'Offensive',
		subType: 'Orbital',
	},
	{
		name: 'Orbital 120MM HE Barrage',
		icon: 'orbital-120mm',
		code: [inputDirection.Right, inputDirection.Right, inputDirection.Down, inputDirection.Left, inputDirection.Right, inputDirection.Down],
		sound: ['stratagem-orbital-120mm'],
		voice: orbitalBarrageVoices,
		postSound: [],
		colour: 'red',
		borderColour: 'red',
		deployType: 'beam-only',
		type: 'Offensive',
		subType: 'Orbital',
	},
	{
		name: 'Orbital 380MM HE Barrage',
		icon: 'orbital-380mm',
		code: [inputDirection.Right, inputDirection.Down, inputDirection.Up, inputDirection.Up, inputDirection.Left, inputDirection.Down, inputDirection.Down],
		sound: ['stratagem-orbital-380mm'],
		voice: orbitalBarrageVoices,
		postSound: [],
		colour: 'red',
		borderColour: 'red',
		deployType: 'beam-only',
		type: 'Offensive',
		subType: 'Orbital',
	},
	{
		name: 'Orbital Walking Barrage',
		icon: 'orbital-walking',
		code: [inputDirection.Right, inputDirection.Down, inputDirection.Right, inputDirection.Down, inputDirection.Right, inputDirection.Down],
		sound: ['stratagem-orbital-walkingbarrage'],
		voice: orbitalBarrageVoices,
		postSound: [],
		colour: 'red',
		borderColour: 'red',
		deployType: 'beam-only',
		type: 'Offensive',
		subType: 'Orbital',
	},
	{
		name: 'Orbital Laser',
		icon: 'orbital-laser',
		code: [inputDirection.Right, inputDirection.Down, inputDirection.Up, inputDirection.Right, inputDirection.Down],
		sound: ['stratagem-orbital-laser'],
		voice: orbitalLaserVoice,
		postSound: [],
		colour: 'red',
		borderColour: 'red',
		deployType: 'beam-only',
		type: 'Offensive',
		subType: 'Orbital',
	},
	{
		name: 'Orbital Railcannon Strike',
		icon: 'orbital-railcannon',
		code: [inputDirection.Right, inputDirection.Up, inputDirection.Down, inputDirection.Down, inputDirection.Right],
		sound: ['stratagem-orbital-railcannon'],
		voice: orbitalStrikeVoices,
		postSound: [],
		colour: 'red',
		borderColour: 'red',
		deployType: 'beam-only',
		type: 'Offensive',
		subType: 'Orbital',
	},
	{
		name: 'Orbital Precision Strike',
		icon: 'orbital-precision',
		code: [inputDirection.Right, inputDirection.Right, inputDirection.Up],
		sound: ['stratagem-orbital-precisionstrike'],
		voice: orbitalStrikeVoices,
		postSound: [],
		colour: 'red',
		borderColour: 'red',
		deployType: 'beam-only',
		type: 'Offensive',
		subType: 'Orbital',
	},
	{
		name: 'Orbital Gas Strike',
		icon: 'orbital-gas',
		code: [inputDirection.Right, inputDirection.Right, inputDirection.Down, inputDirection.Right],
		sound: ['stratagem-orbital-gas'],
		voice: orbitalGasVoices,
		postSound: [],
		colour: 'red',
		borderColour: 'red',
		deployType: 'beam-only',
		type: 'Offensive',
		subType: 'Orbital',
	},
	{
		name: 'Orbital EMS Strike',
		icon: 'orbital-ems',
		code: [inputDirection.Right, inputDirection.Right, inputDirection.Left, inputDirection.Down],
		sound: ['stratagem-orbital-ems'],
		voice: orbitalNonLethalVoice,
		postSound: [],
		colour: 'blue',
		borderColour: 'red',
		deployType: 'beam-only',
		type: 'Offensive',
		subType: 'Orbital',
	},
	{
		name: 'Orbital Smoke Strike',
		icon: 'orbital-smoke',
		code: [inputDirection.Right, inputDirection.Right, inputDirection.Down, inputDirection.Up],
		sound: ['stratagem-orbital-smoke'],
		voice: orbitalSmokeVoice,
		postSound: [],
		colour: 'red',
		borderColour: 'red',
		deployType: 'beam-only',
		type: 'Offensive',
		subType: 'Orbital',
	},

	{
		name: 'Eagle Strafing Run',
		icon: 'eagle-strafing-run',
		code: [inputDirection.Up, inputDirection.Right, inputDirection.Right],
		sound: ['stratagem-eagle-strafingrun'],
		voice: eagleDeployVoices,
		postSound: eagleHitVocies,
		colour: 'red',
		borderColour: 'red',
		deployType: 'beam-only',
		type: 'Offensive',
		subType: 'Eagle',
	},
	{
		name: 'Eagle Airstrike',
		icon: 'eagle-airstrike',
		code: [inputDirection.Up, inputDirection.Right, inputDirection.Down, inputDirection.Right],
		sound: ['stratagem-eagle-airstrike'],
		voice: eagleDeployVoices,
		postSound: eagleHitVocies,
		colour: 'red',
		borderColour: 'red',
		deployType: 'beam-only',
		type: 'Offensive',
		subType: 'Eagle',
	},
	{
		name: 'Eagle Cluster Bomb',
		icon: 'eagle-cluster-bomb',
		code: [inputDirection.Up, inputDirection.Right, inputDirection.Down, inputDirection.Down, inputDirection.Right],
		sound: ['stratagem-eagle-clusterbomb'],
		voice: eagleDeployVoices,
		postSound: eagleHitVocies,
		colour: 'red',
		borderColour: 'red',
		deployType: 'beam-only',
		type: 'Offensive',
		subType: 'Eagle',
	},
	{
		name: 'Eagle Napalm Airstrike',
		icon: 'eagle-napalm',
		code: [inputDirection.Up, inputDirection.Right, inputDirection.Down, inputDirection.Up],
		sound: ['stratagem-eagle-napalm'],
		voice: eagleDeployVoices,
		postSound: eagleHitVocies,
		colour: 'red',
		borderColour: 'red',
		deployType: 'beam-only',
		type: 'Offensive',
		subType: 'Eagle',
	},
	{
		name: 'Eagle Smoke Strike',
		icon: 'eagle-smoke',
		code: [inputDirection.Up, inputDirection.Right, inputDirection.Up, inputDirection.Down],
		sound: ['stratagem-eagle-smoke'],
		voice: eagleDeployVoices,
		postSound: [],
		colour: 'red',
		borderColour: 'red',
		deployType: 'beam-only',
		type: 'Offensive',
		subType: 'Eagle',
	},
	{
		name: 'Eagle 110MM Rocket Pods',
		icon: 'eagle-rocket-pods',
		code: [inputDirection.Up, inputDirection.Right, inputDirection.Up, inputDirection.Left],
		sound: ['stratagem-eagle-rocketpods'],
		voice: eagleDeployVoices,
		postSound: eagleHitVocies,
		colour: 'red',
		borderColour: 'red',
		deployType: 'beam-only',
		type: 'Offensive',
		subType: 'Eagle',
	},
	{
		name: 'Eagle 500KG Bomb',
		icon: 'eagle-500kg',
		code: [inputDirection.Up, inputDirection.Right, inputDirection.Down, inputDirection.Down, inputDirection.Down],
		sound: ['stratagem-eagle-500kg'],
		voice: eagleDeployVoices,
		postSound: eagleHitVocies,
		colour: 'red',
		borderColour: 'red',
		deployType: 'beam-only',
		type: 'Offensive',
		subType: 'Eagle',
	},

	{
		name: 'Patriot Exosuit',
		icon: 'patriot-exosuit',
		code: [inputDirection.Left, inputDirection.Down, inputDirection.Right, inputDirection.Up, inputDirection.Left, inputDirection.Down, inputDirection.Down],
		sound: [],
		voice: walkerVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'blue',
		deployType: 'pelican',
		type: 'Supply',
		subType: 'Other',
	},
	{
		name: 'Emancipator Exosuit',
		icon: 'emancipator-exosuit',
		code: [inputDirection.Left, inputDirection.Down, inputDirection.Right, inputDirection.Up, inputDirection.Left, inputDirection.Down, inputDirection.Up],
		sound: [],
		voice: walkerVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'blue',
		deployType: 'pelican',
		type: 'Supply',
		subType: 'Other',
	},

	{
		name: 'Jump Pack',
		icon: 'jump-pack',
		code: [inputDirection.Down, inputDirection.Up, inputDirection.Up, inputDirection.Down, inputDirection.Up],
		sound: [],
		voice: equipmentPackageVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'blue',
		deployType: 'drop-pod',
		type: 'Supply',
		subType: 'Backpack',
	},
	{
		name: 'Supply Pack',
		icon: 'supply-pack',
		code: [inputDirection.Down, inputDirection.Left, inputDirection.Down, inputDirection.Up, inputDirection.Up, inputDirection.Down],
		sound: [],
		voice: equipmentPackageVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'blue',
		deployType: 'drop-pod',
		type: 'Supply',
		subType: 'Backpack',
	},
	{
		name: '"Guard Dog" Rover',
		icon: 'guard-dog-rover',
		code: [inputDirection.Down, inputDirection.Up, inputDirection.Left, inputDirection.Up, inputDirection.Right, inputDirection.Right],
		sound: [],
		voice: equipmentPackageVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'blue',
		deployType: 'drop-pod',
		type: 'Supply',
		subType: 'Backpack',
	},
	{
		name: 'Ballistic Shield Backpack',
		icon: 'ballistic-shield-backpack',
		code: [inputDirection.Down, inputDirection.Left, inputDirection.Down, inputDirection.Down, inputDirection.Up, inputDirection.Left],
		sound: [],
		voice: equipmentPackageVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'blue',
		deployType: 'drop-pod',
		type: 'Supply',
		subType: 'Backpack',
	},
	{
		name: 'Shield Generator Pack',
		icon: 'shield-generator-pack',
		code: [inputDirection.Down, inputDirection.Up, inputDirection.Left, inputDirection.Right, inputDirection.Left, inputDirection.Right],
		sound: [],
		voice: equipmentPackageVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'blue',
		deployType: 'drop-pod',
		type: 'Supply',
		subType: 'Backpack',
	},
	{
		name: '"Guard Dog"',
		icon: 'guard-dog',
		code: [inputDirection.Down, inputDirection.Up, inputDirection.Left, inputDirection.Up, inputDirection.Right, inputDirection.Down],
		sound: [],
		voice: equipmentPackageVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'blue',
		deployType: 'drop-pod',
		type: 'Supply',
		subType: 'Backpack',
	},

	{
		name: 'Machine Gun',
		icon: 'machine-gun',
		code: [inputDirection.Down, inputDirection.Left, inputDirection.Down, inputDirection.Up, inputDirection.Right],
		sound: [],
		voice: supportWeaponVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'blue',
		deployType: 'drop-pod',
		type: 'Supply',
		subType: 'Support Weapon',
	},
	{
		name: 'Anti-Materiel Rifle',
		icon: 'AM-rifle',
		code: [inputDirection.Down, inputDirection.Left, inputDirection.Right, inputDirection.Up, inputDirection.Down],
		sound: [],
		voice: supportWeaponVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'blue',
		deployType: 'drop-pod',
		type: 'Supply',
		subType: 'Support Weapon',
	},
	{
		name: 'Stalwart',
		icon: 'stalwart',
		code: [inputDirection.Down, inputDirection.Left, inputDirection.Down, inputDirection.Up, inputDirection.Up, inputDirection.Left],
		sound: [],
		voice: supportWeaponVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'blue',
		deployType: 'drop-pod',
		type: 'Supply',
		subType: 'Support Weapon',
	},
	{
		name: 'Expendable Anti-tank',
		icon: 'EAT',
		code: [inputDirection.Down, inputDirection.Down, inputDirection.Left, inputDirection.Up, inputDirection.Right],
		sound: [],
		voice: supportWeaponVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'blue',
		deployType: 'drop-pod',
		type: 'Supply',
		subType: 'Support Weapon',
	},
	{
		name: 'Recoilless Rifle',
		icon: 'recoilless-rifle',
		code: [inputDirection.Down, inputDirection.Left, inputDirection.Right, inputDirection.Right, inputDirection.Left],
		sound: [],
		voice: supportWeaponVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'blue',
		deployType: 'drop-pod',
		type: 'Supply',
		subType: 'Support Weapon',
	},
	{
		name: 'Flamethrower',
		icon: 'flamethrower',
		code: [inputDirection.Down, inputDirection.Left, inputDirection.Up, inputDirection.Down, inputDirection.Up],
		sound: [],
		voice: supportWeaponVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'blue',
		deployType: 'drop-pod',
		type: 'Supply',
		subType: 'Support Weapon',
	},
	{
		name: 'Autocannon',
		icon: 'autocannon',
		code: [inputDirection.Down, inputDirection.Left, inputDirection.Down, inputDirection.Up, inputDirection.Up, inputDirection.Right],
		sound: [],
		voice: supportWeaponVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'blue',
		deployType: 'drop-pod',
		type: 'Supply',
		subType: 'Support Weapon',
	},
	{
		name: 'Heavy Machine Gun',
		icon: 'heavy-mg',
		code: [inputDirection.Down, inputDirection.Left, inputDirection.Up, inputDirection.Down, inputDirection.Down],
		sound: [],
		voice: supportWeaponVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'blue',
		deployType: 'drop-pod',
		type: 'Supply',
		subType: 'Support Weapon',
	},
	{
		name: 'Airburst Rocket Launcher',
		icon: 'airburst-launcher',
		code: [inputDirection.Down, inputDirection.Up, inputDirection.Up, inputDirection.Left, inputDirection.Right],
		sound: [],
		voice: supportWeaponVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'blue',
		deployType: 'drop-pod',
		type: 'Supply',
		subType: 'Support Weapon',
	},
	{
		name: 'Railgun',
		icon: 'railgun',
		code: [inputDirection.Down, inputDirection.Right, inputDirection.Down, inputDirection.Up, inputDirection.Left, inputDirection.Right],
		sound: [],
		voice: supportWeaponVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'blue',
		deployType: 'drop-pod',
		type: 'Supply',
		subType: 'Support Weapon',
	},
	{
		name: 'Commando',
		icon: 'commando',
		code: [inputDirection.Down, inputDirection.Left, inputDirection.Up, inputDirection.Down, inputDirection.Right],
		sound: [],
		voice: supportWeaponVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'blue',
		deployType: 'drop-pod',
		type: 'Supply',
		subType: 'Support Weapon',
	},
	{
		name: 'Spear',
		icon: 'spear',
		code: [inputDirection.Down, inputDirection.Down, inputDirection.Up, inputDirection.Down, inputDirection.Down],
		sound: [],
		voice: supportWeaponVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'blue',
		deployType: 'drop-pod',
		type: 'Supply',
		subType: 'Support Weapon',
	},
	{
		name: 'Grenade Launcher',
		icon: 'grenade-launcher',
		code: [inputDirection.Down, inputDirection.Left, inputDirection.Up, inputDirection.Left, inputDirection.Down],
		sound: [],
		voice: supportWeaponVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'blue',
		deployType: 'drop-pod',
		type: 'Supply',
		subType: 'Support Weapon',
	},
	{
		name: 'Laser Cannon',
		icon: 'laser-cannon',
		code: [inputDirection.Down, inputDirection.Left, inputDirection.Down, inputDirection.Up, inputDirection.Left],
		sound: [],
		voice: supportWeaponVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'blue',
		deployType: 'drop-pod',
		type: 'Supply',
		subType: 'Support Weapon',
	},
	{
		name: 'Arc Thrower',
		icon: 'arc-thrower',
		code: [inputDirection.Down, inputDirection.Right, inputDirection.Down, inputDirection.Up, inputDirection.Left, inputDirection.Left],
		sound: [],
		voice: supportWeaponVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'blue',
		deployType: 'drop-pod',
		type: 'Supply',
		subType: 'Support Weapon',
	},
	{
		name: 'Quasar Cannon',
		icon: 'quasar-cannon',
		code: [inputDirection.Down, inputDirection.Down, inputDirection.Up, inputDirection.Left, inputDirection.Right],
		sound: [],
		voice: supportWeaponVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'blue',
		deployType: 'drop-pod',
		type: 'Supply',
		subType: 'Support Weapon',
	},

	{
		name: 'HMG Emplacement',
		icon: 'hmg-emplacement',
		code: [inputDirection.Down, inputDirection.Up, inputDirection.Left, inputDirection.Right, inputDirection.Right, inputDirection.Left],
		sound: ['stratagem-defensive-hmgemplacement'],
		voice: weaponEmplacementVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'green',
		deployType: 'drop-pod-nolid',
		type: 'Defensive',
		subType: '',
	},
	{
		name: 'Shield Generator Relay',
		icon: 'shield-relay',
		code: [inputDirection.Down, inputDirection.Down, inputDirection.Left, inputDirection.Right, inputDirection.Left, inputDirection.Right],
		sound: ['stratagem-defensive-shieldrelay'],
		voice: fortificationVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'green',
		deployType: 'drop-pod-nolid',
		type: 'Defensive',
		subType: '',
	},
	{
		name: 'Tesla Tower',
		icon: 'tesla-tower',
		code: [inputDirection.Down, inputDirection.Up, inputDirection.Right, inputDirection.Up, inputDirection.Left, inputDirection.Right],
		sound: ['stratagem-defensive-teslatower'],
		voice: sentryVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'green',
		deployType: 'drop-pod-nolid',
		type: 'Defensive',
		subType: '',
	},
	{
		name: 'Anti-Personnel Minefield',
		icon: 'anti-personnel-minefield',
		code: [inputDirection.Down, inputDirection.Left, inputDirection.Up, inputDirection.Right],
		sound: ['stratagem-defensive-mines'],
		voice: minefieldVoices,
		postSound: [],
		colour: 'red',
		borderColour: 'green',
		deployType: 'drop-pod-nolid',
		type: 'Defensive',
		subType: '',
	},
	{
		name: 'Incendiary Mines',
		icon: 'incendiary-mines',
		code: [inputDirection.Down, inputDirection.Left, inputDirection.Left, inputDirection.Down],
		sound: ['stratagem-defensive-mines'],
		voice: minefieldVoices,
		postSound: [],
		colour: 'red',
		borderColour: 'green',
		deployType: 'drop-pod-nolid',
		type: 'Defensive',
		subType: '',
	},
	{
		name: 'Anti-Tank Mines',
		icon: 'anti-tank-mines',
		code: [inputDirection.Down, inputDirection.Left, inputDirection.Up, inputDirection.Up],
		sound: ['stratagem-defensive-mines'],
		voice: minefieldVoices,
		postSound: [],
		colour: 'red',
		borderColour: 'green',
		deployType: 'drop-pod-nolid',
		type: 'Defensive',
		subType: '',
	},
	{
		name: 'Machine Gun Sentry',
		icon: 'mg-sentry',
		code: [inputDirection.Down, inputDirection.Up, inputDirection.Right, inputDirection.Right, inputDirection.Up],
		sound: ['stratagem-defensive-machinegunsentry'],
		voice: sentryVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'green',
		deployType: 'drop-pod-nolid',
		type: 'Defensive',
		subType: '',
	},
	{
		name: 'Gatling Sentry',
		icon: 'gatling-sentry',
		code: [inputDirection.Down, inputDirection.Up, inputDirection.Right, inputDirection.Left],
		sound: ['stratagem-defensive-gatlingsentry'],
		voice: sentryVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'green',
		deployType: 'drop-pod-nolid',
		type: 'Defensive',
		subType: '',
	},
	{
		name: 'Mortar Sentry',
		icon: 'mortar-sentry',
		code: [inputDirection.Down, inputDirection.Up, inputDirection.Right, inputDirection.Right, inputDirection.Down],
		sound: ['stratagem-defensive-mortar'],
		voice: sentryVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'green',
		deployType: 'drop-pod-nolid',
		type: 'Defensive',
		subType: '',
	},
	{
		name: 'Autocannon Sentry',
		icon: 'autocannon-sentry',
		code: [inputDirection.Down, inputDirection.Up, inputDirection.Right, inputDirection.Up, inputDirection.Left, inputDirection.Up],
		sound: ['stratagem-defensive-autocannonsentry'],
		voice: sentryVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'green',
		deployType: 'drop-pod-nolid',
		type: 'Defensive',
		subType: '',
	},
	{
		name: 'Rocket Sentry',
		icon: 'rocket-sentry',
		code: [inputDirection.Down, inputDirection.Up, inputDirection.Right, inputDirection.Right, inputDirection.Left],
		sound: ['stratagem-defensive-rocketsentry'],
		voice: sentryVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'green',
		deployType: 'drop-pod-nolid',
		type: 'Defensive',
		subType: '',
	},
	{
		name: 'EMS Mortar Sentry',
		icon: 'ems-mortar-sentry',
		code: [inputDirection.Down, inputDirection.Up, inputDirection.Right, inputDirection.Down, inputDirection.Right],
		sound: ['stratagem-defensive-emsmortar'],
		voice: sentryVoices,
		postSound: [],
		colour: 'blue',
		borderColour: 'green',
		deployType: 'drop-pod-nolid',
		type: 'Defensive',
		subType: '',
	},
];
