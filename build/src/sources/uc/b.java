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
    private static final int[] f50119r;

    /* renamed from: u  reason: collision with root package name */
    private static final int f50122u;

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f50123a;

    /* renamed from: b  reason: collision with root package name */
    private final int f50124b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f50125c;

    /* renamed from: d  reason: collision with root package name */
    private long f50126d;

    /* renamed from: e  reason: collision with root package name */
    private int f50127e;

    /* renamed from: f  reason: collision with root package name */
    private int f50128f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f50129g;

    /* renamed from: h  reason: collision with root package name */
    private long f50130h;

    /* renamed from: i  reason: collision with root package name */
    private int f50131i;

    /* renamed from: j  reason: collision with root package name */
    private int f50132j;

    /* renamed from: k  reason: collision with root package name */
    private long f50133k;

    /* renamed from: l  reason: collision with root package name */
    private m f50134l;

    /* renamed from: m  reason: collision with root package name */
    private b0 f50135m;

    /* renamed from: n  reason: collision with root package name */
    private z f50136n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f50137o;

    /* renamed from: p  reason: collision with root package name */
    public static final p f50117p = new p() { // from class: uc.a
        @Override // tc.p
        public final k[] b() {
            return b.b();
        }
    };

    /* renamed from: q  reason: collision with root package name */
    private static final int[] f50118q = {13, 14, 16, 18, 20, 21, 27, 32, 6, 7, 6, 6, 1, 1, 1, 1};

    /* renamed from: s  reason: collision with root package name */
    private static final byte[] f50120s = w0.s0("#!AMR\n");

    /* renamed from: t  reason: collision with root package name */
    private static final byte[] f50121t = w0.s0("#!AMR-WB\n");

    static {
        int[] iArr = {18, 24, 33, 37, 41, 47, 51, 59, 61, 6, 1, 1, 1, 1, 1, 1};
        f50119r = iArr;
        f50122u = iArr[8];
    }

    public b() {
        this(0);
    }

    public static /* synthetic */ k[] b() {
        return new k[]{new b()};
    }

    private void e() {
        ne.a.i(this.f50135m);
        w0.j(this.f50134l);
    }

    private static int g(int i10, long j10) {
        return (int) ((i10 * 8000000) / j10);
    }

    private z h(long j10, boolean z10) {
        return new d(j10, this.f50130h, g(this.f50131i, 20000L), this.f50131i, z10);
    }

    private int i(int i10) {
        String str;
        if (!k(i10)) {
            StringBuilder sb2 = new StringBuilder();
            sb2.append("Illegal AMR ");
            if (this.f50125c) {
                str = "WB";
            } else {
                str = "NB";
            }
            sb2.append(str);
            sb2.append(" frame type ");
            sb2.append(i10);
            throw l0.a(sb2.toString(), null);
        } else if (this.f50125c) {
            return f50119r[i10];
        } else {
            return f50118q[i10];
        }
    }

    private boolean j(int i10) {
        if (!this.f50125c) {
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
        if (this.f50125c) {
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
        if (!this.f50137o) {
            this.f50137o = true;
            boolean z10 = this.f50125c;
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
            this.f50135m.b(new Format.b().g0(str).Y(f50122u).J(1).h0(i10).G());
        }
    }

    private void n(long j10, int i10) {
        int i11;
        boolean z10;
        if (!this.f50129g) {
            int i12 = this.f50124b;
            if ((i12 & 1) != 0 && j10 != -1 && ((i11 = this.f50131i) == -1 || i11 == this.f50127e)) {
                if (this.f50132j < 20 && i10 != -1) {
                    return;
                }
                if ((i12 & 2) != 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                z h10 = h(j10, z10);
                this.f50136n = h10;
                this.f50134l.q(h10);
                this.f50129g = true;
                return;
            }
            z.b bVar = new z.b(-9223372036854775807L);
            this.f50136n = bVar;
            this.f50134l.q(bVar);
            this.f50129g = true;
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
        lVar.n(this.f50123a, 0, 1);
        byte b10 = this.f50123a[0];
        if ((b10 & 131) <= 0) {
            return i((b10 >> 3) & 15);
        }
        throw l0.a("Invalid padding bits for frame header " + ((int) b10), null);
    }

    private boolean q(l lVar) {
        byte[] bArr = f50120s;
        if (o(lVar, bArr)) {
            this.f50125c = false;
            lVar.k(bArr.length);
            return true;
        }
        byte[] bArr2 = f50121t;
        if (!o(lVar, bArr2)) {
            return false;
        }
        this.f50125c = true;
        lVar.k(bArr2.length);
        return true;
    }

    private int r(l lVar) {
        if (this.f50128f == 0) {
            try {
                int p10 = p(lVar);
                this.f50127e = p10;
                this.f50128f = p10;
                if (this.f50131i == -1) {
                    this.f50130h = lVar.getPosition();
                    this.f50131i = this.f50127e;
                }
                if (this.f50131i == this.f50127e) {
                    this.f50132j++;
                }
            } catch (EOFException unused) {
                return -1;
            }
        }
        int a10 = this.f50135m.a(lVar, this.f50128f, true);
        if (a10 == -1) {
            return -1;
        }
        int i10 = this.f50128f - a10;
        this.f50128f = i10;
        if (i10 > 0) {
            return 0;
        }
        this.f50135m.d(this.f50133k + this.f50126d, 1, this.f50127e, 0, null);
        this.f50126d += 20000;
        return 0;
    }

    @Override // tc.k
    public void a(long j10, long j11) {
        this.f50126d = 0L;
        this.f50127e = 0;
        this.f50128f = 0;
        if (j10 != 0) {
            z zVar = this.f50136n;
            if (zVar instanceof d) {
                this.f50133k = ((d) zVar).c(j10);
                return;
            }
        }
        this.f50133k = 0L;
    }

    @Override // tc.k
    public void c(m mVar) {
        this.f50134l = mVar;
        this.f50135m = mVar.c(0, 1);
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
        this.f50124b = (i10 & 2) != 0 ? i10 | 1 : i10;
        this.f50123a = new byte[1];
        this.f50131i = -1;
    }

    @Override // tc.k
    public void release() {
    }
}
