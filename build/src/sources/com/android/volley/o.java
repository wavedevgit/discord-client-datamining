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
    private final AtomicInteger f8835a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f8836b;

    /* renamed from: c  reason: collision with root package name */
    private final PriorityBlockingQueue f8837c;

    /* renamed from: d  reason: collision with root package name */
    private final PriorityBlockingQueue f8838d;

    /* renamed from: e  reason: collision with root package name */
    private final b f8839e;

    /* renamed from: f  reason: collision with root package name */
    private final h f8840f;

    /* renamed from: g  reason: collision with root package name */
    private final q f8841g;

    /* renamed from: h  reason: collision with root package name */
    private final i[] f8842h;

    /* renamed from: i  reason: collision with root package name */
    private c f8843i;

    /* renamed from: j  reason: collision with root package name */
    private final List f8844j;

    /* renamed from: k  reason: collision with root package name */
    private final List f8845k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        boolean a(n nVar);
    }

    public o(b bVar, h hVar, int i10, q qVar) {
        this.f8835a = new AtomicInteger();
        this.f8836b = new HashSet();
        this.f8837c = new PriorityBlockingQueue();
        this.f8838d = new PriorityBlockingQueue();
        this.f8844j = new ArrayList();
        this.f8845k = new ArrayList();
        this.f8839e = bVar;
        this.f8840f = hVar;
        this.f8842h = new i[i10];
        this.f8841g = qVar;
    }

    public n a(n nVar) {
        nVar.setRequestQueue(this);
        synchronized (this.f8836b) {
            this.f8836b.add(nVar);
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
            this.f8837c.add(nVar);
        }
    }

    public void c(a aVar) {
        synchronized (this.f8836b) {
            try {
                for (n nVar : this.f8836b) {
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
        synchronized (this.f8836b) {
            this.f8836b.remove(nVar);
        }
        synchronized (this.f8844j) {
            Iterator it = this.f8844j.iterator();
            if (it.hasNext()) {
                android.support.v4.media.session.b.a(it.next());
                throw null;
            }
        }
        f(nVar, 5);
    }

    public int e() {
        return this.f8835a.incrementAndGet();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(n nVar, int i10) {
        synchronized (this.f8845k) {
            try {
                Iterator it = this.f8845k.iterator();
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
        this.f8838d.add(nVar);
    }

    public void h() {
        i();
        c cVar = new c(this.f8837c, this.f8838d, this.f8839e, this.f8841g);
        this.f8843i = cVar;
        cVar.start();
        for (int i10 = 0; i10 < this.f8842h.length; i10++) {
            i iVar = new i(this.f8838d, this.f8840f, this.f8839e, this.f8841g);
            this.f8842h[i10] = iVar;
            iVar.start();
        }
    }

    public void i() {
        i[] iVarArr;
        c cVar = this.f8843i;
        if (cVar != null) {
            cVar.d();
        }
        for (i iVar : this.f8842h) {
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
