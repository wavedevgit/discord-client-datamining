package gp;

import android.content.Context;
import ep.d2;
import java.util.List;
import mn.v;
import tq.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final h f27090a;

    /* renamed from: b  reason: collision with root package name */
    private final h f27091b;

    /* renamed from: c  reason: collision with root package name */
    private final h f27092c;

    /* renamed from: d  reason: collision with root package name */
    private final h f27093d;

    /* renamed from: e  reason: collision with root package name */
    private final h f27094e;

    /* renamed from: f  reason: collision with root package name */
    private final h f27095f;

    public d(h hVar, h hVar2, h hVar3, h hVar4, h hVar5, h hVar6) {
        this.f27090a = hVar;
        this.f27091b = hVar2;
        this.f27092c = hVar3;
        this.f27093d = hVar4;
        this.f27094e = hVar5;
        this.f27095f = hVar6;
    }

    public static d a(h hVar, h hVar2, h hVar3, h hVar4, h hVar5, h hVar6) {
        return new d(hVar, hVar2, hVar3, hVar4, hVar5, hVar6);
    }

    public static c c(Context context, String str, String str2, d2 d2Var, List list, a aVar, String str3, String str4, String str5, kp.a aVar2, zn.a aVar3, pp.a aVar4, String str6, v vVar, rn.a aVar5, long j10) {
        return new c(context, str, str2, d2Var, list, aVar, str3, str4, str5, aVar2, aVar3, aVar4, str6, vVar, aVar5, j10);
    }

    public c b(String str, String str2, d2 d2Var, List list, String str3, String str4, String str5, String str6, v vVar, long j10) {
        return c((Context) this.f27090a.get(), str, str2, d2Var, list, (a) this.f27091b.get(), str3, str4, str5, (kp.a) this.f27092c.get(), (zn.a) this.f27093d.get(), (pp.a) this.f27094e.get(), str6, vVar, (rn.a) this.f27095f.get(), j10);
    }
}
