package w1;

import android.os.CancellationSignal;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private boolean f53314a;

    /* renamed from: b  reason: collision with root package name */
    private a f53315b;

    /* renamed from: c  reason: collision with root package name */
    private Object f53316c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f53317d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void onCancel();
    }

    private void c() {
        while (this.f53317d) {
            try {
                wait();
            } catch (InterruptedException unused) {
            }
        }
    }

    public void a() {
        synchronized (this) {
            try {
                if (this.f53314a) {
                    return;
                }
                this.f53314a = true;
                this.f53317d = true;
                a aVar = this.f53315b;
                Object obj = this.f53316c;
                if (aVar != null) {
                    try {
                        aVar.onCancel();
                    } catch (Throwable th2) {
                        synchronized (this) {
                            this.f53317d = false;
                            notifyAll();
                            throw th2;
                        }
                    }
                }
                if (obj != null) {
                    ((CancellationSignal) obj).cancel();
                }
                synchronized (this) {
                    this.f53317d = false;
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
                if (this.f53315b == aVar) {
                    return;
                }
                this.f53315b = aVar;
                if (this.f53314a && aVar != null) {
                    aVar.onCancel();
                }
            } finally {
            }
        }
    }
}
