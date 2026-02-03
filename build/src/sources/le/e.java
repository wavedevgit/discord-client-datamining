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
        public static final class C0483a {

            /* renamed from: a  reason: collision with root package name */
            private final CopyOnWriteArrayList f37316a = new CopyOnWriteArrayList();

            /* JADX INFO: Access modifiers changed from: private */
            /* renamed from: le.e$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
            public static final class C0484a {

                /* renamed from: a  reason: collision with root package name */
                private final Handler f37317a;

                /* renamed from: b  reason: collision with root package name */
                private final a f37318b;

                /* renamed from: c  reason: collision with root package name */
                private boolean f37319c;

                public C0484a(Handler handler, a aVar) {
                    this.f37317a = handler;
                    this.f37318b = aVar;
                }

                public void d() {
                    this.f37319c = true;
                }
            }

            public void b(Handler handler, a aVar) {
                ne.a.e(handler);
                ne.a.e(aVar);
                d(aVar);
                this.f37316a.add(new C0484a(handler, aVar));
            }

            public void c(int i10, long j10, long j11) {
                final int i11;
                final long j12;
                final long j13;
                Iterator it = this.f37316a.iterator();
                while (it.hasNext()) {
                    final C0484a c0484a = (C0484a) it.next();
                    if (!c0484a.f37319c) {
                        i11 = i10;
                        j12 = j10;
                        j13 = j11;
                        c0484a.f37317a.post(new Runnable() { // from class: le.d
                            @Override // java.lang.Runnable
                            public final void run() {
                                e.a.C0483a.C0484a.this.f37318b.u(i11, j12, j13);
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
                Iterator it = this.f37316a.iterator();
                while (it.hasNext()) {
                    C0484a c0484a = (C0484a) it.next();
                    if (c0484a.f37318b == aVar) {
                        c0484a.d();
                        this.f37316a.remove(c0484a);
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
