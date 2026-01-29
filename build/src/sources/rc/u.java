package rc;

import android.os.Handler;
import java.util.Iterator;
import java.util.concurrent.CopyOnWriteArrayList;
import ne.w0;
import qd.r;
import rc.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface u {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        public final int f48241a;

        /* renamed from: b  reason: collision with root package name */
        public final r.b f48242b;

        /* renamed from: c  reason: collision with root package name */
        private final CopyOnWriteArrayList f48243c;

        /* renamed from: rc.u$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        private static final class C0586a {

            /* renamed from: a  reason: collision with root package name */
            public Handler f48244a;

            /* renamed from: b  reason: collision with root package name */
            public u f48245b;

            public C0586a(Handler handler, u uVar) {
                this.f48244a = handler;
                this.f48245b = uVar;
            }
        }

        public a() {
            this(new CopyOnWriteArrayList(), 0, null);
        }

        public static /* synthetic */ void d(a aVar, u uVar, int i10) {
            uVar.x(aVar.f48241a, aVar.f48242b);
            uVar.J(aVar.f48241a, aVar.f48242b, i10);
        }

        public void g(Handler handler, u uVar) {
            ne.a.e(handler);
            ne.a.e(uVar);
            this.f48243c.add(new C0586a(handler, uVar));
        }

        public void h() {
            Iterator it = this.f48243c.iterator();
            while (it.hasNext()) {
                C0586a c0586a = (C0586a) it.next();
                final u uVar = c0586a.f48245b;
                w0.T0(c0586a.f48244a, new Runnable() { // from class: rc.t
                    @Override // java.lang.Runnable
                    public final void run() {
                        uVar.A(r0.f48241a, u.a.this.f48242b);
                    }
                });
            }
        }

        public void i() {
            Iterator it = this.f48243c.iterator();
            while (it.hasNext()) {
                C0586a c0586a = (C0586a) it.next();
                final u uVar = c0586a.f48245b;
                w0.T0(c0586a.f48244a, new Runnable() { // from class: rc.r
                    @Override // java.lang.Runnable
                    public final void run() {
                        uVar.z(r0.f48241a, u.a.this.f48242b);
                    }
                });
            }
        }

        public void j() {
            Iterator it = this.f48243c.iterator();
            while (it.hasNext()) {
                C0586a c0586a = (C0586a) it.next();
                final u uVar = c0586a.f48245b;
                w0.T0(c0586a.f48244a, new Runnable() { // from class: rc.s
                    @Override // java.lang.Runnable
                    public final void run() {
                        uVar.w(r0.f48241a, u.a.this.f48242b);
                    }
                });
            }
        }

        public void k(final int i10) {
            Iterator it = this.f48243c.iterator();
            while (it.hasNext()) {
                C0586a c0586a = (C0586a) it.next();
                final u uVar = c0586a.f48245b;
                w0.T0(c0586a.f48244a, new Runnable() { // from class: rc.q
                    @Override // java.lang.Runnable
                    public final void run() {
                        u.a.d(u.a.this, uVar, i10);
                    }
                });
            }
        }

        public void l(final Exception exc) {
            Iterator it = this.f48243c.iterator();
            while (it.hasNext()) {
                C0586a c0586a = (C0586a) it.next();
                final u uVar = c0586a.f48245b;
                w0.T0(c0586a.f48244a, new Runnable() { // from class: rc.o
                    @Override // java.lang.Runnable
                    public final void run() {
                        uVar.I(r0.f48241a, u.a.this.f48242b, exc);
                    }
                });
            }
        }

        public void m() {
            Iterator it = this.f48243c.iterator();
            while (it.hasNext()) {
                C0586a c0586a = (C0586a) it.next();
                final u uVar = c0586a.f48245b;
                w0.T0(c0586a.f48244a, new Runnable() { // from class: rc.p
                    @Override // java.lang.Runnable
                    public final void run() {
                        uVar.F(r0.f48241a, u.a.this.f48242b);
                    }
                });
            }
        }

        public void n(u uVar) {
            Iterator it = this.f48243c.iterator();
            while (it.hasNext()) {
                C0586a c0586a = (C0586a) it.next();
                if (c0586a.f48245b == uVar) {
                    this.f48243c.remove(c0586a);
                }
            }
        }

        public a o(int i10, r.b bVar) {
            return new a(this.f48243c, i10, bVar);
        }

        private a(CopyOnWriteArrayList copyOnWriteArrayList, int i10, r.b bVar) {
            this.f48243c = copyOnWriteArrayList;
            this.f48241a = i10;
            this.f48242b = bVar;
        }
    }

    void A(int i10, r.b bVar);

    void I(int i10, r.b bVar, Exception exc);

    void w(int i10, r.b bVar);

    void z(int i10, r.b bVar);

    default void F(int i10, r.b bVar) {
    }

    default void x(int i10, r.b bVar) {
    }

    default void J(int i10, r.b bVar, int i11) {
    }
}
