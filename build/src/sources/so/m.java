package so;

import android.app.Application;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final l f50161a;

    public m(l lVar) {
        this.f50161a = lVar;
    }

    public static Application a(l lVar) {
        return (Application) zq.g.d(lVar.a());
    }

    public static m b(l lVar) {
        return new m(lVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public Application get() {
        return a(this.f50161a);
    }
}
