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
import fj.a;
import java.io.IOException;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executor;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class FirebaseMessaging {

    /* renamed from: m  reason: collision with root package name */
    private static v0 f16506m;

    /* renamed from: o  reason: collision with root package name */
    static ScheduledExecutorService f16508o;

    /* renamed from: a  reason: collision with root package name */
    private final si.e f16509a;

    /* renamed from: b  reason: collision with root package name */
    private final Context f16510b;

    /* renamed from: c  reason: collision with root package name */
    private final c0 f16511c;

    /* renamed from: d  reason: collision with root package name */
    private final q0 f16512d;

    /* renamed from: e  reason: collision with root package name */
    private final a f16513e;

    /* renamed from: f  reason: collision with root package name */
    private final Executor f16514f;

    /* renamed from: g  reason: collision with root package name */
    private final Executor f16515g;

    /* renamed from: h  reason: collision with root package name */
    private final Task f16516h;

    /* renamed from: i  reason: collision with root package name */
    private final h0 f16517i;

    /* renamed from: j  reason: collision with root package name */
    private boolean f16518j;

    /* renamed from: k  reason: collision with root package name */
    private final Application.ActivityLifecycleCallbacks f16519k;

    /* renamed from: l  reason: collision with root package name */
    private static final long f16505l = TimeUnit.HOURS.toSeconds(8);

    /* renamed from: n  reason: collision with root package name */
    static gj.b f16507n = new gj.b() { // from class: com.google.firebase.messaging.q
        @Override // gj.b
        public final Object get() {
            return FirebaseMessaging.d();
        }
    };

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a {

        /* renamed from: a  reason: collision with root package name */
        private final dj.d f16520a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f16521b;

        /* renamed from: c  reason: collision with root package name */
        private dj.b f16522c;

        /* renamed from: d  reason: collision with root package name */
        private Boolean f16523d;

        a(dj.d dVar) {
            this.f16520a = dVar;
        }

        public static /* synthetic */ void a(a aVar, dj.a aVar2) {
            if (aVar.c()) {
                FirebaseMessaging.this.B();
            }
        }

        private Boolean d() {
            ApplicationInfo applicationInfo;
            Bundle bundle;
            Context j10 = FirebaseMessaging.this.f16509a.j();
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
                if (this.f16521b) {
                    return;
                }
                Boolean d10 = d();
                this.f16523d = d10;
                if (d10 == null) {
                    dj.b bVar = new dj.b() { // from class: com.google.firebase.messaging.z
                        @Override // dj.b
                        public final void a(dj.a aVar) {
                            FirebaseMessaging.a.a(FirebaseMessaging.a.this, aVar);
                        }
                    };
                    this.f16522c = bVar;
                    this.f16520a.a(si.b.class, bVar);
                }
                this.f16521b = true;
            } catch (Throwable th2) {
                throw th2;
            }
        }

        synchronized boolean c() {
            boolean s10;
            try {
                b();
                Boolean bool = this.f16523d;
                if (bool != null) {
                    s10 = bool.booleanValue();
                } else {
                    s10 = FirebaseMessaging.this.f16509a.s();
                }
            } catch (Throwable th2) {
                throw th2;
            }
            return s10;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public FirebaseMessaging(si.e eVar, fj.a aVar, gj.b bVar, gj.b bVar2, hj.e eVar2, gj.b bVar3, dj.d dVar) {
        this(eVar, aVar, bVar, bVar2, eVar2, bVar3, dVar, new h0(eVar.j()));
    }

    private synchronized void A() {
        if (!this.f16518j) {
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
        o(firebaseMessaging.f16510b).f(firebaseMessaging.p(), str, str2, firebaseMessaging.f16517i.a());
        if (aVar == null || !str2.equals(aVar.f16660a)) {
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
    static synchronized FirebaseMessaging getInstance(@NonNull si.e eVar) {
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
            firebaseMessaging = getInstance(si.e.k());
        }
        return firebaseMessaging;
    }

    private static synchronized v0 o(Context context) {
        v0 v0Var;
        synchronized (FirebaseMessaging.class) {
            try {
                if (f16506m == null) {
                    f16506m = new v0(context);
                }
                v0Var = f16506m;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return v0Var;
    }

    private String p() {
        if ("[DEFAULT]".equals(this.f16509a.l())) {
            return "";
        }
        return this.f16509a.n();
    }

    public static yb.i s() {
        return (yb.i) f16507n.get();
    }

    private void t() {
        this.f16511c.e().f(this.f16514f, new zg.g() { // from class: com.google.firebase.messaging.w
            @Override // zg.g
            public final void onSuccess(Object obj) {
                FirebaseMessaging.f(FirebaseMessaging.this, (com.google.android.gms.cloudmessaging.a) obj);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void u() {
        l0.c(this.f16510b);
        n0.f(this.f16510b, this.f16511c, z());
        if (z()) {
            t();
        }
    }

    private void v(String str) {
        if ("[DEFAULT]".equals(this.f16509a.l())) {
            if (Log.isLoggable("FirebaseMessaging", 3)) {
                Log.d("FirebaseMessaging", "Invoking onNewToken for app: " + this.f16509a.l());
            }
            Intent intent = new Intent("com.google.firebase.messaging.NEW_TOKEN");
            intent.putExtra("token", str);
            new m(this.f16510b).g(intent);
        }
    }

    private boolean z() {
        l0.c(this.f16510b);
        if (!l0.d(this.f16510b)) {
            return false;
        }
        if (this.f16509a.i(ti.a.class) != null) {
            return true;
        }
        if (!g0.a() || f16507n == null) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void C(long j10) {
        l(new w0(this, Math.min(Math.max(30L, 2 * j10), f16505l)), j10);
        this.f16518j = true;
    }

    boolean D(v0.a aVar) {
        if (aVar != null && !aVar.b(this.f16517i.a())) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String k() {
        final v0.a r10 = r();
        if (!D(r10)) {
            return r10.f16660a;
        }
        final String c10 = h0.c(this.f16509a);
        try {
            return (String) zg.m.a(this.f16512d.b(c10, new q0.a() { // from class: com.google.firebase.messaging.x
                @Override // com.google.firebase.messaging.q0.a
                public final Task start() {
                    Task q10;
                    q10 = r0.f16511c.f().q(r0.f16515g, new zg.j() { // from class: com.google.firebase.messaging.y
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
                if (f16508o == null) {
                    f16508o = new ScheduledThreadPoolExecutor(1, new pf.a("TAG"));
                }
                f16508o.schedule(runnable, j10, TimeUnit.SECONDS);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Context m() {
        return this.f16510b;
    }

    public Task q() {
        final zg.k kVar = new zg.k();
        this.f16514f.execute(new Runnable() { // from class: com.google.firebase.messaging.v
            @Override // java.lang.Runnable
            public final void run() {
                FirebaseMessaging.c(FirebaseMessaging.this, kVar);
            }
        });
        return kVar.a();
    }

    v0.a r() {
        return o(this.f16510b).d(p(), h0.c(this.f16509a));
    }

    public boolean w() {
        return this.f16513e.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean x() {
        return this.f16517i.g();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void y(boolean z10) {
        this.f16518j = z10;
    }

    FirebaseMessaging(si.e eVar, fj.a aVar, gj.b bVar, gj.b bVar2, hj.e eVar2, gj.b bVar3, dj.d dVar, h0 h0Var) {
        this(eVar, aVar, bVar3, dVar, h0Var, new c0(eVar, h0Var, bVar, bVar2, eVar2), n.f(), n.c(), n.b());
    }

    FirebaseMessaging(si.e eVar, fj.a aVar, gj.b bVar, dj.d dVar, h0 h0Var, c0 c0Var, Executor executor, Executor executor2, Executor executor3) {
        this.f16518j = false;
        f16507n = bVar;
        this.f16509a = eVar;
        this.f16513e = new a(dVar);
        Context j10 = eVar.j();
        this.f16510b = j10;
        p pVar = new p();
        this.f16519k = pVar;
        this.f16517i = h0Var;
        this.f16511c = c0Var;
        this.f16512d = new q0(executor);
        this.f16514f = executor2;
        this.f16515g = executor3;
        Context j11 = eVar.j();
        if (j11 instanceof Application) {
            ((Application) j11).registerActivityLifecycleCallbacks(pVar);
        } else {
            Log.w("FirebaseMessaging", "Context " + j11 + " was not an application, can't register for lifecycle callbacks. Some notification events may be dropped as a result.");
        }
        if (aVar != null) {
            aVar.a(new a.InterfaceC0334a() { // from class: com.google.firebase.messaging.r
            });
        }
        executor2.execute(new Runnable() { // from class: com.google.firebase.messaging.s
            @Override // java.lang.Runnable
            public final void run() {
                FirebaseMessaging.b(FirebaseMessaging.this);
            }
        });
        Task e10 = a1.e(this, h0Var, c0Var, j10, n.g());
        this.f16516h = e10;
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
