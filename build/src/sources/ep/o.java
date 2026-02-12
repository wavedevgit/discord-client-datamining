package ep;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final l f23200a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f23201b;

    public o(l lVar, lr.h hVar) {
        this.f23200a = lVar;
        this.f23201b = hVar;
    }

    public static o a(l lVar, lr.h hVar) {
        return new o(lVar, hVar);
    }

    public static v4.h c(l lVar, Context context) {
        return (v4.h) lr.g.d(lVar.c(context));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public v4.h get() {
        return c(this.f23200a, (Context) this.f23201b.get());
    }
}
