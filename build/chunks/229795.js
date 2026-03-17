/** chunk id: 229795 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(73153),
    a = n(636401),
    r = n(629471),
    l = n(360469),
    s = n(818348);
let o = {
    [s.e$.SET_ORIENTATION_LOCK_STATE]: {
        validation: e => (0, r.A)(e).required().keys({
            lock_state: e.number().valid(l.N7.UNLOCKED, l.N7.PORTRAIT, l.N7.LANDSCAPE).required(),
            picture_in_picture_lock_state: e.number().valid(l.N7.UNLOCKED, l.N7.PORTRAIT, l.N7.LANDSCAPE).allow(null).optional(),
            grid_lock_state: e.number().valid(l.N7.UNLOCKED, l.N7.PORTRAIT, l.N7.LANDSCAPE).allow(null).optional()
        }),
        handler(e) {
            let {
                socket: t,
                args: {
                    lock_state: n,
                    picture_in_picture_lock_state: r,
                    grid_lock_state: l
                }
            } = e, o = t.application.id;
            if (null != o) i.h.dispatch({
                type: "FRAME_SET_ORIENTATION_LOCK_STATE",
                applicationId: o,
                lockState: n,
                pictureInPictureLockState: r
            }), i.h.dispatch({
                type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE",
                applicationId: o,
                lockState: n,
                pictureInPictureLockState: r,
                gridLockState: l
            });
            else throw new a.A({
                errorCode: s.Lw.INVALID_COMMAND
            }, "No application.")
        }
    }
}