/** chunk id: 877923, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
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
    m = n(888675),
    _ = n(652215),
    A = n(944909);

function f(e) {
    let {
        giftIntentType: t,
        recipientUser: n,
        channel: f
    } = e, h = (0, a.bG)([o.A], () => o.A.useReducedMotion), g = l.useRef(null), {
        createMultipleConfettiAt: E
    } = l.useContext(c.x), p = l.useCallback(e => ({
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
        if (h) return;
        let e = g.current;
        if (null == e) return;
        let t = null,
            n = new IntersectionObserver(i => {
                let [l] = i;
                l.intersectionRatio < .5 || (n.disconnect(), (t = new r.J_(1e3, () => {
                    let t = e.getBoundingClientRect(),
                        n = p({
                            confettiSize: 8
                        });
                    E(t.left + t.width / 2, t.top + t.height / 2, n, 60)
                })).delay())
            }, {
                threshold: .5
            });
        return n.observe(e), () => {
            n.disconnect(), t?.cancel()
        }
    }, [E, g, h, p]), (0, i.jsx)(m.A, {
        contentClassName: A.o9,
        iconContainerClassName: A.zc,
        iconNode: (0, i.jsx)(s.XFE, {
            colorClass: A.Kk
        }),
        children: (0, i.jsx)(d.A, {
            innerRef: g,
            giftIntentType: t,
            recipientUser: n,
            analyticsPage: (0, u.DJ)(f),
            analyticsSection: _.JJy.CHANNEL
        })
    })
}