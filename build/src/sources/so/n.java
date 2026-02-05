package so;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final l f50169a;

    public n(l lVar) {
        this.f50169a = lVar;
    }

    public static Context a(l lVar) {
        return (Context) zq.g.d(lVar.b());
    }

    public static n b(l lVar) {
        return new n(lVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public Context get() {
        return a(this.f50169a);
    }
}
