package dd;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import dd.i0;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n implements m {

    /* renamed from: q  reason: collision with root package name */
    private static final double[] f21486q = {23.976023976023978d, 24.0d, 25.0d, 29.97002997002997d, 30.0d, 50.0d, 59.94005994005994d, 60.0d};

    /* renamed from: a  reason: collision with root package name */
    private String f21487a;

    /* renamed from: b  reason: collision with root package name */
    private tc.b0 f21488b;

    /* renamed from: c  reason: collision with root package name */
    private final k0 f21489c;

    /* renamed from: d  reason: collision with root package name */
    private final ne.h0 f21490d;

    /* renamed from: e  reason: collision with root package name */
    private final u f21491e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean[] f21492f;

    /* renamed from: g  reason: collision with root package name */
    private final a f21493g;

    /* renamed from: h  reason: collision with root package name */
    private long f21494h;

    /* renamed from: i  reason: collision with root package name */
    private boolean f21495i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f21496j;

    /* renamed from: k  reason: collision with root package name */
    private long f21497k;

    /* renamed from: l  reason: collision with root package name */
    private long f21498l;

    /* renamed from: m  reason: collision with root package name */
    private long f21499m;

    /* renamed from: n  reason: collision with root package name */
    private long f21500n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f21501o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f21502p;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: e  reason: collision with root package name */
        private static final byte[] f21503e = {0, 0, 1};

        /* renamed from: a  reason: collision with root package name */
        private boolean f21504a;

        /* renamed from: b  reason: collision with root package name */
        public int f21505b;

        /* renamed from: c  reason: collision with root package name */
        public int f21506c;

        /* renamed from: d  reason: collision with root package name */
        public byte[] f21507d;

        public a(int i10) {
            this.f21507d = new byte[i10];
        }

        public void a(byte[] bArr, int i10, int i11) {
            if (!this.f21504a) {
                return;
            }
            int i12 = i11 - i10;
            byte[] bArr2 = this.f21507d;
            int length = bArr2.length;
            int i13 = this.f21505b;
            if (length < i13 + i12) {
                this.f21507d = Arrays.copyOf(bArr2, (i13 + i12) * 2);
            }
            System.arraycopy(bArr, i10, this.f21507d, this.f21505b, i12);
            this.f21505b += i12;
        }

        public boolean b(int i10, int i11) {
            if (this.f21504a) {
                int i12 = this.f21505b - i11;
                this.f21505b = i12;
                if (this.f21506c == 0 && i10 == 181) {
                    this.f21506c = i12;
                } else {
                    this.f21504a = false;
                    return true;
                }
            } else if (i10 == 179) {
                this.f21504a = true;
            }
            byte[] bArr = f21503e;
            a(bArr, 0, bArr.length);
            return false;
        }

        public void c() {
            this.f21504a = false;
            this.f21505b = 0;
            this.f21506c = 0;
        }
    }

    public n() {
        this(null);
    }

    /* JADX WARN: Removed duplicated region for block: B:14:0x0073  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static android.util.Pair a(dd.n.a r8, java.lang.String r9) {
        /*
            byte[] r0 = r8.f21507d
            int r1 = r8.f21505b
            byte[] r0 = java.util.Arrays.copyOf(r0, r1)
            r1 = 4
            r2 = r0[r1]
            r2 = r2 & 255(0xff, float:3.57E-43)
            r3 = 5
            r4 = r0[r3]
            r5 = r4 & 255(0xff, float:3.57E-43)
            r6 = 6
            r6 = r0[r6]
            r6 = r6 & 255(0xff, float:3.57E-43)
            int r2 = r2 << r1
            int r5 = r5 >> r1
            r2 = r2 | r5
            r4 = r4 & 15
            int r4 = r4 << 8
            r4 = r4 | r6
            r5 = 7
            r6 = r0[r5]
            r6 = r6 & 240(0xf0, float:3.36E-43)
            int r6 = r6 >> r1
            r7 = 2
            if (r6 == r7) goto L3e
            r7 = 3
            if (r6 == r7) goto L38
            if (r6 == r1) goto L30
            r1 = 1065353216(0x3f800000, float:1.0)
            goto L44
        L30:
            int r1 = r4 * 121
            float r1 = (float) r1
            int r6 = r2 * 100
        L35:
            float r6 = (float) r6
            float r1 = r1 / r6
            goto L44
        L38:
            int r1 = r4 * 16
            float r1 = (float) r1
            int r6 = r2 * 9
            goto L35
        L3e:
            int r1 = r4 * 4
            float r1 = (float) r1
            int r6 = r2 * 3
            goto L35
        L44:
            com.google.android.exoplayer2.Format$b r6 = new com.google.android.exoplayer2.Format$b
            r6.<init>()
            com.google.android.exoplayer2.Format$b r9 = r6.U(r9)
            java.lang.String r6 = "video/mpeg2"
            com.google.android.exoplayer2.Format$b r9 = r9.g0(r6)
            com.google.android.exoplayer2.Format$b r9 = r9.n0(r2)
            com.google.android.exoplayer2.Format$b r9 = r9.S(r4)
            com.google.android.exoplayer2.Format$b r9 = r9.c0(r1)
            java.util.List r1 = java.util.Collections.singletonList(r0)
            com.google.android.exoplayer2.Format$b r9 = r9.V(r1)
            com.google.android.exoplayer2.Format r9 = r9.G()
            r1 = r0[r5]
            r1 = r1 & 15
            int r1 = r1 + (-1)
            if (r1 < 0) goto L98
            double[] r2 = dd.n.f21486q
            int r4 = r2.length
            if (r1 >= r4) goto L98
            r1 = r2[r1]
            int r8 = r8.f21506c
            int r8 = r8 + 9
            r8 = r0[r8]
            r0 = r8 & 96
            int r0 = r0 >> r3
            r8 = r8 & 31
            if (r0 == r8) goto L90
            double r3 = (double) r0
            r5 = 4607182418800017408(0x3ff0000000000000, double:1.0)
            double r3 = r3 + r5
            int r8 = r8 + 1
            double r5 = (double) r8
            double r3 = r3 / r5
            double r1 = r1 * r3
        L90:
            r3 = 4696837146684686336(0x412e848000000000, double:1000000.0)
            double r3 = r3 / r1
            long r0 = (long) r3
            goto L9a
        L98:
            r0 = 0
        L9a:
            java.lang.Long r8 = java.lang.Long.valueOf(r0)
            android.util.Pair r8 = android.util.Pair.create(r9, r8)
            return r8
        */
        throw new UnsupportedOperationException("Method not decompiled: dd.n.a(dd.n$a, java.lang.String):android.util.Pair");
    }

    /* JADX WARN: Removed duplicated region for block: B:61:0x012c  */
    /* JADX WARN: Removed duplicated region for block: B:67:0x0142  */
    @Override // dd.m
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void b(ne.h0 r20) {
        /*
            Method dump skipped, instructions count: 329
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: dd.n.b(ne.h0):void");
    }

    @Override // dd.m
    public void c() {
        ne.d0.a(this.f21492f);
        this.f21493g.c();
        u uVar = this.f21491e;
        if (uVar != null) {
            uVar.d();
        }
        this.f21494h = 0L;
        this.f21495i = false;
        this.f21498l = -9223372036854775807L;
        this.f21500n = -9223372036854775807L;
    }

    @Override // dd.m
    public void e(long j10, int i10) {
        this.f21498l = j10;
    }

    @Override // dd.m
    public void f(tc.m mVar, i0.d dVar) {
        dVar.a();
        this.f21487a = dVar.b();
        this.f21488b = mVar.c(dVar.c(), 2);
        k0 k0Var = this.f21489c;
        if (k0Var != null) {
            k0Var.b(mVar, dVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(k0 k0Var) {
        this.f21489c = k0Var;
        this.f21492f = new boolean[4];
        this.f21493g = new a(IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
        if (k0Var != null) {
            this.f21491e = new u(178, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            this.f21490d = new ne.h0();
        } else {
            this.f21491e = null;
            this.f21490d = null;
        }
        this.f21498l = -9223372036854775807L;
        this.f21500n = -9223372036854775807L;
    }

    @Override // dd.m
    public void d() {
    }
}
