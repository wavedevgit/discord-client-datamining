/** chunk id: 597864 params = (module,exports,require) **/
"use strict";
n.d(t, {
    B: () => l
});
var i = n(627968);
n(64700);
var r = n(397927),
    s = n(793361);

function l(e) {
    let {
        choiceId: t,
        choice: n,
        isSelected: l,
        onSelectionChange: a,
        inputType: o,
        textInputValue: c,
        onTextInputChange: u
    } = e, d = "true" === n.TextEntry, _ = `choice-label-${t}`;
    return (0, i.jsxs)("div", {
        className: s.NV,
        children: [(0, i.jsxs)(r.DUT, {
            className: s.d,
            onClick: () => {
                a(t)
            },
            role: o,
            "aria-checked": l,
            "aria-labelledby": _,
            children: [(0, i.jsx)("div", {
                className: s.jl,
                children: "radio" === o ? (0, i.jsx)(r.TN6, {
                    disabled: !1,
                    checked: l
                }) : (0, i.jsx)(r.P7L, {
                    disabled: !1,
                    checked: l
                })
            }), (0, i.jsx)(r.Text, {
                id: _,
                variant: "text-md/normal",
                color: "text-subtle",
                children: (0, i.jsx)("div", {
                    dangerouslySetInnerHTML: {
                        __html: n.Display
                    }
                })
            })]
        }), d && (0, i.jsx)("div", {
            className: s.Vi,
            children: (0, i.jsx)(r.ksK, {
                value: c ?? "",
                onChange: e => {
                    l || a(t), u?.(t, e)
                },
                disabled: !l
            })
        })]
    })
}