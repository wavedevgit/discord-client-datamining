/** Chunk was on 36290 **/
/** chunk id: 381616, original params: e,t,r (module,exports,require) **/
let i;
r.d(t, {
    A: () => u
}), r(896048), r(321073);
var n, o = r(311907),
    a = r(73153);

function s(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}
let l = {
        guildNoticeDismissed: []
    },
    c = new Map,
    d = new Set;
class _ extends(n = o.Ay.PersistedStore) {
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
        i = e
    }
    getState() {
        return i
    }
    shouldShowChannelNotice(e) {
        var t, r;
        return !i.guildNoticeDismissed.includes(e) && (null != (t = null == (r = c.get(e)) ? void 0 : r.size) ? t : 0) > 0
    }
    canShowOverviewTooltip(e, t) {
        var r;
        return (null == (r = c.get(e)) ? void 0 : r.has(t)) === !0
    }
    canShowToggleTooltip(e) {
        return d.has(e)
    }
}
s(_, "displayName", "CommandsMigrationStore"), s(_, "persistKey", "CommandsMigrationStore");
let u = new _(a.h, {
    COMMANDS_MIGRATION_UPDATE_SUCCESS: function(e) {
        let {
            guildId: t,
            integrationIdsWithAppCommands: r
        } = e;
        return c.set(t, new Set(r)), !0
    },
    COMMANDS_MIGRATION_NOTICE_DISMISSED: function(e) {
        let {
            guildId: t
        } = e;
        i.guildNoticeDismissed.push(t)
    },
    COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED: function(e) {
        var t;
        let {
            guildId: r,
            integrationId: i
        } = e;
        null == (t = c.get(r)) || t.clear(), d.add(i)
    },
    COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED: function(e) {
        let {
            integrationId: t
        } = e;
        d.delete(t)
    }
})