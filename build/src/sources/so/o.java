package so;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final l f50173a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f50174b;

    public o(l lVar, zq.h hVar) {
        this.f50173a = lVar;
        this.f50174b = hVar;
    }

    public static o a(l lVar, zq.h hVar) {
        return new o(lVar, hVar);
    }

    public static v4.h c(l lVar, Context context) {
        return (v4.h) zq.g.d(lVar.c(context));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public v4.h get() {
        return c(this.f50173a, (Context) this.f50174b.get());
    }
}
