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
    private final mc.t1 f12630a;

    /* renamed from: e  reason: collision with root package name */
    private final d f12634e;

    /* renamed from: h  reason: collision with root package name */
    private final mc.a f12637h;

    /* renamed from: i  reason: collision with root package name */
    private final ne.u f12638i;

    /* renamed from: k  reason: collision with root package name */
    private boolean f12640k;

    /* renamed from: l  reason: collision with root package name */
    private le.c0 f12641l;

    /* renamed from: j  reason: collision with root package name */
    private qd.o0 f12639j = new o0.a(0);

    /* renamed from: c  reason: collision with root package name */
    private final IdentityHashMap f12632c = new IdentityHashMap();

    /* renamed from: d  reason: collision with root package name */
    private final Map f12633d = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final List f12631b = new ArrayList();

    /* renamed from: f  reason: collision with root package name */
    private final HashMap f12635f = new HashMap();

    /* renamed from: g  reason: collision with root package name */
    private final Set f12636g = new HashSet();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class a implements qd.y, rc.u {

        /* renamed from: d  reason: collision with root package name */
        private final c f12642d;

        public a(c cVar) {
            this.f12642d = cVar;
        }

        private Pair V(int i10, r.b bVar) {
            r.b bVar2 = null;
            if (bVar != null) {
                r.b n10 = o1.n(this.f12642d, bVar);
                if (n10 == null) {
                    return null;
                }
                bVar2 = n10;
            }
            return Pair.create(Integer.valueOf(o1.s(this.f12642d, i10)), bVar2);
        }

        @Override // rc.u
        public void A(int i10, r.b bVar) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f12638i.post(new Runnable() { // from class: com.google.android.exoplayer2.e1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f12637h.A(((Integer) r1.first).intValue(), (r.b) V.second);
                    }
                });
            }
        }

        @Override // qd.y
        public void C(int i10, r.b bVar, final LoadEventInfo loadEventInfo, final MediaLoadData mediaLoadData) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f12638i.post(new Runnable() { // from class: com.google.android.exoplayer2.i1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f12637h.C(((Integer) r1.first).intValue(), (r.b) V.second, loadEventInfo, mediaLoadData);
                    }
                });
            }
        }

        @Override // qd.y
        public void D(int i10, r.b bVar, final MediaLoadData mediaLoadData) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f12638i.post(new Runnable() { // from class: com.google.android.exoplayer2.m1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f12637h.D(((Integer) r1.first).intValue(), (r.b) ne.a.e((r.b) V.second), mediaLoadData);
                    }
                });
            }
        }

        @Override // rc.u
        public void F(int i10, r.b bVar) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f12638i.post(new Runnable() { // from class: com.google.android.exoplayer2.g1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f12637h.F(((Integer) r1.first).intValue(), (r.b) V.second);
                    }
                });
            }
        }

        @Override // qd.y
        public void G(int i10, r.b bVar, final LoadEventInfo loadEventInfo, final MediaLoadData mediaLoadData) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f12638i.post(new Runnable() { // from class: com.google.android.exoplayer2.k1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f12637h.G(((Integer) r1.first).intValue(), (r.b) V.second, loadEventInfo, mediaLoadData);
                    }
                });
            }
        }

        @Override // qd.y
        public void H(int i10, r.b bVar, final LoadEventInfo loadEventInfo, final MediaLoadData mediaLoadData) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f12638i.post(new Runnable() { // from class: com.google.android.exoplayer2.c1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f12637h.H(((Integer) r1.first).intValue(), (r.b) V.second, loadEventInfo, mediaLoadData);
                    }
                });
            }
        }

        @Override // rc.u
        public void I(int i10, r.b bVar, final Exception exc) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f12638i.post(new Runnable() { // from class: com.google.android.exoplayer2.h1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f12637h.I(((Integer) r1.first).intValue(), (r.b) V.second, exc);
                    }
                });
            }
        }

        @Override // rc.u
        public void J(int i10, r.b bVar, final int i11) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f12638i.post(new Runnable() { // from class: com.google.android.exoplayer2.j1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f12637h.J(((Integer) r1.first).intValue(), (r.b) V.second, i11);
                    }
                });
            }
        }

        @Override // qd.y
        public void g(int i10, r.b bVar, final MediaLoadData mediaLoadData) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f12638i.post(new Runnable() { // from class: com.google.android.exoplayer2.f1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f12637h.g(((Integer) r1.first).intValue(), (r.b) V.second, mediaLoadData);
                    }
                });
            }
        }

        @Override // qd.y
        public void t(int i10, r.b bVar, final LoadEventInfo loadEventInfo, final MediaLoadData mediaLoadData, final IOException iOException, final boolean z10) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f12638i.post(new Runnable() { // from class: com.google.android.exoplayer2.l1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f12637h.t(((Integer) r1.first).intValue(), (r.b) V.second, loadEventInfo, mediaLoadData, iOException, z10);
                    }
                });
            }
        }

        @Override // rc.u
        public void w(int i10, r.b bVar) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f12638i.post(new Runnable() { // from class: com.google.android.exoplayer2.n1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f12637h.w(((Integer) r1.first).intValue(), (r.b) V.second);
                    }
                });
            }
        }

        @Override // rc.u
        public void z(int i10, r.b bVar) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f12638i.post(new Runnable() { // from class: com.google.android.exoplayer2.d1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f12637h.z(((Integer) r1.first).intValue(), (r.b) V.second);
                    }
                });
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final qd.r f12644a;

        /* renamed from: b  reason: collision with root package name */
        public final r.c f12645b;

        /* renamed from: c  reason: collision with root package name */
        public final a f12646c;

        public b(qd.r rVar, r.c cVar, a aVar) {
            this.f12644a = rVar;
            this.f12645b = cVar;
            this.f12646c = aVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c implements a1 {

        /* renamed from: a  reason: collision with root package name */
        public final qd.o f12647a;

        /* renamed from: d  reason: collision with root package name */
        public int f12650d;

        /* renamed from: e  reason: collision with root package name */
        public boolean f12651e;

        /* renamed from: c  reason: collision with root package name */
        public final List f12649c = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        public final Object f12648b = new Object();

        public c(qd.r rVar, boolean z10) {
            this.f12647a = new qd.o(rVar, z10);
        }

        @Override // com.google.android.exoplayer2.a1
        public Object a() {
            return this.f12648b;
        }

        @Override // com.google.android.exoplayer2.a1
        public Timeline b() {
            return this.f12647a.X();
        }

        public void c(int i10) {
            this.f12650d = i10;
            this.f12651e = false;
            this.f12649c.clear();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface d {
        void d();
    }

    public o1(d dVar, mc.a aVar, ne.u uVar, mc.t1 t1Var) {
        this.f12630a = t1Var;
        this.f12634e = dVar;
        this.f12637h = aVar;
        this.f12638i = uVar;
    }

    private void A(int i10, int i11) {
        for (int i12 = i11 - 1; i12 >= i10; i12--) {
            c cVar = (c) this.f12631b.remove(i12);
            this.f12633d.remove(cVar.f12648b);
            g(i12, -cVar.f12647a.X().t());
            cVar.f12651e = true;
            if (this.f12640k) {
                u(cVar);
            }
        }
    }

    private void g(int i10, int i11) {
        while (i10 < this.f12631b.size()) {
            ((c) this.f12631b.get(i10)).f12650d += i11;
            i10++;
        }
    }

    private void j(c cVar) {
        b bVar = (b) this.f12635f.get(cVar);
        if (bVar != null) {
            bVar.f12644a.m(bVar.f12645b);
        }
    }

    private void k() {
        Iterator it = this.f12636g.iterator();
        while (it.hasNext()) {
            c cVar = (c) it.next();
            if (cVar.f12649c.isEmpty()) {
                j(cVar);
                it.remove();
            }
        }
    }

    private void l(c cVar) {
        this.f12636g.add(cVar);
        b bVar = (b) this.f12635f.get(cVar);
        if (bVar != null) {
            bVar.f12644a.s(bVar.f12645b);
        }
    }

    private static Object m(Object obj) {
        return com.google.android.exoplayer2.a.z(obj);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static r.b n(c cVar, r.b bVar) {
        for (int i10 = 0; i10 < cVar.f12649c.size(); i10++) {
            if (((r.b) cVar.f12649c.get(i10)).f46868d == bVar.f46868d) {
                return bVar.c(p(cVar, bVar.f46865a));
            }
        }
        return null;
    }

    private static Object o(Object obj) {
        return com.google.android.exoplayer2.a.A(obj);
    }

    private static Object p(c cVar, Object obj) {
        return com.google.android.exoplayer2.a.C(cVar.f12648b, obj);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int s(c cVar, int i10) {
        return i10 + cVar.f12650d;
    }

    private void u(c cVar) {
        if (cVar.f12651e && cVar.f12649c.isEmpty()) {
            b bVar = (b) ne.a.e((b) this.f12635f.remove(cVar));
            bVar.f12644a.a(bVar.f12645b);
            bVar.f12644a.k(bVar.f12646c);
            bVar.f12644a.d(bVar.f12646c);
            this.f12636g.remove(cVar);
        }
    }

    private void w(c cVar) {
        qd.o oVar = cVar.f12647a;
        r.c cVar2 = new r.c() { // from class: com.google.android.exoplayer2.b1
            @Override // qd.r.c
            public final void a(qd.r rVar, Timeline timeline) {
                o1.this.f12634e.d();
            }
        };
        a aVar = new a(cVar);
        this.f12635f.put(cVar, new b(oVar, cVar2, aVar));
        oVar.g(ne.w0.y(), aVar);
        oVar.e(ne.w0.y(), aVar);
        oVar.r(cVar2, this.f12641l, this.f12630a);
    }

    public Timeline B(List list, qd.o0 o0Var) {
        A(0, this.f12631b.size());
        return f(this.f12631b.size(), list, o0Var);
    }

    public Timeline C(qd.o0 o0Var) {
        int r10 = r();
        if (o0Var.getLength() != r10) {
            o0Var = o0Var.e().g(0, r10);
        }
        this.f12639j = o0Var;
        return i();
    }

    public Timeline f(int i10, List list, qd.o0 o0Var) {
        if (!list.isEmpty()) {
            this.f12639j = o0Var;
            for (int i11 = i10; i11 < list.size() + i10; i11++) {
                c cVar = (c) list.get(i11 - i10);
                if (i11 > 0) {
                    c cVar2 = (c) this.f12631b.get(i11 - 1);
                    cVar.c(cVar2.f12650d + cVar2.f12647a.X().t());
                } else {
                    cVar.c(0);
                }
                g(i11, cVar.f12647a.X().t());
                this.f12631b.add(i11, cVar);
                this.f12633d.put(cVar.f12648b, cVar);
                if (this.f12640k) {
                    w(cVar);
                    if (this.f12632c.isEmpty()) {
                        this.f12636g.add(cVar);
                    } else {
                        j(cVar);
                    }
                }
            }
        }
        return i();
    }

    public qd.p h(r.b bVar, le.b bVar2, long j10) {
        Object o10 = o(bVar.f46865a);
        r.b c10 = bVar.c(m(bVar.f46865a));
        c cVar = (c) ne.a.e((c) this.f12633d.get(o10));
        l(cVar);
        cVar.f12649c.add(c10);
        qd.n h10 = cVar.f12647a.h(c10, bVar2, j10);
        this.f12632c.put(h10, cVar);
        k();
        return h10;
    }

    public Timeline i() {
        if (this.f12631b.isEmpty()) {
            return Timeline.f11864d;
        }
        int i10 = 0;
        for (int i11 = 0; i11 < this.f12631b.size(); i11++) {
            c cVar = (c) this.f12631b.get(i11);
            cVar.f12650d = i10;
            i10 += cVar.f12647a.X().t();
        }
        return new t1(this.f12631b, this.f12639j);
    }

    public qd.o0 q() {
        return this.f12639j;
    }

    public int r() {
        return this.f12631b.size();
    }

    public boolean t() {
        return this.f12640k;
    }

    public void v(le.c0 c0Var) {
        ne.a.g(!this.f12640k);
        this.f12641l = c0Var;
        for (int i10 = 0; i10 < this.f12631b.size(); i10++) {
            c cVar = (c) this.f12631b.get(i10);
            w(cVar);
            this.f12636g.add(cVar);
        }
        this.f12640k = true;
    }

    public void x() {
        for (b bVar : this.f12635f.values()) {
            try {
                bVar.f12644a.a(bVar.f12645b);
            } catch (RuntimeException e10) {
                ne.y.d("MediaSourceList", "Failed to release child source.", e10);
            }
            bVar.f12644a.k(bVar.f12646c);
            bVar.f12644a.d(bVar.f12646c);
        }
        this.f12635f.clear();
        this.f12636g.clear();
        this.f12640k = false;
    }

    public void y(qd.p pVar) {
        c cVar = (c) ne.a.e((c) this.f12632c.remove(pVar));
        cVar.f12647a.c(pVar);
        cVar.f12649c.remove(((qd.n) pVar).f46838d);
        if (!this.f12632c.isEmpty()) {
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
        this.f12639j = o0Var;
        A(i10, i11);
        return i();
    }
}
