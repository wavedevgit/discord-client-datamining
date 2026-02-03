package com.google.firebase.messaging;

import android.content.Context;
import android.util.Log;
import com.google.android.gms.tasks.Task;
import java.io.IOException;
import java.util.ArrayDeque;
import java.util.Map;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a1 {

    /* renamed from: i  reason: collision with root package name */
    private static final long f16035i = TimeUnit.HOURS.toSeconds(8);

    /* renamed from: a  reason: collision with root package name */
    private final Context f16036a;

    /* renamed from: b  reason: collision with root package name */
    private final h0 f16037b;

    /* renamed from: c  reason: collision with root package name */
    private final c0 f16038c;

    /* renamed from: d  reason: collision with root package name */
    private final FirebaseMessaging f16039d;

    /* renamed from: f  reason: collision with root package name */
    private final ScheduledExecutorService f16041f;

    /* renamed from: h  reason: collision with root package name */
    private final y0 f16043h;

    /* renamed from: e  reason: collision with root package name */
    private final Map f16040e = new u0.a();

    /* renamed from: g  reason: collision with root package name */
    private boolean f16042g = false;

    private a1(FirebaseMessaging firebaseMessaging, h0 h0Var, y0 y0Var, c0 c0Var, Context context, ScheduledExecutorService scheduledExecutorService) {
        this.f16039d = firebaseMessaging;
        this.f16037b = h0Var;
        this.f16043h = y0Var;
        this.f16038c = c0Var;
        this.f16036a = context;
        this.f16041f = scheduledExecutorService;
    }

    public static /* synthetic */ a1 a(Context context, ScheduledExecutorService scheduledExecutorService, FirebaseMessaging firebaseMessaging, h0 h0Var, c0 c0Var) {
        return new a1(firebaseMessaging, h0Var, y0.a(context, scheduledExecutorService), c0Var, context, scheduledExecutorService);
    }

    private static void b(Task task) {
        try {
            wg.m.b(task, 30L, TimeUnit.SECONDS);
        } catch (InterruptedException | TimeoutException e10) {
            throw new IOException("SERVICE_NOT_AVAILABLE", e10);
        } catch (ExecutionException e11) {
            Throwable cause = e11.getCause();
            if (!(cause instanceof IOException)) {
                if (cause instanceof RuntimeException) {
                    throw ((RuntimeException) cause);
                }
                throw new IOException(e11);
            }
            throw ((IOException) cause);
        }
    }

    private void c(String str) {
        b(this.f16038c.l(this.f16039d.k(), str));
    }

    private void d(String str) {
        b(this.f16038c.m(this.f16039d.k(), str));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Task e(final FirebaseMessaging firebaseMessaging, final h0 h0Var, final c0 c0Var, final Context context, final ScheduledExecutorService scheduledExecutorService) {
        return wg.m.c(scheduledExecutorService, new Callable() { // from class: com.google.firebase.messaging.z0
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return a1.a(context, scheduledExecutorService, firebaseMessaging, h0Var, c0Var);
            }
        });
    }

    static boolean g() {
        if (!Log.isLoggable("FirebaseMessaging", 3)) {
            return false;
        }
        return true;
    }

    private void i(x0 x0Var) {
        synchronized (this.f16040e) {
            try {
                String e10 = x0Var.e();
                if (!this.f16040e.containsKey(e10)) {
                    return;
                }
                ArrayDeque arrayDeque = (ArrayDeque) this.f16040e.get(e10);
                wg.k kVar = (wg.k) arrayDeque.poll();
                if (kVar != null) {
                    kVar.c(null);
                }
                if (arrayDeque.isEmpty()) {
                    this.f16040e.remove(e10);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private void m() {
        if (!h()) {
            p(0L);
        }
    }

    boolean f() {
        if (this.f16043h.b() != null) {
            return true;
        }
        return false;
    }

    synchronized boolean h() {
        return this.f16042g;
    }

    boolean j(x0 x0Var) {
        try {
            String b10 = x0Var.b();
            int hashCode = b10.hashCode();
            if (hashCode != 83) {
                if (hashCode == 85 && b10.equals("U")) {
                    d(x0Var.c());
                    if (g()) {
                        Log.d("FirebaseMessaging", "Unsubscribe from topic: " + x0Var.c() + " succeeded.");
                        return true;
                    }
                    return true;
                }
            } else if (b10.equals("S")) {
                c(x0Var.c());
                if (g()) {
                    Log.d("FirebaseMessaging", "Subscribe to topic: " + x0Var.c() + " succeeded.");
                    return true;
                }
                return true;
            }
            if (g()) {
                Log.d("FirebaseMessaging", "Unknown topic operation" + x0Var + ".");
                return true;
            }
            return true;
        } catch (IOException e10) {
            if (!"SERVICE_NOT_AVAILABLE".equals(e10.getMessage()) && !"INTERNAL_SERVER_ERROR".equals(e10.getMessage())) {
                if (e10.getMessage() == null) {
                    Log.e("FirebaseMessaging", "Topic operation failed without exception message. Will retry Topic operation.");
                    return false;
                }
                throw e10;
            }
            Log.e("FirebaseMessaging", "Topic operation failed: " + e10.getMessage() + ". Will retry Topic operation.");
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void k(Runnable runnable, long j10) {
        this.f16041f.schedule(runnable, j10, TimeUnit.SECONDS);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public synchronized void l(boolean z10) {
        this.f16042g = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void n() {
        if (f()) {
            m();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Code restructure failed: missing block: B:12:0x001b, code lost:
        return true;
     */
    /* JADX WARN: Code restructure failed: missing block: B:6:0x000d, code lost:
        if (g() == false) goto L16;
     */
    /* JADX WARN: Code restructure failed: missing block: B:7:0x000f, code lost:
        android.util.Log.d("FirebaseMessaging", "topic sync succeeded");
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public boolean o() {
        /*
            r2 = this;
        L0:
            monitor-enter(r2)
            com.google.firebase.messaging.y0 r0 = r2.f16043h     // Catch: java.lang.Throwable -> L17
            com.google.firebase.messaging.x0 r0 = r0.b()     // Catch: java.lang.Throwable -> L17
            if (r0 != 0) goto L1c
            boolean r0 = g()     // Catch: java.lang.Throwable -> L17
            if (r0 == 0) goto L19
            java.lang.String r0 = "FirebaseMessaging"
            java.lang.String r1 = "topic sync succeeded"
            android.util.Log.d(r0, r1)     // Catch: java.lang.Throwable -> L17
            goto L19
        L17:
            r0 = move-exception
            goto L2e
        L19:
            r0 = 1
            monitor-exit(r2)     // Catch: java.lang.Throwable -> L17
            return r0
        L1c:
            monitor-exit(r2)     // Catch: java.lang.Throwable -> L17
            boolean r1 = r2.j(r0)
            if (r1 != 0) goto L25
            r0 = 0
            return r0
        L25:
            com.google.firebase.messaging.y0 r1 = r2.f16043h
            r1.d(r0)
            r2.i(r0)
            goto L0
        L2e:
            monitor-exit(r2)     // Catch: java.lang.Throwable -> L17
            throw r0
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.firebase.messaging.a1.o():boolean");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void p(long j10) {
        k(new b1(this, this.f16036a, this.f16037b, Math.min(Math.max(30L, 2 * j10), f16035i)), j10);
        l(true);
    }
}
