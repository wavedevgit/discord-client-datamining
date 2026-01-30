/** chunk id: 256398, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => r
});
class r {
    acquire(e) {
        return navigator.mediaDevices.getUserMedia(e)
    }
    release(e) {
        e.getTracks().forEach(e => {
            e.onended = function() {}, e.stop()
        })
    }
}