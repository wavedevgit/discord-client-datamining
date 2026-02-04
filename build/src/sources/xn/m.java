package xn;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final wq.h f53489a;

    public m(wq.h hVar) {
        this.f53489a = hVar;
    }

    public static m a(wq.h hVar) {
        return new m(hVar);
    }

    public static l c(Context context) {
        return new l(context);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public l get() {
        return c((Context) this.f53489a.get());
    }
}
