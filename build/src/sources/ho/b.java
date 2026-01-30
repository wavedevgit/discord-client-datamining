package ho;

import android.content.Context;
import ao.c4;
import mn.f0;
import tq.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final h f27634a;

    /* renamed from: b  reason: collision with root package name */
    private final h f27635b;

    public b(h hVar, h hVar2) {
        this.f27634a = hVar;
        this.f27635b = hVar2;
    }

    public static b a(h hVar, h hVar2) {
        return new b(hVar, hVar2);
    }

    public static a c(Context context, f0 f0Var, c4.e eVar) {
        return new a(context, f0Var, eVar);
    }

    public a b(c4.e eVar) {
        return c((Context) this.f27634a.get(), (f0) this.f27635b.get(), eVar);
    }
}
