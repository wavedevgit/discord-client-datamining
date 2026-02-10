package w1;

import android.os.CancellationSignal;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private boolean f52095a;

    /* renamed from: b  reason: collision with root package name */
    private a f52096b;

    /* renamed from: c  reason: collision with root package name */
    private Object f52097c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f52098d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void onCancel();
    }

    private void c() {
        while (this.f52098d) {
            try {
                wait();
            } catch (InterruptedException unused) {
            }
        }
    }

    public void a() {
        synchronized (this) {
            try {
                if (this.f52095a) {
                    return;
                }
                this.f52095a = true;
                this.f52098d = true;
                a aVar = this.f52096b;
                Object obj = this.f52097c;
                if (aVar != null) {
                    try {
                        aVar.onCancel();
                    } catch (Throwable th2) {
                        synchronized (this) {
                            this.f52098d = false;
                            notifyAll();
                            throw th2;
                        }
                    }
                }
                if (obj != null) {
                    ((CancellationSignal) obj).cancel();
                }
                synchronized (this) {
                    this.f52098d = false;
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
                if (this.f52096b == aVar) {
                    return;
                }
                this.f52096b = aVar;
                if (this.f52095a && aVar != null) {
                    aVar.onCancel();
                }
            } finally {
            }
        }
    }
}
