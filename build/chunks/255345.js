/** chunk id: 255345 params = (module,exports,require) **/
n.d(t, {
    I3: () => r
});
var i = n(64700),
    a = n(811024),
    l = n(550151),
    s = n(985018);

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
            text: o ? s.intl.string(s.t.RscU7I) : s.intl.string(s.t.sqe0hj),
            tooltip: void 0
        }, c = (0, a.pE)(r);
        if (null != t && null != i && t.launchId === i.launchId) return {
            ...d,
            disabled: !0,
            text: s.intl.string(s.t.DPfdsq),
            tooltip: void 0
        };
        if (o) return {
            ...d,
            disabled: !c,
            tooltip: c ? void 0 : s.intl.string(s.t.f41E1g)
        };
        if (null != n && n !== l.Gy.CAN_JOIN) {
            let e;
            switch (n) {
                case l.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                    e = s.intl.string(s.t.hHGrWz);
                    break;
                case l.Gy.ACTIVITY_AGE_GATED:
                    e = s.intl.string(s.t["4WuFRE"]);
                    break;
                case l.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                    e = s.intl.string(s.t.uGDCcw);
                    break;
                case l.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
                    e = s.intl.string(s.t.UXoQTp);
                    break;
                case l.Gy.CHANNEL_FULL:
                    e = s.intl.string(s.t.rZfiNq);
                    break;
                case l.Gy.NO_CHANNEL_CONNECT_PERMISSION:
                    e = s.intl.string(s.t.w5SAps);
                    break;
                case l.Gy.NO_CHANNEL:
                case l.Gy.NO_GUILD:
                case l.Gy.NO_USER:
                case l.Gy.IS_AFK_CHANNEL:
                    e = s.intl.string(s.t.Etp6uI)
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