package vc;

import com.google.android.exoplayer2.Format;
import java.io.EOFException;
import java.util.Arrays;
import mc.l0;
import oe.w0;
import uc.b0;
import uc.d;
import uc.k;
import uc.l;
import uc.m;
import uc.p;
import uc.y;
import uc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements k {

    /* renamed from: r  reason: collision with root package name */
    private static final int[] f51439r;

    /* renamed from: u  reason: collision with root package name */
    private static final int f51442u;

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f51443a;

    /* renamed from: b  reason: collision with root package name */
    private final int f51444b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f51445c;

    /* renamed from: d  reason: collision with root package name */
    private long f51446d;

    /* renamed from: e  reason: collision with root package name */
    private int f51447e;

    /* renamed from: f  reason: collision with root package name */
    private int f51448f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f51449g;

    /* renamed from: h  reason: collision with root package name */
    private long f51450h;

    /* renamed from: i  reason: collision with root package name */
    private int f51451i;

    /* renamed from: j  reason: collision with root package name */
    private int f51452j;

    /* renamed from: k  reason: collision with root package name */
    private long f51453k;

    /* renamed from: l  reason: collision with root package name */
    private m f51454l;

    /* renamed from: m  reason: collision with root package name */
    private b0 f51455m;

    /* renamed from: n  reason: collision with root package name */
    private z f51456n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f51457o;

    /* renamed from: p  reason: collision with root package name */
    public static final p f51437p = new p() { // from class: vc.a
        @Override // uc.p
        public final k[] b() {
            return b.b();
        }
    };

    /* renamed from: q  reason: collision with root package name */
    private static final int[] f51438q = {13, 14, 16, 18, 20, 21, 27, 32, 6, 7, 6, 6, 1, 1, 1, 1};

    /* renamed from: s  reason: collision with root package name */
    private static final byte[] f51440s = w0.s0("#!AMR\n");

    /* renamed from: t  reason: collision with root package name */
    private static final byte[] f51441t = w0.s0("#!AMR-WB\n");

    static {
        int[] iArr = {18, 24, 33, 37, 41, 47, 51, 59, 61, 6, 1, 1, 1, 1, 1, 1};
        f51439r = iArr;
        f51442u = iArr[8];
    }

    public b() {
        this(0);
    }

    public static /* synthetic */ k[] b() {
        return new k[]{new b()};
    }

    private void e() {
        oe.a.i(this.f51455m);
        w0.j(this.f51454l);
    }

    private static int f(int i10, long j10) {
        return (int) ((i10 * 8000000) / j10);
    }

    private z g(long j10, boolean z10) {
        return new d(j10, this.f51450h, f(this.f51451i, 20000L), this.f51451i, z10);
    }

    private int i(int i10) {
        String str;
        if (!k(i10)) {
            StringBuilder sb2 = new StringBuilder();
            sb2.append("Illegal AMR ");
            if (this.f51445c) {
                str = "WB";
            } else {
                str = "NB";
            }
            sb2.append(str);
            sb2.append(" frame type ");
            sb2.append(i10);
            throw l0.a(sb2.toString(), null);
        } else if (this.f51445c) {
            return f51439r[i10];
        } else {
            return f51438q[i10];
        }
    }

    private boolean j(int i10) {
        if (!this.f51445c) {
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
        if (this.f51445c) {
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
        if (!this.f51457o) {
            this.f51457o = true;
            boolean z10 = this.f51445c;
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
            this.f51455m.c(new Format.b().g0(str).Y(f51442u).J(1).h0(i10).G());
        }
    }

    private void n(long j10, int i10) {
        int i11;
        boolean z10;
        if (!this.f51449g) {
            int i12 = this.f51444b;
            if ((i12 & 1) != 0 && j10 != -1 && ((i11 = this.f51451i) == -1 || i11 == this.f51447e)) {
                if (this.f51452j < 20 && i10 != -1) {
                    return;
                }
                if ((i12 & 2) != 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                z g10 = g(j10, z10);
                this.f51456n = g10;
                this.f51454l.j(g10);
                this.f51449g = true;
                return;
            }
            z.b bVar = new z.b(-9223372036854775807L);
            this.f51456n = bVar;
            this.f51454l.j(bVar);
            this.f51449g = true;
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
        lVar.n(this.f51443a, 0, 1);
        byte b10 = this.f51443a[0];
        if ((b10 & 131) <= 0) {
            return i((b10 >> 3) & 15);
        }
        throw l0.a("Invalid padding bits for frame header " + ((int) b10), null);
    }

    private boolean q(l lVar) {
        byte[] bArr = f51440s;
        if (o(lVar, bArr)) {
            this.f51445c = false;
            lVar.k(bArr.length);
            return true;
        }
        byte[] bArr2 = f51441t;
        if (!o(lVar, bArr2)) {
            return false;
        }
        this.f51445c = true;
        lVar.k(bArr2.length);
        return true;
    }

    private int r(l lVar) {
        if (this.f51448f == 0) {
            try {
                int p10 = p(lVar);
                this.f51447e = p10;
                this.f51448f = p10;
                if (this.f51451i == -1) {
                    this.f51450h = lVar.getPosition();
                    this.f51451i = this.f51447e;
                }
                if (this.f51451i == this.f51447e) {
                    this.f51452j++;
                }
            } catch (EOFException unused) {
                return -1;
            }
        }
        int f10 = this.f51455m.f(lVar, this.f51448f, true);
        if (f10 == -1) {
            return -1;
        }
        int i10 = this.f51448f - f10;
        this.f51448f = i10;
        if (i10 > 0) {
            return 0;
        }
        this.f51455m.a(this.f51453k + this.f51446d, 1, this.f51447e, 0, null);
        this.f51446d += 20000;
        return 0;
    }

    @Override // uc.k
    public void a(long j10, long j11) {
        this.f51446d = 0L;
        this.f51447e = 0;
        this.f51448f = 0;
        if (j10 != 0) {
            z zVar = this.f51456n;
            if (zVar instanceof d) {
                this.f51453k = ((d) zVar).c(j10);
                return;
            }
        }
        this.f51453k = 0L;
    }

    @Override // uc.k
    public void c(m mVar) {
        this.f51454l = mVar;
        this.f51455m = mVar.c(0, 1);
        mVar.q();
    }

    @Override // uc.k
    public boolean d(l lVar) {
        return q(lVar);
    }

    @Override // uc.k
    public int h(l lVar, y yVar) {
        e();
        if (lVar.getPosition() == 0 && !q(lVar)) {
            throw l0.a("Could not find AMR header.", null);
        }
        m();
        int r10 = r(lVar);
        n(lVar.getLength(), r10);
        return r10;
    }

    public b(int i10) {
        this.f51444b = (i10 & 2) != 0 ? i10 | 1 : i10;
        this.f51443a = new byte[1];
        this.f51451i = -1;
    }

    @Override // uc.k
    public void release() {
    }
}
