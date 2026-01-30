package bd;

import bd.a;
import bd.b;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.metadata.Metadata;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.LongCompanionObject;
import lc.l0;
import ne.d0;
import ne.h0;
import ne.w0;
import tc.b0;
import tc.c0;
import tc.v;
import tc.y;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k implements tc.k, z {

    /* renamed from: y  reason: collision with root package name */
    public static final tc.p f7367y = new tc.p() { // from class: bd.j
        @Override // tc.p
        public final tc.k[] b() {
            return k.k();
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final int f7368a;

    /* renamed from: b  reason: collision with root package name */
    private final h0 f7369b;

    /* renamed from: c  reason: collision with root package name */
    private final h0 f7370c;

    /* renamed from: d  reason: collision with root package name */
    private final h0 f7371d;

    /* renamed from: e  reason: collision with root package name */
    private final h0 f7372e;

    /* renamed from: f  reason: collision with root package name */
    private final ArrayDeque f7373f;

    /* renamed from: g  reason: collision with root package name */
    private final m f7374g;

    /* renamed from: h  reason: collision with root package name */
    private final List f7375h;

    /* renamed from: i  reason: collision with root package name */
    private int f7376i;

    /* renamed from: j  reason: collision with root package name */
    private int f7377j;

    /* renamed from: k  reason: collision with root package name */
    private long f7378k;

    /* renamed from: l  reason: collision with root package name */
    private int f7379l;

    /* renamed from: m  reason: collision with root package name */
    private h0 f7380m;

    /* renamed from: n  reason: collision with root package name */
    private int f7381n;

    /* renamed from: o  reason: collision with root package name */
    private int f7382o;

    /* renamed from: p  reason: collision with root package name */
    private int f7383p;

    /* renamed from: q  reason: collision with root package name */
    private int f7384q;

    /* renamed from: r  reason: collision with root package name */
    private tc.m f7385r;

    /* renamed from: s  reason: collision with root package name */
    private a[] f7386s;

    /* renamed from: t  reason: collision with root package name */
    private long[][] f7387t;

    /* renamed from: u  reason: collision with root package name */
    private int f7388u;

    /* renamed from: v  reason: collision with root package name */
    private long f7389v;

    /* renamed from: w  reason: collision with root package name */
    private int f7390w;

    /* renamed from: x  reason: collision with root package name */
    private md.b f7391x;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final o f7392a;

        /* renamed from: b  reason: collision with root package name */
        public final r f7393b;

        /* renamed from: c  reason: collision with root package name */
        public final b0 f7394c;

        /* renamed from: d  reason: collision with root package name */
        public final c0 f7395d;

        /* renamed from: e  reason: collision with root package name */
        public int f7396e;

        public a(o oVar, r rVar, b0 b0Var) {
            c0 c0Var;
            this.f7392a = oVar;
            this.f7393b = rVar;
            this.f7394c = b0Var;
            if ("audio/true-hd".equals(oVar.f7414f.f12706w)) {
                c0Var = new c0();
            } else {
                c0Var = null;
            }
            this.f7395d = c0Var;
        }
    }

    public k() {
        this(0);
    }

    private int A(tc.l lVar, y yVar) {
        int i10;
        long position = lVar.getPosition();
        if (this.f7381n == -1) {
            int q10 = q(position);
            this.f7381n = q10;
            if (q10 == -1) {
                return -1;
            }
        }
        a aVar = this.f7386s[this.f7381n];
        b0 b0Var = aVar.f7394c;
        int i11 = aVar.f7396e;
        r rVar = aVar.f7393b;
        long j10 = rVar.f7445c[i11];
        int i12 = rVar.f7446d[i11];
        c0 c0Var = aVar.f7395d;
        long j11 = (j10 - position) + this.f7382o;
        if (j11 >= 0 && j11 < 262144) {
            if (aVar.f7392a.f7415g == 1) {
                j11 += 8;
                i12 -= 8;
            }
            lVar.k((int) j11);
            o oVar = aVar.f7392a;
            if (oVar.f7418j != 0) {
                byte[] e10 = this.f7370c.e();
                e10[0] = 0;
                e10[1] = 0;
                e10[2] = 0;
                int i13 = aVar.f7392a.f7418j;
                int i14 = 4 - i13;
                while (this.f7383p < i12) {
                    int i15 = this.f7384q;
                    if (i15 == 0) {
                        lVar.readFully(e10, i14, i13);
                        this.f7382o += i13;
                        this.f7370c.U(0);
                        int q11 = this.f7370c.q();
                        if (q11 >= 0) {
                            this.f7384q = q11;
                            this.f7369b.U(0);
                            b0Var.f(this.f7369b, 4);
                            this.f7383p += 4;
                            i12 += i14;
                        } else {
                            throw l0.a("Invalid NAL length", null);
                        }
                    } else {
                        int a10 = b0Var.a(lVar, i15, false);
                        this.f7382o += a10;
                        this.f7383p += a10;
                        this.f7384q -= a10;
                    }
                }
            } else {
                if ("audio/ac4".equals(oVar.f7414f.f12706w)) {
                    if (this.f7383p == 0) {
                        nc.c.a(i12, this.f7371d);
                        b0Var.f(this.f7371d, 7);
                        this.f7383p += 7;
                    }
                    i12 += 7;
                } else if (c0Var != null) {
                    c0Var.d(lVar);
                }
                while (true) {
                    int i16 = this.f7383p;
                    if (i16 >= i12) {
                        break;
                    }
                    int a11 = b0Var.a(lVar, i12 - i16, false);
                    this.f7382o += a11;
                    this.f7383p += a11;
                    this.f7384q -= a11;
                }
            }
            int i17 = i12;
            r rVar2 = aVar.f7393b;
            long j12 = rVar2.f7448f[i11];
            int i18 = rVar2.f7449g[i11];
            if (c0Var != null) {
                i10 = 0;
                c0Var.c(b0Var, j12, i18, i17, 0, null);
                if (i11 + 1 == aVar.f7393b.f7444b) {
                    c0Var.a(b0Var, null);
                }
            } else {
                i10 = 0;
                b0Var.d(j12, i18, i17, 0, null);
            }
            aVar.f7396e++;
            this.f7381n = -1;
            this.f7382o = i10;
            this.f7383p = i10;
            this.f7384q = i10;
            return i10;
        }
        yVar.f49518a = j10;
        return 1;
    }

    private int B(tc.l lVar, y yVar) {
        int c10 = this.f7374g.c(lVar, yVar, this.f7375h);
        if (c10 == 1 && yVar.f49518a == 0) {
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
        r rVar = aVar.f7393b;
        int a10 = rVar.a(j10);
        if (a10 == -1) {
            a10 = rVar.b(j10);
        }
        aVar.f7396e = a10;
    }

    public static /* synthetic */ o j(o oVar) {
        return oVar;
    }

    public static /* synthetic */ tc.k[] k() {
        return new tc.k[]{new k()};
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
            jArr[i10] = new long[aVarArr[i10].f7393b.f7444b];
            jArr2[i10] = aVarArr[i10].f7393b.f7448f[0];
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
            r rVar = aVarArr[i12].f7393b;
            j10 += rVar.f7446d[i14];
            int i15 = i14 + 1;
            iArr[i12] = i15;
            if (i15 < jArr3.length) {
                jArr2[i12] = rVar.f7448f[i15];
            } else {
                zArr[i12] = true;
                i11++;
            }
        }
        return jArr;
    }

    private void n() {
        this.f7376i = 0;
        this.f7379l = 0;
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
            a[] aVarArr = this.f7386s;
            if (i12 >= aVarArr.length) {
                break;
            }
            a aVar = aVarArr[i12];
            int i13 = aVar.f7396e;
            r rVar = aVar.f7393b;
            if (i13 != rVar.f7444b) {
                long j14 = rVar.f7445c[i13];
                long j15 = ((long[][]) w0.j(this.f7387t))[i12][i13];
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
        return Math.min(rVar.f7445c[p10], j11);
    }

    private void s(tc.l lVar) {
        this.f7371d.Q(8);
        lVar.n(this.f7371d.e(), 0, 8);
        b.f(this.f7371d);
        lVar.k(this.f7371d.f());
        lVar.e();
    }

    private void t(long j10) {
        while (!this.f7373f.isEmpty() && ((a.C0110a) this.f7373f.peek()).f7276b == j10) {
            a.C0110a c0110a = (a.C0110a) this.f7373f.pop();
            if (c0110a.f7275a == 1836019574) {
                w(c0110a);
                this.f7373f.clear();
                this.f7376i = 2;
            } else if (!this.f7373f.isEmpty()) {
                ((a.C0110a) this.f7373f.peek()).d(c0110a);
            }
        }
        if (this.f7376i != 2) {
            n();
        }
    }

    private void u() {
        Metadata metadata;
        if (this.f7390w == 2 && (this.f7368a & 2) != 0) {
            b0 c10 = this.f7385r.c(0, 4);
            if (this.f7391x == null) {
                metadata = null;
            } else {
                metadata = new Metadata(this.f7391x);
            }
            c10.b(new Format.b().Z(metadata).G());
            this.f7385r.s();
            this.f7385r.q(new z.b(-9223372036854775807L));
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

    private void w(a.C0110a c0110a) {
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
        if (this.f7390w == 1) {
            z10 = true;
        } else {
            z10 = false;
        }
        v vVar = new v();
        a.b g10 = c0110a.g(1969517665);
        if (g10 != null) {
            b.i C = b.C(g10);
            Metadata metadata6 = C.f7311a;
            Metadata metadata7 = C.f7312b;
            Metadata metadata8 = C.f7313c;
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
        a.C0110a f10 = c0110a.f(1835365473);
        if (f10 != null) {
            metadata4 = b.o(f10);
        } else {
            metadata4 = null;
        }
        Metadata metadata9 = b.q(((a.b) ne.a.e(c0110a.g(1836476516))).f7279b).f7294a;
        if ((this.f7368a & 1) != 0) {
            z11 = true;
        } else {
            z11 = false;
        }
        Metadata metadata10 = metadata4;
        List B = b.B(c0110a, vVar, -9223372036854775807L, null, z11, z10, new ii.f() { // from class: bd.i
            @Override // ii.f
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
            if (rVar.f7444b == 0) {
                list = B;
                i10 = size;
                i12 = i14;
                z12 = true;
            } else {
                o oVar = rVar.f7443a;
                int i15 = i14;
                ArrayList arrayList2 = arrayList;
                long j11 = oVar.f7413e;
                if (j11 == -9223372036854775807L) {
                    j11 = rVar.f7450h;
                }
                long max = Math.max(j10, j11);
                list = B;
                i10 = size;
                a aVar = new a(oVar, rVar, this.f7385r.c(i13, oVar.f7410b));
                if ("audio/true-hd".equals(oVar.f7414f.f12706w)) {
                    i11 = rVar.f7447e * 16;
                } else {
                    i11 = rVar.f7447e + 30;
                }
                Format.b b10 = oVar.f7414f.b();
                b10.Y(i11);
                if (oVar.f7410b == 2 && j11 > 0) {
                    int i16 = rVar.f7444b;
                    z12 = true;
                    if (i16 > 1) {
                        b10.R(i16 / (((float) j11) / 1000000.0f));
                    }
                } else {
                    z12 = true;
                }
                h.k(oVar.f7410b, vVar, b10);
                int i17 = oVar.f7410b;
                if (this.f7375h.isEmpty()) {
                    metadata5 = null;
                } else {
                    metadata5 = new Metadata(this.f7375h);
                }
                h.l(i17, metadata2, metadata10, b10, metadata3, metadata5, metadata, metadata9);
                aVar.f7394c.b(b10.G());
                if (oVar.f7410b == 2) {
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
        this.f7388u = i14;
        this.f7389v = j10;
        a[] aVarArr = (a[]) arrayList.toArray(new a[0]);
        this.f7386s = aVarArr;
        this.f7387t = m(aVarArr);
        this.f7385r.s();
        this.f7385r.q(this);
    }

    private void x(long j10) {
        if (this.f7377j == 1836086884) {
            int i10 = this.f7379l;
            this.f7391x = new md.b(0L, j10, -9223372036854775807L, j10 + i10, this.f7378k - i10);
        }
    }

    private boolean y(tc.l lVar) {
        a.C0110a c0110a;
        boolean z10;
        boolean z11;
        if (this.f7379l == 0) {
            if (!lVar.f(this.f7372e.e(), 0, 8, true)) {
                u();
                return false;
            }
            this.f7379l = 8;
            this.f7372e.U(0);
            this.f7378k = this.f7372e.J();
            this.f7377j = this.f7372e.q();
        }
        long j10 = this.f7378k;
        if (j10 == 1) {
            lVar.readFully(this.f7372e.e(), 8, 8);
            this.f7379l += 8;
            this.f7378k = this.f7372e.M();
        } else if (j10 == 0) {
            long length = lVar.getLength();
            if (length == -1 && (c0110a = (a.C0110a) this.f7373f.peek()) != null) {
                length = c0110a.f7276b;
            }
            if (length != -1) {
                this.f7378k = (length - lVar.getPosition()) + this.f7379l;
            }
        }
        if (this.f7378k >= this.f7379l) {
            if (C(this.f7377j)) {
                long position = lVar.getPosition();
                long j11 = this.f7378k;
                int i10 = this.f7379l;
                long j12 = (position + j11) - i10;
                if (j11 != i10 && this.f7377j == 1835365473) {
                    s(lVar);
                }
                this.f7373f.push(new a.C0110a(this.f7377j, j12));
                if (this.f7378k == this.f7379l) {
                    t(j12);
                } else {
                    n();
                }
            } else if (D(this.f7377j)) {
                if (this.f7379l == 8) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                ne.a.g(z10);
                if (this.f7378k <= 2147483647L) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                ne.a.g(z11);
                h0 h0Var = new h0((int) this.f7378k);
                System.arraycopy(this.f7372e.e(), 0, h0Var.e(), 0, 8);
                this.f7380m = h0Var;
                this.f7376i = 1;
            } else {
                x(lVar.getPosition() - this.f7379l);
                this.f7380m = null;
                this.f7376i = 1;
            }
            return true;
        }
        throw l0.d("Atom size less than header length (unsupported).");
    }

    private boolean z(tc.l lVar, y yVar) {
        boolean z10;
        long j10 = this.f7378k - this.f7379l;
        long position = lVar.getPosition() + j10;
        h0 h0Var = this.f7380m;
        if (h0Var != null) {
            lVar.readFully(h0Var.e(), this.f7379l, (int) j10);
            if (this.f7377j == 1718909296) {
                this.f7390w = v(h0Var);
            } else if (!this.f7373f.isEmpty()) {
                ((a.C0110a) this.f7373f.peek()).e(new a.b(this.f7377j, h0Var));
            }
        } else if (j10 < 262144) {
            lVar.k((int) j10);
        } else {
            yVar.f49518a = lVar.getPosition() + j10;
            z10 = true;
            t(position);
            if (!z10 && this.f7376i != 2) {
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

    @Override // tc.k
    public void a(long j10, long j11) {
        a[] aVarArr;
        this.f7373f.clear();
        this.f7379l = 0;
        this.f7381n = -1;
        this.f7382o = 0;
        this.f7383p = 0;
        this.f7384q = 0;
        if (j10 == 0) {
            if (this.f7376i != 3) {
                n();
                return;
            }
            this.f7374g.g();
            this.f7375h.clear();
            return;
        }
        for (a aVar : this.f7386s) {
            E(aVar, j11);
            c0 c0Var = aVar.f7395d;
            if (c0Var != null) {
                c0Var.b();
            }
        }
    }

    @Override // tc.k
    public void c(tc.m mVar) {
        this.f7385r = mVar;
    }

    @Override // tc.k
    public int d(tc.l lVar, y yVar) {
        while (true) {
            int i10 = this.f7376i;
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

    @Override // tc.z
    public z.a e(long j10) {
        return o(j10, -1);
    }

    @Override // tc.k
    public boolean f(tc.l lVar) {
        boolean z10;
        if ((this.f7368a & 2) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        return n.d(lVar, z10);
    }

    @Override // tc.z
    public boolean h() {
        return true;
    }

    @Override // tc.z
    public long i() {
        return this.f7389v;
    }

    /* JADX WARN: Removed duplicated region for block: B:27:0x0062  */
    /* JADX WARN: Removed duplicated region for block: B:39:0x0089  */
    /* JADX WARN: Removed duplicated region for block: B:41:0x008f  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public tc.z.a o(long r17, int r19) {
        /*
            r16 = this;
            r0 = r16
            r1 = r17
            r3 = r19
            bd.k$a[] r4 = r0.f7386s
            int r5 = r4.length
            if (r5 != 0) goto L13
            tc.z$a r1 = new tc.z$a
            tc.a0 r2 = tc.a0.f49414c
            r1.<init>(r2)
            return r1
        L13:
            r5 = -1
            if (r3 == r5) goto L18
            r6 = r3
            goto L1a
        L18:
            int r6 = r0.f7388u
        L1a:
            r7 = -9223372036854775807(0x8000000000000001, double:-4.9E-324)
            r9 = -1
            if (r6 == r5) goto L58
            r4 = r4[r6]
            bd.r r4 = r4.f7393b
            int r6 = p(r4, r1)
            if (r6 != r5) goto L35
            tc.z$a r1 = new tc.z$a
            tc.a0 r2 = tc.a0.f49414c
            r1.<init>(r2)
            return r1
        L35:
            long[] r11 = r4.f7448f
            r12 = r11[r6]
            long[] r11 = r4.f7445c
            r14 = r11[r6]
            int r11 = (r12 > r1 ? 1 : (r12 == r1 ? 0 : -1))
            if (r11 >= 0) goto L5e
            int r11 = r4.f7444b
            int r11 = r11 + (-1)
            if (r6 >= r11) goto L5e
            int r1 = r4.b(r1)
            if (r1 == r5) goto L5e
            if (r1 == r6) goto L5e
            long[] r2 = r4.f7448f
            r9 = r2[r1]
            long[] r2 = r4.f7445c
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
            bd.k$a[] r4 = r0.f7386s
            int r5 = r4.length
            if (r3 >= r5) goto L80
            int r5 = r0.f7388u
            if (r3 == r5) goto L7d
            r4 = r4[r3]
            bd.r r4 = r4.f7393b
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
            tc.a0 r3 = new tc.a0
            r3.<init>(r12, r14)
            int r4 = (r9 > r7 ? 1 : (r9 == r7 ? 0 : -1))
            if (r4 != 0) goto L8f
            tc.z$a r1 = new tc.z$a
            r1.<init>(r3)
            return r1
        L8f:
            tc.a0 r4 = new tc.a0
            r4.<init>(r9, r1)
            tc.z$a r1 = new tc.z$a
            r1.<init>(r3, r4)
            return r1
        */
        throw new UnsupportedOperationException("Method not decompiled: bd.k.o(long, int):tc.z$a");
    }

    public k(int i10) {
        this.f7368a = i10;
        this.f7376i = (i10 & 4) != 0 ? 3 : 0;
        this.f7374g = new m();
        this.f7375h = new ArrayList();
        this.f7372e = new h0(16);
        this.f7373f = new ArrayDeque();
        this.f7369b = new h0(d0.f40148a);
        this.f7370c = new h0(4);
        this.f7371d = new h0();
        this.f7381n = -1;
        this.f7385r = tc.m.f49489l;
        this.f7386s = new a[0];
    }

    @Override // tc.k
    public void release() {
    }
}
