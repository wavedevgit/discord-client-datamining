package un;

import android.content.Context;
import wq.d;
import wq.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements d {

    /* renamed from: a  reason: collision with root package name */
    private final h f50762a;

    public c(h hVar) {
        this.f50762a = hVar;
    }

    public static c a(h hVar) {
        return new c(hVar);
    }

    public static b c(Context context) {
        return new b(context);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public b get() {
        return c((Context) this.f50762a.get());
    }
}
