/** chunk id: 535973 params = (module,exports,require) **/
n.d(t, {
    I: () => r,
    s: () => s
});
var i, l = n(64700),
    r = ((i = {}).BEFORE = "before", i.AFTER = "after", i);

function s(e) {
    let {
        groupIds: t,
        isDisabled: n,
        onCommitNewOrder: i
    } = e, r = l.useRef(t);
    l.useEffect(() => {
        r.current = t
    }, [t]);
    let [s, a] = l.useState({
        draggedGroupId: null,
        dropTargetGroupId: null,
        dropTargetPosition: null,
        didCommitDrop: !1
    }), o = l.useRef(s), u = l.useCallback(e => {
        a(t => {
            let n = {
                ...t,
                ...e
            };
            return o.current = n, n
        })
    }, []), d = l.useCallback((e, t) => {
        let {
            draggedGroupId: l,
            didCommitDrop: s
        } = o.current;
        if (s || n || null == l) return;
        let d = function(e) {
            let {
                groupIds: t,
                draggedGroupId: n,
                targetGroupId: i,
                position: l
            } = e, r = t.indexOf(n), s = t.indexOf(i);
            if (-1 === r || -1 === s || n === i) return null;
            let a = [...t];
            a.splice(r, 1);
            let o = r < s ? s - 1 : s;
            return a.splice("before" === l ? o : o + 1, 0, n), a
        }({
            groupIds: r.current,
            draggedGroupId: l,
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
    }, [n, i, u]), c = l.useCallback((e, t) => ({
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
            let l = t.currentTarget.getBoundingClientRect();
            u({
                dropTargetGroupId: e,
                dropTargetPosition: t.clientY < l.top + l.height / 2 ? "before" : "after"
            })
        },
        onDrop: t => {
            let {
                draggedGroupId: i
            } = o.current;
            if (n || null == i || i === e) return;
            t.preventDefault();
            let l = t.currentTarget.getBoundingClientRect();
            d(e, t.clientY < l.top + l.height / 2 ? "before" : "after")
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