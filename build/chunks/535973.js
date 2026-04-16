/** chunk id: 535973 params = (module,exports,require) **/
n.d(t, {
    I: () => l,
    s: () => s
});
var i, r = n(64700),
    l = ((i = {}).BEFORE = "before", i.AFTER = "after", i);

function s(e) {
    let {
        groupIds: t,
        isDisabled: n,
        onCommitNewOrder: i
    } = e, l = r.useRef(t);
    r.useEffect(() => {
        l.current = t
    }, [t]);
    let [s, a] = r.useState({
        draggedGroupId: null,
        dropTargetGroupId: null,
        dropTargetPosition: null,
        didCommitDrop: !1
    }), o = r.useRef(s), u = r.useCallback(e => {
        a(t => {
            let n = {
                ...t,
                ...e
            };
            return o.current = n, n
        })
    }, []), d = r.useCallback((e, t) => {
        let {
            draggedGroupId: r,
            didCommitDrop: s
        } = o.current;
        if (s || n || null == r) return;
        let d = function(e) {
            let {
                groupIds: t,
                draggedGroupId: n,
                targetGroupId: i,
                position: r
            } = e, l = t.indexOf(n), s = t.indexOf(i);
            if (-1 === l || -1 === s || n === i) return null;
            let a = [...t];
            a.splice(l, 1);
            let o = l < s ? s - 1 : s;
            return a.splice("before" === r ? o : o + 1, 0, n), a
        }({
            groupIds: l.current,
            draggedGroupId: r,
            targetGroupId: e,
            position: t
        });
        null != d && (o.current = {
            ...o.current,
            didCommitDrop: !0
        }, a(o.current), i(d), u({
            draggedGroupId: null,
            dropTargetGroupId: null,
            dropTargetPosition: null
        }))
    }, [n, i, u]), c = r.useCallback((e, t) => ({
        draggable: t && !n,
        "data-dnd-drag-handle": "true",
        onDragStart: i => {
            n || t && (i.dataTransfer.setData("text/plain", e), i.dataTransfer.effectAllowed = "move", u({
                draggedGroupId: e,
                dropTargetGroupId: null,
                dropTargetPosition: null,
                didCommitDrop: !1
            }))
        },
        onDragOver: t => {
            let {
                draggedGroupId: i
            } = o.current;
            if (n || null == i || i === e) return;
            t.preventDefault(), t.dataTransfer.dropEffect = "move";
            let r = t.currentTarget.getBoundingClientRect();
            u({
                dropTargetGroupId: e,
                dropTargetPosition: t.clientY < r.top + r.height / 2 ? "before" : "after"
            })
        },
        onDrop: t => {
            let {
                draggedGroupId: i
            } = o.current;
            if (n || null == i || i === e) return;
            t.preventDefault();
            let r = t.currentTarget.getBoundingClientRect();
            d(e, t.clientY < r.top + r.height / 2 ? "before" : "after")
        },
        onDragEnd: () => {
            let {
                didCommitDrop: e,
                dropTargetGroupId: t,
                dropTargetPosition: n
            } = o.current;
            e || null == t || null == n || d(t, n), u({
                draggedGroupId: null,
                dropTargetGroupId: null,
                dropTargetPosition: null,
                didCommitDrop: !1
            })
        }
    }), [d, n, u]);
    return {
        draggedGroupId: s.draggedGroupId,
        dropTargetGroupId: s.dropTargetGroupId,
        dropTargetPosition: s.dropTargetPosition,
        getDragHandleProps: c
    }
}