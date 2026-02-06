package jr;

import android.text.Spannable;
import android.text.Spanned;
import android.text.method.LinkMovementMethod;
import android.widget.TextView;
import ir.j;
import ir.l;
import ir.q;
import ir.s;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import jr.b;
import qv.p;
import qv.r;
import qv.t;
import qv.u;
import qv.v;
import qv.w;
import qv.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends ir.a {

    /* renamed from: a  reason: collision with root package name */
    private final List f30888a = new ArrayList(0);

    /* renamed from: b  reason: collision with root package name */
    private boolean f30889b;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: jr.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class C0439a implements l.c {
        C0439a() {
        }

        @Override // ir.l.c
        /* renamed from: b */
        public void a(ir.l lVar, x xVar) {
            lVar.i(xVar);
            int length = lVar.length();
            lVar.builder().append((char) 160);
            lVar.b(xVar, length);
            lVar.c(xVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements l.c {
        b() {
        }

        @Override // ir.l.c
        /* renamed from: b */
        public void a(ir.l lVar, qv.i iVar) {
            lVar.i(iVar);
            int length = lVar.length();
            lVar.t(iVar);
            jr.b.f30894d.d(lVar.o(), Integer.valueOf(iVar.n()));
            lVar.b(iVar, length);
            lVar.c(iVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c implements l.c {
        c() {
        }

        @Override // ir.l.c
        /* renamed from: b */
        public void a(ir.l lVar, u uVar) {
            lVar.builder().append(' ');
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class d implements l.c {
        d() {
        }

        @Override // ir.l.c
        /* renamed from: b */
        public void a(ir.l lVar, qv.h hVar) {
            lVar.z();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class e implements l.c {
        e() {
        }

        @Override // ir.l.c
        /* renamed from: b */
        public void a(ir.l lVar, t tVar) {
            boolean y10 = a.y(tVar);
            if (!y10) {
                lVar.i(tVar);
            }
            int length = lVar.length();
            lVar.t(tVar);
            jr.b.f30896f.d(lVar.o(), Boolean.valueOf(y10));
            lVar.b(tVar, length);
            if (!y10) {
                lVar.c(tVar);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class f implements l.c {
        f() {
        }

        @Override // ir.l.c
        /* renamed from: b */
        public void a(ir.l lVar, qv.n nVar) {
            int length = lVar.length();
            lVar.t(nVar);
            jr.b.f30895e.d(lVar.o(), nVar.m());
            lVar.b(nVar, length);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class g implements l.c {
        g() {
        }

        @Override // ir.l.c
        /* renamed from: b */
        public void a(ir.l lVar, w wVar) {
            String m10 = wVar.m();
            lVar.builder().d(m10);
            if (!a.this.f30888a.isEmpty()) {
                lVar.length();
                m10.length();
                Iterator it = a.this.f30888a.iterator();
                if (it.hasNext()) {
                    android.support.v4.media.session.b.a(it.next());
                    throw null;
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class h implements l.c {
        h() {
        }

        @Override // ir.l.c
        /* renamed from: b */
        public void a(ir.l lVar, v vVar) {
            int length = lVar.length();
            lVar.t(vVar);
            lVar.b(vVar, length);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class i implements l.c {
        i() {
        }

        @Override // ir.l.c
        /* renamed from: b */
        public void a(ir.l lVar, qv.f fVar) {
            int length = lVar.length();
            lVar.t(fVar);
            lVar.b(fVar, length);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class j implements l.c {
        j() {
        }

        @Override // ir.l.c
        /* renamed from: b */
        public void a(ir.l lVar, qv.b bVar) {
            lVar.i(bVar);
            int length = lVar.length();
            lVar.t(bVar);
            lVar.b(bVar, length);
            lVar.c(bVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class k implements l.c {
        k() {
        }

        @Override // ir.l.c
        /* renamed from: b */
        public void a(ir.l lVar, qv.d dVar) {
            int length = lVar.length();
            lVar.builder().append((char) 160).d(dVar.m()).append((char) 160);
            lVar.b(dVar, length);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class l implements l.c {
        l() {
        }

        @Override // ir.l.c
        /* renamed from: b */
        public void a(ir.l lVar, qv.g gVar) {
            a.I(lVar, gVar.q(), gVar.r(), gVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class m implements l.c {
        m() {
        }

        @Override // ir.l.c
        /* renamed from: b */
        public void a(ir.l lVar, qv.m mVar) {
            a.I(lVar, null, mVar.n(), mVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class n implements l.c {
        n() {
        }

        @Override // ir.l.c
        /* renamed from: b */
        public void a(ir.l lVar, qv.l lVar2) {
            s a10 = lVar.w().c().a(qv.l.class);
            if (a10 == null) {
                lVar.t(lVar2);
                return;
            }
            int length = lVar.length();
            lVar.t(lVar2);
            if (length == lVar.length()) {
                lVar.builder().append((char) 65532);
            }
            ir.g w10 = lVar.w();
            String b10 = w10.a().b(lVar2.m());
            q o10 = lVar.o();
            mr.c.f38276a.d(o10, b10);
            mr.c.f38277b.d(o10, Boolean.valueOf(lVar2.f() instanceof qv.n));
            mr.c.f38278c.d(o10, null);
            lVar.d(length, a10.a(w10, o10));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class o implements l.c {
        o() {
        }

        @Override // ir.l.c
        /* renamed from: b */
        public void a(ir.l lVar, qv.q qVar) {
            int length = lVar.length();
            lVar.t(qVar);
            qv.a f10 = qVar.f();
            if (f10 instanceof qv.s) {
                qv.s sVar = (qv.s) f10;
                int q10 = sVar.q();
                jr.b.f30891a.d(lVar.o(), b.a.ORDERED);
                jr.b.f30893c.d(lVar.o(), Integer.valueOf(q10));
                sVar.s(sVar.q() + 1);
            } else {
                jr.b.f30891a.d(lVar.o(), b.a.BULLET);
                jr.b.f30892b.d(lVar.o(), Integer.valueOf(a.B(qVar)));
            }
            lVar.b(qVar, length);
            if (lVar.E(qVar)) {
                lVar.z();
            }
        }
    }

    protected a() {
    }

    private static void A(l.b bVar) {
        bVar.a(qv.q.class, new o());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int B(r rVar) {
        int i10 = 0;
        for (r f10 = rVar.f(); f10 != null; f10 = f10.f()) {
            if (f10 instanceof qv.q) {
                i10++;
            }
        }
        return i10;
    }

    private static void C(l.b bVar) {
        bVar.a(qv.s.class, new jr.d());
    }

    private static void D(l.b bVar) {
        bVar.a(t.class, new e());
    }

    private static void E(l.b bVar) {
        bVar.a(u.class, new c());
    }

    private static void F(l.b bVar) {
        bVar.a(v.class, new h());
    }

    private void G(l.b bVar) {
        bVar.a(w.class, new g());
    }

    private static void H(l.b bVar) {
        bVar.a(x.class, new C0439a());
    }

    static void I(ir.l lVar, String str, String str2, r rVar) {
        lVar.i(rVar);
        int length = lVar.length();
        lVar.builder().append((char) 160).append('\n').append(lVar.w().d().a(str, str2));
        lVar.z();
        lVar.builder().append((char) 160);
        jr.b.f30897g.d(lVar.o(), str);
        lVar.b(rVar, length);
        lVar.c(rVar);
    }

    private static void o(l.b bVar) {
        bVar.a(qv.b.class, new j());
    }

    private static void p(l.b bVar) {
        bVar.a(qv.c.class, new jr.d());
    }

    private static void q(l.b bVar) {
        bVar.a(qv.d.class, new k());
    }

    public static a r() {
        return new a();
    }

    private static void s(l.b bVar) {
        bVar.a(qv.f.class, new i());
    }

    private static void t(l.b bVar) {
        bVar.a(qv.g.class, new l());
    }

    private static void u(l.b bVar) {
        bVar.a(qv.h.class, new d());
    }

    private static void v(l.b bVar) {
        bVar.a(qv.i.class, new b());
    }

    private static void w(l.b bVar) {
        bVar.a(qv.l.class, new n());
    }

    private static void x(l.b bVar) {
        bVar.a(qv.m.class, new m());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static boolean y(t tVar) {
        qv.a f10 = tVar.f();
        if (f10 != null) {
            r f11 = f10.f();
            if (f11 instanceof p) {
                return ((p) f11).n();
            }
            return false;
        }
        return false;
    }

    private static void z(l.b bVar) {
        bVar.a(qv.n.class, new f());
    }

    @Override // ir.i
    public void b(l.b bVar) {
        G(bVar);
        F(bVar);
        s(bVar);
        o(bVar);
        q(bVar);
        t(bVar);
        x(bVar);
        w(bVar);
        p(bVar);
        C(bVar);
        A(bVar);
        H(bVar);
        v(bVar);
        E(bVar);
        u(bVar);
        D(bVar);
        z(bVar);
    }

    @Override // ir.i
    public void c(j.a aVar) {
        kr.b bVar = new kr.b();
        aVar.a(v.class, new kr.h()).a(qv.f.class, new kr.d()).a(qv.b.class, new kr.a()).a(qv.d.class, new kr.c()).a(qv.g.class, bVar).a(qv.m.class, bVar).a(qv.q.class, new kr.g()).a(qv.i.class, new kr.e()).a(qv.n.class, new kr.f()).a(x.class, new kr.i());
    }

    @Override // ir.i
    public void e(TextView textView) {
        if (!this.f30889b && textView.getMovementMethod() == null) {
            textView.setMovementMethod(LinkMovementMethod.getInstance());
        }
    }

    @Override // ir.i
    public void j(TextView textView, Spanned spanned) {
        lr.i.a(textView, spanned);
        if (spanned instanceof Spannable) {
            lr.k.a((Spannable) spanned, textView);
        }
    }
}
