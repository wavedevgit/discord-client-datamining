package com.google.firebase.messaging;

import aj.a;
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
import java.io.IOException;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executor;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class FirebaseMessaging {

    /* renamed from: m  reason: collision with root package name */
    private static v0 f17024m;

    /* renamed from: o  reason: collision with root package name */
    static ScheduledExecutorService f17026o;

    /* renamed from: a  reason: collision with root package name */
    private final ni.e f17027a;

    /* renamed from: b  reason: collision with root package name */
    private final Context f17028b;

    /* renamed from: c  reason: collision with root package name */
    private final c0 f17029c;

    /* renamed from: d  reason: collision with root package name */
    private final q0 f17030d;

    /* renamed from: e  reason: collision with root package name */
    private final a f17031e;

    /* renamed from: f  reason: collision with root package name */
    private final Executor f17032f;

    /* renamed from: g  reason: collision with root package name */
    private final Executor f17033g;

    /* renamed from: h  reason: collision with root package name */
    private final Task f17034h;

    /* renamed from: i  reason: collision with root package name */
    private final h0 f17035i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f17036j;

    /* renamed from: k  reason: collision with root package name */
    private final Application.ActivityLifecycleCallbacks f17037k;

    /* renamed from: l  reason: collision with root package name */
    private static final long f17023l = TimeUnit.HOURS.toSeconds(8);

    /* renamed from: n  reason: collision with root package name */
    static bj.b f17025n = new bj.b() { // from class: com.google.firebase.messaging.q
        @Override // bj.b
        public final Object get() {
            return FirebaseMessaging.d();
        }
    };

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a {

        /* renamed from: a  reason: collision with root package name */
        private final yi.d f17038a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f17039b;

        /* renamed from: c  reason: collision with root package name */
        private yi.b f17040c;

        /* renamed from: d  reason: collision with root package name */
        private Boolean f17041d;

        a(yi.d dVar) {
            this.f17038a = dVar;
        }

        public static /* synthetic */ void a(a aVar, yi.a aVar2) {
            if (aVar.c()) {
                FirebaseMessaging.this.B();
            }
        }

        private Boolean d() {
            ApplicationInfo applicationInfo;
            Bundle bundle;
            Context j10 = FirebaseMessaging.this.f17027a.j();
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
                if (this.f17039b) {
                    return;
                }
                Boolean d10 = d();
                this.f17041d = d10;
                if (d10 == null) {
                    yi.b bVar = new yi.b() { // from class: com.google.firebase.messaging.z
                        @Override // yi.b
                        public final void a(yi.a aVar) {
                            FirebaseMessaging.a.a(FirebaseMessaging.a.this, aVar);
                        }
                    };
                    this.f17040c = bVar;
                    this.f17038a.a(ni.b.class, bVar);
                }
                this.f17039b = true;
            } catch (Throwable th2) {
                throw th2;
            }
        }

        synchronized boolean c() {
            boolean s10;
            try {
                b();
                Boolean bool = this.f17041d;
                if (bool != null) {
                    s10 = bool.booleanValue();
                } else {
                    s10 = FirebaseMessaging.this.f17027a.s();
                }
            } catch (Throwable th2) {
                throw th2;
            }
            return s10;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public FirebaseMessaging(ni.e eVar, aj.a aVar, bj.b bVar, bj.b bVar2, cj.e eVar2, bj.b bVar3, yi.d dVar) {
        this(eVar, aVar, bVar, bVar2, eVar2, bVar3, dVar, new h0(eVar.j()));
    }

    private synchronized void A() {
        if (!this.f17036j) {
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
        o(firebaseMessaging.f17028b).f(firebaseMessaging.p(), str, str2, firebaseMessaging.f17035i.a());
        if (aVar == null || !str2.equals(aVar.f17178a)) {
            firebaseMessaging.v(str2);
        }
        return wg.m.f(str2);
    }

    public static /* synthetic */ void b(FirebaseMessaging firebaseMessaging) {
        if (firebaseMessaging.w()) {
            firebaseMessaging.B();
        }
    }

    public static /* synthetic */ void c(FirebaseMessaging firebaseMessaging, wg.k kVar) {
        firebaseMessaging.getClass();
        try {
            kVar.c(firebaseMessaging.k());
        } catch (Exception e10) {
            kVar.b(e10);
        }
    }

    public static /* synthetic */ xb.i d() {
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
    static synchronized FirebaseMessaging getInstance(@NonNull ni.e eVar) {
        FirebaseMessaging firebaseMessaging;
        synchronized (FirebaseMessaging.class) {
            firebaseMessaging = (FirebaseMessaging) eVar.i(FirebaseMessaging.class);
            gf.q.m(firebaseMessaging, "Firebase Messaging component is not present");
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
            firebaseMessaging = getInstance(ni.e.k());
        }
        return firebaseMessaging;
    }

    private static synchronized v0 o(Context context) {
        v0 v0Var;
        synchronized (FirebaseMessaging.class) {
            try {
                if (f17024m == null) {
                    f17024m = new v0(context);
                }
                v0Var = f17024m;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return v0Var;
    }

    private String p() {
        if ("[DEFAULT]".equals(this.f17027a.l())) {
            return "";
        }
        return this.f17027a.n();
    }

    public static xb.i s() {
        return (xb.i) f17025n.get();
    }

    private void t() {
        this.f17029c.e().f(this.f17032f, new wg.g() { // from class: com.google.firebase.messaging.w
            @Override // wg.g
            public final void onSuccess(Object obj) {
                FirebaseMessaging.f(FirebaseMessaging.this, (com.google.android.gms.cloudmessaging.a) obj);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void u() {
        l0.c(this.f17028b);
        n0.f(this.f17028b, this.f17029c, z());
        if (z()) {
            t();
        }
    }

    private void v(String str) {
        if ("[DEFAULT]".equals(this.f17027a.l())) {
            if (Log.isLoggable("FirebaseMessaging", 3)) {
                Log.d("FirebaseMessaging", "Invoking onNewToken for app: " + this.f17027a.l());
            }
            Intent intent = new Intent("com.google.firebase.messaging.NEW_TOKEN");
            intent.putExtra("token", str);
            new m(this.f17028b).g(intent);
        }
    }

    private boolean z() {
        l0.c(this.f17028b);
        if (!l0.d(this.f17028b)) {
            return false;
        }
        if (this.f17027a.i(oi.a.class) != null) {
            return true;
        }
        if (!g0.a() || f17025n == null) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void C(long j10) {
        l(new w0(this, Math.min(Math.max(30L, 2 * j10), f17023l)), j10);
        this.f17036j = true;
    }

    boolean D(v0.a aVar) {
        if (aVar != null && !aVar.b(this.f17035i.a())) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String k() {
        final v0.a r10 = r();
        if (!D(r10)) {
            return r10.f17178a;
        }
        final String c10 = h0.c(this.f17027a);
        try {
            return (String) wg.m.a(this.f17030d.b(c10, new q0.a() { // from class: com.google.firebase.messaging.x
                @Override // com.google.firebase.messaging.q0.a
                public final Task start() {
                    Task q10;
                    q10 = r0.f17029c.f().q(r0.f17033g, new wg.j() { // from class: com.google.firebase.messaging.y
                        @Override // wg.j
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
                if (f17026o == null) {
                    f17026o = new ScheduledThreadPoolExecutor(1, new of.a("TAG"));
                }
                f17026o.schedule(runnable, j10, TimeUnit.SECONDS);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Context m() {
        return this.f17028b;
    }

    public Task q() {
        final wg.k kVar = new wg.k();
        this.f17032f.execute(new Runnable() { // from class: com.google.firebase.messaging.v
            @Override // java.lang.Runnable
            public final void run() {
                FirebaseMessaging.c(FirebaseMessaging.this, kVar);
            }
        });
        return kVar.a();
    }

    v0.a r() {
        return o(this.f17028b).d(p(), h0.c(this.f17027a));
    }

    public boolean w() {
        return this.f17031e.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean x() {
        return this.f17035i.g();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void y(boolean z10) {
        this.f17036j = z10;
    }

    FirebaseMessaging(ni.e eVar, aj.a aVar, bj.b bVar, bj.b bVar2, cj.e eVar2, bj.b bVar3, yi.d dVar, h0 h0Var) {
        this(eVar, aVar, bVar3, dVar, h0Var, new c0(eVar, h0Var, bVar, bVar2, eVar2), n.f(), n.c(), n.b());
    }

    FirebaseMessaging(ni.e eVar, aj.a aVar, bj.b bVar, yi.d dVar, h0 h0Var, c0 c0Var, Executor executor, Executor executor2, Executor executor3) {
        this.f17036j = false;
        f17025n = bVar;
        this.f17027a = eVar;
        this.f17031e = new a(dVar);
        Context j10 = eVar.j();
        this.f17028b = j10;
        p pVar = new p();
        this.f17037k = pVar;
        this.f17035i = h0Var;
        this.f17029c = c0Var;
        this.f17030d = new q0(executor);
        this.f17032f = executor2;
        this.f17033g = executor3;
        Context j11 = eVar.j();
        if (j11 instanceof Application) {
            ((Application) j11).registerActivityLifecycleCallbacks(pVar);
        } else {
            Log.w("FirebaseMessaging", "Context " + j11 + " was not an application, can't register for lifecycle callbacks. Some notification events may be dropped as a result.");
        }
        if (aVar != null) {
            aVar.a(new a.InterfaceC0010a() { // from class: com.google.firebase.messaging.r
            });
        }
        executor2.execute(new Runnable() { // from class: com.google.firebase.messaging.s
            @Override // java.lang.Runnable
            public final void run() {
                FirebaseMessaging.b(FirebaseMessaging.this);
            }
        });
        Task e10 = a1.e(this, h0Var, c0Var, j10, n.g());
        this.f17034h = e10;
        e10.f(executor2, new wg.g() { // from class: com.google.firebase.messaging.t
            @Override // wg.g
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
