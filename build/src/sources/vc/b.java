package vc;

import com.google.android.exoplayer2.Format;
import java.util.ArrayList;
import ji.t0;
import lc.l0;
import ne.c0;
import ne.h0;
import ne.y;
import tc.b0;
import tc.i;
import tc.k;
import tc.l;
import tc.m;
import tc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements k {

    /* renamed from: c  reason: collision with root package name */
    private int f51009c;

    /* renamed from: e  reason: collision with root package name */
    private vc.c f51011e;

    /* renamed from: h  reason: collision with root package name */
    private long f51014h;

    /* renamed from: i  reason: collision with root package name */
    private e f51015i;

    /* renamed from: m  reason: collision with root package name */
    private int f51019m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f51020n;

    /* renamed from: a  reason: collision with root package name */
    private final h0 f51007a = new h0(12);

    /* renamed from: b  reason: collision with root package name */
    private final c f51008b = new c();

    /* renamed from: d  reason: collision with root package name */
    private m f51010d = new i();

    /* renamed from: g  reason: collision with root package name */
    private e[] f51013g = new e[0];

    /* renamed from: k  reason: collision with root package name */
    private long f51017k = -1;

    /* renamed from: l  reason: collision with root package name */
    private long f51018l = -1;

    /* renamed from: j  reason: collision with root package name */
    private int f51016j = -1;

    /* renamed from: f  reason: collision with root package name */
    private long f51012f = -9223372036854775807L;

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: vc.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class C0685b implements z {

        /* renamed from: a  reason: collision with root package name */
        private final long f51021a;

        public C0685b(long j10) {
            this.f51021a = j10;
        }

        @Override // tc.z
        public z.a e(long j10) {
            z.a i10 = b.this.f51013g[0].i(j10);
            for (int i11 = 1; i11 < b.this.f51013g.length; i11++) {
                z.a i12 = b.this.f51013g[i11].i(j10);
                if (i12.f49791a.f49688b < i10.f49791a.f49688b) {
                    i10 = i12;
                }
            }
            return i10;
        }

        @Override // tc.z
        public boolean h() {
            return true;
        }

        @Override // tc.z
        public long i() {
            return this.f51021a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class c {

        /* renamed from: a  reason: collision with root package name */
        public int f51023a;

        /* renamed from: b  reason: collision with root package name */
        public int f51024b;

        /* renamed from: c  reason: collision with root package name */
        public int f51025c;

        private c() {
        }

        public void a(h0 h0Var) {
            this.f51023a = h0Var.u();
            this.f51024b = h0Var.u();
            this.f51025c = 0;
        }

        public void b(h0 h0Var) {
            a(h0Var);
            if (this.f51023a == 1414744396) {
                this.f51025c = h0Var.u();
                return;
            }
            throw l0.a("LIST expected, found: " + this.f51023a, null);
        }
    }

    private static void e(l lVar) {
        if ((lVar.getPosition() & 1) == 1) {
            lVar.k(1);
        }
    }

    private e g(int i10) {
        e[] eVarArr;
        for (e eVar : this.f51013g) {
            if (eVar.j(i10)) {
                return eVar;
            }
        }
        return null;
    }

    private void h(h0 h0Var) {
        f c10 = f.c(1819436136, h0Var);
        if (c10.getType() == 1819436136) {
            vc.c cVar = (vc.c) c10.b(vc.c.class);
            if (cVar != null) {
                this.f51011e = cVar;
                this.f51012f = cVar.f51028c * cVar.f51026a;
                ArrayList arrayList = new ArrayList();
                t0 it = c10.f51048a.iterator();
                int i10 = 0;
                while (it.hasNext()) {
                    vc.a aVar = (vc.a) it.next();
                    if (aVar.getType() == 1819440243) {
                        int i11 = i10 + 1;
                        e k10 = k((f) aVar, i10);
                        if (k10 != null) {
                            arrayList.add(k10);
                        }
                        i10 = i11;
                    }
                }
                this.f51013g = (e[]) arrayList.toArray(new e[0]);
                this.f51010d.s();
                return;
            }
            throw l0.a("AviHeader not found", null);
        }
        throw l0.a("Unexpected header list type " + c10.getType(), null);
    }

    private void i(h0 h0Var) {
        long j10 = j(h0Var);
        while (h0Var.a() >= 16) {
            int u10 = h0Var.u();
            int u11 = h0Var.u();
            long u12 = h0Var.u() + j10;
            h0Var.u();
            e g10 = g(u10);
            if (g10 != null) {
                if ((u11 & 16) == 16) {
                    g10.b(u12);
                }
                g10.k();
            }
        }
        for (e eVar : this.f51013g) {
            eVar.c();
        }
        this.f51020n = true;
        this.f51010d.q(new C0685b(this.f51012f));
    }

    private long j(h0 h0Var) {
        long j10 = 0;
        if (h0Var.a() < 16) {
            return 0L;
        }
        int f10 = h0Var.f();
        h0Var.V(8);
        long j11 = this.f51017k;
        if (h0Var.u() <= j11) {
            j10 = j11 + 8;
        }
        h0Var.U(f10);
        return j10;
    }

    private e k(f fVar, int i10) {
        d dVar = (d) fVar.b(d.class);
        g gVar = (g) fVar.b(g.class);
        if (dVar == null) {
            y.i("AviExtractor", "Missing Stream Header");
            return null;
        } else if (gVar == null) {
            y.i("AviExtractor", "Missing Stream Format");
            return null;
        } else {
            long a10 = dVar.a();
            Format format = gVar.f51050a;
            Format.b b10 = format.b();
            b10.T(i10);
            int i11 = dVar.f51035f;
            if (i11 != 0) {
                b10.Y(i11);
            }
            h hVar = (h) fVar.b(h.class);
            if (hVar != null) {
                b10.W(hVar.f51051a);
            }
            int k10 = c0.k(format.f12335w);
            if (k10 != 1 && k10 != 2) {
                return null;
            }
            b0 c10 = this.f51010d.c(i10, k10);
            c10.b(b10.G());
            e eVar = new e(i10, k10, a10, dVar.f51034e, c10);
            this.f51012f = a10;
            return eVar;
        }
    }

    private int l(l lVar) {
        if (lVar.getPosition() >= this.f51018l) {
            return -1;
        }
        e eVar = this.f51015i;
        if (eVar != null) {
            if (eVar.m(lVar)) {
                this.f51015i = null;
            }
        } else {
            e(lVar);
            int i10 = 12;
            lVar.n(this.f51007a.e(), 0, 12);
            this.f51007a.U(0);
            int u10 = this.f51007a.u();
            if (u10 == 1414744396) {
                this.f51007a.U(8);
                if (this.f51007a.u() != 1769369453) {
                    i10 = 8;
                }
                lVar.k(i10);
                lVar.e();
                return 0;
            }
            int u11 = this.f51007a.u();
            if (u10 == 1263424842) {
                this.f51014h = lVar.getPosition() + u11 + 8;
                return 0;
            }
            lVar.k(8);
            lVar.e();
            e g10 = g(u10);
            if (g10 == null) {
                this.f51014h = lVar.getPosition() + u11;
                return 0;
            }
            g10.n(u11);
            this.f51015i = g10;
        }
        return 0;
    }

    private boolean m(l lVar, tc.y yVar) {
        boolean z10;
        if (this.f51014h != -1) {
            long position = lVar.getPosition();
            long j10 = this.f51014h;
            if (j10 >= position && j10 <= 262144 + position) {
                lVar.k((int) (j10 - position));
            } else {
                yVar.f49790a = j10;
                z10 = true;
                this.f51014h = -1L;
                return z10;
            }
        }
        z10 = false;
        this.f51014h = -1L;
        return z10;
    }

    @Override // tc.k
    public void a(long j10, long j11) {
        this.f51014h = -1L;
        this.f51015i = null;
        for (e eVar : this.f51013g) {
            eVar.o(j10);
        }
        if (j10 == 0) {
            if (this.f51013g.length == 0) {
                this.f51009c = 0;
                return;
            } else {
                this.f51009c = 3;
                return;
            }
        }
        this.f51009c = 6;
    }

    @Override // tc.k
    public void c(m mVar) {
        this.f51009c = 0;
        this.f51010d = mVar;
        this.f51014h = -1L;
    }

    @Override // tc.k
    public int d(l lVar, tc.y yVar) {
        if (m(lVar, yVar)) {
            return 1;
        }
        switch (this.f51009c) {
            case 0:
                if (f(lVar)) {
                    lVar.k(12);
                    this.f51009c = 1;
                    return 0;
                }
                throw l0.a("AVI Header List not found", null);
            case 1:
                lVar.readFully(this.f51007a.e(), 0, 12);
                this.f51007a.U(0);
                this.f51008b.b(this.f51007a);
                c cVar = this.f51008b;
                if (cVar.f51025c == 1819436136) {
                    this.f51016j = cVar.f51024b;
                    this.f51009c = 2;
                    return 0;
                }
                throw l0.a("hdrl expected, found: " + this.f51008b.f51025c, null);
            case 2:
                int i10 = this.f51016j - 4;
                h0 h0Var = new h0(i10);
                lVar.readFully(h0Var.e(), 0, i10);
                h(h0Var);
                this.f51009c = 3;
                return 0;
            case 3:
                if (this.f51017k != -1) {
                    long position = lVar.getPosition();
                    long j10 = this.f51017k;
                    if (position != j10) {
                        this.f51014h = j10;
                        return 0;
                    }
                }
                lVar.n(this.f51007a.e(), 0, 12);
                lVar.e();
                this.f51007a.U(0);
                this.f51008b.a(this.f51007a);
                int u10 = this.f51007a.u();
                int i11 = this.f51008b.f51023a;
                if (i11 == 1179011410) {
                    lVar.k(12);
                    return 0;
                } else if (i11 == 1414744396 && u10 == 1769369453) {
                    long position2 = lVar.getPosition();
                    this.f51017k = position2;
                    this.f51018l = position2 + this.f51008b.f51024b + 8;
                    if (!this.f51020n) {
                        if (((vc.c) ne.a.e(this.f51011e)).a()) {
                            this.f51009c = 4;
                            this.f51014h = this.f51018l;
                            return 0;
                        }
                        this.f51010d.q(new z.b(this.f51012f));
                        this.f51020n = true;
                    }
                    this.f51014h = lVar.getPosition() + 12;
                    this.f51009c = 6;
                    return 0;
                } else {
                    this.f51014h = lVar.getPosition() + this.f51008b.f51024b + 8;
                    return 0;
                }
            case 4:
                lVar.readFully(this.f51007a.e(), 0, 8);
                this.f51007a.U(0);
                int u11 = this.f51007a.u();
                int u12 = this.f51007a.u();
                if (u11 == 829973609) {
                    this.f51009c = 5;
                    this.f51019m = u12;
                } else {
                    this.f51014h = lVar.getPosition() + u12;
                }
                return 0;
            case 5:
                h0 h0Var2 = new h0(this.f51019m);
                lVar.readFully(h0Var2.e(), 0, this.f51019m);
                i(h0Var2);
                this.f51009c = 6;
                this.f51014h = this.f51017k;
                return 0;
            case 6:
                return l(lVar);
            default:
                throw new AssertionError();
        }
    }

    @Override // tc.k
    public boolean f(l lVar) {
        lVar.n(this.f51007a.e(), 0, 12);
        this.f51007a.U(0);
        if (this.f51007a.u() != 1179011410) {
            return false;
        }
        this.f51007a.V(4);
        if (this.f51007a.u() != 541677121) {
            return false;
        }
        return true;
    }

    @Override // tc.k
    public void release() {
    }
}
