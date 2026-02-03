package com.google.firebase.messaging;

import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.ServiceConnection;
import android.os.IBinder;
import android.util.Log;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.messaging.i1;
import java.util.ArrayDeque;
import java.util.Queue;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class i1 implements ServiceConnection {

    /* renamed from: d  reason: collision with root package name */
    private final Context f17129d;

    /* renamed from: e  reason: collision with root package name */
    private final Intent f17130e;

    /* renamed from: i  reason: collision with root package name */
    private final ScheduledExecutorService f17131i;

    /* renamed from: o  reason: collision with root package name */
    private final Queue f17132o;

    /* renamed from: p  reason: collision with root package name */
    private f1 f17133p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f17134q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        final Intent f17135a;

        /* renamed from: b  reason: collision with root package name */
        private final wg.k f17136b = new wg.k();

        a(Intent intent) {
            this.f17135a = intent;
        }

        public static /* synthetic */ void b(a aVar) {
            aVar.getClass();
            Log.w("FirebaseMessaging", "Service took too long to process intent: " + aVar.f17135a.getAction() + " finishing.");
            aVar.d();
        }

        void c(ScheduledExecutorService scheduledExecutorService) {
            final ScheduledFuture<?> schedule = scheduledExecutorService.schedule(new Runnable() { // from class: com.google.firebase.messaging.g1
                @Override // java.lang.Runnable
                public final void run() {
                    i1.a.b(i1.a.this);
                }
            }, 20L, TimeUnit.SECONDS);
            e().c(scheduledExecutorService, new OnCompleteListener() { // from class: com.google.firebase.messaging.h1
                @Override // com.google.android.gms.tasks.OnCompleteListener
                public final void onComplete(Task task) {
                    schedule.cancel(false);
                }
            });
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public void d() {
            this.f17136b.e(null);
        }

        Task e() {
            return this.f17136b.a();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i1(Context context, String str) {
        this(context, str, new ScheduledThreadPoolExecutor(0, new of.a("Firebase-FirebaseInstanceIdServiceConnection")));
    }

    private void a() {
        while (!this.f17132o.isEmpty()) {
            ((a) this.f17132o.poll()).d();
        }
    }

    private synchronized void b() {
        try {
            if (Log.isLoggable("FirebaseMessaging", 3)) {
                Log.d("FirebaseMessaging", "flush queue called");
            }
            while (!this.f17132o.isEmpty()) {
                if (Log.isLoggable("FirebaseMessaging", 3)) {
                    Log.d("FirebaseMessaging", "found intent to be delivered");
                }
                f1 f1Var = this.f17133p;
                if (f1Var != null && f1Var.isBinderAlive()) {
                    if (Log.isLoggable("FirebaseMessaging", 3)) {
                        Log.d("FirebaseMessaging", "binder is alive, sending the intent.");
                    }
                    this.f17133p.b((a) this.f17132o.poll());
                } else {
                    d();
                    return;
                }
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    private void d() {
        if (Log.isLoggable("FirebaseMessaging", 3)) {
            StringBuilder sb2 = new StringBuilder();
            sb2.append("binder is dead. start connection? ");
            sb2.append(!this.f17134q);
            Log.d("FirebaseMessaging", sb2.toString());
        }
        if (!this.f17134q) {
            this.f17134q = true;
            try {
            } catch (SecurityException e10) {
                Log.e("FirebaseMessaging", "Exception while binding the service", e10);
            }
            if (nf.a.b().a(this.f17129d, this.f17130e, this, 65)) {
                return;
            }
            Log.e("FirebaseMessaging", "binding to the service failed");
            this.f17134q = false;
            a();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized Task c(Intent intent) {
        a aVar;
        try {
            if (Log.isLoggable("FirebaseMessaging", 3)) {
                Log.d("FirebaseMessaging", "new intent queued in the bind-strategy delivery");
            }
            aVar = new a(intent);
            aVar.c(this.f17131i);
            this.f17132o.add(aVar);
            b();
        } catch (Throwable th2) {
            throw th2;
        }
        return aVar.e();
    }

    @Override // android.content.ServiceConnection
    public synchronized void onServiceConnected(ComponentName componentName, IBinder iBinder) {
        try {
            if (Log.isLoggable("FirebaseMessaging", 3)) {
                Log.d("FirebaseMessaging", "onServiceConnected: " + componentName);
            }
            this.f17134q = false;
            if (!(iBinder instanceof f1)) {
                Log.e("FirebaseMessaging", "Invalid service connection: " + iBinder);
                a();
                return;
            }
            this.f17133p = (f1) iBinder;
            b();
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // android.content.ServiceConnection
    public void onServiceDisconnected(ComponentName componentName) {
        if (Log.isLoggable("FirebaseMessaging", 3)) {
            Log.d("FirebaseMessaging", "onServiceDisconnected: " + componentName);
        }
        b();
    }

    i1(Context context, String str, ScheduledExecutorService scheduledExecutorService) {
        this.f17132o = new ArrayDeque();
        this.f17134q = false;
        Context applicationContext = context.getApplicationContext();
        this.f17129d = applicationContext;
        this.f17130e = new Intent(str).setPackage(applicationContext.getPackageName());
        this.f17131i = scheduledExecutorService;
    }
}
