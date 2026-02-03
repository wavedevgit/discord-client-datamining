package o9;

import android.graphics.Canvas;
import android.graphics.drawable.Drawable;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c extends o9.b {

    /* renamed from: f  reason: collision with root package name */
    private final v8.b f42636f;

    /* renamed from: g  reason: collision with root package name */
    private final ScheduledExecutorService f42637g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f42638h;

    /* renamed from: i  reason: collision with root package name */
    private long f42639i;

    /* renamed from: j  reason: collision with root package name */
    private long f42640j;

    /* renamed from: k  reason: collision with root package name */
    private long f42641k;

    /* renamed from: l  reason: collision with root package name */
    private b f42642l;

    /* renamed from: m  reason: collision with root package name */
    private final Runnable f42643m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            synchronized (c.this) {
                try {
                    c.this.f42638h = false;
                    if (!c.this.t()) {
                        c.this.u();
                    } else if (c.this.f42642l != null) {
                        c.this.f42642l.i();
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
        this.f42638h = false;
        this.f42640j = 2000L;
        this.f42641k = 1000L;
        this.f42643m = new a();
        this.f42642l = bVar;
        this.f42636f = bVar2;
        this.f42637g = scheduledExecutorService;
    }

    public static o9.b r(o9.a aVar, b bVar, v8.b bVar2, ScheduledExecutorService scheduledExecutorService) {
        return new c(aVar, bVar, bVar2, scheduledExecutorService);
    }

    public static o9.b s(o9.a aVar, v8.b bVar, ScheduledExecutorService scheduledExecutorService) {
        return r(aVar, (b) aVar, bVar, scheduledExecutorService);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean t() {
        if (this.f42636f.now() - this.f42639i > this.f42640j) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public synchronized void u() {
        if (!this.f42638h) {
            this.f42638h = true;
            this.f42637g.schedule(this.f42643m, this.f42641k, TimeUnit.MILLISECONDS);
        }
    }

    @Override // o9.b, o9.a
    public boolean h(Drawable drawable, Canvas canvas, int i10) {
        this.f42639i = this.f42636f.now();
        boolean h10 = super.h(drawable, canvas, i10);
        u();
        return h10;
    }
}
