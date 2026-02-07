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
    private static final int[] f51336r;

    /* renamed from: u  reason: collision with root package name */
    private static final int f51339u;

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f51340a;

    /* renamed from: b  reason: collision with root package name */
    private final int f51341b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f51342c;

    /* renamed from: d  reason: collision with root package name */
    private long f51343d;

    /* renamed from: e  reason: collision with root package name */
    private int f51344e;

    /* renamed from: f  reason: collision with root package name */
    private int f51345f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f51346g;

    /* renamed from: h  reason: collision with root package name */
    private long f51347h;

    /* renamed from: i  reason: collision with root package name */
    private int f51348i;

    /* renamed from: j  reason: collision with root package name */
    private int f51349j;

    /* renamed from: k  reason: collision with root package name */
    private long f51350k;

    /* renamed from: l  reason: collision with root package name */
    private m f51351l;

    /* renamed from: m  reason: collision with root package name */
    private b0 f51352m;

    /* renamed from: n  reason: collision with root package name */
    private z f51353n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f51354o;

    /* renamed from: p  reason: collision with root package name */
    public static final p f51334p = new p() { // from class: uc.a
        @Override // tc.p
        public final k[] b() {
            return b.b();
        }
    };

    /* renamed from: q  reason: collision with root package name */
    private static final int[] f51335q = {13, 14, 16, 18, 20, 21, 27, 32, 6, 7, 6, 6, 1, 1, 1, 1};

    /* renamed from: s  reason: collision with root package name */
    private static final byte[] f51337s = w0.s0("#!AMR\n");

    /* renamed from: t  reason: collision with root package name */
    private static final byte[] f51338t = w0.s0("#!AMR-WB\n");

    static {
        int[] iArr = {18, 24, 33, 37, 41, 47, 51, 59, 61, 6, 1, 1, 1, 1, 1, 1};
        f51336r = iArr;
        f51339u = iArr[8];
    }

    public b() {
        this(0);
    }

    public static /* synthetic */ k[] b() {
        return new k[]{new b()};
    }

    private void e() {
        ne.a.i(this.f51352m);
        w0.j(this.f51351l);
    }

    private static int g(int i10, long j10) {
        return (int) ((i10 * 8000000) / j10);
    }

    private z h(long j10, boolean z10) {
        return new d(j10, this.f51347h, g(this.f51348i, 20000L), this.f51348i, z10);
    }

    private int i(int i10) {
        String str;
        if (!k(i10)) {
            StringBuilder sb2 = new StringBuilder();
            sb2.append("Illegal AMR ");
            if (this.f51342c) {
                str = "WB";
            } else {
                str = "NB";
            }
            sb2.append(str);
            sb2.append(" frame type ");
            sb2.append(i10);
            throw l0.a(sb2.toString(), null);
        } else if (this.f51342c) {
            return f51336r[i10];
        } else {
            return f51335q[i10];
        }
    }

    private boolean j(int i10) {
        if (!this.f51342c) {
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
        if (this.f51342c) {
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
        if (!this.f51354o) {
            this.f51354o = true;
            boolean z10 = this.f51342c;
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
            this.f51352m.b(new Format.b().g0(str).Y(f51339u).J(1).h0(i10).G());
        }
    }

    private void n(long j10, int i10) {
        int i11;
        boolean z10;
        if (!this.f51346g) {
            int i12 = this.f51341b;
            if ((i12 & 1) != 0 && j10 != -1 && ((i11 = this.f51348i) == -1 || i11 == this.f51344e)) {
                if (this.f51349j < 20 && i10 != -1) {
                    return;
                }
                if ((i12 & 2) != 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                z h10 = h(j10, z10);
                this.f51353n = h10;
                this.f51351l.q(h10);
                this.f51346g = true;
                return;
            }
            z.b bVar = new z.b(-9223372036854775807L);
            this.f51353n = bVar;
            this.f51351l.q(bVar);
            this.f51346g = true;
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
        lVar.n(this.f51340a, 0, 1);
        byte b10 = this.f51340a[0];
        if ((b10 & 131) <= 0) {
            return i((b10 >> 3) & 15);
        }
        throw l0.a("Invalid padding bits for frame header " + ((int) b10), null);
    }

    private boolean q(l lVar) {
        byte[] bArr = f51337s;
        if (o(lVar, bArr)) {
            this.f51342c = false;
            lVar.k(bArr.length);
            return true;
        }
        byte[] bArr2 = f51338t;
        if (!o(lVar, bArr2)) {
            return false;
        }
        this.f51342c = true;
        lVar.k(bArr2.length);
        return true;
    }

    private int r(l lVar) {
        if (this.f51345f == 0) {
            try {
                int p10 = p(lVar);
                this.f51344e = p10;
                this.f51345f = p10;
                if (this.f51348i == -1) {
                    this.f51347h = lVar.getPosition();
                    this.f51348i = this.f51344e;
                }
                if (this.f51348i == this.f51344e) {
                    this.f51349j++;
                }
            } catch (EOFException unused) {
                return -1;
            }
        }
        int a10 = this.f51352m.a(lVar, this.f51345f, true);
        if (a10 == -1) {
            return -1;
        }
        int i10 = this.f51345f - a10;
        this.f51345f = i10;
        if (i10 > 0) {
            return 0;
        }
        this.f51352m.d(this.f51350k + this.f51343d, 1, this.f51344e, 0, null);
        this.f51343d += 20000;
        return 0;
    }

    @Override // tc.k
    public void a(long j10, long j11) {
        this.f51343d = 0L;
        this.f51344e = 0;
        this.f51345f = 0;
        if (j10 != 0) {
            z zVar = this.f51353n;
            if (zVar instanceof d) {
                this.f51350k = ((d) zVar).c(j10);
                return;
            }
        }
        this.f51350k = 0L;
    }

    @Override // tc.k
    public void c(m mVar) {
        this.f51351l = mVar;
        this.f51352m = mVar.c(0, 1);
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
        this.f51341b = (i10 & 2) != 0 ? i10 | 1 : i10;
        this.f51340a = new byte[1];
        this.f51348i = -1;
    }

    @Override // tc.k
    public void release() {
    }
}
