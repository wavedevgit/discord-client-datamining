package kr;

import android.text.Spannable;
import android.text.Spanned;
import android.text.method.LinkMovementMethod;
import android.widget.TextView;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import jr.j;
import jr.l;
import jr.q;
import jr.s;
import kr.b;
import rv.p;
import rv.r;
import rv.t;
import rv.u;
import rv.v;
import rv.w;
import rv.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends jr.a {

    /* renamed from: a  reason: collision with root package name */
    private final List f35028a = new ArrayList(0);

    /* renamed from: b  reason: collision with root package name */
    private boolean f35029b;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: kr.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class C0498a implements l.c {
        C0498a() {
        }

        @Override // jr.l.c
        /* renamed from: b */
        public void a(jr.l lVar, x xVar) {
            lVar.p(xVar);
            int length = lVar.length();
            lVar.builder().append((char) 160);
            lVar.b(xVar, length);
            lVar.o(xVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements l.c {
        b() {
        }

        @Override // jr.l.c
        /* renamed from: b */
        public void a(jr.l lVar, rv.i iVar) {
            lVar.p(iVar);
            int length = lVar.length();
            lVar.A(iVar);
            kr.b.f35034d.d(lVar.k(), Integer.valueOf(iVar.n()));
            lVar.b(iVar, length);
            lVar.o(iVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c implements l.c {
        c() {
        }

        @Override // jr.l.c
        /* renamed from: b */
        public void a(jr.l lVar, u uVar) {
            lVar.builder().append(' ');
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class d implements l.c {
        d() {
        }

        @Override // jr.l.c
        /* renamed from: b */
        public void a(jr.l lVar, rv.h hVar) {
            lVar.x();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class e implements l.c {
        e() {
        }

        @Override // jr.l.c
        /* renamed from: b */
        public void a(jr.l lVar, t tVar) {
            boolean y10 = a.y(tVar);
            if (!y10) {
                lVar.p(tVar);
            }
            int length = lVar.length();
            lVar.A(tVar);
            kr.b.f35036f.d(lVar.k(), Boolean.valueOf(y10));
            lVar.b(tVar, length);
            if (!y10) {
                lVar.o(tVar);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class f implements l.c {
        f() {
        }

        @Override // jr.l.c
        /* renamed from: b */
        public void a(jr.l lVar, rv.n nVar) {
            int length = lVar.length();
            lVar.A(nVar);
            kr.b.f35035e.d(lVar.k(), nVar.m());
            lVar.b(nVar, length);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class g implements l.c {
        g() {
        }

        @Override // jr.l.c
        /* renamed from: b */
        public void a(jr.l lVar, w wVar) {
            String m10 = wVar.m();
            lVar.builder().d(m10);
            if (!a.this.f35028a.isEmpty()) {
                lVar.length();
                m10.length();
                Iterator it = a.this.f35028a.iterator();
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

        @Override // jr.l.c
        /* renamed from: b */
        public void a(jr.l lVar, v vVar) {
            int length = lVar.length();
            lVar.A(vVar);
            lVar.b(vVar, length);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class i implements l.c {
        i() {
        }

        @Override // jr.l.c
        /* renamed from: b */
        public void a(jr.l lVar, rv.f fVar) {
            int length = lVar.length();
            lVar.A(fVar);
            lVar.b(fVar, length);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class j implements l.c {
        j() {
        }

        @Override // jr.l.c
        /* renamed from: b */
        public void a(jr.l lVar, rv.b bVar) {
            lVar.p(bVar);
            int length = lVar.length();
            lVar.A(bVar);
            lVar.b(bVar, length);
            lVar.o(bVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class k implements l.c {
        k() {
        }

        @Override // jr.l.c
        /* renamed from: b */
        public void a(jr.l lVar, rv.d dVar) {
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

        @Override // jr.l.c
        /* renamed from: b */
        public void a(jr.l lVar, rv.g gVar) {
            a.I(lVar, gVar.q(), gVar.r(), gVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class m implements l.c {
        m() {
        }

        @Override // jr.l.c
        /* renamed from: b */
        public void a(jr.l lVar, rv.m mVar) {
            a.I(lVar, null, mVar.n(), mVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class n implements l.c {
        n() {
        }

        @Override // jr.l.c
        /* renamed from: b */
        public void a(jr.l lVar, rv.l lVar2) {
            s a10 = lVar.s().c().a(rv.l.class);
            if (a10 == null) {
                lVar.A(lVar2);
                return;
            }
            int length = lVar.length();
            lVar.A(lVar2);
            if (length == lVar.length()) {
                lVar.builder().append((char) 65532);
            }
            jr.g s10 = lVar.s();
            String b10 = s10.a().b(lVar2.m());
            q k10 = lVar.k();
            nr.c.f40009a.d(k10, b10);
            nr.c.f40010b.d(k10, Boolean.valueOf(lVar2.f() instanceof rv.n));
            nr.c.f40011c.d(k10, null);
            lVar.d(length, a10.a(s10, k10));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class o implements l.c {
        o() {
        }

        @Override // jr.l.c
        /* renamed from: b */
        public void a(jr.l lVar, rv.q qVar) {
            int length = lVar.length();
            lVar.A(qVar);
            rv.a f10 = qVar.f();
            if (f10 instanceof rv.s) {
                rv.s sVar = (rv.s) f10;
                int q10 = sVar.q();
                kr.b.f35031a.d(lVar.k(), b.a.ORDERED);
                kr.b.f35033c.d(lVar.k(), Integer.valueOf(q10));
                sVar.s(sVar.q() + 1);
            } else {
                kr.b.f35031a.d(lVar.k(), b.a.BULLET);
                kr.b.f35032b.d(lVar.k(), Integer.valueOf(a.B(qVar)));
            }
            lVar.b(qVar, length);
            if (lVar.B(qVar)) {
                lVar.x();
            }
        }
    }

    protected a() {
    }

    private static void A(l.b bVar) {
        bVar.a(rv.q.class, new o());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int B(r rVar) {
        int i10 = 0;
        for (r f10 = rVar.f(); f10 != null; f10 = f10.f()) {
            if (f10 instanceof rv.q) {
                i10++;
            }
        }
        return i10;
    }

    private static void C(l.b bVar) {
        bVar.a(rv.s.class, new kr.d());
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
        bVar.a(x.class, new C0498a());
    }

    static void I(jr.l lVar, String str, String str2, r rVar) {
        lVar.p(rVar);
        int length = lVar.length();
        lVar.builder().append((char) 160).append('\n').append(lVar.s().d().a(str, str2));
        lVar.x();
        lVar.builder().append((char) 160);
        kr.b.f35037g.d(lVar.k(), str);
        lVar.b(rVar, length);
        lVar.o(rVar);
    }

    private static void o(l.b bVar) {
        bVar.a(rv.b.class, new j());
    }

    private static void p(l.b bVar) {
        bVar.a(rv.c.class, new kr.d());
    }

    private static void q(l.b bVar) {
        bVar.a(rv.d.class, new k());
    }

    public static a r() {
        return new a();
    }

    private static void s(l.b bVar) {
        bVar.a(rv.f.class, new i());
    }

    private static void t(l.b bVar) {
        bVar.a(rv.g.class, new l());
    }

    private static void u(l.b bVar) {
        bVar.a(rv.h.class, new d());
    }

    private static void v(l.b bVar) {
        bVar.a(rv.i.class, new b());
    }

    private static void w(l.b bVar) {
        bVar.a(rv.l.class, new n());
    }

    private static void x(l.b bVar) {
        bVar.a(rv.m.class, new m());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static boolean y(t tVar) {
        rv.a f10 = tVar.f();
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
        bVar.a(rv.n.class, new f());
    }

    @Override // jr.i
    public void b(j.a aVar) {
        lr.b bVar = new lr.b();
        aVar.a(v.class, new lr.h()).a(rv.f.class, new lr.d()).a(rv.b.class, new lr.a()).a(rv.d.class, new lr.c()).a(rv.g.class, bVar).a(rv.m.class, bVar).a(rv.q.class, new lr.g()).a(rv.i.class, new lr.e()).a(rv.n.class, new lr.f()).a(x.class, new lr.i());
    }

    @Override // jr.i
    public void c(TextView textView) {
        if (!this.f35029b && textView.getMovementMethod() == null) {
            textView.setMovementMethod(LinkMovementMethod.getInstance());
        }
    }

    @Override // jr.i
    public void f(l.b bVar) {
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

    @Override // jr.i
    public void k(TextView textView, Spanned spanned) {
        mr.i.a(textView, spanned);
        if (spanned instanceof Spannable) {
            mr.k.a((Spannable) spanned, textView);
        }
    }
}
