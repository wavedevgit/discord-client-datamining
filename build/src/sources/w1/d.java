package w1;

import android.os.CancellationSignal;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private boolean f52028a;

    /* renamed from: b  reason: collision with root package name */
    private a f52029b;

    /* renamed from: c  reason: collision with root package name */
    private Object f52030c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f52031d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void onCancel();
    }

    private void c() {
        while (this.f52031d) {
            try {
                wait();
            } catch (InterruptedException unused) {
            }
        }
    }

    public void a() {
        synchronized (this) {
            try {
                if (this.f52028a) {
                    return;
                }
                this.f52028a = true;
                this.f52031d = true;
                a aVar = this.f52029b;
                Object obj = this.f52030c;
                if (aVar != null) {
                    try {
                        aVar.onCancel();
                    } catch (Throwable th2) {
                        synchronized (this) {
                            this.f52031d = false;
                            notifyAll();
                            throw th2;
                        }
                    }
                }
                if (obj != null) {
                    ((CancellationSignal) obj).cancel();
                }
                synchronized (this) {
                    this.f52031d = false;
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
                if (this.f52029b == aVar) {
                    return;
                }
                this.f52029b = aVar;
                if (this.f52028a && aVar != null) {
                    aVar.onCancel();
                }
            } finally {
            }
        }
    }
}
