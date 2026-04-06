/** chunk id: 255345 params = (module,exports,require) **/
n.d(t, {
    I3: () => r
});
var i = n(64700),
    l = n(811024),
    s = n(550151),
    a = n(985018);

function r(e) {
    let {
        embeddedActivity: t,
        joinability: n,
        currentEmbeddedActivity: r,
        channel: o
    } = e;
    return i.useMemo(() => (function(e) {
        let {
            embeddedActivity: t,
            joinability: n,
            currentEmbeddedActivity: i,
            channel: r
        } = e, o = null == t, d = {
            disabled: !1,
            isJoinAction: !o,
            text: o ? a.intl.string(a.t.RscU7I) : a.intl.string(a.t.sqe0hj),
            tooltip: void 0
        }, c = (0, l.pE)(r);
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
        if (null != n && n !== s.Gy.CAN_JOIN) {
            let e;
            switch (n) {
                case s.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                    e = a.intl.string(a.t.hHGrWz);
                    break;
                case s.Gy.ACTIVITY_AGE_GATED:
                    e = a.intl.string(a.t["4WuFRE"]);
                    break;
                case s.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                    e = a.intl.string(a.t.uGDCcw);
                    break;
                case s.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
                    e = a.intl.string(a.t.UXoQTp);
                    break;
                case s.Gy.CHANNEL_FULL:
                    e = a.intl.string(a.t.rZfiNq);
                    break;
                case s.Gy.NO_CHANNEL_CONNECT_PERMISSION:
                    e = a.intl.string(a.t.w5SAps);
                    break;
                case s.Gy.NO_CHANNEL:
                case s.Gy.NO_GUILD:
                case s.Gy.NO_USER:
                case s.Gy.IS_AFK_CHANNEL:
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
        currentEmbeddedActivity: r,
        channel: o
    }), [t, n, r, o])
}