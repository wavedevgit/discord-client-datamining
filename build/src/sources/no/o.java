package no;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final l f42265a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f42266b;

    public o(l lVar, uq.h hVar) {
        this.f42265a = lVar;
        this.f42266b = hVar;
    }

    public static o a(l lVar, uq.h hVar) {
        return new o(lVar, hVar);
    }

    public static v4.h c(l lVar, Context context) {
        return (v4.h) uq.g.d(lVar.c(context));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public v4.h get() {
        return c(this.f42265a, (Context) this.f42266b.get());
    }
}
