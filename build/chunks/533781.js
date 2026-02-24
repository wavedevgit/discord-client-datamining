/** chunk id: 533781, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    T: () => a
});
var i = n(627968),
    s = n(64700),
    l = n(744682);
let r = {
        all: {
            name: "all",
            start: 0,
            duration: 66
        }
    },
    a = () => {
        let e = s.useRef(null),
            t = s.useCallback(() => {
                null != e.current && e.current.play("all")
            }, []),
            a = s.useCallback(() => {
                null != e.current && e.current.play("all")
            }, []),
            o = s.useCallback(() => {
                null != e.current && e.current.stopIfPlaying("all")
            }, []),
            c = s.useCallback(t => (0, i.jsx)(l.P, {
                ...t,
                src: () => n.e("56591").then(n.t.bind(n, 640114, 19)),
                ref: e,
                markers: r
            }), []);
        return {
            events: {
                onMouseEnter: a,
                onMouseLeave: o
            },
            play: t,
            getDuration: s.useCallback(() => e.current?.getDuration(), []),
            getCurrentFrame: s.useCallback(() => e.current?.getCurrentFrame() ?? null, []),
            Component: c
        }
    }