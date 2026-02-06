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
    private final HashMap f46665s = new HashMap();

    /* renamed from: t  reason: collision with root package name */
    private Handler f46666t;

    /* renamed from: u  reason: collision with root package name */
    private le.c0 f46667u;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class a implements y, rc.u {

        /* renamed from: d  reason: collision with root package name */
        private final Object f46668d;

        /* renamed from: e  reason: collision with root package name */
        private y.a f46669e;

        /* renamed from: i  reason: collision with root package name */
        private u.a f46670i;

        public a(Object obj) {
            this.f46669e = f.this.w(null);
            this.f46670i = f.this.u(null);
            this.f46668d = obj;
        }

        private MediaLoadData K(MediaLoadData mediaLoadData) {
            long G = f.this.G(this.f46668d, mediaLoadData.f12710f);
            long G2 = f.this.G(this.f46668d, mediaLoadData.f12711g);
            if (G == mediaLoadData.f12710f && G2 == mediaLoadData.f12711g) {
                return mediaLoadData;
            }
            return new MediaLoadData(mediaLoadData.f12705a, mediaLoadData.f12706b, mediaLoadData.f12707c, mediaLoadData.f12708d, mediaLoadData.f12709e, G, G2);
        }

        private boolean u(int i10, r.b bVar) {
            r.b bVar2;
            if (bVar != null) {
                bVar2 = f.this.F(this.f46668d, bVar);
                if (bVar2 == null) {
                    return false;
                }
            } else {
                bVar2 = null;
            }
            int H = f.this.H(this.f46668d, i10);
            y.a aVar = this.f46669e;
            if (aVar.f46899a != H || !ne.w0.c(aVar.f46900b, bVar2)) {
                this.f46669e = f.this.v(H, bVar2);
            }
            u.a aVar2 = this.f46670i;
            if (aVar2.f48859a != H || !ne.w0.c(aVar2.f48860b, bVar2)) {
                this.f46670i = f.this.t(H, bVar2);
                return true;
            }
            return true;
        }

        @Override // rc.u
        public void A(int i10, r.b bVar) {
            if (u(i10, bVar)) {
                this.f46670i.h();
            }
        }

        @Override // qd.y
        public void C(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData) {
            if (u(i10, bVar)) {
                this.f46669e.u(loadEventInfo, K(mediaLoadData));
            }
        }

        @Override // qd.y
        public void D(int i10, r.b bVar, MediaLoadData mediaLoadData) {
            if (u(i10, bVar)) {
                this.f46669e.x(K(mediaLoadData));
            }
        }

        @Override // rc.u
        public void F(int i10, r.b bVar) {
            if (u(i10, bVar)) {
                this.f46670i.m();
            }
        }

        @Override // qd.y
        public void G(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData) {
            if (u(i10, bVar)) {
                this.f46669e.l(loadEventInfo, K(mediaLoadData));
            }
        }

        @Override // qd.y
        public void H(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData) {
            if (u(i10, bVar)) {
                this.f46669e.o(loadEventInfo, K(mediaLoadData));
            }
        }

        @Override // rc.u
        public void I(int i10, r.b bVar, Exception exc) {
            if (u(i10, bVar)) {
                this.f46670i.l(exc);
            }
        }

        @Override // rc.u
        public void J(int i10, r.b bVar, int i11) {
            if (u(i10, bVar)) {
                this.f46670i.k(i11);
            }
        }

        @Override // qd.y
        public void g(int i10, r.b bVar, MediaLoadData mediaLoadData) {
            if (u(i10, bVar)) {
                this.f46669e.i(K(mediaLoadData));
            }
        }

        @Override // qd.y
        public void t(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData, IOException iOException, boolean z10) {
            if (u(i10, bVar)) {
                this.f46669e.r(loadEventInfo, K(mediaLoadData), iOException, z10);
            }
        }

        @Override // rc.u
        public void w(int i10, r.b bVar) {
            if (u(i10, bVar)) {
                this.f46670i.j();
            }
        }

        @Override // rc.u
        public void z(int i10, r.b bVar) {
            if (u(i10, bVar)) {
                this.f46670i.i();
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final r f46672a;

        /* renamed from: b  reason: collision with root package name */
        public final r.c f46673b;

        /* renamed from: c  reason: collision with root package name */
        public final a f46674c;

        public b(r rVar, r.c cVar, a aVar) {
            this.f46672a = rVar;
            this.f46673b = cVar;
            this.f46674c = aVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // qd.a
    public void B(le.c0 c0Var) {
        this.f46667u = c0Var;
        this.f46666t = ne.w0.w();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // qd.a
    public void D() {
        for (b bVar : this.f46665s.values()) {
            bVar.f46672a.a(bVar.f46673b);
            bVar.f46672a.k(bVar.f46674c);
            bVar.f46672a.d(bVar.f46674c);
        }
        this.f46665s.clear();
    }

    protected abstract r.b F(Object obj, r.b bVar);

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract void I(Object obj, r rVar, Timeline timeline);

    /* JADX INFO: Access modifiers changed from: protected */
    public final void J(final Object obj, r rVar) {
        ne.a.a(!this.f46665s.containsKey(obj));
        r.c cVar = new r.c() { // from class: qd.e
            @Override // qd.r.c
            public final void a(r rVar2, Timeline timeline) {
                f.this.I(obj, rVar2, timeline);
            }
        };
        a aVar = new a(obj);
        this.f46665s.put(obj, new b(rVar, cVar, aVar));
        rVar.g((Handler) ne.a.e(this.f46666t), aVar);
        rVar.e((Handler) ne.a.e(this.f46666t), aVar);
        rVar.r(cVar, this.f46667u, z());
        if (!A()) {
            rVar.m(cVar);
        }
    }

    @Override // qd.r
    public void o() {
        for (b bVar : this.f46665s.values()) {
            bVar.f46672a.o();
        }
    }

    @Override // qd.a
    protected void x() {
        for (b bVar : this.f46665s.values()) {
            bVar.f46672a.m(bVar.f46673b);
        }
    }

    @Override // qd.a
    protected void y() {
        for (b bVar : this.f46665s.values()) {
            bVar.f46672a.s(bVar.f46673b);
        }
    }

    protected long G(Object obj, long j10) {
        return j10;
    }

    protected int H(Object obj, int i10) {
        return i10;
    }
}
