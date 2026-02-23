/** chunk id: 491982, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var a = n(627968);
n(64700);
var i = n(397927),
    s = n(976860),
    l = n(324861),
    r = n(652215),
    o = n(663024);
let d = function() {
    let {
        resetOnboardingExperience: e,
        resetQuestStatus: t
    } = (0, l.A)();
    return (0, a.jsx)("div", {
        className: o.k,
        children: (0, a.jsxs)(i.nVY, {
            label: "Virtual Currency Configuration",
            description: "Click the button below to reset your onboarding state for Virtual Currency.",
            children: [(0, a.jsx)("div", {
                children: (0, a.jsx)(i.Button, {
                    text: "Reset Onboarding State",
                    onClick: () => {
                        e(), t(), (0, s.pX)(r.BVt.APP)
                    }
                })
            }), (0, a.jsx)(i.po8, {
                messageType: i.YCn.INFO,
                children: "Your may have to refresh your client after being redirected to the main application in order to see these"
            })]
        })
    })
}