package o9;

import android.graphics.Canvas;
import android.graphics.drawable.Drawable;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c extends o9.b {

    /* renamed from: f  reason: collision with root package name */
    private final v8.b f42342f;

    /* renamed from: g  reason: collision with root package name */
    private final ScheduledExecutorService f42343g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f42344h;

    /* renamed from: i  reason: collision with root package name */
    private long f42345i;

    /* renamed from: j  reason: collision with root package name */
    private long f42346j;

    /* renamed from: k  reason: collision with root package name */
    private long f42347k;

    /* renamed from: l  reason: collision with root package name */
    private b f42348l;

    /* renamed from: m  reason: collision with root package name */
    private final Runnable f42349m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            synchronized (c.this) {
                try {
                    c.this.f42344h = false;
                    if (!c.this.t()) {
                        c.this.u();
                    } else if (c.this.f42348l != null) {
                        c.this.f42348l.i();
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        void i();
    }

    private c(o9.a aVar, b bVar, v8.b bVar2, ScheduledExecutorService scheduledExecutorService) {
        super(aVar);
        this.f42344h = false;
        this.f42346j = 2000L;
        this.f42347k = 1000L;
        this.f42349m = new a();
        this.f42348l = bVar;
        this.f42342f = bVar2;
        this.f42343g = scheduledExecutorService;
    }

    public static o9.b r(o9.a aVar, b bVar, v8.b bVar2, ScheduledExecutorService scheduledExecutorService) {
        return new c(aVar, bVar, bVar2, scheduledExecutorService);
    }

    public static o9.b s(o9.a aVar, v8.b bVar, ScheduledExecutorService scheduledExecutorService) {
        return r(aVar, (b) aVar, bVar, scheduledExecutorService);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean t() {
        if (this.f42342f.now() - this.f42345i > this.f42346j) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public synchronized void u() {
        if (!this.f42344h) {
            this.f42344h = true;
            this.f42343g.schedule(this.f42349m, this.f42347k, TimeUnit.MILLISECONDS);
        }
    }

    @Override // o9.b, o9.a
    public boolean h(Drawable drawable, Canvas canvas, int i10) {
        this.f42345i = this.f42342f.now();
        boolean h10 = super.h(drawable, canvas, i10);
        u();
        return h10;
    }
}
