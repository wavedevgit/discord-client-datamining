package mo;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final l f39522a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f39523b;

    public o(l lVar, tq.h hVar) {
        this.f39522a = lVar;
        this.f39523b = hVar;
    }

    public static o a(l lVar, tq.h hVar) {
        return new o(lVar, hVar);
    }

    public static v4.h c(l lVar, Context context) {
        return (v4.h) tq.g.d(lVar.c(context));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public v4.h get() {
        return c(this.f39522a, (Context) this.f39523b.get());
    }
}
