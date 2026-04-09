/** chunk id: 523875 params = (module,exports,require) **/
n.d(t, {
    L: () => o
});
var a = n(627968),
    r = n(64700),
    l = n(744682);
let i = {
        mute: {
            name: "mute",
            start: 0,
            duration: 70
        },
        unmute: {
            name: "unmute",
            start: 100,
            duration: 70
        },
        hover_unmuted: {
            name: "hover_unmuted",
            start: 180,
            duration: 40
        },
        hover_muted: {
            name: "hover_muted",
            start: 240,
            duration: 40
        }
    },
    o = e => {
        let t = r.useRef(null),
            o = r.useRef(e);
        o.current = e;
        let s = r.useMemo(() => () => {
                null != t.current && t.current.play(e)
            }, [e]),
            _ = r.useCallback(() => {
                if (null == t.current) return;
                let n = "mute" === e ? "hover_unmuted" : "hover_muted";
                t.current.play(n)
            }, [e]),
            c = r.useCallback(() => {
                if (null == t.current) return;
                let n = "mute" === e ? "hover_unmuted" : "hover_muted";
                t.current.stopIfPlaying(n)
            }, [e]),
            u = r.useCallback(e => (0, a.jsx)(l.P, {
                ...e,
                src: () => n.e("18133").then(n.t.bind(n, 705844, 19)),
                ref: t,
                initialAnimation: o.current,
                markers: i
            }), []);
        return {
            events: {
                onClick: s,
                onMouseEnter: _,
                onMouseLeave: c
            },
            play: s,
            getDuration: r.useCallback(() => t.current?.getDuration(), []),
            getCurrentFrame: r.useCallback(() => t.current?.getCurrentFrame() ?? null, []),
            Component: u
        }
    }