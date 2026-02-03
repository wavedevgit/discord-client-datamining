package vn;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final uq.h f51451a;

    public k(uq.h hVar) {
        this.f51451a = hVar;
    }

    public static k a(uq.h hVar) {
        return new k(hVar);
    }

    public static j c(Context context) {
        return new j(context);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public j get() {
        return c((Context) this.f51451a.get());
    }
}
