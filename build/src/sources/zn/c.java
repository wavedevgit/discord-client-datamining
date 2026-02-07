package zn;

import android.content.Context;
import br.d;
import br.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements d {

    /* renamed from: a  reason: collision with root package name */
    private final h f56410a;

    public c(h hVar) {
        this.f56410a = hVar;
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
        return c((Context) this.f56410a.get());
    }
}
