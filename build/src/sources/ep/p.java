package ep;

import android.view.Window;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final l f23207a;

    public p(l lVar) {
        this.f23207a = lVar;
    }

    public static p a(l lVar) {
        return new p(lVar);
    }

    public static Window c(l lVar) {
        return (Window) lr.g.d(lVar.d());
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public Window get() {
        return c(this.f23207a);
    }
}
