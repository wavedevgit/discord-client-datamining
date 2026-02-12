package wc;

import com.google.android.exoplayer2.Format;
import java.util.ArrayList;
import mc.l0;
import oe.c0;
import oe.h0;
import oe.y;
import qi.t0;
import uc.b0;
import uc.i;
import uc.k;
import uc.l;
import uc.m;
import uc.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements k {

    /* renamed from: c  reason: collision with root package name */
    private int f52493c;

    /* renamed from: e  reason: collision with root package name */
    private wc.c f52495e;

    /* renamed from: h  reason: collision with root package name */
    private long f52498h;

    /* renamed from: i  reason: collision with root package name */
    private e f52499i;

    /* renamed from: m  reason: collision with root package name */
    private int f52503m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f52504n;

    /* renamed from: a  reason: collision with root package name */
    private final h0 f52491a = new h0(12);

    /* renamed from: b  reason: collision with root package name */
    private final c f52492b = new c();

    /* renamed from: d  reason: collision with root package name */
    private m f52494d = new i();

    /* renamed from: g  reason: collision with root package name */
    private e[] f52497g = new e[0];

    /* renamed from: k  reason: collision with root package name */
    private long f52501k = -1;

    /* renamed from: l  reason: collision with root package name */
    private long f52502l = -1;

    /* renamed from: j  reason: collision with root package name */
    private int f52500j = -1;

    /* renamed from: f  reason: collision with root package name */
    private long f52496f = -9223372036854775807L;

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: wc.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class C0731b implements z {

        /* renamed from: a  reason: collision with root package name */
        private final long f52505a;

        public C0731b(long j10) {
            this.f52505a = j10;
        }

        @Override // uc.z
        public z.a e(long j10) {
            z.a i10 = b.this.f52497g[0].i(j10);
            for (int i11 = 1; i11 < b.this.f52497g.length; i11++) {
                z.a i12 = b.this.f52497g[i11].i(j10);
                if (i12.f50716a.f50613b < i10.f50716a.f50613b) {
                    i10 = i12;
                }
            }
            return i10;
        }

        @Override // uc.z
        public boolean g() {
            return true;
        }

        @Override // uc.z
        public long i() {
            return this.f52505a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class c {

        /* renamed from: a  reason: collision with root package name */
        public int f52507a;

        /* renamed from: b  reason: collision with root package name */
        public int f52508b;

        /* renamed from: c  reason: collision with root package name */
        public int f52509c;

        private c() {
        }

        public void a(h0 h0Var) {
            this.f52507a = h0Var.u();
            this.f52508b = h0Var.u();
            this.f52509c = 0;
        }

        public void b(h0 h0Var) {
            a(h0Var);
            if (this.f52507a == 1414744396) {
                this.f52509c = h0Var.u();
                return;
            }
            throw l0.a("LIST expected, found: " + this.f52507a, null);
        }
    }

    private static void e(l lVar) {
        if ((lVar.getPosition() & 1) == 1) {
            lVar.k(1);
        }
    }

    private e f(int i10) {
        e[] eVarArr;
        for (e eVar : this.f52497g) {
            if (eVar.j(i10)) {
                return eVar;
            }
        }
        return null;
    }

    private void g(h0 h0Var) {
        f c10 = f.c(1819436136, h0Var);
        if (c10.getType() == 1819436136) {
            wc.c cVar = (wc.c) c10.b(wc.c.class);
            if (cVar != null) {
                this.f52495e = cVar;
                this.f52496f = cVar.f52512c * cVar.f52510a;
                ArrayList arrayList = new ArrayList();
                t0 it = c10.f52532a.iterator();
                int i10 = 0;
                while (it.hasNext()) {
                    wc.a aVar = (wc.a) it.next();
                    if (aVar.getType() == 1819440243) {
                        int i11 = i10 + 1;
                        e k10 = k((f) aVar, i10);
                        if (k10 != null) {
                            arrayList.add(k10);
                        }
                        i10 = i11;
                    }
                }
                this.f52497g = (e[]) arrayList.toArray(new e[0]);
                this.f52494d.q();
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
            e f10 = f(u10);
            if (f10 != null) {
                if ((u11 & 16) == 16) {
                    f10.b(u12);
                }
                f10.k();
            }
        }
        for (e eVar : this.f52497g) {
            eVar.c();
        }
        this.f52504n = true;
        this.f52494d.j(new C0731b(this.f52496f));
    }

    private long j(h0 h0Var) {
        long j10 = 0;
        if (h0Var.a() < 16) {
            return 0L;
        }
        int f10 = h0Var.f();
        h0Var.V(8);
        long j11 = this.f52501k;
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
            Format format = gVar.f52534a;
            Format.b b10 = format.b();
            b10.T(i10);
            int i11 = dVar.f52519f;
            if (i11 != 0) {
                b10.Y(i11);
            }
            h hVar = (h) fVar.b(h.class);
            if (hVar != null) {
                b10.W(hVar.f52535a);
            }
            int k10 = c0.k(format.f12305w);
            if (k10 != 1 && k10 != 2) {
                return null;
            }
            b0 c10 = this.f52494d.c(i10, k10);
            c10.c(b10.G());
            e eVar = new e(i10, k10, a10, dVar.f52518e, c10);
            this.f52496f = a10;
            return eVar;
        }
    }

    private int l(l lVar) {
        if (lVar.getPosition() >= this.f52502l) {
            return -1;
        }
        e eVar = this.f52499i;
        if (eVar != null) {
            if (eVar.m(lVar)) {
                this.f52499i = null;
            }
        } else {
            e(lVar);
            int i10 = 12;
            lVar.n(this.f52491a.e(), 0, 12);
            this.f52491a.U(0);
            int u10 = this.f52491a.u();
            if (u10 == 1414744396) {
                this.f52491a.U(8);
                if (this.f52491a.u() != 1769369453) {
                    i10 = 8;
                }
                lVar.k(i10);
                lVar.e();
                return 0;
            }
            int u11 = this.f52491a.u();
            if (u10 == 1263424842) {
                this.f52498h = lVar.getPosition() + u11 + 8;
                return 0;
            }
            lVar.k(8);
            lVar.e();
            e f10 = f(u10);
            if (f10 == null) {
                this.f52498h = lVar.getPosition() + u11;
                return 0;
            }
            f10.n(u11);
            this.f52499i = f10;
        }
        return 0;
    }

    private boolean m(l lVar, uc.y yVar) {
        boolean z10;
        if (this.f52498h != -1) {
            long position = lVar.getPosition();
            long j10 = this.f52498h;
            if (j10 >= position && j10 <= 262144 + position) {
                lVar.k((int) (j10 - position));
            } else {
                yVar.f50715a = j10;
                z10 = true;
                this.f52498h = -1L;
                return z10;
            }
        }
        z10 = false;
        this.f52498h = -1L;
        return z10;
    }

    @Override // uc.k
    public void a(long j10, long j11) {
        this.f52498h = -1L;
        this.f52499i = null;
        for (e eVar : this.f52497g) {
            eVar.o(j10);
        }
        if (j10 == 0) {
            if (this.f52497g.length == 0) {
                this.f52493c = 0;
                return;
            } else {
                this.f52493c = 3;
                return;
            }
        }
        this.f52493c = 6;
    }

    @Override // uc.k
    public void c(m mVar) {
        this.f52493c = 0;
        this.f52494d = mVar;
        this.f52498h = -1L;
    }

    @Override // uc.k
    public boolean d(l lVar) {
        lVar.n(this.f52491a.e(), 0, 12);
        this.f52491a.U(0);
        if (this.f52491a.u() != 1179011410) {
            return false;
        }
        this.f52491a.V(4);
        if (this.f52491a.u() != 541677121) {
            return false;
        }
        return true;
    }

    @Override // uc.k
    public int h(l lVar, uc.y yVar) {
        if (m(lVar, yVar)) {
            return 1;
        }
        switch (this.f52493c) {
            case 0:
                if (d(lVar)) {
                    lVar.k(12);
                    this.f52493c = 1;
                    return 0;
                }
                throw l0.a("AVI Header List not found", null);
            case 1:
                lVar.readFully(this.f52491a.e(), 0, 12);
                this.f52491a.U(0);
                this.f52492b.b(this.f52491a);
                c cVar = this.f52492b;
                if (cVar.f52509c == 1819436136) {
                    this.f52500j = cVar.f52508b;
                    this.f52493c = 2;
                    return 0;
                }
                throw l0.a("hdrl expected, found: " + this.f52492b.f52509c, null);
            case 2:
                int i10 = this.f52500j - 4;
                h0 h0Var = new h0(i10);
                lVar.readFully(h0Var.e(), 0, i10);
                g(h0Var);
                this.f52493c = 3;
                return 0;
            case 3:
                if (this.f52501k != -1) {
                    long position = lVar.getPosition();
                    long j10 = this.f52501k;
                    if (position != j10) {
                        this.f52498h = j10;
                        return 0;
                    }
                }
                lVar.n(this.f52491a.e(), 0, 12);
                lVar.e();
                this.f52491a.U(0);
                this.f52492b.a(this.f52491a);
                int u10 = this.f52491a.u();
                int i11 = this.f52492b.f52507a;
                if (i11 == 1179011410) {
                    lVar.k(12);
                    return 0;
                } else if (i11 == 1414744396 && u10 == 1769369453) {
                    long position2 = lVar.getPosition();
                    this.f52501k = position2;
                    this.f52502l = position2 + this.f52492b.f52508b + 8;
                    if (!this.f52504n) {
                        if (((wc.c) oe.a.e(this.f52495e)).a()) {
                            this.f52493c = 4;
                            this.f52498h = this.f52502l;
                            return 0;
                        }
                        this.f52494d.j(new z.b(this.f52496f));
                        this.f52504n = true;
                    }
                    this.f52498h = lVar.getPosition() + 12;
                    this.f52493c = 6;
                    return 0;
                } else {
                    this.f52498h = lVar.getPosition() + this.f52492b.f52508b + 8;
                    return 0;
                }
            case 4:
                lVar.readFully(this.f52491a.e(), 0, 8);
                this.f52491a.U(0);
                int u11 = this.f52491a.u();
                int u12 = this.f52491a.u();
                if (u11 == 829973609) {
                    this.f52493c = 5;
                    this.f52503m = u12;
                } else {
                    this.f52498h = lVar.getPosition() + u12;
                }
                return 0;
            case 5:
                h0 h0Var2 = new h0(this.f52503m);
                lVar.readFully(h0Var2.e(), 0, this.f52503m);
                i(h0Var2);
                this.f52493c = 6;
                this.f52498h = this.f52501k;
                return 0;
            case 6:
                return l(lVar);
            default:
                throw new AssertionError();
        }
    }

    @Override // uc.k
    public void release() {
    }
}
