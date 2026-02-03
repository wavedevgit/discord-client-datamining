package ed;

import android.util.Pair;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.google.android.exoplayer2.Format;
import lc.l0;
import nc.x;
import ne.h0;
import ne.w0;
import ne.y;
import tc.b0;
import tc.k;
import tc.l;
import tc.m;
import tc.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements k {

    /* renamed from: h  reason: collision with root package name */
    public static final p f21398h = new p() { // from class: ed.a
        @Override // tc.p
        public final k[] b() {
            return b.b();
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private m f21399a;

    /* renamed from: b  reason: collision with root package name */
    private b0 f21400b;

    /* renamed from: e  reason: collision with root package name */
    private InterfaceC0278b f21403e;

    /* renamed from: c  reason: collision with root package name */
    private int f21401c = 0;

    /* renamed from: d  reason: collision with root package name */
    private long f21402d = -1;

    /* renamed from: f  reason: collision with root package name */
    private int f21404f = -1;

    /* renamed from: g  reason: collision with root package name */
    private long f21405g = -1;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements InterfaceC0278b {

        /* renamed from: m  reason: collision with root package name */
        private static final int[] f21406m = {-1, -1, -1, -1, 2, 4, 6, 8, -1, -1, -1, -1, 2, 4, 6, 8};

        /* renamed from: n  reason: collision with root package name */
        private static final int[] f21407n = {7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 19, 21, 23, 25, 28, 31, 34, 37, 41, 45, 50, 55, 60, 66, 73, 80, 88, 97, 107, 118, 130, 143, 157, 173, 190, 209, 230, 253, 279, 307, 337, 371, 408, 449, 494, 544, 598, 658, 724, 796, 876, 963, 1060, 1166, 1282, 1411, 1552, 1707, 1878, 2066, 2272, 2499, 2749, 3024, 3327, 3660, 4026, 4428, 4871, 5358, 5894, 6484, 7132, 7845, 8630, 9493, 10442, 11487, 12635, 13899, 15289, 16818, 18500, 20350, 22385, 24623, 27086, 29794, 32767};

        /* renamed from: a  reason: collision with root package name */
        private final m f21408a;

        /* renamed from: b  reason: collision with root package name */
        private final b0 f21409b;

        /* renamed from: c  reason: collision with root package name */
        private final ed.c f21410c;

        /* renamed from: d  reason: collision with root package name */
        private final int f21411d;

        /* renamed from: e  reason: collision with root package name */
        private final byte[] f21412e;

        /* renamed from: f  reason: collision with root package name */
        private final h0 f21413f;

        /* renamed from: g  reason: collision with root package name */
        private final int f21414g;

        /* renamed from: h  reason: collision with root package name */
        private final Format f21415h;

        /* renamed from: i  reason: collision with root package name */
        private int f21416i;

        /* renamed from: j  reason: collision with root package name */
        private long f21417j;

        /* renamed from: k  reason: collision with root package name */
        private int f21418k;

        /* renamed from: l  reason: collision with root package name */
        private long f21419l;

        public a(m mVar, b0 b0Var, ed.c cVar) {
            this.f21408a = mVar;
            this.f21409b = b0Var;
            this.f21410c = cVar;
            int max = Math.max(1, cVar.f21430c / 10);
            this.f21414g = max;
            h0 h0Var = new h0(cVar.f21434g);
            h0Var.z();
            int z10 = h0Var.z();
            this.f21411d = z10;
            int i10 = cVar.f21429b;
            int i11 = (((cVar.f21432e - (i10 * 4)) * 8) / (cVar.f21433f * i10)) + 1;
            if (z10 == i11) {
                int l10 = w0.l(max, z10);
                this.f21412e = new byte[cVar.f21432e * l10];
                this.f21413f = new h0(l10 * h(z10, i10));
                int i12 = ((cVar.f21430c * cVar.f21432e) * 8) / z10;
                this.f21415h = new Format.b().g0("audio/raw").I(i12).b0(i12).Y(h(max, i10)).J(cVar.f21429b).h0(cVar.f21430c).a0(2).G();
                return;
            }
            throw l0.a("Expected frames per block: " + i11 + "; got: " + z10, null);
        }

        private void d(byte[] bArr, int i10, h0 h0Var) {
            for (int i11 = 0; i11 < i10; i11++) {
                for (int i12 = 0; i12 < this.f21410c.f21429b; i12++) {
                    e(bArr, i11, i12, h0Var.e());
                }
            }
            int g10 = g(this.f21411d * i10);
            h0Var.U(0);
            h0Var.T(g10);
        }

        private void e(byte[] bArr, int i10, int i11, byte[] bArr2) {
            int i12;
            ed.c cVar = this.f21410c;
            int i13 = cVar.f21432e;
            int i14 = cVar.f21429b;
            int i15 = (i10 * i13) + (i11 * 4);
            int i16 = (i14 * 4) + i15;
            int i17 = (i13 / i14) - 4;
            int i18 = (short) (((bArr[i15 + 1] & 255) << 8) | (bArr[i15] & 255));
            int min = Math.min(bArr[i15 + 2] & 255, 88);
            int i19 = f21407n[min];
            int i20 = ((i10 * this.f21411d * i14) + i11) * 2;
            bArr2[i20] = (byte) (i18 & SetSpanOperation.SPAN_MAX_PRIORITY);
            bArr2[i20 + 1] = (byte) (i18 >> 8);
            for (int i21 = 0; i21 < i17 * 2; i21++) {
                byte b10 = bArr[((i21 / 8) * i14 * 4) + i16 + ((i21 / 2) % 4)];
                int i22 = b10 & 255;
                if (i21 % 2 == 0) {
                    i12 = b10 & 15;
                } else {
                    i12 = i22 >> 4;
                }
                int i23 = ((((i12 & 7) * 2) + 1) * i19) >> 3;
                if ((i12 & 8) != 0) {
                    i23 = -i23;
                }
                i18 = w0.q(i18 + i23, -32768, 32767);
                i20 += i14 * 2;
                bArr2[i20] = (byte) (i18 & SetSpanOperation.SPAN_MAX_PRIORITY);
                bArr2[i20 + 1] = (byte) (i18 >> 8);
                int i24 = min + f21406m[i12];
                int[] iArr = f21407n;
                min = w0.q(i24, 0, iArr.length - 1);
                i19 = iArr[min];
            }
        }

        private int f(int i10) {
            return i10 / (this.f21410c.f21429b * 2);
        }

        private int g(int i10) {
            return h(i10, this.f21410c.f21429b);
        }

        private static int h(int i10, int i11) {
            return i10 * 2 * i11;
        }

        private void i(int i10) {
            int g10 = g(i10);
            this.f21409b.d(this.f21417j + w0.X0(this.f21419l, 1000000L, this.f21410c.f21430c), 1, g10, this.f21418k - g10, null);
            this.f21419l += i10;
            this.f21418k -= g10;
        }

        @Override // ed.b.InterfaceC0278b
        public void a(int i10, long j10) {
            this.f21408a.q(new e(this.f21410c, this.f21411d, i10, j10));
            this.f21409b.b(this.f21415h);
        }

        @Override // ed.b.InterfaceC0278b
        public void b(long j10) {
            this.f21416i = 0;
            this.f21417j = j10;
            this.f21418k = 0;
            this.f21419l = 0L;
        }

        /* JADX WARN: Removed duplicated region for block: B:15:0x0047  */
        /* JADX WARN: Removed duplicated region for block: B:7:0x0020  */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:10:0x0035 -> B:4:0x001b). Please submit an issue!!! */
        @Override // ed.b.InterfaceC0278b
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public boolean c(tc.l r7, long r8) {
            /*
                r6 = this;
                int r0 = r6.f21414g
                int r1 = r6.f21418k
                int r1 = r6.f(r1)
                int r0 = r0 - r1
                int r1 = r6.f21411d
                int r0 = ne.w0.l(r0, r1)
                ed.c r1 = r6.f21410c
                int r1 = r1.f21432e
                int r0 = r0 * r1
                r1 = 0
                int r1 = (r8 > r1 ? 1 : (r8 == r1 ? 0 : -1))
                r2 = 1
                if (r1 != 0) goto L1d
            L1b:
                r1 = r2
                goto L1e
            L1d:
                r1 = 0
            L1e:
                if (r1 != 0) goto L3e
                int r3 = r6.f21416i
                if (r3 >= r0) goto L3e
                int r3 = r0 - r3
                long r3 = (long) r3
                long r3 = java.lang.Math.min(r3, r8)
                int r3 = (int) r3
                byte[] r4 = r6.f21412e
                int r5 = r6.f21416i
                int r3 = r7.read(r4, r5, r3)
                r4 = -1
                if (r3 != r4) goto L38
                goto L1b
            L38:
                int r4 = r6.f21416i
                int r4 = r4 + r3
                r6.f21416i = r4
                goto L1e
            L3e:
                int r7 = r6.f21416i
                ed.c r8 = r6.f21410c
                int r8 = r8.f21432e
                int r7 = r7 / r8
                if (r7 <= 0) goto L75
                byte[] r8 = r6.f21412e
                ne.h0 r9 = r6.f21413f
                r6.d(r8, r7, r9)
                int r8 = r6.f21416i
                ed.c r9 = r6.f21410c
                int r9 = r9.f21432e
                int r7 = r7 * r9
                int r8 = r8 - r7
                r6.f21416i = r8
                ne.h0 r7 = r6.f21413f
                int r7 = r7.g()
                tc.b0 r8 = r6.f21409b
                ne.h0 r9 = r6.f21413f
                r8.f(r9, r7)
                int r8 = r6.f21418k
                int r8 = r8 + r7
                r6.f21418k = r8
                int r7 = r6.f(r8)
                int r8 = r6.f21414g
                if (r7 < r8) goto L75
                r6.i(r8)
            L75:
                if (r1 == 0) goto L82
                int r7 = r6.f21418k
                int r7 = r6.f(r7)
                if (r7 <= 0) goto L82
                r6.i(r7)
            L82:
                return r1
            */
            throw new UnsupportedOperationException("Method not decompiled: ed.b.a.c(tc.l, long):boolean");
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: ed.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface InterfaceC0278b {
        void a(int i10, long j10);

        void b(long j10);

        boolean c(l lVar, long j10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c implements InterfaceC0278b {

        /* renamed from: a  reason: collision with root package name */
        private final m f21420a;

        /* renamed from: b  reason: collision with root package name */
        private final b0 f21421b;

        /* renamed from: c  reason: collision with root package name */
        private final ed.c f21422c;

        /* renamed from: d  reason: collision with root package name */
        private final Format f21423d;

        /* renamed from: e  reason: collision with root package name */
        private final int f21424e;

        /* renamed from: f  reason: collision with root package name */
        private long f21425f;

        /* renamed from: g  reason: collision with root package name */
        private int f21426g;

        /* renamed from: h  reason: collision with root package name */
        private long f21427h;

        public c(m mVar, b0 b0Var, ed.c cVar, String str, int i10) {
            this.f21420a = mVar;
            this.f21421b = b0Var;
            this.f21422c = cVar;
            int i11 = (cVar.f21429b * cVar.f21433f) / 8;
            if (cVar.f21432e == i11) {
                int i12 = cVar.f21430c;
                int i13 = i12 * i11 * 8;
                int max = Math.max(i11, (i12 * i11) / 10);
                this.f21424e = max;
                this.f21423d = new Format.b().g0(str).I(i13).b0(i13).Y(max).J(cVar.f21429b).h0(cVar.f21430c).a0(i10).G();
                return;
            }
            throw l0.a("Expected block size: " + i11 + "; got: " + cVar.f21432e, null);
        }

        @Override // ed.b.InterfaceC0278b
        public void a(int i10, long j10) {
            this.f21420a.q(new e(this.f21422c, 1, i10, j10));
            this.f21421b.b(this.f21423d);
        }

        @Override // ed.b.InterfaceC0278b
        public void b(long j10) {
            this.f21425f = j10;
            this.f21426g = 0;
            this.f21427h = 0L;
        }

        @Override // ed.b.InterfaceC0278b
        public boolean c(l lVar, long j10) {
            int i10;
            ed.c cVar;
            int i11;
            int i12;
            long j11 = j10;
            while (true) {
                i10 = (j11 > 0L ? 1 : (j11 == 0L ? 0 : -1));
                if (i10 <= 0 || (i11 = this.f21426g) >= (i12 = this.f21424e)) {
                    break;
                }
                int a10 = this.f21421b.a(lVar, (int) Math.min(i12 - i11, j11), true);
                if (a10 == -1) {
                    j11 = 0;
                } else {
                    this.f21426g += a10;
                    j11 -= a10;
                }
            }
            int i13 = this.f21422c.f21432e;
            int i14 = this.f21426g / i13;
            if (i14 > 0) {
                int i15 = i14 * i13;
                int i16 = this.f21426g - i15;
                this.f21421b.d(this.f21425f + w0.X0(this.f21427h, 1000000L, cVar.f21430c), 1, i15, i16, null);
                this.f21427h += i14;
                this.f21426g = i16;
            }
            if (i10 <= 0) {
                return true;
            }
            return false;
        }
    }

    public static /* synthetic */ k[] b() {
        return new k[]{new b()};
    }

    private void e() {
        ne.a.i(this.f21400b);
        w0.j(this.f21399a);
    }

    private void g(l lVar) {
        boolean z10;
        if (lVar.getPosition() == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        int i10 = this.f21404f;
        if (i10 != -1) {
            lVar.k(i10);
            this.f21401c = 4;
        } else if (d.a(lVar)) {
            lVar.k((int) (lVar.g() - lVar.getPosition()));
            this.f21401c = 1;
        } else {
            throw l0.a("Unsupported or unrecognized wav file type.", null);
        }
    }

    private void h(l lVar) {
        ed.c b10 = d.b(lVar);
        int i10 = b10.f21428a;
        if (i10 == 17) {
            this.f21403e = new a(this.f21399a, this.f21400b, b10);
        } else if (i10 == 6) {
            this.f21403e = new c(this.f21399a, this.f21400b, b10, "audio/g711-alaw", -1);
        } else if (i10 == 7) {
            this.f21403e = new c(this.f21399a, this.f21400b, b10, "audio/g711-mlaw", -1);
        } else {
            int a10 = x.a(i10, b10.f21433f);
            if (a10 != 0) {
                this.f21403e = new c(this.f21399a, this.f21400b, b10, "audio/raw", a10);
            } else {
                throw l0.d("Unsupported WAV format type: " + b10.f21428a);
            }
        }
        this.f21401c = 3;
    }

    private void i(l lVar) {
        this.f21402d = d.c(lVar);
        this.f21401c = 2;
    }

    private int j(l lVar) {
        boolean z10;
        if (this.f21405g != -1) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        if (!((InterfaceC0278b) ne.a.e(this.f21403e)).c(lVar, this.f21405g - lVar.getPosition())) {
            return 0;
        }
        return -1;
    }

    private void k(l lVar) {
        Pair e10 = d.e(lVar);
        this.f21404f = ((Long) e10.first).intValue();
        long longValue = ((Long) e10.second).longValue();
        long j10 = this.f21402d;
        if (j10 != -1 && longValue == 4294967295L) {
            longValue = j10;
        }
        this.f21405g = this.f21404f + longValue;
        long length = lVar.getLength();
        if (length != -1 && this.f21405g > length) {
            y.i("WavExtractor", "Data exceeds input length: " + this.f21405g + ", " + length);
            this.f21405g = length;
        }
        ((InterfaceC0278b) ne.a.e(this.f21403e)).a(this.f21404f, this.f21405g);
        this.f21401c = 4;
    }

    @Override // tc.k
    public void a(long j10, long j11) {
        int i10;
        if (j10 == 0) {
            i10 = 0;
        } else {
            i10 = 4;
        }
        this.f21401c = i10;
        InterfaceC0278b interfaceC0278b = this.f21403e;
        if (interfaceC0278b != null) {
            interfaceC0278b.b(j11);
        }
    }

    @Override // tc.k
    public void c(m mVar) {
        this.f21399a = mVar;
        this.f21400b = mVar.c(0, 1);
        mVar.s();
    }

    @Override // tc.k
    public int d(l lVar, tc.y yVar) {
        e();
        int i10 = this.f21401c;
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 == 4) {
                            return j(lVar);
                        }
                        throw new IllegalStateException();
                    }
                    k(lVar);
                    return 0;
                }
                h(lVar);
                return 0;
            }
            i(lVar);
            return 0;
        }
        g(lVar);
        return 0;
    }

    @Override // tc.k
    public boolean f(l lVar) {
        return d.a(lVar);
    }

    @Override // tc.k
    public void release() {
    }
}
