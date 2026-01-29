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
public class SystemForegroundService extends s implements b.InterfaceC0078b {

    /* renamed from: q  reason: collision with root package name */
    private static final String f5608q = m.i("SystemFgService");

    /* renamed from: r  reason: collision with root package name */
    private static SystemForegroundService f5609r = null;

    /* renamed from: e  reason: collision with root package name */
    private Handler f5610e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f5611i;

    /* renamed from: o  reason: collision with root package name */
    androidx.work.impl.foreground.b f5612o;

    /* renamed from: p  reason: collision with root package name */
    NotificationManager f5613p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ int f5614d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Notification f5615e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ int f5616i;

        a(int i10, Notification notification, int i11) {
            this.f5614d = i10;
            this.f5615e = notification;
            this.f5616i = i11;
        }

        @Override // java.lang.Runnable
        public void run() {
            int i10 = Build.VERSION.SDK_INT;
            if (i10 >= 31) {
                e.a(SystemForegroundService.this, this.f5614d, this.f5615e, this.f5616i);
            } else if (i10 >= 29) {
                d.a(SystemForegroundService.this, this.f5614d, this.f5615e, this.f5616i);
            } else {
                SystemForegroundService.this.startForeground(this.f5614d, this.f5615e);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ int f5618d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Notification f5619e;

        b(int i10, Notification notification) {
            this.f5618d = i10;
            this.f5619e = notification;
        }

        @Override // java.lang.Runnable
        public void run() {
            SystemForegroundService.this.f5613p.notify(this.f5618d, this.f5619e);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class c implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ int f5621d;

        c(int i10) {
            this.f5621d = i10;
        }

        @Override // java.lang.Runnable
        public void run() {
            SystemForegroundService.this.f5613p.cancel(this.f5621d);
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
                m.e().l(SystemForegroundService.f5608q, "Unable to start foreground service", e10);
            } catch (SecurityException e11) {
                m.e().l(SystemForegroundService.f5608q, "Unable to start foreground service", e11);
            }
        }
    }

    private void g() {
        this.f5610e = new Handler(Looper.getMainLooper());
        this.f5613p = (NotificationManager) getApplicationContext().getSystemService("notification");
        androidx.work.impl.foreground.b bVar = new androidx.work.impl.foreground.b(getApplicationContext());
        this.f5612o = bVar;
        bVar.n(this);
    }

    @Override // androidx.work.impl.foreground.b.InterfaceC0078b
    public void a(int i10, Notification notification) {
        this.f5610e.post(new b(i10, notification));
    }

    @Override // androidx.work.impl.foreground.b.InterfaceC0078b
    public void c(int i10, int i11, Notification notification) {
        this.f5610e.post(new a(i10, notification, i11));
    }

    @Override // androidx.work.impl.foreground.b.InterfaceC0078b
    public void e(int i10) {
        this.f5610e.post(new c(i10));
    }

    @Override // androidx.lifecycle.s, android.app.Service
    public void onCreate() {
        super.onCreate();
        f5609r = this;
        g();
    }

    @Override // androidx.lifecycle.s, android.app.Service
    public void onDestroy() {
        super.onDestroy();
        this.f5612o.l();
    }

    @Override // androidx.lifecycle.s, android.app.Service
    public int onStartCommand(Intent intent, int i10, int i11) {
        super.onStartCommand(intent, i10, i11);
        if (this.f5611i) {
            m.e().f(f5608q, "Re-initializing SystemForegroundService after a request to shut-down.");
            this.f5612o.l();
            g();
            this.f5611i = false;
        }
        if (intent != null) {
            this.f5612o.m(intent);
            return 3;
        }
        return 3;
    }

    @Override // androidx.work.impl.foreground.b.InterfaceC0078b
    public void stop() {
        this.f5611i = true;
        m.e().a(f5608q, "All commands completed.");
        if (Build.VERSION.SDK_INT >= 26) {
            stopForeground(true);
        }
        f5609r = null;
        stopSelf();
    }
}
