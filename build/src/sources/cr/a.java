package cr;

import android.text.Spannable;
import android.text.Spanned;
import android.text.method.LinkMovementMethod;
import android.widget.TextView;
import br.j;
import br.l;
import br.q;
import br.s;
import cr.b;
import ev.p;
import ev.r;
import ev.t;
import ev.u;
import ev.v;
import ev.w;
import ev.x;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends br.a {

    /* renamed from: a  reason: collision with root package name */
    private final List f20734a = new ArrayList(0);

    /* renamed from: b  reason: collision with root package name */
    private boolean f20735b;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: cr.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class C0275a implements l.c {
        C0275a() {
        }

        @Override // br.l.c
        /* renamed from: b */
        public void a(br.l lVar, x xVar) {
            lVar.h(xVar);
            int length = lVar.length();
            lVar.builder().append((char) 160);
            lVar.z(xVar, length);
            lVar.b(xVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements l.c {
        b() {
        }

        @Override // br.l.c
        /* renamed from: b */
        public void a(br.l lVar, ev.i iVar) {
            lVar.h(iVar);
            int length = lVar.length();
            lVar.r(iVar);
            cr.b.f20740d.d(lVar.l(), Integer.valueOf(iVar.n()));
            lVar.z(iVar, length);
            lVar.b(iVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c implements l.c {
        c() {
        }

        @Override // br.l.c
        /* renamed from: b */
        public void a(br.l lVar, u uVar) {
            lVar.builder().append(' ');
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class d implements l.c {
        d() {
        }

        @Override // br.l.c
        /* renamed from: b */
        public void a(br.l lVar, ev.h hVar) {
            lVar.w();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class e implements l.c {
        e() {
        }

        @Override // br.l.c
        /* renamed from: b */
        public void a(br.l lVar, t tVar) {
            boolean y10 = a.y(tVar);
            if (!y10) {
                lVar.h(tVar);
            }
            int length = lVar.length();
            lVar.r(tVar);
            cr.b.f20742f.d(lVar.l(), Boolean.valueOf(y10));
            lVar.z(tVar, length);
            if (!y10) {
                lVar.b(tVar);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class f implements l.c {
        f() {
        }

        @Override // br.l.c
        /* renamed from: b */
        public void a(br.l lVar, ev.n nVar) {
            int length = lVar.length();
            lVar.r(nVar);
            cr.b.f20741e.d(lVar.l(), nVar.m());
            lVar.z(nVar, length);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class g implements l.c {
        g() {
        }

        @Override // br.l.c
        /* renamed from: b */
        public void a(br.l lVar, w wVar) {
            String m10 = wVar.m();
            lVar.builder().d(m10);
            if (!a.this.f20734a.isEmpty()) {
                lVar.length();
                m10.length();
                Iterator it = a.this.f20734a.iterator();
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

        @Override // br.l.c
        /* renamed from: b */
        public void a(br.l lVar, v vVar) {
            int length = lVar.length();
            lVar.r(vVar);
            lVar.z(vVar, length);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class i implements l.c {
        i() {
        }

        @Override // br.l.c
        /* renamed from: b */
        public void a(br.l lVar, ev.f fVar) {
            int length = lVar.length();
            lVar.r(fVar);
            lVar.z(fVar, length);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class j implements l.c {
        j() {
        }

        @Override // br.l.c
        /* renamed from: b */
        public void a(br.l lVar, ev.b bVar) {
            lVar.h(bVar);
            int length = lVar.length();
            lVar.r(bVar);
            lVar.z(bVar, length);
            lVar.b(bVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class k implements l.c {
        k() {
        }

        @Override // br.l.c
        /* renamed from: b */
        public void a(br.l lVar, ev.d dVar) {
            int length = lVar.length();
            lVar.builder().append((char) 160).d(dVar.m()).append((char) 160);
            lVar.z(dVar, length);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class l implements l.c {
        l() {
        }

        @Override // br.l.c
        /* renamed from: b */
        public void a(br.l lVar, ev.g gVar) {
            a.I(lVar, gVar.q(), gVar.r(), gVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class m implements l.c {
        m() {
        }

        @Override // br.l.c
        /* renamed from: b */
        public void a(br.l lVar, ev.m mVar) {
            a.I(lVar, null, mVar.n(), mVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class n implements l.c {
        n() {
        }

        @Override // br.l.c
        /* renamed from: b */
        public void a(br.l lVar, ev.l lVar2) {
            s a10 = lVar.s().c().a(ev.l.class);
            if (a10 == null) {
                lVar.r(lVar2);
                return;
            }
            int length = lVar.length();
            lVar.r(lVar2);
            if (length == lVar.length()) {
                lVar.builder().append((char) 65532);
            }
            br.g s10 = lVar.s();
            String b10 = s10.a().b(lVar2.m());
            q l10 = lVar.l();
            fr.c.f25532a.d(l10, b10);
            fr.c.f25533b.d(l10, Boolean.valueOf(lVar2.f() instanceof ev.n));
            fr.c.f25534c.d(l10, null);
            lVar.d(length, a10.a(s10, l10));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class o implements l.c {
        o() {
        }

        @Override // br.l.c
        /* renamed from: b */
        public void a(br.l lVar, ev.q qVar) {
            int length = lVar.length();
            lVar.r(qVar);
            ev.a f10 = qVar.f();
            if (f10 instanceof ev.s) {
                ev.s sVar = (ev.s) f10;
                int q10 = sVar.q();
                cr.b.f20737a.d(lVar.l(), b.a.ORDERED);
                cr.b.f20739c.d(lVar.l(), Integer.valueOf(q10));
                sVar.s(sVar.q() + 1);
            } else {
                cr.b.f20737a.d(lVar.l(), b.a.BULLET);
                cr.b.f20738b.d(lVar.l(), Integer.valueOf(a.B(qVar)));
            }
            lVar.z(qVar, length);
            if (lVar.j(qVar)) {
                lVar.w();
            }
        }
    }

    protected a() {
    }

    private static void A(l.b bVar) {
        bVar.b(ev.q.class, new o());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int B(r rVar) {
        int i10 = 0;
        for (r f10 = rVar.f(); f10 != null; f10 = f10.f()) {
            if (f10 instanceof ev.q) {
                i10++;
            }
        }
        return i10;
    }

    private static void C(l.b bVar) {
        bVar.b(ev.s.class, new cr.d());
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
        bVar.b(x.class, new C0275a());
    }

    static void I(br.l lVar, String str, String str2, r rVar) {
        lVar.h(rVar);
        int length = lVar.length();
        lVar.builder().append((char) 160).append('\n').append(lVar.s().d().a(str, str2));
        lVar.w();
        lVar.builder().append((char) 160);
        cr.b.f20743g.d(lVar.l(), str);
        lVar.z(rVar, length);
        lVar.b(rVar);
    }

    private static void o(l.b bVar) {
        bVar.b(ev.b.class, new j());
    }

    private static void p(l.b bVar) {
        bVar.b(ev.c.class, new cr.d());
    }

    private static void q(l.b bVar) {
        bVar.b(ev.d.class, new k());
    }

    public static a r() {
        return new a();
    }

    private static void s(l.b bVar) {
        bVar.b(ev.f.class, new i());
    }

    private static void t(l.b bVar) {
        bVar.b(ev.g.class, new l());
    }

    private static void u(l.b bVar) {
        bVar.b(ev.h.class, new d());
    }

    private static void v(l.b bVar) {
        bVar.b(ev.i.class, new b());
    }

    private static void w(l.b bVar) {
        bVar.b(ev.l.class, new n());
    }

    private static void x(l.b bVar) {
        bVar.b(ev.m.class, new m());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static boolean y(t tVar) {
        ev.a f10 = tVar.f();
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
        bVar.b(ev.n.class, new f());
    }

    @Override // br.i
    public void b(j.a aVar) {
        dr.b bVar = new dr.b();
        aVar.a(v.class, new dr.h()).a(ev.f.class, new dr.d()).a(ev.b.class, new dr.a()).a(ev.d.class, new dr.c()).a(ev.g.class, bVar).a(ev.m.class, bVar).a(ev.q.class, new dr.g()).a(ev.i.class, new dr.e()).a(ev.n.class, new dr.f()).a(x.class, new dr.i());
    }

    @Override // br.i
    public void d(TextView textView) {
        if (!this.f20735b && textView.getMovementMethod() == null) {
            textView.setMovementMethod(LinkMovementMethod.getInstance());
        }
    }

    @Override // br.i
    public void h(l.b bVar) {
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

    @Override // br.i
    public void j(TextView textView, Spanned spanned) {
        er.i.a(textView, spanned);
        if (spanned instanceof Spannable) {
            er.k.a((Spannable) spanned, textView);
        }
    }
}
