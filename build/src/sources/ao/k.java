package ao;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final zq.h f5907a;

    public k(zq.h hVar) {
        this.f5907a = hVar;
    }

    public static k a(zq.h hVar) {
        return new k(hVar);
    }

    public static j c(Context context) {
        return new j(context);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public j get() {
        return c((Context) this.f5907a.get());
    }
}
