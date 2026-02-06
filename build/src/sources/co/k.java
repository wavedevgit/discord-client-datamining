package co;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final br.h f7650a;

    public k(br.h hVar) {
        this.f7650a = hVar;
    }

    public static k a(br.h hVar) {
        return new k(hVar);
    }

    public static j c(Context context) {
        return new j(context);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public j get() {
        return c((Context) this.f7650a.get());
    }
}
