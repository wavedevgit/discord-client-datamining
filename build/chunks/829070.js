/** Chunk was on web.js **/
/** chunk id: 829070, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    a: () => r
});
class r {
    call() {
        try {
            this.task && this.task()
        } catch (e) {
            this.onError(e)
        } finally {
            this.task = null, this.release(this)
        }
    }
    constructor(e, t) {
        this.onError = e, this.release = t, this.task = null
    }
}