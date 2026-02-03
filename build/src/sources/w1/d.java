package w1;

import android.os.CancellationSignal;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private boolean f51611a;

    /* renamed from: b  reason: collision with root package name */
    private a f51612b;

    /* renamed from: c  reason: collision with root package name */
    private Object f51613c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f51614d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void onCancel();
    }

    private void c() {
        while (this.f51614d) {
            try {
                wait();
            } catch (InterruptedException unused) {
            }
        }
    }

    public void a() {
        synchronized (this) {
            try {
                if (this.f51611a) {
                    return;
                }
                this.f51611a = true;
                this.f51614d = true;
                a aVar = this.f51612b;
                Object obj = this.f51613c;
                if (aVar != null) {
                    try {
                        aVar.onCancel();
                    } catch (Throwable th2) {
                        synchronized (this) {
                            this.f51614d = false;
                            notifyAll();
                            throw th2;
                        }
                    }
                }
                if (obj != null) {
                    ((CancellationSignal) obj).cancel();
                }
                synchronized (this) {
                    this.f51614d = false;
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
                if (this.f51612b == aVar) {
                    return;
                }
                this.f51612b = aVar;
                if (this.f51611a && aVar != null) {
                    aVar.onCancel();
                }
            } finally {
            }
        }
    }
}
