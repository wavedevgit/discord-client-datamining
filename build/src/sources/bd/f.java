package bd;

import androidx.recyclerview.widget.RecyclerView;
import bd.g;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.metadata.Metadata;
import java.io.EOFException;
import md.h;
import oc.u;
import oe.h0;
import oe.w0;
import uc.b0;
import uc.j;
import uc.k;
import uc.l;
import uc.m;
import uc.p;
import uc.v;
import uc.w;
import uc.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f implements k {

    /* renamed from: u  reason: collision with root package name */
    public static final p f6470u = new p() { // from class: bd.d
        @Override // uc.p
        public final k[] b() {
            return f.b();
        }
    };

    /* renamed from: v  reason: collision with root package name */
    private static final h.a f6471v = new h.a() { // from class: bd.e
        @Override // md.h.a
        public final boolean a(int i10, int i11, int i12, int i13, int i14) {
            return f.e(i10, i11, i12, i13, i14);
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final int f6472a;

    /* renamed from: b  reason: collision with root package name */
    private final long f6473b;

    /* renamed from: c  reason: collision with root package name */
    private final h0 f6474c;

    /* renamed from: d  reason: collision with root package name */
    private final u.a f6475d;

    /* renamed from: e  reason: collision with root package name */
    private final v f6476e;

    /* renamed from: f  reason: collision with root package name */
    private final w f6477f;

    /* renamed from: g  reason: collision with root package name */
    private final b0 f6478g;

    /* renamed from: h  reason: collision with root package name */
    private m f6479h;

    /* renamed from: i  reason: collision with root package name */
    private b0 f6480i;

    /* renamed from: j  reason: collision with root package name */
    private b0 f6481j;

    /* renamed from: k  reason: collision with root package name */
    private int f6482k;

    /* renamed from: l  reason: collision with root package name */
    private Metadata f6483l;

    /* renamed from: m  reason: collision with root package name */
    private long f6484m;

    /* renamed from: n  reason: collision with root package name */
    private long f6485n;

    /* renamed from: o  reason: collision with root package name */
    private long f6486o;

    /* renamed from: p  reason: collision with root package name */
    private int f6487p;

    /* renamed from: q  reason: collision with root package name */
    private g f6488q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f6489r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f6490s;

    /* renamed from: t  reason: collision with root package name */
    private long f6491t;

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

    private void f() {
        oe.a.i(this.f6480i);
        w0.j(this.f6479h);
    }

    private g g(l lVar) {
        long l10;
        long j10;
        g p10 = p(lVar);
        c o10 = o(this.f6483l, lVar.getPosition());
        if (this.f6489r) {
            return new g.a();
        }
        if ((this.f6472a & 4) != 0) {
            if (o10 != null) {
                l10 = o10.i();
                j10 = o10.f();
            } else if (p10 != null) {
                l10 = p10.i();
                j10 = p10.f();
            } else {
                l10 = l(this.f6483l);
                j10 = -1;
            }
            p10 = new b(l10, lVar.getPosition(), j10);
        } else if (o10 != null) {
            p10 = o10;
        } else if (p10 == null) {
            p10 = null;
        }
        boolean z10 = true;
        if (p10 != null && (p10.g() || (this.f6472a & 1) == 0)) {
            return p10;
        }
        if ((this.f6472a & 2) == 0) {
            z10 = false;
        }
        return k(lVar, z10);
    }

    private long i(long j10) {
        return this.f6484m + ((j10 * 1000000) / this.f6475d.f40508d);
    }

    private g k(l lVar, boolean z10) {
        lVar.n(this.f6474c.e(), 0, 4);
        this.f6474c.U(0);
        this.f6475d.a(this.f6474c.q());
        return new a(lVar.getLength(), lVar.getPosition(), this.f6475d, z10);
    }

    private static long l(Metadata metadata) {
        if (metadata != null) {
            int e10 = metadata.e();
            for (int i10 = 0; i10 < e10; i10++) {
                Metadata.b d10 = metadata.d(i10);
                if (d10 instanceof md.m) {
                    md.m mVar = (md.m) d10;
                    if (mVar.f36939d.equals("TLEN")) {
                        return w0.K0(Long.parseLong((String) mVar.f36952o.get(0)));
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
                if (d10 instanceof md.k) {
                    return c.a(j10, (md.k) d10, l(metadata));
                }
            }
            return null;
        }
        return null;
    }

    private g p(l lVar) {
        h0 h0Var = new h0(this.f6475d.f40507c);
        lVar.n(h0Var.e(), 0, this.f6475d.f40507c);
        u.a aVar = this.f6475d;
        int i10 = 21;
        if ((aVar.f40505a & 1) != 0) {
            if (aVar.f40509e != 1) {
                i10 = 36;
            }
        } else if (aVar.f40509e == 1) {
            i10 = 13;
        }
        int i11 = i10;
        int m10 = m(h0Var, i11);
        if (m10 != 1483304551 && m10 != 1231971951) {
            if (m10 == 1447187017) {
                h a10 = h.a(lVar.getLength(), lVar.getPosition(), this.f6475d, h0Var);
                lVar.k(this.f6475d.f40507c);
                return a10;
            }
            lVar.e();
            return null;
        }
        i a11 = i.a(lVar.getLength(), lVar.getPosition(), this.f6475d, h0Var);
        if (a11 != null && !this.f6476e.a()) {
            lVar.e();
            lVar.h(i11 + 141);
            lVar.n(this.f6474c.e(), 0, 3);
            this.f6474c.U(0);
            this.f6476e.d(this.f6474c.K());
        }
        lVar.k(this.f6475d.f40507c);
        if (a11 != null && !a11.g() && m10 == 1231971951) {
            return k(lVar, false);
        }
        return a11;
    }

    private boolean q(l lVar) {
        g gVar = this.f6488q;
        if (gVar != null) {
            long f10 = gVar.f();
            if (f10 != -1 && lVar.g() > f10 - 4) {
                return true;
            }
        }
        try {
            return !lVar.c(this.f6474c.e(), 0, 4, true);
        } catch (EOFException unused) {
            return true;
        }
    }

    private int r(l lVar) {
        Metadata metadata;
        if (this.f6482k == 0) {
            try {
                t(lVar, false);
            } catch (EOFException unused) {
                return -1;
            }
        }
        if (this.f6488q == null) {
            g g10 = g(lVar);
            this.f6488q = g10;
            this.f6479h.j(g10);
            b0 b0Var = this.f6481j;
            Format.b Q = new Format.b().g0(this.f6475d.f40506b).Y(RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT).J(this.f6475d.f40509e).h0(this.f6475d.f40508d).P(this.f6476e.f51528a).Q(this.f6476e.f51529b);
            if ((this.f6472a & 8) != 0) {
                metadata = null;
            } else {
                metadata = this.f6483l;
            }
            b0Var.c(Q.Z(metadata).G());
            this.f6486o = lVar.getPosition();
        } else if (this.f6486o != 0) {
            long position = lVar.getPosition();
            long j10 = this.f6486o;
            if (position < j10) {
                lVar.k((int) (j10 - position));
            }
        }
        return s(lVar);
    }

    private int s(l lVar) {
        u.a aVar;
        if (this.f6487p == 0) {
            lVar.e();
            if (q(lVar)) {
                return -1;
            }
            this.f6474c.U(0);
            int q10 = this.f6474c.q();
            if (n(q10, this.f6482k) && u.j(q10) != -1) {
                this.f6475d.a(q10);
                if (this.f6484m == -9223372036854775807L) {
                    this.f6484m = this.f6488q.b(lVar.getPosition());
                    if (this.f6473b != -9223372036854775807L) {
                        this.f6484m += this.f6473b - this.f6488q.b(0L);
                    }
                }
                this.f6487p = this.f6475d.f40507c;
                g gVar = this.f6488q;
                if (gVar instanceof b) {
                    b bVar = (b) gVar;
                    bVar.c(i(this.f6485n + aVar.f40511g), lVar.getPosition() + this.f6475d.f40507c);
                    if (this.f6490s && bVar.a(this.f6491t)) {
                        this.f6490s = false;
                        this.f6481j = this.f6480i;
                    }
                }
            } else {
                lVar.k(1);
                this.f6482k = 0;
                return 0;
            }
        }
        int f10 = this.f6481j.f(lVar, this.f6487p, true);
        if (f10 == -1) {
            return -1;
        }
        int i10 = this.f6487p - f10;
        this.f6487p = i10;
        if (i10 > 0) {
            return 0;
        }
        this.f6481j.a(i(this.f6485n), 1, this.f6475d.f40507c, 0, null);
        this.f6485n += this.f6475d.f40511g;
        this.f6487p = 0;
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
        r11.f6482k = r4;
     */
    /* JADX WARN: Code restructure failed: missing block: B:51:0x00a6, code lost:
        return true;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private boolean t(uc.l r12, boolean r13) {
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
            int r1 = r11.f6472a
            r1 = r1 & 8
            if (r1 != 0) goto L1f
            r1 = r2
            goto L21
        L1f:
            md.h$a r1 = bd.f.f6471v
        L21:
            uc.w r4 = r11.f6477f
            com.google.android.exoplayer2.metadata.Metadata r1 = r4.a(r12, r1)
            r11.f6483l = r1
            if (r1 == 0) goto L30
            uc.v r4 = r11.f6476e
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
            oe.h0 r7 = r11.f6474c
            r7.U(r3)
            oe.h0 r7 = r11.f6474c
            int r7 = r7.q()
            if (r4 == 0) goto L65
            long r9 = (long) r4
            boolean r9 = n(r7, r9)
            if (r9 == 0) goto L6c
        L65:
            int r9 = oc.u.j(r7)
            r10 = -1
            if (r9 != r10) goto L8c
        L6c:
            int r4 = r6 + 1
            if (r6 != r0) goto L7a
            if (r13 == 0) goto L73
            return r3
        L73:
            java.lang.String r12 = "Searched too many bytes."
            mc.l0 r12 = mc.l0.a(r12, r2)
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
            oc.u$a r4 = r11.f6475d
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
            r11.f6482k = r4
            return r8
        La7:
            int r9 = r9 + (-4)
            r12.h(r9)
            goto L41
        */
        throw new UnsupportedOperationException("Method not decompiled: bd.f.t(uc.l, boolean):boolean");
    }

    @Override // uc.k
    public void a(long j10, long j11) {
        this.f6482k = 0;
        this.f6484m = -9223372036854775807L;
        this.f6485n = 0L;
        this.f6487p = 0;
        this.f6491t = j11;
        g gVar = this.f6488q;
        if ((gVar instanceof b) && !((b) gVar).a(j11)) {
            this.f6490s = true;
            this.f6481j = this.f6478g;
        }
    }

    @Override // uc.k
    public void c(m mVar) {
        this.f6479h = mVar;
        b0 c10 = mVar.c(0, 1);
        this.f6480i = c10;
        this.f6481j = c10;
        this.f6479h.q();
    }

    @Override // uc.k
    public boolean d(l lVar) {
        return t(lVar, true);
    }

    @Override // uc.k
    public int h(l lVar, y yVar) {
        f();
        int r10 = r(lVar);
        if (r10 == -1 && (this.f6488q instanceof b)) {
            long i10 = i(this.f6485n);
            if (this.f6488q.i() != i10) {
                ((b) this.f6488q).d(i10);
                this.f6479h.j(this.f6488q);
            }
        }
        return r10;
    }

    public void j() {
        this.f6489r = true;
    }

    public f(int i10) {
        this(i10, -9223372036854775807L);
    }

    public f(int i10, long j10) {
        this.f6472a = (i10 & 2) != 0 ? i10 | 1 : i10;
        this.f6473b = j10;
        this.f6474c = new h0(10);
        this.f6475d = new u.a();
        this.f6476e = new v();
        this.f6484m = -9223372036854775807L;
        this.f6477f = new w();
        j jVar = new j();
        this.f6478g = jVar;
        this.f6481j = jVar;
    }

    @Override // uc.k
    public void release() {
    }
}
