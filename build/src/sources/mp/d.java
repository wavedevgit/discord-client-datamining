package mp;

import android.content.Context;
import java.util.List;
import kp.d2;
import sn.v;
import zq.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final h f38839a;

    /* renamed from: b  reason: collision with root package name */
    private final h f38840b;

    /* renamed from: c  reason: collision with root package name */
    private final h f38841c;

    /* renamed from: d  reason: collision with root package name */
    private final h f38842d;

    /* renamed from: e  reason: collision with root package name */
    private final h f38843e;

    /* renamed from: f  reason: collision with root package name */
    private final h f38844f;

    public d(h hVar, h hVar2, h hVar3, h hVar4, h hVar5, h hVar6) {
        this.f38839a = hVar;
        this.f38840b = hVar2;
        this.f38841c = hVar3;
        this.f38842d = hVar4;
        this.f38843e = hVar5;
        this.f38844f = hVar6;
    }

    public static d a(h hVar, h hVar2, h hVar3, h hVar4, h hVar5, h hVar6) {
        return new d(hVar, hVar2, hVar3, hVar4, hVar5, hVar6);
    }

    public static c c(Context context, String str, String str2, d2 d2Var, List list, a aVar, String str3, String str4, String str5, qp.a aVar2, go.a aVar3, vp.a aVar4, String str6, v vVar, xn.a aVar5, long j10) {
        return new c(context, str, str2, d2Var, list, aVar, str3, str4, str5, aVar2, aVar3, aVar4, str6, vVar, aVar5, j10);
    }

    public c b(String str, String str2, d2 d2Var, List list, String str3, String str4, String str5, String str6, v vVar, long j10) {
        return c((Context) this.f38839a.get(), str, str2, d2Var, list, (a) this.f38840b.get(), str3, str4, str5, (qp.a) this.f38841c.get(), (go.a) this.f38842d.get(), (vp.a) this.f38843e.get(), str6, vVar, (xn.a) this.f38844f.get(), j10);
    }
}
