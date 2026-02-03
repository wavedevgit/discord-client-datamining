package po;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final l f46557a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f46558b;

    public o(l lVar, wq.h hVar) {
        this.f46557a = lVar;
        this.f46558b = hVar;
    }

    public static o a(l lVar, wq.h hVar) {
        return new o(lVar, hVar);
    }

    public static v4.h c(l lVar, Context context) {
        return (v4.h) wq.g.d(lVar.c(context));
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public v4.h get() {
        return c(this.f46557a, (Context) this.f46558b.get());
    }
}
