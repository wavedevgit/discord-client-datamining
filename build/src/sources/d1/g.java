package d1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    public static final g f20151a = new g();

    /* renamed from: b  reason: collision with root package name */
    private static final float[] f20152b;

    /* renamed from: c  reason: collision with root package name */
    private static final float[] f20153c;

    /* renamed from: d  reason: collision with root package name */
    private static final x f20154d;

    /* renamed from: e  reason: collision with root package name */
    private static final x f20155e;

    /* renamed from: f  reason: collision with root package name */
    private static final w f20156f;

    /* renamed from: g  reason: collision with root package name */
    private static final w f20157g;

    /* renamed from: h  reason: collision with root package name */
    private static final w f20158h;

    /* renamed from: i  reason: collision with root package name */
    private static final w f20159i;

    /* renamed from: j  reason: collision with root package name */
    private static final w f20160j;

    /* renamed from: k  reason: collision with root package name */
    private static final w f20161k;

    /* renamed from: l  reason: collision with root package name */
    private static final w f20162l;

    /* renamed from: m  reason: collision with root package name */
    private static final w f20163m;

    /* renamed from: n  reason: collision with root package name */
    private static final w f20164n;

    /* renamed from: o  reason: collision with root package name */
    private static final w f20165o;

    /* renamed from: p  reason: collision with root package name */
    private static final w f20166p;

    /* renamed from: q  reason: collision with root package name */
    private static final w f20167q;

    /* renamed from: r  reason: collision with root package name */
    private static final w f20168r;

    /* renamed from: s  reason: collision with root package name */
    private static final w f20169s;

    /* renamed from: t  reason: collision with root package name */
    private static final c f20170t;

    /* renamed from: u  reason: collision with root package name */
    private static final c f20171u;

    /* renamed from: v  reason: collision with root package name */
    private static final w f20172v;

    /* renamed from: w  reason: collision with root package name */
    private static final c f20173w;

    /* renamed from: x  reason: collision with root package name */
    private static final c[] f20174x;

    static {
        float[] fArr = {0.64f, 0.33f, 0.3f, 0.6f, 0.15f, 0.06f};
        f20152b = fArr;
        float[] fArr2 = {0.67f, 0.33f, 0.21f, 0.71f, 0.14f, 0.08f};
        f20153c = fArr2;
        x xVar = new x(2.4d, 0.9478672985781991d, 0.05213270142180095d, 0.07739938080495357d, 0.04045d, 0.0d, 0.0d, 96, null);
        f20154d = xVar;
        x xVar2 = new x(2.2d, 0.9478672985781991d, 0.05213270142180095d, 0.07739938080495357d, 0.04045d, 0.0d, 0.0d, 96, null);
        f20155e = xVar2;
        j jVar = j.f20188a;
        w wVar = new w("sRGB IEC61966-2.1", fArr, jVar.e(), xVar, 0);
        f20156f = wVar;
        w wVar2 = new w("sRGB IEC61966-2.1 (Linear)", fArr, jVar.e(), 1.0d, 0.0f, 1.0f, 1);
        f20157g = wVar2;
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
        f20158h = wVar3;
        w wVar4 = new w("scRGB IEC 61966-2-2:2003", fArr, jVar.e(), 1.0d, -0.5f, 7.499f, 3);
        f20159i = wVar4;
        w wVar5 = new w("Rec. ITU-R BT.709-5", new float[]{0.64f, 0.33f, 0.3f, 0.6f, 0.15f, 0.06f}, jVar.e(), new x(2.2222222222222223d, 0.9099181073703367d, 0.09008189262966333d, 0.2222222222222222d, 0.081d, 0.0d, 0.0d, 96, null), 4);
        f20160j = wVar5;
        w wVar6 = new w("Rec. ITU-R BT.2020-1", new float[]{0.708f, 0.292f, 0.17f, 0.797f, 0.131f, 0.046f}, jVar.e(), new x(2.2222222222222223d, 0.9096697898662786d, 0.09033021013372146d, 0.2222222222222222d, 0.08145d, 0.0d, 0.0d, 96, null), 5);
        f20161k = wVar6;
        w wVar7 = new w("SMPTE RP 431-2-2007 DCI (P3)", new float[]{0.68f, 0.32f, 0.265f, 0.69f, 0.15f, 0.06f}, new y(0.314f, 0.351f), 2.6d, 0.0f, 1.0f, 6);
        f20162l = wVar7;
        w wVar8 = new w("Display P3", new float[]{0.68f, 0.32f, 0.265f, 0.69f, 0.15f, 0.06f}, jVar.e(), xVar, 7);
        f20163m = wVar8;
        w wVar9 = new w("NTSC (1953)", fArr2, jVar.a(), new x(2.2222222222222223d, 0.9099181073703367d, 0.09008189262966333d, 0.2222222222222222d, 0.081d, 0.0d, 0.0d, 96, null), 8);
        f20164n = wVar9;
        w wVar10 = new w("SMPTE-C RGB", new float[]{0.63f, 0.34f, 0.31f, 0.595f, 0.155f, 0.07f}, jVar.e(), new x(2.2222222222222223d, 0.9099181073703367d, 0.09008189262966333d, 0.2222222222222222d, 0.081d, 0.0d, 0.0d, 96, null), 9);
        f20165o = wVar10;
        w wVar11 = new w("Adobe RGB (1998)", new float[]{0.64f, 0.33f, 0.21f, 0.71f, 0.15f, 0.06f}, jVar.e(), 2.2d, 0.0f, 1.0f, 10);
        f20166p = wVar11;
        w wVar12 = new w("ROMM RGB ISO 22028-2:2013", new float[]{0.7347f, 0.2653f, 0.1596f, 0.8404f, 0.0366f, 1.0E-4f}, jVar.b(), new x(1.8d, 1.0d, 0.0d, 0.0625d, 0.031248d, 0.0d, 0.0d, 96, null), 11);
        f20167q = wVar12;
        w wVar13 = new w("SMPTE ST 2065-1:2012 ACES", new float[]{0.7347f, 0.2653f, 0.0f, 1.0f, 1.0E-4f, -0.077f}, jVar.d(), 1.0d, -65504.0f, 65504.0f, 12);
        f20168r = wVar13;
        w wVar14 = new w("Academy S-2014-004 ACEScg", new float[]{0.713f, 0.293f, 0.165f, 0.83f, 0.128f, 0.044f}, jVar.d(), 1.0d, -65504.0f, 65504.0f, 13);
        f20169s = wVar14;
        z zVar = new z("Generic XYZ", 14);
        f20170t = zVar;
        k kVar = new k("Generic L*a*b*", 15);
        f20171u = kVar;
        w wVar15 = new w("None", fArr, jVar.e(), xVar2, 16);
        f20172v = wVar15;
        l lVar = new l("Oklab", 17);
        f20173w = lVar;
        f20174x = new c[]{wVar, wVar2, wVar3, wVar4, wVar5, wVar6, wVar7, wVar8, wVar9, wVar10, wVar11, wVar12, wVar13, wVar14, zVar, kVar, wVar15, lVar};
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
        return f20174x;
    }

    public final float[] f() {
        return f20153c;
    }

    public final c g() {
        return f20173w;
    }

    public final w h() {
        return f20156f;
    }

    public final float[] i() {
        return f20152b;
    }

    public final w j() {
        return f20172v;
    }
}
