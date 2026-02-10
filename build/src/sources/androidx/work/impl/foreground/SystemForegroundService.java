package androidx.work.impl.foreground;

import android.app.ForegroundServiceStartNotAllowedException;
import android.app.Notification;
import android.app.NotificationManager;
import android.app.Service;
import android.content.Intent;
import android.os.Build;
import android.os.Handler;
import android.os.Looper;
import androidx.lifecycle.s;
import androidx.work.impl.foreground.b;
import k4.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class SystemForegroundService extends s implements b.InterfaceC0081b {

    /* renamed from: q  reason: collision with root package name */
    private static final String f5759q = m.i("SystemFgService");

    /* renamed from: r  reason: collision with root package name */
    private static SystemForegroundService f5760r = null;

    /* renamed from: e  reason: collision with root package name */
    private Handler f5761e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f5762i;

    /* renamed from: o  reason: collision with root package name */
    androidx.work.impl.foreground.b f5763o;

    /* renamed from: p  reason: collision with root package name */
    NotificationManager f5764p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ int f5765d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Notification f5766e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ int f5767i;

        a(int i10, Notification notification, int i11) {
            this.f5765d = i10;
            this.f5766e = notification;
            this.f5767i = i11;
        }

        @Override // java.lang.Runnable
        public void run() {
            int i10 = Build.VERSION.SDK_INT;
            if (i10 >= 31) {
                e.a(SystemForegroundService.this, this.f5765d, this.f5766e, this.f5767i);
            } else if (i10 >= 29) {
                d.a(SystemForegroundService.this, this.f5765d, this.f5766e, this.f5767i);
            } else {
                SystemForegroundService.this.startForeground(this.f5765d, this.f5766e);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ int f5769d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Notification f5770e;

        b(int i10, Notification notification) {
            this.f5769d = i10;
            this.f5770e = notification;
        }

        @Override // java.lang.Runnable
        public void run() {
            SystemForegroundService.this.f5764p.notify(this.f5769d, this.f5770e);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class c implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ int f5772d;

        c(int i10) {
            this.f5772d = i10;
        }

        @Override // java.lang.Runnable
        public void run() {
            SystemForegroundService.this.f5764p.cancel(this.f5772d);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class d {
        static void a(Service service, int i10, Notification notification, int i11) {
            service.startForeground(i10, notification, i11);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class e {
        static void a(Service service, int i10, Notification notification, int i11) {
            try {
                service.startForeground(i10, notification, i11);
            } catch (ForegroundServiceStartNotAllowedException e10) {
                m.e().l(SystemForegroundService.f5759q, "Unable to start foreground service", e10);
            } catch (SecurityException e11) {
                m.e().l(SystemForegroundService.f5759q, "Unable to start foreground service", e11);
            }
        }
    }

    private void g() {
        this.f5761e = new Handler(Looper.getMainLooper());
        this.f5764p = (NotificationManager) getApplicationContext().getSystemService("notification");
        androidx.work.impl.foreground.b bVar = new androidx.work.impl.foreground.b(getApplicationContext());
        this.f5763o = bVar;
        bVar.n(this);
    }

    @Override // androidx.work.impl.foreground.b.InterfaceC0081b
    public void a(int i10, Notification notification) {
        this.f5761e.post(new b(i10, notification));
    }

    @Override // androidx.work.impl.foreground.b.InterfaceC0081b
    public void c(int i10, int i11, Notification notification) {
        this.f5761e.post(new a(i10, notification, i11));
    }

    @Override // androidx.work.impl.foreground.b.InterfaceC0081b
    public void d(int i10) {
        this.f5761e.post(new c(i10));
    }

    @Override // androidx.lifecycle.s, android.app.Service
    public void onCreate() {
        super.onCreate();
        f5760r = this;
        g();
    }

    @Override // androidx.lifecycle.s, android.app.Service
    public void onDestroy() {
        super.onDestroy();
        this.f5763o.l();
    }

    @Override // androidx.lifecycle.s, android.app.Service
    public int onStartCommand(Intent intent, int i10, int i11) {
        super.onStartCommand(intent, i10, i11);
        if (this.f5762i) {
            m.e().f(f5759q, "Re-initializing SystemForegroundService after a request to shut-down.");
            this.f5763o.l();
            g();
            this.f5762i = false;
        }
        if (intent != null) {
            this.f5763o.m(intent);
            return 3;
        }
        return 3;
    }

    @Override // androidx.work.impl.foreground.b.InterfaceC0081b
    public void stop() {
        this.f5762i = true;
        m.e().a(f5759q, "All commands completed.");
        if (Build.VERSION.SDK_INT >= 26) {
            stopForeground(true);
        }
        f5760r = null;
        stopSelf();
    }
}
