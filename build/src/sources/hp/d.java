package hp;

import android.content.Context;
import fp.d2;
import java.util.List;
import nn.v;
import uq.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final h f27837a;

    /* renamed from: b  reason: collision with root package name */
    private final h f27838b;

    /* renamed from: c  reason: collision with root package name */
    private final h f27839c;

    /* renamed from: d  reason: collision with root package name */
    private final h f27840d;

    /* renamed from: e  reason: collision with root package name */
    private final h f27841e;

    /* renamed from: f  reason: collision with root package name */
    private final h f27842f;

    public d(h hVar, h hVar2, h hVar3, h hVar4, h hVar5, h hVar6) {
        this.f27837a = hVar;
        this.f27838b = hVar2;
        this.f27839c = hVar3;
        this.f27840d = hVar4;
        this.f27841e = hVar5;
        this.f27842f = hVar6;
    }

    public static d a(h hVar, h hVar2, h hVar3, h hVar4, h hVar5, h hVar6) {
        return new d(hVar, hVar2, hVar3, hVar4, hVar5, hVar6);
    }

    public static c c(Context context, String str, String str2, d2 d2Var, List list, a aVar, String str3, String str4, String str5, lp.a aVar2, ao.a aVar3, qp.a aVar4, String str6, v vVar, sn.a aVar5, long j10) {
        return new c(context, str, str2, d2Var, list, aVar, str3, str4, str5, aVar2, aVar3, aVar4, str6, vVar, aVar5, j10);
    }

    public c b(String str, String str2, d2 d2Var, List list, String str3, String str4, String str5, String str6, v vVar, long j10) {
        return c((Context) this.f27837a.get(), str, str2, d2Var, list, (a) this.f27838b.get(), str3, str4, str5, (lp.a) this.f27839c.get(), (ao.a) this.f27840d.get(), (qp.a) this.f27841e.get(), str6, vVar, (sn.a) this.f27842f.get(), j10);
    }
}
