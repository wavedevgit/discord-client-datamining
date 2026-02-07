package androidx.work.impl;

import android.content.Context;
import androidx.work.WorkerParameters;
import androidx.work.c;
import androidx.work.impl.background.systemalarm.RescheduleReceiver;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.CancellationException;
import java.util.concurrent.ExecutionException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class t0 implements Runnable {
    static final String D = k4.m.i("WorkerWrapper");

    /* renamed from: d  reason: collision with root package name */
    Context f6135d;

    /* renamed from: e  reason: collision with root package name */
    private final String f6136e;

    /* renamed from: i  reason: collision with root package name */
    private WorkerParameters.a f6137i;

    /* renamed from: o  reason: collision with root package name */
    p4.u f6138o;

    /* renamed from: p  reason: collision with root package name */
    androidx.work.c f6139p;

    /* renamed from: q  reason: collision with root package name */
    r4.b f6140q;

    /* renamed from: s  reason: collision with root package name */
    private androidx.work.a f6142s;

    /* renamed from: t  reason: collision with root package name */
    private k4.b f6143t;

    /* renamed from: u  reason: collision with root package name */
    private androidx.work.impl.foreground.a f6144u;

    /* renamed from: v  reason: collision with root package name */
    private WorkDatabase f6145v;

    /* renamed from: w  reason: collision with root package name */
    private p4.v f6146w;

    /* renamed from: x  reason: collision with root package name */
    private p4.b f6147x;

    /* renamed from: y  reason: collision with root package name */
    private List f6148y;

    /* renamed from: z  reason: collision with root package name */
    private String f6149z;

    /* renamed from: r  reason: collision with root package name */
    c.a f6141r = c.a.a();
    androidx.work.impl.utils.futures.c A = androidx.work.impl.utils.futures.c.t();
    final androidx.work.impl.utils.futures.c B = androidx.work.impl.utils.futures.c.t();
    private volatile int C = -256;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ListenableFuture f6150d;

        a(ListenableFuture listenableFuture) {
            this.f6150d = listenableFuture;
        }

        @Override // java.lang.Runnable
        public void run() {
            if (t0.this.B.isCancelled()) {
                return;
            }
            try {
                this.f6150d.get();
                k4.m e10 = k4.m.e();
                String str = t0.D;
                e10.a(str, "Starting work for " + t0.this.f6138o.f43735c);
                t0 t0Var = t0.this;
                t0Var.B.r(t0Var.f6139p.n());
            } catch (Throwable th2) {
                t0.this.B.q(th2);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ String f6152d;

        b(String str) {
            this.f6152d = str;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                try {
                    c.a aVar = (c.a) t0.this.B.get();
                    if (aVar == null) {
                        k4.m e10 = k4.m.e();
                        String str = t0.D;
                        e10.c(str, t0.this.f6138o.f43735c + " returned a null result. Treating it as a failure.");
                    } else {
                        k4.m e11 = k4.m.e();
                        String str2 = t0.D;
                        e11.a(str2, t0.this.f6138o.f43735c + " returned a " + aVar + ".");
                        t0.this.f6141r = aVar;
                    }
                    t0.this.i();
                } catch (InterruptedException e12) {
                    e = e12;
                    k4.m e13 = k4.m.e();
                    String str3 = t0.D;
                    e13.d(str3, this.f6152d + " failed because it threw an exception/error", e);
                    t0.this.i();
                } catch (CancellationException e14) {
                    k4.m e15 = k4.m.e();
                    String str4 = t0.D;
                    e15.g(str4, this.f6152d + " was cancelled", e14);
                    t0.this.i();
                } catch (ExecutionException e16) {
                    e = e16;
                    k4.m e132 = k4.m.e();
                    String str32 = t0.D;
                    e132.d(str32, this.f6152d + " failed because it threw an exception/error", e);
                    t0.this.i();
                }
            } catch (Throwable th2) {
                t0.this.i();
                throw th2;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {

        /* renamed from: a  reason: collision with root package name */
        Context f6154a;

        /* renamed from: b  reason: collision with root package name */
        androidx.work.c f6155b;

        /* renamed from: c  reason: collision with root package name */
        androidx.work.impl.foreground.a f6156c;

        /* renamed from: d  reason: collision with root package name */
        r4.b f6157d;

        /* renamed from: e  reason: collision with root package name */
        androidx.work.a f6158e;

        /* renamed from: f  reason: collision with root package name */
        WorkDatabase f6159f;

        /* renamed from: g  reason: collision with root package name */
        p4.u f6160g;

        /* renamed from: h  reason: collision with root package name */
        private final List f6161h;

        /* renamed from: i  reason: collision with root package name */
        WorkerParameters.a f6162i = new WorkerParameters.a();

        public c(Context context, androidx.work.a aVar, r4.b bVar, androidx.work.impl.foreground.a aVar2, WorkDatabase workDatabase, p4.u uVar, List list) {
            this.f6154a = context.getApplicationContext();
            this.f6157d = bVar;
            this.f6156c = aVar2;
            this.f6158e = aVar;
            this.f6159f = workDatabase;
            this.f6160g = uVar;
            this.f6161h = list;
        }

        public t0 b() {
            return new t0(this);
        }

        public c c(WorkerParameters.a aVar) {
            if (aVar != null) {
                this.f6162i = aVar;
            }
            return this;
        }
    }

    t0(c cVar) {
        this.f6135d = cVar.f6154a;
        this.f6140q = cVar.f6157d;
        this.f6144u = cVar.f6156c;
        p4.u uVar = cVar.f6160g;
        this.f6138o = uVar;
        this.f6136e = uVar.f43733a;
        this.f6137i = cVar.f6162i;
        this.f6139p = cVar.f6155b;
        androidx.work.a aVar = cVar.f6158e;
        this.f6142s = aVar;
        this.f6143t = aVar.a();
        WorkDatabase workDatabase = cVar.f6159f;
        this.f6145v = workDatabase;
        this.f6146w = workDatabase.H();
        this.f6147x = this.f6145v.C();
        this.f6148y = cVar.f6161h;
    }

    public static /* synthetic */ void a(t0 t0Var, ListenableFuture listenableFuture) {
        if (t0Var.B.isCancelled()) {
            listenableFuture.cancel(true);
        }
    }

    private String b(List list) {
        StringBuilder sb2 = new StringBuilder("Work [ id=");
        sb2.append(this.f6136e);
        sb2.append(", tags={ ");
        Iterator it = list.iterator();
        boolean z10 = true;
        while (it.hasNext()) {
            String str = (String) it.next();
            if (z10) {
                z10 = false;
            } else {
                sb2.append(", ");
            }
            sb2.append(str);
        }
        sb2.append(" } ]");
        return sb2.toString();
    }

    private void f(c.a aVar) {
        if (aVar instanceof c.a.C0076c) {
            k4.m e10 = k4.m.e();
            String str = D;
            e10.f(str, "Worker result SUCCESS for " + this.f6149z);
            if (this.f6138o.m()) {
                k();
            } else {
                p();
            }
        } else if (aVar instanceof c.a.b) {
            k4.m e11 = k4.m.e();
            String str2 = D;
            e11.f(str2, "Worker result RETRY for " + this.f6149z);
            j();
        } else {
            k4.m e12 = k4.m.e();
            String str3 = D;
            e12.f(str3, "Worker result FAILURE for " + this.f6149z);
            if (this.f6138o.m()) {
                k();
            } else {
                o();
            }
        }
    }

    private void h(String str) {
        LinkedList linkedList = new LinkedList();
        linkedList.add(str);
        while (!linkedList.isEmpty()) {
            String str2 = (String) linkedList.remove();
            if (this.f6146w.h(str2) != k4.x.CANCELLED) {
                this.f6146w.d(k4.x.FAILED, str2);
            }
            linkedList.addAll(this.f6147x.a(str2));
        }
    }

    private void j() {
        this.f6145v.e();
        try {
            this.f6146w.d(k4.x.ENQUEUED, this.f6136e);
            this.f6146w.s(this.f6136e, this.f6143t.a());
            this.f6146w.z(this.f6136e, this.f6138o.h());
            this.f6146w.o(this.f6136e, -1L);
            this.f6145v.A();
        } finally {
            this.f6145v.i();
            l(true);
        }
    }

    private void k() {
        this.f6145v.e();
        try {
            this.f6146w.s(this.f6136e, this.f6143t.a());
            this.f6146w.d(k4.x.ENQUEUED, this.f6136e);
            this.f6146w.w(this.f6136e);
            this.f6146w.z(this.f6136e, this.f6138o.h());
            this.f6146w.b(this.f6136e);
            this.f6146w.o(this.f6136e, -1L);
            this.f6145v.A();
        } finally {
            this.f6145v.i();
            l(false);
        }
    }

    private void l(boolean z10) {
        this.f6145v.e();
        try {
            if (!this.f6145v.H().u()) {
                q4.m.c(this.f6135d, RescheduleReceiver.class, false);
            }
            if (z10) {
                this.f6146w.d(k4.x.ENQUEUED, this.f6136e);
                this.f6146w.e(this.f6136e, this.C);
                this.f6146w.o(this.f6136e, -1L);
            }
            this.f6145v.A();
            this.f6145v.i();
            this.A.p(Boolean.valueOf(z10));
        } catch (Throwable th2) {
            this.f6145v.i();
            throw th2;
        }
    }

    private void m() {
        k4.x h10 = this.f6146w.h(this.f6136e);
        if (h10 == k4.x.RUNNING) {
            k4.m e10 = k4.m.e();
            String str = D;
            e10.a(str, "Status for " + this.f6136e + " is RUNNING; not doing any work and rescheduling for later execution");
            l(true);
            return;
        }
        k4.m e11 = k4.m.e();
        String str2 = D;
        e11.a(str2, "Status for " + this.f6136e + " is " + h10 + " ; not doing any work");
        l(false);
    }

    private void n() {
        androidx.work.b a10;
        if (!q()) {
            this.f6145v.e();
            try {
                p4.u uVar = this.f6138o;
                if (uVar.f43734b != k4.x.ENQUEUED) {
                    m();
                    this.f6145v.A();
                    k4.m e10 = k4.m.e();
                    String str = D;
                    e10.a(str, this.f6138o.f43735c + " is not in ENQUEUED state. Nothing more to do");
                } else if ((uVar.m() || this.f6138o.l()) && this.f6143t.a() < this.f6138o.c()) {
                    k4.m.e().a(D, String.format("Delaying execution for %s because it is being executed before schedule.", this.f6138o.f43735c));
                    l(true);
                    this.f6145v.A();
                } else {
                    this.f6145v.A();
                    this.f6145v.i();
                    if (this.f6138o.m()) {
                        a10 = this.f6138o.f43737e;
                    } else {
                        k4.i b10 = this.f6142s.f().b(this.f6138o.f43736d);
                        if (b10 == null) {
                            k4.m e11 = k4.m.e();
                            String str2 = D;
                            e11.c(str2, "Could not create Input Merger " + this.f6138o.f43736d);
                            o();
                            return;
                        }
                        ArrayList arrayList = new ArrayList();
                        arrayList.add(this.f6138o.f43737e);
                        arrayList.addAll(this.f6146w.k(this.f6136e));
                        a10 = b10.a(arrayList);
                    }
                    androidx.work.b bVar = a10;
                    UUID fromString = UUID.fromString(this.f6136e);
                    List list = this.f6148y;
                    WorkerParameters.a aVar = this.f6137i;
                    p4.u uVar2 = this.f6138o;
                    WorkerParameters workerParameters = new WorkerParameters(fromString, bVar, list, aVar, uVar2.f43743k, uVar2.f(), this.f6142s.d(), this.f6140q, this.f6142s.n(), new q4.y(this.f6145v, this.f6140q), new q4.x(this.f6145v, this.f6144u, this.f6140q));
                    if (this.f6139p == null) {
                        this.f6139p = this.f6142s.n().b(this.f6135d, this.f6138o.f43735c, workerParameters);
                    }
                    androidx.work.c cVar = this.f6139p;
                    if (cVar == null) {
                        k4.m e12 = k4.m.e();
                        String str3 = D;
                        e12.c(str3, "Could not create Worker " + this.f6138o.f43735c);
                        o();
                    } else if (cVar.k()) {
                        k4.m e13 = k4.m.e();
                        String str4 = D;
                        e13.c(str4, "Received an already-used Worker " + this.f6138o.f43735c + "; Worker Factory should return new instances");
                        o();
                    } else {
                        this.f6139p.m();
                        if (r()) {
                            if (q()) {
                                return;
                            }
                            q4.w wVar = new q4.w(this.f6135d, this.f6138o, this.f6139p, workerParameters.b(), this.f6140q);
                            this.f6140q.a().execute(wVar);
                            final ListenableFuture b11 = wVar.b();
                            this.B.a(new Runnable() { // from class: androidx.work.impl.s0
                                @Override // java.lang.Runnable
                                public final void run() {
                                    t0.a(t0.this, b11);
                                }
                            }, new q4.s());
                            b11.a(new a(b11), this.f6140q.a());
                            this.B.a(new b(this.f6149z), this.f6140q.c());
                            return;
                        }
                        m();
                    }
                }
            } finally {
                this.f6145v.i();
            }
        }
    }

    private void p() {
        this.f6145v.e();
        try {
            this.f6146w.d(k4.x.SUCCEEDED, this.f6136e);
            this.f6146w.r(this.f6136e, ((c.a.C0076c) this.f6141r).e());
            long a10 = this.f6143t.a();
            for (String str : this.f6147x.a(this.f6136e)) {
                if (this.f6146w.h(str) == k4.x.BLOCKED && this.f6147x.b(str)) {
                    k4.m e10 = k4.m.e();
                    String str2 = D;
                    e10.f(str2, "Setting status to enqueued for " + str);
                    this.f6146w.d(k4.x.ENQUEUED, str);
                    this.f6146w.s(str, a10);
                }
            }
            this.f6145v.A();
            this.f6145v.i();
            l(false);
        } catch (Throwable th2) {
            this.f6145v.i();
            l(false);
            throw th2;
        }
    }

    private boolean q() {
        if (this.C == -256) {
            return false;
        }
        k4.m e10 = k4.m.e();
        String str = D;
        e10.a(str, "Work interrupted for " + this.f6149z);
        k4.x h10 = this.f6146w.h(this.f6136e);
        if (h10 == null) {
            l(false);
        } else {
            l(!h10.d());
        }
        return true;
    }

    private boolean r() {
        boolean z10;
        this.f6145v.e();
        try {
            if (this.f6146w.h(this.f6136e) == k4.x.ENQUEUED) {
                this.f6146w.d(k4.x.RUNNING, this.f6136e);
                this.f6146w.x(this.f6136e);
                this.f6146w.e(this.f6136e, -256);
                z10 = true;
            } else {
                z10 = false;
            }
            this.f6145v.A();
            this.f6145v.i();
            return z10;
        } catch (Throwable th2) {
            this.f6145v.i();
            throw th2;
        }
    }

    public ListenableFuture c() {
        return this.A;
    }

    public p4.m d() {
        return p4.x.a(this.f6138o);
    }

    public p4.u e() {
        return this.f6138o;
    }

    public void g(int i10) {
        this.C = i10;
        q();
        this.B.cancel(true);
        if (this.f6139p != null && this.B.isCancelled()) {
            this.f6139p.o(i10);
            return;
        }
        k4.m.e().a(D, "WorkSpec " + this.f6138o + " is already done. Not interrupting.");
    }

    void i() {
        if (!q()) {
            this.f6145v.e();
            try {
                k4.x h10 = this.f6146w.h(this.f6136e);
                this.f6145v.G().a(this.f6136e);
                if (h10 == null) {
                    l(false);
                } else if (h10 == k4.x.RUNNING) {
                    f(this.f6141r);
                } else if (!h10.d()) {
                    this.C = -512;
                    j();
                }
                this.f6145v.A();
                this.f6145v.i();
            } catch (Throwable th2) {
                this.f6145v.i();
                throw th2;
            }
        }
    }

    void o() {
        this.f6145v.e();
        try {
            h(this.f6136e);
            androidx.work.b e10 = ((c.a.C0075a) this.f6141r).e();
            this.f6146w.z(this.f6136e, this.f6138o.h());
            this.f6146w.r(this.f6136e, e10);
            this.f6145v.A();
        } finally {
            this.f6145v.i();
            l(false);
        }
    }

    @Override // java.lang.Runnable
    public void run() {
        this.f6149z = b(this.f6148y);
        n();
    }
}
