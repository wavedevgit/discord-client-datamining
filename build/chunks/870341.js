/** chunk id: 870341 params = (module,exports,require) **/
n.d(t, {
    A: () => l
});
var a = n(627968);
n(64700);
var i = n(278466),
    s = n(62153);
let l = e => {
    let {
        onSubmit: t,
        disabled: n
    } = e, {
        task: l
    } = (0, i.Z)(), r = s.a[l.ui_component.component.type];
    return null == r ? null : (0, a.jsx)(r, {
        configData: l.ui_component.component.data,
        onSubmit: t,
        taskId: l.task_id,
        flowId: l.flow_context?.flow_id,
        assignmentId: l.assignment_id,
        disabled: n
    })
}