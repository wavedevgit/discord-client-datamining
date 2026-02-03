package xn;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final wq.h f53500a;

    public s(wq.h hVar) {
        this.f53500a = hVar;
    }

    public static s a(wq.h hVar) {
        return new s(hVar);
    }

    public static r c(Context context) {
        return new r(context);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public r get() {
        return c((Context) this.f53500a.get());
    }
}
