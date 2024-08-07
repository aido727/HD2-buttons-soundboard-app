import { inputDirection } from "./stratagem-inputs";

export interface stratagemCode {
    name: string
    icon: string
    code: inputDirection[]
    sound: string[]
    voice: string[][] // for all 4 voices
    colour: "red" | "blue" | "yellow"
    borderColour: "red" | "blue" | "yellow" | "green"
    deployType: "drop-pod" | "drop-pod-nolid" | "pelican" | "beam-only" | "skip" // "skip" is such as re-arming Eagle-1 or mission critical stratagems that just activate
    type: "" | "Supply" | "Mission" | "Defensive" | "Offensive"
    subType: "" | "General" | "Backpack" | "Support Weapon" | "Other" | "Orbital" | "Eagle"
}

export const genericStratagemCode: stratagemCode = {
    name: "Stratagem", icon: "", code: [], sound: [], voice: [[],[],[],[]], colour: "yellow", borderColour: "yellow", deployType: "beam-only", type: "", subType: ""}

export const stratagemCodes: stratagemCode[] = [
    /*audio to do*/{name: "Reinforce", icon: "reinforce", code: [inputDirection.Up, inputDirection.Down, inputDirection.Right, inputDirection.Left, inputDirection.Up], sound: [], voice: [/*required*/[],[],[],[]], colour: "blue", borderColour: "yellow", deployType: "drop-pod", type: "Mission", subType: "General"},
    /*audio to do*/{name: "SOS Beacon", icon: "sos", code: [inputDirection.Up, inputDirection.Down, inputDirection.Right, inputDirection.Up], sound: [], voice: [/*required*/[],[],[],[]], colour: "blue", borderColour: "yellow", deployType: "drop-pod", type: "Mission", subType: "General"},
    /*audio to do*/{name: "Resupply", icon: "resupply", code: [inputDirection.Down, inputDirection.Down, inputDirection.Up, inputDirection.Right], sound: [], voice: [/*required*/[],[],[],[]], colour: "blue", borderColour: "yellow", deployType: "drop-pod", type: "Mission", subType: "General"},
    /*audio to do*/{name: "Eagle Rearm", icon: "eagle-rearm", code: [inputDirection.Up, inputDirection.Up, inputDirection.Left, inputDirection.Up, inputDirection.Right], sound: [], voice: [/*required*/[],[],[],[]], colour: "yellow", borderColour: "yellow", deployType: "skip", type: "Mission", subType: "General"},
    /*audio to do*/{name: "SEAF Artillery", icon: "seaf-atrillery", code: [inputDirection.Right, inputDirection.Up, inputDirection.Up, inputDirection.Down], sound: [/*required*/], voice: [[],[],[],[]], colour: "blue", borderColour: "yellow", deployType: "beam-only", type: "Mission", subType: ""},
    /*audio to do*/{name: "Hellbomb", icon: "hellbomb", code: [inputDirection.Down, inputDirection.Up, inputDirection.Left, inputDirection.Down, inputDirection.Up, inputDirection.Right, inputDirection.Down, inputDirection.Up], sound: [], voice: [/*required*/[],[],[],[]], colour: "red", borderColour: "yellow", deployType: "drop-pod", type: "Mission", subType: ""},
    /*audio to do*/{name: "Upload Data", icon: "upload-data", code: [inputDirection.Left, inputDirection.Right, inputDirection.Up, inputDirection.Up, inputDirection.Up], sound: [], voice: [/*required*/[],[],[],[]], colour: "yellow", borderColour: "yellow", deployType: "skip", type: "Mission", subType: ""},
    /*audio to do*/{name: "Super Earth Flag", icon: "super-earth-flag", code: [inputDirection.Down, inputDirection.Up, inputDirection.Down, inputDirection.Up], sound: [/*required*/], voice: [[],[],[],[]], colour: "blue", borderColour: "yellow", deployType: "beam-only", type: "Mission", subType: ""},
    /*audio to do*/{name: "SSSD Delivery", icon: "sssd", code: [inputDirection.Down, inputDirection.Down, inputDirection.Down, inputDirection.Up, inputDirection.Up], sound: [], voice: [[],[],[],[]], colour: "blue", borderColour: "yellow", deployType: "drop-pod", type: "Mission", subType: ""},
    /*audio to do*/{name: "Seismic Probe", icon: "seismic-probe", code: [inputDirection.Up, inputDirection.Up, inputDirection.Left, inputDirection.Right, inputDirection.Down, inputDirection.Down], sound: [], voice: [[],[],[],[]], colour: "blue", borderColour: "yellow", deployType: "beam-only", type: "Mission", subType: ""},
    /*audio to do*/{name: "Prospecting Drill", icon: "prospecting-drill", code: [inputDirection.Down, inputDirection.Down, inputDirection.Left, inputDirection.Right, inputDirection.Down, inputDirection.Down], sound: [], voice: [[],[],[],[]], colour: "blue", borderColour: "yellow", deployType: "beam-only", type: "Mission", subType: ""},
    /*audio to do*/{name: "Orbital Illumination Flare", icon: "orbital-illumination-flare", code: [inputDirection.Right, inputDirection.Right, inputDirection.Left, inputDirection.Left], sound: [], voice: [[],[],[],[]], colour: "yellow", borderColour: "yellow", deployType: "skip", type: "Mission", subType: ""},
    /*audio to do*/{name: "Dark Fluid Vessel", icon: "tectonic-drill", code: [inputDirection.Up, inputDirection.Down, inputDirection.Up, inputDirection.Down, inputDirection.Up, inputDirection.Down], sound: [], voice: [[],[],[],[]], colour: "blue", borderColour: "yellow", deployType: "drop-pod", type: "Mission", subType: ""},
    /*audio to do*/{name: "Tectonic Drill", icon: "dark-fluid-vessel", code: [inputDirection.Up, inputDirection.Left, inputDirection.Right, inputDirection.Down, inputDirection.Up, inputDirection.Up], sound: [], voice: [[],[],[],[]], colour: "blue", borderColour: "yellow", deployType: "beam-only", type: "Mission", subType: ""},
    /*audio to do*/{name: "Hive Breaker Drill", icon: "hive-breaker-drill", code: [inputDirection.Left, inputDirection.Up, inputDirection.Down, inputDirection.Right, inputDirection.Down, inputDirection.Down], sound: [], voice: [[],[],[],[]], colour: "blue", borderColour: "yellow", deployType: "beam-only", type: "Mission", subType: ""},

    /*audio to do*/{name: "Orbital Gatling Barrage", icon: "orbital-gatling", code: [inputDirection.Right, inputDirection.Down, inputDirection.Left, inputDirection.Up, inputDirection.Up], sound: [/*required*/], voice: [[],[],[],[]], colour: "red", borderColour: "red", deployType: "beam-only", type: "Offensive", subType: "Orbital"},
    /*audio to do*/{name: "Orbital Airburst Strike", icon: "orbital-airburst", code: [inputDirection.Right, inputDirection.Right, inputDirection.Right], sound: [/*required*/], voice: [[],[],[],[]], colour: "red", borderColour: "red", deployType: "beam-only", type: "Offensive", subType: "Orbital"},
    /*audio to do*/{name: "Orbital 120MM HE Barrage", icon: "orbital-120mm", code: [inputDirection.Right, inputDirection.Right, inputDirection.Down, inputDirection.Left, inputDirection.Right, inputDirection.Down], sound: [/*required*/], voice: [[],[],[],[]], colour: "red", borderColour: "red", deployType: "beam-only", type: "Offensive", subType: "Orbital"},
    /*audio to do*/{name: "Orbital 380MM HE Barrage", icon: "orbital-380mm", code: [inputDirection.Right, inputDirection.Down, inputDirection.Up, inputDirection.Up, inputDirection.Left, inputDirection.Down, inputDirection.Down], sound: [/*required*/], voice: [[],[],[],[]], colour: "red", borderColour: "red", deployType: "beam-only", type: "Offensive", subType: "Orbital"},
    /*audio to do*/{name: "Orbital Walking Barrage", icon: "orbital-walking", code: [inputDirection.Right, inputDirection.Down, inputDirection.Right, inputDirection.Down, inputDirection.Right, inputDirection.Down], sound: [/*required*/], voice: [[],[],[],[]], colour: "red", borderColour: "red", deployType: "beam-only", type: "Offensive", subType: "Orbital"},
    /*audio to do*/{name: "Orbital Laser", icon: "orbital-laser", code: [inputDirection.Right, inputDirection.Down, inputDirection.Up, inputDirection.Right, inputDirection.Down], sound: [/*required*/], voice: [[],[],[],[]], colour: "red", borderColour: "red", deployType: "beam-only", type: "Offensive", subType: "Orbital"},
    /*audio to do*/{name: "Orbital Railcannon Strike", icon: "orbital-railcannon", code: [inputDirection.Right, inputDirection.Up, inputDirection.Down, inputDirection.Down, inputDirection.Right], sound: [/*required*/], voice: [[],[],[],[]], colour: "red", borderColour: "red", deployType: "beam-only", type: "Offensive", subType: "Orbital"},
    /*audio to do*/{name: "Orbital Precision Strike", icon: "orbital-precision", code: [inputDirection.Right, inputDirection.Right, inputDirection.Up], sound: [/*required*/], voice: [[],[],[],[]], colour: "red", borderColour: "red", deployType: "beam-only", type: "Offensive", subType: "Orbital"},
    /*audio to do*/{name: "Orbital Gas Strike", icon: "orbital-gas", code: [inputDirection.Right, inputDirection.Right, inputDirection.Down, inputDirection.Right], sound: [/*required*/], voice: [[],[],[],[]], colour: "red", borderColour: "red", deployType: "beam-only", type: "Offensive", subType: "Orbital"},
    /*audio to do*/{name: "Orbital EMS Strike", icon: "orbital-ems", code: [inputDirection.Right, inputDirection.Right, inputDirection.Left, inputDirection.Down], sound: [/*required*/], voice: [[],[],[],[]], colour: "red", borderColour: "red", deployType: "beam-only", type: "Offensive", subType: "Orbital"},
    /*audio to do*/{name: "Orbital Smoke Strike", icon: "orbital-smoke", code: [inputDirection.Right, inputDirection.Right, inputDirection.Down, inputDirection.Up], sound: [/*required*/], voice: [[],[],[],[]], colour: "red", borderColour: "red", deployType: "beam-only", type: "Offensive", subType: "Orbital"},

    /*audio to do*/{name: "Eagle Strafing Run", icon: "eagle-strafing-run", code: [inputDirection.Up, inputDirection.Right, inputDirection.Right], sound: [/*required*/], voice: [/*required*/[],[],[],[]], colour: "red", borderColour: "red", deployType: "beam-only", type: "Offensive", subType: "Eagle"},
    /*audio to do*/{name: "Eagle Airstrike", icon: "eagle-airstrike", code: [inputDirection.Up, inputDirection.Right, inputDirection.Down, inputDirection.Right], sound: [/*required*/], voice: [/*required*/[],[],[],[]], colour: "red", borderColour: "red", deployType: "beam-only", type: "Offensive", subType: "Eagle"},
    /*audio to do*/{name: "Eagle Cluster Bomb", icon: "eagle-cluster-bomb", code: [inputDirection.Up, inputDirection.Right, inputDirection.Down, inputDirection.Down, inputDirection.Right], sound: [/*required*/], voice: [/*required*/[],[],[],[]], colour: "red", borderColour: "red", deployType: "beam-only", type: "Offensive", subType: "Eagle"},
    /*audio to do*/{name: "Eagle Napalm Airstrike", icon: "eagle-napalm", code: [inputDirection.Up, inputDirection.Right, inputDirection.Down, inputDirection.Up], sound: [/*required*/], voice: [/*required*/[],[],[],[]], colour: "red", borderColour: "red", deployType: "beam-only", type: "Offensive", subType: "Eagle"},
    /*audio to do*/{name: "Eagle Smoke Strike", icon: "eagle-smoke", code: [inputDirection.Up, inputDirection.Right, inputDirection.Up, inputDirection.Down], sound: [/*required*/], voice: [/*required*/[],[],[],[]], colour: "red", borderColour: "red", deployType: "beam-only", type: "Offensive", subType: "Eagle"},
    /*audio to do*/{name: "Eagle 110MM Rocket Pods", icon: "eagle-rocket-pods", code: [inputDirection.Up, inputDirection.Right, inputDirection.Up, inputDirection.Left], sound: [/*required*/], voice: [/*required*/[],[],[],[]], colour: "red", borderColour: "red", deployType: "beam-only", type: "Offensive", subType: "Eagle"},
    /*audio to do*/{name: "Eagle 500KG Bomb", icon: "eagle-500kg", code: [inputDirection.Up, inputDirection.Right, inputDirection.Down, inputDirection.Down, inputDirection.Down], sound: [/*required*/], voice: [/*required*/[],[],[],[]], colour: "red", borderColour: "red", deployType: "beam-only", type: "Offensive", subType: "Eagle"},
    
    /*voice to do*/{name: "Patriot Exosuit", icon: "patriot-exosuit", code: [inputDirection.Left, inputDirection.Down, inputDirection.Right, inputDirection.Up, inputDirection.Left, inputDirection.Down, inputDirection.Down], sound: [], voice: [/*required*/[],[],[],[]], colour: "blue", borderColour: "blue", deployType: 'pelican', type: "Supply", subType: "Other"},
    /*voice to do*/{name: "Emancipator Exosuit", icon: "emancipator-exosuit", code: [inputDirection.Left, inputDirection.Down, inputDirection.Right, inputDirection.Up, inputDirection.Left, inputDirection.Down, inputDirection.Up], sound: [], voice: [/*required*/[],[],[],[]], colour: "blue", borderColour: "blue", deployType: 'pelican', type: "Supply", subType: "Other"},

    /*voice to do*/{name: "Jump Pack", icon: "jump-pack", code: [inputDirection.Down, inputDirection.Up, inputDirection.Up, inputDirection.Down, inputDirection.Up], sound: [], voice: [[],[],[],[]], colour: "blue", borderColour: "blue", deployType: "drop-pod", type: "Supply", subType: "Backpack"},
    /*voice to do*/{name: "Supply Pack", icon: "supply-pack", code: [inputDirection.Down, inputDirection.Left, inputDirection.Down, inputDirection.Up, inputDirection.Up, inputDirection.Down], sound: [], voice: [[],[],[],[]], colour: "blue", borderColour: "blue", deployType: "drop-pod", type: "Supply", subType: "Backpack"},
    /*voice to do*/{name: '"Guard Dog" Rover', icon: "guard-dog-rover", code: [inputDirection.Down, inputDirection.Up, inputDirection.Left, inputDirection.Up, inputDirection.Right, inputDirection.Right], sound: [], voice: [[],[],[],[]], colour: "blue", borderColour: "blue", deployType: "drop-pod", type: "Supply", subType: "Backpack"},
    /*voice to do*/{name: "Ballistic Shield Backpack", icon: "ballistic-shield-backpack", code: [inputDirection.Down, inputDirection.Left, inputDirection.Down, inputDirection.Down, inputDirection.Up, inputDirection.Left], sound: [], voice: [[],[],[],[]], colour: "blue", borderColour: "blue", deployType: "drop-pod", type: "Supply", subType: "Backpack"},
    /*voice to do*/{name: "Shield Generator Pack", icon: "shield-generator-pack", code: [inputDirection.Down, inputDirection.Up, inputDirection.Left, inputDirection.Right, inputDirection.Left, inputDirection.Right], sound: [], voice: [[],[],[],[]], colour: "blue", borderColour: "blue", deployType: "drop-pod", type: "Supply", subType: "Backpack"},
    /*voice to do*/{name: '"Guard Dog"', icon: "guard-dog", code: [inputDirection.Down, inputDirection.Up, inputDirection.Left, inputDirection.Up, inputDirection.Right, inputDirection.Down], sound: [], voice: [[],[],[],[]], colour: "blue", borderColour: "blue", deployType: "drop-pod", type: "Supply", subType: "Backpack"},

    /*voice to do*/{name: "Machine Gun", icon: "machine-gun", code: [inputDirection.Down, inputDirection.Left, inputDirection.Down, inputDirection.Up, inputDirection.Right], sound: [], voice: [[],[],[],[]], colour: "blue", borderColour: "blue", deployType: "drop-pod", type: "Supply", subType: "Support Weapon"},
    /*voice to do*/{name: "Anti-Materiel Rifle", icon: "AM-rifle", code: [inputDirection.Down, inputDirection.Left, inputDirection.Right, inputDirection.Up, inputDirection.Down], sound: [], voice: [[],[],[],[]], colour: "blue", borderColour: "blue", deployType: "drop-pod", type: "Supply", subType: "Support Weapon"},
    /*voice to do*/{name: "Stalwart", icon: "stalwart", code: [inputDirection.Down, inputDirection.Left, inputDirection.Down, inputDirection.Up, inputDirection.Up, inputDirection.Left], sound: [], voice: [[],[],[],[]], colour: "blue", borderColour: "blue", deployType: "drop-pod", type: "Supply", subType: "Support Weapon"},
    /*voice to do*/{name: "Expendable Anti-tank", icon: "EAT", code: [inputDirection.Down, inputDirection.Down, inputDirection.Left, inputDirection.Up, inputDirection.Right], sound: [], voice: [[],[],[],[]], colour: "blue", borderColour: "blue", deployType: "drop-pod", type: "Supply", subType: "Support Weapon"},
    /*voice to do*/{name: "Recoilless Rifle", icon: "recoilless-rifle", code: [inputDirection.Down, inputDirection.Left, inputDirection.Right, inputDirection.Right, inputDirection.Left], sound: [], voice: [[],[],[],[]], colour: "blue", borderColour: "blue", deployType: "drop-pod", type: "Supply", subType: "Support Weapon"},
    /*voice to do*/{name: "Flamethrower", icon: "flamethrower", code: [inputDirection.Down, inputDirection.Left, inputDirection.Up, inputDirection.Down, inputDirection.Up], sound: [], voice: [[],[],[],[]], colour: "blue", borderColour: "blue", deployType: "drop-pod", type: "Supply", subType: "Support Weapon"},
    /*voice to do*/{name: "Autocannon", icon: "autocannon", code: [inputDirection.Down, inputDirection.Left, inputDirection.Down, inputDirection.Up, inputDirection.Up, inputDirection.Right], sound: [], voice: [[],[],[],[]], colour: "blue", borderColour: "blue", deployType: "drop-pod", type: "Supply", subType: "Support Weapon"},
    /*voice to do*/{name: "Heavy Machine Gun", icon: "heavy-mg", code: [inputDirection.Down, inputDirection.Left, inputDirection.Up, inputDirection.Down, inputDirection.Down], sound: [], voice: [[],[],[],[]], colour: "blue", borderColour: "blue", deployType: "drop-pod", type: "Supply", subType: "Support Weapon"},
    /*voice to do*/{name: "Airburst Rocket Launcher", icon: "airburst-launcher", code: [inputDirection.Down, inputDirection.Up, inputDirection.Up, inputDirection.Left, inputDirection.Right], sound: [], voice: [[],[],[],[]], colour: "blue", borderColour: "blue", deployType: "drop-pod", type: "Supply", subType: "Support Weapon"},
    /*voice to do*/{name: "Railgun", icon: "railgun", code: [inputDirection.Down, inputDirection.Right, inputDirection.Down, inputDirection.Up, inputDirection.Left, inputDirection.Right], sound: [], voice: [[],[],[],[]], colour: "blue", borderColour: "blue", deployType: "drop-pod", type: "Supply", subType: "Support Weapon"},
    /*voice to do*/{name: "Commando", icon: "commando", code: [inputDirection.Down, inputDirection.Left, inputDirection.Up, inputDirection.Down, inputDirection.Right], sound: [], voice: [[],[],[],[]], colour: "blue", borderColour: "blue", deployType: "drop-pod", type: "Supply", subType: "Support Weapon"},
    /*voice to do*/{name: "Spear", icon: "spear", code: [inputDirection.Down, inputDirection.Down, inputDirection.Up, inputDirection.Down, inputDirection.Down], sound: [], voice: [[],[],[],[]], colour: "blue", borderColour: "blue", deployType: "drop-pod", type: "Supply", subType: "Support Weapon"},
    /*voice to do*/{name: "Grenade Launcher", icon: "grenade-launcher", code: [inputDirection.Down, inputDirection.Left, inputDirection.Up, inputDirection.Left, inputDirection.Down], sound: [], voice: [[],[],[],[]], colour: "blue", borderColour: "blue", deployType: "drop-pod", type: "Supply", subType: "Support Weapon"},
    /*voice to do*/{name: "Laser Cannon", icon: "laser-cannon", code: [inputDirection.Down, inputDirection.Left, inputDirection.Down, inputDirection.Up, inputDirection.Left], sound: [], voice: [[],[],[],[]], colour: "blue", borderColour: "blue", deployType: "drop-pod", type: "Supply", subType: "Support Weapon"},
    /*voice to do*/{name: "Arc Thrower", icon: "arc-thrower", code: [inputDirection.Down, inputDirection.Right, inputDirection.Down, inputDirection.Up, inputDirection.Left, inputDirection.Left], sound: [], voice: [[],[],[],[]], colour: "blue", borderColour: "blue", deployType: "drop-pod", type: "Supply", subType: "Support Weapon"},
    /*voice to do*/{name: "Quasar Cannon", icon: "quasar-cannon", code: [inputDirection.Down, inputDirection.Down, inputDirection.Up, inputDirection.Left, inputDirection.Right], sound: [], voice: [[],[],[],[]], colour: "blue", borderColour: "blue", deployType: "drop-pod", type: "Supply", subType: "Support Weapon"},

    /*voice to do*/{name: "HMG Emplacement", icon: "hmg-emplacement", code: [inputDirection.Down, inputDirection.Up, inputDirection.Left, inputDirection.Right, inputDirection.Right, inputDirection.Left], sound: ['stratagem-defensive-hmgemplacement'], voice: [[],[],[],[]], colour: "blue", borderColour: "green", deployType: "drop-pod-nolid", type: "Defensive", subType: ""},
    /*voice to do*/{name: "Shield Generator Relay", icon: "shield-relay", code: [inputDirection.Down, inputDirection.Down, inputDirection.Left, inputDirection.Right, inputDirection.Left, inputDirection.Right], sound: ['stratagem-defensive-shieldrelay'], voice: [[],[],[],[]], colour: "blue", borderColour: "green", deployType: "drop-pod-nolid", type: "Defensive", subType: ""},
    /*voice to do*/{name: "Tesla Tower", icon: "tesla-tower", code: [inputDirection.Down, inputDirection.Up, inputDirection.Right, inputDirection.Up, inputDirection.Left, inputDirection.Right], sound: ['stratagem-defensive-teslatower'], voice: [[],[],[],[]], colour: "blue", borderColour: "green", deployType: "drop-pod-nolid", type: "Defensive", subType: ""},
    /*voice to do*/{name: "Anti-Personnel Minefield", icon: "anti-personnel-minefield", code: [inputDirection.Down, inputDirection.Left, inputDirection.Up, inputDirection.Right], sound: ['stratagem-defensive-mines'], voice: [[],[],[],[]], colour: "red", borderColour: "green", deployType: "drop-pod-nolid", type: "Defensive", subType: ""},
    /*voice to do*/{name: "Incendiary Mines", icon: "incendiary-mines", code: [inputDirection.Down, inputDirection.Left, inputDirection.Left, inputDirection.Down], sound: ['stratagem-defensive-mines'], voice: [[],[],[],[]], colour: "red", borderColour: "green", deployType: "drop-pod-nolid", type: "Defensive", subType: ""},
    /*voice to do*/{name: "Anti-Tank Mines", icon: "anti-tank-mines", code: [inputDirection.Down, inputDirection.Left, inputDirection.Up, inputDirection.Up], sound: ['stratagem-defensive-mines'], voice: [[],[],[],[]], colour: "red", borderColour: "green", deployType: "drop-pod-nolid", type: "Defensive", subType: ""},
    /*voice to do*/{name: "Machine Gun Sentry", icon: "mg-sentry", code: [inputDirection.Down, inputDirection.Up, inputDirection.Right, inputDirection.Right, inputDirection.Up], sound: ['stratagem-defensive-machinegunsentry'], voice: [[],[],[],[]], colour: "blue", borderColour: "green", deployType: "drop-pod-nolid", type: "Defensive", subType: ""},
    /*voice to do*/{name: "Gatling Sentry", icon: "gatling-sentry", code: [inputDirection.Down, inputDirection.Up, inputDirection.Right, inputDirection.Left], sound: ['stratagem-defensive-gatlingsentry'], voice: [[],[],[],[]], colour: "blue", borderColour: "green", deployType: "drop-pod-nolid", type: "Defensive", subType: ""},
    /*voice to do*/{name: "Mortar Sentry", icon: "mortar-sentry", code: [inputDirection.Down, inputDirection.Up, inputDirection.Right, inputDirection.Right, inputDirection.Down], sound: ['stratagem-defensive-mortar'], voice: [[],[],[],[]], colour: "blue", borderColour: "green", deployType: "drop-pod-nolid", type: "Defensive", subType: ""},
    /*voice to do*/{name: "Autocannon Sentry", icon: "autocannon-sentry", code: [inputDirection.Down, inputDirection.Up, inputDirection.Right, inputDirection.Up, inputDirection.Left, inputDirection.Up], sound: ['stratagem-defensive-autocannonsentry'], voice: [[],[],[],[]], colour: "blue", borderColour: "green", deployType: "drop-pod-nolid", type: "Defensive", subType: ""},
    /*voice to do*/{name: "Rocket Sentry", icon: "rocket-sentry", code: [inputDirection.Down, inputDirection.Up, inputDirection.Right, inputDirection.Right, inputDirection.Left], sound: ['stratagem-defensive-rocketsentry'], voice: [[],[],[],[]], colour: "blue", borderColour: "green", deployType: "drop-pod-nolid", type: "Defensive", subType: ""},
    /*voice to do*/{name: "EMS Mortar Sentry", icon: "ems-mortar-sentry", code: [inputDirection.Down, inputDirection.Up, inputDirection.Right, inputDirection.Down, inputDirection.Right], sound: ['stratagem-defensive-emsmortar'], voice: [[],[],[],[]], colour: "blue", borderColour: "green", deployType: "drop-pod-nolid", type: "Defensive", subType: ""},
];