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
    private static v0 f15992m;

    /* renamed from: o  reason: collision with root package name */
    static ScheduledExecutorService f15994o;

    /* renamed from: a  reason: collision with root package name */
    private final ni.e f15995a;

    /* renamed from: b  reason: collision with root package name */
    private final Context f15996b;

    /* renamed from: c  reason: collision with root package name */
    private final c0 f15997c;

    /* renamed from: d  reason: collision with root package name */
    private final q0 f15998d;

    /* renamed from: e  reason: collision with root package name */
    private final a f15999e;

    /* renamed from: f  reason: collision with root package name */
    private final Executor f16000f;

    /* renamed from: g  reason: collision with root package name */
    private final Executor f16001g;

    /* renamed from: h  reason: collision with root package name */
    private final Task f16002h;

    /* renamed from: i  reason: collision with root package name */
    private final h0 f16003i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f16004j;

    /* renamed from: k  reason: collision with root package name */
    private final Application.ActivityLifecycleCallbacks f16005k;

    /* renamed from: l  reason: collision with root package name */
    private static final long f15991l = TimeUnit.HOURS.toSeconds(8);

    /* renamed from: n  reason: collision with root package name */
    static bj.b f15993n = new bj.b() { // from class: com.google.firebase.messaging.q
        @Override // bj.b
        public final Object get() {
            return FirebaseMessaging.d();
        }
    };

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a {

        /* renamed from: a  reason: collision with root package name */
        private final yi.d f16006a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f16007b;

        /* renamed from: c  reason: collision with root package name */
        private yi.b f16008c;

        /* renamed from: d  reason: collision with root package name */
        private Boolean f16009d;

        a(yi.d dVar) {
            this.f16006a = dVar;
        }

        public static /* synthetic */ void a(a aVar, yi.a aVar2) {
            if (aVar.c()) {
                FirebaseMessaging.this.B();
            }
        }

        private Boolean d() {
            ApplicationInfo applicationInfo;
            Bundle bundle;
            Context j10 = FirebaseMessaging.this.f15995a.j();
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
                if (this.f16007b) {
                    return;
                }
                Boolean d10 = d();
                this.f16009d = d10;
                if (d10 == null) {
                    yi.b bVar = new yi.b() { // from class: com.google.firebase.messaging.z
                        @Override // yi.b
                        public final void a(yi.a aVar) {
                            FirebaseMessaging.a.a(FirebaseMessaging.a.this, aVar);
                        }
                    };
                    this.f16008c = bVar;
                    this.f16006a.a(ni.b.class, bVar);
                }
                this.f16007b = true;
            } catch (Throwable th2) {
                throw th2;
            }
        }

        synchronized boolean c() {
            boolean s10;
            try {
                b();
                Boolean bool = this.f16009d;
                if (bool != null) {
                    s10 = bool.booleanValue();
                } else {
                    s10 = FirebaseMessaging.this.f15995a.s();
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
        if (!this.f16004j) {
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
        o(firebaseMessaging.f15996b).f(firebaseMessaging.p(), str, str2, firebaseMessaging.f16003i.a());
        if (aVar == null || !str2.equals(aVar.f16146a)) {
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
                if (f15992m == null) {
                    f15992m = new v0(context);
                }
                v0Var = f15992m;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return v0Var;
    }

    private String p() {
        if ("[DEFAULT]".equals(this.f15995a.l())) {
            return "";
        }
        return this.f15995a.n();
    }

    public static xb.i s() {
        return (xb.i) f15993n.get();
    }

    private void t() {
        this.f15997c.e().f(this.f16000f, new wg.g() { // from class: com.google.firebase.messaging.w
            @Override // wg.g
            public final void onSuccess(Object obj) {
                FirebaseMessaging.f(FirebaseMessaging.this, (com.google.android.gms.cloudmessaging.a) obj);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void u() {
        l0.c(this.f15996b);
        n0.f(this.f15996b, this.f15997c, z());
        if (z()) {
            t();
        }
    }

    private void v(String str) {
        if ("[DEFAULT]".equals(this.f15995a.l())) {
            if (Log.isLoggable("FirebaseMessaging", 3)) {
                Log.d("FirebaseMessaging", "Invoking onNewToken for app: " + this.f15995a.l());
            }
            Intent intent = new Intent("com.google.firebase.messaging.NEW_TOKEN");
            intent.putExtra("token", str);
            new m(this.f15996b).g(intent);
        }
    }

    private boolean z() {
        l0.c(this.f15996b);
        if (!l0.d(this.f15996b)) {
            return false;
        }
        if (this.f15995a.i(oi.a.class) != null) {
            return true;
        }
        if (!g0.a() || f15993n == null) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void C(long j10) {
        l(new w0(this, Math.min(Math.max(30L, 2 * j10), f15991l)), j10);
        this.f16004j = true;
    }

    boolean D(v0.a aVar) {
        if (aVar != null && !aVar.b(this.f16003i.a())) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String k() {
        final v0.a r10 = r();
        if (!D(r10)) {
            return r10.f16146a;
        }
        final String c10 = h0.c(this.f15995a);
        try {
            return (String) wg.m.a(this.f15998d.b(c10, new q0.a() { // from class: com.google.firebase.messaging.x
                @Override // com.google.firebase.messaging.q0.a
                public final Task start() {
                    Task q10;
                    q10 = r0.f15997c.f().q(r0.f16001g, new wg.j() { // from class: com.google.firebase.messaging.y
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
                if (f15994o == null) {
                    f15994o = new ScheduledThreadPoolExecutor(1, new of.a("TAG"));
                }
                f15994o.schedule(runnable, j10, TimeUnit.SECONDS);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Context m() {
        return this.f15996b;
    }

    public Task q() {
        final wg.k kVar = new wg.k();
        this.f16000f.execute(new Runnable() { // from class: com.google.firebase.messaging.v
            @Override // java.lang.Runnable
            public final void run() {
                FirebaseMessaging.c(FirebaseMessaging.this, kVar);
            }
        });
        return kVar.a();
    }

    v0.a r() {
        return o(this.f15996b).d(p(), h0.c(this.f15995a));
    }

    public boolean w() {
        return this.f15999e.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean x() {
        return this.f16003i.g();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void y(boolean z10) {
        this.f16004j = z10;
    }

    FirebaseMessaging(ni.e eVar, aj.a aVar, bj.b bVar, bj.b bVar2, cj.e eVar2, bj.b bVar3, yi.d dVar, h0 h0Var) {
        this(eVar, aVar, bVar3, dVar, h0Var, new c0(eVar, h0Var, bVar, bVar2, eVar2), n.f(), n.c(), n.b());
    }

    FirebaseMessaging(ni.e eVar, aj.a aVar, bj.b bVar, yi.d dVar, h0 h0Var, c0 c0Var, Executor executor, Executor executor2, Executor executor3) {
        this.f16004j = false;
        f15993n = bVar;
        this.f15995a = eVar;
        this.f15999e = new a(dVar);
        Context j10 = eVar.j();
        this.f15996b = j10;
        p pVar = new p();
        this.f16005k = pVar;
        this.f16003i = h0Var;
        this.f15997c = c0Var;
        this.f15998d = new q0(executor);
        this.f16000f = executor2;
        this.f16001g = executor3;
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
        this.f16002h = e10;
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
