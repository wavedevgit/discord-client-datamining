package rg;

import bj.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class ya implements bj.d {

    /* renamed from: a  reason: collision with root package name */
    static final ya f47369a = new ya();

    /* renamed from: b  reason: collision with root package name */
    private static final bj.c f47370b;

    /* renamed from: c  reason: collision with root package name */
    private static final bj.c f47371c;

    /* renamed from: d  reason: collision with root package name */
    private static final bj.c f47372d;

    static {
        c.b a10 = bj.c.a("inferenceCommonLogEvent");
        v1 v1Var = new v1();
        v1Var.a(1);
        f47370b = a10.b(v1Var.b()).a();
        c.b a11 = bj.c.a("imageInfo");
        v1 v1Var2 = new v1();
        v1Var2.a(2);
        f47371c = a11.b(v1Var2.b()).a();
        c.b a12 = bj.c.a("recognizerOptions");
        v1 v1Var3 = new v1();
        v1Var3.a(3);
        f47372d = a12.b(v1Var3.b()).a();
    }

    private ya() {
    }

    @Override // bj.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        rh rhVar = (rh) obj;
        bj.e eVar = (bj.e) obj2;
        eVar.e(f47370b, rhVar.b());
        eVar.e(f47371c, rhVar.a());
        eVar.e(f47372d, rhVar.c());
    }
}
