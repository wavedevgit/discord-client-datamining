/** Chunk was on 81890 **/
/** chunk id: 758384, original params: e,t,n (module,exports,require) **/
let a, i;
n.d(t, {
    A: () => N
}), n(896048), n(733351), n(747238);
var l = n(627968),
    s = n(64700),
    r = n(421380),
    o = n(397927),
    c = n(846293),
    d = n(198982),
    _ = n(235986),
    u = n(780964),
    p = n(840065),
    m = n(4274),
    f = n(652215),
    b = n(985018),
    E = n(988763);
let h = (a = window.GLOBAL_ENV.INVITE_HOST, i = "", null == a && (a = location.host, i = f.BVt.INVITE("")), "".concat(location.protocol, "//").concat(a).concat(i, "/"));

function N(e) {
    let {
        onBack: t,
        onComplete: n,
        onConnect: a,
        isSlideReady: i
    } = e, [N, A] = s.useState(""), [x, T] = s.useState(!1), [y, j] = s.useState(null), g = s.useRef(null);
    s.useEffect(() => {
        var e;
        i && (null == (e = g.current) || e.focus())
    }, [i]);
    let O = s.useCallback(e => {
        e.preventDefault();
        let t = N.trim();
        if ("" === t) return void j(b.intl.string(b.t.IRq5ah));
        j(null), T(!0);
        let a = t.split("/"),
            i = a[a.length - 1];
        c.Ay.resolveInvite(i, "Join Guild", {
            inputValue: t
        }).then(e => {
            let {
                invite: t
            } = e;
            if (T(!1), null == t) return void j(b.intl.string(b.t["GEYI+Z"]));
            if (null != t.channel) {
                let e = c.Ay.getInviteContext("Join Guild", t);
                c.Ay.acceptInvite({
                    inviteKey: t.code,
                    context: e,
                    callback: e => {
                        n(), c.Ay.transitionToInvite(e)
                    }
                }).catch(e => {
                    e instanceof d.Wl || e instanceof d.LG ? j((0, m.s)(e.code)) : j(b.intl.string(b.t.dDZRdy))
                })
            }
        }, e => {
            T(!1);
            let t = new d.Wl(e);
            j((0, m.s)(t.code))
        })
    }, [N, T, j, n]);
    return {
        content: (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsxs)(o.rQ0, {
                "data-migration-pending": !0,
                className: E.wx,
                direction: _.A.Direction.VERTICAL,
                separator: !1,
                children: [(0, l.jsx)(o.Heading, {
                    variant: "heading-xl/bold",
                    color: "text-strong",
                    className: E.DD,
                    children: b.intl.string(b.t.riOUtB)
                }), (0, l.jsx)(o.Text, {
                    variant: "text-md/normal",
                    color: "text-default",
                    children: b.intl.string(b.t["7jub2t"])
                })]
            }), (0, l.jsxs)(o.$mQ, {
                "data-migration-pending": !0,
                children: [(0, l.jsx)("form", {
                    onSubmit: O,
                    className: E.$j,
                    children: (0, l.jsx)(o.ksK, {
                        label: b.intl.string(b.t.qreV25),
                        error: y,
                        value: N,
                        onChange: A,
                        inputRef: g
                    })
                }), (0, l.jsx)(o.Text, {
                    color: "text-default",
                    variant: "text-xs/normal",
                    children: b.intl.format(b.t.lHTZl2, {
                        examples: "".concat(h).concat("wumpus-friends", ", ").concat("hTKzmak")
                    })
                }), (0, l.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    className: E.LR,
                    children: b.intl.format(b.t["8F/who"], {
                        onClick: () => {
                            a(), (0, p.openUserSettings)(u.X.CONNECTIONS_PANEL, {
                                section: f.nc_.CONNECTIONS
                            })
                        }
                    })
                })]
            })]
        }),
        footer: (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(o.Button, {
                variant: "primary",
                text: b.intl.string(b.t.VJlc0S),
                onClick: O,
                disabled: 0 === N.length,
                loading: x
            }), (0, l.jsx)(r.$n, {
                "data-migration-pending": !0,
                className: E.__invalid_skipButton,
                look: r.$n.Looks.BLANK,
                size: r.$n.Sizes.MIN,
                onClick: t,
                children: b.intl.string(b.t["13/7kX"])
            })]
        })
    }
}