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
public class SystemForegroundService extends s implements b.InterfaceC0080b {

    /* renamed from: q  reason: collision with root package name */
    private static final String f5621q = m.i("SystemFgService");

    /* renamed from: r  reason: collision with root package name */
    private static SystemForegroundService f5622r = null;

    /* renamed from: e  reason: collision with root package name */
    private Handler f5623e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f5624i;

    /* renamed from: o  reason: collision with root package name */
    androidx.work.impl.foreground.b f5625o;

    /* renamed from: p  reason: collision with root package name */
    NotificationManager f5626p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ int f5627d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Notification f5628e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ int f5629i;

        a(int i10, Notification notification, int i11) {
            this.f5627d = i10;
            this.f5628e = notification;
            this.f5629i = i11;
        }

        @Override // java.lang.Runnable
        public void run() {
            int i10 = Build.VERSION.SDK_INT;
            if (i10 >= 31) {
                e.a(SystemForegroundService.this, this.f5627d, this.f5628e, this.f5629i);
            } else if (i10 >= 29) {
                d.a(SystemForegroundService.this, this.f5627d, this.f5628e, this.f5629i);
            } else {
                SystemForegroundService.this.startForeground(this.f5627d, this.f5628e);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ int f5631d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Notification f5632e;

        b(int i10, Notification notification) {
            this.f5631d = i10;
            this.f5632e = notification;
        }

        @Override // java.lang.Runnable
        public void run() {
            SystemForegroundService.this.f5626p.notify(this.f5631d, this.f5632e);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class c implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ int f5634d;

        c(int i10) {
            this.f5634d = i10;
        }

        @Override // java.lang.Runnable
        public void run() {
            SystemForegroundService.this.f5626p.cancel(this.f5634d);
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
                m.e().l(SystemForegroundService.f5621q, "Unable to start foreground service", e10);
            } catch (SecurityException e11) {
                m.e().l(SystemForegroundService.f5621q, "Unable to start foreground service", e11);
            }
        }
    }

    private void f() {
        this.f5623e = new Handler(Looper.getMainLooper());
        this.f5626p = (NotificationManager) getApplicationContext().getSystemService("notification");
        androidx.work.impl.foreground.b bVar = new androidx.work.impl.foreground.b(getApplicationContext());
        this.f5625o = bVar;
        bVar.n(this);
    }

    @Override // androidx.work.impl.foreground.b.InterfaceC0080b
    public void a(int i10, Notification notification) {
        this.f5623e.post(new b(i10, notification));
    }

    @Override // androidx.work.impl.foreground.b.InterfaceC0080b
    public void c(int i10, int i11, Notification notification) {
        this.f5623e.post(new a(i10, notification, i11));
    }

    @Override // androidx.work.impl.foreground.b.InterfaceC0080b
    public void d(int i10) {
        this.f5623e.post(new c(i10));
    }

    @Override // androidx.lifecycle.s, android.app.Service
    public void onCreate() {
        super.onCreate();
        f5622r = this;
        f();
    }

    @Override // androidx.lifecycle.s, android.app.Service
    public void onDestroy() {
        super.onDestroy();
        this.f5625o.l();
    }

    @Override // androidx.lifecycle.s, android.app.Service
    public int onStartCommand(Intent intent, int i10, int i11) {
        super.onStartCommand(intent, i10, i11);
        if (this.f5624i) {
            m.e().f(f5621q, "Re-initializing SystemForegroundService after a request to shut-down.");
            this.f5625o.l();
            f();
            this.f5624i = false;
        }
        if (intent != null) {
            this.f5625o.m(intent);
            return 3;
        }
        return 3;
    }

    @Override // androidx.work.impl.foreground.b.InterfaceC0080b
    public void stop() {
        this.f5624i = true;
        m.e().a(f5621q, "All commands completed.");
        if (Build.VERSION.SDK_INT >= 26) {
            stopForeground(true);
        }
        f5622r = null;
        stopSelf();
    }
}
