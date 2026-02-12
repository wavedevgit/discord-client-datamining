package oe;

import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import java.util.ArrayList;
import java.util.List;
import oe.u;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class q0 implements u {

    /* renamed from: b  reason: collision with root package name */
    private static final List f38997b = new ArrayList(50);

    /* renamed from: a  reason: collision with root package name */
    private final Handler f38998a;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b implements u.a {

        /* renamed from: a  reason: collision with root package name */
        private Message f38999a;

        /* renamed from: b  reason: collision with root package name */
        private q0 f39000b;

        private b() {
        }

        private void b() {
            this.f38999a = null;
            this.f39000b = null;
            q0.n(this);
        }

        @Override // oe.u.a
        public void a() {
            ((Message) oe.a.e(this.f38999a)).sendToTarget();
            b();
        }

        public boolean c(Handler handler) {
            boolean sendMessageAtFrontOfQueue = handler.sendMessageAtFrontOfQueue((Message) oe.a.e(this.f38999a));
            b();
            return sendMessageAtFrontOfQueue;
        }

        public b d(Message message, q0 q0Var) {
            this.f38999a = message;
            this.f39000b = q0Var;
            return this;
        }
    }

    public q0(Handler handler) {
        this.f38998a = handler;
    }

    private static b m() {
        b bVar;
        List list = f38997b;
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
        List list = f38997b;
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

    @Override // oe.u
    public u.a a(int i10) {
        return m().d(this.f38998a.obtainMessage(i10), this);
    }

    @Override // oe.u
    public boolean b(int i10) {
        return this.f38998a.hasMessages(i10);
    }

    @Override // oe.u
    public u.a c(int i10, int i11, int i12, Object obj) {
        return m().d(this.f38998a.obtainMessage(i10, i11, i12, obj), this);
    }

    @Override // oe.u
    public u.a d(int i10, Object obj) {
        return m().d(this.f38998a.obtainMessage(i10, obj), this);
    }

    @Override // oe.u
    public void e(Object obj) {
        this.f38998a.removeCallbacksAndMessages(obj);
    }

    @Override // oe.u
    public Looper f() {
        return this.f38998a.getLooper();
    }

    @Override // oe.u
    public u.a g(int i10, int i11, int i12) {
        return m().d(this.f38998a.obtainMessage(i10, i11, i12), this);
    }

    @Override // oe.u
    public boolean h(int i10) {
        return this.f38998a.sendEmptyMessage(i10);
    }

    @Override // oe.u
    public boolean i(int i10, long j10) {
        return this.f38998a.sendEmptyMessageAtTime(i10, j10);
    }

    @Override // oe.u
    public void j(int i10) {
        this.f38998a.removeMessages(i10);
    }

    @Override // oe.u
    public boolean k(u.a aVar) {
        return ((b) aVar).c(this.f38998a);
    }

    @Override // oe.u
    public boolean post(Runnable runnable) {
        return this.f38998a.post(runnable);
    }
}
