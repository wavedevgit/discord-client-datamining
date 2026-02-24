/** chunk id: 270737, original params: e,t,n (module,exports,require) **/
n.d(t, {
    V: () => a
});
var i = n(627968),
    l = n(64700),
    r = n(744682);
let s = {
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
        },
        sparkle_off_muted: {
            name: "sparkle_off_muted",
            start: 299,
            duration: 40
        },
        sparkle_on: {
            name: "sparkle_on",
            start: 370,
            duration: 40
        },
        sparkle_off: {
            name: "sparkle_off",
            start: 450,
            duration: 40
        }
    },
    a = e => {
        let t = l.useRef(null),
            a = l.useRef(e);
        a.current = e;
        let o = l.useMemo(() => () => {
                null != t.current && t.current.play(e)
            }, [e]),
            u = l.useCallback(() => {
                if (null == t.current) return;
                let n = "mute" === e ? "hover_unmuted" : "hover_muted";
                t.current.play(n)
            }, [e]),
            d = l.useCallback(() => {
                if (null == t.current) return;
                let n = "mute" === e ? "hover_unmuted" : "hover_muted";
                t.current.stopIfPlaying(n)
            }, [e]),
            c = l.useCallback(e => (0, i.jsx)(r.P, {
                ...e,
                src: () => n.e("89759").then(n.t.bind(n, 244450, 19)),
                ref: t,
                initialAnimation: a.current,
                markers: s
            }), []);
        return {
            events: {
                onClick: o,
                onMouseEnter: u,
                onMouseLeave: d
            },
            play: o,
            getDuration: l.useCallback(() => t.current?.getDuration(), []),
            getCurrentFrame: l.useCallback(() => t.current?.getCurrentFrame() ?? null, []),
            Component: c
        }
    }