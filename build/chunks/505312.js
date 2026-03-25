/** chunk id: 505312 params = (module,exports,require) **/
a.d(t, {
    w: () => r
});
var n = a(627968),
    s = a(64700),
    l = a(744682);
let i = {
        all: {
            name: "all",
            start: 0,
            duration: 66
        }
    },
    r = () => {
        let e = s.useRef(null),
            t = s.useCallback(() => {
                null != e.current && e.current.play("all")
            }, []),
            r = s.useCallback(() => {
                null != e.current && e.current.play("all")
            }, []),
            d = s.useCallback(() => {
                null != e.current && e.current.stopIfPlaying("all")
            }, []),
            u = s.useCallback(t => (0, n.jsx)(l.P, {
                ...t,
                src: () => a.e("71694").then(a.t.bind(a, 29597, 19)),
                ref: e,
                markers: i
            }), []);
        return {
            events: {
                onMouseEnter: r,
                onMouseLeave: d
            },
            play: t,
            getDuration: s.useCallback(() => e.current?.getDuration(), []),
            getCurrentFrame: s.useCallback(() => e.current?.getCurrentFrame() ?? null, []),
            Component: u
        }
    }