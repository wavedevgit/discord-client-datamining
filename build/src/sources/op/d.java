package op;

import android.content.Context;
import br.h;
import java.util.List;
import mp.d2;
import un.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final h f43368a;

    /* renamed from: b  reason: collision with root package name */
    private final h f43369b;

    /* renamed from: c  reason: collision with root package name */
    private final h f43370c;

    /* renamed from: d  reason: collision with root package name */
    private final h f43371d;

    /* renamed from: e  reason: collision with root package name */
    private final h f43372e;

    /* renamed from: f  reason: collision with root package name */
    private final h f43373f;

    public d(h hVar, h hVar2, h hVar3, h hVar4, h hVar5, h hVar6) {
        this.f43368a = hVar;
        this.f43369b = hVar2;
        this.f43370c = hVar3;
        this.f43371d = hVar4;
        this.f43372e = hVar5;
        this.f43373f = hVar6;
    }

    public static d a(h hVar, h hVar2, h hVar3, h hVar4, h hVar5, h hVar6) {
        return new d(hVar, hVar2, hVar3, hVar4, hVar5, hVar6);
    }

    public static c c(Context context, String str, String str2, d2 d2Var, List list, a aVar, String str3, String str4, String str5, sp.a aVar2, io.a aVar3, xp.a aVar4, String str6, v vVar, zn.a aVar5, long j10) {
        return new c(context, str, str2, d2Var, list, aVar, str3, str4, str5, aVar2, aVar3, aVar4, str6, vVar, aVar5, j10);
    }

    public c b(String str, String str2, d2 d2Var, List list, String str3, String str4, String str5, String str6, v vVar, long j10) {
        return c((Context) this.f43368a.get(), str, str2, d2Var, list, (a) this.f43369b.get(), str3, str4, str5, (sp.a) this.f43370c.get(), (io.a) this.f43371d.get(), (xp.a) this.f43372e.get(), str6, vVar, (zn.a) this.f43373f.get(), j10);
    }
}
