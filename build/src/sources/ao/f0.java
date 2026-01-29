package ao;

import android.content.Context;
import ao.c4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f0 {

    /* renamed from: a  reason: collision with root package name */
    private final tq.h f5917a;

    /* renamed from: b  reason: collision with root package name */
    private final tq.h f5918b;

    /* renamed from: c  reason: collision with root package name */
    private final tq.h f5919c;

    public f0(tq.h hVar, tq.h hVar2, tq.h hVar3) {
        this.f5917a = hVar;
        this.f5918b = hVar2;
        this.f5919c = hVar3;
    }

    public static f0 a(tq.h hVar, tq.h hVar2, tq.h hVar3) {
        return new f0(hVar, hVar2, hVar3);
    }

    public static e0 c(Context context, mn.f0 f0Var, op.c cVar, c4.e eVar, String str) {
        return new e0(context, f0Var, cVar, eVar, str);
    }

    public e0 b(c4.e eVar, String str) {
        return c((Context) this.f5917a.get(), (mn.f0) this.f5918b.get(), (op.c) this.f5919c.get(), eVar, str);
    }
}
