package p9;

import android.graphics.Canvas;
import android.graphics.drawable.Drawable;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c extends p9.b {

    /* renamed from: f  reason: collision with root package name */
    private final w8.b f43073f;

    /* renamed from: g  reason: collision with root package name */
    private final ScheduledExecutorService f43074g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f43075h;

    /* renamed from: i  reason: collision with root package name */
    private long f43076i;

    /* renamed from: j  reason: collision with root package name */
    private long f43077j;

    /* renamed from: k  reason: collision with root package name */
    private long f43078k;

    /* renamed from: l  reason: collision with root package name */
    private b f43079l;

    /* renamed from: m  reason: collision with root package name */
    private final Runnable f43080m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            synchronized (c.this) {
                try {
                    c.this.f43075h = false;
                    if (!c.this.t()) {
                        c.this.u();
                    } else if (c.this.f43079l != null) {
                        c.this.f43079l.i();
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
        this.f43075h = false;
        this.f43077j = 2000L;
        this.f43078k = 1000L;
        this.f43080m = new a();
        this.f43079l = bVar;
        this.f43073f = bVar2;
        this.f43074g = scheduledExecutorService;
    }

    public static p9.b r(p9.a aVar, b bVar, w8.b bVar2, ScheduledExecutorService scheduledExecutorService) {
        return new c(aVar, bVar, bVar2, scheduledExecutorService);
    }

    public static p9.b s(p9.a aVar, w8.b bVar, ScheduledExecutorService scheduledExecutorService) {
        return r(aVar, (b) aVar, bVar, scheduledExecutorService);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean t() {
        if (this.f43073f.now() - this.f43076i > this.f43077j) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public synchronized void u() {
        if (!this.f43075h) {
            this.f43075h = true;
            this.f43074g.schedule(this.f43080m, this.f43078k, TimeUnit.MILLISECONDS);
        }
    }

    @Override // p9.b, p9.a
    public boolean h(Drawable drawable, Canvas canvas, int i10) {
        this.f43076i = this.f43073f.now();
        boolean h10 = super.h(drawable, canvas, i10);
        u();
        return h10;
    }
}
