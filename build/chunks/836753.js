/** Chunk was on 41727 **/
/** chunk id: 836753, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(73153),
    s = n(272355),
    a = n(960736),
    o = n(954571),
    c = n(972387),
    u = n(539895),
    d = n(652215);
let p = "INVITE_MODAL_KEY";
class h extends s.A {
    _initialize() {
        i.h.subscribe("INVITE_MODAL_OPEN", this.handleOpenModal), i.h.subscribe("INVITE_MODAL_CLOSE", this.handleCloseModal)
    }
    _terminate() {
        (0, l.OoC)(p), i.h.unsubscribe("INVITE_MODAL_OPEN", this.handleOpenModal), i.h.unsubscribe("INVITE_MODAL_CLOSE", this.handleCloseModal)
    }
    handleOpenModal(e) {
        let {
            context: t
        } = e;
        u.A.isOpen() && !(0, l.kBI)(p) && (0, l.mMO)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("83155"), n.e("57506")]).then(n.bind(n, 563038));
            return t => (0, r.jsx)(e, function(e) {
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
            }({}, t))
        }, {
            modalKey: p,
            contextKey: (0, l.TId)(t),
            onCloseRequest: () => {
                let e = (0, a.p9)(),
                    t = (0, a.xD)();
                o.default.track(d.HAw.INVITE_ACCEPT_DISMISSED, {
                    invite_code: e,
                    guild_id: t
                }), c.A.close()
            }
        })
    }
    handleCloseModal() {
        (0, l.OoC)(p)
    }
}
let f = new h