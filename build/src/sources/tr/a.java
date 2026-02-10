package tr;

import android.text.Spannable;
import android.text.Spanned;
import android.text.method.LinkMovementMethod;
import android.widget.TextView;
import aw.p;
import aw.r;
import aw.t;
import aw.u;
import aw.v;
import aw.w;
import aw.x;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import sr.j;
import sr.l;
import sr.q;
import sr.s;
import tr.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends sr.a {

    /* renamed from: a  reason: collision with root package name */
    private final List f49879a = new ArrayList(0);

    /* renamed from: b  reason: collision with root package name */
    private boolean f49880b;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: tr.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class C0683a implements l.c {
        C0683a() {
        }

        @Override // sr.l.c
        /* renamed from: b */
        public void a(sr.l lVar, x xVar) {
            lVar.z(xVar);
            int length = lVar.length();
            lVar.builder().append((char) 160);
            lVar.B(xVar, length);
            lVar.r(xVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements l.c {
        b() {
        }

        @Override // sr.l.c
        /* renamed from: b */
        public void a(sr.l lVar, aw.i iVar) {
            lVar.z(iVar);
            int length = lVar.length();
            lVar.i(iVar);
            tr.b.f49885d.d(lVar.l(), Integer.valueOf(iVar.n()));
            lVar.B(iVar, length);
            lVar.r(iVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c implements l.c {
        c() {
        }

        @Override // sr.l.c
        /* renamed from: b */
        public void a(sr.l lVar, u uVar) {
            lVar.builder().append(' ');
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class d implements l.c {
        d() {
        }

        @Override // sr.l.c
        /* renamed from: b */
        public void a(sr.l lVar, aw.h hVar) {
            lVar.D();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class e implements l.c {
        e() {
        }

        @Override // sr.l.c
        /* renamed from: b */
        public void a(sr.l lVar, t tVar) {
            boolean y10 = a.y(tVar);
            if (!y10) {
                lVar.z(tVar);
            }
            int length = lVar.length();
            lVar.i(tVar);
            tr.b.f49887f.d(lVar.l(), Boolean.valueOf(y10));
            lVar.B(tVar, length);
            if (!y10) {
                lVar.r(tVar);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class f implements l.c {
        f() {
        }

        @Override // sr.l.c
        /* renamed from: b */
        public void a(sr.l lVar, aw.n nVar) {
            int length = lVar.length();
            lVar.i(nVar);
            tr.b.f49886e.d(lVar.l(), nVar.m());
            lVar.B(nVar, length);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class g implements l.c {
        g() {
        }

        @Override // sr.l.c
        /* renamed from: b */
        public void a(sr.l lVar, w wVar) {
            String m10 = wVar.m();
            lVar.builder().d(m10);
            if (!a.this.f49879a.isEmpty()) {
                lVar.length();
                m10.length();
                Iterator it = a.this.f49879a.iterator();
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

        @Override // sr.l.c
        /* renamed from: b */
        public void a(sr.l lVar, v vVar) {
            int length = lVar.length();
            lVar.i(vVar);
            lVar.B(vVar, length);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class i implements l.c {
        i() {
        }

        @Override // sr.l.c
        /* renamed from: b */
        public void a(sr.l lVar, aw.f fVar) {
            int length = lVar.length();
            lVar.i(fVar);
            lVar.B(fVar, length);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class j implements l.c {
        j() {
        }

        @Override // sr.l.c
        /* renamed from: b */
        public void a(sr.l lVar, aw.b bVar) {
            lVar.z(bVar);
            int length = lVar.length();
            lVar.i(bVar);
            lVar.B(bVar, length);
            lVar.r(bVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class k implements l.c {
        k() {
        }

        @Override // sr.l.c
        /* renamed from: b */
        public void a(sr.l lVar, aw.d dVar) {
            int length = lVar.length();
            lVar.builder().append((char) 160).d(dVar.m()).append((char) 160);
            lVar.B(dVar, length);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class l implements l.c {
        l() {
        }

        @Override // sr.l.c
        /* renamed from: b */
        public void a(sr.l lVar, aw.g gVar) {
            a.I(lVar, gVar.q(), gVar.r(), gVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class m implements l.c {
        m() {
        }

        @Override // sr.l.c
        /* renamed from: b */
        public void a(sr.l lVar, aw.m mVar) {
            a.I(lVar, null, mVar.n(), mVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class n implements l.c {
        n() {
        }

        @Override // sr.l.c
        /* renamed from: b */
        public void a(sr.l lVar, aw.l lVar2) {
            s a10 = lVar.y().c().a(aw.l.class);
            if (a10 == null) {
                lVar.i(lVar2);
                return;
            }
            int length = lVar.length();
            lVar.i(lVar2);
            if (length == lVar.length()) {
                lVar.builder().append((char) 65532);
            }
            sr.g y10 = lVar.y();
            String b10 = y10.a().b(lVar2.m());
            q l10 = lVar.l();
            wr.c.f53959a.d(l10, b10);
            wr.c.f53960b.d(l10, Boolean.valueOf(lVar2.f() instanceof aw.n));
            wr.c.f53961c.d(l10, null);
            lVar.c(length, a10.a(y10, l10));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class o implements l.c {
        o() {
        }

        @Override // sr.l.c
        /* renamed from: b */
        public void a(sr.l lVar, aw.q qVar) {
            int length = lVar.length();
            lVar.i(qVar);
            aw.a f10 = qVar.f();
            if (f10 instanceof aw.s) {
                aw.s sVar = (aw.s) f10;
                int q10 = sVar.q();
                tr.b.f49882a.d(lVar.l(), b.a.ORDERED);
                tr.b.f49884c.d(lVar.l(), Integer.valueOf(q10));
                sVar.s(sVar.q() + 1);
            } else {
                tr.b.f49882a.d(lVar.l(), b.a.BULLET);
                tr.b.f49883b.d(lVar.l(), Integer.valueOf(a.B(qVar)));
            }
            lVar.B(qVar, length);
            if (lVar.n(qVar)) {
                lVar.D();
            }
        }
    }

    protected a() {
    }

    private static void A(l.b bVar) {
        bVar.b(aw.q.class, new o());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int B(r rVar) {
        int i10 = 0;
        for (r f10 = rVar.f(); f10 != null; f10 = f10.f()) {
            if (f10 instanceof aw.q) {
                i10++;
            }
        }
        return i10;
    }

    private static void C(l.b bVar) {
        bVar.b(aw.s.class, new tr.d());
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
        bVar.b(x.class, new C0683a());
    }

    static void I(sr.l lVar, String str, String str2, r rVar) {
        lVar.z(rVar);
        int length = lVar.length();
        lVar.builder().append((char) 160).append('\n').append(lVar.y().d().a(str, str2));
        lVar.D();
        lVar.builder().append((char) 160);
        tr.b.f49888g.d(lVar.l(), str);
        lVar.B(rVar, length);
        lVar.r(rVar);
    }

    private static void o(l.b bVar) {
        bVar.b(aw.b.class, new j());
    }

    private static void p(l.b bVar) {
        bVar.b(aw.c.class, new tr.d());
    }

    private static void q(l.b bVar) {
        bVar.b(aw.d.class, new k());
    }

    public static a r() {
        return new a();
    }

    private static void s(l.b bVar) {
        bVar.b(aw.f.class, new i());
    }

    private static void t(l.b bVar) {
        bVar.b(aw.g.class, new l());
    }

    private static void u(l.b bVar) {
        bVar.b(aw.h.class, new d());
    }

    private static void v(l.b bVar) {
        bVar.b(aw.i.class, new b());
    }

    private static void w(l.b bVar) {
        bVar.b(aw.l.class, new n());
    }

    private static void x(l.b bVar) {
        bVar.b(aw.m.class, new m());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static boolean y(t tVar) {
        aw.a f10 = tVar.f();
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
        bVar.b(aw.n.class, new f());
    }

    @Override // sr.i
    public void c(j.a aVar) {
        ur.b bVar = new ur.b();
        aVar.a(v.class, new ur.h()).a(aw.f.class, new ur.d()).a(aw.b.class, new ur.a()).a(aw.d.class, new ur.c()).a(aw.g.class, bVar).a(aw.m.class, bVar).a(aw.q.class, new ur.g()).a(aw.i.class, new ur.e()).a(aw.n.class, new ur.f()).a(x.class, new ur.i());
    }

    @Override // sr.i
    public void d(TextView textView) {
        if (!this.f49880b && textView.getMovementMethod() == null) {
            textView.setMovementMethod(LinkMovementMethod.getInstance());
        }
    }

    @Override // sr.i
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

    @Override // sr.i
    public void j(TextView textView, Spanned spanned) {
        vr.i.a(textView, spanned);
        if (spanned instanceof Spannable) {
            vr.k.a((Spannable) spanned, textView);
        }
    }
}
