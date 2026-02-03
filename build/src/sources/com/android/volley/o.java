package com.android.volley;

import android.os.Handler;
import android.os.Looper;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.concurrent.PriorityBlockingQueue;
import java.util.concurrent.atomic.AtomicInteger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class o {

    /* renamed from: a  reason: collision with root package name */
    private final AtomicInteger f7803a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f7804b;

    /* renamed from: c  reason: collision with root package name */
    private final PriorityBlockingQueue f7805c;

    /* renamed from: d  reason: collision with root package name */
    private final PriorityBlockingQueue f7806d;

    /* renamed from: e  reason: collision with root package name */
    private final b f7807e;

    /* renamed from: f  reason: collision with root package name */
    private final h f7808f;

    /* renamed from: g  reason: collision with root package name */
    private final q f7809g;

    /* renamed from: h  reason: collision with root package name */
    private final i[] f7810h;

    /* renamed from: i  reason: collision with root package name */
    private c f7811i;

    /* renamed from: j  reason: collision with root package name */
    private final List f7812j;

    /* renamed from: k  reason: collision with root package name */
    private final List f7813k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        boolean a(n nVar);
    }

    public o(b bVar, h hVar, int i10, q qVar) {
        this.f7803a = new AtomicInteger();
        this.f7804b = new HashSet();
        this.f7805c = new PriorityBlockingQueue();
        this.f7806d = new PriorityBlockingQueue();
        this.f7812j = new ArrayList();
        this.f7813k = new ArrayList();
        this.f7807e = bVar;
        this.f7808f = hVar;
        this.f7810h = new i[i10];
        this.f7809g = qVar;
    }

    public n a(n nVar) {
        nVar.setRequestQueue(this);
        synchronized (this.f7804b) {
            this.f7804b.add(nVar);
        }
        nVar.setSequence(e());
        nVar.addMarker("add-to-queue");
        f(nVar, 0);
        b(nVar);
        return nVar;
    }

    void b(n nVar) {
        if (!nVar.shouldCache()) {
            g(nVar);
        } else {
            this.f7805c.add(nVar);
        }
    }

    public void c(a aVar) {
        synchronized (this.f7804b) {
            try {
                for (n nVar : this.f7804b) {
                    if (aVar.a(nVar)) {
                        nVar.cancel();
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(n nVar) {
        synchronized (this.f7804b) {
            this.f7804b.remove(nVar);
        }
        synchronized (this.f7812j) {
            Iterator it = this.f7812j.iterator();
            if (it.hasNext()) {
                android.support.v4.media.session.b.a(it.next());
                throw null;
            }
        }
        f(nVar, 5);
    }

    public int e() {
        return this.f7803a.incrementAndGet();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(n nVar, int i10) {
        synchronized (this.f7813k) {
            try {
                Iterator it = this.f7813k.iterator();
                if (it.hasNext()) {
                    android.support.v4.media.session.b.a(it.next());
                    throw null;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g(n nVar) {
        this.f7806d.add(nVar);
    }

    public void h() {
        i();
        c cVar = new c(this.f7805c, this.f7806d, this.f7807e, this.f7809g);
        this.f7811i = cVar;
        cVar.start();
        for (int i10 = 0; i10 < this.f7810h.length; i10++) {
            i iVar = new i(this.f7806d, this.f7808f, this.f7807e, this.f7809g);
            this.f7810h[i10] = iVar;
            iVar.start();
        }
    }

    public void i() {
        i[] iVarArr;
        c cVar = this.f7811i;
        if (cVar != null) {
            cVar.d();
        }
        for (i iVar : this.f7810h) {
            if (iVar != null) {
                iVar.e();
            }
        }
    }

    public o(b bVar, h hVar, int i10) {
        this(bVar, hVar, i10, new f(new Handler(Looper.getMainLooper())));
    }

    public o(b bVar, h hVar) {
        this(bVar, hVar, 4);
    }
}
