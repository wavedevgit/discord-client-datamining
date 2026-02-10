package qo;

import android.content.Context;
import cr.h;
import ko.c4;
import vn.f0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final h f46650a;

    /* renamed from: b  reason: collision with root package name */
    private final h f46651b;

    public b(h hVar, h hVar2) {
        this.f46650a = hVar;
        this.f46651b = hVar2;
    }

    public static b a(h hVar, h hVar2) {
        return new b(hVar, hVar2);
    }

    public static a c(Context context, f0 f0Var, c4.e eVar) {
        return new a(context, f0Var, eVar);
    }

    public a b(c4.e eVar) {
        return c((Context) this.f46650a.get(), (f0) this.f46651b.get(), eVar);
    }
}
