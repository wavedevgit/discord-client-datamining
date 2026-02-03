package jp;

import android.content.Context;
import hp.d2;
import java.util.List;
import pn.v;
import wq.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final h f31877a;

    /* renamed from: b  reason: collision with root package name */
    private final h f31878b;

    /* renamed from: c  reason: collision with root package name */
    private final h f31879c;

    /* renamed from: d  reason: collision with root package name */
    private final h f31880d;

    /* renamed from: e  reason: collision with root package name */
    private final h f31881e;

    /* renamed from: f  reason: collision with root package name */
    private final h f31882f;

    public d(h hVar, h hVar2, h hVar3, h hVar4, h hVar5, h hVar6) {
        this.f31877a = hVar;
        this.f31878b = hVar2;
        this.f31879c = hVar3;
        this.f31880d = hVar4;
        this.f31881e = hVar5;
        this.f31882f = hVar6;
    }

    public static d a(h hVar, h hVar2, h hVar3, h hVar4, h hVar5, h hVar6) {
        return new d(hVar, hVar2, hVar3, hVar4, hVar5, hVar6);
    }

    public static c c(Context context, String str, String str2, d2 d2Var, List list, a aVar, String str3, String str4, String str5, np.a aVar2, co.a aVar3, sp.a aVar4, String str6, v vVar, un.a aVar5, long j10) {
        return new c(context, str, str2, d2Var, list, aVar, str3, str4, str5, aVar2, aVar3, aVar4, str6, vVar, aVar5, j10);
    }

    public c b(String str, String str2, d2 d2Var, List list, String str3, String str4, String str5, String str6, v vVar, long j10) {
        return c((Context) this.f31877a.get(), str, str2, d2Var, list, (a) this.f31878b.get(), str3, str4, str5, (np.a) this.f31879c.get(), (co.a) this.f31880d.get(), (sp.a) this.f31881e.get(), str6, vVar, (un.a) this.f31882f.get(), j10);
    }
}
