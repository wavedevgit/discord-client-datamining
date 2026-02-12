package ep;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m2 implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final lr.h f23195a;

    public m2(lr.h hVar) {
        this.f23195a = hVar;
    }

    public static m2 a(lr.h hVar) {
        return new m2(hVar);
    }

    public static l2 c(Context context) {
        return new l2(context);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public l2 get() {
        return c((Context) this.f23195a.get());
    }
}
