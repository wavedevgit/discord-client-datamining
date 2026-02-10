package fd;

import android.util.Pair;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.google.android.exoplayer2.Format;
import mc.l0;
import oc.x;
import oe.h0;
import oe.w0;
import oe.y;
import uc.b0;
import uc.k;
import uc.l;
import uc.m;
import uc.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements k {

    /* renamed from: h  reason: collision with root package name */
    public static final p f22511h = new p() { // from class: fd.a
        @Override // uc.p
        public final k[] b() {
            return b.b();
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private m f22512a;

    /* renamed from: b  reason: collision with root package name */
    private b0 f22513b;

    /* renamed from: e  reason: collision with root package name */
    private InterfaceC0330b f22516e;

    /* renamed from: c  reason: collision with root package name */
    private int f22514c = 0;

    /* renamed from: d  reason: collision with root package name */
    private long f22515d = -1;

    /* renamed from: f  reason: collision with root package name */
    private int f22517f = -1;

    /* renamed from: g  reason: collision with root package name */
    private long f22518g = -1;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements InterfaceC0330b {

        /* renamed from: m  reason: collision with root package name */
        private static final int[] f22519m = {-1, -1, -1, -1, 2, 4, 6, 8, -1, -1, -1, -1, 2, 4, 6, 8};

        /* renamed from: n  reason: collision with root package name */
        private static final int[] f22520n = {7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 19, 21, 23, 25, 28, 31, 34, 37, 41, 45, 50, 55, 60, 66, 73, 80, 88, 97, 107, 118, 130, 143, 157, 173, 190, 209, 230, 253, 279, 307, 337, 371, 408, 449, 494, 544, 598, 658, 724, 796, 876, 963, 1060, 1166, 1282, 1411, 1552, 1707, 1878, 2066, 2272, 2499, 2749, 3024, 3327, 3660, 4026, 4428, 4871, 5358, 5894, 6484, 7132, 7845, 8630, 9493, 10442, 11487, 12635, 13899, 15289, 16818, 18500, 20350, 22385, 24623, 27086, 29794, 32767};

        /* renamed from: a  reason: collision with root package name */
        private final m f22521a;

        /* renamed from: b  reason: collision with root package name */
        private final b0 f22522b;

        /* renamed from: c  reason: collision with root package name */
        private final fd.c f22523c;

        /* renamed from: d  reason: collision with root package name */
        private final int f22524d;

        /* renamed from: e  reason: collision with root package name */
        private final byte[] f22525e;

        /* renamed from: f  reason: collision with root package name */
        private final h0 f22526f;

        /* renamed from: g  reason: collision with root package name */
        private final int f22527g;

        /* renamed from: h  reason: collision with root package name */
        private final Format f22528h;

        /* renamed from: i  reason: collision with root package name */
        private int f22529i;

        /* renamed from: j  reason: collision with root package name */
        private long f22530j;

        /* renamed from: k  reason: collision with root package name */
        private int f22531k;

        /* renamed from: l  reason: collision with root package name */
        private long f22532l;

        public a(m mVar, b0 b0Var, fd.c cVar) {
            this.f22521a = mVar;
            this.f22522b = b0Var;
            this.f22523c = cVar;
            int max = Math.max(1, cVar.f22543c / 10);
            this.f22527g = max;
            h0 h0Var = new h0(cVar.f22547g);
            h0Var.z();
            int z10 = h0Var.z();
            this.f22524d = z10;
            int i10 = cVar.f22542b;
            int i11 = (((cVar.f22545e - (i10 * 4)) * 8) / (cVar.f22546f * i10)) + 1;
            if (z10 == i11) {
                int l10 = w0.l(max, z10);
                this.f22525e = new byte[cVar.f22545e * l10];
                this.f22526f = new h0(l10 * h(z10, i10));
                int i12 = ((cVar.f22543c * cVar.f22545e) * 8) / z10;
                this.f22528h = new Format.b().g0("audio/raw").I(i12).b0(i12).Y(h(max, i10)).J(cVar.f22542b).h0(cVar.f22543c).a0(2).G();
                return;
            }
            throw l0.a("Expected frames per block: " + i11 + "; got: " + z10, null);
        }

        private void d(byte[] bArr, int i10, h0 h0Var) {
            for (int i11 = 0; i11 < i10; i11++) {
                for (int i12 = 0; i12 < this.f22523c.f22542b; i12++) {
                    e(bArr, i11, i12, h0Var.e());
                }
            }
            int g10 = g(this.f22524d * i10);
            h0Var.U(0);
            h0Var.T(g10);
        }

        private void e(byte[] bArr, int i10, int i11, byte[] bArr2) {
            int i12;
            fd.c cVar = this.f22523c;
            int i13 = cVar.f22545e;
            int i14 = cVar.f22542b;
            int i15 = (i10 * i13) + (i11 * 4);
            int i16 = (i14 * 4) + i15;
            int i17 = (i13 / i14) - 4;
            int i18 = (short) (((bArr[i15 + 1] & 255) << 8) | (bArr[i15] & 255));
            int min = Math.min(bArr[i15 + 2] & 255, 88);
            int i19 = f22520n[min];
            int i20 = ((i10 * this.f22524d * i14) + i11) * 2;
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
                int i24 = min + f22519m[i12];
                int[] iArr = f22520n;
                min = w0.q(i24, 0, iArr.length - 1);
                i19 = iArr[min];
            }
        }

        private int f(int i10) {
            return i10 / (this.f22523c.f22542b * 2);
        }

        private int g(int i10) {
            return h(i10, this.f22523c.f22542b);
        }

        private static int h(int i10, int i11) {
            return i10 * 2 * i11;
        }

        private void i(int i10) {
            int g10 = g(i10);
            this.f22522b.a(this.f22530j + w0.X0(this.f22532l, 1000000L, this.f22523c.f22543c), 1, g10, this.f22531k - g10, null);
            this.f22532l += i10;
            this.f22531k -= g10;
        }

        /* JADX WARN: Removed duplicated region for block: B:15:0x0047  */
        /* JADX WARN: Removed duplicated region for block: B:7:0x0020  */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:10:0x0035 -> B:4:0x001b). Please submit an issue!!! */
        @Override // fd.b.InterfaceC0330b
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public boolean a(uc.l r7, long r8) {
            /*
                r6 = this;
                int r0 = r6.f22527g
                int r1 = r6.f22531k
                int r1 = r6.f(r1)
                int r0 = r0 - r1
                int r1 = r6.f22524d
                int r0 = oe.w0.l(r0, r1)
                fd.c r1 = r6.f22523c
                int r1 = r1.f22545e
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
                int r3 = r6.f22529i
                if (r3 >= r0) goto L3e
                int r3 = r0 - r3
                long r3 = (long) r3
                long r3 = java.lang.Math.min(r3, r8)
                int r3 = (int) r3
                byte[] r4 = r6.f22525e
                int r5 = r6.f22529i
                int r3 = r7.read(r4, r5, r3)
                r4 = -1
                if (r3 != r4) goto L38
                goto L1b
            L38:
                int r4 = r6.f22529i
                int r4 = r4 + r3
                r6.f22529i = r4
                goto L1e
            L3e:
                int r7 = r6.f22529i
                fd.c r8 = r6.f22523c
                int r8 = r8.f22545e
                int r7 = r7 / r8
                if (r7 <= 0) goto L75
                byte[] r8 = r6.f22525e
                oe.h0 r9 = r6.f22526f
                r6.d(r8, r7, r9)
                int r8 = r6.f22529i
                fd.c r9 = r6.f22523c
                int r9 = r9.f22545e
                int r7 = r7 * r9
                int r8 = r8 - r7
                r6.f22529i = r8
                oe.h0 r7 = r6.f22526f
                int r7 = r7.g()
                uc.b0 r8 = r6.f22522b
                oe.h0 r9 = r6.f22526f
                r8.e(r9, r7)
                int r8 = r6.f22531k
                int r8 = r8 + r7
                r6.f22531k = r8
                int r7 = r6.f(r8)
                int r8 = r6.f22527g
                if (r7 < r8) goto L75
                r6.i(r8)
            L75:
                if (r1 == 0) goto L82
                int r7 = r6.f22531k
                int r7 = r6.f(r7)
                if (r7 <= 0) goto L82
                r6.i(r7)
            L82:
                return r1
            */
            throw new UnsupportedOperationException("Method not decompiled: fd.b.a.a(uc.l, long):boolean");
        }

        @Override // fd.b.InterfaceC0330b
        public void b(int i10, long j10) {
            this.f22521a.j(new e(this.f22523c, this.f22524d, i10, j10));
            this.f22522b.c(this.f22528h);
        }

        @Override // fd.b.InterfaceC0330b
        public void c(long j10) {
            this.f22529i = 0;
            this.f22530j = j10;
            this.f22531k = 0;
            this.f22532l = 0L;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: fd.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface InterfaceC0330b {
        boolean a(l lVar, long j10);

        void b(int i10, long j10);

        void c(long j10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c implements InterfaceC0330b {

        /* renamed from: a  reason: collision with root package name */
        private final m f22533a;

        /* renamed from: b  reason: collision with root package name */
        private final b0 f22534b;

        /* renamed from: c  reason: collision with root package name */
        private final fd.c f22535c;

        /* renamed from: d  reason: collision with root package name */
        private final Format f22536d;

        /* renamed from: e  reason: collision with root package name */
        private final int f22537e;

        /* renamed from: f  reason: collision with root package name */
        private long f22538f;

        /* renamed from: g  reason: collision with root package name */
        private int f22539g;

        /* renamed from: h  reason: collision with root package name */
        private long f22540h;

        public c(m mVar, b0 b0Var, fd.c cVar, String str, int i10) {
            this.f22533a = mVar;
            this.f22534b = b0Var;
            this.f22535c = cVar;
            int i11 = (cVar.f22542b * cVar.f22546f) / 8;
            if (cVar.f22545e == i11) {
                int i12 = cVar.f22543c;
                int i13 = i12 * i11 * 8;
                int max = Math.max(i11, (i12 * i11) / 10);
                this.f22537e = max;
                this.f22536d = new Format.b().g0(str).I(i13).b0(i13).Y(max).J(cVar.f22542b).h0(cVar.f22543c).a0(i10).G();
                return;
            }
            throw l0.a("Expected block size: " + i11 + "; got: " + cVar.f22545e, null);
        }

        @Override // fd.b.InterfaceC0330b
        public boolean a(l lVar, long j10) {
            int i10;
            fd.c cVar;
            int i11;
            int i12;
            long j11 = j10;
            while (true) {
                i10 = (j11 > 0L ? 1 : (j11 == 0L ? 0 : -1));
                if (i10 <= 0 || (i11 = this.f22539g) >= (i12 = this.f22537e)) {
                    break;
                }
                int f10 = this.f22534b.f(lVar, (int) Math.min(i12 - i11, j11), true);
                if (f10 == -1) {
                    j11 = 0;
                } else {
                    this.f22539g += f10;
                    j11 -= f10;
                }
            }
            int i13 = this.f22535c.f22545e;
            int i14 = this.f22539g / i13;
            if (i14 > 0) {
                int i15 = i14 * i13;
                int i16 = this.f22539g - i15;
                this.f22534b.a(this.f22538f + w0.X0(this.f22540h, 1000000L, cVar.f22543c), 1, i15, i16, null);
                this.f22540h += i14;
                this.f22539g = i16;
            }
            if (i10 <= 0) {
                return true;
            }
            return false;
        }

        @Override // fd.b.InterfaceC0330b
        public void b(int i10, long j10) {
            this.f22533a.j(new e(this.f22535c, 1, i10, j10));
            this.f22534b.c(this.f22536d);
        }

        @Override // fd.b.InterfaceC0330b
        public void c(long j10) {
            this.f22538f = j10;
            this.f22539g = 0;
            this.f22540h = 0L;
        }
    }

    public static /* synthetic */ k[] b() {
        return new k[]{new b()};
    }

    private void e() {
        oe.a.i(this.f22513b);
        w0.j(this.f22512a);
    }

    private void f(l lVar) {
        boolean z10;
        if (lVar.getPosition() == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
        int i10 = this.f22517f;
        if (i10 != -1) {
            lVar.k(i10);
            this.f22514c = 4;
        } else if (d.a(lVar)) {
            lVar.k((int) (lVar.g() - lVar.getPosition()));
            this.f22514c = 1;
        } else {
            throw l0.a("Unsupported or unrecognized wav file type.", null);
        }
    }

    private void g(l lVar) {
        fd.c b10 = d.b(lVar);
        int i10 = b10.f22541a;
        if (i10 == 17) {
            this.f22516e = new a(this.f22512a, this.f22513b, b10);
        } else if (i10 == 6) {
            this.f22516e = new c(this.f22512a, this.f22513b, b10, "audio/g711-alaw", -1);
        } else if (i10 == 7) {
            this.f22516e = new c(this.f22512a, this.f22513b, b10, "audio/g711-mlaw", -1);
        } else {
            int a10 = x.a(i10, b10.f22546f);
            if (a10 != 0) {
                this.f22516e = new c(this.f22512a, this.f22513b, b10, "audio/raw", a10);
            } else {
                throw l0.d("Unsupported WAV format type: " + b10.f22541a);
            }
        }
        this.f22514c = 3;
    }

    private void i(l lVar) {
        this.f22515d = d.c(lVar);
        this.f22514c = 2;
    }

    private int j(l lVar) {
        boolean z10;
        if (this.f22518g != -1) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
        if (!((InterfaceC0330b) oe.a.e(this.f22516e)).a(lVar, this.f22518g - lVar.getPosition())) {
            return 0;
        }
        return -1;
    }

    private void k(l lVar) {
        Pair e10 = d.e(lVar);
        this.f22517f = ((Long) e10.first).intValue();
        long longValue = ((Long) e10.second).longValue();
        long j10 = this.f22515d;
        if (j10 != -1 && longValue == 4294967295L) {
            longValue = j10;
        }
        this.f22518g = this.f22517f + longValue;
        long length = lVar.getLength();
        if (length != -1 && this.f22518g > length) {
            y.i("WavExtractor", "Data exceeds input length: " + this.f22518g + ", " + length);
            this.f22518g = length;
        }
        ((InterfaceC0330b) oe.a.e(this.f22516e)).b(this.f22517f, this.f22518g);
        this.f22514c = 4;
    }

    @Override // uc.k
    public void a(long j10, long j11) {
        int i10;
        if (j10 == 0) {
            i10 = 0;
        } else {
            i10 = 4;
        }
        this.f22514c = i10;
        InterfaceC0330b interfaceC0330b = this.f22516e;
        if (interfaceC0330b != null) {
            interfaceC0330b.c(j11);
        }
    }

    @Override // uc.k
    public void c(m mVar) {
        this.f22512a = mVar;
        this.f22513b = mVar.c(0, 1);
        mVar.q();
    }

    @Override // uc.k
    public boolean d(l lVar) {
        return d.a(lVar);
    }

    @Override // uc.k
    public int h(l lVar, uc.y yVar) {
        e();
        int i10 = this.f22514c;
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
                g(lVar);
                return 0;
            }
            i(lVar);
            return 0;
        }
        f(lVar);
        return 0;
    }

    @Override // uc.k
    public void release() {
    }
}
