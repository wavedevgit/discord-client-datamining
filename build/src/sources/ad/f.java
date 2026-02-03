package ad;

import ad.g;
import androidx.recyclerview.widget.RecyclerView;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.metadata.Metadata;
import java.io.EOFException;
import ld.h;
import nc.u;
import ne.h0;
import ne.w0;
import tc.b0;
import tc.j;
import tc.k;
import tc.l;
import tc.m;
import tc.p;
import tc.v;
import tc.w;
import tc.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f implements k {

    /* renamed from: u  reason: collision with root package name */
    public static final p f482u = new p() { // from class: ad.d
        @Override // tc.p
        public final k[] b() {
            return f.b();
        }
    };

    /* renamed from: v  reason: collision with root package name */
    private static final h.a f483v = new h.a() { // from class: ad.e
        @Override // ld.h.a
        public final boolean a(int i10, int i11, int i12, int i13, int i14) {
            return f.e(i10, i11, i12, i13, i14);
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final int f484a;

    /* renamed from: b  reason: collision with root package name */
    private final long f485b;

    /* renamed from: c  reason: collision with root package name */
    private final h0 f486c;

    /* renamed from: d  reason: collision with root package name */
    private final u.a f487d;

    /* renamed from: e  reason: collision with root package name */
    private final v f488e;

    /* renamed from: f  reason: collision with root package name */
    private final w f489f;

    /* renamed from: g  reason: collision with root package name */
    private final b0 f490g;

    /* renamed from: h  reason: collision with root package name */
    private m f491h;

    /* renamed from: i  reason: collision with root package name */
    private b0 f492i;

    /* renamed from: j  reason: collision with root package name */
    private b0 f493j;

    /* renamed from: k  reason: collision with root package name */
    private int f494k;

    /* renamed from: l  reason: collision with root package name */
    private Metadata f495l;

    /* renamed from: m  reason: collision with root package name */
    private long f496m;

    /* renamed from: n  reason: collision with root package name */
    private long f497n;

    /* renamed from: o  reason: collision with root package name */
    private long f498o;

    /* renamed from: p  reason: collision with root package name */
    private int f499p;

    /* renamed from: q  reason: collision with root package name */
    private g f500q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f501r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f502s;

    /* renamed from: t  reason: collision with root package name */
    private long f503t;

    public f() {
        this(0);
    }

    public static /* synthetic */ k[] b() {
        return new k[]{new f()};
    }

    public static /* synthetic */ boolean e(int i10, int i11, int i12, int i13, int i14) {
        if (i11 != 67 || i12 != 79 || i13 != 77 || (i14 != 77 && i10 != 2)) {
            if (i11 == 77 && i12 == 76 && i13 == 76) {
                if (i14 == 84 || i10 == 2) {
                    return true;
                }
                return false;
            }
            return false;
        }
        return true;
    }

    private void g() {
        ne.a.i(this.f492i);
        w0.j(this.f491h);
    }

    private g h(l lVar) {
        long l10;
        long j10;
        g p10 = p(lVar);
        c o10 = o(this.f495l, lVar.getPosition());
        if (this.f501r) {
            return new g.a();
        }
        if ((this.f484a & 4) != 0) {
            if (o10 != null) {
                l10 = o10.i();
                j10 = o10.g();
            } else if (p10 != null) {
                l10 = p10.i();
                j10 = p10.g();
            } else {
                l10 = l(this.f495l);
                j10 = -1;
            }
            p10 = new b(l10, lVar.getPosition(), j10);
        } else if (o10 != null) {
            p10 = o10;
        } else if (p10 == null) {
            p10 = null;
        }
        boolean z10 = true;
        if (p10 != null && (p10.h() || (this.f484a & 1) == 0)) {
            return p10;
        }
        if ((this.f484a & 2) == 0) {
            z10 = false;
        }
        return k(lVar, z10);
    }

    private long i(long j10) {
        return this.f496m + ((j10 * 1000000) / this.f487d.f39994d);
    }

    private g k(l lVar, boolean z10) {
        lVar.n(this.f486c.e(), 0, 4);
        this.f486c.U(0);
        this.f487d.a(this.f486c.q());
        return new a(lVar.getLength(), lVar.getPosition(), this.f487d, z10);
    }

    private static long l(Metadata metadata) {
        if (metadata != null) {
            int e10 = metadata.e();
            for (int i10 = 0; i10 < e10; i10++) {
                Metadata.b d10 = metadata.d(i10);
                if (d10 instanceof ld.m) {
                    ld.m mVar = (ld.m) d10;
                    if (mVar.f36741d.equals("TLEN")) {
                        return w0.K0(Long.parseLong((String) mVar.f36754o.get(0)));
                    }
                }
            }
            return -9223372036854775807L;
        }
        return -9223372036854775807L;
    }

    private static int m(h0 h0Var, int i10) {
        if (h0Var.g() >= i10 + 4) {
            h0Var.U(i10);
            int q10 = h0Var.q();
            if (q10 == 1483304551 || q10 == 1231971951) {
                return q10;
            }
        }
        if (h0Var.g() >= 40) {
            h0Var.U(36);
            if (h0Var.q() == 1447187017) {
                return 1447187017;
            }
            return 0;
        }
        return 0;
    }

    private static boolean n(int i10, long j10) {
        if ((i10 & (-128000)) == (j10 & (-128000))) {
            return true;
        }
        return false;
    }

    private static c o(Metadata metadata, long j10) {
        if (metadata != null) {
            int e10 = metadata.e();
            for (int i10 = 0; i10 < e10; i10++) {
                Metadata.b d10 = metadata.d(i10);
                if (d10 instanceof ld.k) {
                    return c.a(j10, (ld.k) d10, l(metadata));
                }
            }
            return null;
        }
        return null;
    }

    private g p(l lVar) {
        h0 h0Var = new h0(this.f487d.f39993c);
        lVar.n(h0Var.e(), 0, this.f487d.f39993c);
        u.a aVar = this.f487d;
        int i10 = 21;
        if ((aVar.f39991a & 1) != 0) {
            if (aVar.f39995e != 1) {
                i10 = 36;
            }
        } else if (aVar.f39995e == 1) {
            i10 = 13;
        }
        int i11 = i10;
        int m10 = m(h0Var, i11);
        if (m10 != 1483304551 && m10 != 1231971951) {
            if (m10 == 1447187017) {
                h a10 = h.a(lVar.getLength(), lVar.getPosition(), this.f487d, h0Var);
                lVar.k(this.f487d.f39993c);
                return a10;
            }
            lVar.e();
            return null;
        }
        i a11 = i.a(lVar.getLength(), lVar.getPosition(), this.f487d, h0Var);
        if (a11 != null && !this.f488e.a()) {
            lVar.e();
            lVar.h(i11 + 141);
            lVar.n(this.f486c.e(), 0, 3);
            this.f486c.U(0);
            this.f488e.d(this.f486c.K());
        }
        lVar.k(this.f487d.f39993c);
        if (a11 != null && !a11.h() && m10 == 1231971951) {
            return k(lVar, false);
        }
        return a11;
    }

    private boolean q(l lVar) {
        g gVar = this.f500q;
        if (gVar != null) {
            long g10 = gVar.g();
            if (g10 != -1 && lVar.g() > g10 - 4) {
                return true;
            }
        }
        try {
            return !lVar.c(this.f486c.e(), 0, 4, true);
        } catch (EOFException unused) {
            return true;
        }
    }

    private int r(l lVar) {
        Metadata metadata;
        if (this.f494k == 0) {
            try {
                t(lVar, false);
            } catch (EOFException unused) {
                return -1;
            }
        }
        if (this.f500q == null) {
            g h10 = h(lVar);
            this.f500q = h10;
            this.f491h.q(h10);
            b0 b0Var = this.f493j;
            Format.b Q = new Format.b().g0(this.f487d.f39992b).Y(RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT).J(this.f487d.f39995e).h0(this.f487d.f39994d).P(this.f488e.f49994a).Q(this.f488e.f49995b);
            if ((this.f484a & 8) != 0) {
                metadata = null;
            } else {
                metadata = this.f495l;
            }
            b0Var.b(Q.Z(metadata).G());
            this.f498o = lVar.getPosition();
        } else if (this.f498o != 0) {
            long position = lVar.getPosition();
            long j10 = this.f498o;
            if (position < j10) {
                lVar.k((int) (j10 - position));
            }
        }
        return s(lVar);
    }

    private int s(l lVar) {
        u.a aVar;
        if (this.f499p == 0) {
            lVar.e();
            if (q(lVar)) {
                return -1;
            }
            this.f486c.U(0);
            int q10 = this.f486c.q();
            if (n(q10, this.f494k) && u.j(q10) != -1) {
                this.f487d.a(q10);
                if (this.f496m == -9223372036854775807L) {
                    this.f496m = this.f500q.b(lVar.getPosition());
                    if (this.f485b != -9223372036854775807L) {
                        this.f496m += this.f485b - this.f500q.b(0L);
                    }
                }
                this.f499p = this.f487d.f39993c;
                g gVar = this.f500q;
                if (gVar instanceof b) {
                    b bVar = (b) gVar;
                    bVar.c(i(this.f497n + aVar.f39997g), lVar.getPosition() + this.f487d.f39993c);
                    if (this.f502s && bVar.a(this.f503t)) {
                        this.f502s = false;
                        this.f493j = this.f492i;
                    }
                }
            } else {
                lVar.k(1);
                this.f494k = 0;
                return 0;
            }
        }
        int a10 = this.f493j.a(lVar, this.f499p, true);
        if (a10 == -1) {
            return -1;
        }
        int i10 = this.f499p - a10;
        this.f499p = i10;
        if (i10 > 0) {
            return 0;
        }
        this.f493j.d(i(this.f497n), 1, this.f487d.f39993c, 0, null);
        this.f497n += this.f487d.f39997g;
        this.f499p = 0;
        return 0;
    }

    /* JADX WARN: Code restructure failed: missing block: B:47:0x009a, code lost:
        if (r13 == false) goto L52;
     */
    /* JADX WARN: Code restructure failed: missing block: B:48:0x009c, code lost:
        r12.k(r1 + r6);
     */
    /* JADX WARN: Code restructure failed: missing block: B:49:0x00a1, code lost:
        r12.e();
     */
    /* JADX WARN: Code restructure failed: missing block: B:50:0x00a4, code lost:
        r11.f494k = r4;
     */
    /* JADX WARN: Code restructure failed: missing block: B:51:0x00a6, code lost:
        return true;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private boolean t(tc.l r12, boolean r13) {
        /*
            r11 = this;
            if (r13 == 0) goto L6
            r0 = 32768(0x8000, float:4.5918E-41)
            goto L8
        L6:
            r0 = 131072(0x20000, float:1.83671E-40)
        L8:
            r12.e()
            long r1 = r12.getPosition()
            r3 = 0
            int r1 = (r1 > r3 ? 1 : (r1 == r3 ? 0 : -1))
            r2 = 0
            r3 = 0
            if (r1 != 0) goto L3e
            int r1 = r11.f484a
            r1 = r1 & 8
            if (r1 != 0) goto L1f
            r1 = r2
            goto L21
        L1f:
            ld.h$a r1 = ad.f.f483v
        L21:
            tc.w r4 = r11.f489f
            com.google.android.exoplayer2.metadata.Metadata r1 = r4.a(r12, r1)
            r11.f495l = r1
            if (r1 == 0) goto L30
            tc.v r4 = r11.f488e
            r4.c(r1)
        L30:
            long r4 = r12.g()
            int r1 = (int) r4
            if (r13 != 0) goto L3a
            r12.k(r1)
        L3a:
            r4 = r3
        L3b:
            r5 = r4
            r6 = r5
            goto L41
        L3e:
            r1 = r3
            r4 = r1
            goto L3b
        L41:
            boolean r7 = r11.q(r12)
            r8 = 1
            if (r7 == 0) goto L51
            if (r5 <= 0) goto L4b
            goto L9a
        L4b:
            java.io.EOFException r12 = new java.io.EOFException
            r12.<init>()
            throw r12
        L51:
            ne.h0 r7 = r11.f486c
            r7.U(r3)
            ne.h0 r7 = r11.f486c
            int r7 = r7.q()
            if (r4 == 0) goto L65
            long r9 = (long) r4
            boolean r9 = n(r7, r9)
            if (r9 == 0) goto L6c
        L65:
            int r9 = nc.u.j(r7)
            r10 = -1
            if (r9 != r10) goto L8c
        L6c:
            int r4 = r6 + 1
            if (r6 != r0) goto L7a
            if (r13 == 0) goto L73
            return r3
        L73:
            java.lang.String r12 = "Searched too many bytes."
            lc.l0 r12 = lc.l0.a(r12, r2)
            throw r12
        L7a:
            if (r13 == 0) goto L85
            r12.e()
            int r5 = r1 + r4
            r12.h(r5)
            goto L88
        L85:
            r12.k(r8)
        L88:
            r5 = r3
            r6 = r4
            r4 = r5
            goto L41
        L8c:
            int r5 = r5 + 1
            if (r5 != r8) goto L97
            nc.u$a r4 = r11.f487d
            r4.a(r7)
            r4 = r7
            goto La7
        L97:
            r7 = 4
            if (r5 != r7) goto La7
        L9a:
            if (r13 == 0) goto La1
            int r1 = r1 + r6
            r12.k(r1)
            goto La4
        La1:
            r12.e()
        La4:
            r11.f494k = r4
            return r8
        La7:
            int r9 = r9 + (-4)
            r12.h(r9)
            goto L41
        */
        throw new UnsupportedOperationException("Method not decompiled: ad.f.t(tc.l, boolean):boolean");
    }

    @Override // tc.k
    public void a(long j10, long j11) {
        this.f494k = 0;
        this.f496m = -9223372036854775807L;
        this.f497n = 0L;
        this.f499p = 0;
        this.f503t = j11;
        g gVar = this.f500q;
        if ((gVar instanceof b) && !((b) gVar).a(j11)) {
            this.f502s = true;
            this.f493j = this.f490g;
        }
    }

    @Override // tc.k
    public void c(m mVar) {
        this.f491h = mVar;
        b0 c10 = mVar.c(0, 1);
        this.f492i = c10;
        this.f493j = c10;
        this.f491h.s();
    }

    @Override // tc.k
    public int d(l lVar, y yVar) {
        g();
        int r10 = r(lVar);
        if (r10 == -1 && (this.f500q instanceof b)) {
            long i10 = i(this.f497n);
            if (this.f500q.i() != i10) {
                ((b) this.f500q).d(i10);
                this.f491h.q(this.f500q);
            }
        }
        return r10;
    }

    @Override // tc.k
    public boolean f(l lVar) {
        return t(lVar, true);
    }

    public void j() {
        this.f501r = true;
    }

    public f(int i10) {
        this(i10, -9223372036854775807L);
    }

    public f(int i10, long j10) {
        this.f484a = (i10 & 2) != 0 ? i10 | 1 : i10;
        this.f485b = j10;
        this.f486c = new h0(10);
        this.f487d = new u.a();
        this.f488e = new v();
        this.f496m = -9223372036854775807L;
        this.f489f = new w();
        j jVar = new j();
        this.f490g = jVar;
        this.f493j = jVar;
    }

    @Override // tc.k
    public void release() {
    }
}
