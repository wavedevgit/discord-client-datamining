package ko;

import android.content.Context;
import ko.c4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f0 {

    /* renamed from: a  reason: collision with root package name */
    private final cr.h f31102a;

    /* renamed from: b  reason: collision with root package name */
    private final cr.h f31103b;

    /* renamed from: c  reason: collision with root package name */
    private final cr.h f31104c;

    public f0(cr.h hVar, cr.h hVar2, cr.h hVar3) {
        this.f31102a = hVar;
        this.f31103b = hVar2;
        this.f31104c = hVar3;
    }

    public static f0 a(cr.h hVar, cr.h hVar2, cr.h hVar3) {
        return new f0(hVar, hVar2, hVar3);
    }

    public static e0 c(Context context, vn.f0 f0Var, xp.c cVar, c4.e eVar, String str) {
        return new e0(context, f0Var, cVar, eVar, str);
    }

    public e0 b(c4.e eVar, String str) {
        return c((Context) this.f31102a.get(), (vn.f0) this.f31103b.get(), (xp.c) this.f31104c.get(), eVar, str);
    }
}
