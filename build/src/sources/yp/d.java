package yp;

import android.content.Context;
import fo.v;
import java.util.List;
import lr.h;
import wp.d2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final h f56281a;

    /* renamed from: b  reason: collision with root package name */
    private final h f56282b;

    /* renamed from: c  reason: collision with root package name */
    private final h f56283c;

    /* renamed from: d  reason: collision with root package name */
    private final h f56284d;

    /* renamed from: e  reason: collision with root package name */
    private final h f56285e;

    /* renamed from: f  reason: collision with root package name */
    private final h f56286f;

    public d(h hVar, h hVar2, h hVar3, h hVar4, h hVar5, h hVar6) {
        this.f56281a = hVar;
        this.f56282b = hVar2;
        this.f56283c = hVar3;
        this.f56284d = hVar4;
        this.f56285e = hVar5;
        this.f56286f = hVar6;
    }

    public static d a(h hVar, h hVar2, h hVar3, h hVar4, h hVar5, h hVar6) {
        return new d(hVar, hVar2, hVar3, hVar4, hVar5, hVar6);
    }

    public static c c(Context context, String str, String str2, d2 d2Var, List list, a aVar, String str3, String str4, String str5, cq.a aVar2, so.a aVar3, hq.a aVar4, String str6, v vVar, ko.a aVar5, long j10) {
        return new c(context, str, str2, d2Var, list, aVar, str3, str4, str5, aVar2, aVar3, aVar4, str6, vVar, aVar5, j10);
    }

    public c b(String str, String str2, d2 d2Var, List list, String str3, String str4, String str5, String str6, v vVar, long j10) {
        return c((Context) this.f56281a.get(), str, str2, d2Var, list, (a) this.f56282b.get(), str3, str4, str5, (cq.a) this.f56283c.get(), (so.a) this.f56284d.get(), (hq.a) this.f56285e.get(), str6, vVar, (ko.a) this.f56286f.get(), j10);
    }
}
