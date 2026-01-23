/** Chunk was on 52081 **/
/** chunk id: 754487, original params: e,t,n (module,exports,require) **/
n.d(t, {
    openCreateGuildModal: () => _,
    updateCreateGuildModal: () => p
});
var r = n(627968);
n(64700);
var o = n(397927),
    l = n(894778),
    i = n(954571),
    a = n(396777),
    s = n(819638),
    c = n(652215),
    u = n(315290);

function d(e, t, n, o) {
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
            l.A.flowStep(u.do.CREATE_GUILD, u.jC.SUCCESS), e.onClose(), null == o || o(t)
        },
        onSlideChange: e => (function(e, t) {
            switch (e) {
                case s.oS.GUILD_TEMPLATES:
                    l.A.flowStepOrStart(u.do.CREATE_GUILD, u.jC.GUILD_TEMPLATES), i.default.track(c.HAw.OPEN_MODAL, {
                        type: "Create Guild Templates",
                        location: t
                    });
                    break;
                case s.oS.CUSTOMIZE_GUILD:
                    l.A.flowStep(u.do.CREATE_GUILD, u.jC.GUILD_CREATE), i.default.track(c.HAw.OPEN_MODAL, {
                        type: "Create Guild Step 2",
                        location: t
                    });
                    break;
                case s.oS.CREATION_INTENT:
                    i.default.track(c.HAw.OPEN_MODAL, {
                        type: "Server Intent Discovery",
                        location: t
                    });
                    break;
                case s.oS.JOIN_GUILD:
                    l.A.flowStep(u.do.CREATE_GUILD, u.jC.JOIN_GUILD), i.default.track(c.HAw.OPEN_MODAL, {
                        type: "Join Guild",
                        location: t
                    })
            }
        })(e, n),
        initialSlide: t,
        hasJoinButton: !0
    }, e))
}
let _ = e => {
        let {
            initialSlide: t,
            location: n,
            onSuccess: r
        } = e;
        (0, o.qfG)(e => d(e, t, n, r), {
            modalKey: s.fc
        })
    },
    p = e => {
        let {
            slide: t,
            location: n
        } = e;
        (0, o.zbz)(s.fc, e => d(e, t, n))
    }