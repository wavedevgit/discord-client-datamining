package w1;

import android.os.CancellationSignal;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private boolean f51830a;

    /* renamed from: b  reason: collision with root package name */
    private a f51831b;

    /* renamed from: c  reason: collision with root package name */
    private Object f51832c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f51833d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void onCancel();
    }

    private void c() {
        while (this.f51833d) {
            try {
                wait();
            } catch (InterruptedException unused) {
            }
        }
    }

    public void a() {
        synchronized (this) {
            try {
                if (this.f51830a) {
                    return;
                }
                this.f51830a = true;
                this.f51833d = true;
                a aVar = this.f51831b;
                Object obj = this.f51832c;
                if (aVar != null) {
                    try {
                        aVar.onCancel();
                    } catch (Throwable th2) {
                        synchronized (this) {
                            this.f51833d = false;
                            notifyAll();
                            throw th2;
                        }
                    }
                }
                if (obj != null) {
                    ((CancellationSignal) obj).cancel();
                }
                synchronized (this) {
                    this.f51833d = false;
                    notifyAll();
                }
            } finally {
            }
        }
    }

    public void b(a aVar) {
        synchronized (this) {
            try {
                c();
                if (this.f51831b == aVar) {
                    return;
                }
                this.f51831b = aVar;
                if (this.f51830a && aVar != null) {
                    aVar.onCancel();
                }
            } finally {
            }
        }
    }
}
