package po;

import android.view.Window;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final l f46564a;

    public p(l lVar) {
        this.f46564a = lVar;
    }

    public static p a(l lVar) {
        return new p(lVar);
    }

    public static Window c(l lVar) {
        return (Window) wq.g.d(lVar.d());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public Window get() {
        return c(this.f46564a);
    }
}
