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
    private final HashMap f47553s = new HashMap();

    /* renamed from: t  reason: collision with root package name */
    private Handler f47554t;

    /* renamed from: u  reason: collision with root package name */
    private le.c0 f47555u;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class a implements y, rc.u {

        /* renamed from: d  reason: collision with root package name */
        private final Object f47556d;

        /* renamed from: e  reason: collision with root package name */
        private y.a f47557e;

        /* renamed from: i  reason: collision with root package name */
        private u.a f47558i;

        public a(Object obj) {
            this.f47557e = f.this.w(null);
            this.f47558i = f.this.u(null);
            this.f47556d = obj;
        }

        private MediaLoadData K(MediaLoadData mediaLoadData) {
            long G = f.this.G(this.f47556d, mediaLoadData.f12364f);
            long G2 = f.this.G(this.f47556d, mediaLoadData.f12365g);
            if (G == mediaLoadData.f12364f && G2 == mediaLoadData.f12365g) {
                return mediaLoadData;
            }
            return new MediaLoadData(mediaLoadData.f12359a, mediaLoadData.f12360b, mediaLoadData.f12361c, mediaLoadData.f12362d, mediaLoadData.f12363e, G, G2);
        }

        private boolean u(int i10, r.b bVar) {
            r.b bVar2;
            if (bVar != null) {
                bVar2 = f.this.F(this.f47556d, bVar);
                if (bVar2 == null) {
                    return false;
                }
            } else {
                bVar2 = null;
            }
            int H = f.this.H(this.f47556d, i10);
            y.a aVar = this.f47557e;
            if (aVar.f47787a != H || !ne.w0.c(aVar.f47788b, bVar2)) {
                this.f47557e = f.this.v(H, bVar2);
            }
            u.a aVar2 = this.f47558i;
            if (aVar2.f48768a != H || !ne.w0.c(aVar2.f48769b, bVar2)) {
                this.f47558i = f.this.t(H, bVar2);
                return true;
            }
            return true;
        }

        @Override // rc.u
        public void A(int i10, r.b bVar) {
            if (u(i10, bVar)) {
                this.f47558i.h();
            }
        }

        @Override // qd.y
        public void C(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData) {
            if (u(i10, bVar)) {
                this.f47557e.u(loadEventInfo, K(mediaLoadData));
            }
        }

        @Override // qd.y
        public void D(int i10, r.b bVar, MediaLoadData mediaLoadData) {
            if (u(i10, bVar)) {
                this.f47557e.x(K(mediaLoadData));
            }
        }

        @Override // rc.u
        public void F(int i10, r.b bVar) {
            if (u(i10, bVar)) {
                this.f47558i.m();
            }
        }

        @Override // qd.y
        public void G(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData) {
            if (u(i10, bVar)) {
                this.f47557e.l(loadEventInfo, K(mediaLoadData));
            }
        }

        @Override // qd.y
        public void H(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData) {
            if (u(i10, bVar)) {
                this.f47557e.o(loadEventInfo, K(mediaLoadData));
            }
        }

        @Override // rc.u
        public void I(int i10, r.b bVar, Exception exc) {
            if (u(i10, bVar)) {
                this.f47558i.l(exc);
            }
        }

        @Override // rc.u
        public void J(int i10, r.b bVar, int i11) {
            if (u(i10, bVar)) {
                this.f47558i.k(i11);
            }
        }

        @Override // qd.y
        public void g(int i10, r.b bVar, MediaLoadData mediaLoadData) {
            if (u(i10, bVar)) {
                this.f47557e.i(K(mediaLoadData));
            }
        }

        @Override // qd.y
        public void t(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData, IOException iOException, boolean z10) {
            if (u(i10, bVar)) {
                this.f47557e.r(loadEventInfo, K(mediaLoadData), iOException, z10);
            }
        }

        @Override // rc.u
        public void w(int i10, r.b bVar) {
            if (u(i10, bVar)) {
                this.f47558i.j();
            }
        }

        @Override // rc.u
        public void z(int i10, r.b bVar) {
            if (u(i10, bVar)) {
                this.f47558i.i();
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final r f47560a;

        /* renamed from: b  reason: collision with root package name */
        public final r.c f47561b;

        /* renamed from: c  reason: collision with root package name */
        public final a f47562c;

        public b(r rVar, r.c cVar, a aVar) {
            this.f47560a = rVar;
            this.f47561b = cVar;
            this.f47562c = aVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // qd.a
    public void B(le.c0 c0Var) {
        this.f47555u = c0Var;
        this.f47554t = ne.w0.w();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // qd.a
    public void D() {
        for (b bVar : this.f47553s.values()) {
            bVar.f47560a.a(bVar.f47561b);
            bVar.f47560a.k(bVar.f47562c);
            bVar.f47560a.d(bVar.f47562c);
        }
        this.f47553s.clear();
    }

    protected abstract r.b F(Object obj, r.b bVar);

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract void I(Object obj, r rVar, Timeline timeline);

    /* JADX INFO: Access modifiers changed from: protected */
    public final void J(final Object obj, r rVar) {
        ne.a.a(!this.f47553s.containsKey(obj));
        r.c cVar = new r.c() { // from class: qd.e
            @Override // qd.r.c
            public final void a(r rVar2, Timeline timeline) {
                f.this.I(obj, rVar2, timeline);
            }
        };
        a aVar = new a(obj);
        this.f47553s.put(obj, new b(rVar, cVar, aVar));
        rVar.g((Handler) ne.a.e(this.f47554t), aVar);
        rVar.e((Handler) ne.a.e(this.f47554t), aVar);
        rVar.r(cVar, this.f47555u, z());
        if (!A()) {
            rVar.m(cVar);
        }
    }

    @Override // qd.r
    public void o() {
        for (b bVar : this.f47553s.values()) {
            bVar.f47560a.o();
        }
    }

    @Override // qd.a
    protected void x() {
        for (b bVar : this.f47553s.values()) {
            bVar.f47560a.m(bVar.f47561b);
        }
    }

    @Override // qd.a
    protected void y() {
        for (b bVar : this.f47553s.values()) {
            bVar.f47560a.s(bVar.f47561b);
        }
    }

    protected long G(Object obj, long j10) {
        return j10;
    }

    protected int H(Object obj, int i10) {
        return i10;
    }
}
