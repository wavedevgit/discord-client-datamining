/** chunk id: 385278 params = (module,exports,require) **/
n.d(t, {
    G: () => s
});
var i = n(627968),
    a = n(64700),
    l = n(744682);
let r = {
        disable: {
            name: "disable",
            start: 0,
            duration: 70
        },
        enable: {
            name: "enable",
            start: 100,
            duration: 70
        },
        hover_enabled: {
            name: "hover_enabled",
            start: 200,
            duration: 70
        },
        hover_disabled: {
            name: "hover_disabled",
            start: 300,
            duration: 70
        }
    },
    s = e => {
        let t = a.useRef(null),
            s = a.useRef(e);
        s.current = e;
        let o = a.useMemo(() => () => {
                null != t.current && t.current.play(e)
            }, [e]),
            d = a.useCallback(() => {
                if (null == t.current) return;
                let n = "enable" === e ? "hover_disabled" : "hover_enabled";
                t.current.play(n)
            }, [e]),
            c = a.useCallback(() => {
                if (null == t.current) return;
                let n = "enable" === e ? "hover_disabled" : "hover_enabled";
                t.current.stopIfPlaying(n)
            }, [e]),
            u = a.useCallback(e => (0, i.jsx)(l.P, {
                ...e,
                src: () => n.e("24596").then(n.t.bind(n, 941983, 19)),
                ref: t,
                initialAnimation: s.current,
                markers: r
            }), []);
        return {
            events: {
                onClick: o,
                onMouseEnter: d,
                onMouseLeave: c
            },
            play: o,
            getDuration: a.useCallback(() => t.current?.getDuration(), []),
            getCurrentFrame: a.useCallback(() => t.current?.getCurrentFrame() ?? null, []),
            Component: u
        }
    }