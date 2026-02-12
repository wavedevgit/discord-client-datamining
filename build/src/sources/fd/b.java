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
    public static final p f23637h = new p() { // from class: fd.a
        @Override // uc.p
        public final k[] b() {
            return b.b();
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private m f23638a;

    /* renamed from: b  reason: collision with root package name */
    private b0 f23639b;

    /* renamed from: e  reason: collision with root package name */
    private InterfaceC0315b f23642e;

    /* renamed from: c  reason: collision with root package name */
    private int f23640c = 0;

    /* renamed from: d  reason: collision with root package name */
    private long f23641d = -1;

    /* renamed from: f  reason: collision with root package name */
    private int f23643f = -1;

    /* renamed from: g  reason: collision with root package name */
    private long f23644g = -1;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements InterfaceC0315b {

        /* renamed from: m  reason: collision with root package name */
        private static final int[] f23645m = {-1, -1, -1, -1, 2, 4, 6, 8, -1, -1, -1, -1, 2, 4, 6, 8};

        /* renamed from: n  reason: collision with root package name */
        private static final int[] f23646n = {7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 19, 21, 23, 25, 28, 31, 34, 37, 41, 45, 50, 55, 60, 66, 73, 80, 88, 97, 107, 118, 130, 143, 157, 173, 190, 209, 230, 253, 279, 307, 337, 371, 408, 449, 494, 544, 598, 658, 724, 796, 876, 963, 1060, 1166, 1282, 1411, 1552, 1707, 1878, 2066, 2272, 2499, 2749, 3024, 3327, 3660, 4026, 4428, 4871, 5358, 5894, 6484, 7132, 7845, 8630, 9493, 10442, 11487, 12635, 13899, 15289, 16818, 18500, 20350, 22385, 24623, 27086, 29794, 32767};

        /* renamed from: a  reason: collision with root package name */
        private final m f23647a;

        /* renamed from: b  reason: collision with root package name */
        private final b0 f23648b;

        /* renamed from: c  reason: collision with root package name */
        private final fd.c f23649c;

        /* renamed from: d  reason: collision with root package name */
        private final int f23650d;

        /* renamed from: e  reason: collision with root package name */
        private final byte[] f23651e;

        /* renamed from: f  reason: collision with root package name */
        private final h0 f23652f;

        /* renamed from: g  reason: collision with root package name */
        private final int f23653g;

        /* renamed from: h  reason: collision with root package name */
        private final Format f23654h;

        /* renamed from: i  reason: collision with root package name */
        private int f23655i;

        /* renamed from: j  reason: collision with root package name */
        private long f23656j;

        /* renamed from: k  reason: collision with root package name */
        private int f23657k;

        /* renamed from: l  reason: collision with root package name */
        private long f23658l;

        public a(m mVar, b0 b0Var, fd.c cVar) {
            this.f23647a = mVar;
            this.f23648b = b0Var;
            this.f23649c = cVar;
            int max = Math.max(1, cVar.f23669c / 10);
            this.f23653g = max;
            h0 h0Var = new h0(cVar.f23673g);
            h0Var.z();
            int z10 = h0Var.z();
            this.f23650d = z10;
            int i10 = cVar.f23668b;
            int i11 = (((cVar.f23671e - (i10 * 4)) * 8) / (cVar.f23672f * i10)) + 1;
            if (z10 == i11) {
                int l10 = w0.l(max, z10);
                this.f23651e = new byte[cVar.f23671e * l10];
                this.f23652f = new h0(l10 * h(z10, i10));
                int i12 = ((cVar.f23669c * cVar.f23671e) * 8) / z10;
                this.f23654h = new Format.b().g0("audio/raw").I(i12).b0(i12).Y(h(max, i10)).J(cVar.f23668b).h0(cVar.f23669c).a0(2).G();
                return;
            }
            throw l0.a("Expected frames per block: " + i11 + "; got: " + z10, null);
        }

        private void d(byte[] bArr, int i10, h0 h0Var) {
            for (int i11 = 0; i11 < i10; i11++) {
                for (int i12 = 0; i12 < this.f23649c.f23668b; i12++) {
                    e(bArr, i11, i12, h0Var.e());
                }
            }
            int g10 = g(this.f23650d * i10);
            h0Var.U(0);
            h0Var.T(g10);
        }

        private void e(byte[] bArr, int i10, int i11, byte[] bArr2) {
            int i12;
            fd.c cVar = this.f23649c;
            int i13 = cVar.f23671e;
            int i14 = cVar.f23668b;
            int i15 = (i10 * i13) + (i11 * 4);
            int i16 = (i14 * 4) + i15;
            int i17 = (i13 / i14) - 4;
            int i18 = (short) (((bArr[i15 + 1] & 255) << 8) | (bArr[i15] & 255));
            int min = Math.min(bArr[i15 + 2] & 255, 88);
            int i19 = f23646n[min];
            int i20 = ((i10 * this.f23650d * i14) + i11) * 2;
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
                int i24 = min + f23645m[i12];
                int[] iArr = f23646n;
                min = w0.q(i24, 0, iArr.length - 1);
                i19 = iArr[min];
            }
        }

        private int f(int i10) {
            return i10 / (this.f23649c.f23668b * 2);
        }

        private int g(int i10) {
            return h(i10, this.f23649c.f23668b);
        }

        private static int h(int i10, int i11) {
            return i10 * 2 * i11;
        }

        private void i(int i10) {
            int g10 = g(i10);
            this.f23648b.a(this.f23656j + w0.X0(this.f23658l, 1000000L, this.f23649c.f23669c), 1, g10, this.f23657k - g10, null);
            this.f23658l += i10;
            this.f23657k -= g10;
        }

        /* JADX WARN: Removed duplicated region for block: B:15:0x0047  */
        /* JADX WARN: Removed duplicated region for block: B:7:0x0020  */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:10:0x0035 -> B:4:0x001b). Please submit an issue!!! */
        @Override // fd.b.InterfaceC0315b
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public boolean a(uc.l r7, long r8) {
            /*
                r6 = this;
                int r0 = r6.f23653g
                int r1 = r6.f23657k
                int r1 = r6.f(r1)
                int r0 = r0 - r1
                int r1 = r6.f23650d
                int r0 = oe.w0.l(r0, r1)
                fd.c r1 = r6.f23649c
                int r1 = r1.f23671e
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
                int r3 = r6.f23655i
                if (r3 >= r0) goto L3e
                int r3 = r0 - r3
                long r3 = (long) r3
                long r3 = java.lang.Math.min(r3, r8)
                int r3 = (int) r3
                byte[] r4 = r6.f23651e
                int r5 = r6.f23655i
                int r3 = r7.read(r4, r5, r3)
                r4 = -1
                if (r3 != r4) goto L38
                goto L1b
            L38:
                int r4 = r6.f23655i
                int r4 = r4 + r3
                r6.f23655i = r4
                goto L1e
            L3e:
                int r7 = r6.f23655i
                fd.c r8 = r6.f23649c
                int r8 = r8.f23671e
                int r7 = r7 / r8
                if (r7 <= 0) goto L75
                byte[] r8 = r6.f23651e
                oe.h0 r9 = r6.f23652f
                r6.d(r8, r7, r9)
                int r8 = r6.f23655i
                fd.c r9 = r6.f23649c
                int r9 = r9.f23671e
                int r7 = r7 * r9
                int r8 = r8 - r7
                r6.f23655i = r8
                oe.h0 r7 = r6.f23652f
                int r7 = r7.g()
                uc.b0 r8 = r6.f23648b
                oe.h0 r9 = r6.f23652f
                r8.e(r9, r7)
                int r8 = r6.f23657k
                int r8 = r8 + r7
                r6.f23657k = r8
                int r7 = r6.f(r8)
                int r8 = r6.f23653g
                if (r7 < r8) goto L75
                r6.i(r8)
            L75:
                if (r1 == 0) goto L82
                int r7 = r6.f23657k
                int r7 = r6.f(r7)
                if (r7 <= 0) goto L82
                r6.i(r7)
            L82:
                return r1
            */
            throw new UnsupportedOperationException("Method not decompiled: fd.b.a.a(uc.l, long):boolean");
        }

        @Override // fd.b.InterfaceC0315b
        public void b(int i10, long j10) {
            this.f23647a.j(new e(this.f23649c, this.f23650d, i10, j10));
            this.f23648b.c(this.f23654h);
        }

        @Override // fd.b.InterfaceC0315b
        public void c(long j10) {
            this.f23655i = 0;
            this.f23656j = j10;
            this.f23657k = 0;
            this.f23658l = 0L;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: fd.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface InterfaceC0315b {
        boolean a(l lVar, long j10);

        void b(int i10, long j10);

        void c(long j10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c implements InterfaceC0315b {

        /* renamed from: a  reason: collision with root package name */
        private final m f23659a;

        /* renamed from: b  reason: collision with root package name */
        private final b0 f23660b;

        /* renamed from: c  reason: collision with root package name */
        private final fd.c f23661c;

        /* renamed from: d  reason: collision with root package name */
        private final Format f23662d;

        /* renamed from: e  reason: collision with root package name */
        private final int f23663e;

        /* renamed from: f  reason: collision with root package name */
        private long f23664f;

        /* renamed from: g  reason: collision with root package name */
        private int f23665g;

        /* renamed from: h  reason: collision with root package name */
        private long f23666h;

        public c(m mVar, b0 b0Var, fd.c cVar, String str, int i10) {
            this.f23659a = mVar;
            this.f23660b = b0Var;
            this.f23661c = cVar;
            int i11 = (cVar.f23668b * cVar.f23672f) / 8;
            if (cVar.f23671e == i11) {
                int i12 = cVar.f23669c;
                int i13 = i12 * i11 * 8;
                int max = Math.max(i11, (i12 * i11) / 10);
                this.f23663e = max;
                this.f23662d = new Format.b().g0(str).I(i13).b0(i13).Y(max).J(cVar.f23668b).h0(cVar.f23669c).a0(i10).G();
                return;
            }
            throw l0.a("Expected block size: " + i11 + "; got: " + cVar.f23671e, null);
        }

        @Override // fd.b.InterfaceC0315b
        public boolean a(l lVar, long j10) {
            int i10;
            fd.c cVar;
            int i11;
            int i12;
            long j11 = j10;
            while (true) {
                i10 = (j11 > 0L ? 1 : (j11 == 0L ? 0 : -1));
                if (i10 <= 0 || (i11 = this.f23665g) >= (i12 = this.f23663e)) {
                    break;
                }
                int f10 = this.f23660b.f(lVar, (int) Math.min(i12 - i11, j11), true);
                if (f10 == -1) {
                    j11 = 0;
                } else {
                    this.f23665g += f10;
                    j11 -= f10;
                }
            }
            int i13 = this.f23661c.f23671e;
            int i14 = this.f23665g / i13;
            if (i14 > 0) {
                int i15 = i14 * i13;
                int i16 = this.f23665g - i15;
                this.f23660b.a(this.f23664f + w0.X0(this.f23666h, 1000000L, cVar.f23669c), 1, i15, i16, null);
                this.f23666h += i14;
                this.f23665g = i16;
            }
            if (i10 <= 0) {
                return true;
            }
            return false;
        }

        @Override // fd.b.InterfaceC0315b
        public void b(int i10, long j10) {
            this.f23659a.j(new e(this.f23661c, 1, i10, j10));
            this.f23660b.c(this.f23662d);
        }

        @Override // fd.b.InterfaceC0315b
        public void c(long j10) {
            this.f23664f = j10;
            this.f23665g = 0;
            this.f23666h = 0L;
        }
    }

    public static /* synthetic */ k[] b() {
        return new k[]{new b()};
    }

    private void e() {
        oe.a.i(this.f23639b);
        w0.j(this.f23638a);
    }

    private void f(l lVar) {
        boolean z10;
        if (lVar.getPosition() == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
        int i10 = this.f23643f;
        if (i10 != -1) {
            lVar.k(i10);
            this.f23640c = 4;
        } else if (d.a(lVar)) {
            lVar.k((int) (lVar.g() - lVar.getPosition()));
            this.f23640c = 1;
        } else {
            throw l0.a("Unsupported or unrecognized wav file type.", null);
        }
    }

    private void g(l lVar) {
        fd.c b10 = d.b(lVar);
        int i10 = b10.f23667a;
        if (i10 == 17) {
            this.f23642e = new a(this.f23638a, this.f23639b, b10);
        } else if (i10 == 6) {
            this.f23642e = new c(this.f23638a, this.f23639b, b10, "audio/g711-alaw", -1);
        } else if (i10 == 7) {
            this.f23642e = new c(this.f23638a, this.f23639b, b10, "audio/g711-mlaw", -1);
        } else {
            int a10 = x.a(i10, b10.f23672f);
            if (a10 != 0) {
                this.f23642e = new c(this.f23638a, this.f23639b, b10, "audio/raw", a10);
            } else {
                throw l0.d("Unsupported WAV format type: " + b10.f23667a);
            }
        }
        this.f23640c = 3;
    }

    private void i(l lVar) {
        this.f23641d = d.c(lVar);
        this.f23640c = 2;
    }

    private int j(l lVar) {
        boolean z10;
        if (this.f23644g != -1) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
        if (!((InterfaceC0315b) oe.a.e(this.f23642e)).a(lVar, this.f23644g - lVar.getPosition())) {
            return 0;
        }
        return -1;
    }

    private void k(l lVar) {
        Pair e10 = d.e(lVar);
        this.f23643f = ((Long) e10.first).intValue();
        long longValue = ((Long) e10.second).longValue();
        long j10 = this.f23641d;
        if (j10 != -1 && longValue == 4294967295L) {
            longValue = j10;
        }
        this.f23644g = this.f23643f + longValue;
        long length = lVar.getLength();
        if (length != -1 && this.f23644g > length) {
            y.i("WavExtractor", "Data exceeds input length: " + this.f23644g + ", " + length);
            this.f23644g = length;
        }
        ((InterfaceC0315b) oe.a.e(this.f23642e)).b(this.f23643f, this.f23644g);
        this.f23640c = 4;
    }

    @Override // uc.k
    public void a(long j10, long j11) {
        int i10;
        if (j10 == 0) {
            i10 = 0;
        } else {
            i10 = 4;
        }
        this.f23640c = i10;
        InterfaceC0315b interfaceC0315b = this.f23642e;
        if (interfaceC0315b != null) {
            interfaceC0315b.c(j11);
        }
    }

    @Override // uc.k
    public void c(m mVar) {
        this.f23638a = mVar;
        this.f23639b = mVar.c(0, 1);
        mVar.q();
    }

    @Override // uc.k
    public boolean d(l lVar) {
        return d.a(lVar);
    }

    @Override // uc.k
    public int h(l lVar, uc.y yVar) {
        e();
        int i10 = this.f23640c;
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
