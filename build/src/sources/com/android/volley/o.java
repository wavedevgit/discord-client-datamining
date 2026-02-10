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
    private final AtomicInteger f8804a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f8805b;

    /* renamed from: c  reason: collision with root package name */
    private final PriorityBlockingQueue f8806c;

    /* renamed from: d  reason: collision with root package name */
    private final PriorityBlockingQueue f8807d;

    /* renamed from: e  reason: collision with root package name */
    private final b f8808e;

    /* renamed from: f  reason: collision with root package name */
    private final h f8809f;

    /* renamed from: g  reason: collision with root package name */
    private final q f8810g;

    /* renamed from: h  reason: collision with root package name */
    private final i[] f8811h;

    /* renamed from: i  reason: collision with root package name */
    private c f8812i;

    /* renamed from: j  reason: collision with root package name */
    private final List f8813j;

    /* renamed from: k  reason: collision with root package name */
    private final List f8814k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        boolean a(n nVar);
    }

    public o(b bVar, h hVar, int i10, q qVar) {
        this.f8804a = new AtomicInteger();
        this.f8805b = new HashSet();
        this.f8806c = new PriorityBlockingQueue();
        this.f8807d = new PriorityBlockingQueue();
        this.f8813j = new ArrayList();
        this.f8814k = new ArrayList();
        this.f8808e = bVar;
        this.f8809f = hVar;
        this.f8811h = new i[i10];
        this.f8810g = qVar;
    }

    public n a(n nVar) {
        nVar.setRequestQueue(this);
        synchronized (this.f8805b) {
            this.f8805b.add(nVar);
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
            this.f8806c.add(nVar);
        }
    }

    public void c(a aVar) {
        synchronized (this.f8805b) {
            try {
                for (n nVar : this.f8805b) {
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
        synchronized (this.f8805b) {
            this.f8805b.remove(nVar);
        }
        synchronized (this.f8813j) {
            Iterator it = this.f8813j.iterator();
            if (it.hasNext()) {
                android.support.v4.media.session.b.a(it.next());
                throw null;
            }
        }
        f(nVar, 5);
    }

    public int e() {
        return this.f8804a.incrementAndGet();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(n nVar, int i10) {
        synchronized (this.f8814k) {
            try {
                Iterator it = this.f8814k.iterator();
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
        this.f8807d.add(nVar);
    }

    public void h() {
        i();
        c cVar = new c(this.f8806c, this.f8807d, this.f8808e, this.f8810g);
        this.f8812i = cVar;
        cVar.start();
        for (int i10 = 0; i10 < this.f8811h.length; i10++) {
            i iVar = new i(this.f8807d, this.f8809f, this.f8808e, this.f8810g);
            this.f8811h[i10] = iVar;
            iVar.start();
        }
    }

    public void i() {
        i[] iVarArr;
        c cVar = this.f8812i;
        if (cVar != null) {
            cVar.d();
        }
        for (i iVar : this.f8811h) {
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
