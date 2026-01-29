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
        public static final class C0478a {

            /* renamed from: a  reason: collision with root package name */
            private final CopyOnWriteArrayList f37186a = new CopyOnWriteArrayList();

            /* JADX INFO: Access modifiers changed from: private */
            /* renamed from: le.e$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
            public static final class C0479a {

                /* renamed from: a  reason: collision with root package name */
                private final Handler f37187a;

                /* renamed from: b  reason: collision with root package name */
                private final a f37188b;

                /* renamed from: c  reason: collision with root package name */
                private boolean f37189c;

                public C0479a(Handler handler, a aVar) {
                    this.f37187a = handler;
                    this.f37188b = aVar;
                }

                public void d() {
                    this.f37189c = true;
                }
            }

            public void b(Handler handler, a aVar) {
                ne.a.e(handler);
                ne.a.e(aVar);
                d(aVar);
                this.f37186a.add(new C0479a(handler, aVar));
            }

            public void c(int i10, long j10, long j11) {
                final int i11;
                final long j12;
                final long j13;
                Iterator it = this.f37186a.iterator();
                while (it.hasNext()) {
                    final C0479a c0479a = (C0479a) it.next();
                    if (!c0479a.f37189c) {
                        i11 = i10;
                        j12 = j10;
                        j13 = j11;
                        c0479a.f37187a.post(new Runnable() { // from class: le.d
                            @Override // java.lang.Runnable
                            public final void run() {
                                e.a.C0478a.C0479a.this.f37188b.u(i11, j12, j13);
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
                Iterator it = this.f37186a.iterator();
                while (it.hasNext()) {
                    C0479a c0479a = (C0479a) it.next();
                    if (c0479a.f37188b == aVar) {
                        c0479a.d();
                        this.f37186a.remove(c0479a);
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
