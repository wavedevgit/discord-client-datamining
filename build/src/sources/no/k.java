package no;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final lr.h f38190a;

    public k(lr.h hVar) {
        this.f38190a = hVar;
    }

    public static k a(lr.h hVar) {
        return new k(hVar);
    }

    public static j c(Context context) {
        return new j(context);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public j get() {
        return c((Context) this.f38190a.get());
    }
}
