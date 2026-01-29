package un;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final tq.h f50481a;

    public m(tq.h hVar) {
        this.f50481a = hVar;
    }

    public static m a(tq.h hVar) {
        return new m(hVar);
    }

    public static l c(Context context) {
        return new l(context);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public l get() {
        return c((Context) this.f50481a.get());
    }
}
