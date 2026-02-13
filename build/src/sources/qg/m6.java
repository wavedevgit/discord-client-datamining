package qg;

import bj.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class m6 implements bj.d {

    /* renamed from: a  reason: collision with root package name */
    static final m6 f45274a = new m6();

    /* renamed from: b  reason: collision with root package name */
    private static final bj.c f45275b;

    /* renamed from: c  reason: collision with root package name */
    private static final bj.c f45276c;

    /* renamed from: d  reason: collision with root package name */
    private static final bj.c f45277d;

    /* renamed from: e  reason: collision with root package name */
    private static final bj.c f45278e;

    /* renamed from: f  reason: collision with root package name */
    private static final bj.c f45279f;

    /* renamed from: g  reason: collision with root package name */
    private static final bj.c f45280g;

    static {
        c.b a10 = bj.c.a("inferenceCommonLogEvent");
        s1 s1Var = new s1();
        s1Var.a(1);
        f45275b = a10.b(s1Var.b()).a();
        c.b a11 = bj.c.a("options");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f45276c = a11.b(s1Var2.b()).a();
        c.b a12 = bj.c.a("imageInfo");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f45277d = a12.b(s1Var3.b()).a();
        c.b a13 = bj.c.a("detectorOptions");
        s1 s1Var4 = new s1();
        s1Var4.a(4);
        f45278e = a13.b(s1Var4.b()).a();
        c.b a14 = bj.c.a("contourDetectedFaces");
        s1 s1Var5 = new s1();
        s1Var5.a(5);
        f45279f = a14.b(s1Var5.b()).a();
        c.b a15 = bj.c.a("nonContourDetectedFaces");
        s1 s1Var6 = new s1();
        s1Var6.a(6);
        f45280g = a15.b(s1Var6.b()).a();
    }

    private m6() {
    }

    @Override // bj.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        wa waVar = (wa) obj;
        bj.e eVar = (bj.e) obj2;
        eVar.e(f45275b, waVar.c());
        eVar.e(f45276c, null);
        eVar.e(f45277d, waVar.b());
        eVar.e(f45278e, waVar.a());
        eVar.e(f45279f, waVar.d());
        eVar.e(f45280g, waVar.e());
    }
}
