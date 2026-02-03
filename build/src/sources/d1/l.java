package d1;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class l extends c {

    /* renamed from: e  reason: collision with root package name */
    public static final a f20029e = new a(null);

    /* renamed from: f  reason: collision with root package name */
    private static final float[] f20030f;

    /* renamed from: g  reason: collision with root package name */
    private static final float[] f20031g;

    /* renamed from: h  reason: collision with root package name */
    private static final float[] f20032h;

    /* renamed from: i  reason: collision with root package name */
    private static final float[] f20033i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    static {
        float[] b10 = d1.a.f19966b.a().b();
        j jVar = j.f20017a;
        float[] k10 = d.k(new float[]{0.818933f, 0.032984544f, 0.0482003f, 0.36186674f, 0.9293119f, 0.26436627f, -0.12885971f, 0.03614564f, 0.6338517f}, d.e(b10, jVar.b().c(), jVar.e().c()));
        f20030f = k10;
        float[] fArr = {0.21045426f, 1.9779985f, 0.025904037f, 0.7936178f, -2.4285922f, 0.78277177f, -0.004072047f, 0.4505937f, -0.80867577f};
        f20031g = fArr;
        f20032h = d.j(k10);
        f20033i = d.j(fArr);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public l(String name, int i10) {
        super(name, b.f19971a.a(), i10, null);
        Intrinsics.checkNotNullParameter(name, "name");
    }

    @Override // d1.c
    public float c(int i10) {
        if (i10 == 0) {
            return 1.0f;
        }
        return 0.5f;
    }

    @Override // d1.c
    public float d(int i10) {
        if (i10 == 0) {
            return 0.0f;
        }
        return -0.5f;
    }

    @Override // d1.c
    public long h(float f10, float f11, float f12) {
        float l10 = kotlin.ranges.d.l(f10, 0.0f, 1.0f);
        float l11 = kotlin.ranges.d.l(f11, -0.5f, 0.5f);
        float l12 = kotlin.ranges.d.l(f12, -0.5f, 0.5f);
        float[] fArr = f20033i;
        float n10 = d.n(fArr, l10, l11, l12);
        float o10 = d.o(fArr, l10, l11, l12);
        float p10 = d.p(fArr, l10, l11, l12);
        float f13 = n10 * n10 * n10;
        float f14 = o10 * o10 * o10;
        float f15 = p10 * p10 * p10;
        float[] fArr2 = f20032h;
        return (Float.floatToIntBits(d.n(fArr2, f13, f14, f15)) << 32) | (Float.floatToIntBits(d.o(fArr2, f13, f14, f15)) & 4294967295L);
    }

    @Override // d1.c
    public float i(float f10, float f11, float f12) {
        float l10 = kotlin.ranges.d.l(f10, 0.0f, 1.0f);
        float l11 = kotlin.ranges.d.l(f11, -0.5f, 0.5f);
        float l12 = kotlin.ranges.d.l(f12, -0.5f, 0.5f);
        float[] fArr = f20033i;
        float n10 = d.n(fArr, l10, l11, l12);
        float o10 = d.o(fArr, l10, l11, l12);
        float p10 = d.p(fArr, l10, l11, l12);
        float f13 = p10 * p10 * p10;
        return d.p(f20032h, n10 * n10 * n10, o10 * o10 * o10, f13);
    }

    @Override // d1.c
    public long j(float f10, float f11, float f12, float f13, c colorSpace) {
        Intrinsics.checkNotNullParameter(colorSpace, "colorSpace");
        float[] fArr = f20030f;
        float n10 = d.n(fArr, f10, f11, f12);
        float o10 = d.o(fArr, f10, f11, f12);
        float p10 = d.p(fArr, f10, f11, f12);
        double d10 = 0.33333334f;
        float signum = Math.signum(n10) * ((float) Math.pow(Math.abs(n10), d10));
        float signum2 = Math.signum(o10) * ((float) Math.pow(Math.abs(o10), d10));
        float signum3 = Math.signum(p10) * ((float) Math.pow(Math.abs(p10), d10));
        float[] fArr2 = f20031g;
        return c1.b.a(d.n(fArr2, signum, signum2, signum3), d.o(fArr2, signum, signum2, signum3), d.p(fArr2, signum, signum2, signum3), f13, colorSpace);
    }
}
