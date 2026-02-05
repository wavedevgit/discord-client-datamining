package pg;

import xi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class ya implements xi.d {

    /* renamed from: a  reason: collision with root package name */
    static final ya f45919a = new ya();

    /* renamed from: b  reason: collision with root package name */
    private static final xi.c f45920b;

    /* renamed from: c  reason: collision with root package name */
    private static final xi.c f45921c;

    /* renamed from: d  reason: collision with root package name */
    private static final xi.c f45922d;

    static {
        c.b a10 = xi.c.a("inferenceCommonLogEvent");
        v1 v1Var = new v1();
        v1Var.a(1);
        f45920b = a10.b(v1Var.b()).a();
        c.b a11 = xi.c.a("imageInfo");
        v1 v1Var2 = new v1();
        v1Var2.a(2);
        f45921c = a11.b(v1Var2.b()).a();
        c.b a12 = xi.c.a("recognizerOptions");
        v1 v1Var3 = new v1();
        v1Var3.a(3);
        f45922d = a12.b(v1Var3.b()).a();
    }

    private ya() {
    }

    @Override // xi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        rh rhVar = (rh) obj;
        xi.e eVar = (xi.e) obj2;
        eVar.d(f45920b, rhVar.b());
        eVar.d(f45921c, rhVar.a());
        eVar.d(f45922d, rhVar.c());
    }
}
