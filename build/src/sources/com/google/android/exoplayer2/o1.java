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
import qd.o0;
import qd.r;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o1 {

    /* renamed from: a  reason: collision with root package name */
    private final mc.t1 f13687a;

    /* renamed from: e  reason: collision with root package name */
    private final d f13691e;

    /* renamed from: h  reason: collision with root package name */
    private final mc.a f13694h;

    /* renamed from: i  reason: collision with root package name */
    private final ne.u f13695i;

    /* renamed from: k  reason: collision with root package name */
    private boolean f13697k;

    /* renamed from: l  reason: collision with root package name */
    private le.c0 f13698l;

    /* renamed from: j  reason: collision with root package name */
    private qd.o0 f13696j = new o0.a(0);

    /* renamed from: c  reason: collision with root package name */
    private final IdentityHashMap f13689c = new IdentityHashMap();

    /* renamed from: d  reason: collision with root package name */
    private final Map f13690d = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final List f13688b = new ArrayList();

    /* renamed from: f  reason: collision with root package name */
    private final HashMap f13692f = new HashMap();

    /* renamed from: g  reason: collision with root package name */
    private final Set f13693g = new HashSet();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class a implements qd.y, rc.u {

        /* renamed from: d  reason: collision with root package name */
        private final c f13699d;

        public a(c cVar) {
            this.f13699d = cVar;
        }

        private Pair V(int i10, r.b bVar) {
            r.b bVar2 = null;
            if (bVar != null) {
                r.b n10 = o1.n(this.f13699d, bVar);
                if (n10 == null) {
                    return null;
                }
                bVar2 = n10;
            }
            return Pair.create(Integer.valueOf(o1.s(this.f13699d, i10)), bVar2);
        }

        @Override // rc.u
        public void A(int i10, r.b bVar) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f13695i.post(new Runnable() { // from class: com.google.android.exoplayer2.e1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f13694h.A(((Integer) r1.first).intValue(), (r.b) V.second);
                    }
                });
            }
        }

        @Override // qd.y
        public void C(int i10, r.b bVar, final LoadEventInfo loadEventInfo, final MediaLoadData mediaLoadData) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f13695i.post(new Runnable() { // from class: com.google.android.exoplayer2.i1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f13694h.C(((Integer) r1.first).intValue(), (r.b) V.second, loadEventInfo, mediaLoadData);
                    }
                });
            }
        }

        @Override // qd.y
        public void D(int i10, r.b bVar, final MediaLoadData mediaLoadData) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f13695i.post(new Runnable() { // from class: com.google.android.exoplayer2.m1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f13694h.D(((Integer) r1.first).intValue(), (r.b) ne.a.e((r.b) V.second), mediaLoadData);
                    }
                });
            }
        }

        @Override // rc.u
        public void F(int i10, r.b bVar) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f13695i.post(new Runnable() { // from class: com.google.android.exoplayer2.g1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f13694h.F(((Integer) r1.first).intValue(), (r.b) V.second);
                    }
                });
            }
        }

        @Override // qd.y
        public void G(int i10, r.b bVar, final LoadEventInfo loadEventInfo, final MediaLoadData mediaLoadData) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f13695i.post(new Runnable() { // from class: com.google.android.exoplayer2.k1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f13694h.G(((Integer) r1.first).intValue(), (r.b) V.second, loadEventInfo, mediaLoadData);
                    }
                });
            }
        }

        @Override // qd.y
        public void H(int i10, r.b bVar, final LoadEventInfo loadEventInfo, final MediaLoadData mediaLoadData) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f13695i.post(new Runnable() { // from class: com.google.android.exoplayer2.c1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f13694h.H(((Integer) r1.first).intValue(), (r.b) V.second, loadEventInfo, mediaLoadData);
                    }
                });
            }
        }

        @Override // rc.u
        public void I(int i10, r.b bVar, final Exception exc) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f13695i.post(new Runnable() { // from class: com.google.android.exoplayer2.h1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f13694h.I(((Integer) r1.first).intValue(), (r.b) V.second, exc);
                    }
                });
            }
        }

        @Override // rc.u
        public void J(int i10, r.b bVar, final int i11) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f13695i.post(new Runnable() { // from class: com.google.android.exoplayer2.j1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f13694h.J(((Integer) r1.first).intValue(), (r.b) V.second, i11);
                    }
                });
            }
        }

        @Override // qd.y
        public void g(int i10, r.b bVar, final MediaLoadData mediaLoadData) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f13695i.post(new Runnable() { // from class: com.google.android.exoplayer2.f1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f13694h.g(((Integer) r1.first).intValue(), (r.b) V.second, mediaLoadData);
                    }
                });
            }
        }

        @Override // qd.y
        public void t(int i10, r.b bVar, final LoadEventInfo loadEventInfo, final MediaLoadData mediaLoadData, final IOException iOException, final boolean z10) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f13695i.post(new Runnable() { // from class: com.google.android.exoplayer2.l1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f13694h.t(((Integer) r1.first).intValue(), (r.b) V.second, loadEventInfo, mediaLoadData, iOException, z10);
                    }
                });
            }
        }

        @Override // rc.u
        public void w(int i10, r.b bVar) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f13695i.post(new Runnable() { // from class: com.google.android.exoplayer2.n1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f13694h.w(((Integer) r1.first).intValue(), (r.b) V.second);
                    }
                });
            }
        }

        @Override // rc.u
        public void z(int i10, r.b bVar) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f13695i.post(new Runnable() { // from class: com.google.android.exoplayer2.d1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f13694h.z(((Integer) r1.first).intValue(), (r.b) V.second);
                    }
                });
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final qd.r f13701a;

        /* renamed from: b  reason: collision with root package name */
        public final r.c f13702b;

        /* renamed from: c  reason: collision with root package name */
        public final a f13703c;

        public b(qd.r rVar, r.c cVar, a aVar) {
            this.f13701a = rVar;
            this.f13702b = cVar;
            this.f13703c = aVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c implements a1 {

        /* renamed from: a  reason: collision with root package name */
        public final qd.o f13704a;

        /* renamed from: d  reason: collision with root package name */
        public int f13707d;

        /* renamed from: e  reason: collision with root package name */
        public boolean f13708e;

        /* renamed from: c  reason: collision with root package name */
        public final List f13706c = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        public final Object f13705b = new Object();

        public c(qd.r rVar, boolean z10) {
            this.f13704a = new qd.o(rVar, z10);
        }

        @Override // com.google.android.exoplayer2.a1
        public Object a() {
            return this.f13705b;
        }

        @Override // com.google.android.exoplayer2.a1
        public Timeline b() {
            return this.f13704a.X();
        }

        public void c(int i10) {
            this.f13707d = i10;
            this.f13708e = false;
            this.f13706c.clear();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface d {
        void d();
    }

    public o1(d dVar, mc.a aVar, ne.u uVar, mc.t1 t1Var) {
        this.f13687a = t1Var;
        this.f13691e = dVar;
        this.f13694h = aVar;
        this.f13695i = uVar;
    }

    private void A(int i10, int i11) {
        for (int i12 = i11 - 1; i12 >= i10; i12--) {
            c cVar = (c) this.f13688b.remove(i12);
            this.f13690d.remove(cVar.f13705b);
            g(i12, -cVar.f13704a.X().t());
            cVar.f13708e = true;
            if (this.f13697k) {
                u(cVar);
            }
        }
    }

    private void g(int i10, int i11) {
        while (i10 < this.f13688b.size()) {
            ((c) this.f13688b.get(i10)).f13707d += i11;
            i10++;
        }
    }

    private void j(c cVar) {
        b bVar = (b) this.f13692f.get(cVar);
        if (bVar != null) {
            bVar.f13701a.m(bVar.f13702b);
        }
    }

    private void k() {
        Iterator it = this.f13693g.iterator();
        while (it.hasNext()) {
            c cVar = (c) it.next();
            if (cVar.f13706c.isEmpty()) {
                j(cVar);
                it.remove();
            }
        }
    }

    private void l(c cVar) {
        this.f13693g.add(cVar);
        b bVar = (b) this.f13692f.get(cVar);
        if (bVar != null) {
            bVar.f13701a.s(bVar.f13702b);
        }
    }

    private static Object m(Object obj) {
        return com.google.android.exoplayer2.a.z(obj);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static r.b n(c cVar, r.b bVar) {
        for (int i10 = 0; i10 < cVar.f13706c.size(); i10++) {
            if (((r.b) cVar.f13706c.get(i10)).f47287d == bVar.f47287d) {
                return bVar.c(p(cVar, bVar.f47284a));
            }
        }
        return null;
    }

    private static Object o(Object obj) {
        return com.google.android.exoplayer2.a.A(obj);
    }

    private static Object p(c cVar, Object obj) {
        return com.google.android.exoplayer2.a.C(cVar.f13705b, obj);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int s(c cVar, int i10) {
        return i10 + cVar.f13707d;
    }

    private void u(c cVar) {
        if (cVar.f13708e && cVar.f13706c.isEmpty()) {
            b bVar = (b) ne.a.e((b) this.f13692f.remove(cVar));
            bVar.f13701a.a(bVar.f13702b);
            bVar.f13701a.k(bVar.f13703c);
            bVar.f13701a.d(bVar.f13703c);
            this.f13693g.remove(cVar);
        }
    }

    private void w(c cVar) {
        qd.o oVar = cVar.f13704a;
        r.c cVar2 = new r.c() { // from class: com.google.android.exoplayer2.b1
            @Override // qd.r.c
            public final void a(qd.r rVar, Timeline timeline) {
                o1.this.f13691e.d();
            }
        };
        a aVar = new a(cVar);
        this.f13692f.put(cVar, new b(oVar, cVar2, aVar));
        oVar.g(ne.w0.y(), aVar);
        oVar.e(ne.w0.y(), aVar);
        oVar.r(cVar2, this.f13698l, this.f13687a);
    }

    public Timeline B(List list, qd.o0 o0Var) {
        A(0, this.f13688b.size());
        return f(this.f13688b.size(), list, o0Var);
    }

    public Timeline C(qd.o0 o0Var) {
        int r10 = r();
        if (o0Var.getLength() != r10) {
            o0Var = o0Var.e().g(0, r10);
        }
        this.f13696j = o0Var;
        return i();
    }

    public Timeline f(int i10, List list, qd.o0 o0Var) {
        if (!list.isEmpty()) {
            this.f13696j = o0Var;
            for (int i11 = i10; i11 < list.size() + i10; i11++) {
                c cVar = (c) list.get(i11 - i10);
                if (i11 > 0) {
                    c cVar2 = (c) this.f13688b.get(i11 - 1);
                    cVar.c(cVar2.f13707d + cVar2.f13704a.X().t());
                } else {
                    cVar.c(0);
                }
                g(i11, cVar.f13704a.X().t());
                this.f13688b.add(i11, cVar);
                this.f13690d.put(cVar.f13705b, cVar);
                if (this.f13697k) {
                    w(cVar);
                    if (this.f13689c.isEmpty()) {
                        this.f13693g.add(cVar);
                    } else {
                        j(cVar);
                    }
                }
            }
        }
        return i();
    }

    public qd.p h(r.b bVar, le.b bVar2, long j10) {
        Object o10 = o(bVar.f47284a);
        r.b c10 = bVar.c(m(bVar.f47284a));
        c cVar = (c) ne.a.e((c) this.f13690d.get(o10));
        l(cVar);
        cVar.f13706c.add(c10);
        qd.n h10 = cVar.f13704a.h(c10, bVar2, j10);
        this.f13689c.put(h10, cVar);
        k();
        return h10;
    }

    public Timeline i() {
        if (this.f13688b.isEmpty()) {
            return Timeline.f12983d;
        }
        int i10 = 0;
        for (int i11 = 0; i11 < this.f13688b.size(); i11++) {
            c cVar = (c) this.f13688b.get(i11);
            cVar.f13707d = i10;
            i10 += cVar.f13704a.X().t();
        }
        return new t1(this.f13688b, this.f13696j);
    }

    public qd.o0 q() {
        return this.f13696j;
    }

    public int r() {
        return this.f13688b.size();
    }

    public boolean t() {
        return this.f13697k;
    }

    public void v(le.c0 c0Var) {
        ne.a.g(!this.f13697k);
        this.f13698l = c0Var;
        for (int i10 = 0; i10 < this.f13688b.size(); i10++) {
            c cVar = (c) this.f13688b.get(i10);
            w(cVar);
            this.f13693g.add(cVar);
        }
        this.f13697k = true;
    }

    public void x() {
        for (b bVar : this.f13692f.values()) {
            try {
                bVar.f13701a.a(bVar.f13702b);
            } catch (RuntimeException e10) {
                ne.y.d("MediaSourceList", "Failed to release child source.", e10);
            }
            bVar.f13701a.k(bVar.f13703c);
            bVar.f13701a.d(bVar.f13703c);
        }
        this.f13692f.clear();
        this.f13693g.clear();
        this.f13697k = false;
    }

    public void y(qd.p pVar) {
        c cVar = (c) ne.a.e((c) this.f13689c.remove(pVar));
        cVar.f13704a.c(pVar);
        cVar.f13706c.remove(((qd.n) pVar).f47257d);
        if (!this.f13689c.isEmpty()) {
            k();
        }
        u(cVar);
    }

    public Timeline z(int i10, int i11, qd.o0 o0Var) {
        boolean z10;
        if (i10 >= 0 && i10 <= i11 && i11 <= r()) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.a(z10);
        this.f13696j = o0Var;
        A(i10, i11);
        return i();
    }
}
