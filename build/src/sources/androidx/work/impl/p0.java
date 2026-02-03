package androidx.work.impl;

import android.content.BroadcastReceiver;
import android.content.Context;
import androidx.work.impl.utils.ForceStopRunnable;
import java.util.List;
import java.util.UUID;
import k4.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p0 extends k4.y {

    /* renamed from: k  reason: collision with root package name */
    private static final String f5665k = k4.m.i("WorkManagerImpl");

    /* renamed from: l  reason: collision with root package name */
    private static p0 f5666l = null;

    /* renamed from: m  reason: collision with root package name */
    private static p0 f5667m = null;

    /* renamed from: n  reason: collision with root package name */
    private static final Object f5668n = new Object();

    /* renamed from: a  reason: collision with root package name */
    private Context f5669a;

    /* renamed from: b  reason: collision with root package name */
    private androidx.work.a f5670b;

    /* renamed from: c  reason: collision with root package name */
    private WorkDatabase f5671c;

    /* renamed from: d  reason: collision with root package name */
    private r4.b f5672d;

    /* renamed from: e  reason: collision with root package name */
    private List f5673e;

    /* renamed from: f  reason: collision with root package name */
    private u f5674f;

    /* renamed from: g  reason: collision with root package name */
    private q4.n f5675g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f5676h = false;

    /* renamed from: i  reason: collision with root package name */
    private BroadcastReceiver.PendingResult f5677i;

    /* renamed from: j  reason: collision with root package name */
    private final o4.n f5678j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a {
        static boolean a(Context context) {
            return context.isDeviceProtectedStorage();
        }
    }

    public p0(Context context, androidx.work.a aVar, r4.b bVar, WorkDatabase workDatabase, List list, u uVar, o4.n nVar) {
        Context applicationContext = context.getApplicationContext();
        if (!a.a(applicationContext)) {
            k4.m.h(new m.a(aVar.j()));
            this.f5669a = applicationContext;
            this.f5672d = bVar;
            this.f5671c = workDatabase;
            this.f5674f = uVar;
            this.f5678j = nVar;
            this.f5670b = aVar;
            this.f5673e = list;
            this.f5675g = new q4.n(workDatabase);
            z.e(list, this.f5674f, bVar.c(), this.f5671c, aVar);
            this.f5672d.d(new ForceStopRunnable(applicationContext, this));
            return;
        }
        throw new IllegalStateException("Cannot initialize WorkManager in direct boot mode");
    }

    /* JADX WARN: Code restructure failed: missing block: B:14:0x0018, code lost:
        r3 = r3.getApplicationContext();
     */
    /* JADX WARN: Code restructure failed: missing block: B:15:0x001e, code lost:
        if (androidx.work.impl.p0.f5667m != null) goto L16;
     */
    /* JADX WARN: Code restructure failed: missing block: B:16:0x0020, code lost:
        androidx.work.impl.p0.f5667m = androidx.work.impl.q0.c(r3, r4);
     */
    /* JADX WARN: Code restructure failed: missing block: B:17:0x0026, code lost:
        androidx.work.impl.p0.f5666l = androidx.work.impl.p0.f5667m;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static void f(android.content.Context r3, androidx.work.a r4) {
        /*
            java.lang.Object r0 = androidx.work.impl.p0.f5668n
            monitor-enter(r0)
            androidx.work.impl.p0 r1 = androidx.work.impl.p0.f5666l     // Catch: java.lang.Throwable -> L14
            if (r1 == 0) goto L16
            androidx.work.impl.p0 r2 = androidx.work.impl.p0.f5667m     // Catch: java.lang.Throwable -> L14
            if (r2 != 0) goto Lc
            goto L16
        Lc:
            java.lang.IllegalStateException r3 = new java.lang.IllegalStateException     // Catch: java.lang.Throwable -> L14
            java.lang.String r4 = "WorkManager is already initialized.  Did you try to initialize it manually without disabling WorkManagerInitializer? See WorkManager#initialize(Context, Configuration) or the class level Javadoc for more information."
            r3.<init>(r4)     // Catch: java.lang.Throwable -> L14
            throw r3     // Catch: java.lang.Throwable -> L14
        L14:
            r3 = move-exception
            goto L2c
        L16:
            if (r1 != 0) goto L2a
            android.content.Context r3 = r3.getApplicationContext()     // Catch: java.lang.Throwable -> L14
            androidx.work.impl.p0 r1 = androidx.work.impl.p0.f5667m     // Catch: java.lang.Throwable -> L14
            if (r1 != 0) goto L26
            androidx.work.impl.p0 r3 = androidx.work.impl.q0.c(r3, r4)     // Catch: java.lang.Throwable -> L14
            androidx.work.impl.p0.f5667m = r3     // Catch: java.lang.Throwable -> L14
        L26:
            androidx.work.impl.p0 r3 = androidx.work.impl.p0.f5667m     // Catch: java.lang.Throwable -> L14
            androidx.work.impl.p0.f5666l = r3     // Catch: java.lang.Throwable -> L14
        L2a:
            monitor-exit(r0)     // Catch: java.lang.Throwable -> L14
            return
        L2c:
            monitor-exit(r0)     // Catch: java.lang.Throwable -> L14
            throw r3
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.work.impl.p0.f(android.content.Context, androidx.work.a):void");
    }

    public static p0 j() {
        synchronized (f5668n) {
            try {
                p0 p0Var = f5666l;
                if (p0Var != null) {
                    return p0Var;
                }
                return f5667m;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public static p0 k(Context context) {
        p0 j10;
        synchronized (f5668n) {
            try {
                j10 = j();
                if (j10 == null) {
                    context.getApplicationContext();
                    throw new IllegalStateException("WorkManager is not initialized properly.  You have explicitly disabled WorkManagerInitializer in your manifest, have not manually called WorkManager#initialize at this point, and your Application does not implement Configuration.Provider.");
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return j10;
    }

    @Override // k4.y
    public k4.q a(List list) {
        if (!list.isEmpty()) {
            return new c0(this, list).a();
        }
        throw new IllegalArgumentException("enqueue needs at least one WorkRequest.");
    }

    @Override // k4.y
    public k4.q c(String str, k4.f fVar, List list) {
        return new c0(this, str, fVar, list).a();
    }

    public k4.q g(UUID uuid) {
        q4.b b10 = q4.b.b(uuid, this);
        this.f5672d.d(b10);
        return b10.d();
    }

    public Context h() {
        return this.f5669a;
    }

    public androidx.work.a i() {
        return this.f5670b;
    }

    public q4.n l() {
        return this.f5675g;
    }

    public u m() {
        return this.f5674f;
    }

    public List n() {
        return this.f5673e;
    }

    public o4.n o() {
        return this.f5678j;
    }

    public WorkDatabase p() {
        return this.f5671c;
    }

    public r4.b q() {
        return this.f5672d;
    }

    public void r() {
        synchronized (f5668n) {
            try {
                this.f5676h = true;
                BroadcastReceiver.PendingResult pendingResult = this.f5677i;
                if (pendingResult != null) {
                    pendingResult.finish();
                    this.f5677i = null;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void s() {
        androidx.work.impl.background.systemjob.b.a(h());
        p().H().m();
        z.f(i(), p(), n());
    }

    public void t(BroadcastReceiver.PendingResult pendingResult) {
        synchronized (f5668n) {
            try {
                BroadcastReceiver.PendingResult pendingResult2 = this.f5677i;
                if (pendingResult2 != null) {
                    pendingResult2.finish();
                }
                this.f5677i = pendingResult;
                if (this.f5676h) {
                    pendingResult.finish();
                    this.f5677i = null;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void u(p4.m mVar) {
        this.f5672d.d(new q4.r(this.f5674f, new a0(mVar), true));
    }
}
