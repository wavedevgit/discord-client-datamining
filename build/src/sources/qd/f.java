package qd;

import android.os.Handler;
import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.source.LoadEventInfo;
import com.google.android.exoplayer2.source.MediaLoadData;
import java.io.IOException;
import java.util.HashMap;
import qd.r;
import qd.y;
import rc.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class f extends qd.a {

    /* renamed from: s  reason: collision with root package name */
    private final HashMap f46713s = new HashMap();

    /* renamed from: t  reason: collision with root package name */
    private Handler f46714t;

    /* renamed from: u  reason: collision with root package name */
    private le.c0 f46715u;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class a implements y, rc.u {

        /* renamed from: d  reason: collision with root package name */
        private final Object f46716d;

        /* renamed from: e  reason: collision with root package name */
        private y.a f46717e;

        /* renamed from: i  reason: collision with root package name */
        private u.a f46718i;

        public a(Object obj) {
            this.f46717e = f.this.w(null);
            this.f46718i = f.this.u(null);
            this.f46716d = obj;
        }

        private MediaLoadData K(MediaLoadData mediaLoadData) {
            long G = f.this.G(this.f46716d, mediaLoadData.f12710f);
            long G2 = f.this.G(this.f46716d, mediaLoadData.f12711g);
            if (G == mediaLoadData.f12710f && G2 == mediaLoadData.f12711g) {
                return mediaLoadData;
            }
            return new MediaLoadData(mediaLoadData.f12705a, mediaLoadData.f12706b, mediaLoadData.f12707c, mediaLoadData.f12708d, mediaLoadData.f12709e, G, G2);
        }

        private boolean u(int i10, r.b bVar) {
            r.b bVar2;
            if (bVar != null) {
                bVar2 = f.this.F(this.f46716d, bVar);
                if (bVar2 == null) {
                    return false;
                }
            } else {
                bVar2 = null;
            }
            int H = f.this.H(this.f46716d, i10);
            y.a aVar = this.f46717e;
            if (aVar.f46947a != H || !ne.w0.c(aVar.f46948b, bVar2)) {
                this.f46717e = f.this.v(H, bVar2);
            }
            u.a aVar2 = this.f46718i;
            if (aVar2.f48907a != H || !ne.w0.c(aVar2.f48908b, bVar2)) {
                this.f46718i = f.this.t(H, bVar2);
                return true;
            }
            return true;
        }

        @Override // rc.u
        public void A(int i10, r.b bVar) {
            if (u(i10, bVar)) {
                this.f46718i.h();
            }
        }

        @Override // qd.y
        public void C(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData) {
            if (u(i10, bVar)) {
                this.f46717e.u(loadEventInfo, K(mediaLoadData));
            }
        }

        @Override // qd.y
        public void D(int i10, r.b bVar, MediaLoadData mediaLoadData) {
            if (u(i10, bVar)) {
                this.f46717e.x(K(mediaLoadData));
            }
        }

        @Override // rc.u
        public void F(int i10, r.b bVar) {
            if (u(i10, bVar)) {
                this.f46718i.m();
            }
        }

        @Override // qd.y
        public void G(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData) {
            if (u(i10, bVar)) {
                this.f46717e.l(loadEventInfo, K(mediaLoadData));
            }
        }

        @Override // qd.y
        public void H(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData) {
            if (u(i10, bVar)) {
                this.f46717e.o(loadEventInfo, K(mediaLoadData));
            }
        }

        @Override // rc.u
        public void I(int i10, r.b bVar, Exception exc) {
            if (u(i10, bVar)) {
                this.f46718i.l(exc);
            }
        }

        @Override // rc.u
        public void J(int i10, r.b bVar, int i11) {
            if (u(i10, bVar)) {
                this.f46718i.k(i11);
            }
        }

        @Override // qd.y
        public void g(int i10, r.b bVar, MediaLoadData mediaLoadData) {
            if (u(i10, bVar)) {
                this.f46717e.i(K(mediaLoadData));
            }
        }

        @Override // qd.y
        public void t(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData, IOException iOException, boolean z10) {
            if (u(i10, bVar)) {
                this.f46717e.r(loadEventInfo, K(mediaLoadData), iOException, z10);
            }
        }

        @Override // rc.u
        public void w(int i10, r.b bVar) {
            if (u(i10, bVar)) {
                this.f46718i.j();
            }
        }

        @Override // rc.u
        public void z(int i10, r.b bVar) {
            if (u(i10, bVar)) {
                this.f46718i.i();
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final r f46720a;

        /* renamed from: b  reason: collision with root package name */
        public final r.c f46721b;

        /* renamed from: c  reason: collision with root package name */
        public final a f46722c;

        public b(r rVar, r.c cVar, a aVar) {
            this.f46720a = rVar;
            this.f46721b = cVar;
            this.f46722c = aVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // qd.a
    public void B(le.c0 c0Var) {
        this.f46715u = c0Var;
        this.f46714t = ne.w0.w();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // qd.a
    public void D() {
        for (b bVar : this.f46713s.values()) {
            bVar.f46720a.a(bVar.f46721b);
            bVar.f46720a.k(bVar.f46722c);
            bVar.f46720a.d(bVar.f46722c);
        }
        this.f46713s.clear();
    }

    protected abstract r.b F(Object obj, r.b bVar);

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract void I(Object obj, r rVar, Timeline timeline);

    /* JADX INFO: Access modifiers changed from: protected */
    public final void J(final Object obj, r rVar) {
        ne.a.a(!this.f46713s.containsKey(obj));
        r.c cVar = new r.c() { // from class: qd.e
            @Override // qd.r.c
            public final void a(r rVar2, Timeline timeline) {
                f.this.I(obj, rVar2, timeline);
            }
        };
        a aVar = new a(obj);
        this.f46713s.put(obj, new b(rVar, cVar, aVar));
        rVar.g((Handler) ne.a.e(this.f46714t), aVar);
        rVar.e((Handler) ne.a.e(this.f46714t), aVar);
        rVar.r(cVar, this.f46715u, z());
        if (!A()) {
            rVar.m(cVar);
        }
    }

    @Override // qd.r
    public void o() {
        for (b bVar : this.f46713s.values()) {
            bVar.f46720a.o();
        }
    }

    @Override // qd.a
    protected void x() {
        for (b bVar : this.f46713s.values()) {
            bVar.f46720a.m(bVar.f46721b);
        }
    }

    @Override // qd.a
    protected void y() {
        for (b bVar : this.f46713s.values()) {
            bVar.f46720a.s(bVar.f46721b);
        }
    }

    protected long G(Object obj, long j10) {
        return j10;
    }

    protected int H(Object obj, int i10) {
        return i10;
    }
}
