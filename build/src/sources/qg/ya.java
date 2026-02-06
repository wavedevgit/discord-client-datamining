package qg;

import yi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class ya implements yi.d {

    /* renamed from: a  reason: collision with root package name */
    static final ya f47749a = new ya();

    /* renamed from: b  reason: collision with root package name */
    private static final yi.c f47750b;

    /* renamed from: c  reason: collision with root package name */
    private static final yi.c f47751c;

    /* renamed from: d  reason: collision with root package name */
    private static final yi.c f47752d;

    static {
        c.b a10 = yi.c.a("inferenceCommonLogEvent");
        v1 v1Var = new v1();
        v1Var.a(1);
        f47750b = a10.b(v1Var.b()).a();
        c.b a11 = yi.c.a("imageInfo");
        v1 v1Var2 = new v1();
        v1Var2.a(2);
        f47751c = a11.b(v1Var2.b()).a();
        c.b a12 = yi.c.a("recognizerOptions");
        v1 v1Var3 = new v1();
        v1Var3.a(3);
        f47752d = a12.b(v1Var3.b()).a();
    }

    private ya() {
    }

    @Override // yi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        rh rhVar = (rh) obj;
        yi.e eVar = (yi.e) obj2;
        eVar.a(f47750b, rhVar.b());
        eVar.a(f47751c, rhVar.a());
        eVar.a(f47752d, rhVar.c());
    }
}
