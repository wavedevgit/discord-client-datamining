/** Chunk was on 56795 **/
/** chunk id: 961881, original params: e,t,s (module,exports,require) **/
s.r(t), s.d(t, {
    default: () => u
}), s(896048);
var i = s(627968),
    r = s(64700),
    n = s(827734),
    l = s(397927),
    a = s(538064),
    c = s(348639),
    o = s(972049),
    d = s(772958);

function u() {
    let [e, t] = r.useState(!1), s = (0, d.vX)(), {
        reporting: u
    } = c.A.useExperiment({
        location: "be7a1c_1"
    }, {
        autoTrackExposure: !1
    });
    return (r.useEffect(() => {
        if (u && e && null != s) return s.forEach(e => {
            e.elements.forEach(e => {
                e.setAttribute(o.nY, "")
            })
        }), () => {
            s.forEach(e => {
                e.elements.forEach(e => {
                    e.removeAttribute(o.nY)
                })
            })
        }
    }, [s, u, e]), u && null != s && 0 !== s.length) ? (0, i.jsxs)("div", {
        style: {
            backgroundColor: n.A.colors.BACKGROUND_FEEDBACK_CRITICAL.css,
            color: n.A.colors.TEXT_FEEDBACK_CRITICAL.css,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "8px 12px"
        },
        children: [(0, i.jsx)(l.Text, {
            variant: "text-sm/semibold",
            color: "text-feedback-critical",
            children: "Accessibility compliance issue(s) detected, check in-app DevTools"
        }), (0, i.jsxs)(l.ButtonGroup, {
            direction: "horizontal",
            size: "sm",
            children: [(0, i.jsx)(l.Button, {
                text: "Open DevTools",
                onClick: a.pf,
                variant: "critical-secondary"
            }), (0, i.jsx)(l.Button, {
                onClick: () => t(!e),
                text: "".concat(e ? "Hide" : "Show", " Overlays"),
                variant: "critical-primary"
            })]
        })]
    }) : null
}