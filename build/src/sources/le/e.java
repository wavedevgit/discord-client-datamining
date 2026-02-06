package le;

import android.os.Handler;
import java.util.Iterator;
import java.util.concurrent.CopyOnWriteArrayList;
import le.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface e {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {

        /* renamed from: le.e$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0481a {

            /* renamed from: a  reason: collision with root package name */
            private final CopyOnWriteArrayList f36105a = new CopyOnWriteArrayList();

            /* JADX INFO: Access modifiers changed from: private */
            /* renamed from: le.e$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
            public static final class C0482a {

                /* renamed from: a  reason: collision with root package name */
                private final Handler f36106a;

                /* renamed from: b  reason: collision with root package name */
                private final a f36107b;

                /* renamed from: c  reason: collision with root package name */
                private boolean f36108c;

                public C0482a(Handler handler, a aVar) {
                    this.f36106a = handler;
                    this.f36107b = aVar;
                }

                public void d() {
                    this.f36108c = true;
                }
            }

            public void b(Handler handler, a aVar) {
                ne.a.e(handler);
                ne.a.e(aVar);
                d(aVar);
                this.f36105a.add(new C0482a(handler, aVar));
            }

            public void c(int i10, long j10, long j11) {
                final int i11;
                final long j12;
                final long j13;
                Iterator it = this.f36105a.iterator();
                while (it.hasNext()) {
                    final C0482a c0482a = (C0482a) it.next();
                    if (!c0482a.f36108c) {
                        i11 = i10;
                        j12 = j10;
                        j13 = j11;
                        c0482a.f36106a.post(new Runnable() { // from class: le.d
                            @Override // java.lang.Runnable
                            public final void run() {
                                e.a.C0481a.C0482a.this.f36107b.u(i11, j12, j13);
                            }
                        });
                    } else {
                        i11 = i10;
                        j12 = j10;
                        j13 = j11;
                    }
                    i10 = i11;
                    j10 = j12;
                    j11 = j13;
                }
            }

            public void d(a aVar) {
                Iterator it = this.f36105a.iterator();
                while (it.hasNext()) {
                    C0482a c0482a = (C0482a) it.next();
                    if (c0482a.f36107b == aVar) {
                        c0482a.d();
                        this.f36105a.remove(c0482a);
                    }
                }
            }
        }

        void u(int i10, long j10, long j11);
    }

    void a(a aVar);

    void b(Handler handler, a aVar);

    default long c() {
        return -9223372036854775807L;
    }

    c0 e();

    long f();
}
