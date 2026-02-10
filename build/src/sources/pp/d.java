package pp;

import android.content.Context;
import cr.h;
import java.util.List;
import np.d2;
import vn.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final h f44426a;

    /* renamed from: b  reason: collision with root package name */
    private final h f44427b;

    /* renamed from: c  reason: collision with root package name */
    private final h f44428c;

    /* renamed from: d  reason: collision with root package name */
    private final h f44429d;

    /* renamed from: e  reason: collision with root package name */
    private final h f44430e;

    /* renamed from: f  reason: collision with root package name */
    private final h f44431f;

    public d(h hVar, h hVar2, h hVar3, h hVar4, h hVar5, h hVar6) {
        this.f44426a = hVar;
        this.f44427b = hVar2;
        this.f44428c = hVar3;
        this.f44429d = hVar4;
        this.f44430e = hVar5;
        this.f44431f = hVar6;
    }

    public static d a(h hVar, h hVar2, h hVar3, h hVar4, h hVar5, h hVar6) {
        return new d(hVar, hVar2, hVar3, hVar4, hVar5, hVar6);
    }

    public static c c(Context context, String str, String str2, d2 d2Var, List list, a aVar, String str3, String str4, String str5, tp.a aVar2, jo.a aVar3, yp.a aVar4, String str6, v vVar, ao.a aVar5, long j10) {
        return new c(context, str, str2, d2Var, list, aVar, str3, str4, str5, aVar2, aVar3, aVar4, str6, vVar, aVar5, j10);
    }

    public c b(String str, String str2, d2 d2Var, List list, String str3, String str4, String str5, String str6, v vVar, long j10) {
        return c((Context) this.f44426a.get(), str, str2, d2Var, list, (a) this.f44427b.get(), str3, str4, str5, (tp.a) this.f44428c.get(), (jo.a) this.f44429d.get(), (yp.a) this.f44430e.get(), str6, vVar, (ao.a) this.f44431f.get(), j10);
    }
}
