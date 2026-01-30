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
    private final HashMap f47148s = new HashMap();

    /* renamed from: t  reason: collision with root package name */
    private Handler f47149t;

    /* renamed from: u  reason: collision with root package name */
    private le.c0 f47150u;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class a implements y, rc.u {

        /* renamed from: d  reason: collision with root package name */
        private final Object f47151d;

        /* renamed from: e  reason: collision with root package name */
        private y.a f47152e;

        /* renamed from: i  reason: collision with root package name */
        private u.a f47153i;

        public a(Object obj) {
            this.f47152e = f.this.w(null);
            this.f47153i = f.this.u(null);
            this.f47151d = obj;
        }

        private MediaLoadData K(MediaLoadData mediaLoadData) {
            long G = f.this.G(this.f47151d, mediaLoadData.f13767f);
            long G2 = f.this.G(this.f47151d, mediaLoadData.f13768g);
            if (G == mediaLoadData.f13767f && G2 == mediaLoadData.f13768g) {
                return mediaLoadData;
            }
            return new MediaLoadData(mediaLoadData.f13762a, mediaLoadData.f13763b, mediaLoadData.f13764c, mediaLoadData.f13765d, mediaLoadData.f13766e, G, G2);
        }

        private boolean u(int i10, r.b bVar) {
            r.b bVar2;
            if (bVar != null) {
                bVar2 = f.this.F(this.f47151d, bVar);
                if (bVar2 == null) {
                    return false;
                }
            } else {
                bVar2 = null;
            }
            int H = f.this.H(this.f47151d, i10);
            y.a aVar = this.f47152e;
            if (aVar.f47382a != H || !ne.w0.c(aVar.f47383b, bVar2)) {
                this.f47152e = f.this.v(H, bVar2);
            }
            u.a aVar2 = this.f47153i;
            if (aVar2.f48257a != H || !ne.w0.c(aVar2.f48258b, bVar2)) {
                this.f47153i = f.this.t(H, bVar2);
                return true;
            }
            return true;
        }

        @Override // rc.u
        public void A(int i10, r.b bVar) {
            if (u(i10, bVar)) {
                this.f47153i.h();
            }
        }

        @Override // qd.y
        public void C(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData) {
            if (u(i10, bVar)) {
                this.f47152e.u(loadEventInfo, K(mediaLoadData));
            }
        }

        @Override // qd.y
        public void D(int i10, r.b bVar, MediaLoadData mediaLoadData) {
            if (u(i10, bVar)) {
                this.f47152e.x(K(mediaLoadData));
            }
        }

        @Override // rc.u
        public void F(int i10, r.b bVar) {
            if (u(i10, bVar)) {
                this.f47153i.m();
            }
        }

        @Override // qd.y
        public void G(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData) {
            if (u(i10, bVar)) {
                this.f47152e.l(loadEventInfo, K(mediaLoadData));
            }
        }

        @Override // qd.y
        public void H(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData) {
            if (u(i10, bVar)) {
                this.f47152e.o(loadEventInfo, K(mediaLoadData));
            }
        }

        @Override // rc.u
        public void I(int i10, r.b bVar, Exception exc) {
            if (u(i10, bVar)) {
                this.f47153i.l(exc);
            }
        }

        @Override // rc.u
        public void J(int i10, r.b bVar, int i11) {
            if (u(i10, bVar)) {
                this.f47153i.k(i11);
            }
        }

        @Override // qd.y
        public void g(int i10, r.b bVar, MediaLoadData mediaLoadData) {
            if (u(i10, bVar)) {
                this.f47152e.i(K(mediaLoadData));
            }
        }

        @Override // qd.y
        public void t(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData, IOException iOException, boolean z10) {
            if (u(i10, bVar)) {
                this.f47152e.r(loadEventInfo, K(mediaLoadData), iOException, z10);
            }
        }

        @Override // rc.u
        public void w(int i10, r.b bVar) {
            if (u(i10, bVar)) {
                this.f47153i.j();
            }
        }

        @Override // rc.u
        public void z(int i10, r.b bVar) {
            if (u(i10, bVar)) {
                this.f47153i.i();
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final r f47155a;

        /* renamed from: b  reason: collision with root package name */
        public final r.c f47156b;

        /* renamed from: c  reason: collision with root package name */
        public final a f47157c;

        public b(r rVar, r.c cVar, a aVar) {
            this.f47155a = rVar;
            this.f47156b = cVar;
            this.f47157c = aVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // qd.a
    public void B(le.c0 c0Var) {
        this.f47150u = c0Var;
        this.f47149t = ne.w0.w();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // qd.a
    public void D() {
        for (b bVar : this.f47148s.values()) {
            bVar.f47155a.a(bVar.f47156b);
            bVar.f47155a.k(bVar.f47157c);
            bVar.f47155a.d(bVar.f47157c);
        }
        this.f47148s.clear();
    }

    protected abstract r.b F(Object obj, r.b bVar);

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract void I(Object obj, r rVar, Timeline timeline);

    /* JADX INFO: Access modifiers changed from: protected */
    public final void J(final Object obj, r rVar) {
        ne.a.a(!this.f47148s.containsKey(obj));
        r.c cVar = new r.c() { // from class: qd.e
            @Override // qd.r.c
            public final void a(r rVar2, Timeline timeline) {
                f.this.I(obj, rVar2, timeline);
            }
        };
        a aVar = new a(obj);
        this.f47148s.put(obj, new b(rVar, cVar, aVar));
        rVar.g((Handler) ne.a.e(this.f47149t), aVar);
        rVar.e((Handler) ne.a.e(this.f47149t), aVar);
        rVar.r(cVar, this.f47150u, z());
        if (!A()) {
            rVar.m(cVar);
        }
    }

    @Override // qd.r
    public void o() {
        for (b bVar : this.f47148s.values()) {
            bVar.f47155a.o();
        }
    }

    @Override // qd.a
    protected void x() {
        for (b bVar : this.f47148s.values()) {
            bVar.f47155a.m(bVar.f47156b);
        }
    }

    @Override // qd.a
    protected void y() {
        for (b bVar : this.f47148s.values()) {
            bVar.f47155a.s(bVar.f47156b);
        }
    }

    protected long G(Object obj, long j10) {
        return j10;
    }

    protected int H(Object obj, int i10) {
        return i10;
    }
}
