package eo;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final cr.h f21913a;

    public k(cr.h hVar) {
        this.f21913a = hVar;
    }

    public static k a(cr.h hVar) {
        return new k(hVar);
    }

    public static j c(Context context) {
        return new j(context);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public j get() {
        return c((Context) this.f21913a.get());
    }
}
