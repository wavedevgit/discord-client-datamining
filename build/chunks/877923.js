/** chunk id: 877923 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(627968),
    l = n(64700),
    a = n(417597),
    r = n(451988),
    s = n(397927),
    o = n(775602),
    c = n(21161),
    d = n(67414),
    u = n(147036),
    _ = n(888675),
    A = n(652215),
    m = n(731875);

function E(e) {
    let {
        giftIntentType: t,
        recipientUser: n,
        channel: E
    } = e, I = (0, a.bG)([o.A], () => o.A.useReducedMotion), T = l.useRef(null), {
        createMultipleConfettiAt: f
    } = l.useContext(c.x), N = l.useCallback(e => ({
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
    return l.useEffect(() => {
        if (I) return;
        let e = T.current;
        if (null == e) return;
        let t = null,
            n = new IntersectionObserver(i => {
                let [l] = i;
                l.intersectionRatio < .5 || (n.disconnect(), (t = new r.J_(1e3, () => {
                    let t = e.getBoundingClientRect(),
                        n = N({
                            confettiSize: 8
                        });
                    f(t.left + t.width / 2, t.top + t.height / 2, n, 60)
                })).delay())
            }, {
                threshold: .5
            });
        return n.observe(e), () => {
            n.disconnect(), t?.cancel()
        }
    }, [f, T, I, N]), (0, i.jsx)(_.A, {
        contentClassName: m.o9,
        iconContainerClassName: m.zc,
        iconNode: (0, i.jsx)(s.XFE, {
            colorClass: m.Kk
        }),
        children: (0, i.jsx)(d.A, {
            innerRef: T,
            giftIntentType: t,
            recipientUser: n,
            analyticsPage: (0, u.DJ)(E),
            analyticsSection: A.JJy.CHANNEL
        })
    })
}