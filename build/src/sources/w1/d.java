package w1;

import android.os.CancellationSignal;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private boolean f51833a;

    /* renamed from: b  reason: collision with root package name */
    private a f51834b;

    /* renamed from: c  reason: collision with root package name */
    private Object f51835c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f51836d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void onCancel();
    }

    private void c() {
        while (this.f51836d) {
            try {
                wait();
            } catch (InterruptedException unused) {
            }
        }
    }

    public void a() {
        synchronized (this) {
            try {
                if (this.f51833a) {
                    return;
                }
                this.f51833a = true;
                this.f51836d = true;
                a aVar = this.f51834b;
                Object obj = this.f51835c;
                if (aVar != null) {
                    try {
                        aVar.onCancel();
                    } catch (Throwable th2) {
                        synchronized (this) {
                            this.f51836d = false;
                            notifyAll();
                            throw th2;
                        }
                    }
                }
                if (obj != null) {
                    ((CancellationSignal) obj).cancel();
                }
                synchronized (this) {
                    this.f51836d = false;
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
                if (this.f51834b == aVar) {
                    return;
                }
                this.f51834b = aVar;
                if (this.f51833a && aVar != null) {
                    aVar.onCancel();
                }
            } finally {
            }
        }
    }
}
