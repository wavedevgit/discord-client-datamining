package d1;

import d1.b;
import d1.m;
import java.util.Arrays;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FloatCompanionObject;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h {

    /* renamed from: g  reason: collision with root package name */
    public static final a f21145g;

    /* renamed from: h  reason: collision with root package name */
    private static final h f21146h;

    /* renamed from: i  reason: collision with root package name */
    private static final h f21147i;

    /* renamed from: j  reason: collision with root package name */
    private static final h f21148j;

    /* renamed from: a  reason: collision with root package name */
    private final c f21149a;

    /* renamed from: b  reason: collision with root package name */
    private final c f21150b;

    /* renamed from: c  reason: collision with root package name */
    private final c f21151c;

    /* renamed from: d  reason: collision with root package name */
    private final c f21152d;

    /* renamed from: e  reason: collision with root package name */
    private final int f21153e;

    /* renamed from: f  reason: collision with root package name */
    private final float[] f21154f;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: d1.h$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0281a extends h {
            C0281a(c cVar, int i10) {
                super(cVar, cVar, i10, null);
            }

            @Override // d1.h
            public long e(float f10, float f11, float f12, float f13) {
                return c1.b.a(f10, f11, f12, f13, d());
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final float[] b(c cVar, c cVar2, int i10) {
            float[] c10;
            float[] c11;
            if (!m.e(i10, m.f21175a.a())) {
                return null;
            }
            long e10 = cVar.e();
            b.a aVar = d1.b.f21112a;
            boolean e11 = d1.b.e(e10, aVar.b());
            boolean e12 = d1.b.e(cVar2.e(), aVar.b());
            if (e11 && e12) {
                return null;
            }
            if (!e11 && !e12) {
                return null;
            }
            if (!e11) {
                cVar = cVar2;
            }
            Intrinsics.checkNotNull(cVar, "null cannot be cast to non-null type androidx.compose.ui.graphics.colorspace.Rgb");
            w wVar = (w) cVar;
            if (e11) {
                c10 = wVar.J().c();
            } else {
                c10 = j.f21158a.c();
            }
            if (e12) {
                c11 = wVar.J().c();
            } else {
                c11 = j.f21158a.c();
            }
            return new float[]{c10[0] / c11[0], c10[1] / c11[1], c10[2] / c11[2]};
        }

        public final h c() {
            return h.f21148j;
        }

        public final h d() {
            return h.f21146h;
        }

        public final h e() {
            return h.f21147i;
        }

        public final h f(c source) {
            Intrinsics.checkNotNullParameter(source, "source");
            return new C0281a(source, m.f21175a.c());
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b extends h {

        /* renamed from: k  reason: collision with root package name */
        private final w f21155k;

        /* renamed from: l  reason: collision with root package name */
        private final w f21156l;

        /* renamed from: m  reason: collision with root package name */
        private final float[] f21157m;

        public /* synthetic */ b(w wVar, w wVar2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(wVar, wVar2, i10);
        }

        private final float[] f(w wVar, w wVar2, int i10) {
            if (d.f(wVar.J(), wVar2.J())) {
                return d.k(wVar2.F(), wVar.I());
            }
            float[] I = wVar.I();
            float[] F = wVar2.F();
            float[] c10 = wVar.J().c();
            float[] c11 = wVar2.J().c();
            y J = wVar.J();
            j jVar = j.f21158a;
            if (!d.f(J, jVar.b())) {
                float[] b10 = d1.a.f21107b.a().b();
                float[] c12 = jVar.c();
                float[] copyOf = Arrays.copyOf(c12, c12.length);
                Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(this, size)");
                I = d.k(d.e(b10, c10, copyOf), wVar.I());
            }
            if (!d.f(wVar2.J(), jVar.b())) {
                float[] b11 = d1.a.f21107b.a().b();
                float[] c13 = jVar.c();
                float[] copyOf2 = Arrays.copyOf(c13, c13.length);
                Intrinsics.checkNotNullExpressionValue(copyOf2, "copyOf(this, size)");
                F = d.j(d.k(d.e(b11, c11, copyOf2), wVar2.I()));
            }
            if (m.e(i10, m.f21175a.a())) {
                I = d.l(new float[]{c10[0] / c11[0], c10[1] / c11[1], c10[2] / c11[2]}, I);
            }
            return d.k(F, I);
        }

        @Override // d1.h
        public long e(float f10, float f11, float f12, float f13) {
            float a10 = (float) this.f21155k.D().a(f10);
            float a11 = (float) this.f21155k.D().a(f11);
            float a12 = (float) this.f21155k.D().a(f12);
            return c1.b.a((float) this.f21156l.G().a(d.n(this.f21157m, a10, a11, a12)), (float) this.f21156l.G().a(d.o(this.f21157m, a10, a11, a12)), (float) this.f21156l.G().a(d.p(this.f21157m, a10, a11, a12)), f13, this.f21156l);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        private b(w mSource, w mDestination, int i10) {
            super(mSource, mDestination, mSource, mDestination, i10, null, null);
            Intrinsics.checkNotNullParameter(mSource, "mSource");
            Intrinsics.checkNotNullParameter(mDestination, "mDestination");
            this.f21155k = mSource;
            this.f21156l = mDestination;
            this.f21157m = f(mSource, mDestination, i10);
        }
    }

    static {
        a aVar = new a(null);
        f21145g = aVar;
        g gVar = g.f21121a;
        f21146h = aVar.f(gVar.h());
        w h10 = gVar.h();
        c g10 = gVar.g();
        m.a aVar2 = m.f21175a;
        f21147i = new h(h10, g10, aVar2.b(), null);
        f21148j = new h(gVar.g(), gVar.h(), aVar2.b(), null);
    }

    public /* synthetic */ h(c cVar, c cVar2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(cVar, cVar2, i10);
    }

    public final c d() {
        return this.f21150b;
    }

    public long e(float f10, float f11, float f12, float f13) {
        long h10 = this.f21151c.h(f10, f11, f12);
        FloatCompanionObject floatCompanionObject = FloatCompanionObject.INSTANCE;
        float intBitsToFloat = Float.intBitsToFloat((int) (h10 >> 32));
        float intBitsToFloat2 = Float.intBitsToFloat((int) (h10 & 4294967295L));
        float i10 = this.f21151c.i(f10, f11, f12);
        float[] fArr = this.f21154f;
        if (fArr != null) {
            intBitsToFloat *= fArr[0];
            intBitsToFloat2 *= fArr[1];
            i10 *= fArr[2];
        }
        float f14 = intBitsToFloat2;
        float f15 = intBitsToFloat;
        return this.f21152d.j(f15, f14, i10, f13, this.f21150b);
    }

    public /* synthetic */ h(c cVar, c cVar2, c cVar3, c cVar4, int i10, float[] fArr, DefaultConstructorMarker defaultConstructorMarker) {
        this(cVar, cVar2, cVar3, cVar4, i10, fArr);
    }

    private h(c source, c destination, c transformSource, c transformDestination, int i10, float[] fArr) {
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(destination, "destination");
        Intrinsics.checkNotNullParameter(transformSource, "transformSource");
        Intrinsics.checkNotNullParameter(transformDestination, "transformDestination");
        this.f21149a = source;
        this.f21150b = destination;
        this.f21151c = transformSource;
        this.f21152d = transformDestination;
        this.f21153e = i10;
        this.f21154f = fArr;
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private h(d1.c r13, d1.c r14, int r15) {
        /*
            r12 = this;
            java.lang.String r0 = "source"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r13, r0)
            java.lang.String r0 = "destination"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r14, r0)
            long r0 = r13.e()
            d1.b$a r2 = d1.b.f21112a
            long r3 = r2.b()
            boolean r0 = d1.b.e(r0, r3)
            r1 = 2
            r3 = 0
            if (r0 == 0) goto L28
            d1.j r0 = d1.j.f21158a
            d1.y r0 = r0.b()
            d1.c r0 = d1.d.d(r13, r0, r3, r1, r3)
            r7 = r0
            goto L29
        L28:
            r7 = r13
        L29:
            long r4 = r14.e()
            long r8 = r2.b()
            boolean r0 = d1.b.e(r4, r8)
            if (r0 == 0) goto L43
            d1.j r0 = d1.j.f21158a
            d1.y r0 = r0.b()
            d1.c r0 = d1.d.d(r14, r0, r3, r1, r3)
            r8 = r0
            goto L44
        L43:
            r8 = r14
        L44:
            d1.h$a r0 = d1.h.f21145g
            float[] r10 = d1.h.a.a(r0, r13, r14, r15)
            r11 = 0
            r4 = r12
            r5 = r13
            r6 = r14
            r9 = r15
            r4.<init>(r5, r6, r7, r8, r9, r10, r11)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: d1.h.<init>(d1.c, d1.c, int):void");
    }
}
