package o9;

import android.graphics.Canvas;
import android.graphics.drawable.Drawable;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c extends o9.b {

    /* renamed from: f  reason: collision with root package name */
    private final v8.b f41613f;

    /* renamed from: g  reason: collision with root package name */
    private final ScheduledExecutorService f41614g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f41615h;

    /* renamed from: i  reason: collision with root package name */
    private long f41616i;

    /* renamed from: j  reason: collision with root package name */
    private long f41617j;

    /* renamed from: k  reason: collision with root package name */
    private long f41618k;

    /* renamed from: l  reason: collision with root package name */
    private b f41619l;

    /* renamed from: m  reason: collision with root package name */
    private final Runnable f41620m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            synchronized (c.this) {
                try {
                    c.this.f41615h = false;
                    if (!c.this.t()) {
                        c.this.u();
                    } else if (c.this.f41619l != null) {
                        c.this.f41619l.i();
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
        this.f41615h = false;
        this.f41617j = 2000L;
        this.f41618k = 1000L;
        this.f41620m = new a();
        this.f41619l = bVar;
        this.f41613f = bVar2;
        this.f41614g = scheduledExecutorService;
    }

    public static o9.b r(o9.a aVar, b bVar, v8.b bVar2, ScheduledExecutorService scheduledExecutorService) {
        return new c(aVar, bVar, bVar2, scheduledExecutorService);
    }

    public static o9.b s(o9.a aVar, v8.b bVar, ScheduledExecutorService scheduledExecutorService) {
        return r(aVar, (b) aVar, bVar, scheduledExecutorService);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean t() {
        if (this.f41613f.now() - this.f41616i > this.f41617j) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public synchronized void u() {
        if (!this.f41615h) {
            this.f41615h = true;
            this.f41614g.schedule(this.f41620m, this.f41618k, TimeUnit.MILLISECONDS);
        }
    }

    @Override // o9.b, o9.a
    public boolean h(Drawable drawable, Canvas canvas, int i10) {
        this.f41616i = this.f41613f.now();
        boolean h10 = super.h(drawable, canvas, i10);
        u();
        return h10;
    }
}
