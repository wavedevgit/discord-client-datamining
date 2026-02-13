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
    private static final List f39565b = new ArrayList(50);

    /* renamed from: a  reason: collision with root package name */
    private final Handler f39566a;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b implements u.a {

        /* renamed from: a  reason: collision with root package name */
        private Message f39567a;

        /* renamed from: b  reason: collision with root package name */
        private q0 f39568b;

        private b() {
        }

        private void b() {
            this.f39567a = null;
            this.f39568b = null;
            q0.n(this);
        }

        @Override // oe.u.a
        public void a() {
            ((Message) oe.a.e(this.f39567a)).sendToTarget();
            b();
        }

        public boolean c(Handler handler) {
            boolean sendMessageAtFrontOfQueue = handler.sendMessageAtFrontOfQueue((Message) oe.a.e(this.f39567a));
            b();
            return sendMessageAtFrontOfQueue;
        }

        public b d(Message message, q0 q0Var) {
            this.f39567a = message;
            this.f39568b = q0Var;
            return this;
        }
    }

    public q0(Handler handler) {
        this.f39566a = handler;
    }

    private static b m() {
        b bVar;
        List list = f39565b;
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
        List list = f39565b;
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
        return m().d(this.f39566a.obtainMessage(i10), this);
    }

    @Override // oe.u
    public boolean b(int i10) {
        return this.f39566a.hasMessages(i10);
    }

    @Override // oe.u
    public u.a c(int i10, int i11, int i12, Object obj) {
        return m().d(this.f39566a.obtainMessage(i10, i11, i12, obj), this);
    }

    @Override // oe.u
    public u.a d(int i10, Object obj) {
        return m().d(this.f39566a.obtainMessage(i10, obj), this);
    }

    @Override // oe.u
    public void e(Object obj) {
        this.f39566a.removeCallbacksAndMessages(obj);
    }

    @Override // oe.u
    public Looper f() {
        return this.f39566a.getLooper();
    }

    @Override // oe.u
    public u.a g(int i10, int i11, int i12) {
        return m().d(this.f39566a.obtainMessage(i10, i11, i12), this);
    }

    @Override // oe.u
    public boolean h(int i10) {
        return this.f39566a.sendEmptyMessage(i10);
    }

    @Override // oe.u
    public boolean i(int i10, long j10) {
        return this.f39566a.sendEmptyMessageAtTime(i10, j10);
    }

    @Override // oe.u
    public void j(int i10) {
        this.f39566a.removeMessages(i10);
    }

    @Override // oe.u
    public boolean k(u.a aVar) {
        return ((b) aVar).c(this.f39566a);
    }

    @Override // oe.u
    public boolean post(Runnable runnable) {
        return this.f39566a.post(runnable);
    }
}
