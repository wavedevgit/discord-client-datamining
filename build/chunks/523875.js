/** chunk id: 523875 params = (module,exports,require) **/
a.d(t, {
    L: () => o
});
var n = a(627968),
    r = a(64700),
    i = a(744682);
let l = {
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
                let a = "mute" === e ? "hover_unmuted" : "hover_muted";
                t.current.play(a)
            }, [e]),
            c = r.useCallback(() => {
                if (null == t.current) return;
                let a = "mute" === e ? "hover_unmuted" : "hover_muted";
                t.current.stopIfPlaying(a)
            }, [e]),
            d = r.useCallback(e => (0, n.jsx)(i.P, {
                ...e,
                src: () => a.e("18133").then(a.t.bind(a, 705844, 19)),
                ref: t,
                initialAnimation: o.current,
                markers: l
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
            Component: d
        }
    }