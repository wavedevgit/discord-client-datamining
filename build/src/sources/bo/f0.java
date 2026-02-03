package bo;

import android.content.Context;
import bo.c4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f0 {

    /* renamed from: a  reason: collision with root package name */
    private final uq.h f6740a;

    /* renamed from: b  reason: collision with root package name */
    private final uq.h f6741b;

    /* renamed from: c  reason: collision with root package name */
    private final uq.h f6742c;

    public f0(uq.h hVar, uq.h hVar2, uq.h hVar3) {
        this.f6740a = hVar;
        this.f6741b = hVar2;
        this.f6742c = hVar3;
    }

    public static f0 a(uq.h hVar, uq.h hVar2, uq.h hVar3) {
        return new f0(hVar, hVar2, hVar3);
    }

    public static e0 c(Context context, nn.f0 f0Var, pp.c cVar, c4.e eVar, String str) {
        return new e0(context, f0Var, cVar, eVar, str);
    }

    public e0 b(c4.e eVar, String str) {
        return c((Context) this.f6740a.get(), (nn.f0) this.f6741b.get(), (pp.c) this.f6742c.get(), eVar, str);
    }
}
