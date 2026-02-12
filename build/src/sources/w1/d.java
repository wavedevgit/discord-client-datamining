package w1;

import android.os.CancellationSignal;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private boolean f52096a;

    /* renamed from: b  reason: collision with root package name */
    private a f52097b;

    /* renamed from: c  reason: collision with root package name */
    private Object f52098c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f52099d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void onCancel();
    }

    private void c() {
        while (this.f52099d) {
            try {
                wait();
            } catch (InterruptedException unused) {
            }
        }
    }

    public void a() {
        synchronized (this) {
            try {
                if (this.f52096a) {
                    return;
                }
                this.f52096a = true;
                this.f52099d = true;
                a aVar = this.f52097b;
                Object obj = this.f52098c;
                if (aVar != null) {
                    try {
                        aVar.onCancel();
                    } catch (Throwable th2) {
                        synchronized (this) {
                            this.f52099d = false;
                            notifyAll();
                            throw th2;
                        }
                    }
                }
                if (obj != null) {
                    ((CancellationSignal) obj).cancel();
                }
                synchronized (this) {
                    this.f52099d = false;
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
                if (this.f52097b == aVar) {
                    return;
                }
                this.f52097b = aVar;
                if (this.f52096a && aVar != null) {
                    aVar.onCancel();
                }
            } finally {
            }
        }
    }
}
