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
    Context f5725d;

    /* renamed from: e  reason: collision with root package name */
    private final String f5726e;

    /* renamed from: i  reason: collision with root package name */
    private WorkerParameters.a f5727i;

    /* renamed from: o  reason: collision with root package name */
    p4.u f5728o;

    /* renamed from: p  reason: collision with root package name */
    androidx.work.c f5729p;

    /* renamed from: q  reason: collision with root package name */
    r4.b f5730q;

    /* renamed from: s  reason: collision with root package name */
    private androidx.work.a f5732s;

    /* renamed from: t  reason: collision with root package name */
    private k4.b f5733t;

    /* renamed from: u  reason: collision with root package name */
    private androidx.work.impl.foreground.a f5734u;

    /* renamed from: v  reason: collision with root package name */
    private WorkDatabase f5735v;

    /* renamed from: w  reason: collision with root package name */
    private p4.v f5736w;

    /* renamed from: x  reason: collision with root package name */
    private p4.b f5737x;

    /* renamed from: y  reason: collision with root package name */
    private List f5738y;

    /* renamed from: z  reason: collision with root package name */
    private String f5739z;

    /* renamed from: r  reason: collision with root package name */
    c.a f5731r = c.a.a();
    androidx.work.impl.utils.futures.c A = androidx.work.impl.utils.futures.c.t();
    final androidx.work.impl.utils.futures.c B = androidx.work.impl.utils.futures.c.t();
    private volatile int C = -256;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ListenableFuture f5740d;

        a(ListenableFuture listenableFuture) {
            this.f5740d = listenableFuture;
        }

        @Override // java.lang.Runnable
        public void run() {
            if (t0.this.B.isCancelled()) {
                return;
            }
            try {
                this.f5740d.get();
                k4.m e10 = k4.m.e();
                String str = t0.D;
                e10.a(str, "Starting work for " + t0.this.f5728o.f45002c);
                t0 t0Var = t0.this;
                t0Var.B.r(t0Var.f5729p.n());
            } catch (Throwable th2) {
                t0.this.B.q(th2);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ String f5742d;

        b(String str) {
            this.f5742d = str;
        }

        @Override // java.lang.Runnable
        public void run() {
            try {
                try {
                    c.a aVar = (c.a) t0.this.B.get();
                    if (aVar == null) {
                        k4.m e10 = k4.m.e();
                        String str = t0.D;
                        e10.c(str, t0.this.f5728o.f45002c + " returned a null result. Treating it as a failure.");
                    } else {
                        k4.m e11 = k4.m.e();
                        String str2 = t0.D;
                        e11.a(str2, t0.this.f5728o.f45002c + " returned a " + aVar + ".");
                        t0.this.f5731r = aVar;
                    }
                    t0.this.i();
                } catch (InterruptedException e12) {
                    e = e12;
                    k4.m e13 = k4.m.e();
                    String str3 = t0.D;
                    e13.d(str3, this.f5742d + " failed because it threw an exception/error", e);
                    t0.this.i();
                } catch (CancellationException e14) {
                    k4.m e15 = k4.m.e();
                    String str4 = t0.D;
                    e15.g(str4, this.f5742d + " was cancelled", e14);
                    t0.this.i();
                } catch (ExecutionException e16) {
                    e = e16;
                    k4.m e132 = k4.m.e();
                    String str32 = t0.D;
                    e132.d(str32, this.f5742d + " failed because it threw an exception/error", e);
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
        Context f5744a;

        /* renamed from: b  reason: collision with root package name */
        androidx.work.c f5745b;

        /* renamed from: c  reason: collision with root package name */
        androidx.work.impl.foreground.a f5746c;

        /* renamed from: d  reason: collision with root package name */
        r4.b f5747d;

        /* renamed from: e  reason: collision with root package name */
        androidx.work.a f5748e;

        /* renamed from: f  reason: collision with root package name */
        WorkDatabase f5749f;

        /* renamed from: g  reason: collision with root package name */
        p4.u f5750g;

        /* renamed from: h  reason: collision with root package name */
        private final List f5751h;

        /* renamed from: i  reason: collision with root package name */
        WorkerParameters.a f5752i = new WorkerParameters.a();

        public c(Context context, androidx.work.a aVar, r4.b bVar, androidx.work.impl.foreground.a aVar2, WorkDatabase workDatabase, p4.u uVar, List list) {
            this.f5744a = context.getApplicationContext();
            this.f5747d = bVar;
            this.f5746c = aVar2;
            this.f5748e = aVar;
            this.f5749f = workDatabase;
            this.f5750g = uVar;
            this.f5751h = list;
        }

        public t0 b() {
            return new t0(this);
        }

        public c c(WorkerParameters.a aVar) {
            if (aVar != null) {
                this.f5752i = aVar;
            }
            return this;
        }
    }

    t0(c cVar) {
        this.f5725d = cVar.f5744a;
        this.f5730q = cVar.f5747d;
        this.f5734u = cVar.f5746c;
        p4.u uVar = cVar.f5750g;
        this.f5728o = uVar;
        this.f5726e = uVar.f45000a;
        this.f5727i = cVar.f5752i;
        this.f5729p = cVar.f5745b;
        androidx.work.a aVar = cVar.f5748e;
        this.f5732s = aVar;
        this.f5733t = aVar.a();
        WorkDatabase workDatabase = cVar.f5749f;
        this.f5735v = workDatabase;
        this.f5736w = workDatabase.H();
        this.f5737x = this.f5735v.C();
        this.f5738y = cVar.f5751h;
    }

    public static /* synthetic */ void a(t0 t0Var, ListenableFuture listenableFuture) {
        if (t0Var.B.isCancelled()) {
            listenableFuture.cancel(true);
        }
    }

    private String b(List list) {
        StringBuilder sb2 = new StringBuilder("Work [ id=");
        sb2.append(this.f5726e);
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
        if (aVar instanceof c.a.C0079c) {
            k4.m e10 = k4.m.e();
            String str = D;
            e10.f(str, "Worker result SUCCESS for " + this.f5739z);
            if (this.f5728o.m()) {
                k();
            } else {
                p();
            }
        } else if (aVar instanceof c.a.b) {
            k4.m e11 = k4.m.e();
            String str2 = D;
            e11.f(str2, "Worker result RETRY for " + this.f5739z);
            j();
        } else {
            k4.m e12 = k4.m.e();
            String str3 = D;
            e12.f(str3, "Worker result FAILURE for " + this.f5739z);
            if (this.f5728o.m()) {
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
            if (this.f5736w.h(str2) != k4.x.CANCELLED) {
                this.f5736w.d(k4.x.FAILED, str2);
            }
            linkedList.addAll(this.f5737x.a(str2));
        }
    }

    private void j() {
        this.f5735v.e();
        try {
            this.f5736w.d(k4.x.ENQUEUED, this.f5726e);
            this.f5736w.s(this.f5726e, this.f5733t.a());
            this.f5736w.z(this.f5726e, this.f5728o.h());
            this.f5736w.o(this.f5726e, -1L);
            this.f5735v.A();
        } finally {
            this.f5735v.i();
            l(true);
        }
    }

    private void k() {
        this.f5735v.e();
        try {
            this.f5736w.s(this.f5726e, this.f5733t.a());
            this.f5736w.d(k4.x.ENQUEUED, this.f5726e);
            this.f5736w.w(this.f5726e);
            this.f5736w.z(this.f5726e, this.f5728o.h());
            this.f5736w.b(this.f5726e);
            this.f5736w.o(this.f5726e, -1L);
            this.f5735v.A();
        } finally {
            this.f5735v.i();
            l(false);
        }
    }

    private void l(boolean z10) {
        this.f5735v.e();
        try {
            if (!this.f5735v.H().u()) {
                q4.m.c(this.f5725d, RescheduleReceiver.class, false);
            }
            if (z10) {
                this.f5736w.d(k4.x.ENQUEUED, this.f5726e);
                this.f5736w.e(this.f5726e, this.C);
                this.f5736w.o(this.f5726e, -1L);
            }
            this.f5735v.A();
            this.f5735v.i();
            this.A.p(Boolean.valueOf(z10));
        } catch (Throwable th2) {
            this.f5735v.i();
            throw th2;
        }
    }

    private void m() {
        k4.x h10 = this.f5736w.h(this.f5726e);
        if (h10 == k4.x.RUNNING) {
            k4.m e10 = k4.m.e();
            String str = D;
            e10.a(str, "Status for " + this.f5726e + " is RUNNING; not doing any work and rescheduling for later execution");
            l(true);
            return;
        }
        k4.m e11 = k4.m.e();
        String str2 = D;
        e11.a(str2, "Status for " + this.f5726e + " is " + h10 + " ; not doing any work");
        l(false);
    }

    private void n() {
        androidx.work.b a10;
        if (!q()) {
            this.f5735v.e();
            try {
                p4.u uVar = this.f5728o;
                if (uVar.f45001b != k4.x.ENQUEUED) {
                    m();
                    this.f5735v.A();
                    k4.m e10 = k4.m.e();
                    String str = D;
                    e10.a(str, this.f5728o.f45002c + " is not in ENQUEUED state. Nothing more to do");
                } else if ((uVar.m() || this.f5728o.l()) && this.f5733t.a() < this.f5728o.c()) {
                    k4.m.e().a(D, String.format("Delaying execution for %s because it is being executed before schedule.", this.f5728o.f45002c));
                    l(true);
                    this.f5735v.A();
                } else {
                    this.f5735v.A();
                    this.f5735v.i();
                    if (this.f5728o.m()) {
                        a10 = this.f5728o.f45004e;
                    } else {
                        k4.i b10 = this.f5732s.f().b(this.f5728o.f45003d);
                        if (b10 == null) {
                            k4.m e11 = k4.m.e();
                            String str2 = D;
                            e11.c(str2, "Could not create Input Merger " + this.f5728o.f45003d);
                            o();
                            return;
                        }
                        ArrayList arrayList = new ArrayList();
                        arrayList.add(this.f5728o.f45004e);
                        arrayList.addAll(this.f5736w.k(this.f5726e));
                        a10 = b10.a(arrayList);
                    }
                    androidx.work.b bVar = a10;
                    UUID fromString = UUID.fromString(this.f5726e);
                    List list = this.f5738y;
                    WorkerParameters.a aVar = this.f5727i;
                    p4.u uVar2 = this.f5728o;
                    WorkerParameters workerParameters = new WorkerParameters(fromString, bVar, list, aVar, uVar2.f45010k, uVar2.f(), this.f5732s.d(), this.f5730q, this.f5732s.n(), new q4.y(this.f5735v, this.f5730q), new q4.x(this.f5735v, this.f5734u, this.f5730q));
                    if (this.f5729p == null) {
                        this.f5729p = this.f5732s.n().b(this.f5725d, this.f5728o.f45002c, workerParameters);
                    }
                    androidx.work.c cVar = this.f5729p;
                    if (cVar == null) {
                        k4.m e12 = k4.m.e();
                        String str3 = D;
                        e12.c(str3, "Could not create Worker " + this.f5728o.f45002c);
                        o();
                    } else if (cVar.k()) {
                        k4.m e13 = k4.m.e();
                        String str4 = D;
                        e13.c(str4, "Received an already-used Worker " + this.f5728o.f45002c + "; Worker Factory should return new instances");
                        o();
                    } else {
                        this.f5729p.m();
                        if (r()) {
                            if (q()) {
                                return;
                            }
                            q4.w wVar = new q4.w(this.f5725d, this.f5728o, this.f5729p, workerParameters.b(), this.f5730q);
                            this.f5730q.a().execute(wVar);
                            final ListenableFuture b11 = wVar.b();
                            this.B.a(new Runnable() { // from class: androidx.work.impl.s0
                                @Override // java.lang.Runnable
                                public final void run() {
                                    t0.a(t0.this, b11);
                                }
                            }, new q4.s());
                            b11.a(new a(b11), this.f5730q.a());
                            this.B.a(new b(this.f5739z), this.f5730q.c());
                            return;
                        }
                        m();
                    }
                }
            } finally {
                this.f5735v.i();
            }
        }
    }

    private void p() {
        this.f5735v.e();
        try {
            this.f5736w.d(k4.x.SUCCEEDED, this.f5726e);
            this.f5736w.r(this.f5726e, ((c.a.C0079c) this.f5731r).e());
            long a10 = this.f5733t.a();
            for (String str : this.f5737x.a(this.f5726e)) {
                if (this.f5736w.h(str) == k4.x.BLOCKED && this.f5737x.b(str)) {
                    k4.m e10 = k4.m.e();
                    String str2 = D;
                    e10.f(str2, "Setting status to enqueued for " + str);
                    this.f5736w.d(k4.x.ENQUEUED, str);
                    this.f5736w.s(str, a10);
                }
            }
            this.f5735v.A();
            this.f5735v.i();
            l(false);
        } catch (Throwable th2) {
            this.f5735v.i();
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
        e10.a(str, "Work interrupted for " + this.f5739z);
        k4.x h10 = this.f5736w.h(this.f5726e);
        if (h10 == null) {
            l(false);
        } else {
            l(!h10.d());
        }
        return true;
    }

    private boolean r() {
        boolean z10;
        this.f5735v.e();
        try {
            if (this.f5736w.h(this.f5726e) == k4.x.ENQUEUED) {
                this.f5736w.d(k4.x.RUNNING, this.f5726e);
                this.f5736w.x(this.f5726e);
                this.f5736w.e(this.f5726e, -256);
                z10 = true;
            } else {
                z10 = false;
            }
            this.f5735v.A();
            this.f5735v.i();
            return z10;
        } catch (Throwable th2) {
            this.f5735v.i();
            throw th2;
        }
    }

    public ListenableFuture c() {
        return this.A;
    }

    public p4.m d() {
        return p4.x.a(this.f5728o);
    }

    public p4.u e() {
        return this.f5728o;
    }

    public void g(int i10) {
        this.C = i10;
        q();
        this.B.cancel(true);
        if (this.f5729p != null && this.B.isCancelled()) {
            this.f5729p.o(i10);
            return;
        }
        k4.m.e().a(D, "WorkSpec " + this.f5728o + " is already done. Not interrupting.");
    }

    void i() {
        if (!q()) {
            this.f5735v.e();
            try {
                k4.x h10 = this.f5736w.h(this.f5726e);
                this.f5735v.G().a(this.f5726e);
                if (h10 == null) {
                    l(false);
                } else if (h10 == k4.x.RUNNING) {
                    f(this.f5731r);
                } else if (!h10.d()) {
                    this.C = -512;
                    j();
                }
                this.f5735v.A();
                this.f5735v.i();
            } catch (Throwable th2) {
                this.f5735v.i();
                throw th2;
            }
        }
    }

    void o() {
        this.f5735v.e();
        try {
            h(this.f5726e);
            androidx.work.b e10 = ((c.a.C0078a) this.f5731r).e();
            this.f5736w.z(this.f5726e, this.f5728o.h());
            this.f5736w.r(this.f5726e, e10);
            this.f5735v.A();
        } finally {
            this.f5735v.i();
            l(false);
        }
    }

    @Override // java.lang.Runnable
    public void run() {
        this.f5739z = b(this.f5738y);
        n();
    }
}
