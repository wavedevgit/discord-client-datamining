package eo;

import android.content.Context;
import eo.c4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f0 {

    /* renamed from: a  reason: collision with root package name */
    private final wq.h f21795a;

    /* renamed from: b  reason: collision with root package name */
    private final wq.h f21796b;

    /* renamed from: c  reason: collision with root package name */
    private final wq.h f21797c;

    public f0(wq.h hVar, wq.h hVar2, wq.h hVar3) {
        this.f21795a = hVar;
        this.f21796b = hVar2;
        this.f21797c = hVar3;
    }

    public static f0 a(wq.h hVar, wq.h hVar2, wq.h hVar3) {
        return new f0(hVar, hVar2, hVar3);
    }

    public static e0 c(Context context, pn.f0 f0Var, rp.c cVar, c4.e eVar, String str) {
        return new e0(context, f0Var, cVar, eVar, str);
    }

    public e0 b(c4.e eVar, String str) {
        return c((Context) this.f21795a.get(), (pn.f0) this.f21796b.get(), (rp.c) this.f21797c.get(), eVar, str);
    }
}
