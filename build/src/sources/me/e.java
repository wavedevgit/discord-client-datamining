package me;

import android.os.Handler;
import java.util.Iterator;
import java.util.concurrent.CopyOnWriteArrayList;
import me.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface e {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {

        /* renamed from: me.e$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0533a {

            /* renamed from: a  reason: collision with root package name */
            private final CopyOnWriteArrayList f36983a = new CopyOnWriteArrayList();

            /* JADX INFO: Access modifiers changed from: private */
            /* renamed from: me.e$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
            public static final class C0534a {

                /* renamed from: a  reason: collision with root package name */
                private final Handler f36984a;

                /* renamed from: b  reason: collision with root package name */
                private final a f36985b;

                /* renamed from: c  reason: collision with root package name */
                private boolean f36986c;

                public C0534a(Handler handler, a aVar) {
                    this.f36984a = handler;
                    this.f36985b = aVar;
                }

                public void d() {
                    this.f36986c = true;
                }
            }

            public void b(Handler handler, a aVar) {
                oe.a.e(handler);
                oe.a.e(aVar);
                d(aVar);
                this.f36983a.add(new C0534a(handler, aVar));
            }

            public void c(int i10, long j10, long j11) {
                final int i11;
                final long j12;
                final long j13;
                Iterator it = this.f36983a.iterator();
                while (it.hasNext()) {
                    final C0534a c0534a = (C0534a) it.next();
                    if (!c0534a.f36986c) {
                        i11 = i10;
                        j12 = j10;
                        j13 = j11;
                        c0534a.f36984a.post(new Runnable() { // from class: me.d
                            @Override // java.lang.Runnable
                            public final void run() {
                                e.a.C0533a.C0534a.this.f36985b.w(i11, j12, j13);
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
                Iterator it = this.f36983a.iterator();
                while (it.hasNext()) {
                    C0534a c0534a = (C0534a) it.next();
                    if (c0534a.f36985b == aVar) {
                        c0534a.d();
                        this.f36983a.remove(c0534a);
                    }
                }
            }
        }

        void w(int i10, long j10, long j11);
    }

    void a(a aVar);

    default long b() {
        return -9223372036854775807L;
    }

    void d(Handler handler, a aVar);

    c0 e();

    long f();
}
