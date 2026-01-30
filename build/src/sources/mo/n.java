package mo;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final l f39518a;

    public n(l lVar) {
        this.f39518a = lVar;
    }

    public static Context a(l lVar) {
        return (Context) tq.g.d(lVar.b());
    }

    public static n b(l lVar) {
        return new n(lVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public Context get() {
        return a(this.f39518a);
    }
}
