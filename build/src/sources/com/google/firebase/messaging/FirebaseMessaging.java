package com.google.firebase.messaging;

import android.app.Application;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.util.Log;
import androidx.annotation.Keep;
import androidx.annotation.NonNull;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.gms.tasks.Task;
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.q0;
import com.google.firebase.messaging.v0;
import hj.a;
import java.io.IOException;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executor;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class FirebaseMessaging {

    /* renamed from: m  reason: collision with root package name */
    private static v0 f17255m;

    /* renamed from: o  reason: collision with root package name */
    static ScheduledExecutorService f17257o;

    /* renamed from: a  reason: collision with root package name */
    private final ui.e f17258a;

    /* renamed from: b  reason: collision with root package name */
    private final Context f17259b;

    /* renamed from: c  reason: collision with root package name */
    private final c0 f17260c;

    /* renamed from: d  reason: collision with root package name */
    private final q0 f17261d;

    /* renamed from: e  reason: collision with root package name */
    private final a f17262e;

    /* renamed from: f  reason: collision with root package name */
    private final Executor f17263f;

    /* renamed from: g  reason: collision with root package name */
    private final Executor f17264g;

    /* renamed from: h  reason: collision with root package name */
    private final Task f17265h;

    /* renamed from: i  reason: collision with root package name */
    private final h0 f17266i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f17267j;

    /* renamed from: k  reason: collision with root package name */
    private final Application.ActivityLifecycleCallbacks f17268k;

    /* renamed from: l  reason: collision with root package name */
    private static final long f17254l = TimeUnit.HOURS.toSeconds(8);

    /* renamed from: n  reason: collision with root package name */
    static ij.b f17256n = new ij.b() { // from class: com.google.firebase.messaging.q
        @Override // ij.b
        public final Object get() {
            return FirebaseMessaging.d();
        }
    };

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a {

        /* renamed from: a  reason: collision with root package name */
        private final fj.d f17269a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f17270b;

        /* renamed from: c  reason: collision with root package name */
        private fj.b f17271c;

        /* renamed from: d  reason: collision with root package name */
        private Boolean f17272d;

        a(fj.d dVar) {
            this.f17269a = dVar;
        }

        public static /* synthetic */ void a(a aVar, fj.a aVar2) {
            if (aVar.c()) {
                FirebaseMessaging.this.B();
            }
        }

        private Boolean d() {
            ApplicationInfo applicationInfo;
            Bundle bundle;
            Context j10 = FirebaseMessaging.this.f17258a.j();
            SharedPreferences sharedPreferences = j10.getSharedPreferences("com.google.firebase.messaging", 0);
            if (sharedPreferences.contains("auto_init")) {
                return Boolean.valueOf(sharedPreferences.getBoolean("auto_init", false));
            }
            try {
                PackageManager packageManager = j10.getPackageManager();
                if (packageManager != null && (applicationInfo = packageManager.getApplicationInfo(j10.getPackageName(), IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT)) != null && (bundle = applicationInfo.metaData) != null && bundle.containsKey("firebase_messaging_auto_init_enabled")) {
                    return Boolean.valueOf(applicationInfo.metaData.getBoolean("firebase_messaging_auto_init_enabled"));
                }
                return null;
            } catch (PackageManager.NameNotFoundException unused) {
                return null;
            }
        }

        synchronized void b() {
            try {
                if (this.f17270b) {
                    return;
                }
                Boolean d10 = d();
                this.f17272d = d10;
                if (d10 == null) {
                    fj.b bVar = new fj.b() { // from class: com.google.firebase.messaging.z
                        @Override // fj.b
                        public final void a(fj.a aVar) {
                            FirebaseMessaging.a.a(FirebaseMessaging.a.this, aVar);
                        }
                    };
                    this.f17271c = bVar;
                    this.f17269a.a(ui.b.class, bVar);
                }
                this.f17270b = true;
            } catch (Throwable th2) {
                throw th2;
            }
        }

        synchronized boolean c() {
            boolean s10;
            try {
                b();
                Boolean bool = this.f17272d;
                if (bool != null) {
                    s10 = bool.booleanValue();
                } else {
                    s10 = FirebaseMessaging.this.f17258a.s();
                }
            } catch (Throwable th2) {
                throw th2;
            }
            return s10;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public FirebaseMessaging(ui.e eVar, hj.a aVar, ij.b bVar, ij.b bVar2, jj.e eVar2, ij.b bVar3, fj.d dVar) {
        this(eVar, aVar, bVar, bVar2, eVar2, bVar3, dVar, new h0(eVar.j()));
    }

    private synchronized void A() {
        if (!this.f17267j) {
            C(0L);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void B() {
        if (D(r())) {
            A();
        }
    }

    public static /* synthetic */ Task a(FirebaseMessaging firebaseMessaging, String str, v0.a aVar, String str2) {
        o(firebaseMessaging.f17259b).f(firebaseMessaging.p(), str, str2, firebaseMessaging.f17266i.a());
        if (aVar == null || !str2.equals(aVar.f17409a)) {
            firebaseMessaging.v(str2);
        }
        return zg.m.f(str2);
    }

    public static /* synthetic */ void b(FirebaseMessaging firebaseMessaging) {
        if (firebaseMessaging.w()) {
            firebaseMessaging.B();
        }
    }

    public static /* synthetic */ void c(FirebaseMessaging firebaseMessaging, zg.k kVar) {
        firebaseMessaging.getClass();
        try {
            kVar.c(firebaseMessaging.k());
        } catch (Exception e10) {
            kVar.b(e10);
        }
    }

    public static /* synthetic */ yb.i d() {
        return null;
    }

    public static /* synthetic */ void f(FirebaseMessaging firebaseMessaging, com.google.android.gms.cloudmessaging.a aVar) {
        firebaseMessaging.getClass();
        if (aVar != null) {
            g0.v(aVar.b());
            firebaseMessaging.t();
        }
    }

    @NonNull
    @Keep
    static synchronized FirebaseMessaging getInstance(@NonNull ui.e eVar) {
        FirebaseMessaging firebaseMessaging;
        synchronized (FirebaseMessaging.class) {
            firebaseMessaging = (FirebaseMessaging) eVar.i(FirebaseMessaging.class);
            hf.q.m(firebaseMessaging, "Firebase Messaging component is not present");
        }
        return firebaseMessaging;
    }

    public static /* synthetic */ void h(FirebaseMessaging firebaseMessaging, a1 a1Var) {
        if (firebaseMessaging.w()) {
            a1Var.n();
        }
    }

    public static synchronized FirebaseMessaging n() {
        FirebaseMessaging firebaseMessaging;
        synchronized (FirebaseMessaging.class) {
            firebaseMessaging = getInstance(ui.e.k());
        }
        return firebaseMessaging;
    }

    private static synchronized v0 o(Context context) {
        v0 v0Var;
        synchronized (FirebaseMessaging.class) {
            try {
                if (f17255m == null) {
                    f17255m = new v0(context);
                }
                v0Var = f17255m;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return v0Var;
    }

    private String p() {
        if ("[DEFAULT]".equals(this.f17258a.l())) {
            return "";
        }
        return this.f17258a.n();
    }

    public static yb.i s() {
        return (yb.i) f17256n.get();
    }

    private void t() {
        this.f17260c.e().f(this.f17263f, new zg.g() { // from class: com.google.firebase.messaging.w
            @Override // zg.g
            public final void onSuccess(Object obj) {
                FirebaseMessaging.f(FirebaseMessaging.this, (com.google.android.gms.cloudmessaging.a) obj);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void u() {
        l0.c(this.f17259b);
        n0.f(this.f17259b, this.f17260c, z());
        if (z()) {
            t();
        }
    }

    private void v(String str) {
        if ("[DEFAULT]".equals(this.f17258a.l())) {
            if (Log.isLoggable("FirebaseMessaging", 3)) {
                Log.d("FirebaseMessaging", "Invoking onNewToken for app: " + this.f17258a.l());
            }
            Intent intent = new Intent("com.google.firebase.messaging.NEW_TOKEN");
            intent.putExtra("token", str);
            new m(this.f17259b).g(intent);
        }
    }

    private boolean z() {
        l0.c(this.f17259b);
        if (!l0.d(this.f17259b)) {
            return false;
        }
        if (this.f17258a.i(vi.a.class) != null) {
            return true;
        }
        if (!g0.a() || f17256n == null) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void C(long j10) {
        l(new w0(this, Math.min(Math.max(30L, 2 * j10), f17254l)), j10);
        this.f17267j = true;
    }

    boolean D(v0.a aVar) {
        if (aVar != null && !aVar.b(this.f17266i.a())) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String k() {
        final v0.a r10 = r();
        if (!D(r10)) {
            return r10.f17409a;
        }
        final String c10 = h0.c(this.f17258a);
        try {
            return (String) zg.m.a(this.f17261d.b(c10, new q0.a() { // from class: com.google.firebase.messaging.x
                @Override // com.google.firebase.messaging.q0.a
                public final Task start() {
                    Task q10;
                    q10 = r0.f17260c.f().q(r0.f17264g, new zg.j() { // from class: com.google.firebase.messaging.y
                        @Override // zg.j
                        public final Task a(Object obj) {
                            return FirebaseMessaging.a(FirebaseMessaging.this, r2, r3, (String) obj);
                        }
                    });
                    return q10;
                }
            }));
        } catch (InterruptedException | ExecutionException e10) {
            throw new IOException(e10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void l(Runnable runnable, long j10) {
        synchronized (FirebaseMessaging.class) {
            try {
                if (f17257o == null) {
                    f17257o = new ScheduledThreadPoolExecutor(1, new pf.a("TAG"));
                }
                f17257o.schedule(runnable, j10, TimeUnit.SECONDS);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Context m() {
        return this.f17259b;
    }

    public Task q() {
        final zg.k kVar = new zg.k();
        this.f17263f.execute(new Runnable() { // from class: com.google.firebase.messaging.v
            @Override // java.lang.Runnable
            public final void run() {
                FirebaseMessaging.c(FirebaseMessaging.this, kVar);
            }
        });
        return kVar.a();
    }

    v0.a r() {
        return o(this.f17259b).d(p(), h0.c(this.f17258a));
    }

    public boolean w() {
        return this.f17262e.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean x() {
        return this.f17266i.g();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void y(boolean z10) {
        this.f17267j = z10;
    }

    FirebaseMessaging(ui.e eVar, hj.a aVar, ij.b bVar, ij.b bVar2, jj.e eVar2, ij.b bVar3, fj.d dVar, h0 h0Var) {
        this(eVar, aVar, bVar3, dVar, h0Var, new c0(eVar, h0Var, bVar, bVar2, eVar2), n.f(), n.c(), n.b());
    }

    FirebaseMessaging(ui.e eVar, hj.a aVar, ij.b bVar, fj.d dVar, h0 h0Var, c0 c0Var, Executor executor, Executor executor2, Executor executor3) {
        this.f17267j = false;
        f17256n = bVar;
        this.f17258a = eVar;
        this.f17262e = new a(dVar);
        Context j10 = eVar.j();
        this.f17259b = j10;
        p pVar = new p();
        this.f17268k = pVar;
        this.f17266i = h0Var;
        this.f17260c = c0Var;
        this.f17261d = new q0(executor);
        this.f17263f = executor2;
        this.f17264g = executor3;
        Context j11 = eVar.j();
        if (j11 instanceof Application) {
            ((Application) j11).registerActivityLifecycleCallbacks(pVar);
        } else {
            Log.w("FirebaseMessaging", "Context " + j11 + " was not an application, can't register for lifecycle callbacks. Some notification events may be dropped as a result.");
        }
        if (aVar != null) {
            aVar.a(new a.InterfaceC0362a() { // from class: com.google.firebase.messaging.r
            });
        }
        executor2.execute(new Runnable() { // from class: com.google.firebase.messaging.s
            @Override // java.lang.Runnable
            public final void run() {
                FirebaseMessaging.b(FirebaseMessaging.this);
            }
        });
        Task e10 = a1.e(this, h0Var, c0Var, j10, n.g());
        this.f17265h = e10;
        e10.f(executor2, new zg.g() { // from class: com.google.firebase.messaging.t
            @Override // zg.g
            public final void onSuccess(Object obj) {
                FirebaseMessaging.h(FirebaseMessaging.this, (a1) obj);
            }
        });
        executor2.execute(new Runnable() { // from class: com.google.firebase.messaging.u
            @Override // java.lang.Runnable
            public final void run() {
                FirebaseMessaging.this.u();
            }
        });
    }
}
