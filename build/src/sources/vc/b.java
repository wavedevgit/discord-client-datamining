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
    private static final int[] f52196r;

    /* renamed from: u  reason: collision with root package name */
    private static final int f52199u;

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f52200a;

    /* renamed from: b  reason: collision with root package name */
    private final int f52201b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f52202c;

    /* renamed from: d  reason: collision with root package name */
    private long f52203d;

    /* renamed from: e  reason: collision with root package name */
    private int f52204e;

    /* renamed from: f  reason: collision with root package name */
    private int f52205f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f52206g;

    /* renamed from: h  reason: collision with root package name */
    private long f52207h;

    /* renamed from: i  reason: collision with root package name */
    private int f52208i;

    /* renamed from: j  reason: collision with root package name */
    private int f52209j;

    /* renamed from: k  reason: collision with root package name */
    private long f52210k;

    /* renamed from: l  reason: collision with root package name */
    private m f52211l;

    /* renamed from: m  reason: collision with root package name */
    private b0 f52212m;

    /* renamed from: n  reason: collision with root package name */
    private z f52213n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f52214o;

    /* renamed from: p  reason: collision with root package name */
    public static final p f52194p = new p() { // from class: vc.a
        @Override // uc.p
        public final k[] b() {
            return b.b();
        }
    };

    /* renamed from: q  reason: collision with root package name */
    private static final int[] f52195q = {13, 14, 16, 18, 20, 21, 27, 32, 6, 7, 6, 6, 1, 1, 1, 1};

    /* renamed from: s  reason: collision with root package name */
    private static final byte[] f52197s = w0.s0("#!AMR\n");

    /* renamed from: t  reason: collision with root package name */
    private static final byte[] f52198t = w0.s0("#!AMR-WB\n");

    static {
        int[] iArr = {18, 24, 33, 37, 41, 47, 51, 59, 61, 6, 1, 1, 1, 1, 1, 1};
        f52196r = iArr;
        f52199u = iArr[8];
    }

    public b() {
        this(0);
    }

    public static /* synthetic */ k[] b() {
        return new k[]{new b()};
    }

    private void e() {
        oe.a.i(this.f52212m);
        w0.j(this.f52211l);
    }

    private static int f(int i10, long j10) {
        return (int) ((i10 * 8000000) / j10);
    }

    private z g(long j10, boolean z10) {
        return new d(j10, this.f52207h, f(this.f52208i, 20000L), this.f52208i, z10);
    }

    private int i(int i10) {
        String str;
        if (!k(i10)) {
            StringBuilder sb2 = new StringBuilder();
            sb2.append("Illegal AMR ");
            if (this.f52202c) {
                str = "WB";
            } else {
                str = "NB";
            }
            sb2.append(str);
            sb2.append(" frame type ");
            sb2.append(i10);
            throw l0.a(sb2.toString(), null);
        } else if (this.f52202c) {
            return f52196r[i10];
        } else {
            return f52195q[i10];
        }
    }

    private boolean j(int i10) {
        if (!this.f52202c) {
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
        if (this.f52202c) {
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
        if (!this.f52214o) {
            this.f52214o = true;
            boolean z10 = this.f52202c;
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
            this.f52212m.c(new Format.b().g0(str).Y(f52199u).J(1).h0(i10).G());
        }
    }

    private void n(long j10, int i10) {
        int i11;
        boolean z10;
        if (!this.f52206g) {
            int i12 = this.f52201b;
            if ((i12 & 1) != 0 && j10 != -1 && ((i11 = this.f52208i) == -1 || i11 == this.f52204e)) {
                if (this.f52209j < 20 && i10 != -1) {
                    return;
                }
                if ((i12 & 2) != 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                z g10 = g(j10, z10);
                this.f52213n = g10;
                this.f52211l.j(g10);
                this.f52206g = true;
                return;
            }
            z.b bVar = new z.b(-9223372036854775807L);
            this.f52213n = bVar;
            this.f52211l.j(bVar);
            this.f52206g = true;
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
        lVar.n(this.f52200a, 0, 1);
        byte b10 = this.f52200a[0];
        if ((b10 & 131) <= 0) {
            return i((b10 >> 3) & 15);
        }
        throw l0.a("Invalid padding bits for frame header " + ((int) b10), null);
    }

    private boolean q(l lVar) {
        byte[] bArr = f52197s;
        if (o(lVar, bArr)) {
            this.f52202c = false;
            lVar.k(bArr.length);
            return true;
        }
        byte[] bArr2 = f52198t;
        if (!o(lVar, bArr2)) {
            return false;
        }
        this.f52202c = true;
        lVar.k(bArr2.length);
        return true;
    }

    private int r(l lVar) {
        if (this.f52205f == 0) {
            try {
                int p10 = p(lVar);
                this.f52204e = p10;
                this.f52205f = p10;
                if (this.f52208i == -1) {
                    this.f52207h = lVar.getPosition();
                    this.f52208i = this.f52204e;
                }
                if (this.f52208i == this.f52204e) {
                    this.f52209j++;
                }
            } catch (EOFException unused) {
                return -1;
            }
        }
        int f10 = this.f52212m.f(lVar, this.f52205f, true);
        if (f10 == -1) {
            return -1;
        }
        int i10 = this.f52205f - f10;
        this.f52205f = i10;
        if (i10 > 0) {
            return 0;
        }
        this.f52212m.a(this.f52210k + this.f52203d, 1, this.f52204e, 0, null);
        this.f52203d += 20000;
        return 0;
    }

    @Override // uc.k
    public void a(long j10, long j11) {
        this.f52203d = 0L;
        this.f52204e = 0;
        this.f52205f = 0;
        if (j10 != 0) {
            z zVar = this.f52213n;
            if (zVar instanceof d) {
                this.f52210k = ((d) zVar).c(j10);
                return;
            }
        }
        this.f52210k = 0L;
    }

    @Override // uc.k
    public void c(m mVar) {
        this.f52211l = mVar;
        this.f52212m = mVar.c(0, 1);
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
        this.f52201b = (i10 & 2) != 0 ? i10 | 1 : i10;
        this.f52200a = new byte[1];
        this.f52208i = -1;
    }

    @Override // uc.k
    public void release() {
    }
}
