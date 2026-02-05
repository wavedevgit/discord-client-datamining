package ao;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final zq.h f5917a;

    public s(zq.h hVar) {
        this.f5917a = hVar;
    }

    public static s a(zq.h hVar) {
        return new s(hVar);
    }

    public static r c(Context context) {
        return new r(context);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public r get() {
        return c((Context) this.f5917a.get());
    }
}
