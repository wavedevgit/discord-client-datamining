package jo;

import android.content.Context;
import jo.c4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f0 {

    /* renamed from: a  reason: collision with root package name */
    private final br.h f30151a;

    /* renamed from: b  reason: collision with root package name */
    private final br.h f30152b;

    /* renamed from: c  reason: collision with root package name */
    private final br.h f30153c;

    public f0(br.h hVar, br.h hVar2, br.h hVar3) {
        this.f30151a = hVar;
        this.f30152b = hVar2;
        this.f30153c = hVar3;
    }

    public static f0 a(br.h hVar, br.h hVar2, br.h hVar3) {
        return new f0(hVar, hVar2, hVar3);
    }

    public static e0 c(Context context, un.f0 f0Var, wp.c cVar, c4.e eVar, String str) {
        return new e0(context, f0Var, cVar, eVar, str);
    }

    public e0 b(c4.e eVar, String str) {
        return c((Context) this.f30151a.get(), (un.f0) this.f30152b.get(), (wp.c) this.f30153c.get(), eVar, str);
    }
}
