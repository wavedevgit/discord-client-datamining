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
    private final nc.t1 f13348a;

    /* renamed from: e  reason: collision with root package name */
    private final d f13352e;

    /* renamed from: h  reason: collision with root package name */
    private final nc.a f13355h;

    /* renamed from: i  reason: collision with root package name */
    private final oe.u f13356i;

    /* renamed from: k  reason: collision with root package name */
    private boolean f13358k;

    /* renamed from: l  reason: collision with root package name */
    private me.c0 f13359l;

    /* renamed from: j  reason: collision with root package name */
    private rd.o0 f13357j = new o0.a(0);

    /* renamed from: c  reason: collision with root package name */
    private final IdentityHashMap f13350c = new IdentityHashMap();

    /* renamed from: d  reason: collision with root package name */
    private final Map f13351d = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final List f13349b = new ArrayList();

    /* renamed from: f  reason: collision with root package name */
    private final HashMap f13353f = new HashMap();

    /* renamed from: g  reason: collision with root package name */
    private final Set f13354g = new HashSet();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class a implements rd.y, sc.u {

        /* renamed from: d  reason: collision with root package name */
        private final c f13360d;

        public a(c cVar) {
            this.f13360d = cVar;
        }

        private Pair V(int i10, r.b bVar) {
            r.b bVar2 = null;
            if (bVar != null) {
                r.b n10 = o1.n(this.f13360d, bVar);
                if (n10 == null) {
                    return null;
                }
                bVar2 = n10;
            }
            return Pair.create(Integer.valueOf(o1.s(this.f13360d, i10)), bVar2);
        }

        @Override // sc.u
        public void A(int i10, r.b bVar, final int i11) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f13356i.post(new Runnable() { // from class: com.google.android.exoplayer2.j1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f13355h.A(((Integer) r1.first).intValue(), (r.b) V.second, i11);
                    }
                });
            }
        }

        @Override // sc.u
        public void B(int i10, r.b bVar, final Exception exc) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f13356i.post(new Runnable() { // from class: com.google.android.exoplayer2.h1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f13355h.B(((Integer) r1.first).intValue(), (r.b) V.second, exc);
                    }
                });
            }
        }

        @Override // rd.y
        public void C(int i10, r.b bVar, final LoadEventInfo loadEventInfo, final MediaLoadData mediaLoadData) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f13356i.post(new Runnable() { // from class: com.google.android.exoplayer2.k1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f13355h.C(((Integer) r1.first).intValue(), (r.b) V.second, loadEventInfo, mediaLoadData);
                    }
                });
            }
        }

        @Override // rd.y
        public void D(int i10, r.b bVar, final LoadEventInfo loadEventInfo, final MediaLoadData mediaLoadData) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f13356i.post(new Runnable() { // from class: com.google.android.exoplayer2.i1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f13355h.D(((Integer) r1.first).intValue(), (r.b) V.second, loadEventInfo, mediaLoadData);
                    }
                });
            }
        }

        @Override // sc.u
        public void E(int i10, r.b bVar) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f13356i.post(new Runnable() { // from class: com.google.android.exoplayer2.n1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f13355h.E(((Integer) r1.first).intValue(), (r.b) V.second);
                    }
                });
            }
        }

        @Override // rd.y
        public void F(int i10, r.b bVar, final MediaLoadData mediaLoadData) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f13356i.post(new Runnable() { // from class: com.google.android.exoplayer2.m1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f13355h.F(((Integer) r1.first).intValue(), (r.b) oe.a.e((r.b) V.second), mediaLoadData);
                    }
                });
            }
        }

        @Override // rd.y
        public void G(int i10, r.b bVar, final LoadEventInfo loadEventInfo, final MediaLoadData mediaLoadData) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f13356i.post(new Runnable() { // from class: com.google.android.exoplayer2.c1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f13355h.G(((Integer) r1.first).intValue(), (r.b) V.second, loadEventInfo, mediaLoadData);
                    }
                });
            }
        }

        @Override // rd.y
        public void H(int i10, r.b bVar, final LoadEventInfo loadEventInfo, final MediaLoadData mediaLoadData, final IOException iOException, final boolean z10) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f13356i.post(new Runnable() { // from class: com.google.android.exoplayer2.l1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f13355h.H(((Integer) r1.first).intValue(), (r.b) V.second, loadEventInfo, mediaLoadData, iOException, z10);
                    }
                });
            }
        }

        @Override // sc.u
        public void J(int i10, r.b bVar) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f13356i.post(new Runnable() { // from class: com.google.android.exoplayer2.d1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f13355h.J(((Integer) r1.first).intValue(), (r.b) V.second);
                    }
                });
            }
        }

        @Override // rd.y
        public void g(int i10, r.b bVar, final MediaLoadData mediaLoadData) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f13356i.post(new Runnable() { // from class: com.google.android.exoplayer2.f1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f13355h.g(((Integer) r1.first).intValue(), (r.b) V.second, mediaLoadData);
                    }
                });
            }
        }

        @Override // sc.u
        public void t(int i10, r.b bVar) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f13356i.post(new Runnable() { // from class: com.google.android.exoplayer2.g1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f13355h.t(((Integer) r1.first).intValue(), (r.b) V.second);
                    }
                });
            }
        }

        @Override // sc.u
        public void u(int i10, r.b bVar) {
            final Pair V = V(i10, bVar);
            if (V != null) {
                o1.this.f13356i.post(new Runnable() { // from class: com.google.android.exoplayer2.e1
                    @Override // java.lang.Runnable
                    public final void run() {
                        o1.this.f13355h.u(((Integer) r1.first).intValue(), (r.b) V.second);
                    }
                });
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final rd.r f13362a;

        /* renamed from: b  reason: collision with root package name */
        public final r.c f13363b;

        /* renamed from: c  reason: collision with root package name */
        public final a f13364c;

        public b(rd.r rVar, r.c cVar, a aVar) {
            this.f13362a = rVar;
            this.f13363b = cVar;
            this.f13364c = aVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c implements a1 {

        /* renamed from: a  reason: collision with root package name */
        public final rd.o f13365a;

        /* renamed from: d  reason: collision with root package name */
        public int f13368d;

        /* renamed from: e  reason: collision with root package name */
        public boolean f13369e;

        /* renamed from: c  reason: collision with root package name */
        public final List f13367c = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        public final Object f13366b = new Object();

        public c(rd.r rVar, boolean z10) {
            this.f13365a = new rd.o(rVar, z10);
        }

        @Override // com.google.android.exoplayer2.a1
        public Object a() {
            return this.f13366b;
        }

        @Override // com.google.android.exoplayer2.a1
        public Timeline b() {
            return this.f13365a.X();
        }

        public void c(int i10) {
            this.f13368d = i10;
            this.f13369e = false;
            this.f13367c.clear();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface d {
        void d();
    }

    public o1(d dVar, nc.a aVar, oe.u uVar, nc.t1 t1Var) {
        this.f13348a = t1Var;
        this.f13352e = dVar;
        this.f13355h = aVar;
        this.f13356i = uVar;
    }

    private void A(int i10, int i11) {
        for (int i12 = i11 - 1; i12 >= i10; i12--) {
            c cVar = (c) this.f13349b.remove(i12);
            this.f13351d.remove(cVar.f13366b);
            g(i12, -cVar.f13365a.X().t());
            cVar.f13369e = true;
            if (this.f13358k) {
                u(cVar);
            }
        }
    }

    private void g(int i10, int i11) {
        while (i10 < this.f13349b.size()) {
            ((c) this.f13349b.get(i10)).f13368d += i11;
            i10++;
        }
    }

    private void j(c cVar) {
        b bVar = (b) this.f13353f.get(cVar);
        if (bVar != null) {
            bVar.f13362a.m(bVar.f13363b);
        }
    }

    private void k() {
        Iterator it = this.f13354g.iterator();
        while (it.hasNext()) {
            c cVar = (c) it.next();
            if (cVar.f13367c.isEmpty()) {
                j(cVar);
                it.remove();
            }
        }
    }

    private void l(c cVar) {
        this.f13354g.add(cVar);
        b bVar = (b) this.f13353f.get(cVar);
        if (bVar != null) {
            bVar.f13362a.p(bVar.f13363b);
        }
    }

    private static Object m(Object obj) {
        return com.google.android.exoplayer2.a.z(obj);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static r.b n(c cVar, r.b bVar) {
        for (int i10 = 0; i10 < cVar.f13367c.size(); i10++) {
            if (((r.b) cVar.f13367c.get(i10)).f46441d == bVar.f46441d) {
                return bVar.c(p(cVar, bVar.f46438a));
            }
        }
        return null;
    }

    private static Object o(Object obj) {
        return com.google.android.exoplayer2.a.A(obj);
    }

    private static Object p(c cVar, Object obj) {
        return com.google.android.exoplayer2.a.C(cVar.f13366b, obj);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int s(c cVar, int i10) {
        return i10 + cVar.f13368d;
    }

    private void u(c cVar) {
        if (cVar.f13369e && cVar.f13367c.isEmpty()) {
            b bVar = (b) oe.a.e((b) this.f13353f.remove(cVar));
            bVar.f13362a.e(bVar.f13363b);
            bVar.f13362a.h(bVar.f13364c);
            bVar.f13362a.l(bVar.f13364c);
            this.f13354g.remove(cVar);
        }
    }

    private void w(c cVar) {
        rd.o oVar = cVar.f13365a;
        r.c cVar2 = new r.c() { // from class: com.google.android.exoplayer2.b1
            @Override // rd.r.c
            public final void a(rd.r rVar, Timeline timeline) {
                o1.this.f13352e.d();
            }
        };
        a aVar = new a(cVar);
        this.f13353f.put(cVar, new b(oVar, cVar2, aVar));
        oVar.j(oe.w0.y(), aVar);
        oVar.b(oe.w0.y(), aVar);
        oVar.g(cVar2, this.f13359l, this.f13348a);
    }

    public Timeline B(List list, rd.o0 o0Var) {
        A(0, this.f13349b.size());
        return f(this.f13349b.size(), list, o0Var);
    }

    public Timeline C(rd.o0 o0Var) {
        int r10 = r();
        if (o0Var.getLength() != r10) {
            o0Var = o0Var.e().g(0, r10);
        }
        this.f13357j = o0Var;
        return i();
    }

    public Timeline f(int i10, List list, rd.o0 o0Var) {
        if (!list.isEmpty()) {
            this.f13357j = o0Var;
            for (int i11 = i10; i11 < list.size() + i10; i11++) {
                c cVar = (c) list.get(i11 - i10);
                if (i11 > 0) {
                    c cVar2 = (c) this.f13349b.get(i11 - 1);
                    cVar.c(cVar2.f13368d + cVar2.f13365a.X().t());
                } else {
                    cVar.c(0);
                }
                g(i11, cVar.f13365a.X().t());
                this.f13349b.add(i11, cVar);
                this.f13351d.put(cVar.f13366b, cVar);
                if (this.f13358k) {
                    w(cVar);
                    if (this.f13350c.isEmpty()) {
                        this.f13354g.add(cVar);
                    } else {
                        j(cVar);
                    }
                }
            }
        }
        return i();
    }

    public rd.p h(r.b bVar, me.b bVar2, long j10) {
        Object o10 = o(bVar.f46438a);
        r.b c10 = bVar.c(m(bVar.f46438a));
        c cVar = (c) oe.a.e((c) this.f13351d.get(o10));
        l(cVar);
        cVar.f13367c.add(c10);
        rd.n f10 = cVar.f13365a.f(c10, bVar2, j10);
        this.f13350c.put(f10, cVar);
        k();
        return f10;
    }

    public Timeline i() {
        if (this.f13349b.isEmpty()) {
            return Timeline.f12582d;
        }
        int i10 = 0;
        for (int i11 = 0; i11 < this.f13349b.size(); i11++) {
            c cVar = (c) this.f13349b.get(i11);
            cVar.f13368d = i10;
            i10 += cVar.f13365a.X().t();
        }
        return new t1(this.f13349b, this.f13357j);
    }

    public rd.o0 q() {
        return this.f13357j;
    }

    public int r() {
        return this.f13349b.size();
    }

    public boolean t() {
        return this.f13358k;
    }

    public void v(me.c0 c0Var) {
        oe.a.g(!this.f13358k);
        this.f13359l = c0Var;
        for (int i10 = 0; i10 < this.f13349b.size(); i10++) {
            c cVar = (c) this.f13349b.get(i10);
            w(cVar);
            this.f13354g.add(cVar);
        }
        this.f13358k = true;
    }

    public void x() {
        for (b bVar : this.f13353f.values()) {
            try {
                bVar.f13362a.e(bVar.f13363b);
            } catch (RuntimeException e10) {
                oe.y.d("MediaSourceList", "Failed to release child source.", e10);
            }
            bVar.f13362a.h(bVar.f13364c);
            bVar.f13362a.l(bVar.f13364c);
        }
        this.f13353f.clear();
        this.f13354g.clear();
        this.f13358k = false;
    }

    public void y(rd.p pVar) {
        c cVar = (c) oe.a.e((c) this.f13350c.remove(pVar));
        cVar.f13365a.a(pVar);
        cVar.f13367c.remove(((rd.n) pVar).f46411d);
        if (!this.f13350c.isEmpty()) {
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
        this.f13357j = o0Var;
        A(i10, i11);
        return i();
    }
}
