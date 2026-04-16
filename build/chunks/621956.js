/** chunk id: 621956 params = (module,exports,require) **/
n.d(t, {
    E: () => a
});
var i = n(627968),
    r = n(64700),
    l = n(744682);
let s = {
        all: {
            name: "all",
            start: 0,
            duration: 66
        }
    },
    a = () => {
        let e = r.useRef(null),
            t = r.useCallback(() => {
                null != e.current && e.current.play("all")
            }, []),
            a = r.useCallback(() => {
                null != e.current && e.current.play("all")
            }, []),
            o = r.useCallback(() => {
                null != e.current && e.current.stopIfPlaying("all")
            }, []),
            u = r.useCallback(t => (0, i.jsx)(l.P, {
                ...t,
                src: () => n.e("5506").then(n.t.bind(n, 429286, 19)),
                ref: e,
                markers: s
            }), []);
        return {
            events: {
                onClick: t,
                onMouseEnter: a,
                onMouseLeave: o
            },
            play: t,
            getDuration: r.useCallback(() => e.current?.getDuration(), []),
            getCurrentFrame: r.useCallback(() => e.current?.getCurrentFrame() ?? null, []),
            Component: u
        }
    }