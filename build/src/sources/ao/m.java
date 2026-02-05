package ao;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final zq.h f5909a;

    public m(zq.h hVar) {
        this.f5909a = hVar;
    }

    public static m a(zq.h hVar) {
        return new m(hVar);
    }

    public static l c(Context context) {
        return new l(context);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public l get() {
        return c((Context) this.f5909a.get());
    }
}
