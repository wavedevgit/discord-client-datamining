package vn;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final uq.h f51453a;

    public m(uq.h hVar) {
        this.f51453a = hVar;
    }

    public static m a(uq.h hVar) {
        return new m(hVar);
    }

    public static l c(Context context) {
        return new l(context);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public l get() {
        return c((Context) this.f51453a.get());
    }
}
