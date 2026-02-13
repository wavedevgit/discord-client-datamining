package p9;

import android.graphics.Canvas;
import android.graphics.drawable.Drawable;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c extends p9.b {

    /* renamed from: f  reason: collision with root package name */
    private final w8.b f42100f;

    /* renamed from: g  reason: collision with root package name */
    private final ScheduledExecutorService f42101g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f42102h;

    /* renamed from: i  reason: collision with root package name */
    private long f42103i;

    /* renamed from: j  reason: collision with root package name */
    private long f42104j;

    /* renamed from: k  reason: collision with root package name */
    private long f42105k;

    /* renamed from: l  reason: collision with root package name */
    private b f42106l;

    /* renamed from: m  reason: collision with root package name */
    private final Runnable f42107m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            synchronized (c.this) {
                try {
                    c.this.f42102h = false;
                    if (!c.this.t()) {
                        c.this.u();
                    } else if (c.this.f42106l != null) {
                        c.this.f42106l.i();
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
        this.f42102h = false;
        this.f42104j = 2000L;
        this.f42105k = 1000L;
        this.f42107m = new a();
        this.f42106l = bVar;
        this.f42100f = bVar2;
        this.f42101g = scheduledExecutorService;
    }

    public static p9.b r(p9.a aVar, b bVar, w8.b bVar2, ScheduledExecutorService scheduledExecutorService) {
        return new c(aVar, bVar, bVar2, scheduledExecutorService);
    }

    public static p9.b s(p9.a aVar, w8.b bVar, ScheduledExecutorService scheduledExecutorService) {
        return r(aVar, (b) aVar, bVar, scheduledExecutorService);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean t() {
        if (this.f42100f.now() - this.f42103i > this.f42104j) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public synchronized void u() {
        if (!this.f42102h) {
            this.f42102h = true;
            this.f42101g.schedule(this.f42107m, this.f42105k, TimeUnit.MILLISECONDS);
        }
    }

    @Override // p9.b, p9.a
    public boolean h(Drawable drawable, Canvas canvas, int i10) {
        this.f42103i = this.f42100f.now();
        boolean h10 = super.h(drawable, canvas, i10);
        u();
        return h10;
    }
}
