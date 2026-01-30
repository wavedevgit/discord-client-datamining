/** chunk id: 185288, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    P: () => l
});
var r = n(13163),
    i = n(803082),
    a = n(853590),
    o = n(64700),
    s = n(8321);

function l(e, t, n) {
    let {
        direction: l
    } = (0, a.Y)(), u = (0, o.useMemo)(() => (0, r.C7)(t), [t]), d = r => {
        if (r.currentTarget.contains(r.target) && (r.altKey && ("ArrowDown" === r.key || "ArrowUp" === r.key) && "setOpen" in e && (r.preventDefault(), r.stopPropagation(), e.setOpen(!0)), !n)) switch (r.key) {
            case "ArrowLeft":
                if (r.preventDefault(), r.stopPropagation(), "rtl" === l) {
                    if (t.current) {
                        let e = r.target,
                            n = c(t.current, e.getBoundingClientRect().left, -1);
                        n && n.focus()
                    }
                } else u.focusPrevious();
                break;
            case "ArrowRight":
                if (r.preventDefault(), r.stopPropagation(), "rtl" === l) {
                    if (t.current) {
                        let e = r.target,
                            n = c(t.current, e.getBoundingClientRect().left, 1);
                        n && n.focus()
                    }
                } else u.focusNext()
        }
    }, f = () => {
        var e;
        if (!t.current) return;
        let n = null == (e = window.event) ? void 0 : e.target,
            i = (0, r.N$)(t.current, {
                tabbable: !0
            });
        if (n && (i.currentNode = n, n = i.previousNode()), !n) {
            let e;
            do(e = i.lastChild()) && (n = e); while (e)
        }
        for (; null == n ? void 0 : n.hasAttribute("data-placeholder");) {
            let e = i.previousNode();
            if (e && e.hasAttribute("data-placeholder")) n = e;
            else break
        }
        n && n.focus()
    }, {
        pressProps: p
    } = (0, s.d)({
        preventFocusOnPress: !0,
        allowTextSelectionOnPress: !0,
        onPressStart(e) {
            "mouse" === e.pointerType && f()
        },
        onPress(e) {
            ("touch" === e.pointerType || "pen" === e.pointerType) && f()
        }
    });
    return (0, i.v)(p, {
        onKeyDown: d
    })
}

function c(e, t, n) {
    let i = (0, r.N$)(e, {
            tabbable: !0
        }),
        a = i.nextNode(),
        o = null,
        s = 1 / 0;
    for (; a;) {
        let e = a.getBoundingClientRect().left - t,
            r = Math.abs(e);
        Math.sign(e) === n && r < s && (o = a, s = r), a = i.nextNode()
    }
    return o
}