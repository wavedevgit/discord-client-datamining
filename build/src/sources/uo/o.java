package uo;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final l f52019a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f52020b;

    public o(l lVar, br.h hVar) {
        this.f52019a = lVar;
        this.f52020b = hVar;
    }

    public static o a(l lVar, br.h hVar) {
        return new o(lVar, hVar);
    }

    public static v4.h c(l lVar, Context context) {
        return (v4.h) br.g.d(lVar.c(context));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public v4.h get() {
        return c(this.f52019a, (Context) this.f52020b.get());
    }
}
