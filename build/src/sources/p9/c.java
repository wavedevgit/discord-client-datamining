package p9;

import android.graphics.Canvas;
import android.graphics.drawable.Drawable;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c extends p9.b {

    /* renamed from: f  reason: collision with root package name */
    private final w8.b f41532f;

    /* renamed from: g  reason: collision with root package name */
    private final ScheduledExecutorService f41533g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f41534h;

    /* renamed from: i  reason: collision with root package name */
    private long f41535i;

    /* renamed from: j  reason: collision with root package name */
    private long f41536j;

    /* renamed from: k  reason: collision with root package name */
    private long f41537k;

    /* renamed from: l  reason: collision with root package name */
    private b f41538l;

    /* renamed from: m  reason: collision with root package name */
    private final Runnable f41539m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            synchronized (c.this) {
                try {
                    c.this.f41534h = false;
                    if (!c.this.t()) {
                        c.this.u();
                    } else if (c.this.f41538l != null) {
                        c.this.f41538l.i();
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
        this.f41534h = false;
        this.f41536j = 2000L;
        this.f41537k = 1000L;
        this.f41539m = new a();
        this.f41538l = bVar;
        this.f41532f = bVar2;
        this.f41533g = scheduledExecutorService;
    }

    public static p9.b r(p9.a aVar, b bVar, w8.b bVar2, ScheduledExecutorService scheduledExecutorService) {
        return new c(aVar, bVar, bVar2, scheduledExecutorService);
    }

    public static p9.b s(p9.a aVar, w8.b bVar, ScheduledExecutorService scheduledExecutorService) {
        return r(aVar, (b) aVar, bVar, scheduledExecutorService);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean t() {
        if (this.f41532f.now() - this.f41535i > this.f41536j) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public synchronized void u() {
        if (!this.f41534h) {
            this.f41534h = true;
            this.f41533g.schedule(this.f41539m, this.f41537k, TimeUnit.MILLISECONDS);
        }
    }

    @Override // p9.b, p9.a
    public boolean h(Drawable drawable, Canvas canvas, int i10) {
        this.f41535i = this.f41532f.now();
        boolean h10 = super.h(drawable, canvas, i10);
        u();
        return h10;
    }
}
