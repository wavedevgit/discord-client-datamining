package yo;

import android.content.Context;
import wq.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final h f55153a;

    public d(h hVar) {
        this.f55153a = hVar;
    }

    public static d a(h hVar) {
        return new d(hVar);
    }

    public static b c(Context context) {
        return new b(context);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public b get() {
        return c((Context) this.f55153a.get());
    }
}
