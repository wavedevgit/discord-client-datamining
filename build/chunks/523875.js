/** chunk id: 523875 params = (module,exports,require) **/
n.d(t, {
    L: () => s
});
var r = n(627968),
    a = n(64700),
    i = n(744682);
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
    s = e => {
        let t = a.useRef(null),
            s = a.useRef(e);
        s.current = e;
        let u = a.useMemo(() => () => {
                null != t.current && t.current.play(e)
            }, [e]),
            o = a.useCallback(() => {
                if (null == t.current) return;
                let n = "mute" === e ? "hover_unmuted" : "hover_muted";
                t.current.play(n)
            }, [e]),
            c = a.useCallback(() => {
                if (null == t.current) return;
                let n = "mute" === e ? "hover_unmuted" : "hover_muted";
                t.current.stopIfPlaying(n)
            }, [e]),
            d = a.useCallback(e => (0, r.jsx)(i.P, {
                ...e,
                src: () => n.e("18133").then(n.t.bind(n, 705844, 19)),
                ref: t,
                initialAnimation: s.current,
                markers: l
            }), []);
        return {
            events: {
                onClick: u,
                onMouseEnter: o,
                onMouseLeave: c
            },
            play: u,
            getDuration: a.useCallback(() => t.current?.getDuration(), []),
            getCurrentFrame: a.useCallback(() => t.current?.getCurrentFrame() ?? null, []),
            Component: d
        }
    }