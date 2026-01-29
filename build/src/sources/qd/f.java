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
    private final HashMap f47132s = new HashMap();

    /* renamed from: t  reason: collision with root package name */
    private Handler f47133t;

    /* renamed from: u  reason: collision with root package name */
    private le.c0 f47134u;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class a implements y, rc.u {

        /* renamed from: d  reason: collision with root package name */
        private final Object f47135d;

        /* renamed from: e  reason: collision with root package name */
        private y.a f47136e;

        /* renamed from: i  reason: collision with root package name */
        private u.a f47137i;

        public a(Object obj) {
            this.f47136e = f.this.w(null);
            this.f47137i = f.this.u(null);
            this.f47135d = obj;
        }

        private MediaLoadData K(MediaLoadData mediaLoadData) {
            long G = f.this.G(this.f47135d, mediaLoadData.f13767f);
            long G2 = f.this.G(this.f47135d, mediaLoadData.f13768g);
            if (G == mediaLoadData.f13767f && G2 == mediaLoadData.f13768g) {
                return mediaLoadData;
            }
            return new MediaLoadData(mediaLoadData.f13762a, mediaLoadData.f13763b, mediaLoadData.f13764c, mediaLoadData.f13765d, mediaLoadData.f13766e, G, G2);
        }

        private boolean u(int i10, r.b bVar) {
            r.b bVar2;
            if (bVar != null) {
                bVar2 = f.this.F(this.f47135d, bVar);
                if (bVar2 == null) {
                    return false;
                }
            } else {
                bVar2 = null;
            }
            int H = f.this.H(this.f47135d, i10);
            y.a aVar = this.f47136e;
            if (aVar.f47366a != H || !ne.w0.c(aVar.f47367b, bVar2)) {
                this.f47136e = f.this.v(H, bVar2);
            }
            u.a aVar2 = this.f47137i;
            if (aVar2.f48241a != H || !ne.w0.c(aVar2.f48242b, bVar2)) {
                this.f47137i = f.this.t(H, bVar2);
                return true;
            }
            return true;
        }

        @Override // rc.u
        public void A(int i10, r.b bVar) {
            if (u(i10, bVar)) {
                this.f47137i.h();
            }
        }

        @Override // qd.y
        public void C(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData) {
            if (u(i10, bVar)) {
                this.f47136e.u(loadEventInfo, K(mediaLoadData));
            }
        }

        @Override // qd.y
        public void D(int i10, r.b bVar, MediaLoadData mediaLoadData) {
            if (u(i10, bVar)) {
                this.f47136e.x(K(mediaLoadData));
            }
        }

        @Override // rc.u
        public void F(int i10, r.b bVar) {
            if (u(i10, bVar)) {
                this.f47137i.m();
            }
        }

        @Override // qd.y
        public void G(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData) {
            if (u(i10, bVar)) {
                this.f47136e.l(loadEventInfo, K(mediaLoadData));
            }
        }

        @Override // qd.y
        public void H(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData) {
            if (u(i10, bVar)) {
                this.f47136e.o(loadEventInfo, K(mediaLoadData));
            }
        }

        @Override // rc.u
        public void I(int i10, r.b bVar, Exception exc) {
            if (u(i10, bVar)) {
                this.f47137i.l(exc);
            }
        }

        @Override // rc.u
        public void J(int i10, r.b bVar, int i11) {
            if (u(i10, bVar)) {
                this.f47137i.k(i11);
            }
        }

        @Override // qd.y
        public void g(int i10, r.b bVar, MediaLoadData mediaLoadData) {
            if (u(i10, bVar)) {
                this.f47136e.i(K(mediaLoadData));
            }
        }

        @Override // qd.y
        public void t(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData, IOException iOException, boolean z10) {
            if (u(i10, bVar)) {
                this.f47136e.r(loadEventInfo, K(mediaLoadData), iOException, z10);
            }
        }

        @Override // rc.u
        public void w(int i10, r.b bVar) {
            if (u(i10, bVar)) {
                this.f47137i.j();
            }
        }

        @Override // rc.u
        public void z(int i10, r.b bVar) {
            if (u(i10, bVar)) {
                this.f47137i.i();
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final r f47139a;

        /* renamed from: b  reason: collision with root package name */
        public final r.c f47140b;

        /* renamed from: c  reason: collision with root package name */
        public final a f47141c;

        public b(r rVar, r.c cVar, a aVar) {
            this.f47139a = rVar;
            this.f47140b = cVar;
            this.f47141c = aVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // qd.a
    public void B(le.c0 c0Var) {
        this.f47134u = c0Var;
        this.f47133t = ne.w0.w();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // qd.a
    public void D() {
        for (b bVar : this.f47132s.values()) {
            bVar.f47139a.a(bVar.f47140b);
            bVar.f47139a.k(bVar.f47141c);
            bVar.f47139a.d(bVar.f47141c);
        }
        this.f47132s.clear();
    }

    protected abstract r.b F(Object obj, r.b bVar);

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract void I(Object obj, r rVar, Timeline timeline);

    /* JADX INFO: Access modifiers changed from: protected */
    public final void J(final Object obj, r rVar) {
        ne.a.a(!this.f47132s.containsKey(obj));
        r.c cVar = new r.c() { // from class: qd.e
            @Override // qd.r.c
            public final void a(r rVar2, Timeline timeline) {
                f.this.I(obj, rVar2, timeline);
            }
        };
        a aVar = new a(obj);
        this.f47132s.put(obj, new b(rVar, cVar, aVar));
        rVar.g((Handler) ne.a.e(this.f47133t), aVar);
        rVar.e((Handler) ne.a.e(this.f47133t), aVar);
        rVar.r(cVar, this.f47134u, z());
        if (!A()) {
            rVar.m(cVar);
        }
    }

    @Override // qd.r
    public void o() {
        for (b bVar : this.f47132s.values()) {
            bVar.f47139a.o();
        }
    }

    @Override // qd.a
    protected void x() {
        for (b bVar : this.f47132s.values()) {
            bVar.f47139a.m(bVar.f47140b);
        }
    }

    @Override // qd.a
    protected void y() {
        for (b bVar : this.f47132s.values()) {
            bVar.f47139a.s(bVar.f47140b);
        }
    }

    protected long G(Object obj, long j10) {
        return j10;
    }

    protected int H(Object obj, int i10) {
        return i10;
    }
}
