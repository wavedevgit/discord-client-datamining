package xn;

import android.content.Context;
import zq.d;
import zq.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements d {

    /* renamed from: a  reason: collision with root package name */
    private final h f54001a;

    public c(h hVar) {
        this.f54001a = hVar;
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
        return c((Context) this.f54001a.get());
    }
}
