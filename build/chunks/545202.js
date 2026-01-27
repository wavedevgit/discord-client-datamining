/** Chunk was on 60667 **/
/** chunk id: 545202, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(827343),
    o = n(688810),
    c = n(430452),
    d = n(77735),
    u = n(509381),
    _ = n(985018),
    p = n(473169);

function m() {
    let {
        analyticsLocations: e
    } = (0, o.Ay)(), t = (0, l.bG)([c.A], () => c.A.getActiveInputProfile()), {
        enabledInputProfiles: n
    } = (0, d.d)({
        location: "UserSettingsInputProfile"
    }), m = i.useCallback(t => {
        let {
            value: n
        } = t;
        a.A.setActiveInputProfile(n, {
            analyticsLocations: e
        })
    }, [e]), g = [{
        value: u.my.VOICE_ISOLATION,
        name: _.intl.string(_.t.cjPbpT),
        desc: _.intl.string(_.t.CzhvnE)
    }, {
        value: u.my.STUDIO,
        name: _.intl.string(_.t.VZPR0R),
        desc: _.intl.string(_.t.ZaJksS)
    }, {
        value: u.my.CUSTOM,
        name: _.intl.string(_.t["N/PQjv"]),
        desc: _.intl.string(_.t.SnBmuY)
    }].filter(e => {
        let {
            value: t
        } = e;
        return n.includes(t)
    });
    return (0, r.jsx)("div", {
        className: p.SX,
        children: (0, r.jsx)(s.z6M, {
            label: _.intl.string(_.t.LM3U3k),
            onChange: e => m({
                value: e
            }),
            options: g,
            value: null != t ? t : u.my.CUSTOM
        })
    })
}