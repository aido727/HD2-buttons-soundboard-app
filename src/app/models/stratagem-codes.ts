import { inputDirection } from "./stratagem-inputs";

export interface stratagemCode {
    name: string
    icon: string
    code: inputDirection[]
    sound: string
    voice: string
    colour: "red" | "blue" | "yellow"
    deployType: "drop-pod" | "pelican" | "beam-only" | "skip" // "skip" is such as re-arming Eagle-1 or mission critical stratagems
    type: "Supply" | "Mission" | "Defensive" | "Offensive"
    subType: "" | "Backpack" | "Support Weapon" | "Other" | "Orbital" | "Eagle"
}

export const stratagemCodes: stratagemCode[] = [
    {name: "Jump Pack", icon: "", code: [inputDirection.Down, inputDirection.Up, inputDirection.Up, inputDirection.Down, inputDirection.Up], sound: "", voice: "", colour: "blue", deployType: "drop-pod", type: "Supply", subType: "Backpack"},
    {name: "Supply Pack", icon: "", code: [inputDirection.Down, inputDirection.Left, inputDirection.Down, inputDirection.Up, inputDirection.Up, inputDirection.Down], sound: "", voice: "", colour: "blue", deployType: "drop-pod", type: "Supply", subType: "Backpack"},
    {name: '"Guard Dog" Rover', icon: "", code: [inputDirection.Down, inputDirection.Up, inputDirection.Left, inputDirection.Up, inputDirection.Right, inputDirection.Right], sound: "", voice: "", colour: "blue", deployType: "drop-pod", type: "Supply", subType: "Backpack"},
    {name: "Ballistic Shield Backpack", icon: "", code: [inputDirection.Down, inputDirection.Left, inputDirection.Down, inputDirection.Down, inputDirection.Up, inputDirection.Left], sound: "", voice: "", colour: "blue", deployType: "drop-pod", type: "Supply", subType: "Backpack"},
    {name: "Shield Generator Pack", icon: "", code: [inputDirection.Down, inputDirection.Up, inputDirection.Left, inputDirection.Right, inputDirection.Left, inputDirection.Right], sound: "", voice: "", colour: "blue", deployType: "drop-pod", type: "Supply", subType: "Backpack"},
    {name: '"Guard Dog"', icon: "", code: [inputDirection.Down, inputDirection.Up, inputDirection.Left, inputDirection.Up, inputDirection.Right, inputDirection.Down], sound: "", voice: "", colour: "blue", deployType: "drop-pod", type: "Supply", subType: "Backpack"},

    {name: "Machine Gun", icon: "", code: [inputDirection.Down, inputDirection.Left, inputDirection.Down, inputDirection.Up, inputDirection.Right], sound: "", voice: "", colour: "blue", deployType: "drop-pod", type: "Supply", subType: "Support Weapon"},
    {name: "Anti-Materiel Rifle", icon: "", code: [inputDirection.Down, inputDirection.Left, inputDirection.Right, inputDirection.Up, inputDirection.Down], sound: "", voice: "", colour: "blue", deployType: "drop-pod", type: "Supply", subType: "Support Weapon"},
    {name: "Stalwart", icon: "", code: [inputDirection.Down, inputDirection.Left, inputDirection.Down, inputDirection.Up, inputDirection.Up, inputDirection.Left], sound: "", voice: "", colour: "blue", deployType: "drop-pod", type: "Supply", subType: "Support Weapon"},
    {name: "Expendable Anti-tank", icon: "", code: [inputDirection.Down, inputDirection.Down, inputDirection.Left, inputDirection.Up, inputDirection.Right], sound: "", voice: "", colour: "blue", deployType: "drop-pod", type: "Supply", subType: "Support Weapon"},
    {name: "Recoilless Rifle", icon: "", code: [inputDirection.Down, inputDirection.Left, inputDirection.Right, inputDirection.Right, inputDirection.Left], sound: "", voice: "", colour: "blue", deployType: "drop-pod", type: "Supply", subType: "Support Weapon"},
    {name: "Flamethrower", icon: "", code: [inputDirection.Down, inputDirection.Left, inputDirection.Up, inputDirection.Down, inputDirection.Up], sound: "", voice: "", colour: "blue", deployType: "drop-pod", type: "Supply", subType: "Support Weapon"},
    {name: "Autocannon", icon: "", code: [inputDirection.Down, inputDirection.Left, inputDirection.Down, inputDirection.Up, inputDirection.Up, inputDirection.Right], sound: "", voice: "", colour: "blue", deployType: "drop-pod", type: "Supply", subType: "Support Weapon"},
    {name: "Heavy Machine Gun", icon: "", code: [inputDirection.Down, inputDirection.Left, inputDirection.Up, inputDirection.Down, inputDirection.Down], sound: "", voice: "", colour: "blue", deployType: "drop-pod", type: "Supply", subType: "Support Weapon"},
    {name: "Railgun", icon: "", code: [inputDirection.Down, inputDirection.Right, inputDirection.Down, inputDirection.Up, inputDirection.Left, inputDirection.Right], sound: "", voice: "", colour: "blue", deployType: "drop-pod", type: "Supply", subType: "Support Weapon"},
    {name: "SPEAR Launcher", icon: "", code: [inputDirection.Down, inputDirection.Down, inputDirection.Up, inputDirection.Down, inputDirection.Down], sound: "", voice: "", colour: "blue", deployType: "drop-pod", type: "Supply", subType: "Support Weapon"},
    {name: "Grenade Launcher", icon: "", code: [inputDirection.Down, inputDirection.Left, inputDirection.Up, inputDirection.Left, inputDirection.Down], sound: "", voice: "", colour: "blue", deployType: "drop-pod", type: "Supply", subType: "Support Weapon"},
    {name: "Laser Cannon", icon: "", code: [inputDirection.Down, inputDirection.Left, inputDirection.Down, inputDirection.Up, inputDirection.Left], sound: "", voice: "", colour: "blue", deployType: "drop-pod", type: "Supply", subType: "Support Weapon"},
    {name: "Arc Thrower", icon: "", code: [inputDirection.Down, inputDirection.Right, inputDirection.Down, inputDirection.Up, inputDirection.Left, inputDirection.Left], sound: "", voice: "", colour: "blue", deployType: "drop-pod", type: "Supply", subType: "Support Weapon"},
    {name: "Quasar Cannon", icon: "", code: [inputDirection.Down, inputDirection.Down, inputDirection.Up, inputDirection.Left, inputDirection.Right], sound: "", voice: "", colour: "blue", deployType: "drop-pod", type: "Supply", subType: "Support Weapon"},
    {name: "Airburst Rocket Launcher", icon: "", code: [inputDirection.Down, inputDirection.Up, inputDirection.Up, inputDirection.Left, inputDirection.Right], sound: "", voice: "", colour: "blue", deployType: "drop-pod", type: "Supply", subType: "Support Weapon"},

    {name: "Patriot Exosuit", icon: "", code: [inputDirection.Left, inputDirection.Down, inputDirection.Right, inputDirection.Up, inputDirection.Left, inputDirection.Down, inputDirection.Down], sound: "", voice: "", colour: "blue", deployType: 'pelican', type: "Supply", subType: "Other"},
    {name: "Emancipator Exosuit", icon: "", code: [inputDirection.Left, inputDirection.Down, inputDirection.Right, inputDirection.Up, inputDirection.Left, inputDirection.Down, inputDirection.Up], sound: "", voice: "", colour: "blue", deployType: 'pelican', type: "Supply", subType: "Other"},

    {name: "Reinforce", icon: "", code: [inputDirection.Up, inputDirection.Down, inputDirection.Right, inputDirection.Left, inputDirection.Up], sound: "", voice: "", colour: "blue", deployType: "drop-pod", type: "Mission", subType: ""},
    {name: "SOS Beacon", icon: "", code: [inputDirection.Up, inputDirection.Down, inputDirection.Right, inputDirection.Up], sound: "", voice: "", colour: "blue", deployType: "drop-pod", type: "Mission", subType: ""},
    {name: "Resupply", icon: "", code: [inputDirection.Down, inputDirection.Down, inputDirection.Up, inputDirection.Right], sound: "", voice: "", colour: "blue", deployType: "drop-pod", type: "Mission", subType: ""},
    {name: "Hellbomb", icon: "", code: [inputDirection.Down, inputDirection.Up, inputDirection.Left, inputDirection.Down, inputDirection.Up, inputDirection.Right, inputDirection.Down, inputDirection.Up], sound: "", voice: "", colour: "red", deployType: "drop-pod", type: "Mission", subType: ""},
    {name: "SSSD Delivery", icon: "", code: [inputDirection.Down, inputDirection.Down, inputDirection.Down, inputDirection.Up, inputDirection.Up], sound: "", voice: "", colour: "blue", deployType: "drop-pod", type: "Mission", subType: ""},
    {name: "Seismic Probe", icon: "", code: [inputDirection.Up, inputDirection.Up, inputDirection.Left, inputDirection.Right, inputDirection.Down, inputDirection.Down], sound: "", voice: "", colour: "blue", deployType: "skip", type: "Mission", subType: ""},
    {name: "Upload Data", icon: "", code: [inputDirection.Left, inputDirection.Right, inputDirection.Up, inputDirection.Up, inputDirection.Up], sound: "", voice: "", colour: "yellow", deployType: "skip", type: "Mission", subType: ""},
    {name: "Eagle Rearm", icon: "", code: [inputDirection.Up, inputDirection.Up, inputDirection.Left, inputDirection.Up, inputDirection.Right], sound: "", voice: "", colour: "yellow", deployType: "skip", type: "Mission", subType: ""},
    {name: "SEAF Artillery", icon: "", code: [inputDirection.Right, inputDirection.Up, inputDirection.Up, inputDirection.Down], sound: "", voice: "", colour: "blue", deployType: "beam-only", type: "Mission", subType: ""},
    {name: "Super Earth Flag", icon: "", code: [inputDirection.Down, inputDirection.Up, inputDirection.Down, inputDirection.Up], sound: "", voice: "", colour: "blue", deployType: "beam-only", type: "Mission", subType: ""},

    {name: "HMG Emplacement", icon: "", code: [inputDirection.Down, inputDirection.Up, inputDirection.Left, inputDirection.Right, inputDirection.Right, inputDirection.Left], sound: "", voice: "", colour: "blue", deployType: "drop-pod", type: "Defensive", subType: ""},
    {name: "Shield Generator Relay", icon: "", code: [inputDirection.Down, inputDirection.Down, inputDirection.Left, inputDirection.Right, inputDirection.Left, inputDirection.Right], sound: "", voice: "", colour: "blue", deployType: "drop-pod", type: "Defensive", subType: ""},
    {name: "Tesla Tower", icon: "", code: [inputDirection.Down, inputDirection.Up, inputDirection.Right, inputDirection.Up, inputDirection.Left, inputDirection.Right], sound: "", voice: "", colour: "blue", deployType: "drop-pod", type: "Defensive", subType: ""},
    {name: "Anti-Personnel Minefield", icon: "", code: [inputDirection.Down, inputDirection.Left, inputDirection.Up, inputDirection.Right], sound: "", voice: "", colour: "red", deployType: "drop-pod", type: "Defensive", subType: ""},
    {name: "Incendiary Mines", icon: "", code: [inputDirection.Down, inputDirection.Left, inputDirection.Left, inputDirection.Down], sound: "", voice: "", colour: "red", deployType: "drop-pod", type: "Defensive", subType: ""},
    {name: "Machine Gun Sentry", icon: "", code: [inputDirection.Down, inputDirection.Up, inputDirection.Right, inputDirection.Right, inputDirection.Up], sound: "", voice: "", colour: "blue", deployType: "drop-pod", type: "Defensive", subType: ""},
    {name: "Gatling Sentry", icon: "", code: [inputDirection.Down, inputDirection.Up, inputDirection.Right, inputDirection.Left], sound: "", voice: "", colour: "blue", deployType: "drop-pod", type: "Defensive", subType: ""},
    {name: "Mortar Sentry", icon: "", code: [inputDirection.Down, inputDirection.Up, inputDirection.Right, inputDirection.Right, inputDirection.Down], sound: "", voice: "", colour: "blue", deployType: "drop-pod", type: "Defensive", subType: ""},
    {name: "Autocannon Sentry", icon: "", code: [inputDirection.Down, inputDirection.Up, inputDirection.Right, inputDirection.Up, inputDirection.Left, inputDirection.Up], sound: "", voice: "", colour: "blue", deployType: "drop-pod", type: "Defensive", subType: ""},
    {name: "Rocket Sentry", icon: "", code: [inputDirection.Down, inputDirection.Up, inputDirection.Right, inputDirection.Right, inputDirection.Left], sound: "", voice: "", colour: "blue", deployType: "drop-pod", type: "Defensive", subType: ""},
    {name: "Mortar Sentry", icon: "", code: [inputDirection.Down, inputDirection.Up, inputDirection.Right, inputDirection.Down, inputDirection.Right], sound: "", voice: "", colour: "blue", deployType: "drop-pod", type: "Defensive", subType: ""},

    {name: "Orbital Gatling Barrage", icon: "", code: [inputDirection.Right, inputDirection.Down, inputDirection.Left, inputDirection.Up, inputDirection.Up], sound: "", voice: "", colour: "red", deployType: "beam-only", type: "Offensive", subType: "Orbital"},
    {name: "Orbital Airburst Strike", icon: "", code: [inputDirection.Right, inputDirection.Right, inputDirection.Right], sound: "", voice: "", colour: "red", deployType: "beam-only", type: "Offensive", subType: "Orbital"},
    {name: "Orbital 120MM HE Barrage", icon: "", code: [inputDirection.Right, inputDirection.Right, inputDirection.Down, inputDirection.Left, inputDirection.Right, inputDirection.Down], sound: "", voice: "", colour: "red", deployType: "beam-only", type: "Offensive", subType: "Orbital"},
    {name: "Orbital 380MM HE Barrage", icon: "", code: [inputDirection.Right, inputDirection.Down, inputDirection.Up, inputDirection.Up, inputDirection.Left, inputDirection.Down, inputDirection.Down], sound: "", voice: "", colour: "red", deployType: "beam-only", type: "Offensive", subType: "Orbital"},
    {name: "Orbital Walking Barrage", icon: "", code: [inputDirection.Right, inputDirection.Down, inputDirection.Right, inputDirection.Down, inputDirection.Right, inputDirection.Down], sound: "", voice: "", colour: "red", deployType: "beam-only", type: "Offensive", subType: "Orbital"},
    {name: "Orbital Laser", icon: "", code: [inputDirection.Right, inputDirection.Down, inputDirection.Up, inputDirection.Right, inputDirection.Down], sound: "", voice: "", colour: "red", deployType: "beam-only", type: "Offensive", subType: "Orbital"},
    {name: "Orbital Railcannon Strike", icon: "", code: [inputDirection.Right, inputDirection.Up, inputDirection.Down, inputDirection.Down, inputDirection.Right], sound: "", voice: "", colour: "red", deployType: "beam-only", type: "Offensive", subType: "Orbital"},
    {name: "Orbital Precision Strike", icon: "", code: [inputDirection.Right, inputDirection.Right, inputDirection.Up], sound: "", voice: "", colour: "red", deployType: "beam-only", type: "Offensive", subType: "Orbital"},
    {name: "Orbital Gas Strike", icon: "", code: [inputDirection.Right, inputDirection.Right, inputDirection.Down, inputDirection.Right], sound: "", voice: "", colour: "red", deployType: "beam-only", type: "Offensive", subType: "Orbital"},
    {name: "Orbital EMS Strike", icon: "", code: [inputDirection.Right, inputDirection.Right, inputDirection.Left, inputDirection.Down], sound: "", voice: "", colour: "red", deployType: "beam-only", type: "Offensive", subType: "Orbital"},
    {name: "Orbital Smoke Strike", icon: "", code: [inputDirection.Right, inputDirection.Right, inputDirection.Down, inputDirection.Up], sound: "", voice: "", colour: "red", deployType: "beam-only", type: "Offensive", subType: "Orbital"},

    {name: "Strafing Run", icon: "", code: [inputDirection.Up, inputDirection.Right, inputDirection.Right], sound: "", voice: "", colour: "red", deployType: "beam-only", type: "Offensive", subType: "Eagle"},
    {name: "Airstrike", icon: "", code: [inputDirection.Up, inputDirection.Right, inputDirection.Down, inputDirection.Right], sound: "", voice: "", colour: "red", deployType: "beam-only", type: "Offensive", subType: "Eagle"},
    {name: "Cluster Bomb", icon: "", code: [inputDirection.Up, inputDirection.Right, inputDirection.Down, inputDirection.Down, inputDirection.Right], sound: "", voice: "", colour: "red", deployType: "beam-only", type: "Offensive", subType: "Eagle"},
    {name: "Napalm Airstrike", icon: "", code: [inputDirection.Up, inputDirection.Right, inputDirection.Down, inputDirection.Up], sound: "", voice: "", colour: "red", deployType: "beam-only", type: "Offensive", subType: "Eagle"},
    {name: "Smoke Strike", icon: "", code: [inputDirection.Up, inputDirection.Right, inputDirection.Up, inputDirection.Down], sound: "", voice: "", colour: "red", deployType: "beam-only", type: "Offensive", subType: "Eagle"},
    {name: "Rocket Pods", icon: "", code: [inputDirection.Up, inputDirection.Right, inputDirection.Up, inputDirection.Left], sound: "", voice: "", colour: "red", deployType: "beam-only", type: "Offensive", subType: "Eagle"},
    {name: "500KG Bomb", icon: "", code: [inputDirection.Up, inputDirection.Right, inputDirection.Down, inputDirection.Down, inputDirection.Down], sound: "", voice: "", colour: "red", deployType: "beam-only", type: "Offensive", subType: "Eagle"},
];