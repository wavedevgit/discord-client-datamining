package vo;

import android.app.Application;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final l f52915a;

    public m(l lVar) {
        this.f52915a = lVar;
    }

    public static Application a(l lVar) {
        return (Application) cr.g.d(lVar.a());
    }

    public static m b(l lVar) {
        return new m(lVar);
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public Application get() {
        return a(this.f52915a);
    }
}
