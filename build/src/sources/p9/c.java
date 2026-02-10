package p9;

import android.graphics.Canvas;
import android.graphics.drawable.Drawable;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c extends p9.b {

    /* renamed from: f  reason: collision with root package name */
    private final w8.b f41531f;

    /* renamed from: g  reason: collision with root package name */
    private final ScheduledExecutorService f41532g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f41533h;

    /* renamed from: i  reason: collision with root package name */
    private long f41534i;

    /* renamed from: j  reason: collision with root package name */
    private long f41535j;

    /* renamed from: k  reason: collision with root package name */
    private long f41536k;

    /* renamed from: l  reason: collision with root package name */
    private b f41537l;

    /* renamed from: m  reason: collision with root package name */
    private final Runnable f41538m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            synchronized (c.this) {
                try {
                    c.this.f41533h = false;
                    if (!c.this.t()) {
                        c.this.u();
                    } else if (c.this.f41537l != null) {
                        c.this.f41537l.i();
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

    private c(p9.a aVar, b bVar, w8.b bVar2, ScheduledExecutorService scheduledExecutorService) {
        super(aVar);
        this.f41533h = false;
        this.f41535j = 2000L;
        this.f41536k = 1000L;
        this.f41538m = new a();
        this.f41537l = bVar;
        this.f41531f = bVar2;
        this.f41532g = scheduledExecutorService;
    }

    public static p9.b r(p9.a aVar, b bVar, w8.b bVar2, ScheduledExecutorService scheduledExecutorService) {
        return new c(aVar, bVar, bVar2, scheduledExecutorService);
    }

    public static p9.b s(p9.a aVar, w8.b bVar, ScheduledExecutorService scheduledExecutorService) {
        return r(aVar, (b) aVar, bVar, scheduledExecutorService);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean t() {
        if (this.f41531f.now() - this.f41534i > this.f41535j) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public synchronized void u() {
        if (!this.f41533h) {
            this.f41533h = true;
            this.f41532g.schedule(this.f41538m, this.f41536k, TimeUnit.MILLISECONDS);
        }
    }

    @Override // p9.b, p9.a
    public boolean h(Drawable drawable, Canvas canvas, int i10) {
        this.f41534i = this.f41531f.now();
        boolean h10 = super.h(drawable, canvas, i10);
        u();
        return h10;
    }
}
