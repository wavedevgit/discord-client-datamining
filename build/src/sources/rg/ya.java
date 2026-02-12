package rg;

import bj.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class ya implements bj.d {

    /* renamed from: a  reason: collision with root package name */
    static final ya f47370a = new ya();

    /* renamed from: b  reason: collision with root package name */
    private static final bj.c f47371b;

    /* renamed from: c  reason: collision with root package name */
    private static final bj.c f47372c;

    /* renamed from: d  reason: collision with root package name */
    private static final bj.c f47373d;

    static {
        c.b a10 = bj.c.a("inferenceCommonLogEvent");
        v1 v1Var = new v1();
        v1Var.a(1);
        f47371b = a10.b(v1Var.b()).a();
        c.b a11 = bj.c.a("imageInfo");
        v1 v1Var2 = new v1();
        v1Var2.a(2);
        f47372c = a11.b(v1Var2.b()).a();
        c.b a12 = bj.c.a("recognizerOptions");
        v1 v1Var3 = new v1();
        v1Var3.a(3);
        f47373d = a12.b(v1Var3.b()).a();
    }

    private ya() {
    }

    @Override // bj.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        rh rhVar = (rh) obj;
        bj.e eVar = (bj.e) obj2;
        eVar.e(f47371b, rhVar.b());
        eVar.e(f47372c, rhVar.a());
        eVar.e(f47373d, rhVar.c());
    }
}
