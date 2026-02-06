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
    private final AtomicInteger f8087a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f8088b;

    /* renamed from: c  reason: collision with root package name */
    private final PriorityBlockingQueue f8089c;

    /* renamed from: d  reason: collision with root package name */
    private final PriorityBlockingQueue f8090d;

    /* renamed from: e  reason: collision with root package name */
    private final b f8091e;

    /* renamed from: f  reason: collision with root package name */
    private final h f8092f;

    /* renamed from: g  reason: collision with root package name */
    private final q f8093g;

    /* renamed from: h  reason: collision with root package name */
    private final i[] f8094h;

    /* renamed from: i  reason: collision with root package name */
    private c f8095i;

    /* renamed from: j  reason: collision with root package name */
    private final List f8096j;

    /* renamed from: k  reason: collision with root package name */
    private final List f8097k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        boolean a(n nVar);
    }

    public o(b bVar, h hVar, int i10, q qVar) {
        this.f8087a = new AtomicInteger();
        this.f8088b = new HashSet();
        this.f8089c = new PriorityBlockingQueue();
        this.f8090d = new PriorityBlockingQueue();
        this.f8096j = new ArrayList();
        this.f8097k = new ArrayList();
        this.f8091e = bVar;
        this.f8092f = hVar;
        this.f8094h = new i[i10];
        this.f8093g = qVar;
    }

    public n a(n nVar) {
        nVar.setRequestQueue(this);
        synchronized (this.f8088b) {
            this.f8088b.add(nVar);
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
            this.f8089c.add(nVar);
        }
    }

    public void c(a aVar) {
        synchronized (this.f8088b) {
            try {
                for (n nVar : this.f8088b) {
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
        synchronized (this.f8088b) {
            this.f8088b.remove(nVar);
        }
        synchronized (this.f8096j) {
            Iterator it = this.f8096j.iterator();
            if (it.hasNext()) {
                android.support.v4.media.session.b.a(it.next());
                throw null;
            }
        }
        f(nVar, 5);
    }

    public int e() {
        return this.f8087a.incrementAndGet();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(n nVar, int i10) {
        synchronized (this.f8097k) {
            try {
                Iterator it = this.f8097k.iterator();
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
        this.f8090d.add(nVar);
    }

    public void h() {
        i();
        c cVar = new c(this.f8089c, this.f8090d, this.f8091e, this.f8093g);
        this.f8095i = cVar;
        cVar.start();
        for (int i10 = 0; i10 < this.f8094h.length; i10++) {
            i iVar = new i(this.f8090d, this.f8092f, this.f8091e, this.f8093g);
            this.f8094h[i10] = iVar;
            iVar.start();
        }
    }

    public void i() {
        i[] iVarArr;
        c cVar = this.f8095i;
        if (cVar != null) {
            cVar.d();
        }
        for (i iVar : this.f8094h) {
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
