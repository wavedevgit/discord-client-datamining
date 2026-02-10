package rd;

import android.os.Handler;
import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.source.LoadEventInfo;
import com.google.android.exoplayer2.source.MediaLoadData;
import java.io.IOException;
import java.util.HashMap;
import rd.r;
import rd.y;
import sc.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class f extends rd.a {

    /* renamed from: s  reason: collision with root package name */
    private final HashMap f46285s = new HashMap();

    /* renamed from: t  reason: collision with root package name */
    private Handler f46286t;

    /* renamed from: u  reason: collision with root package name */
    private me.c0 f46287u;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class a implements y, sc.u {

        /* renamed from: d  reason: collision with root package name */
        private final Object f46288d;

        /* renamed from: e  reason: collision with root package name */
        private y.a f46289e;

        /* renamed from: i  reason: collision with root package name */
        private u.a f46290i;

        public a(Object obj) {
            this.f46289e = f.this.w(null);
            this.f46290i = f.this.u(null);
            this.f46288d = obj;
        }

        private MediaLoadData K(MediaLoadData mediaLoadData) {
            long G = f.this.G(this.f46288d, mediaLoadData.f13427f);
            long G2 = f.this.G(this.f46288d, mediaLoadData.f13428g);
            if (G == mediaLoadData.f13427f && G2 == mediaLoadData.f13428g) {
                return mediaLoadData;
            }
            return new MediaLoadData(mediaLoadData.f13422a, mediaLoadData.f13423b, mediaLoadData.f13424c, mediaLoadData.f13425d, mediaLoadData.f13426e, G, G2);
        }

        private boolean w(int i10, r.b bVar) {
            r.b bVar2;
            if (bVar != null) {
                bVar2 = f.this.F(this.f46288d, bVar);
                if (bVar2 == null) {
                    return false;
                }
            } else {
                bVar2 = null;
            }
            int H = f.this.H(this.f46288d, i10);
            y.a aVar = this.f46289e;
            if (aVar.f46519a != H || !oe.w0.c(aVar.f46520b, bVar2)) {
                this.f46289e = f.this.v(H, bVar2);
            }
            u.a aVar2 = this.f46290i;
            if (aVar2.f48048a != H || !oe.w0.c(aVar2.f48049b, bVar2)) {
                this.f46290i = f.this.t(H, bVar2);
                return true;
            }
            return true;
        }

        @Override // sc.u
        public void A(int i10, r.b bVar, int i11) {
            if (w(i10, bVar)) {
                this.f46290i.k(i11);
            }
        }

        @Override // sc.u
        public void B(int i10, r.b bVar, Exception exc) {
            if (w(i10, bVar)) {
                this.f46290i.l(exc);
            }
        }

        @Override // rd.y
        public void C(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData) {
            if (w(i10, bVar)) {
                this.f46289e.l(loadEventInfo, K(mediaLoadData));
            }
        }

        @Override // rd.y
        public void D(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData) {
            if (w(i10, bVar)) {
                this.f46289e.u(loadEventInfo, K(mediaLoadData));
            }
        }

        @Override // sc.u
        public void E(int i10, r.b bVar) {
            if (w(i10, bVar)) {
                this.f46290i.j();
            }
        }

        @Override // rd.y
        public void F(int i10, r.b bVar, MediaLoadData mediaLoadData) {
            if (w(i10, bVar)) {
                this.f46289e.x(K(mediaLoadData));
            }
        }

        @Override // rd.y
        public void G(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData) {
            if (w(i10, bVar)) {
                this.f46289e.o(loadEventInfo, K(mediaLoadData));
            }
        }

        @Override // rd.y
        public void H(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData, IOException iOException, boolean z10) {
            if (w(i10, bVar)) {
                this.f46289e.r(loadEventInfo, K(mediaLoadData), iOException, z10);
            }
        }

        @Override // sc.u
        public void J(int i10, r.b bVar) {
            if (w(i10, bVar)) {
                this.f46290i.i();
            }
        }

        @Override // rd.y
        public void g(int i10, r.b bVar, MediaLoadData mediaLoadData) {
            if (w(i10, bVar)) {
                this.f46289e.i(K(mediaLoadData));
            }
        }

        @Override // sc.u
        public void t(int i10, r.b bVar) {
            if (w(i10, bVar)) {
                this.f46290i.m();
            }
        }

        @Override // sc.u
        public void u(int i10, r.b bVar) {
            if (w(i10, bVar)) {
                this.f46290i.h();
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final r f46292a;

        /* renamed from: b  reason: collision with root package name */
        public final r.c f46293b;

        /* renamed from: c  reason: collision with root package name */
        public final a f46294c;

        public b(r rVar, r.c cVar, a aVar) {
            this.f46292a = rVar;
            this.f46293b = cVar;
            this.f46294c = aVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // rd.a
    public void B(me.c0 c0Var) {
        this.f46287u = c0Var;
        this.f46286t = oe.w0.w();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // rd.a
    public void D() {
        for (b bVar : this.f46285s.values()) {
            bVar.f46292a.e(bVar.f46293b);
            bVar.f46292a.h(bVar.f46294c);
            bVar.f46292a.l(bVar.f46294c);
        }
        this.f46285s.clear();
    }

    protected abstract r.b F(Object obj, r.b bVar);

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract void I(Object obj, r rVar, Timeline timeline);

    /* JADX INFO: Access modifiers changed from: protected */
    public final void J(final Object obj, r rVar) {
        oe.a.a(!this.f46285s.containsKey(obj));
        r.c cVar = new r.c() { // from class: rd.e
            @Override // rd.r.c
            public final void a(r rVar2, Timeline timeline) {
                f.this.I(obj, rVar2, timeline);
            }
        };
        a aVar = new a(obj);
        this.f46285s.put(obj, new b(rVar, cVar, aVar));
        rVar.j((Handler) oe.a.e(this.f46286t), aVar);
        rVar.b((Handler) oe.a.e(this.f46286t), aVar);
        rVar.g(cVar, this.f46287u, z());
        if (!A()) {
            rVar.m(cVar);
        }
    }

    @Override // rd.r
    public void q() {
        for (b bVar : this.f46285s.values()) {
            bVar.f46292a.q();
        }
    }

    @Override // rd.a
    protected void x() {
        for (b bVar : this.f46285s.values()) {
            bVar.f46292a.m(bVar.f46293b);
        }
    }

    @Override // rd.a
    protected void y() {
        for (b bVar : this.f46285s.values()) {
            bVar.f46292a.p(bVar.f46293b);
        }
    }

    protected long G(Object obj, long j10) {
        return j10;
    }

    protected int H(Object obj, int i10) {
        return i10;
    }
}
