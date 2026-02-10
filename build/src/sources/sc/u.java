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
        public final int f49732a;

        /* renamed from: b  reason: collision with root package name */
        public final r.b f49733b;

        /* renamed from: c  reason: collision with root package name */
        private final CopyOnWriteArrayList f49734c;

        /* renamed from: sc.u$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        private static final class C0666a {

            /* renamed from: a  reason: collision with root package name */
            public Handler f49735a;

            /* renamed from: b  reason: collision with root package name */
            public u f49736b;

            public C0666a(Handler handler, u uVar) {
                this.f49735a = handler;
                this.f49736b = uVar;
            }
        }

        public a() {
            this(new CopyOnWriteArrayList(), 0, null);
        }

        public static /* synthetic */ void d(a aVar, u uVar, int i10) {
            uVar.I(aVar.f49732a, aVar.f49733b);
            uVar.A(aVar.f49732a, aVar.f49733b, i10);
        }

        public void g(Handler handler, u uVar) {
            oe.a.e(handler);
            oe.a.e(uVar);
            this.f49734c.add(new C0666a(handler, uVar));
        }

        public void h() {
            Iterator it = this.f49734c.iterator();
            while (it.hasNext()) {
                C0666a c0666a = (C0666a) it.next();
                final u uVar = c0666a.f49736b;
                w0.T0(c0666a.f49735a, new Runnable() { // from class: sc.t
                    @Override // java.lang.Runnable
                    public final void run() {
                        uVar.u(r0.f49732a, u.a.this.f49733b);
                    }
                });
            }
        }

        public void i() {
            Iterator it = this.f49734c.iterator();
            while (it.hasNext()) {
                C0666a c0666a = (C0666a) it.next();
                final u uVar = c0666a.f49736b;
                w0.T0(c0666a.f49735a, new Runnable() { // from class: sc.r
                    @Override // java.lang.Runnable
                    public final void run() {
                        uVar.J(r0.f49732a, u.a.this.f49733b);
                    }
                });
            }
        }

        public void j() {
            Iterator it = this.f49734c.iterator();
            while (it.hasNext()) {
                C0666a c0666a = (C0666a) it.next();
                final u uVar = c0666a.f49736b;
                w0.T0(c0666a.f49735a, new Runnable() { // from class: sc.s
                    @Override // java.lang.Runnable
                    public final void run() {
                        uVar.E(r0.f49732a, u.a.this.f49733b);
                    }
                });
            }
        }

        public void k(final int i10) {
            Iterator it = this.f49734c.iterator();
            while (it.hasNext()) {
                C0666a c0666a = (C0666a) it.next();
                final u uVar = c0666a.f49736b;
                w0.T0(c0666a.f49735a, new Runnable() { // from class: sc.q
                    @Override // java.lang.Runnable
                    public final void run() {
                        u.a.d(u.a.this, uVar, i10);
                    }
                });
            }
        }

        public void l(final Exception exc) {
            Iterator it = this.f49734c.iterator();
            while (it.hasNext()) {
                C0666a c0666a = (C0666a) it.next();
                final u uVar = c0666a.f49736b;
                w0.T0(c0666a.f49735a, new Runnable() { // from class: sc.o
                    @Override // java.lang.Runnable
                    public final void run() {
                        uVar.B(r0.f49732a, u.a.this.f49733b, exc);
                    }
                });
            }
        }

        public void m() {
            Iterator it = this.f49734c.iterator();
            while (it.hasNext()) {
                C0666a c0666a = (C0666a) it.next();
                final u uVar = c0666a.f49736b;
                w0.T0(c0666a.f49735a, new Runnable() { // from class: sc.p
                    @Override // java.lang.Runnable
                    public final void run() {
                        uVar.t(r0.f49732a, u.a.this.f49733b);
                    }
                });
            }
        }

        public void n(u uVar) {
            Iterator it = this.f49734c.iterator();
            while (it.hasNext()) {
                C0666a c0666a = (C0666a) it.next();
                if (c0666a.f49736b == uVar) {
                    this.f49734c.remove(c0666a);
                }
            }
        }

        public a o(int i10, r.b bVar) {
            return new a(this.f49734c, i10, bVar);
        }

        private a(CopyOnWriteArrayList copyOnWriteArrayList, int i10, r.b bVar) {
            this.f49734c = copyOnWriteArrayList;
            this.f49732a = i10;
            this.f49733b = bVar;
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
