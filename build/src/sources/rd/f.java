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
    private final HashMap f46854s = new HashMap();

    /* renamed from: t  reason: collision with root package name */
    private Handler f46855t;

    /* renamed from: u  reason: collision with root package name */
    private me.c0 f46856u;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class a implements y, sc.u {

        /* renamed from: d  reason: collision with root package name */
        private final Object f46857d;

        /* renamed from: e  reason: collision with root package name */
        private y.a f46858e;

        /* renamed from: i  reason: collision with root package name */
        private u.a f46859i;

        public a(Object obj) {
            this.f46858e = f.this.w(null);
            this.f46859i = f.this.u(null);
            this.f46857d = obj;
        }

        private MediaLoadData K(MediaLoadData mediaLoadData) {
            long G = f.this.G(this.f46857d, mediaLoadData.f13428f);
            long G2 = f.this.G(this.f46857d, mediaLoadData.f13429g);
            if (G == mediaLoadData.f13428f && G2 == mediaLoadData.f13429g) {
                return mediaLoadData;
            }
            return new MediaLoadData(mediaLoadData.f13423a, mediaLoadData.f13424b, mediaLoadData.f13425c, mediaLoadData.f13426d, mediaLoadData.f13427e, G, G2);
        }

        private boolean w(int i10, r.b bVar) {
            r.b bVar2;
            if (bVar != null) {
                bVar2 = f.this.F(this.f46857d, bVar);
                if (bVar2 == null) {
                    return false;
                }
            } else {
                bVar2 = null;
            }
            int H = f.this.H(this.f46857d, i10);
            y.a aVar = this.f46858e;
            if (aVar.f47088a != H || !oe.w0.c(aVar.f47089b, bVar2)) {
                this.f46858e = f.this.v(H, bVar2);
            }
            u.a aVar2 = this.f46859i;
            if (aVar2.f48617a != H || !oe.w0.c(aVar2.f48618b, bVar2)) {
                this.f46859i = f.this.t(H, bVar2);
                return true;
            }
            return true;
        }

        @Override // sc.u
        public void A(int i10, r.b bVar, int i11) {
            if (w(i10, bVar)) {
                this.f46859i.k(i11);
            }
        }

        @Override // sc.u
        public void B(int i10, r.b bVar, Exception exc) {
            if (w(i10, bVar)) {
                this.f46859i.l(exc);
            }
        }

        @Override // rd.y
        public void C(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData) {
            if (w(i10, bVar)) {
                this.f46858e.l(loadEventInfo, K(mediaLoadData));
            }
        }

        @Override // rd.y
        public void D(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData) {
            if (w(i10, bVar)) {
                this.f46858e.u(loadEventInfo, K(mediaLoadData));
            }
        }

        @Override // sc.u
        public void E(int i10, r.b bVar) {
            if (w(i10, bVar)) {
                this.f46859i.j();
            }
        }

        @Override // rd.y
        public void F(int i10, r.b bVar, MediaLoadData mediaLoadData) {
            if (w(i10, bVar)) {
                this.f46858e.x(K(mediaLoadData));
            }
        }

        @Override // rd.y
        public void G(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData) {
            if (w(i10, bVar)) {
                this.f46858e.o(loadEventInfo, K(mediaLoadData));
            }
        }

        @Override // rd.y
        public void H(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData, IOException iOException, boolean z10) {
            if (w(i10, bVar)) {
                this.f46858e.r(loadEventInfo, K(mediaLoadData), iOException, z10);
            }
        }

        @Override // sc.u
        public void J(int i10, r.b bVar) {
            if (w(i10, bVar)) {
                this.f46859i.i();
            }
        }

        @Override // rd.y
        public void g(int i10, r.b bVar, MediaLoadData mediaLoadData) {
            if (w(i10, bVar)) {
                this.f46858e.i(K(mediaLoadData));
            }
        }

        @Override // sc.u
        public void t(int i10, r.b bVar) {
            if (w(i10, bVar)) {
                this.f46859i.m();
            }
        }

        @Override // sc.u
        public void u(int i10, r.b bVar) {
            if (w(i10, bVar)) {
                this.f46859i.h();
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final r f46861a;

        /* renamed from: b  reason: collision with root package name */
        public final r.c f46862b;

        /* renamed from: c  reason: collision with root package name */
        public final a f46863c;

        public b(r rVar, r.c cVar, a aVar) {
            this.f46861a = rVar;
            this.f46862b = cVar;
            this.f46863c = aVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // rd.a
    public void B(me.c0 c0Var) {
        this.f46856u = c0Var;
        this.f46855t = oe.w0.w();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // rd.a
    public void D() {
        for (b bVar : this.f46854s.values()) {
            bVar.f46861a.e(bVar.f46862b);
            bVar.f46861a.h(bVar.f46863c);
            bVar.f46861a.l(bVar.f46863c);
        }
        this.f46854s.clear();
    }

    protected abstract r.b F(Object obj, r.b bVar);

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract void I(Object obj, r rVar, Timeline timeline);

    /* JADX INFO: Access modifiers changed from: protected */
    public final void J(final Object obj, r rVar) {
        oe.a.a(!this.f46854s.containsKey(obj));
        r.c cVar = new r.c() { // from class: rd.e
            @Override // rd.r.c
            public final void a(r rVar2, Timeline timeline) {
                f.this.I(obj, rVar2, timeline);
            }
        };
        a aVar = new a(obj);
        this.f46854s.put(obj, new b(rVar, cVar, aVar));
        rVar.j((Handler) oe.a.e(this.f46855t), aVar);
        rVar.b((Handler) oe.a.e(this.f46855t), aVar);
        rVar.g(cVar, this.f46856u, z());
        if (!A()) {
            rVar.m(cVar);
        }
    }

    @Override // rd.r
    public void q() {
        for (b bVar : this.f46854s.values()) {
            bVar.f46861a.q();
        }
    }

    @Override // rd.a
    protected void x() {
        for (b bVar : this.f46854s.values()) {
            bVar.f46861a.m(bVar.f46862b);
        }
    }

    @Override // rd.a
    protected void y() {
        for (b bVar : this.f46854s.values()) {
            bVar.f46861a.p(bVar.f46862b);
        }
    }

    protected long G(Object obj, long j10) {
        return j10;
    }

    protected int H(Object obj, int i10) {
        return i10;
    }
}
