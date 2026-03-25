/** chunk id: 505312 params = (module,exports,require) **/
a.d(t, {
    w: () => u
});
var r = a(627968),
    n = a(64700),
    l = a(744682);
let s = {
        all: {
            name: "all",
            start: 0,
            duration: 66
        }
    },
    u = () => {
        let e = n.useRef(null),
            t = n.useCallback(() => {
                null != e.current && e.current.play("all")
            }, []),
            u = n.useCallback(() => {
                null != e.current && e.current.play("all")
            }, []),
            o = n.useCallback(() => {
                null != e.current && e.current.stopIfPlaying("all")
            }, []),
            c = n.useCallback(t => (0, r.jsx)(l.P, {
                ...t,
                src: () => a.e("71694").then(a.t.bind(a, 29597, 19)),
                ref: e,
                markers: s
            }), []);
        return {
            events: {
                onMouseEnter: u,
                onMouseLeave: o
            },
            play: t,
            getDuration: n.useCallback(() => e.current?.getDuration(), []),
            getCurrentFrame: n.useCallback(() => e.current?.getCurrentFrame() ?? null, []),
            Component: c
        }
    }