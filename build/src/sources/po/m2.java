package po;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m2 implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final wq.h f46552a;

    public m2(wq.h hVar) {
        this.f46552a = hVar;
    }

    public static m2 a(wq.h hVar) {
        return new m2(hVar);
    }

    public static l2 c(Context context) {
        return new l2(context);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public l2 get() {
        return c((Context) this.f46552a.get());
    }
}
