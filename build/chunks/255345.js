/** chunk id: 255345 params = (module,exports,require) **/
n.d(t, {
    I3: () => s
});
var i = n(64700),
    a = n(811024),
    l = n(550151),
    r = n(985018);

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
            text: o ? r.intl.string(r.t.RscU7I) : r.intl.string(r.t.sqe0hj),
            tooltip: void 0
        }, c = (0, a.pE)(s);
        if (null != t && null != i && t.launchId === i.launchId) return {
            ...d,
            disabled: !0,
            text: r.intl.string(r.t.DPfdsq),
            tooltip: void 0
        };
        if (o) return {
            ...d,
            disabled: !c,
            tooltip: c ? void 0 : r.intl.string(r.t.f41E1g)
        };
        if (null != n && n !== l.Gy.CAN_JOIN) {
            let e;
            switch (n) {
                case l.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                    e = r.intl.string(r.t.hHGrWz);
                    break;
                case l.Gy.ACTIVITY_AGE_GATED:
                    e = r.intl.string(r.t["4WuFRE"]);
                    break;
                case l.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                    e = r.intl.string(r.t.uGDCcw);
                    break;
                case l.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
                    e = r.intl.string(r.t.UXoQTp);
                    break;
                case l.Gy.CHANNEL_FULL:
                    e = r.intl.string(r.t.rZfiNq);
                    break;
                case l.Gy.NO_CHANNEL_CONNECT_PERMISSION:
                    e = r.intl.string(r.t.w5SAps);
                    break;
                case l.Gy.NO_CHANNEL:
                case l.Gy.NO_GUILD:
                case l.Gy.NO_USER:
                case l.Gy.IS_AFK_CHANNEL:
                    e = r.intl.string(r.t.Etp6uI)
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