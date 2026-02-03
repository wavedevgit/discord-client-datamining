package uc;

import com.google.android.exoplayer2.Format;
import java.io.EOFException;
import java.util.Arrays;
import lc.l0;
import ne.w0;
import tc.b0;
import tc.d;
import tc.k;
import tc.l;
import tc.m;
import tc.p;
import tc.y;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements k {

    /* renamed from: r  reason: collision with root package name */
    private static final int[] f50478r;

    /* renamed from: u  reason: collision with root package name */
    private static final int f50481u;

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f50482a;

    /* renamed from: b  reason: collision with root package name */
    private final int f50483b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f50484c;

    /* renamed from: d  reason: collision with root package name */
    private long f50485d;

    /* renamed from: e  reason: collision with root package name */
    private int f50486e;

    /* renamed from: f  reason: collision with root package name */
    private int f50487f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f50488g;

    /* renamed from: h  reason: collision with root package name */
    private long f50489h;

    /* renamed from: i  reason: collision with root package name */
    private int f50490i;

    /* renamed from: j  reason: collision with root package name */
    private int f50491j;

    /* renamed from: k  reason: collision with root package name */
    private long f50492k;

    /* renamed from: l  reason: collision with root package name */
    private m f50493l;

    /* renamed from: m  reason: collision with root package name */
    private b0 f50494m;

    /* renamed from: n  reason: collision with root package name */
    private z f50495n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f50496o;

    /* renamed from: p  reason: collision with root package name */
    public static final p f50476p = new p() { // from class: uc.a
        @Override // tc.p
        public final k[] b() {
            return b.b();
        }
    };

    /* renamed from: q  reason: collision with root package name */
    private static final int[] f50477q = {13, 14, 16, 18, 20, 21, 27, 32, 6, 7, 6, 6, 1, 1, 1, 1};

    /* renamed from: s  reason: collision with root package name */
    private static final byte[] f50479s = w0.s0("#!AMR\n");

    /* renamed from: t  reason: collision with root package name */
    private static final byte[] f50480t = w0.s0("#!AMR-WB\n");

    static {
        int[] iArr = {18, 24, 33, 37, 41, 47, 51, 59, 61, 6, 1, 1, 1, 1, 1, 1};
        f50478r = iArr;
        f50481u = iArr[8];
    }

    public b() {
        this(0);
    }

    public static /* synthetic */ k[] b() {
        return new k[]{new b()};
    }

    private void e() {
        ne.a.i(this.f50494m);
        w0.j(this.f50493l);
    }

    private static int g(int i10, long j10) {
        return (int) ((i10 * 8000000) / j10);
    }

    private z h(long j10, boolean z10) {
        return new d(j10, this.f50489h, g(this.f50490i, 20000L), this.f50490i, z10);
    }

    private int i(int i10) {
        String str;
        if (!k(i10)) {
            StringBuilder sb2 = new StringBuilder();
            sb2.append("Illegal AMR ");
            if (this.f50484c) {
                str = "WB";
            } else {
                str = "NB";
            }
            sb2.append(str);
            sb2.append(" frame type ");
            sb2.append(i10);
            throw l0.a(sb2.toString(), null);
        } else if (this.f50484c) {
            return f50478r[i10];
        } else {
            return f50477q[i10];
        }
    }

    private boolean j(int i10) {
        if (!this.f50484c) {
            if (i10 < 12 || i10 > 14) {
                return true;
            }
            return false;
        }
        return false;
    }

    private boolean k(int i10) {
        if (i10 >= 0 && i10 <= 15) {
            if (l(i10) || j(i10)) {
                return true;
            }
            return false;
        }
        return false;
    }

    private boolean l(int i10) {
        if (this.f50484c) {
            if (i10 < 10 || i10 > 13) {
                return true;
            }
            return false;
        }
        return false;
    }

    private void m() {
        String str;
        int i10;
        if (!this.f50496o) {
            this.f50496o = true;
            boolean z10 = this.f50484c;
            if (z10) {
                str = "audio/amr-wb";
            } else {
                str = "audio/3gpp";
            }
            if (z10) {
                i10 = 16000;
            } else {
                i10 = 8000;
            }
            this.f50494m.b(new Format.b().g0(str).Y(f50481u).J(1).h0(i10).G());
        }
    }

    private void n(long j10, int i10) {
        int i11;
        boolean z10;
        if (!this.f50488g) {
            int i12 = this.f50483b;
            if ((i12 & 1) != 0 && j10 != -1 && ((i11 = this.f50490i) == -1 || i11 == this.f50486e)) {
                if (this.f50491j < 20 && i10 != -1) {
                    return;
                }
                if ((i12 & 2) != 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                z h10 = h(j10, z10);
                this.f50495n = h10;
                this.f50493l.q(h10);
                this.f50488g = true;
                return;
            }
            z.b bVar = new z.b(-9223372036854775807L);
            this.f50495n = bVar;
            this.f50493l.q(bVar);
            this.f50488g = true;
        }
    }

    private static boolean o(l lVar, byte[] bArr) {
        lVar.e();
        byte[] bArr2 = new byte[bArr.length];
        lVar.n(bArr2, 0, bArr.length);
        return Arrays.equals(bArr2, bArr);
    }

    private int p(l lVar) {
        lVar.e();
        lVar.n(this.f50482a, 0, 1);
        byte b10 = this.f50482a[0];
        if ((b10 & 131) <= 0) {
            return i((b10 >> 3) & 15);
        }
        throw l0.a("Invalid padding bits for frame header " + ((int) b10), null);
    }

    private boolean q(l lVar) {
        byte[] bArr = f50479s;
        if (o(lVar, bArr)) {
            this.f50484c = false;
            lVar.k(bArr.length);
            return true;
        }
        byte[] bArr2 = f50480t;
        if (!o(lVar, bArr2)) {
            return false;
        }
        this.f50484c = true;
        lVar.k(bArr2.length);
        return true;
    }

    private int r(l lVar) {
        if (this.f50487f == 0) {
            try {
                int p10 = p(lVar);
                this.f50486e = p10;
                this.f50487f = p10;
                if (this.f50490i == -1) {
                    this.f50489h = lVar.getPosition();
                    this.f50490i = this.f50486e;
                }
                if (this.f50490i == this.f50486e) {
                    this.f50491j++;
                }
            } catch (EOFException unused) {
                return -1;
            }
        }
        int a10 = this.f50494m.a(lVar, this.f50487f, true);
        if (a10 == -1) {
            return -1;
        }
        int i10 = this.f50487f - a10;
        this.f50487f = i10;
        if (i10 > 0) {
            return 0;
        }
        this.f50494m.d(this.f50492k + this.f50485d, 1, this.f50486e, 0, null);
        this.f50485d += 20000;
        return 0;
    }

    @Override // tc.k
    public void a(long j10, long j11) {
        this.f50485d = 0L;
        this.f50486e = 0;
        this.f50487f = 0;
        if (j10 != 0) {
            z zVar = this.f50495n;
            if (zVar instanceof d) {
                this.f50492k = ((d) zVar).c(j10);
                return;
            }
        }
        this.f50492k = 0L;
    }

    @Override // tc.k
    public void c(m mVar) {
        this.f50493l = mVar;
        this.f50494m = mVar.c(0, 1);
        mVar.s();
    }

    @Override // tc.k
    public int d(l lVar, y yVar) {
        e();
        if (lVar.getPosition() == 0 && !q(lVar)) {
            throw l0.a("Could not find AMR header.", null);
        }
        m();
        int r10 = r(lVar);
        n(lVar.getLength(), r10);
        return r10;
    }

    @Override // tc.k
    public boolean f(l lVar) {
        return q(lVar);
    }

    public b(int i10) {
        this.f50483b = (i10 & 2) != 0 ? i10 | 1 : i10;
        this.f50482a = new byte[1];
        this.f50490i = -1;
    }

    @Override // tc.k
    public void release() {
    }
}
