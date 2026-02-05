package ho;

import android.content.Context;
import ho.c4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f0 {

    /* renamed from: a  reason: collision with root package name */
    private final zq.h f26107a;

    /* renamed from: b  reason: collision with root package name */
    private final zq.h f26108b;

    /* renamed from: c  reason: collision with root package name */
    private final zq.h f26109c;

    public f0(zq.h hVar, zq.h hVar2, zq.h hVar3) {
        this.f26107a = hVar;
        this.f26108b = hVar2;
        this.f26109c = hVar3;
    }

    public static f0 a(zq.h hVar, zq.h hVar2, zq.h hVar3) {
        return new f0(hVar, hVar2, hVar3);
    }

    public static e0 c(Context context, sn.f0 f0Var, up.c cVar, c4.e eVar, String str) {
        return new e0(context, f0Var, cVar, eVar, str);
    }

    public e0 b(c4.e eVar, String str) {
        return c((Context) this.f26107a.get(), (sn.f0) this.f26108b.get(), (up.c) this.f26109c.get(), eVar, str);
    }
}
