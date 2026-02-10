package eo;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final cr.h f21923a;

    public s(cr.h hVar) {
        this.f21923a = hVar;
    }

    public static s a(cr.h hVar) {
        return new s(hVar);
    }

    public static r c(Context context) {
        return new r(context);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public r get() {
        return c((Context) this.f21923a.get());
    }
}
