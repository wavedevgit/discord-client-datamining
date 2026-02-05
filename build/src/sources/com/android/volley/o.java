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
    private final AtomicInteger f8188a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f8189b;

    /* renamed from: c  reason: collision with root package name */
    private final PriorityBlockingQueue f8190c;

    /* renamed from: d  reason: collision with root package name */
    private final PriorityBlockingQueue f8191d;

    /* renamed from: e  reason: collision with root package name */
    private final b f8192e;

    /* renamed from: f  reason: collision with root package name */
    private final h f8193f;

    /* renamed from: g  reason: collision with root package name */
    private final q f8194g;

    /* renamed from: h  reason: collision with root package name */
    private final i[] f8195h;

    /* renamed from: i  reason: collision with root package name */
    private c f8196i;

    /* renamed from: j  reason: collision with root package name */
    private final List f8197j;

    /* renamed from: k  reason: collision with root package name */
    private final List f8198k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        boolean a(n nVar);
    }

    public o(b bVar, h hVar, int i10, q qVar) {
        this.f8188a = new AtomicInteger();
        this.f8189b = new HashSet();
        this.f8190c = new PriorityBlockingQueue();
        this.f8191d = new PriorityBlockingQueue();
        this.f8197j = new ArrayList();
        this.f8198k = new ArrayList();
        this.f8192e = bVar;
        this.f8193f = hVar;
        this.f8195h = new i[i10];
        this.f8194g = qVar;
    }

    public n a(n nVar) {
        nVar.setRequestQueue(this);
        synchronized (this.f8189b) {
            this.f8189b.add(nVar);
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
            this.f8190c.add(nVar);
        }
    }

    public void c(a aVar) {
        synchronized (this.f8189b) {
            try {
                for (n nVar : this.f8189b) {
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
        synchronized (this.f8189b) {
            this.f8189b.remove(nVar);
        }
        synchronized (this.f8197j) {
            Iterator it = this.f8197j.iterator();
            if (it.hasNext()) {
                android.support.v4.media.session.b.a(it.next());
                throw null;
            }
        }
        f(nVar, 5);
    }

    public int e() {
        return this.f8188a.incrementAndGet();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(n nVar, int i10) {
        synchronized (this.f8198k) {
            try {
                Iterator it = this.f8198k.iterator();
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
        this.f8191d.add(nVar);
    }

    public void h() {
        i();
        c cVar = new c(this.f8190c, this.f8191d, this.f8192e, this.f8194g);
        this.f8196i = cVar;
        cVar.start();
        for (int i10 = 0; i10 < this.f8195h.length; i10++) {
            i iVar = new i(this.f8191d, this.f8193f, this.f8192e, this.f8194g);
            this.f8195h[i10] = iVar;
            iVar.start();
        }
    }

    public void i() {
        i[] iVarArr;
        c cVar = this.f8196i;
        if (cVar != null) {
            cVar.d();
        }
        for (i iVar : this.f8195h) {
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
