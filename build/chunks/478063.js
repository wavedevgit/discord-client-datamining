/** chunk id: 478063 params = (module,exports,require) **/
a.d(t, {
    A: () => I
});
var n = a(627968),
    i = a(64700),
    s = a(503698),
    r = a.n(s),
    l = a(97808),
    d = a(863610),
    _ = a(397927),
    o = a(573435);
a(883392);
var c = a(221585);
let h = {},
    u = 1 / 4;

function m(e) {
    let {
        height: t,
        fillColor: a
    } = e;
    return (0, n.jsx)("div", {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: t / 2,
            backgroundColor: a,
            height: t,
            width: 2.5 * t
        },
        children: (0, n.jsx)(d.n, {
            className: c.r$,
            dotRadius: t * u
        })
    })
}

function A(e) {
    let {
        isTyping: t,
        statusCoords: a,
        status: i
    } = e, s = (0, _.S31)(_.clD.ONLINE);
    return t ? (0, n.jsx)("div", {
        style: {
            position: "absolute",
            top: a.y,
            left: a.x
        },
        children: (0, n.jsx)(m, {
            height: a.height,
            fillColor: s
        })
    }) : null != i ? (0, n.jsx)(_.nW6, {
        size: a.height,
        status: i,
        style: {
            position: "absolute",
            top: a.y,
            left: a.x
        }
    }) : null
}

function b(e) {
    let {
        src: t,
        size: a
    } = e;
    return (0, n.jsx)("img", {
        className: c.tM,
        src: t,
        alt: "",
        width: a,
        height: a
    })
}
let p = {
        [_._3J.SIZE_16]: {
            default: o.hW.DIAGONAL_FACEPILE_16,
            typing: o.hW.DIAGONAL_FACEPILE_TYPING_16,
            status: o.hW.DIAGONAL_FACEPILE_STATUS_16,
            back: o.hW.DIAGONAL_FACEPILE_BACK_16
        },
        [_._3J.SIZE_20]: {
            default: o.hW.DIAGONAL_FACEPILE_20,
            typing: o.hW.DIAGONAL_FACEPILE_TYPING_20,
            status: o.hW.DIAGONAL_FACEPILE_STATUS_20,
            back: o.hW.DIAGONAL_FACEPILE_BACK_20
        },
        [_._3J.SIZE_24]: {
            default: o.hW.DIAGONAL_FACEPILE_24,
            typing: o.hW.DIAGONAL_FACEPILE_TYPING_24,
            status: o.hW.DIAGONAL_FACEPILE_STATUS_24,
            back: o.hW.DIAGONAL_FACEPILE_BACK_24
        },
        [_._3J.SIZE_32]: {
            default: o.hW.DIAGONAL_FACEPILE_32,
            typing: o.hW.DIAGONAL_FACEPILE_TYPING_32,
            status: o.hW.DIAGONAL_FACEPILE_STATUS_32,
            back: o.hW.DIAGONAL_FACEPILE_BACK_32
        },
        [_._3J.SIZE_40]: {
            default: o.hW.DIAGONAL_FACEPILE_32,
            typing: o.hW.DIAGONAL_FACEPILE_TYPING_32,
            status: o.hW.DIAGONAL_FACEPILE_STATUS_32,
            back: o.hW.DIAGONAL_FACEPILE_BACK_32
        },
        [_._3J.SIZE_48]: {
            default: o.hW.DIAGONAL_FACEPILE_40,
            typing: o.hW.DIAGONAL_FACEPILE_TYPING_40,
            status: o.hW.DIAGONAL_FACEPILE_STATUS_40,
            back: o.hW.DIAGONAL_FACEPILE_BACK_40
        },
        [_._3J.SIZE_56]: {
            default: o.hW.DIAGONAL_FACEPILE_56,
            typing: o.hW.DIAGONAL_FACEPILE_TYPING_56,
            status: o.hW.DIAGONAL_FACEPILE_STATUS_56,
            back: o.hW.DIAGONAL_FACEPILE_BACK_56
        },
        [_._3J.SIZE_72]: {
            default: o.hW.DIAGONAL_FACEPILE_72,
            typing: o.hW.DIAGONAL_FACEPILE_TYPING_72,
            status: o.hW.DIAGONAL_FACEPILE_STATUS_72,
            back: o.hW.DIAGONAL_FACEPILE_BACK_72
        },
        [_._3J.SIZE_80]: {
            default: o.hW.DIAGONAL_FACEPILE_80,
            typing: o.hW.DIAGONAL_FACEPILE_TYPING_80,
            status: o.hW.DIAGONAL_FACEPILE_STATUS_80,
            back: o.hW.DIAGONAL_FACEPILE_BACK_80
        },
        [_._3J.SIZE_96]: {
            default: o.hW.DIAGONAL_FACEPILE_96,
            typing: o.hW.DIAGONAL_FACEPILE_TYPING_96,
            status: o.hW.DIAGONAL_FACEPILE_STATUS_96,
            back: o.hW.DIAGONAL_FACEPILE_BACK_96
        },
        [_._3J.SIZE_120]: {
            default: o.hW.DIAGONAL_FACEPILE_120,
            typing: o.hW.DIAGONAL_FACEPILE_TYPING_120,
            status: o.hW.DIAGONAL_FACEPILE_STATUS_120,
            back: o.hW.DIAGONAL_FACEPILE_BACK_120
        }
    },
    I = function(e) {
        var t;
        let {
            backSrc: a,
            frontSrc: s,
            size: d,
            isTyping: u,
            status: m,
            style: I,
            className: E,
            ...g
        } = e, {
            size: N
        } = _.vCh[d], {
            statusCoords: x,
            frontAvatarOffsetPx: L,
            frontAvatarSizePx: f,
            backAvatarSizePx: C
        } = i.useMemo(() => {
            let e, t, a, n, i, s = `${N}-${u}`;
            return h[s] ?? (a = +(t = (e = _.vCh[d]).size / 1.5), n = .5 * t, i = {
                statusCoords: (0, l.Rb)(e, _.clD.ONLINE, {
                    isTyping: u,
                    isMobile: !1,
                    isVR: !1
                }),
                frontAvatarSizePx: a,
                backAvatarSizePx: t,
                frontAvatarOffsetPx: n,
                frontAvatarCenter: n + a / 2
            }, h[s] = i, i)
        }, [N, u, d]), y = (t = null != m, u ? p[d].typing : t ? p[d].status : p[d].default), P = p[d].back;
        return (0, n.jsxs)("div", {
            style: {
                width: N,
                height: N,
                ...I
            },
            "aria-label": g["aria-label"],
            "aria-hidden": g["aria-hidden"],
            className: r()(c.kL, E),
            children: [(0, n.jsxs)(o.Ay, {
                mask: y,
                height: N,
                width: N,
                children: [(0, n.jsx)(o.Ay, {
                    mask: P,
                    height: N,
                    width: N,
                    children: (0, n.jsx)("img", {
                        src: a,
                        alt: "",
                        width: C,
                        height: C
                    })
                }), (0, n.jsx)("div", {
                    style: {
                        position: "absolute",
                        top: L,
                        left: L
                    },
                    children: (0, n.jsx)(b, {
                        src: s,
                        size: f,
                        isTyping: u,
                        status: m
                    })
                })]
            }), (0, n.jsx)(A, {
                statusCoords: x,
                status: m,
                isTyping: u
            })]
        })
    }