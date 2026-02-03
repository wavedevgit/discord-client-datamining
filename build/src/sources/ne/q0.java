package ne;

import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import java.util.ArrayList;
import java.util.List;
import ne.u;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class q0 implements u {

    /* renamed from: b  reason: collision with root package name */
    private static final List f40117b = new ArrayList(50);

    /* renamed from: a  reason: collision with root package name */
    private final Handler f40118a;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b implements u.a {

        /* renamed from: a  reason: collision with root package name */
        private Message f40119a;

        /* renamed from: b  reason: collision with root package name */
        private q0 f40120b;

        private b() {
        }

        private void b() {
            this.f40119a = null;
            this.f40120b = null;
            q0.n(this);
        }

        @Override // ne.u.a
        public void a() {
            ((Message) ne.a.e(this.f40119a)).sendToTarget();
            b();
        }

        public boolean c(Handler handler) {
            boolean sendMessageAtFrontOfQueue = handler.sendMessageAtFrontOfQueue((Message) ne.a.e(this.f40119a));
            b();
            return sendMessageAtFrontOfQueue;
        }

        public b d(Message message, q0 q0Var) {
            this.f40119a = message;
            this.f40120b = q0Var;
            return this;
        }
    }

    public q0(Handler handler) {
        this.f40118a = handler;
    }

    private static b m() {
        b bVar;
        List list = f40117b;
        synchronized (list) {
            try {
                if (list.isEmpty()) {
                    bVar = new b();
                } else {
                    bVar = (b) list.remove(list.size() - 1);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return bVar;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void n(b bVar) {
        List list = f40117b;
        synchronized (list) {
            try {
                if (list.size() < 50) {
                    list.add(bVar);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // ne.u
    public u.a a(int i10) {
        return m().d(this.f40118a.obtainMessage(i10), this);
    }

    @Override // ne.u
    public boolean b(int i10) {
        return this.f40118a.hasMessages(i10);
    }

    @Override // ne.u
    public u.a c(int i10, int i11, int i12, Object obj) {
        return m().d(this.f40118a.obtainMessage(i10, i11, i12, obj), this);
    }

    @Override // ne.u
    public u.a d(int i10, Object obj) {
        return m().d(this.f40118a.obtainMessage(i10, obj), this);
    }

    @Override // ne.u
    public void e(Object obj) {
        this.f40118a.removeCallbacksAndMessages(obj);
    }

    @Override // ne.u
    public Looper f() {
        return this.f40118a.getLooper();
    }

    @Override // ne.u
    public boolean g(u.a aVar) {
        return ((b) aVar).c(this.f40118a);
    }

    @Override // ne.u
    public u.a h(int i10, int i11, int i12) {
        return m().d(this.f40118a.obtainMessage(i10, i11, i12), this);
    }

    @Override // ne.u
    public boolean i(int i10) {
        return this.f40118a.sendEmptyMessage(i10);
    }

    @Override // ne.u
    public boolean j(int i10, long j10) {
        return this.f40118a.sendEmptyMessageAtTime(i10, j10);
    }

    @Override // ne.u
    public void k(int i10) {
        this.f40118a.removeMessages(i10);
    }

    @Override // ne.u
    public boolean post(Runnable runnable) {
        return this.f40118a.post(runnable);
    }
}
