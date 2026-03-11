/** chunk id: 534149 params = (module,exports,require) **/
l.d(t, {
    N: () => o
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
            u = n.useCallback(e => (0, a.jsx)(r.P, {
                ...e,
                src: () => l.e("78611").then(l.t.bind(l, 433886, 19)),
                ref: t,
                initialAnimation: o.current,
                markers: i
            }), []);
        return {
            events: {},
            play: s,
            getDuration: n.useCallback(() => t.current?.getDuration(), []),
            getCurrentFrame: n.useCallback(() => t.current?.getCurrentFrame() ?? null, []),
            Component: u
        }
    }