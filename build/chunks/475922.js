/** chunk id: 475922 params = (module,exports,require) **/
l.d(t, {
    q: () => o
});
var a = l(627968),
    n = l(64700),
    r = l(744682);
let i = {
        earn: {
            name: "earn",
            start: 0,
            duration: 180
        },
        spend: {
            name: "spend",
            start: 240,
            duration: 180
        }
    },
    o = e => {
        let t = n.useRef(null),
            o = n.useRef(e);
        o.current = e;
        let s = n.useMemo(() => () => {
                null != t.current && t.current.play(e)
            }, [e]),
            c = n.useCallback(e => (0, a.jsx)(r.P, {
                ...e,
                src: () => l.e("45492").then(l.t.bind(l, 653727, 19)),
                ref: t,
                initialAnimation: o.current,
                markers: i
            }), []);
        return {
            events: {},
            play: s,
            getDuration: n.useCallback(() => t.current?.getDuration(), []),
            getCurrentFrame: n.useCallback(() => t.current?.getCurrentFrame() ?? null, []),
            Component: c
        }
    }