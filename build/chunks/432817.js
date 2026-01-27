/** Chunk was on 77870 **/
/** chunk id: 432817, original params: e,t,n (module,exports,require) **/
n.d(t, {
    L: () => h
});
var r = n(627968),
    l = n(311907),
    i = n(732955),
    s = n(397927),
    a = n(824552),
    o = n(933958),
    c = n(869003),
    u = n(954571),
    d = n(652215),
    p = n(985018);
let h = e => {
    let {
        channel: t,
        user: n,
        application: h,
        oauth2Token: f
    } = e, g = (0, l.bG)([o.Ay], () => o.Ay.getSelfEmbeddedActivities());
    if (!n.bot || null == h) return null;

    function m() {
        a.A.delete(f.id);
        let e = g.get(h.id);
        null != e && c.A.leaveActivity({
            location: e.location,
            applicationId: h.id
        })
    }
    return (0, r.jsx)(s.Button, {
        variant: "secondary",
        size: "sm",
        text: p.intl.string(p.t["5S3sQF"]),
        onClick: () => {
            (0, s.qfG)(e => (0, r.jsx)(i.aFV, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r
                    })
                }
                return e
            }({
                title: p.intl.string(p.t["DT39A+"]),
                subtitle: p.intl.formatToPlainString(p.t.QWGvxA, {
                    applicationName: h.name
                }),
                actions: [{
                    text: p.intl.string(p.t["ETE/oC"]),
                    variant: "secondary",
                    onClick: e.onClose
                }, {
                    text: p.intl.string(p.t.xUqheM),
                    variant: "critical-primary",
                    onClick: () => {
                        m(), e.onClose()
                    }
                }]
            }, e))), u.default.track(d.HAw.APP_MANAGE_CTA_CLICKED, {
                application_id: h.id,
                channel_id: t.id,
                channel_type: t.type
            })
        }
    })
}