/** chunk id: 255345 params = (module,exports,require) **/
n.d(t, {
    I3: () => s
});
var i = n(64700),
    a = n(811024),
    r = n(550151),
    l = n(985018);

function s(e) {
    let {
        embeddedActivity: t,
        joinability: n,
        currentEmbeddedActivity: s,
        channel: o
    } = e;
    return i.useMemo(() => (function(e) {
        let {
            embeddedActivity: t,
            joinability: n,
            currentEmbeddedActivity: i,
            channel: s
        } = e, o = null == t, d = {
            disabled: !1,
            isJoinAction: !o,
            text: o ? l.intl.string(l.t.RscU7I) : l.intl.string(l.t.sqe0hj),
            tooltip: void 0
        }, c = (0, a.pE)(s);
        if (null != t && null != i && t.launchId === i.launchId) return {
            ...d,
            disabled: !0,
            text: l.intl.string(l.t.DPfdsq),
            tooltip: void 0
        };
        if (o) return {
            ...d,
            disabled: !c,
            tooltip: c ? void 0 : l.intl.string(l.t.f41E1g)
        };
        if (null != n && n !== r.Gy.CAN_JOIN) {
            let e;
            switch (n) {
                case r.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                    e = l.intl.string(l.t.hHGrWz);
                    break;
                case r.Gy.ACTIVITY_AGE_GATED:
                    e = l.intl.string(l.t["4WuFRE"]);
                    break;
                case r.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                    e = l.intl.string(l.t.uGDCcw);
                    break;
                case r.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
                    e = l.intl.string(l.t.UXoQTp);
                    break;
                case r.Gy.CHANNEL_FULL:
                    e = l.intl.string(l.t.rZfiNq);
                    break;
                case r.Gy.NO_CHANNEL_CONNECT_PERMISSION:
                    e = l.intl.string(l.t.w5SAps);
                    break;
                case r.Gy.NO_CHANNEL:
                case r.Gy.NO_GUILD:
                case r.Gy.NO_USER:
                case r.Gy.IS_AFK_CHANNEL:
                    e = l.intl.string(l.t.Etp6uI)
            }
            return {
                ...d,
                disabled: !0,
                tooltip: e
            }
        }
        return d
    })({
        embeddedActivity: t,
        joinability: n,
        currentEmbeddedActivity: s,
        channel: o
    }), [t, n, s, o])
}