package sc;

import android.os.Handler;
import java.util.Iterator;
import java.util.concurrent.CopyOnWriteArrayList;
import oe.w0;
import rd.r;
import sc.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface u {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        public final int f48049a;

        /* renamed from: b  reason: collision with root package name */
        public final r.b f48050b;

        /* renamed from: c  reason: collision with root package name */
        private final CopyOnWriteArrayList f48051c;

        /* renamed from: sc.u$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        private static final class C0651a {

            /* renamed from: a  reason: collision with root package name */
            public Handler f48052a;

            /* renamed from: b  reason: collision with root package name */
            public u f48053b;

            public C0651a(Handler handler, u uVar) {
                this.f48052a = handler;
                this.f48053b = uVar;
            }
        }

        public a() {
            this(new CopyOnWriteArrayList(), 0, null);
        }

        public static /* synthetic */ void d(a aVar, u uVar, int i10) {
            uVar.I(aVar.f48049a, aVar.f48050b);
            uVar.A(aVar.f48049a, aVar.f48050b, i10);
        }

        public void g(Handler handler, u uVar) {
            oe.a.e(handler);
            oe.a.e(uVar);
            this.f48051c.add(new C0651a(handler, uVar));
        }

        public void h() {
            Iterator it = this.f48051c.iterator();
            while (it.hasNext()) {
                C0651a c0651a = (C0651a) it.next();
                final u uVar = c0651a.f48053b;
                w0.T0(c0651a.f48052a, new Runnable() { // from class: sc.t
                    @Override // java.lang.Runnable
                    public final void run() {
                        uVar.u(r0.f48049a, u.a.this.f48050b);
                    }
                });
            }
        }

        public void i() {
            Iterator it = this.f48051c.iterator();
            while (it.hasNext()) {
                C0651a c0651a = (C0651a) it.next();
                final u uVar = c0651a.f48053b;
                w0.T0(c0651a.f48052a, new Runnable() { // from class: sc.r
                    @Override // java.lang.Runnable
                    public final void run() {
                        uVar.J(r0.f48049a, u.a.this.f48050b);
                    }
                });
            }
        }

        public void j() {
            Iterator it = this.f48051c.iterator();
            while (it.hasNext()) {
                C0651a c0651a = (C0651a) it.next();
                final u uVar = c0651a.f48053b;
                w0.T0(c0651a.f48052a, new Runnable() { // from class: sc.s
                    @Override // java.lang.Runnable
                    public final void run() {
                        uVar.E(r0.f48049a, u.a.this.f48050b);
                    }
                });
            }
        }

        public void k(final int i10) {
            Iterator it = this.f48051c.iterator();
            while (it.hasNext()) {
                C0651a c0651a = (C0651a) it.next();
                final u uVar = c0651a.f48053b;
                w0.T0(c0651a.f48052a, new Runnable() { // from class: sc.q
                    @Override // java.lang.Runnable
                    public final void run() {
                        u.a.d(u.a.this, uVar, i10);
                    }
                });
            }
        }

        public void l(final Exception exc) {
            Iterator it = this.f48051c.iterator();
            while (it.hasNext()) {
                C0651a c0651a = (C0651a) it.next();
                final u uVar = c0651a.f48053b;
                w0.T0(c0651a.f48052a, new Runnable() { // from class: sc.o
                    @Override // java.lang.Runnable
                    public final void run() {
                        uVar.B(r0.f48049a, u.a.this.f48050b, exc);
                    }
                });
            }
        }

        public void m() {
            Iterator it = this.f48051c.iterator();
            while (it.hasNext()) {
                C0651a c0651a = (C0651a) it.next();
                final u uVar = c0651a.f48053b;
                w0.T0(c0651a.f48052a, new Runnable() { // from class: sc.p
                    @Override // java.lang.Runnable
                    public final void run() {
                        uVar.t(r0.f48049a, u.a.this.f48050b);
                    }
                });
            }
        }

        public void n(u uVar) {
            Iterator it = this.f48051c.iterator();
            while (it.hasNext()) {
                C0651a c0651a = (C0651a) it.next();
                if (c0651a.f48053b == uVar) {
                    this.f48051c.remove(c0651a);
                }
            }
        }

        public a o(int i10, r.b bVar) {
            return new a(this.f48051c, i10, bVar);
        }

        private a(CopyOnWriteArrayList copyOnWriteArrayList, int i10, r.b bVar) {
            this.f48051c = copyOnWriteArrayList;
            this.f48049a = i10;
            this.f48050b = bVar;
        }
    }

    void B(int i10, r.b bVar, Exception exc);

    void E(int i10, r.b bVar);

    void J(int i10, r.b bVar);

    void u(int i10, r.b bVar);

    default void I(int i10, r.b bVar) {
    }

    default void t(int i10, r.b bVar) {
    }

    default void A(int i10, r.b bVar, int i11) {
    }
}
