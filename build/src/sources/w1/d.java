package w1;

import android.os.CancellationSignal;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private boolean f53066a;

    /* renamed from: b  reason: collision with root package name */
    private a f53067b;

    /* renamed from: c  reason: collision with root package name */
    private Object f53068c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f53069d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void onCancel();
    }

    private void c() {
        while (this.f53069d) {
            try {
                wait();
            } catch (InterruptedException unused) {
            }
        }
    }

    public void a() {
        synchronized (this) {
            try {
                if (this.f53066a) {
                    return;
                }
                this.f53066a = true;
                this.f53069d = true;
                a aVar = this.f53067b;
                Object obj = this.f53068c;
                if (aVar != null) {
                    try {
                        aVar.onCancel();
                    } catch (Throwable th2) {
                        synchronized (this) {
                            this.f53069d = false;
                            notifyAll();
                            throw th2;
                        }
                    }
                }
                if (obj != null) {
                    ((CancellationSignal) obj).cancel();
                }
                synchronized (this) {
                    this.f53069d = false;
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
                if (this.f53067b == aVar) {
                    return;
                }
                this.f53067b = aVar;
                if (this.f53066a && aVar != null) {
                    aVar.onCancel();
                }
            } finally {
            }
        }
    }
}
