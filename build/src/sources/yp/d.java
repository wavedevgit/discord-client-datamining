package yp;

import android.content.Context;
import fo.v;
import java.util.List;
import lr.h;
import wp.d2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final h f55713a;

    /* renamed from: b  reason: collision with root package name */
    private final h f55714b;

    /* renamed from: c  reason: collision with root package name */
    private final h f55715c;

    /* renamed from: d  reason: collision with root package name */
    private final h f55716d;

    /* renamed from: e  reason: collision with root package name */
    private final h f55717e;

    /* renamed from: f  reason: collision with root package name */
    private final h f55718f;

    public d(h hVar, h hVar2, h hVar3, h hVar4, h hVar5, h hVar6) {
        this.f55713a = hVar;
        this.f55714b = hVar2;
        this.f55715c = hVar3;
        this.f55716d = hVar4;
        this.f55717e = hVar5;
        this.f55718f = hVar6;
    }

    public static d a(h hVar, h hVar2, h hVar3, h hVar4, h hVar5, h hVar6) {
        return new d(hVar, hVar2, hVar3, hVar4, hVar5, hVar6);
    }

    public static c c(Context context, String str, String str2, d2 d2Var, List list, a aVar, String str3, String str4, String str5, cq.a aVar2, so.a aVar3, hq.a aVar4, String str6, v vVar, ko.a aVar5, long j10) {
        return new c(context, str, str2, d2Var, list, aVar, str3, str4, str5, aVar2, aVar3, aVar4, str6, vVar, aVar5, j10);
    }

    public c b(String str, String str2, d2 d2Var, List list, String str3, String str4, String str5, String str6, v vVar, long j10) {
        return c((Context) this.f55713a.get(), str, str2, d2Var, list, (a) this.f55714b.get(), str3, str4, str5, (cq.a) this.f55715c.get(), (so.a) this.f55716d.get(), (hq.a) this.f55717e.get(), str6, vVar, (ko.a) this.f55718f.get(), j10);
    }
}
