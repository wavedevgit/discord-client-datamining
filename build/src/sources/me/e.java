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
        public static final class C0515a {

            /* renamed from: a  reason: collision with root package name */
            private final CopyOnWriteArrayList f36358a = new CopyOnWriteArrayList();

            /* JADX INFO: Access modifiers changed from: private */
            /* renamed from: me.e$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
            public static final class C0516a {

                /* renamed from: a  reason: collision with root package name */
                private final Handler f36359a;

                /* renamed from: b  reason: collision with root package name */
                private final a f36360b;

                /* renamed from: c  reason: collision with root package name */
                private boolean f36361c;

                public C0516a(Handler handler, a aVar) {
                    this.f36359a = handler;
                    this.f36360b = aVar;
                }

                public void d() {
                    this.f36361c = true;
                }
            }

            public void b(Handler handler, a aVar) {
                oe.a.e(handler);
                oe.a.e(aVar);
                d(aVar);
                this.f36358a.add(new C0516a(handler, aVar));
            }

            public void c(int i10, long j10, long j11) {
                final int i11;
                final long j12;
                final long j13;
                Iterator it = this.f36358a.iterator();
                while (it.hasNext()) {
                    final C0516a c0516a = (C0516a) it.next();
                    if (!c0516a.f36361c) {
                        i11 = i10;
                        j12 = j10;
                        j13 = j11;
                        c0516a.f36359a.post(new Runnable() { // from class: me.d
                            @Override // java.lang.Runnable
                            public final void run() {
                                e.a.C0515a.C0516a.this.f36360b.w(i11, j12, j13);
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
                Iterator it = this.f36358a.iterator();
                while (it.hasNext()) {
                    C0516a c0516a = (C0516a) it.next();
                    if (c0516a.f36360b == aVar) {
                        c0516a.d();
                        this.f36358a.remove(c0516a);
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
