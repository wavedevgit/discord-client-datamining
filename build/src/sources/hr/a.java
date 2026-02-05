package hr;

import android.text.Spannable;
import android.text.Spanned;
import android.text.method.LinkMovementMethod;
import android.widget.TextView;
import gr.j;
import gr.l;
import gr.q;
import gr.s;
import hr.b;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import jv.p;
import jv.r;
import jv.t;
import jv.u;
import jv.v;
import jv.w;
import jv.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends gr.a {

    /* renamed from: a  reason: collision with root package name */
    private final List f26892a = new ArrayList(0);

    /* renamed from: b  reason: collision with root package name */
    private boolean f26893b;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: hr.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class C0372a implements l.c {
        C0372a() {
        }

        @Override // gr.l.c
        /* renamed from: b */
        public void a(gr.l lVar, x xVar) {
            lVar.D(xVar);
            int length = lVar.length();
            lVar.builder().append((char) 160);
            lVar.E(xVar, length);
            lVar.d(xVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements l.c {
        b() {
        }

        @Override // gr.l.c
        /* renamed from: b */
        public void a(gr.l lVar, jv.i iVar) {
            lVar.D(iVar);
            int length = lVar.length();
            lVar.s(iVar);
            hr.b.f26898d.d(lVar.n(), Integer.valueOf(iVar.n()));
            lVar.E(iVar, length);
            lVar.d(iVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c implements l.c {
        c() {
        }

        @Override // gr.l.c
        /* renamed from: b */
        public void a(gr.l lVar, u uVar) {
            lVar.builder().append(' ');
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class d implements l.c {
        d() {
        }

        @Override // gr.l.c
        /* renamed from: b */
        public void a(gr.l lVar, jv.h hVar) {
            lVar.B();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class e implements l.c {
        e() {
        }

        @Override // gr.l.c
        /* renamed from: b */
        public void a(gr.l lVar, t tVar) {
            boolean y10 = a.y(tVar);
            if (!y10) {
                lVar.D(tVar);
            }
            int length = lVar.length();
            lVar.s(tVar);
            hr.b.f26900f.d(lVar.n(), Boolean.valueOf(y10));
            lVar.E(tVar, length);
            if (!y10) {
                lVar.d(tVar);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class f implements l.c {
        f() {
        }

        @Override // gr.l.c
        /* renamed from: b */
        public void a(gr.l lVar, jv.n nVar) {
            int length = lVar.length();
            lVar.s(nVar);
            hr.b.f26899e.d(lVar.n(), nVar.m());
            lVar.E(nVar, length);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class g implements l.c {
        g() {
        }

        @Override // gr.l.c
        /* renamed from: b */
        public void a(gr.l lVar, w wVar) {
            String m10 = wVar.m();
            lVar.builder().d(m10);
            if (!a.this.f26892a.isEmpty()) {
                lVar.length();
                m10.length();
                Iterator it = a.this.f26892a.iterator();
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

        @Override // gr.l.c
        /* renamed from: b */
        public void a(gr.l lVar, v vVar) {
            int length = lVar.length();
            lVar.s(vVar);
            lVar.E(vVar, length);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class i implements l.c {
        i() {
        }

        @Override // gr.l.c
        /* renamed from: b */
        public void a(gr.l lVar, jv.f fVar) {
            int length = lVar.length();
            lVar.s(fVar);
            lVar.E(fVar, length);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class j implements l.c {
        j() {
        }

        @Override // gr.l.c
        /* renamed from: b */
        public void a(gr.l lVar, jv.b bVar) {
            lVar.D(bVar);
            int length = lVar.length();
            lVar.s(bVar);
            lVar.E(bVar, length);
            lVar.d(bVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class k implements l.c {
        k() {
        }

        @Override // gr.l.c
        /* renamed from: b */
        public void a(gr.l lVar, jv.d dVar) {
            int length = lVar.length();
            lVar.builder().append((char) 160).d(dVar.m()).append((char) 160);
            lVar.E(dVar, length);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class l implements l.c {
        l() {
        }

        @Override // gr.l.c
        /* renamed from: b */
        public void a(gr.l lVar, jv.g gVar) {
            a.I(lVar, gVar.q(), gVar.r(), gVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class m implements l.c {
        m() {
        }

        @Override // gr.l.c
        /* renamed from: b */
        public void a(gr.l lVar, jv.m mVar) {
            a.I(lVar, null, mVar.n(), mVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class n implements l.c {
        n() {
        }

        @Override // gr.l.c
        /* renamed from: b */
        public void a(gr.l lVar, jv.l lVar2) {
            s a10 = lVar.x().c().a(jv.l.class);
            if (a10 == null) {
                lVar.s(lVar2);
                return;
            }
            int length = lVar.length();
            lVar.s(lVar2);
            if (length == lVar.length()) {
                lVar.builder().append((char) 65532);
            }
            gr.g x10 = lVar.x();
            String b10 = x10.a().b(lVar2.m());
            q n10 = lVar.n();
            kr.c.f36120a.d(n10, b10);
            kr.c.f36121b.d(n10, Boolean.valueOf(lVar2.f() instanceof jv.n));
            kr.c.f36122c.d(n10, null);
            lVar.b(length, a10.a(x10, n10));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class o implements l.c {
        o() {
        }

        @Override // gr.l.c
        /* renamed from: b */
        public void a(gr.l lVar, jv.q qVar) {
            int length = lVar.length();
            lVar.s(qVar);
            jv.a f10 = qVar.f();
            if (f10 instanceof jv.s) {
                jv.s sVar = (jv.s) f10;
                int q10 = sVar.q();
                hr.b.f26895a.d(lVar.n(), b.a.ORDERED);
                hr.b.f26897c.d(lVar.n(), Integer.valueOf(q10));
                sVar.s(sVar.q() + 1);
            } else {
                hr.b.f26895a.d(lVar.n(), b.a.BULLET);
                hr.b.f26896b.d(lVar.n(), Integer.valueOf(a.B(qVar)));
            }
            lVar.E(qVar, length);
            if (lVar.k(qVar)) {
                lVar.B();
            }
        }
    }

    protected a() {
    }

    private static void A(l.b bVar) {
        bVar.a(jv.q.class, new o());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int B(r rVar) {
        int i10 = 0;
        for (r f10 = rVar.f(); f10 != null; f10 = f10.f()) {
            if (f10 instanceof jv.q) {
                i10++;
            }
        }
        return i10;
    }

    private static void C(l.b bVar) {
        bVar.a(jv.s.class, new hr.d());
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
        bVar.a(x.class, new C0372a());
    }

    static void I(gr.l lVar, String str, String str2, r rVar) {
        lVar.D(rVar);
        int length = lVar.length();
        lVar.builder().append((char) 160).append('\n').append(lVar.x().d().a(str, str2));
        lVar.B();
        lVar.builder().append((char) 160);
        hr.b.f26901g.d(lVar.n(), str);
        lVar.E(rVar, length);
        lVar.d(rVar);
    }

    private static void o(l.b bVar) {
        bVar.a(jv.b.class, new j());
    }

    private static void p(l.b bVar) {
        bVar.a(jv.c.class, new hr.d());
    }

    private static void q(l.b bVar) {
        bVar.a(jv.d.class, new k());
    }

    public static a r() {
        return new a();
    }

    private static void s(l.b bVar) {
        bVar.a(jv.f.class, new i());
    }

    private static void t(l.b bVar) {
        bVar.a(jv.g.class, new l());
    }

    private static void u(l.b bVar) {
        bVar.a(jv.h.class, new d());
    }

    private static void v(l.b bVar) {
        bVar.a(jv.i.class, new b());
    }

    private static void w(l.b bVar) {
        bVar.a(jv.l.class, new n());
    }

    private static void x(l.b bVar) {
        bVar.a(jv.m.class, new m());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static boolean y(t tVar) {
        jv.a f10 = tVar.f();
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
        bVar.a(jv.n.class, new f());
    }

    @Override // gr.i
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

    @Override // gr.i
    public void e(TextView textView) {
        if (!this.f26893b && textView.getMovementMethod() == null) {
            textView.setMovementMethod(LinkMovementMethod.getInstance());
        }
    }

    @Override // gr.i
    public void h(j.a aVar) {
        ir.b bVar = new ir.b();
        aVar.a(v.class, new ir.h()).a(jv.f.class, new ir.d()).a(jv.b.class, new ir.a()).a(jv.d.class, new ir.c()).a(jv.g.class, bVar).a(jv.m.class, bVar).a(jv.q.class, new ir.g()).a(jv.i.class, new ir.e()).a(jv.n.class, new ir.f()).a(x.class, new ir.i());
    }

    @Override // gr.i
    public void j(TextView textView, Spanned spanned) {
        jr.i.a(textView, spanned);
        if (spanned instanceof Spannable) {
            jr.k.a((Spannable) spanned, textView);
        }
    }
}
