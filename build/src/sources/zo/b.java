package zo;

import android.content.Context;
import fo.f0;
import lr.h;
import to.c4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final h f57122a;

    /* renamed from: b  reason: collision with root package name */
    private final h f57123b;

    public b(h hVar, h hVar2) {
        this.f57122a = hVar;
        this.f57123b = hVar2;
    }

    public static b a(h hVar, h hVar2) {
        return new b(hVar, hVar2);
    }

    public static a c(Context context, f0 f0Var, c4.e eVar) {
        return new a(context, f0Var, eVar);
    }

    public a b(c4.e eVar) {
        return c((Context) this.f57122a.get(), (f0) this.f57123b.get(), eVar);
    }
}
