package br;

import android.text.Spannable;
import android.text.Spanned;
import android.text.method.LinkMovementMethod;
import android.widget.TextView;
import ar.j;
import ar.l;
import ar.q;
import ar.s;
import br.b;
import dv.p;
import dv.r;
import dv.t;
import dv.u;
import dv.v;
import dv.w;
import dv.x;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends ar.a {

    /* renamed from: a  reason: collision with root package name */
    private final List f7736a = new ArrayList(0);

    /* renamed from: b  reason: collision with root package name */
    private boolean f7737b;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: br.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class C0123a implements l.c {
        C0123a() {
        }

        @Override // ar.l.c
        /* renamed from: b */
        public void a(ar.l lVar, x xVar) {
            lVar.i(xVar);
            int length = lVar.length();
            lVar.builder().append((char) 160);
            lVar.n(xVar, length);
            lVar.B(xVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements l.c {
        b() {
        }

        @Override // ar.l.c
        /* renamed from: b */
        public void a(ar.l lVar, dv.i iVar) {
            lVar.i(iVar);
            int length = lVar.length();
            lVar.g(iVar);
            br.b.f7742d.d(lVar.m(), Integer.valueOf(iVar.n()));
            lVar.n(iVar, length);
            lVar.B(iVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c implements l.c {
        c() {
        }

        @Override // ar.l.c
        /* renamed from: b */
        public void a(ar.l lVar, u uVar) {
            lVar.builder().append(' ');
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class d implements l.c {
        d() {
        }

        @Override // ar.l.c
        /* renamed from: b */
        public void a(ar.l lVar, dv.h hVar) {
            lVar.z();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class e implements l.c {
        e() {
        }

        @Override // ar.l.c
        /* renamed from: b */
        public void a(ar.l lVar, t tVar) {
            boolean y10 = a.y(tVar);
            if (!y10) {
                lVar.i(tVar);
            }
            int length = lVar.length();
            lVar.g(tVar);
            br.b.f7744f.d(lVar.m(), Boolean.valueOf(y10));
            lVar.n(tVar, length);
            if (!y10) {
                lVar.B(tVar);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class f implements l.c {
        f() {
        }

        @Override // ar.l.c
        /* renamed from: b */
        public void a(ar.l lVar, dv.n nVar) {
            int length = lVar.length();
            lVar.g(nVar);
            br.b.f7743e.d(lVar.m(), nVar.m());
            lVar.n(nVar, length);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class g implements l.c {
        g() {
        }

        @Override // ar.l.c
        /* renamed from: b */
        public void a(ar.l lVar, w wVar) {
            String m10 = wVar.m();
            lVar.builder().d(m10);
            if (!a.this.f7736a.isEmpty()) {
                lVar.length();
                m10.length();
                Iterator it = a.this.f7736a.iterator();
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

        @Override // ar.l.c
        /* renamed from: b */
        public void a(ar.l lVar, v vVar) {
            int length = lVar.length();
            lVar.g(vVar);
            lVar.n(vVar, length);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class i implements l.c {
        i() {
        }

        @Override // ar.l.c
        /* renamed from: b */
        public void a(ar.l lVar, dv.f fVar) {
            int length = lVar.length();
            lVar.g(fVar);
            lVar.n(fVar, length);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class j implements l.c {
        j() {
        }

        @Override // ar.l.c
        /* renamed from: b */
        public void a(ar.l lVar, dv.b bVar) {
            lVar.i(bVar);
            int length = lVar.length();
            lVar.g(bVar);
            lVar.n(bVar, length);
            lVar.B(bVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class k implements l.c {
        k() {
        }

        @Override // ar.l.c
        /* renamed from: b */
        public void a(ar.l lVar, dv.d dVar) {
            int length = lVar.length();
            lVar.builder().append((char) 160).d(dVar.m()).append((char) 160);
            lVar.n(dVar, length);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class l implements l.c {
        l() {
        }

        @Override // ar.l.c
        /* renamed from: b */
        public void a(ar.l lVar, dv.g gVar) {
            a.I(lVar, gVar.q(), gVar.r(), gVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class m implements l.c {
        m() {
        }

        @Override // ar.l.c
        /* renamed from: b */
        public void a(ar.l lVar, dv.m mVar) {
            a.I(lVar, null, mVar.n(), mVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class n implements l.c {
        n() {
        }

        @Override // ar.l.c
        /* renamed from: b */
        public void a(ar.l lVar, dv.l lVar2) {
            s a10 = lVar.t().c().a(dv.l.class);
            if (a10 == null) {
                lVar.g(lVar2);
                return;
            }
            int length = lVar.length();
            lVar.g(lVar2);
            if (length == lVar.length()) {
                lVar.builder().append((char) 65532);
            }
            ar.g t10 = lVar.t();
            String b10 = t10.a().b(lVar2.m());
            q m10 = lVar.m();
            er.c.f24001a.d(m10, b10);
            er.c.f24002b.d(m10, Boolean.valueOf(lVar2.f() instanceof dv.n));
            er.c.f24003c.d(m10, null);
            lVar.b(length, a10.a(t10, m10));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class o implements l.c {
        o() {
        }

        @Override // ar.l.c
        /* renamed from: b */
        public void a(ar.l lVar, dv.q qVar) {
            int length = lVar.length();
            lVar.g(qVar);
            dv.a f10 = qVar.f();
            if (f10 instanceof dv.s) {
                dv.s sVar = (dv.s) f10;
                int q10 = sVar.q();
                br.b.f7739a.d(lVar.m(), b.a.ORDERED);
                br.b.f7741c.d(lVar.m(), Integer.valueOf(q10));
                sVar.s(sVar.q() + 1);
            } else {
                br.b.f7739a.d(lVar.m(), b.a.BULLET);
                br.b.f7740b.d(lVar.m(), Integer.valueOf(a.B(qVar)));
            }
            lVar.n(qVar, length);
            if (lVar.h(qVar)) {
                lVar.z();
            }
        }
    }

    protected a() {
    }

    private static void A(l.b bVar) {
        bVar.b(dv.q.class, new o());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int B(r rVar) {
        int i10 = 0;
        for (r f10 = rVar.f(); f10 != null; f10 = f10.f()) {
            if (f10 instanceof dv.q) {
                i10++;
            }
        }
        return i10;
    }

    private static void C(l.b bVar) {
        bVar.b(dv.s.class, new br.d());
    }

    private static void D(l.b bVar) {
        bVar.b(t.class, new e());
    }

    private static void E(l.b bVar) {
        bVar.b(u.class, new c());
    }

    private static void F(l.b bVar) {
        bVar.b(v.class, new h());
    }

    private void G(l.b bVar) {
        bVar.b(w.class, new g());
    }

    private static void H(l.b bVar) {
        bVar.b(x.class, new C0123a());
    }

    static void I(ar.l lVar, String str, String str2, r rVar) {
        lVar.i(rVar);
        int length = lVar.length();
        lVar.builder().append((char) 160).append('\n').append(lVar.t().d().a(str, str2));
        lVar.z();
        lVar.builder().append((char) 160);
        br.b.f7745g.d(lVar.m(), str);
        lVar.n(rVar, length);
        lVar.B(rVar);
    }

    private static void o(l.b bVar) {
        bVar.b(dv.b.class, new j());
    }

    private static void p(l.b bVar) {
        bVar.b(dv.c.class, new br.d());
    }

    private static void q(l.b bVar) {
        bVar.b(dv.d.class, new k());
    }

    public static a r() {
        return new a();
    }

    private static void s(l.b bVar) {
        bVar.b(dv.f.class, new i());
    }

    private static void t(l.b bVar) {
        bVar.b(dv.g.class, new l());
    }

    private static void u(l.b bVar) {
        bVar.b(dv.h.class, new d());
    }

    private static void v(l.b bVar) {
        bVar.b(dv.i.class, new b());
    }

    private static void w(l.b bVar) {
        bVar.b(dv.l.class, new n());
    }

    private static void x(l.b bVar) {
        bVar.b(dv.m.class, new m());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static boolean y(t tVar) {
        dv.a f10 = tVar.f();
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
        bVar.b(dv.n.class, new f());
    }

    @Override // ar.i
    public void a(j.a aVar) {
        cr.b bVar = new cr.b();
        aVar.a(v.class, new cr.h()).a(dv.f.class, new cr.d()).a(dv.b.class, new cr.a()).a(dv.d.class, new cr.c()).a(dv.g.class, bVar).a(dv.m.class, bVar).a(dv.q.class, new cr.g()).a(dv.i.class, new cr.e()).a(dv.n.class, new cr.f()).a(x.class, new cr.i());
    }

    @Override // ar.i
    public void c(TextView textView) {
        if (!this.f7737b && textView.getMovementMethod() == null) {
            textView.setMovementMethod(LinkMovementMethod.getInstance());
        }
    }

    @Override // ar.i
    public void d(l.b bVar) {
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

    @Override // ar.i
    public void k(TextView textView, Spanned spanned) {
        dr.i.a(textView, spanned);
        if (spanned instanceof Spannable) {
            dr.k.a((Spannable) spanned, textView);
        }
    }
}
