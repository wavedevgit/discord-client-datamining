package w1;

import android.os.CancellationSignal;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private boolean f53266a;

    /* renamed from: b  reason: collision with root package name */
    private a f53267b;

    /* renamed from: c  reason: collision with root package name */
    private Object f53268c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f53269d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void onCancel();
    }

    private void c() {
        while (this.f53269d) {
            try {
                wait();
            } catch (InterruptedException unused) {
            }
        }
    }

    public void a() {
        synchronized (this) {
            try {
                if (this.f53266a) {
                    return;
                }
                this.f53266a = true;
                this.f53269d = true;
                a aVar = this.f53267b;
                Object obj = this.f53268c;
                if (aVar != null) {
                    try {
                        aVar.onCancel();
                    } catch (Throwable th2) {
                        synchronized (this) {
                            this.f53269d = false;
                            notifyAll();
                            throw th2;
                        }
                    }
                }
                if (obj != null) {
                    ((CancellationSignal) obj).cancel();
                }
                synchronized (this) {
                    this.f53269d = false;
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
                if (this.f53267b == aVar) {
                    return;
                }
                this.f53267b = aVar;
                if (this.f53266a && aVar != null) {
                    aVar.onCancel();
                }
            } finally {
            }
        }
    }
}
