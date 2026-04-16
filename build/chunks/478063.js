/** chunk id: 478063 params = (module,exports,require) **/
a.d(t, {
    A: () => b
});
var s = a(627968),
    n = a(64700),
    i = a(503698),
    l = a.n(i),
    r = a(97808),
    c = a(863610),
    o = a(397927),
    d = a(573435);
a(883392);
var _ = a(989822);
let h = {},
    u = 1 / 4;

function A(e) {
    let {
        height: t,
        fillColor: a
    } = e;
    return (0, s.jsx)("div", {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: t / 2,
            backgroundColor: a,
            height: t,
            width: 2.5 * t
        },
        children: (0, s.jsx)(c.n, {
            className: _.r$,
            dotRadius: t * u
        })
    })
}

function m(e) {
    let {
        isTyping: t,
        statusCoords: a,
        status: n
    } = e, i = (0, o.S31)(o.clD.ONLINE);
    return t ? (0, s.jsx)("div", {
        style: {
            position: "absolute",
            top: a.y,
            left: a.x
        },
        children: (0, s.jsx)(A, {
            height: a.height,
            fillColor: i
        })
    }) : null != n ? (0, s.jsx)(o.nW6, {
        size: a.height,
        status: n,
        style: {
            position: "absolute",
            top: a.y,
            left: a.x
        }
    }) : null
}

function p(e) {
    let {
        src: t,
        size: a
    } = e;
    return (0, s.jsx)("img", {
        className: _.tM,
        src: t,
        alt: "",
        width: a,
        height: a
    })
}
let I = {
        [o._3J.SIZE_16]: {
            default: d.hW.DIAGONAL_FACEPILE_16,
            typing: d.hW.DIAGONAL_FACEPILE_TYPING_16,
            status: d.hW.DIAGONAL_FACEPILE_STATUS_16,
            back: d.hW.DIAGONAL_FACEPILE_BACK_16
        },
        [o._3J.SIZE_20]: {
            default: d.hW.DIAGONAL_FACEPILE_20,
            typing: d.hW.DIAGONAL_FACEPILE_TYPING_20,
            status: d.hW.DIAGONAL_FACEPILE_STATUS_20,
            back: d.hW.DIAGONAL_FACEPILE_BACK_20
        },
        [o._3J.SIZE_24]: {
            default: d.hW.DIAGONAL_FACEPILE_24,
            typing: d.hW.DIAGONAL_FACEPILE_TYPING_24,
            status: d.hW.DIAGONAL_FACEPILE_STATUS_24,
            back: d.hW.DIAGONAL_FACEPILE_BACK_24
        },
        [o._3J.SIZE_32]: {
            default: d.hW.DIAGONAL_FACEPILE_32,
            typing: d.hW.DIAGONAL_FACEPILE_TYPING_32,
            status: d.hW.DIAGONAL_FACEPILE_STATUS_32,
            back: d.hW.DIAGONAL_FACEPILE_BACK_32
        },
        [o._3J.SIZE_40]: {
            default: d.hW.DIAGONAL_FACEPILE_32,
            typing: d.hW.DIAGONAL_FACEPILE_TYPING_32,
            status: d.hW.DIAGONAL_FACEPILE_STATUS_32,
            back: d.hW.DIAGONAL_FACEPILE_BACK_32
        },
        [o._3J.SIZE_48]: {
            default: d.hW.DIAGONAL_FACEPILE_40,
            typing: d.hW.DIAGONAL_FACEPILE_TYPING_40,
            status: d.hW.DIAGONAL_FACEPILE_STATUS_40,
            back: d.hW.DIAGONAL_FACEPILE_BACK_40
        },
        [o._3J.SIZE_56]: {
            default: d.hW.DIAGONAL_FACEPILE_56,
            typing: d.hW.DIAGONAL_FACEPILE_TYPING_56,
            status: d.hW.DIAGONAL_FACEPILE_STATUS_56,
            back: d.hW.DIAGONAL_FACEPILE_BACK_56
        },
        [o._3J.SIZE_72]: {
            default: d.hW.DIAGONAL_FACEPILE_72,
            typing: d.hW.DIAGONAL_FACEPILE_TYPING_72,
            status: d.hW.DIAGONAL_FACEPILE_STATUS_72,
            back: d.hW.DIAGONAL_FACEPILE_BACK_72
        },
        [o._3J.SIZE_80]: {
            default: d.hW.DIAGONAL_FACEPILE_80,
            typing: d.hW.DIAGONAL_FACEPILE_TYPING_80,
            status: d.hW.DIAGONAL_FACEPILE_STATUS_80,
            back: d.hW.DIAGONAL_FACEPILE_BACK_80
        },
        [o._3J.SIZE_96]: {
            default: d.hW.DIAGONAL_FACEPILE_96,
            typing: d.hW.DIAGONAL_FACEPILE_TYPING_96,
            status: d.hW.DIAGONAL_FACEPILE_STATUS_96,
            back: d.hW.DIAGONAL_FACEPILE_BACK_96
        },
        [o._3J.SIZE_120]: {
            default: d.hW.DIAGONAL_FACEPILE_120,
            typing: d.hW.DIAGONAL_FACEPILE_TYPING_120,
            status: d.hW.DIAGONAL_FACEPILE_STATUS_120,
            back: d.hW.DIAGONAL_FACEPILE_BACK_120
        }
    },
    b = function(e) {
        var t;
        let {
            backSrc: a,
            frontSrc: i,
            size: c,
            isTyping: u,
            status: A,
            style: b,
            className: E,
            ...N
        } = e, {
            size: x
        } = o.vCh[c], {
            statusCoords: L,
            frontAvatarOffsetPx: g,
            frontAvatarSizePx: f,
            backAvatarSizePx: C
        } = n.useMemo(() => {
            let e, t, a, s, n, i = `${x}-${u}`;
            return h[i] ?? (a = +(t = (e = o.vCh[c]).size / 1.5), s = .5 * t, n = {
                statusCoords: (0, r.Rb)(e, o.clD.ONLINE, {
                    isTyping: u,
                    isMobile: !1,
                    isVR: !1
                }),
                frontAvatarSizePx: a,
                backAvatarSizePx: t,
                frontAvatarOffsetPx: s,
                frontAvatarCenter: s + a / 2
            }, h[i] = n, n)
        }, [x, u, c]), P = (t = null != A, u ? I[c].typing : t ? I[c].status : I[c].default), y = I[c].back;
        return (0, s.jsxs)("div", {
            style: {
                width: x,
                height: x,
                ...b
            },
            "aria-label": N["aria-label"],
            "aria-hidden": N["aria-hidden"],
            className: l()(_.kL, E),
            children: [(0, s.jsxs)(d.Ay, {
                mask: P,
                height: x,
                width: x,
                children: [(0, s.jsx)(d.Ay, {
                    mask: y,
                    height: x,
                    width: x,
                    children: (0, s.jsx)("img", {
                        src: a,
                        alt: "",
                        width: C,
                        height: C
                    })
                }), (0, s.jsx)("div", {
                    style: {
                        position: "absolute",
                        top: g,
                        left: g
                    },
                    children: (0, s.jsx)(p, {
                        src: i,
                        size: f,
                        isTyping: u,
                        status: A
                    })
                })]
            }), (0, s.jsx)(m, {
                statusCoords: L,
                status: A,
                isTyping: u
            })]
        })
    }