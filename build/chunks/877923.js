/** Chunk was on 64935 **/
/** chunk id: 877923, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(627968),
    i = n(64700),
    l = n(417597),
    a = n(451988),
    s = n(397927),
    o = n(775602),
    c = n(21161),
    u = n(67414),
    d = n(147036),
    p = n(888675),
    m = n(652215),
    f = n(731875);

function g(e) {
    let {
        giftIntentType: t,
        recipientUser: n,
        channel: g
    } = e, _ = (0, l.bG)([o.A], () => o.A.useReducedMotion), h = i.useRef(null), {
        createMultipleConfettiAt: b
    } = i.useContext(c.x), A = i.useCallback(e => ({
        size: {
            type: "static-random",
            minValue: e.confettiSize - 6,
            maxValue: e.confettiSize + 6
        },
        velocity: {
            type: "static-random",
            minValue: {
                x: -180,
                y: -180
            },
            maxValue: {
                x: 180,
                y: 0
            }
        }
    }), []);
    return i.useEffect(() => {
        var e;
        if (_) return;
        let t = null == (e = h.current) ? void 0 : e.getBoundingClientRect();
        if (null == t) return;
        let n = A({
                confettiSize: 8
            }),
            r = new a.J_(1e3, () => {
                b(t.left + t.width / 2, t.top + t.height / 2, n, 60)
            });
        return r.delay(), () => {
            r.cancel()
        }
    }, [b, h, _, A]), (0, r.jsx)(p.A, {
        contentClassName: f.o9,
        iconContainerClassName: f.zc,
        iconNode: (0, r.jsx)(s.XFE, {
            colorClass: f.Kk
        }),
        children: (0, r.jsx)(u.A, {
            innerRef: h,
            giftIntentType: t,
            recipientUser: n,
            analyticsPage: (0, d.DJ)(g),
            analyticsSection: m.JJy.CHANNEL
        })
    })
}