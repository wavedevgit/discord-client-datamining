package so;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m2 implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final zq.h f50168a;

    public m2(zq.h hVar) {
        this.f50168a = hVar;
    }

    public static m2 a(zq.h hVar) {
        return new m2(hVar);
    }

    public static l2 c(Context context) {
        return new l2(context);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public l2 get() {
        return c((Context) this.f50168a.get());
    }
}
