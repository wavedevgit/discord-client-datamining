/** Chunk was on 31748 **/
/** chunk id: 706787, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(108531),
    a = n(311907),
    o = n(397927),
    s = n(565645),
    c = n(775602),
    u = n(927813),
    d = n(614518),
    f = n(804771);
let p = 6 * u.A.Millis.SECOND,
    g = 2 * u.A.Millis.SECOND,
    m = 2 * u.A.Millis.SECOND,
    _ = e => "scale(".concat(1 - -(e / 120), ") rotate(").concat(e, "deg)");

function h(e) {
    let {
        userId: t,
        voiceChannelEffect: n,
        onComplete: u
    } = e, {
        emoji: h,
        sentAt: y
    } = n, A = (0, a.bG)([c.A], () => c.A.useReducedMotion), [b, E] = l.useState(!0), v = !A, O = (0, o.pnh)(b, {
        from: {
            rotate: -120
        },
        enter: {
            rotate: 0
        },
        leave: {
            rotate: -120
        },
        config: i.config.default,
        onRest: (e, t) => {
            let {
                phase: n
            } = t;
            "leave" === n && u()
        }
    });
    return (l.useEffect(() => {
        let e;
        return Date.now() - y >= m ? (0, d.a)(t) : e = setTimeout(() => {
            E(!1), v && (0, d.a)(t)
        }, v ? g : p), () => {
            null != e && clearTimeout(e)
        }
    }, [y, t, v]), v) ? null : O((e, t) => {
        var n;
        let {
            rotate: l
        } = e;
        return t && (0, r.jsx)(i.animated.div, {
            className: f._,
            style: {
                transform: l.to(_)
            },
            children: (0, r.jsx)(s.A, {
                className: f.F,
                emojiId: h.id,
                emojiName: h.name,
                animated: null != (n = h.animated) && n
            })
        })
    })
}