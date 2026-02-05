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
    private static final String f5733q = m.i("SystemFgService");

    /* renamed from: r  reason: collision with root package name */
    private static SystemForegroundService f5734r = null;

    /* renamed from: e  reason: collision with root package name */
    private Handler f5735e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f5736i;

    /* renamed from: o  reason: collision with root package name */
    androidx.work.impl.foreground.b f5737o;

    /* renamed from: p  reason: collision with root package name */
    NotificationManager f5738p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ int f5739d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Notification f5740e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ int f5741i;

        a(int i10, Notification notification, int i11) {
            this.f5739d = i10;
            this.f5740e = notification;
            this.f5741i = i11;
        }

        @Override // java.lang.Runnable
        public void run() {
            int i10 = Build.VERSION.SDK_INT;
            if (i10 >= 31) {
                e.a(SystemForegroundService.this, this.f5739d, this.f5740e, this.f5741i);
            } else if (i10 >= 29) {
                d.a(SystemForegroundService.this, this.f5739d, this.f5740e, this.f5741i);
            } else {
                SystemForegroundService.this.startForeground(this.f5739d, this.f5740e);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ int f5743d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Notification f5744e;

        b(int i10, Notification notification) {
            this.f5743d = i10;
            this.f5744e = notification;
        }

        @Override // java.lang.Runnable
        public void run() {
            SystemForegroundService.this.f5738p.notify(this.f5743d, this.f5744e);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class c implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ int f5746d;

        c(int i10) {
            this.f5746d = i10;
        }

        @Override // java.lang.Runnable
        public void run() {
            SystemForegroundService.this.f5738p.cancel(this.f5746d);
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
                m.e().l(SystemForegroundService.f5733q, "Unable to start foreground service", e10);
            } catch (SecurityException e11) {
                m.e().l(SystemForegroundService.f5733q, "Unable to start foreground service", e11);
            }
        }
    }

    private void g() {
        this.f5735e = new Handler(Looper.getMainLooper());
        this.f5738p = (NotificationManager) getApplicationContext().getSystemService("notification");
        androidx.work.impl.foreground.b bVar = new androidx.work.impl.foreground.b(getApplicationContext());
        this.f5737o = bVar;
        bVar.n(this);
    }

    @Override // androidx.work.impl.foreground.b.InterfaceC0081b
    public void a(int i10, Notification notification) {
        this.f5735e.post(new b(i10, notification));
    }

    @Override // androidx.work.impl.foreground.b.InterfaceC0081b
    public void c(int i10, int i11, Notification notification) {
        this.f5735e.post(new a(i10, notification, i11));
    }

    @Override // androidx.work.impl.foreground.b.InterfaceC0081b
    public void e(int i10) {
        this.f5735e.post(new c(i10));
    }

    @Override // androidx.lifecycle.s, android.app.Service
    public void onCreate() {
        super.onCreate();
        f5734r = this;
        g();
    }

    @Override // androidx.lifecycle.s, android.app.Service
    public void onDestroy() {
        super.onDestroy();
        this.f5737o.l();
    }

    @Override // androidx.lifecycle.s, android.app.Service
    public int onStartCommand(Intent intent, int i10, int i11) {
        super.onStartCommand(intent, i10, i11);
        if (this.f5736i) {
            m.e().f(f5733q, "Re-initializing SystemForegroundService after a request to shut-down.");
            this.f5737o.l();
            g();
            this.f5736i = false;
        }
        if (intent != null) {
            this.f5737o.m(intent);
            return 3;
        }
        return 3;
    }

    @Override // androidx.work.impl.foreground.b.InterfaceC0081b
    public void stop() {
        this.f5736i = true;
        m.e().a(f5733q, "All commands completed.");
        if (Build.VERSION.SDK_INT >= 26) {
            stopForeground(true);
        }
        f5734r = null;
        stopSelf();
    }
}
