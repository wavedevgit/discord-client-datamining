package o9;

import android.graphics.Canvas;
import android.graphics.drawable.Drawable;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c extends o9.b {

    /* renamed from: f  reason: collision with root package name */
    private final v8.b f41565f;

    /* renamed from: g  reason: collision with root package name */
    private final ScheduledExecutorService f41566g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f41567h;

    /* renamed from: i  reason: collision with root package name */
    private long f41568i;

    /* renamed from: j  reason: collision with root package name */
    private long f41569j;

    /* renamed from: k  reason: collision with root package name */
    private long f41570k;

    /* renamed from: l  reason: collision with root package name */
    private b f41571l;

    /* renamed from: m  reason: collision with root package name */
    private final Runnable f41572m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            synchronized (c.this) {
                try {
                    c.this.f41567h = false;
                    if (!c.this.t()) {
                        c.this.u();
                    } else if (c.this.f41571l != null) {
                        c.this.f41571l.i();
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
        this.f41567h = false;
        this.f41569j = 2000L;
        this.f41570k = 1000L;
        this.f41572m = new a();
        this.f41571l = bVar;
        this.f41565f = bVar2;
        this.f41566g = scheduledExecutorService;
    }

    public static o9.b r(o9.a aVar, b bVar, v8.b bVar2, ScheduledExecutorService scheduledExecutorService) {
        return new c(aVar, bVar, bVar2, scheduledExecutorService);
    }

    public static o9.b s(o9.a aVar, v8.b bVar, ScheduledExecutorService scheduledExecutorService) {
        return r(aVar, (b) aVar, bVar, scheduledExecutorService);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean t() {
        if (this.f41565f.now() - this.f41568i > this.f41569j) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public synchronized void u() {
        if (!this.f41567h) {
            this.f41567h = true;
            this.f41566g.schedule(this.f41572m, this.f41570k, TimeUnit.MILLISECONDS);
        }
    }

    @Override // o9.b, o9.a
    public boolean h(Drawable drawable, Canvas canvas, int i10) {
        this.f41568i = this.f41565f.now();
        boolean h10 = super.h(drawable, canvas, i10);
        u();
        return h10;
    }
}
