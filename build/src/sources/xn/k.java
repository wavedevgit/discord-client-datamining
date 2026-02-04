package xn;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final wq.h f53487a;

    public k(wq.h hVar) {
        this.f53487a = hVar;
    }

    public static k a(wq.h hVar) {
        return new k(hVar);
    }

    public static j c(Context context) {
        return new j(context);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public j get() {
        return c((Context) this.f53487a.get());
    }
}
