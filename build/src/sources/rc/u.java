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
        public final int f48768a;

        /* renamed from: b  reason: collision with root package name */
        public final r.b f48769b;

        /* renamed from: c  reason: collision with root package name */
        private final CopyOnWriteArrayList f48770c;

        /* renamed from: rc.u$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        private static final class C0597a {

            /* renamed from: a  reason: collision with root package name */
            public Handler f48771a;

            /* renamed from: b  reason: collision with root package name */
            public u f48772b;

            public C0597a(Handler handler, u uVar) {
                this.f48771a = handler;
                this.f48772b = uVar;
            }
        }

        public a() {
            this(new CopyOnWriteArrayList(), 0, null);
        }

        public static /* synthetic */ void d(a aVar, u uVar, int i10) {
            uVar.x(aVar.f48768a, aVar.f48769b);
            uVar.J(aVar.f48768a, aVar.f48769b, i10);
        }

        public void g(Handler handler, u uVar) {
            ne.a.e(handler);
            ne.a.e(uVar);
            this.f48770c.add(new C0597a(handler, uVar));
        }

        public void h() {
            Iterator it = this.f48770c.iterator();
            while (it.hasNext()) {
                C0597a c0597a = (C0597a) it.next();
                final u uVar = c0597a.f48772b;
                w0.T0(c0597a.f48771a, new Runnable() { // from class: rc.t
                    @Override // java.lang.Runnable
                    public final void run() {
                        uVar.A(r0.f48768a, u.a.this.f48769b);
                    }
                });
            }
        }

        public void i() {
            Iterator it = this.f48770c.iterator();
            while (it.hasNext()) {
                C0597a c0597a = (C0597a) it.next();
                final u uVar = c0597a.f48772b;
                w0.T0(c0597a.f48771a, new Runnable() { // from class: rc.r
                    @Override // java.lang.Runnable
                    public final void run() {
                        uVar.z(r0.f48768a, u.a.this.f48769b);
                    }
                });
            }
        }

        public void j() {
            Iterator it = this.f48770c.iterator();
            while (it.hasNext()) {
                C0597a c0597a = (C0597a) it.next();
                final u uVar = c0597a.f48772b;
                w0.T0(c0597a.f48771a, new Runnable() { // from class: rc.s
                    @Override // java.lang.Runnable
                    public final void run() {
                        uVar.w(r0.f48768a, u.a.this.f48769b);
                    }
                });
            }
        }

        public void k(final int i10) {
            Iterator it = this.f48770c.iterator();
            while (it.hasNext()) {
                C0597a c0597a = (C0597a) it.next();
                final u uVar = c0597a.f48772b;
                w0.T0(c0597a.f48771a, new Runnable() { // from class: rc.q
                    @Override // java.lang.Runnable
                    public final void run() {
                        u.a.d(u.a.this, uVar, i10);
                    }
                });
            }
        }

        public void l(final Exception exc) {
            Iterator it = this.f48770c.iterator();
            while (it.hasNext()) {
                C0597a c0597a = (C0597a) it.next();
                final u uVar = c0597a.f48772b;
                w0.T0(c0597a.f48771a, new Runnable() { // from class: rc.o
                    @Override // java.lang.Runnable
                    public final void run() {
                        uVar.I(r0.f48768a, u.a.this.f48769b, exc);
                    }
                });
            }
        }

        public void m() {
            Iterator it = this.f48770c.iterator();
            while (it.hasNext()) {
                C0597a c0597a = (C0597a) it.next();
                final u uVar = c0597a.f48772b;
                w0.T0(c0597a.f48771a, new Runnable() { // from class: rc.p
                    @Override // java.lang.Runnable
                    public final void run() {
                        uVar.F(r0.f48768a, u.a.this.f48769b);
                    }
                });
            }
        }

        public void n(u uVar) {
            Iterator it = this.f48770c.iterator();
            while (it.hasNext()) {
                C0597a c0597a = (C0597a) it.next();
                if (c0597a.f48772b == uVar) {
                    this.f48770c.remove(c0597a);
                }
            }
        }

        public a o(int i10, r.b bVar) {
            return new a(this.f48770c, i10, bVar);
        }

        private a(CopyOnWriteArrayList copyOnWriteArrayList, int i10, r.b bVar) {
            this.f48770c = copyOnWriteArrayList;
            this.f48768a = i10;
            this.f48769b = bVar;
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
