/** chunk id: 478063 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var l = n(627968),
    a = n(64700),
    s = n(503698),
    i = n.n(s),
    r = n(97808),
    u = n(863610),
    o = n(397927),
    c = n(573435);
n(883392);
var A = n(989822);
let d = {},
    h = 1 / 4;

function _(e) {
    let {
        height: t,
        fillColor: n
    } = e;
    return (0, l.jsx)("div", {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: t / 2,
            backgroundColor: n,
            height: t,
            width: 2.5 * t
        },
        children: (0, l.jsx)(u.n, {
            className: A.r$,
            dotRadius: t * h
        })
    })
}

function I(e) {
    let {
        isTyping: t,
        statusCoords: n,
        status: a
    } = e, s = (0, o.S31)(o.clD.ONLINE);
    return t ? (0, l.jsx)("div", {
        style: {
            position: "absolute",
            top: n.y,
            left: n.x
        },
        children: (0, l.jsx)(_, {
            height: n.height,
            fillColor: s
        })
    }) : null != a ? (0, l.jsx)(o.nW6, {
        size: n.height,
        status: a,
        style: {
            position: "absolute",
            top: n.y,
            left: n.x
        }
    }) : null
}

function E(e) {
    let {
        src: t,
        size: n
    } = e;
    return (0, l.jsx)("img", {
        className: A.tM,
        src: t,
        alt: "",
        width: n,
        height: n
    })
}
let m = {
        [o._3J.SIZE_16]: {
            default: c.hW.DIAGONAL_FACEPILE_16,
            typing: c.hW.DIAGONAL_FACEPILE_TYPING_16,
            status: c.hW.DIAGONAL_FACEPILE_STATUS_16,
            back: c.hW.DIAGONAL_FACEPILE_BACK_16
        },
        [o._3J.SIZE_20]: {
            default: c.hW.DIAGONAL_FACEPILE_20,
            typing: c.hW.DIAGONAL_FACEPILE_TYPING_20,
            status: c.hW.DIAGONAL_FACEPILE_STATUS_20,
            back: c.hW.DIAGONAL_FACEPILE_BACK_20
        },
        [o._3J.SIZE_24]: {
            default: c.hW.DIAGONAL_FACEPILE_24,
            typing: c.hW.DIAGONAL_FACEPILE_TYPING_24,
            status: c.hW.DIAGONAL_FACEPILE_STATUS_24,
            back: c.hW.DIAGONAL_FACEPILE_BACK_24
        },
        [o._3J.SIZE_32]: {
            default: c.hW.DIAGONAL_FACEPILE_32,
            typing: c.hW.DIAGONAL_FACEPILE_TYPING_32,
            status: c.hW.DIAGONAL_FACEPILE_STATUS_32,
            back: c.hW.DIAGONAL_FACEPILE_BACK_32
        },
        [o._3J.SIZE_40]: {
            default: c.hW.DIAGONAL_FACEPILE_32,
            typing: c.hW.DIAGONAL_FACEPILE_TYPING_32,
            status: c.hW.DIAGONAL_FACEPILE_STATUS_32,
            back: c.hW.DIAGONAL_FACEPILE_BACK_32
        },
        [o._3J.SIZE_48]: {
            default: c.hW.DIAGONAL_FACEPILE_40,
            typing: c.hW.DIAGONAL_FACEPILE_TYPING_40,
            status: c.hW.DIAGONAL_FACEPILE_STATUS_40,
            back: c.hW.DIAGONAL_FACEPILE_BACK_40
        },
        [o._3J.SIZE_56]: {
            default: c.hW.DIAGONAL_FACEPILE_56,
            typing: c.hW.DIAGONAL_FACEPILE_TYPING_56,
            status: c.hW.DIAGONAL_FACEPILE_STATUS_56,
            back: c.hW.DIAGONAL_FACEPILE_BACK_56
        },
        [o._3J.SIZE_72]: {
            default: c.hW.DIAGONAL_FACEPILE_72,
            typing: c.hW.DIAGONAL_FACEPILE_TYPING_72,
            status: c.hW.DIAGONAL_FACEPILE_STATUS_72,
            back: c.hW.DIAGONAL_FACEPILE_BACK_72
        },
        [o._3J.SIZE_80]: {
            default: c.hW.DIAGONAL_FACEPILE_80,
            typing: c.hW.DIAGONAL_FACEPILE_TYPING_80,
            status: c.hW.DIAGONAL_FACEPILE_STATUS_80,
            back: c.hW.DIAGONAL_FACEPILE_BACK_80
        },
        [o._3J.SIZE_96]: {
            default: c.hW.DIAGONAL_FACEPILE_96,
            typing: c.hW.DIAGONAL_FACEPILE_TYPING_96,
            status: c.hW.DIAGONAL_FACEPILE_STATUS_96,
            back: c.hW.DIAGONAL_FACEPILE_BACK_96
        },
        [o._3J.SIZE_120]: {
            default: c.hW.DIAGONAL_FACEPILE_120,
            typing: c.hW.DIAGONAL_FACEPILE_TYPING_120,
            status: c.hW.DIAGONAL_FACEPILE_STATUS_120,
            back: c.hW.DIAGONAL_FACEPILE_BACK_120
        }
    },
    g = function(e) {
        var t;
        let {
            backSrc: n,
            frontSrc: s,
            size: u,
            isTyping: h,
            status: _,
            style: g,
            className: C,
            ...L
        } = e, {
            size: f
        } = o.vCh[u], {
            statusCoords: N,
            frontAvatarOffsetPx: x,
            frontAvatarSizePx: p,
            backAvatarSizePx: P
        } = a.useMemo(() => {
            let e, t, n, l, a, s = `${f}-${h}`;
            return d[s] ?? (n = +(t = (e = o.vCh[u]).size / 1.5), l = .5 * t, a = {
                statusCoords: (0, r.Rb)(e, o.clD.ONLINE, {
                    isTyping: h,
                    isMobile: !1,
                    isVR: !1
                }),
                frontAvatarSizePx: n,
                backAvatarSizePx: t,
                frontAvatarOffsetPx: l,
                frontAvatarCenter: l + n / 2
            }, d[s] = a, a)
        }, [f, h, u]), T = (t = null != _, h ? m[u].typing : t ? m[u].status : m[u].default), b = m[u].back;
        return (0, l.jsxs)("div", {
            style: {
                width: f,
                height: f,
                ...g
            },
            "aria-label": L["aria-label"],
            "aria-hidden": L["aria-hidden"],
            className: i()(A.kL, C),
            children: [(0, l.jsxs)(c.Ay, {
                mask: T,
                height: f,
                width: f,
                children: [(0, l.jsx)(c.Ay, {
                    mask: b,
                    height: f,
                    width: f,
                    children: (0, l.jsx)("img", {
                        src: n,
                        alt: "",
                        width: P,
                        height: P
                    })
                }), (0, l.jsx)("div", {
                    style: {
                        position: "absolute",
                        top: x,
                        left: x
                    },
                    children: (0, l.jsx)(E, {
                        src: s,
                        size: p,
                        isTyping: h,
                        status: _
                    })
                })]
            }), (0, l.jsx)(I, {
                statusCoords: N,
                status: _,
                isTyping: h
            })]
        })
    }