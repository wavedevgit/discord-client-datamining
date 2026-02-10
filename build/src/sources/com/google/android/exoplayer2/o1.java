package com.google.android.exoplayer2;

import android.util.Pair;
import com.google.android.exoplayer2.source.LoadEventInfo;
import com.google.android.exoplayer2.source.MediaLoadData;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.IdentityHashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import rd.o0;
import rd.r;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o1 {

    /* renamed from: a  reason: collision with root package name */
    private final nc.t1 f12770a;

    /* renamed from: e  reason: collision with root package name */
    private final d f12774e;

    /* renamed from: h  reason: collision with root package name */
    private final nc.a f12777h;

    /* renamed from: i  reason: collision with root package name */
    private final oe.u f12778i;

    /* renamed from: k  reason: collision with root package name */
    private boolean f12780k;

    /* renamed from: l  reason: collision with root package name */
    private me.c0 f12781l;

    /* renamed from: j  reason: collision with root package name */
    private rd.o0 f12779j = new o0.a(0);

    /* renamed from: c  reason: collision with root package name */
    private final IdentityHashMap f12772c = new IdentityHashMap();

    /* renamed from: d  reason: collision with root package name */
    private final Map f12773d = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final List f12771b = new ArrayList();

    /* renamed from: f  reason: collision with root package name */
    private final HashMap f12775f = new HashMap();

    /* renamed from: g  reason: collision with root package name */
    private final Set f12776g = new HashSet();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class a implements rd.y, sc.u {

        /* renamed from: d  reason: collision with root package name */
        private final c f12782d;

        public a(c cVar) {
            this.f12782d = cVar;
        }

        private Pair V(int i10, r.b bVar) {
            r.b bVar2 = null;
            if (bVar != null) {
                r.b n10 = o1.n(this.f12782d, bVar);
                if (n10 == null) {
                    return null;
                }
                bVar2 = n10;
            }
            return Pair.create(Integer.valueOf(o1.s(this.f12782d, i10)), bVar2);
        }

        @Override // sc.u
        public void A(int i10, r.b bVar, final int i11) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f12778i.post(new Runnable() { // from class: com.google.android.exoplayer2.j1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f12777h.A(((Integer) r1.first).intValue(), (r.b) V.second, i11);
                    }
                });
            }
        }

        @Override // sc.u
        public void B(int i10, r.b bVar, final Exception exc) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f12778i.post(new Runnable() { // from class: com.google.android.exoplayer2.h1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f12777h.B(((Integer) r1.first).intValue(), (r.b) V.second, exc);
                    }
                });
            }
        }

        @Override // rd.y
        public void C(int i10, r.b bVar, final LoadEventInfo loadEventInfo, final MediaLoadData mediaLoadData) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f12778i.post(new Runnable() { // from class: com.google.android.exoplayer2.k1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f12777h.C(((Integer) r1.first).intValue(), (r.b) V.second, loadEventInfo, mediaLoadData);
                    }
                });
            }
        }

        @Override // rd.y
        public void D(int i10, r.b bVar, final LoadEventInfo loadEventInfo, final MediaLoadData mediaLoadData) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f12778i.post(new Runnable() { // from class: com.google.android.exoplayer2.i1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f12777h.D(((Integer) r1.first).intValue(), (r.b) V.second, loadEventInfo, mediaLoadData);
                    }
                });
            }
        }

        @Override // sc.u
        public void E(int i10, r.b bVar) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f12778i.post(new Runnable() { // from class: com.google.android.exoplayer2.n1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f12777h.E(((Integer) r1.first).intValue(), (r.b) V.second);
                    }
                });
            }
        }

        @Override // rd.y
        public void F(int i10, r.b bVar, final MediaLoadData mediaLoadData) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f12778i.post(new Runnable() { // from class: com.google.android.exoplayer2.m1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f12777h.F(((Integer) r1.first).intValue(), (r.b) oe.a.e((r.b) V.second), mediaLoadData);
                    }
                });
            }
        }

        @Override // rd.y
        public void G(int i10, r.b bVar, final LoadEventInfo loadEventInfo, final MediaLoadData mediaLoadData) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f12778i.post(new Runnable() { // from class: com.google.android.exoplayer2.c1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f12777h.G(((Integer) r1.first).intValue(), (r.b) V.second, loadEventInfo, mediaLoadData);
                    }
                });
            }
        }

        @Override // rd.y
        public void H(int i10, r.b bVar, final LoadEventInfo loadEventInfo, final MediaLoadData mediaLoadData, final IOException iOException, final boolean z10) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f12778i.post(new Runnable() { // from class: com.google.android.exoplayer2.l1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f12777h.H(((Integer) r1.first).intValue(), (r.b) V.second, loadEventInfo, mediaLoadData, iOException, z10);
                    }
                });
            }
        }

        @Override // sc.u
        public void J(int i10, r.b bVar) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f12778i.post(new Runnable() { // from class: com.google.android.exoplayer2.d1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f12777h.J(((Integer) r1.first).intValue(), (r.b) V.second);
                    }
                });
            }
        }

        @Override // rd.y
        public void g(int i10, r.b bVar, final MediaLoadData mediaLoadData) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f12778i.post(new Runnable() { // from class: com.google.android.exoplayer2.f1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f12777h.g(((Integer) r1.first).intValue(), (r.b) V.second, mediaLoadData);
                    }
                });
            }
        }

        @Override // sc.u
        public void t(int i10, r.b bVar) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f12778i.post(new Runnable() { // from class: com.google.android.exoplayer2.g1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f12777h.t(((Integer) r1.first).intValue(), (r.b) V.second);
                    }
                });
            }
        }

        @Override // sc.u
        public void u(int i10, r.b bVar) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f12778i.post(new Runnable() { // from class: com.google.android.exoplayer2.e1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f12777h.u(((Integer) r1.first).intValue(), (r.b) V.second);
                    }
                });
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final rd.r f12784a;

        /* renamed from: b  reason: collision with root package name */
        public final r.c f12785b;

        /* renamed from: c  reason: collision with root package name */
        public final a f12786c;

        public b(rd.r rVar, r.c cVar, a aVar) {
            this.f12784a = rVar;
            this.f12785b = cVar;
            this.f12786c = aVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c implements a1 {

        /* renamed from: a  reason: collision with root package name */
        public final rd.o f12787a;

        /* renamed from: d  reason: collision with root package name */
        public int f12790d;

        /* renamed from: e  reason: collision with root package name */
        public boolean f12791e;

        /* renamed from: c  reason: collision with root package name */
        public final List f12789c = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        public final Object f12788b = new Object();

        public c(rd.r rVar, boolean z10) {
            this.f12787a = new rd.o(rVar, z10);
        }

        @Override // com.google.android.exoplayer2.a1
        public Object a() {
            return this.f12788b;
        }

        @Override // com.google.android.exoplayer2.a1
        public Timeline b() {
            return this.f12787a.X();
        }

        public void c(int i10) {
            this.f12790d = i10;
            this.f12791e = false;
            this.f12789c.clear();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface d {
        void d();
    }

    public o1(d dVar, nc.a aVar, oe.u uVar, nc.t1 t1Var) {
        this.f12770a = t1Var;
        this.f12774e = dVar;
        this.f12777h = aVar;
        this.f12778i = uVar;
    }

    private void A(int i10, int i11) {
        for (int i12 = i11 - 1; i12 >= i10; i12--) {
            c cVar = (c) this.f12771b.remove(i12);
            this.f12773d.remove(cVar.f12788b);
            g(i12, -cVar.f12787a.X().t());
            cVar.f12791e = true;
            if (this.f12780k) {
                u(cVar);
            }
        }
    }

    private void g(int i10, int i11) {
        while (i10 < this.f12771b.size()) {
            ((c) this.f12771b.get(i10)).f12790d += i11;
            i10++;
        }
    }

    private void j(c cVar) {
        b bVar = (b) this.f12775f.get(cVar);
        if (bVar != null) {
            bVar.f12784a.m(bVar.f12785b);
        }
    }

    private void k() {
        Iterator it = this.f12776g.iterator();
        while (it.hasNext()) {
            c cVar = (c) it.next();
            if (cVar.f12789c.isEmpty()) {
                j(cVar);
                it.remove();
            }
        }
    }

    private void l(c cVar) {
        this.f12776g.add(cVar);
        b bVar = (b) this.f12775f.get(cVar);
        if (bVar != null) {
            bVar.f12784a.p(bVar.f12785b);
        }
    }

    private static Object m(Object obj) {
        return com.google.android.exoplayer2.a.z(obj);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static r.b n(c cVar, r.b bVar) {
        for (int i10 = 0; i10 < cVar.f12789c.size(); i10++) {
            if (((r.b) cVar.f12789c.get(i10)).f47986d == bVar.f47986d) {
                return bVar.c(p(cVar, bVar.f47983a));
            }
        }
        return null;
    }

    private static Object o(Object obj) {
        return com.google.android.exoplayer2.a.A(obj);
    }

    private static Object p(c cVar, Object obj) {
        return com.google.android.exoplayer2.a.C(cVar.f12788b, obj);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int s(c cVar, int i10) {
        return i10 + cVar.f12790d;
    }

    private void u(c cVar) {
        if (cVar.f12791e && cVar.f12789c.isEmpty()) {
            b bVar = (b) oe.a.e((b) this.f12775f.remove(cVar));
            bVar.f12784a.e(bVar.f12785b);
            bVar.f12784a.h(bVar.f12786c);
            bVar.f12784a.l(bVar.f12786c);
            this.f12776g.remove(cVar);
        }
    }

    private void w(c cVar) {
        rd.o oVar = cVar.f12787a;
        r.c cVar2 = new r.c() { // from class: com.google.android.exoplayer2.b1
            @Override // rd.r.c
            public final void a(rd.r rVar, Timeline timeline) {
                o1.this.f12774e.d();
            }
        };
        a aVar = new a(cVar);
        this.f12775f.put(cVar, new b(oVar, cVar2, aVar));
        oVar.j(oe.w0.y(), aVar);
        oVar.b(oe.w0.y(), aVar);
        oVar.g(cVar2, this.f12781l, this.f12770a);
    }

    public Timeline B(List list, rd.o0 o0Var) {
        A(0, this.f12771b.size());
        return f(this.f12771b.size(), list, o0Var);
    }

    public Timeline C(rd.o0 o0Var) {
        int r10 = r();
        if (o0Var.getLength() != r10) {
            o0Var = o0Var.e().g(0, r10);
        }
        this.f12779j = o0Var;
        return i();
    }

    public Timeline f(int i10, List list, rd.o0 o0Var) {
        if (!list.isEmpty()) {
            this.f12779j = o0Var;
            for (int i11 = i10; i11 < list.size() + i10; i11++) {
                c cVar = (c) list.get(i11 - i10);
                if (i11 > 0) {
                    c cVar2 = (c) this.f12771b.get(i11 - 1);
                    cVar.c(cVar2.f12790d + cVar2.f12787a.X().t());
                } else {
                    cVar.c(0);
                }
                g(i11, cVar.f12787a.X().t());
                this.f12771b.add(i11, cVar);
                this.f12773d.put(cVar.f12788b, cVar);
                if (this.f12780k) {
                    w(cVar);
                    if (this.f12772c.isEmpty()) {
                        this.f12776g.add(cVar);
                    } else {
                        j(cVar);
                    }
                }
            }
        }
        return i();
    }

    public rd.p h(r.b bVar, me.b bVar2, long j10) {
        Object o10 = o(bVar.f47983a);
        r.b c10 = bVar.c(m(bVar.f47983a));
        c cVar = (c) oe.a.e((c) this.f12773d.get(o10));
        l(cVar);
        cVar.f12789c.add(c10);
        rd.n f10 = cVar.f12787a.f(c10, bVar2, j10);
        this.f12772c.put(f10, cVar);
        k();
        return f10;
    }

    public Timeline i() {
        if (this.f12771b.isEmpty()) {
            return Timeline.f12004d;
        }
        int i10 = 0;
        for (int i11 = 0; i11 < this.f12771b.size(); i11++) {
            c cVar = (c) this.f12771b.get(i11);
            cVar.f12790d = i10;
            i10 += cVar.f12787a.X().t();
        }
        return new t1(this.f12771b, this.f12779j);
    }

    public rd.o0 q() {
        return this.f12779j;
    }

    public int r() {
        return this.f12771b.size();
    }

    public boolean t() {
        return this.f12780k;
    }

    public void v(me.c0 c0Var) {
        oe.a.g(!this.f12780k);
        this.f12781l = c0Var;
        for (int i10 = 0; i10 < this.f12771b.size(); i10++) {
            c cVar = (c) this.f12771b.get(i10);
            w(cVar);
            this.f12776g.add(cVar);
        }
        this.f12780k = true;
    }

    public void x() {
        for (b bVar : this.f12775f.values()) {
            try {
                bVar.f12784a.e(bVar.f12785b);
            } catch (RuntimeException e10) {
                oe.y.d("MediaSourceList", "Failed to release child source.", e10);
            }
            bVar.f12784a.h(bVar.f12786c);
            bVar.f12784a.l(bVar.f12786c);
        }
        this.f12775f.clear();
        this.f12776g.clear();
        this.f12780k = false;
    }

    public void y(rd.p pVar) {
        c cVar = (c) oe.a.e((c) this.f12772c.remove(pVar));
        cVar.f12787a.a(pVar);
        cVar.f12789c.remove(((rd.n) pVar).f47956d);
        if (!this.f12772c.isEmpty()) {
            k();
        }
        u(cVar);
    }

    public Timeline z(int i10, int i11, rd.o0 o0Var) {
        boolean z10;
        if (i10 >= 0 && i10 <= i11 && i11 <= r()) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.a(z10);
        this.f12779j = o0Var;
        A(i10, i11);
        return i();
    }
}
