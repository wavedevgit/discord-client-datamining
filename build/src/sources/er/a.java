package er;

import android.text.Spannable;
import android.text.Spanned;
import android.text.method.LinkMovementMethod;
import android.widget.TextView;
import dr.j;
import dr.l;
import dr.q;
import dr.s;
import er.b;
import gv.p;
import gv.r;
import gv.t;
import gv.u;
import gv.v;
import gv.w;
import gv.x;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends dr.a {

    /* renamed from: a  reason: collision with root package name */
    private final List f22580a = new ArrayList(0);

    /* renamed from: b  reason: collision with root package name */
    private boolean f22581b;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: er.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class C0304a implements l.c {
        C0304a() {
        }

        @Override // dr.l.c
        /* renamed from: b */
        public void a(dr.l lVar, x xVar) {
            lVar.b(xVar);
            int length = lVar.length();
            lVar.builder().append((char) 160);
            lVar.y(xVar, length);
            lVar.E(xVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements l.c {
        b() {
        }

        @Override // dr.l.c
        /* renamed from: b */
        public void a(dr.l lVar, gv.i iVar) {
            lVar.b(iVar);
            int length = lVar.length();
            lVar.l(iVar);
            er.b.f22586d.d(lVar.o(), Integer.valueOf(iVar.n()));
            lVar.y(iVar, length);
            lVar.E(iVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c implements l.c {
        c() {
        }

        @Override // dr.l.c
        /* renamed from: b */
        public void a(dr.l lVar, u uVar) {
            lVar.builder().append(' ');
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class d implements l.c {
        d() {
        }

        @Override // dr.l.c
        /* renamed from: b */
        public void a(dr.l lVar, gv.h hVar) {
            lVar.B();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class e implements l.c {
        e() {
        }

        @Override // dr.l.c
        /* renamed from: b */
        public void a(dr.l lVar, t tVar) {
            boolean y10 = a.y(tVar);
            if (!y10) {
                lVar.b(tVar);
            }
            int length = lVar.length();
            lVar.l(tVar);
            er.b.f22588f.d(lVar.o(), Boolean.valueOf(y10));
            lVar.y(tVar, length);
            if (!y10) {
                lVar.E(tVar);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class f implements l.c {
        f() {
        }

        @Override // dr.l.c
        /* renamed from: b */
        public void a(dr.l lVar, gv.n nVar) {
            int length = lVar.length();
            lVar.l(nVar);
            er.b.f22587e.d(lVar.o(), nVar.m());
            lVar.y(nVar, length);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class g implements l.c {
        g() {
        }

        @Override // dr.l.c
        /* renamed from: b */
        public void a(dr.l lVar, w wVar) {
            String m10 = wVar.m();
            lVar.builder().d(m10);
            if (!a.this.f22580a.isEmpty()) {
                lVar.length();
                m10.length();
                Iterator it = a.this.f22580a.iterator();
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

        @Override // dr.l.c
        /* renamed from: b */
        public void a(dr.l lVar, v vVar) {
            int length = lVar.length();
            lVar.l(vVar);
            lVar.y(vVar, length);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class i implements l.c {
        i() {
        }

        @Override // dr.l.c
        /* renamed from: b */
        public void a(dr.l lVar, gv.f fVar) {
            int length = lVar.length();
            lVar.l(fVar);
            lVar.y(fVar, length);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class j implements l.c {
        j() {
        }

        @Override // dr.l.c
        /* renamed from: b */
        public void a(dr.l lVar, gv.b bVar) {
            lVar.b(bVar);
            int length = lVar.length();
            lVar.l(bVar);
            lVar.y(bVar, length);
            lVar.E(bVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class k implements l.c {
        k() {
        }

        @Override // dr.l.c
        /* renamed from: b */
        public void a(dr.l lVar, gv.d dVar) {
            int length = lVar.length();
            lVar.builder().append((char) 160).d(dVar.m()).append((char) 160);
            lVar.y(dVar, length);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class l implements l.c {
        l() {
        }

        @Override // dr.l.c
        /* renamed from: b */
        public void a(dr.l lVar, gv.g gVar) {
            a.I(lVar, gVar.q(), gVar.r(), gVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class m implements l.c {
        m() {
        }

        @Override // dr.l.c
        /* renamed from: b */
        public void a(dr.l lVar, gv.m mVar) {
            a.I(lVar, null, mVar.n(), mVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class n implements l.c {
        n() {
        }

        @Override // dr.l.c
        /* renamed from: b */
        public void a(dr.l lVar, gv.l lVar2) {
            s a10 = lVar.z().c().a(gv.l.class);
            if (a10 == null) {
                lVar.l(lVar2);
                return;
            }
            int length = lVar.length();
            lVar.l(lVar2);
            if (length == lVar.length()) {
                lVar.builder().append((char) 65532);
            }
            dr.g z10 = lVar.z();
            String b10 = z10.a().b(lVar2.m());
            q o10 = lVar.o();
            hr.c.f28127a.d(o10, b10);
            hr.c.f28128b.d(o10, Boolean.valueOf(lVar2.f() instanceof gv.n));
            hr.c.f28129c.d(o10, null);
            lVar.c(length, a10.a(z10, o10));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class o implements l.c {
        o() {
        }

        @Override // dr.l.c
        /* renamed from: b */
        public void a(dr.l lVar, gv.q qVar) {
            int length = lVar.length();
            lVar.l(qVar);
            gv.a f10 = qVar.f();
            if (f10 instanceof gv.s) {
                gv.s sVar = (gv.s) f10;
                int q10 = sVar.q();
                er.b.f22583a.d(lVar.o(), b.a.ORDERED);
                er.b.f22585c.d(lVar.o(), Integer.valueOf(q10));
                sVar.s(sVar.q() + 1);
            } else {
                er.b.f22583a.d(lVar.o(), b.a.BULLET);
                er.b.f22584b.d(lVar.o(), Integer.valueOf(a.B(qVar)));
            }
            lVar.y(qVar, length);
            if (lVar.r(qVar)) {
                lVar.B();
            }
        }
    }

    protected a() {
    }

    private static void A(l.b bVar) {
        bVar.a(gv.q.class, new o());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int B(r rVar) {
        int i10 = 0;
        for (r f10 = rVar.f(); f10 != null; f10 = f10.f()) {
            if (f10 instanceof gv.q) {
                i10++;
            }
        }
        return i10;
    }

    private static void C(l.b bVar) {
        bVar.a(gv.s.class, new er.d());
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
        bVar.a(x.class, new C0304a());
    }

    static void I(dr.l lVar, String str, String str2, r rVar) {
        lVar.b(rVar);
        int length = lVar.length();
        lVar.builder().append((char) 160).append('\n').append(lVar.z().d().a(str, str2));
        lVar.B();
        lVar.builder().append((char) 160);
        er.b.f22589g.d(lVar.o(), str);
        lVar.y(rVar, length);
        lVar.E(rVar);
    }

    private static void o(l.b bVar) {
        bVar.a(gv.b.class, new j());
    }

    private static void p(l.b bVar) {
        bVar.a(gv.c.class, new er.d());
    }

    private static void q(l.b bVar) {
        bVar.a(gv.d.class, new k());
    }

    public static a r() {
        return new a();
    }

    private static void s(l.b bVar) {
        bVar.a(gv.f.class, new i());
    }

    private static void t(l.b bVar) {
        bVar.a(gv.g.class, new l());
    }

    private static void u(l.b bVar) {
        bVar.a(gv.h.class, new d());
    }

    private static void v(l.b bVar) {
        bVar.a(gv.i.class, new b());
    }

    private static void w(l.b bVar) {
        bVar.a(gv.l.class, new n());
    }

    private static void x(l.b bVar) {
        bVar.a(gv.m.class, new m());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static boolean y(t tVar) {
        gv.a f10 = tVar.f();
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
        bVar.a(gv.n.class, new f());
    }

    @Override // dr.i
    public void d(TextView textView) {
        if (!this.f22581b && textView.getMovementMethod() == null) {
            textView.setMovementMethod(LinkMovementMethod.getInstance());
        }
    }

    @Override // dr.i
    public void f(j.a aVar) {
        fr.b bVar = new fr.b();
        aVar.a(v.class, new fr.h()).a(gv.f.class, new fr.d()).a(gv.b.class, new fr.a()).a(gv.d.class, new fr.c()).a(gv.g.class, bVar).a(gv.m.class, bVar).a(gv.q.class, new fr.g()).a(gv.i.class, new fr.e()).a(gv.n.class, new fr.f()).a(x.class, new fr.i());
    }

    @Override // dr.i
    public void j(l.b bVar) {
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

    @Override // dr.i
    public void k(TextView textView, Spanned spanned) {
        gr.i.a(textView, spanned);
        if (spanned instanceof Spannable) {
            gr.k.a((Spannable) spanned, textView);
        }
    }
}
