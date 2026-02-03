package ko;

import android.content.Context;
import eo.c4;
import pn.f0;
import wq.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final h f32454a;

    /* renamed from: b  reason: collision with root package name */
    private final h f32455b;

    public b(h hVar, h hVar2) {
        this.f32454a = hVar;
        this.f32455b = hVar2;
    }

    public static b a(h hVar, h hVar2) {
        return new b(hVar, hVar2);
    }

    public static a c(Context context, f0 f0Var, c4.e eVar) {
        return new a(context, f0Var, eVar);
    }

    public a b(c4.e eVar) {
        return c((Context) this.f32454a.get(), (f0) this.f32455b.get(), eVar);
    }
}
