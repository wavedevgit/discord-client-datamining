package cd;

import cd.a;
import cd.b;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.metadata.Metadata;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.LongCompanionObject;
import mc.l0;
import oe.d0;
import oe.h0;
import oe.w0;
import uc.b0;
import uc.c0;
import uc.v;
import uc.y;
import uc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k implements uc.k, z {

    /* renamed from: y  reason: collision with root package name */
    public static final uc.p f7445y = new uc.p() { // from class: cd.j
        @Override // uc.p
        public final uc.k[] b() {
            return k.k();
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final int f7446a;

    /* renamed from: b  reason: collision with root package name */
    private final h0 f7447b;

    /* renamed from: c  reason: collision with root package name */
    private final h0 f7448c;

    /* renamed from: d  reason: collision with root package name */
    private final h0 f7449d;

    /* renamed from: e  reason: collision with root package name */
    private final h0 f7450e;

    /* renamed from: f  reason: collision with root package name */
    private final ArrayDeque f7451f;

    /* renamed from: g  reason: collision with root package name */
    private final m f7452g;

    /* renamed from: h  reason: collision with root package name */
    private final List f7453h;

    /* renamed from: i  reason: collision with root package name */
    private int f7454i;

    /* renamed from: j  reason: collision with root package name */
    private int f7455j;

    /* renamed from: k  reason: collision with root package name */
    private long f7456k;

    /* renamed from: l  reason: collision with root package name */
    private int f7457l;

    /* renamed from: m  reason: collision with root package name */
    private h0 f7458m;

    /* renamed from: n  reason: collision with root package name */
    private int f7459n;

    /* renamed from: o  reason: collision with root package name */
    private int f7460o;

    /* renamed from: p  reason: collision with root package name */
    private int f7461p;

    /* renamed from: q  reason: collision with root package name */
    private int f7462q;

    /* renamed from: r  reason: collision with root package name */
    private uc.m f7463r;

    /* renamed from: s  reason: collision with root package name */
    private a[] f7464s;

    /* renamed from: t  reason: collision with root package name */
    private long[][] f7465t;

    /* renamed from: u  reason: collision with root package name */
    private int f7466u;

    /* renamed from: v  reason: collision with root package name */
    private long f7467v;

    /* renamed from: w  reason: collision with root package name */
    private int f7468w;

    /* renamed from: x  reason: collision with root package name */
    private nd.b f7469x;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final o f7470a;

        /* renamed from: b  reason: collision with root package name */
        public final r f7471b;

        /* renamed from: c  reason: collision with root package name */
        public final b0 f7472c;

        /* renamed from: d  reason: collision with root package name */
        public final c0 f7473d;

        /* renamed from: e  reason: collision with root package name */
        public int f7474e;

        public a(o oVar, r rVar, b0 b0Var) {
            c0 c0Var;
            this.f7470a = oVar;
            this.f7471b = rVar;
            this.f7472c = b0Var;
            if ("audio/true-hd".equals(oVar.f7492f.f11727w)) {
                c0Var = new c0();
            } else {
                c0Var = null;
            }
            this.f7473d = c0Var;
        }
    }

    public k() {
        this(0);
    }

    private int A(uc.l lVar, y yVar) {
        int i10;
        long position = lVar.getPosition();
        if (this.f7459n == -1) {
            int q10 = q(position);
            this.f7459n = q10;
            if (q10 == -1) {
                return -1;
            }
        }
        a aVar = this.f7464s[this.f7459n];
        b0 b0Var = aVar.f7472c;
        int i11 = aVar.f7474e;
        r rVar = aVar.f7471b;
        long j10 = rVar.f7523c[i11];
        int i12 = rVar.f7524d[i11];
        c0 c0Var = aVar.f7473d;
        long j11 = (j10 - position) + this.f7460o;
        if (j11 >= 0 && j11 < 262144) {
            if (aVar.f7470a.f7493g == 1) {
                j11 += 8;
                i12 -= 8;
            }
            lVar.k((int) j11);
            o oVar = aVar.f7470a;
            if (oVar.f7496j != 0) {
                byte[] e10 = this.f7448c.e();
                e10[0] = 0;
                e10[1] = 0;
                e10[2] = 0;
                int i13 = aVar.f7470a.f7496j;
                int i14 = 4 - i13;
                while (this.f7461p < i12) {
                    int i15 = this.f7462q;
                    if (i15 == 0) {
                        lVar.readFully(e10, i14, i13);
                        this.f7460o += i13;
                        this.f7448c.U(0);
                        int q11 = this.f7448c.q();
                        if (q11 >= 0) {
                            this.f7462q = q11;
                            this.f7447b.U(0);
                            b0Var.e(this.f7447b, 4);
                            this.f7461p += 4;
                            i12 += i14;
                        } else {
                            throw l0.a("Invalid NAL length", null);
                        }
                    } else {
                        int f10 = b0Var.f(lVar, i15, false);
                        this.f7460o += f10;
                        this.f7461p += f10;
                        this.f7462q -= f10;
                    }
                }
            } else {
                if ("audio/ac4".equals(oVar.f7492f.f11727w)) {
                    if (this.f7461p == 0) {
                        oc.c.a(i12, this.f7449d);
                        b0Var.e(this.f7449d, 7);
                        this.f7461p += 7;
                    }
                    i12 += 7;
                } else if (c0Var != null) {
                    c0Var.d(lVar);
                }
                while (true) {
                    int i16 = this.f7461p;
                    if (i16 >= i12) {
                        break;
                    }
                    int f11 = b0Var.f(lVar, i12 - i16, false);
                    this.f7460o += f11;
                    this.f7461p += f11;
                    this.f7462q -= f11;
                }
            }
            int i17 = i12;
            r rVar2 = aVar.f7471b;
            long j12 = rVar2.f7526f[i11];
            int i18 = rVar2.f7527g[i11];
            if (c0Var != null) {
                i10 = 0;
                c0Var.c(b0Var, j12, i18, i17, 0, null);
                if (i11 + 1 == aVar.f7471b.f7522b) {
                    c0Var.a(b0Var, null);
                }
            } else {
                i10 = 0;
                b0Var.a(j12, i18, i17, 0, null);
            }
            aVar.f7474e++;
            this.f7459n = -1;
            this.f7460o = i10;
            this.f7461p = i10;
            this.f7462q = i10;
            return i10;
        }
        yVar.f51535a = j10;
        return 1;
    }

    private int B(uc.l lVar, y yVar) {
        int c10 = this.f7452g.c(lVar, yVar, this.f7453h);
        if (c10 == 1 && yVar.f51535a == 0) {
            n();
        }
        return c10;
    }

    private static boolean C(int i10) {
        if (i10 != 1836019574 && i10 != 1953653099 && i10 != 1835297121 && i10 != 1835626086 && i10 != 1937007212 && i10 != 1701082227 && i10 != 1835365473) {
            return false;
        }
        return true;
    }

    private static boolean D(int i10) {
        if (i10 != 1835296868 && i10 != 1836476516 && i10 != 1751411826 && i10 != 1937011556 && i10 != 1937011827 && i10 != 1937011571 && i10 != 1668576371 && i10 != 1701606260 && i10 != 1937011555 && i10 != 1937011578 && i10 != 1937013298 && i10 != 1937007471 && i10 != 1668232756 && i10 != 1953196132 && i10 != 1718909296 && i10 != 1969517665 && i10 != 1801812339 && i10 != 1768715124) {
            return false;
        }
        return true;
    }

    private void E(a aVar, long j10) {
        r rVar = aVar.f7471b;
        int a10 = rVar.a(j10);
        if (a10 == -1) {
            a10 = rVar.b(j10);
        }
        aVar.f7474e = a10;
    }

    public static /* synthetic */ o j(o oVar) {
        return oVar;
    }

    public static /* synthetic */ uc.k[] k() {
        return new uc.k[]{new k()};
    }

    private static int l(int i10) {
        if (i10 != 1751476579) {
            if (i10 != 1903435808) {
                return 0;
            }
            return 1;
        }
        return 2;
    }

    private static long[][] m(a[] aVarArr) {
        long[][] jArr = new long[aVarArr.length];
        int[] iArr = new int[aVarArr.length];
        long[] jArr2 = new long[aVarArr.length];
        boolean[] zArr = new boolean[aVarArr.length];
        for (int i10 = 0; i10 < aVarArr.length; i10++) {
            jArr[i10] = new long[aVarArr[i10].f7471b.f7522b];
            jArr2[i10] = aVarArr[i10].f7471b.f7526f[0];
        }
        long j10 = 0;
        int i11 = 0;
        while (i11 < aVarArr.length) {
            long j11 = LongCompanionObject.MAX_VALUE;
            int i12 = -1;
            for (int i13 = 0; i13 < aVarArr.length; i13++) {
                if (!zArr[i13]) {
                    long j12 = jArr2[i13];
                    if (j12 <= j11) {
                        i12 = i13;
                        j11 = j12;
                    }
                }
            }
            int i14 = iArr[i12];
            long[] jArr3 = jArr[i12];
            jArr3[i14] = j10;
            r rVar = aVarArr[i12].f7471b;
            j10 += rVar.f7524d[i14];
            int i15 = i14 + 1;
            iArr[i12] = i15;
            if (i15 < jArr3.length) {
                jArr2[i12] = rVar.f7526f[i15];
            } else {
                zArr[i12] = true;
                i11++;
            }
        }
        return jArr;
    }

    private void n() {
        this.f7454i = 0;
        this.f7457l = 0;
    }

    private static int p(r rVar, long j10) {
        int a10 = rVar.a(j10);
        if (a10 == -1) {
            return rVar.b(j10);
        }
        return a10;
    }

    private int q(long j10) {
        boolean z10;
        int i10 = -1;
        int i11 = -1;
        int i12 = 0;
        long j11 = LongCompanionObject.MAX_VALUE;
        boolean z11 = true;
        long j12 = LongCompanionObject.MAX_VALUE;
        boolean z12 = true;
        long j13 = LongCompanionObject.MAX_VALUE;
        while (true) {
            a[] aVarArr = this.f7464s;
            if (i12 >= aVarArr.length) {
                break;
            }
            a aVar = aVarArr[i12];
            int i13 = aVar.f7474e;
            r rVar = aVar.f7471b;
            if (i13 != rVar.f7522b) {
                long j14 = rVar.f7523c[i13];
                long j15 = ((long[][]) w0.j(this.f7465t))[i12][i13];
                long j16 = j14 - j10;
                if (j16 >= 0 && j16 < 262144) {
                    z10 = false;
                } else {
                    z10 = true;
                }
                if ((!z10 && z12) || (z10 == z12 && j16 < j13)) {
                    z12 = z10;
                    j12 = j15;
                    i11 = i12;
                    j13 = j16;
                }
                if (j15 < j11) {
                    z11 = z10;
                    j11 = j15;
                    i10 = i12;
                }
            }
            i12++;
        }
        if (j11 != LongCompanionObject.MAX_VALUE && z11 && j12 >= j11 + 10485760) {
            return i10;
        }
        return i11;
    }

    private static long r(r rVar, long j10, long j11) {
        int p10 = p(rVar, j10);
        if (p10 == -1) {
            return j11;
        }
        return Math.min(rVar.f7523c[p10], j11);
    }

    private void s(uc.l lVar) {
        this.f7449d.Q(8);
        lVar.n(this.f7449d.e(), 0, 8);
        b.f(this.f7449d);
        lVar.k(this.f7449d.f());
        lVar.e();
    }

    private void t(long j10) {
        while (!this.f7451f.isEmpty() && ((a.C0147a) this.f7451f.peek()).f7354b == j10) {
            a.C0147a c0147a = (a.C0147a) this.f7451f.pop();
            if (c0147a.f7353a == 1836019574) {
                w(c0147a);
                this.f7451f.clear();
                this.f7454i = 2;
            } else if (!this.f7451f.isEmpty()) {
                ((a.C0147a) this.f7451f.peek()).d(c0147a);
            }
        }
        if (this.f7454i != 2) {
            n();
        }
    }

    private void u() {
        Metadata metadata;
        if (this.f7468w == 2 && (this.f7446a & 2) != 0) {
            b0 c10 = this.f7463r.c(0, 4);
            if (this.f7469x == null) {
                metadata = null;
            } else {
                metadata = new Metadata(this.f7469x);
            }
            c10.c(new Format.b().Z(metadata).G());
            this.f7463r.q();
            this.f7463r.j(new z.b(-9223372036854775807L));
        }
    }

    private static int v(h0 h0Var) {
        h0Var.U(8);
        int l10 = l(h0Var.q());
        if (l10 != 0) {
            return l10;
        }
        h0Var.V(4);
        while (h0Var.a() > 0) {
            int l11 = l(h0Var.q());
            if (l11 != 0) {
                return l11;
            }
        }
        return 0;
    }

    private void w(a.C0147a c0147a) {
        boolean z10;
        Metadata metadata;
        Metadata metadata2;
        Metadata metadata3;
        Metadata metadata4;
        boolean z11;
        List list;
        int i10;
        int i11;
        boolean z12;
        Metadata metadata5;
        int i12;
        ArrayList arrayList = new ArrayList();
        if (this.f7468w == 1) {
            z10 = true;
        } else {
            z10 = false;
        }
        v vVar = new v();
        a.b g10 = c0147a.g(1969517665);
        if (g10 != null) {
            b.i C = b.C(g10);
            Metadata metadata6 = C.f7389a;
            Metadata metadata7 = C.f7390b;
            Metadata metadata8 = C.f7391c;
            if (metadata6 != null) {
                vVar.c(metadata6);
            }
            metadata = metadata8;
            metadata2 = metadata6;
            metadata3 = metadata7;
        } else {
            metadata = null;
            metadata2 = null;
            metadata3 = null;
        }
        a.C0147a f10 = c0147a.f(1835365473);
        if (f10 != null) {
            metadata4 = b.o(f10);
        } else {
            metadata4 = null;
        }
        Metadata metadata9 = b.q(((a.b) oe.a.e(c0147a.g(1836476516))).f7357b).f7372a;
        if ((this.f7446a & 1) != 0) {
            z11 = true;
        } else {
            z11 = false;
        }
        Metadata metadata10 = metadata4;
        List B = b.B(c0147a, vVar, -9223372036854775807L, null, z11, z10, new ni.f() { // from class: cd.i
            @Override // ni.f
            public final Object apply(Object obj) {
                return k.j((o) obj);
            }
        });
        int size = B.size();
        long j10 = -9223372036854775807L;
        int i13 = 0;
        int i14 = -1;
        while (i13 < size) {
            r rVar = (r) B.get(i13);
            if (rVar.f7522b == 0) {
                list = B;
                i10 = size;
                i12 = i14;
                z12 = true;
            } else {
                o oVar = rVar.f7521a;
                int i15 = i14;
                ArrayList arrayList2 = arrayList;
                long j11 = oVar.f7491e;
                if (j11 == -9223372036854775807L) {
                    j11 = rVar.f7528h;
                }
                long max = Math.max(j10, j11);
                list = B;
                i10 = size;
                a aVar = new a(oVar, rVar, this.f7463r.c(i13, oVar.f7488b));
                if ("audio/true-hd".equals(oVar.f7492f.f11727w)) {
                    i11 = rVar.f7525e * 16;
                } else {
                    i11 = rVar.f7525e + 30;
                }
                Format.b b10 = oVar.f7492f.b();
                b10.Y(i11);
                if (oVar.f7488b == 2 && j11 > 0) {
                    int i16 = rVar.f7522b;
                    z12 = true;
                    if (i16 > 1) {
                        b10.R(i16 / (((float) j11) / 1000000.0f));
                    }
                } else {
                    z12 = true;
                }
                h.k(oVar.f7488b, vVar, b10);
                int i17 = oVar.f7488b;
                if (this.f7453h.isEmpty()) {
                    metadata5 = null;
                } else {
                    metadata5 = new Metadata(this.f7453h);
                }
                h.l(i17, metadata2, metadata10, b10, metadata3, metadata5, metadata, metadata9);
                aVar.f7472c.c(b10.G());
                if (oVar.f7488b == 2) {
                    i12 = i15;
                    if (i12 == -1) {
                        i12 = arrayList2.size();
                    }
                } else {
                    i12 = i15;
                }
                arrayList = arrayList2;
                arrayList.add(aVar);
                j10 = max;
            }
            i13++;
            i14 = i12;
            B = list;
            size = i10;
        }
        this.f7466u = i14;
        this.f7467v = j10;
        a[] aVarArr = (a[]) arrayList.toArray(new a[0]);
        this.f7464s = aVarArr;
        this.f7465t = m(aVarArr);
        this.f7463r.q();
        this.f7463r.j(this);
    }

    private void x(long j10) {
        if (this.f7455j == 1836086884) {
            int i10 = this.f7457l;
            this.f7469x = new nd.b(0L, j10, -9223372036854775807L, j10 + i10, this.f7456k - i10);
        }
    }

    private boolean y(uc.l lVar) {
        a.C0147a c0147a;
        boolean z10;
        boolean z11;
        if (this.f7457l == 0) {
            if (!lVar.f(this.f7450e.e(), 0, 8, true)) {
                u();
                return false;
            }
            this.f7457l = 8;
            this.f7450e.U(0);
            this.f7456k = this.f7450e.J();
            this.f7455j = this.f7450e.q();
        }
        long j10 = this.f7456k;
        if (j10 == 1) {
            lVar.readFully(this.f7450e.e(), 8, 8);
            this.f7457l += 8;
            this.f7456k = this.f7450e.M();
        } else if (j10 == 0) {
            long length = lVar.getLength();
            if (length == -1 && (c0147a = (a.C0147a) this.f7451f.peek()) != null) {
                length = c0147a.f7354b;
            }
            if (length != -1) {
                this.f7456k = (length - lVar.getPosition()) + this.f7457l;
            }
        }
        if (this.f7456k >= this.f7457l) {
            if (C(this.f7455j)) {
                long position = lVar.getPosition();
                long j11 = this.f7456k;
                int i10 = this.f7457l;
                long j12 = (position + j11) - i10;
                if (j11 != i10 && this.f7455j == 1835365473) {
                    s(lVar);
                }
                this.f7451f.push(new a.C0147a(this.f7455j, j12));
                if (this.f7456k == this.f7457l) {
                    t(j12);
                } else {
                    n();
                }
            } else if (D(this.f7455j)) {
                if (this.f7457l == 8) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                oe.a.g(z10);
                if (this.f7456k <= 2147483647L) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                oe.a.g(z11);
                h0 h0Var = new h0((int) this.f7456k);
                System.arraycopy(this.f7450e.e(), 0, h0Var.e(), 0, 8);
                this.f7458m = h0Var;
                this.f7454i = 1;
            } else {
                x(lVar.getPosition() - this.f7457l);
                this.f7458m = null;
                this.f7454i = 1;
            }
            return true;
        }
        throw l0.d("Atom size less than header length (unsupported).");
    }

    private boolean z(uc.l lVar, y yVar) {
        boolean z10;
        long j10 = this.f7456k - this.f7457l;
        long position = lVar.getPosition() + j10;
        h0 h0Var = this.f7458m;
        if (h0Var != null) {
            lVar.readFully(h0Var.e(), this.f7457l, (int) j10);
            if (this.f7455j == 1718909296) {
                this.f7468w = v(h0Var);
            } else if (!this.f7451f.isEmpty()) {
                ((a.C0147a) this.f7451f.peek()).e(new a.b(this.f7455j, h0Var));
            }
        } else if (j10 < 262144) {
            lVar.k((int) j10);
        } else {
            yVar.f51535a = lVar.getPosition() + j10;
            z10 = true;
            t(position);
            if (!z10 && this.f7454i != 2) {
                return true;
            }
            return false;
        }
        z10 = false;
        t(position);
        if (!z10) {
        }
        return false;
    }

    @Override // uc.k
    public void a(long j10, long j11) {
        a[] aVarArr;
        this.f7451f.clear();
        this.f7457l = 0;
        this.f7459n = -1;
        this.f7460o = 0;
        this.f7461p = 0;
        this.f7462q = 0;
        if (j10 == 0) {
            if (this.f7454i != 3) {
                n();
                return;
            }
            this.f7452g.g();
            this.f7453h.clear();
            return;
        }
        for (a aVar : this.f7464s) {
            E(aVar, j11);
            c0 c0Var = aVar.f7473d;
            if (c0Var != null) {
                c0Var.b();
            }
        }
    }

    @Override // uc.k
    public void c(uc.m mVar) {
        this.f7463r = mVar;
    }

    @Override // uc.k
    public boolean d(uc.l lVar) {
        boolean z10;
        if ((this.f7446a & 2) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        return n.d(lVar, z10);
    }

    @Override // uc.z
    public z.a e(long j10) {
        return o(j10, -1);
    }

    @Override // uc.z
    public boolean g() {
        return true;
    }

    @Override // uc.k
    public int h(uc.l lVar, y yVar) {
        while (true) {
            int i10 = this.f7454i;
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 != 2) {
                        if (i10 == 3) {
                            return B(lVar, yVar);
                        }
                        throw new IllegalStateException();
                    }
                    return A(lVar, yVar);
                } else if (z(lVar, yVar)) {
                    return 1;
                }
            } else if (!y(lVar)) {
                return -1;
            }
        }
    }

    @Override // uc.z
    public long i() {
        return this.f7467v;
    }

    /* JADX WARN: Removed duplicated region for block: B:27:0x0062  */
    /* JADX WARN: Removed duplicated region for block: B:39:0x0089  */
    /* JADX WARN: Removed duplicated region for block: B:41:0x008f  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public uc.z.a o(long r17, int r19) {
        /*
            r16 = this;
            r0 = r16
            r1 = r17
            r3 = r19
            cd.k$a[] r4 = r0.f7464s
            int r5 = r4.length
            if (r5 != 0) goto L13
            uc.z$a r1 = new uc.z$a
            uc.a0 r2 = uc.a0.f51431c
            r1.<init>(r2)
            return r1
        L13:
            r5 = -1
            if (r3 == r5) goto L18
            r6 = r3
            goto L1a
        L18:
            int r6 = r0.f7466u
        L1a:
            r7 = -9223372036854775807(0x8000000000000001, double:-4.9E-324)
            r9 = -1
            if (r6 == r5) goto L58
            r4 = r4[r6]
            cd.r r4 = r4.f7471b
            int r6 = p(r4, r1)
            if (r6 != r5) goto L35
            uc.z$a r1 = new uc.z$a
            uc.a0 r2 = uc.a0.f51431c
            r1.<init>(r2)
            return r1
        L35:
            long[] r11 = r4.f7526f
            r12 = r11[r6]
            long[] r11 = r4.f7523c
            r14 = r11[r6]
            int r11 = (r12 > r1 ? 1 : (r12 == r1 ? 0 : -1))
            if (r11 >= 0) goto L5e
            int r11 = r4.f7522b
            int r11 = r11 + (-1)
            if (r6 >= r11) goto L5e
            int r1 = r4.b(r1)
            if (r1 == r5) goto L5e
            if (r1 == r6) goto L5e
            long[] r2 = r4.f7526f
            r9 = r2[r1]
            long[] r2 = r4.f7523c
            r1 = r2[r1]
            goto L60
        L58:
            r14 = 9223372036854775807(0x7fffffffffffffff, double:NaN)
            r12 = r1
        L5e:
            r1 = r9
            r9 = r7
        L60:
            if (r3 != r5) goto L80
            r3 = 0
        L63:
            cd.k$a[] r4 = r0.f7464s
            int r5 = r4.length
            if (r3 >= r5) goto L80
            int r5 = r0.f7466u
            if (r3 == r5) goto L7d
            r4 = r4[r3]
            cd.r r4 = r4.f7471b
            long r5 = r(r4, r12, r14)
            int r11 = (r9 > r7 ? 1 : (r9 == r7 ? 0 : -1))
            if (r11 == 0) goto L7c
            long r1 = r(r4, r9, r1)
        L7c:
            r14 = r5
        L7d:
            int r3 = r3 + 1
            goto L63
        L80:
            uc.a0 r3 = new uc.a0
            r3.<init>(r12, r14)
            int r4 = (r9 > r7 ? 1 : (r9 == r7 ? 0 : -1))
            if (r4 != 0) goto L8f
            uc.z$a r1 = new uc.z$a
            r1.<init>(r3)
            return r1
        L8f:
            uc.a0 r4 = new uc.a0
            r4.<init>(r9, r1)
            uc.z$a r1 = new uc.z$a
            r1.<init>(r3, r4)
            return r1
        */
        throw new UnsupportedOperationException("Method not decompiled: cd.k.o(long, int):uc.z$a");
    }

    public k(int i10) {
        this.f7446a = i10;
        this.f7454i = (i10 & 4) != 0 ? 3 : 0;
        this.f7452g = new m();
        this.f7453h = new ArrayList();
        this.f7450e = new h0(16);
        this.f7451f = new ArrayDeque();
        this.f7447b = new h0(d0.f40564a);
        this.f7448c = new h0(4);
        this.f7449d = new h0();
        this.f7459n = -1;
        this.f7463r = uc.m.f51506l;
        this.f7464s = new a[0];
    }

    @Override // uc.k
    public void release() {
    }
}
