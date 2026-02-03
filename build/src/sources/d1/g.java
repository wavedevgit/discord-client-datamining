package d1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    public static final g f19980a = new g();

    /* renamed from: b  reason: collision with root package name */
    private static final float[] f19981b;

    /* renamed from: c  reason: collision with root package name */
    private static final float[] f19982c;

    /* renamed from: d  reason: collision with root package name */
    private static final x f19983d;

    /* renamed from: e  reason: collision with root package name */
    private static final x f19984e;

    /* renamed from: f  reason: collision with root package name */
    private static final w f19985f;

    /* renamed from: g  reason: collision with root package name */
    private static final w f19986g;

    /* renamed from: h  reason: collision with root package name */
    private static final w f19987h;

    /* renamed from: i  reason: collision with root package name */
    private static final w f19988i;

    /* renamed from: j  reason: collision with root package name */
    private static final w f19989j;

    /* renamed from: k  reason: collision with root package name */
    private static final w f19990k;

    /* renamed from: l  reason: collision with root package name */
    private static final w f19991l;

    /* renamed from: m  reason: collision with root package name */
    private static final w f19992m;

    /* renamed from: n  reason: collision with root package name */
    private static final w f19993n;

    /* renamed from: o  reason: collision with root package name */
    private static final w f19994o;

    /* renamed from: p  reason: collision with root package name */
    private static final w f19995p;

    /* renamed from: q  reason: collision with root package name */
    private static final w f19996q;

    /* renamed from: r  reason: collision with root package name */
    private static final w f19997r;

    /* renamed from: s  reason: collision with root package name */
    private static final w f19998s;

    /* renamed from: t  reason: collision with root package name */
    private static final c f19999t;

    /* renamed from: u  reason: collision with root package name */
    private static final c f20000u;

    /* renamed from: v  reason: collision with root package name */
    private static final w f20001v;

    /* renamed from: w  reason: collision with root package name */
    private static final c f20002w;

    /* renamed from: x  reason: collision with root package name */
    private static final c[] f20003x;

    static {
        float[] fArr = {0.64f, 0.33f, 0.3f, 0.6f, 0.15f, 0.06f};
        f19981b = fArr;
        float[] fArr2 = {0.67f, 0.33f, 0.21f, 0.71f, 0.14f, 0.08f};
        f19982c = fArr2;
        x xVar = new x(2.4d, 0.9478672985781991d, 0.05213270142180095d, 0.07739938080495357d, 0.04045d, 0.0d, 0.0d, 96, null);
        f19983d = xVar;
        x xVar2 = new x(2.2d, 0.9478672985781991d, 0.05213270142180095d, 0.07739938080495357d, 0.04045d, 0.0d, 0.0d, 96, null);
        f19984e = xVar2;
        j jVar = j.f20017a;
        w wVar = new w("sRGB IEC61966-2.1", fArr, jVar.e(), xVar, 0);
        f19985f = wVar;
        w wVar2 = new w("sRGB IEC61966-2.1 (Linear)", fArr, jVar.e(), 1.0d, 0.0f, 1.0f, 1);
        f19986g = wVar2;
        w wVar3 = new w("scRGB-nl IEC 61966-2-2:2003", fArr, jVar.e(), null, new i() { // from class: d1.e
            @Override // d1.i
            public final double a(double d10) {
                double c10;
                c10 = g.c(d10);
                return c10;
            }
        }, new i() { // from class: d1.f
            @Override // d1.i
            public final double a(double d10) {
                double d11;
                d11 = g.d(d10);
                return d11;
            }
        }, -0.799f, 2.399f, xVar, 2);
        f19987h = wVar3;
        w wVar4 = new w("scRGB IEC 61966-2-2:2003", fArr, jVar.e(), 1.0d, -0.5f, 7.499f, 3);
        f19988i = wVar4;
        w wVar5 = new w("Rec. ITU-R BT.709-5", new float[]{0.64f, 0.33f, 0.3f, 0.6f, 0.15f, 0.06f}, jVar.e(), new x(2.2222222222222223d, 0.9099181073703367d, 0.09008189262966333d, 0.2222222222222222d, 0.081d, 0.0d, 0.0d, 96, null), 4);
        f19989j = wVar5;
        w wVar6 = new w("Rec. ITU-R BT.2020-1", new float[]{0.708f, 0.292f, 0.17f, 0.797f, 0.131f, 0.046f}, jVar.e(), new x(2.2222222222222223d, 0.9096697898662786d, 0.09033021013372146d, 0.2222222222222222d, 0.08145d, 0.0d, 0.0d, 96, null), 5);
        f19990k = wVar6;
        w wVar7 = new w("SMPTE RP 431-2-2007 DCI (P3)", new float[]{0.68f, 0.32f, 0.265f, 0.69f, 0.15f, 0.06f}, new y(0.314f, 0.351f), 2.6d, 0.0f, 1.0f, 6);
        f19991l = wVar7;
        w wVar8 = new w("Display P3", new float[]{0.68f, 0.32f, 0.265f, 0.69f, 0.15f, 0.06f}, jVar.e(), xVar, 7);
        f19992m = wVar8;
        w wVar9 = new w("NTSC (1953)", fArr2, jVar.a(), new x(2.2222222222222223d, 0.9099181073703367d, 0.09008189262966333d, 0.2222222222222222d, 0.081d, 0.0d, 0.0d, 96, null), 8);
        f19993n = wVar9;
        w wVar10 = new w("SMPTE-C RGB", new float[]{0.63f, 0.34f, 0.31f, 0.595f, 0.155f, 0.07f}, jVar.e(), new x(2.2222222222222223d, 0.9099181073703367d, 0.09008189262966333d, 0.2222222222222222d, 0.081d, 0.0d, 0.0d, 96, null), 9);
        f19994o = wVar10;
        w wVar11 = new w("Adobe RGB (1998)", new float[]{0.64f, 0.33f, 0.21f, 0.71f, 0.15f, 0.06f}, jVar.e(), 2.2d, 0.0f, 1.0f, 10);
        f19995p = wVar11;
        w wVar12 = new w("ROMM RGB ISO 22028-2:2013", new float[]{0.7347f, 0.2653f, 0.1596f, 0.8404f, 0.0366f, 1.0E-4f}, jVar.b(), new x(1.8d, 1.0d, 0.0d, 0.0625d, 0.031248d, 0.0d, 0.0d, 96, null), 11);
        f19996q = wVar12;
        w wVar13 = new w("SMPTE ST 2065-1:2012 ACES", new float[]{0.7347f, 0.2653f, 0.0f, 1.0f, 1.0E-4f, -0.077f}, jVar.d(), 1.0d, -65504.0f, 65504.0f, 12);
        f19997r = wVar13;
        w wVar14 = new w("Academy S-2014-004 ACEScg", new float[]{0.713f, 0.293f, 0.165f, 0.83f, 0.128f, 0.044f}, jVar.d(), 1.0d, -65504.0f, 65504.0f, 13);
        f19998s = wVar14;
        z zVar = new z("Generic XYZ", 14);
        f19999t = zVar;
        k kVar = new k("Generic L*a*b*", 15);
        f20000u = kVar;
        w wVar15 = new w("None", fArr, jVar.e(), xVar2, 16);
        f20001v = wVar15;
        l lVar = new l("Oklab", 17);
        f20002w = lVar;
        f20003x = new c[]{wVar, wVar2, wVar3, wVar4, wVar5, wVar6, wVar7, wVar8, wVar9, wVar10, wVar11, wVar12, wVar13, wVar14, zVar, kVar, wVar15, lVar};
    }

    private g() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final double c(double d10) {
        return d.a(d10, 0.9478672985781991d, 0.05213270142180095d, 0.07739938080495357d, 0.04045d, 2.4d);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final double d(double d10) {
        return d.b(d10, 0.9478672985781991d, 0.05213270142180095d, 0.07739938080495357d, 0.04045d, 2.4d);
    }

    public final c[] e() {
        return f20003x;
    }

    public final float[] f() {
        return f19982c;
    }

    public final c g() {
        return f20002w;
    }

    public final w h() {
        return f19985f;
    }

    public final float[] i() {
        return f19981b;
    }

    public final w j() {
        return f20001v;
    }
}
