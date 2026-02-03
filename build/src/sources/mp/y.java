package mp;

import android.view.Window;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final v f39054a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f39055b;

    public y(v vVar, wq.h hVar) {
        this.f39054a = vVar;
        this.f39055b = hVar;
    }

    public static y a(v vVar, wq.h hVar) {
        return new y(vVar, hVar);
    }

    public static vp.a c(v vVar, Window window) {
        return (vp.a) wq.g.d(vVar.c(window));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public vp.a get() {
        return c(this.f39054a, (Window) this.f39055b.get());
    }
}
