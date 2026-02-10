package vo;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final l f52927a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f52928b;

    public o(l lVar, cr.h hVar) {
        this.f52927a = lVar;
        this.f52928b = hVar;
    }

    public static o a(l lVar, cr.h hVar) {
        return new o(lVar, hVar);
    }

    public static v4.h c(l lVar, Context context) {
        return (v4.h) cr.g.d(lVar.c(context));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public v4.h get() {
        return c(this.f52927a, (Context) this.f52928b.get());
    }
}
