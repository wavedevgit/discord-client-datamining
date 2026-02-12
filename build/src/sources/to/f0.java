package to;

import android.content.Context;
import to.c4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f0 {

    /* renamed from: a  reason: collision with root package name */
    private final lr.h f49095a;

    /* renamed from: b  reason: collision with root package name */
    private final lr.h f49096b;

    /* renamed from: c  reason: collision with root package name */
    private final lr.h f49097c;

    public f0(lr.h hVar, lr.h hVar2, lr.h hVar3) {
        this.f49095a = hVar;
        this.f49096b = hVar2;
        this.f49097c = hVar3;
    }

    public static f0 a(lr.h hVar, lr.h hVar2, lr.h hVar3) {
        return new f0(hVar, hVar2, hVar3);
    }

    public static e0 c(Context context, fo.f0 f0Var, gq.c cVar, c4.e eVar, String str) {
        return new e0(context, f0Var, cVar, eVar, str);
    }

    public e0 b(c4.e eVar, String str) {
        return c((Context) this.f49095a.get(), (fo.f0) this.f49096b.get(), (gq.c) this.f49097c.get(), eVar, str);
    }
}
