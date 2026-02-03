package androidx.work.impl;

import android.content.Context;
import android.os.PowerManager;
import androidx.work.WorkerParameters;
import androidx.work.impl.t0;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class u implements androidx.work.impl.foreground.a {

    /* renamed from: l  reason: collision with root package name */
    private static final String f5722l = k4.m.i("Processor");

    /* renamed from: b  reason: collision with root package name */
    private Context f5724b;

    /* renamed from: c  reason: collision with root package name */
    private androidx.work.a f5725c;

    /* renamed from: d  reason: collision with root package name */
    private r4.b f5726d;

    /* renamed from: e  reason: collision with root package name */
    private WorkDatabase f5727e;

    /* renamed from: g  reason: collision with root package name */
    private Map f5729g = new HashMap();

    /* renamed from: f  reason: collision with root package name */
    private Map f5728f = new HashMap();

    /* renamed from: i  reason: collision with root package name */
    private Set f5731i = new HashSet();

    /* renamed from: j  reason: collision with root package name */
    private final List f5732j = new ArrayList();

    /* renamed from: a  reason: collision with root package name */
    private PowerManager.WakeLock f5723a = null;

    /* renamed from: k  reason: collision with root package name */
    private final Object f5733k = new Object();

    /* renamed from: h  reason: collision with root package name */
    private Map f5730h = new HashMap();

    public u(Context context, androidx.work.a aVar, r4.b bVar, WorkDatabase workDatabase) {
        this.f5724b = context;
        this.f5725c = aVar;
        this.f5726d = bVar;
        this.f5727e = workDatabase;
    }

    public static /* synthetic */ p4.u b(u uVar, ArrayList arrayList, String str) {
        arrayList.addAll(uVar.f5727e.I().a(str));
        return uVar.f5727e.H().i(str);
    }

    public static /* synthetic */ void c(u uVar, p4.m mVar, boolean z10) {
        synchronized (uVar.f5733k) {
            try {
                for (f fVar : uVar.f5732j) {
                    fVar.b(mVar, z10);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public static /* synthetic */ void d(u uVar, ListenableFuture listenableFuture, t0 t0Var) {
        boolean z10;
        uVar.getClass();
        try {
            z10 = ((Boolean) listenableFuture.get()).booleanValue();
        } catch (InterruptedException | ExecutionException unused) {
            z10 = true;
        }
        uVar.l(t0Var, z10);
    }

    private t0 f(String str) {
        boolean z10;
        t0 t0Var = (t0) this.f5728f.remove(str);
        if (t0Var != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!z10) {
            t0Var = (t0) this.f5729g.remove(str);
        }
        this.f5730h.remove(str);
        if (z10) {
            r();
        }
        return t0Var;
    }

    private t0 h(String str) {
        t0 t0Var = (t0) this.f5728f.get(str);
        if (t0Var == null) {
            return (t0) this.f5729g.get(str);
        }
        return t0Var;
    }

    private static boolean i(String str, t0 t0Var, int i10) {
        if (t0Var != null) {
            t0Var.g(i10);
            k4.m e10 = k4.m.e();
            String str2 = f5722l;
            e10.a(str2, "WorkerWrapper interrupted for " + str);
            return true;
        }
        k4.m e11 = k4.m.e();
        String str3 = f5722l;
        e11.a(str3, "WorkerWrapper could not be found for " + str);
        return false;
    }

    private void l(t0 t0Var, boolean z10) {
        synchronized (this.f5733k) {
            try {
                p4.m d10 = t0Var.d();
                String b10 = d10.b();
                if (h(b10) == t0Var) {
                    f(b10);
                }
                k4.m e10 = k4.m.e();
                String str = f5722l;
                e10.a(str, getClass().getSimpleName() + " " + b10 + " executed; reschedule = " + z10);
                for (f fVar : this.f5732j) {
                    fVar.b(d10, z10);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private void n(final p4.m mVar, final boolean z10) {
        this.f5726d.a().execute(new Runnable() { // from class: androidx.work.impl.t
            @Override // java.lang.Runnable
            public final void run() {
                u.c(u.this, mVar, z10);
            }
        });
    }

    private void r() {
        synchronized (this.f5733k) {
            try {
                if (this.f5728f.isEmpty()) {
                    this.f5724b.startService(androidx.work.impl.foreground.b.g(this.f5724b));
                    PowerManager.WakeLock wakeLock = this.f5723a;
                    if (wakeLock != null) {
                        wakeLock.release();
                        this.f5723a = null;
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // androidx.work.impl.foreground.a
    public void a(String str, k4.g gVar) {
        synchronized (this.f5733k) {
            try {
                k4.m e10 = k4.m.e();
                String str2 = f5722l;
                e10.f(str2, "Moving WorkSpec (" + str + ") to the foreground");
                t0 t0Var = (t0) this.f5729g.remove(str);
                if (t0Var != null) {
                    if (this.f5723a == null) {
                        PowerManager.WakeLock b10 = q4.t.b(this.f5724b, "ProcessorForegroundLck");
                        this.f5723a = b10;
                        b10.acquire();
                    }
                    this.f5728f.put(str, t0Var);
                    androidx.core.content.a.p(this.f5724b, androidx.work.impl.foreground.b.f(this.f5724b, t0Var.d(), gVar));
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void e(f fVar) {
        synchronized (this.f5733k) {
            this.f5732j.add(fVar);
        }
    }

    public p4.u g(String str) {
        synchronized (this.f5733k) {
            try {
                t0 h10 = h(str);
                if (h10 != null) {
                    return h10.e();
                }
                return null;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public boolean j(String str) {
        boolean contains;
        synchronized (this.f5733k) {
            contains = this.f5731i.contains(str);
        }
        return contains;
    }

    public boolean k(String str) {
        boolean z10;
        synchronized (this.f5733k) {
            if (h(str) != null) {
                z10 = true;
            } else {
                z10 = false;
            }
        }
        return z10;
    }

    public void m(f fVar) {
        synchronized (this.f5733k) {
            this.f5732j.remove(fVar);
        }
    }

    public boolean o(a0 a0Var) {
        return p(a0Var, null);
    }

    public boolean p(a0 a0Var, WorkerParameters.a aVar) {
        Throwable th2;
        p4.m a10 = a0Var.a();
        final String b10 = a10.b();
        final ArrayList arrayList = new ArrayList();
        p4.u uVar = (p4.u) this.f5727e.z(new Callable() { // from class: androidx.work.impl.r
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return u.b(u.this, arrayList, b10);
            }
        });
        if (uVar == null) {
            k4.m e10 = k4.m.e();
            String str = f5722l;
            e10.k(str, "Didn't find WorkSpec for id " + a10);
            n(a10, false);
            return false;
        }
        synchronized (this.f5733k) {
            try {
                try {
                    try {
                        if (k(b10)) {
                            Set set = (Set) this.f5730h.get(b10);
                            if (((a0) set.iterator().next()).a().a() == a10.a()) {
                                set.add(a0Var);
                                k4.m e11 = k4.m.e();
                                String str2 = f5722l;
                                e11.a(str2, "Work " + a10 + " is already enqueued for processing");
                            } else {
                                n(a10, false);
                            }
                            return false;
                        } else if (uVar.f() != a10.a()) {
                            n(a10, false);
                            return false;
                        } else {
                            final t0 b11 = new t0.c(this.f5724b, this.f5725c, this.f5726d, this, this.f5727e, uVar, arrayList).c(aVar).b();
                            final ListenableFuture c10 = b11.c();
                            c10.a(new Runnable() { // from class: androidx.work.impl.s
                                @Override // java.lang.Runnable
                                public final void run() {
                                    u.d(u.this, c10, b11);
                                }
                            }, this.f5726d.a());
                            this.f5729g.put(b10, b11);
                            HashSet hashSet = new HashSet();
                            hashSet.add(a0Var);
                            this.f5730h.put(b10, hashSet);
                            this.f5726d.c().execute(b11);
                            k4.m e12 = k4.m.e();
                            String str3 = f5722l;
                            e12.a(str3, getClass().getSimpleName() + ": processing " + a10);
                            return true;
                        }
                    } catch (Throwable th3) {
                        th2 = th3;
                        throw th2;
                    }
                } catch (Throwable th4) {
                    th = th4;
                    th2 = th;
                    throw th2;
                }
            } catch (Throwable th5) {
                th = th5;
                th2 = th;
                throw th2;
            }
        }
    }

    public boolean q(String str, int i10) {
        t0 f10;
        synchronized (this.f5733k) {
            k4.m e10 = k4.m.e();
            String str2 = f5722l;
            e10.a(str2, "Processor cancelling " + str);
            this.f5731i.add(str);
            f10 = f(str);
        }
        return i(str, f10, i10);
    }

    public boolean s(a0 a0Var, int i10) {
        t0 f10;
        String b10 = a0Var.a().b();
        synchronized (this.f5733k) {
            f10 = f(b10);
        }
        return i(b10, f10, i10);
    }

    public boolean t(a0 a0Var, int i10) {
        String b10 = a0Var.a().b();
        synchronized (this.f5733k) {
            try {
                if (this.f5728f.get(b10) != null) {
                    k4.m e10 = k4.m.e();
                    String str = f5722l;
                    e10.a(str, "Ignored stopWork. WorkerWrapper " + b10 + " is in foreground");
                    return false;
                }
                Set set = (Set) this.f5730h.get(b10);
                if (set != null && set.contains(a0Var)) {
                    return i(b10, f(b10), i10);
                }
                return false;
            } finally {
            }
        }
    }
}
