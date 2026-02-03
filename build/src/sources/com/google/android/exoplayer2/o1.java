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
    private final mc.t1 f12284a;

    /* renamed from: e  reason: collision with root package name */
    private final d f12288e;

    /* renamed from: h  reason: collision with root package name */
    private final mc.a f12291h;

    /* renamed from: i  reason: collision with root package name */
    private final ne.u f12292i;

    /* renamed from: k  reason: collision with root package name */
    private boolean f12294k;

    /* renamed from: l  reason: collision with root package name */
    private le.c0 f12295l;

    /* renamed from: j  reason: collision with root package name */
    private qd.o0 f12293j = new o0.a(0);

    /* renamed from: c  reason: collision with root package name */
    private final IdentityHashMap f12286c = new IdentityHashMap();

    /* renamed from: d  reason: collision with root package name */
    private final Map f12287d = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final List f12285b = new ArrayList();

    /* renamed from: f  reason: collision with root package name */
    private final HashMap f12289f = new HashMap();

    /* renamed from: g  reason: collision with root package name */
    private final Set f12290g = new HashSet();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class a implements qd.y, rc.u {

        /* renamed from: d  reason: collision with root package name */
        private final c f12296d;

        public a(c cVar) {
            this.f12296d = cVar;
        }

        private Pair V(int i10, r.b bVar) {
            r.b bVar2 = null;
            if (bVar != null) {
                r.b n10 = o1.n(this.f12296d, bVar);
                if (n10 == null) {
                    return null;
                }
                bVar2 = n10;
            }
            return Pair.create(Integer.valueOf(o1.s(this.f12296d, i10)), bVar2);
        }

        @Override // rc.u
        public void A(int i10, r.b bVar) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f12292i.post(new Runnable() { // from class: com.google.android.exoplayer2.e1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f12291h.A(((Integer) r1.first).intValue(), (r.b) V.second);
                    }
                });
            }
        }

        @Override // qd.y
        public void C(int i10, r.b bVar, final LoadEventInfo loadEventInfo, final MediaLoadData mediaLoadData) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f12292i.post(new Runnable() { // from class: com.google.android.exoplayer2.i1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f12291h.C(((Integer) r1.first).intValue(), (r.b) V.second, loadEventInfo, mediaLoadData);
                    }
                });
            }
        }

        @Override // qd.y
        public void D(int i10, r.b bVar, final MediaLoadData mediaLoadData) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f12292i.post(new Runnable() { // from class: com.google.android.exoplayer2.m1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f12291h.D(((Integer) r1.first).intValue(), (r.b) ne.a.e((r.b) V.second), mediaLoadData);
                    }
                });
            }
        }

        @Override // rc.u
        public void F(int i10, r.b bVar) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f12292i.post(new Runnable() { // from class: com.google.android.exoplayer2.g1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f12291h.F(((Integer) r1.first).intValue(), (r.b) V.second);
                    }
                });
            }
        }

        @Override // qd.y
        public void G(int i10, r.b bVar, final LoadEventInfo loadEventInfo, final MediaLoadData mediaLoadData) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f12292i.post(new Runnable() { // from class: com.google.android.exoplayer2.k1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f12291h.G(((Integer) r1.first).intValue(), (r.b) V.second, loadEventInfo, mediaLoadData);
                    }
                });
            }
        }

        @Override // qd.y
        public void H(int i10, r.b bVar, final LoadEventInfo loadEventInfo, final MediaLoadData mediaLoadData) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f12292i.post(new Runnable() { // from class: com.google.android.exoplayer2.c1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f12291h.H(((Integer) r1.first).intValue(), (r.b) V.second, loadEventInfo, mediaLoadData);
                    }
                });
            }
        }

        @Override // rc.u
        public void I(int i10, r.b bVar, final Exception exc) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f12292i.post(new Runnable() { // from class: com.google.android.exoplayer2.h1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f12291h.I(((Integer) r1.first).intValue(), (r.b) V.second, exc);
                    }
                });
            }
        }

        @Override // rc.u
        public void J(int i10, r.b bVar, final int i11) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f12292i.post(new Runnable() { // from class: com.google.android.exoplayer2.j1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f12291h.J(((Integer) r1.first).intValue(), (r.b) V.second, i11);
                    }
                });
            }
        }

        @Override // qd.y
        public void g(int i10, r.b bVar, final MediaLoadData mediaLoadData) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f12292i.post(new Runnable() { // from class: com.google.android.exoplayer2.f1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f12291h.g(((Integer) r1.first).intValue(), (r.b) V.second, mediaLoadData);
                    }
                });
            }
        }

        @Override // qd.y
        public void t(int i10, r.b bVar, final LoadEventInfo loadEventInfo, final MediaLoadData mediaLoadData, final IOException iOException, final boolean z10) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f12292i.post(new Runnable() { // from class: com.google.android.exoplayer2.l1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f12291h.t(((Integer) r1.first).intValue(), (r.b) V.second, loadEventInfo, mediaLoadData, iOException, z10);
                    }
                });
            }
        }

        @Override // rc.u
        public void w(int i10, r.b bVar) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f12292i.post(new Runnable() { // from class: com.google.android.exoplayer2.n1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f12291h.w(((Integer) r1.first).intValue(), (r.b) V.second);
                    }
                });
            }
        }

        @Override // rc.u
        public void z(int i10, r.b bVar) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f12292i.post(new Runnable() { // from class: com.google.android.exoplayer2.d1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f12291h.z(((Integer) r1.first).intValue(), (r.b) V.second);
                    }
                });
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final qd.r f12298a;

        /* renamed from: b  reason: collision with root package name */
        public final r.c f12299b;

        /* renamed from: c  reason: collision with root package name */
        public final a f12300c;

        public b(qd.r rVar, r.c cVar, a aVar) {
            this.f12298a = rVar;
            this.f12299b = cVar;
            this.f12300c = aVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c implements a1 {

        /* renamed from: a  reason: collision with root package name */
        public final qd.o f12301a;

        /* renamed from: d  reason: collision with root package name */
        public int f12304d;

        /* renamed from: e  reason: collision with root package name */
        public boolean f12305e;

        /* renamed from: c  reason: collision with root package name */
        public final List f12303c = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        public final Object f12302b = new Object();

        public c(qd.r rVar, boolean z10) {
            this.f12301a = new qd.o(rVar, z10);
        }

        @Override // com.google.android.exoplayer2.a1
        public Object a() {
            return this.f12302b;
        }

        @Override // com.google.android.exoplayer2.a1
        public Timeline b() {
            return this.f12301a.X();
        }

        public void c(int i10) {
            this.f12304d = i10;
            this.f12305e = false;
            this.f12303c.clear();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface d {
        void d();
    }

    public o1(d dVar, mc.a aVar, ne.u uVar, mc.t1 t1Var) {
        this.f12284a = t1Var;
        this.f12288e = dVar;
        this.f12291h = aVar;
        this.f12292i = uVar;
    }

    private void A(int i10, int i11) {
        for (int i12 = i11 - 1; i12 >= i10; i12--) {
            c cVar = (c) this.f12285b.remove(i12);
            this.f12287d.remove(cVar.f12302b);
            g(i12, -cVar.f12301a.X().t());
            cVar.f12305e = true;
            if (this.f12294k) {
                u(cVar);
            }
        }
    }

    private void g(int i10, int i11) {
        while (i10 < this.f12285b.size()) {
            ((c) this.f12285b.get(i10)).f12304d += i11;
            i10++;
        }
    }

    private void j(c cVar) {
        b bVar = (b) this.f12289f.get(cVar);
        if (bVar != null) {
            bVar.f12298a.m(bVar.f12299b);
        }
    }

    private void k() {
        Iterator it = this.f12290g.iterator();
        while (it.hasNext()) {
            c cVar = (c) it.next();
            if (cVar.f12303c.isEmpty()) {
                j(cVar);
                it.remove();
            }
        }
    }

    private void l(c cVar) {
        this.f12290g.add(cVar);
        b bVar = (b) this.f12289f.get(cVar);
        if (bVar != null) {
            bVar.f12298a.s(bVar.f12299b);
        }
    }

    private static Object m(Object obj) {
        return com.google.android.exoplayer2.a.z(obj);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static r.b n(c cVar, r.b bVar) {
        for (int i10 = 0; i10 < cVar.f12303c.size(); i10++) {
            if (((r.b) cVar.f12303c.get(i10)).f47708d == bVar.f47708d) {
                return bVar.c(p(cVar, bVar.f47705a));
            }
        }
        return null;
    }

    private static Object o(Object obj) {
        return com.google.android.exoplayer2.a.A(obj);
    }

    private static Object p(c cVar, Object obj) {
        return com.google.android.exoplayer2.a.C(cVar.f12302b, obj);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int s(c cVar, int i10) {
        return i10 + cVar.f12304d;
    }

    private void u(c cVar) {
        if (cVar.f12305e && cVar.f12303c.isEmpty()) {
            b bVar = (b) ne.a.e((b) this.f12289f.remove(cVar));
            bVar.f12298a.a(bVar.f12299b);
            bVar.f12298a.k(bVar.f12300c);
            bVar.f12298a.d(bVar.f12300c);
            this.f12290g.remove(cVar);
        }
    }

    private void w(c cVar) {
        qd.o oVar = cVar.f12301a;
        r.c cVar2 = new r.c() { // from class: com.google.android.exoplayer2.b1
            @Override // qd.r.c
            public final void a(qd.r rVar, Timeline timeline) {
                o1.this.f12288e.d();
            }
        };
        a aVar = new a(cVar);
        this.f12289f.put(cVar, new b(oVar, cVar2, aVar));
        oVar.g(ne.w0.y(), aVar);
        oVar.e(ne.w0.y(), aVar);
        oVar.r(cVar2, this.f12295l, this.f12284a);
    }

    public Timeline B(List list, qd.o0 o0Var) {
        A(0, this.f12285b.size());
        return f(this.f12285b.size(), list, o0Var);
    }

    public Timeline C(qd.o0 o0Var) {
        int r10 = r();
        if (o0Var.getLength() != r10) {
            o0Var = o0Var.e().g(0, r10);
        }
        this.f12293j = o0Var;
        return i();
    }

    public Timeline f(int i10, List list, qd.o0 o0Var) {
        if (!list.isEmpty()) {
            this.f12293j = o0Var;
            for (int i11 = i10; i11 < list.size() + i10; i11++) {
                c cVar = (c) list.get(i11 - i10);
                if (i11 > 0) {
                    c cVar2 = (c) this.f12285b.get(i11 - 1);
                    cVar.c(cVar2.f12304d + cVar2.f12301a.X().t());
                } else {
                    cVar.c(0);
                }
                g(i11, cVar.f12301a.X().t());
                this.f12285b.add(i11, cVar);
                this.f12287d.put(cVar.f12302b, cVar);
                if (this.f12294k) {
                    w(cVar);
                    if (this.f12286c.isEmpty()) {
                        this.f12290g.add(cVar);
                    } else {
                        j(cVar);
                    }
                }
            }
        }
        return i();
    }

    public qd.p h(r.b bVar, le.b bVar2, long j10) {
        Object o10 = o(bVar.f47705a);
        r.b c10 = bVar.c(m(bVar.f47705a));
        c cVar = (c) ne.a.e((c) this.f12287d.get(o10));
        l(cVar);
        cVar.f12303c.add(c10);
        qd.n h10 = cVar.f12301a.h(c10, bVar2, j10);
        this.f12286c.put(h10, cVar);
        k();
        return h10;
    }

    public Timeline i() {
        if (this.f12285b.isEmpty()) {
            return Timeline.f11580d;
        }
        int i10 = 0;
        for (int i11 = 0; i11 < this.f12285b.size(); i11++) {
            c cVar = (c) this.f12285b.get(i11);
            cVar.f12304d = i10;
            i10 += cVar.f12301a.X().t();
        }
        return new t1(this.f12285b, this.f12293j);
    }

    public qd.o0 q() {
        return this.f12293j;
    }

    public int r() {
        return this.f12285b.size();
    }

    public boolean t() {
        return this.f12294k;
    }

    public void v(le.c0 c0Var) {
        ne.a.g(!this.f12294k);
        this.f12295l = c0Var;
        for (int i10 = 0; i10 < this.f12285b.size(); i10++) {
            c cVar = (c) this.f12285b.get(i10);
            w(cVar);
            this.f12290g.add(cVar);
        }
        this.f12294k = true;
    }

    public void x() {
        for (b bVar : this.f12289f.values()) {
            try {
                bVar.f12298a.a(bVar.f12299b);
            } catch (RuntimeException e10) {
                ne.y.d("MediaSourceList", "Failed to release child source.", e10);
            }
            bVar.f12298a.k(bVar.f12300c);
            bVar.f12298a.d(bVar.f12300c);
        }
        this.f12289f.clear();
        this.f12290g.clear();
        this.f12294k = false;
    }

    public void y(qd.p pVar) {
        c cVar = (c) ne.a.e((c) this.f12286c.remove(pVar));
        cVar.f12301a.c(pVar);
        cVar.f12303c.remove(((qd.n) pVar).f47678d);
        if (!this.f12286c.isEmpty()) {
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
        this.f12293j = o0Var;
        A(i10, i11);
        return i();
    }
}
