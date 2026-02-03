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
        public static final class C0467a {

            /* renamed from: a  reason: collision with root package name */
            private final CopyOnWriteArrayList f36785a = new CopyOnWriteArrayList();

            /* JADX INFO: Access modifiers changed from: private */
            /* renamed from: le.e$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
            public static final class C0468a {

                /* renamed from: a  reason: collision with root package name */
                private final Handler f36786a;

                /* renamed from: b  reason: collision with root package name */
                private final a f36787b;

                /* renamed from: c  reason: collision with root package name */
                private boolean f36788c;

                public C0468a(Handler handler, a aVar) {
                    this.f36786a = handler;
                    this.f36787b = aVar;
                }

                public void d() {
                    this.f36788c = true;
                }
            }

            public void b(Handler handler, a aVar) {
                ne.a.e(handler);
                ne.a.e(aVar);
                d(aVar);
                this.f36785a.add(new C0468a(handler, aVar));
            }

            public void c(int i10, long j10, long j11) {
                final int i11;
                final long j12;
                final long j13;
                Iterator it = this.f36785a.iterator();
                while (it.hasNext()) {
                    final C0468a c0468a = (C0468a) it.next();
                    if (!c0468a.f36788c) {
                        i11 = i10;
                        j12 = j10;
                        j13 = j11;
                        c0468a.f36786a.post(new Runnable() { // from class: le.d
                            @Override // java.lang.Runnable
                            public final void run() {
                                e.a.C0467a.C0468a.this.f36787b.u(i11, j12, j13);
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
                Iterator it = this.f36785a.iterator();
                while (it.hasNext()) {
                    C0468a c0468a = (C0468a) it.next();
                    if (c0468a.f36787b == aVar) {
                        c0468a.d();
                        this.f36785a.remove(c0468a);
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
