package un;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final tq.h f50479a;

    public k(tq.h hVar) {
        this.f50479a = hVar;
    }

    public static k a(tq.h hVar) {
        return new k(hVar);
    }

    public static j c(Context context) {
        return new j(context);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public j get() {
        return c((Context) this.f50479a.get());
    }
}
