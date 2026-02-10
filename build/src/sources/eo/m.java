package eo;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final cr.h f21915a;

    public m(cr.h hVar) {
        this.f21915a = hVar;
    }

    public static m a(cr.h hVar) {
        return new m(hVar);
    }

    public static l c(Context context) {
        return new l(context);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public l get() {
        return c((Context) this.f21915a.get());
    }
}
