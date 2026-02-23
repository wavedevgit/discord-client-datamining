/** chunk id: 255345, original params: e,t,n (module,exports,require) **/
n.d(t, {
    I3: () => s
});
var i = n(64700),
    l = n(811024),
    r = n(550151),
    a = n(985018);

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
            text: o ? a.intl.string(a.t.RscU7I) : a.intl.string(a.t.sqe0hj),
            tooltip: void 0
        }, c = (0, l.pE)(s);
        if (null != t && null != i && t.launchId === i.launchId) return {
            ...d,
            disabled: !0,
            text: a.intl.string(a.t.DPfdsq),
            tooltip: void 0
        };
        if (o) return {
            ...d,
            disabled: !c,
            tooltip: c ? void 0 : a.intl.string(a.t.f41E1g)
        };
        if (null != n && n !== r.Gy.CAN_JOIN) {
            let e;
            switch (n) {
                case r.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                    e = a.intl.string(a.t.hHGrWz);
                    break;
                case r.Gy.ACTIVITY_AGE_GATED:
                    e = a.intl.string(a.t["4WuFRE"]);
                    break;
                case r.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                    e = a.intl.string(a.t.uGDCcw);
                    break;
                case r.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
                    e = a.intl.string(a.t.UXoQTp);
                    break;
                case r.Gy.CHANNEL_FULL:
                    e = a.intl.string(a.t.rZfiNq);
                    break;
                case r.Gy.NO_CHANNEL_CONNECT_PERMISSION:
                    e = a.intl.string(a.t.w5SAps);
                    break;
                case r.Gy.NO_CHANNEL:
                case r.Gy.NO_GUILD:
                case r.Gy.NO_USER:
                case r.Gy.IS_AFK_CHANNEL:
                    e = a.intl.string(a.t.Etp6uI)
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