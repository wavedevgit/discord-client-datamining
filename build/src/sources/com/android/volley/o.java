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
    private final AtomicInteger f9206a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f9207b;

    /* renamed from: c  reason: collision with root package name */
    private final PriorityBlockingQueue f9208c;

    /* renamed from: d  reason: collision with root package name */
    private final PriorityBlockingQueue f9209d;

    /* renamed from: e  reason: collision with root package name */
    private final b f9210e;

    /* renamed from: f  reason: collision with root package name */
    private final h f9211f;

    /* renamed from: g  reason: collision with root package name */
    private final q f9212g;

    /* renamed from: h  reason: collision with root package name */
    private final i[] f9213h;

    /* renamed from: i  reason: collision with root package name */
    private c f9214i;

    /* renamed from: j  reason: collision with root package name */
    private final List f9215j;

    /* renamed from: k  reason: collision with root package name */
    private final List f9216k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        boolean a(n nVar);
    }

    public o(b bVar, h hVar, int i10, q qVar) {
        this.f9206a = new AtomicInteger();
        this.f9207b = new HashSet();
        this.f9208c = new PriorityBlockingQueue();
        this.f9209d = new PriorityBlockingQueue();
        this.f9215j = new ArrayList();
        this.f9216k = new ArrayList();
        this.f9210e = bVar;
        this.f9211f = hVar;
        this.f9213h = new i[i10];
        this.f9212g = qVar;
    }

    public n a(n nVar) {
        nVar.setRequestQueue(this);
        synchronized (this.f9207b) {
            this.f9207b.add(nVar);
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
            this.f9208c.add(nVar);
        }
    }

    public void c(a aVar) {
        synchronized (this.f9207b) {
            try {
                for (n nVar : this.f9207b) {
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
        synchronized (this.f9207b) {
            this.f9207b.remove(nVar);
        }
        synchronized (this.f9215j) {
            Iterator it = this.f9215j.iterator();
            if (it.hasNext()) {
                android.support.v4.media.session.b.a(it.next());
                throw null;
            }
        }
        f(nVar, 5);
    }

    public int e() {
        return this.f9206a.incrementAndGet();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(n nVar, int i10) {
        synchronized (this.f9216k) {
            try {
                Iterator it = this.f9216k.iterator();
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
        this.f9209d.add(nVar);
    }

    public void h() {
        i();
        c cVar = new c(this.f9208c, this.f9209d, this.f9210e, this.f9212g);
        this.f9214i = cVar;
        cVar.start();
        for (int i10 = 0; i10 < this.f9213h.length; i10++) {
            i iVar = new i(this.f9209d, this.f9211f, this.f9210e, this.f9212g);
            this.f9213h[i10] = iVar;
            iVar.start();
        }
    }

    public void i() {
        i[] iVarArr;
        c cVar = this.f9214i;
        if (cVar != null) {
            cVar.d();
        }
        for (i iVar : this.f9213h) {
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
