/** chunk id: 754487, original params: e,t,n (module,exports,require) **/
n.d(t, {
    openCreateGuildModal: () => d,
    updateCreateGuildModal: () => p
});
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(894778),
    o = n(954571),
    a = n(396777),
    s = n(819638),
    c = n(652215),
    u = n(315290);

function _(e, t, n, l) {
    return (0, r.jsx)(a.A, function(e) {
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
        onSuccess: t => {
            i.A.flowStep(u.do.CREATE_GUILD, u.jC.SUCCESS), e.onClose(), null == l || l(t)
        },
        onSlideChange: e => (function(e, t) {
            switch (e) {
                case s.oS.GUILD_TEMPLATES:
                    i.A.flowStepOrStart(u.do.CREATE_GUILD, u.jC.GUILD_TEMPLATES), o.default.track(c.HAw.OPEN_MODAL, {
                        type: "Create Guild Templates",
                        location: t
                    });
                    break;
                case s.oS.CUSTOMIZE_GUILD:
                    i.A.flowStep(u.do.CREATE_GUILD, u.jC.GUILD_CREATE), o.default.track(c.HAw.OPEN_MODAL, {
                        type: "Create Guild Step 2",
                        location: t
                    });
                    break;
                case s.oS.CREATION_INTENT:
                    o.default.track(c.HAw.OPEN_MODAL, {
                        type: "Server Intent Discovery",
                        location: t
                    });
                    break;
                case s.oS.JOIN_GUILD:
                    i.A.flowStep(u.do.CREATE_GUILD, u.jC.JOIN_GUILD), o.default.track(c.HAw.OPEN_MODAL, {
                        type: "Join Guild",
                        location: t
                    })
            }
        })(e, n),
        initialSlide: t,
        hasJoinButton: !0
    }, e))
}
let d = e => {
        let {
            initialSlide: t,
            location: n,
            onSuccess: r
        } = e;
        (0, l.qfG)(e => _(e, t, n, r), {
            modalKey: s.fc
        })
    },
    p = e => {
        let {
            slide: t,
            location: n
        } = e;
        (0, l.zbz)(s.fc, e => _(e, t, n))
    }