package mo;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m2 implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final tq.h f39517a;

    public m2(tq.h hVar) {
        this.f39517a = hVar;
    }

    public static m2 a(tq.h hVar) {
        return new m2(hVar);
    }

    public static l2 c(Context context) {
        return new l2(context);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public l2 get() {
        return c((Context) this.f39517a.get());
    }
}
