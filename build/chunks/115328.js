/** chunk id: 115328 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(311907),
    s = n(73153);
let r = {
        enable_recently_active: "Enable recently active channels",
        theme_setting_in_account_sheet: "Show theme settings in the Account action sheet",
        nav_experiment_server_drawer_enabled: "[NavI] Enable expandable server drawer",
        show_icymi_debug_scores: "Show ICYMI debug scores",
        channel_list_scrim: "Dim the channel list when chat appears",
        mana_radio_large_variant: "Larger Radio",
        mana_checkbox_large_variant: "Larger Checkbox",
        mana_switch_large_variant: "Larger Switch",
        mana_switch_show_icons: "Show icons on switches"
    },
    l = {};
class a extends i.Ay.DeviceSettingsStore {
    static displayName = "DevToolsDesignTogglesStore";
    static persistKey = "DevToolsDesignTogglesStore";
    getUserAgnosticState() {
        return {
            toggleStates: l
        }
    }
    initialize(e) {
        for (var t in r) {
            let n = e?.toggleStates?.[t] ?? !1;
            l[t] = n
        }
    }
    get(e) {
        return l[e] ?? !1
    }
    set(e, t) {
        return l[e] = t, t
    }
    all() {
        return l
    }
    allWithDescriptions() {
        return Object.entries(l).map(e => {
            let [t, n] = e;
            return [t, n, r[t]]
        })
    }
}
let d = new a(s.h, {
    DEV_TOOLS_DESIGN_TOGGLE_SET: function(e) {
        l[e.toggle] = e.value
    }
})