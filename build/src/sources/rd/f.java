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
    private final HashMap f47831s = new HashMap();

    /* renamed from: t  reason: collision with root package name */
    private Handler f47832t;

    /* renamed from: u  reason: collision with root package name */
    private me.c0 f47833u;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class a implements y, sc.u {

        /* renamed from: d  reason: collision with root package name */
        private final Object f47834d;

        /* renamed from: e  reason: collision with root package name */
        private y.a f47835e;

        /* renamed from: i  reason: collision with root package name */
        private u.a f47836i;

        public a(Object obj) {
            this.f47835e = f.this.w(null);
            this.f47836i = f.this.u(null);
            this.f47834d = obj;
        }

        private MediaLoadData K(MediaLoadData mediaLoadData) {
            long G = f.this.G(this.f47834d, mediaLoadData.f12850f);
            long G2 = f.this.G(this.f47834d, mediaLoadData.f12851g);
            if (G == mediaLoadData.f12850f && G2 == mediaLoadData.f12851g) {
                return mediaLoadData;
            }
            return new MediaLoadData(mediaLoadData.f12845a, mediaLoadData.f12846b, mediaLoadData.f12847c, mediaLoadData.f12848d, mediaLoadData.f12849e, G, G2);
        }

        private boolean w(int i10, r.b bVar) {
            r.b bVar2;
            if (bVar != null) {
                bVar2 = f.this.F(this.f47834d, bVar);
                if (bVar2 == null) {
                    return false;
                }
            } else {
                bVar2 = null;
            }
            int H = f.this.H(this.f47834d, i10);
            y.a aVar = this.f47835e;
            if (aVar.f48065a != H || !oe.w0.c(aVar.f48066b, bVar2)) {
                this.f47835e = f.this.v(H, bVar2);
            }
            u.a aVar2 = this.f47836i;
            if (aVar2.f49732a != H || !oe.w0.c(aVar2.f49733b, bVar2)) {
                this.f47836i = f.this.t(H, bVar2);
                return true;
            }
            return true;
        }

        @Override // sc.u
        public void A(int i10, r.b bVar, int i11) {
            if (w(i10, bVar)) {
                this.f47836i.k(i11);
            }
        }

        @Override // sc.u
        public void B(int i10, r.b bVar, Exception exc) {
            if (w(i10, bVar)) {
                this.f47836i.l(exc);
            }
        }

        @Override // rd.y
        public void C(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData) {
            if (w(i10, bVar)) {
                this.f47835e.l(loadEventInfo, K(mediaLoadData));
            }
        }

        @Override // rd.y
        public void D(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData) {
            if (w(i10, bVar)) {
                this.f47835e.u(loadEventInfo, K(mediaLoadData));
            }
        }

        @Override // sc.u
        public void E(int i10, r.b bVar) {
            if (w(i10, bVar)) {
                this.f47836i.j();
            }
        }

        @Override // rd.y
        public void F(int i10, r.b bVar, MediaLoadData mediaLoadData) {
            if (w(i10, bVar)) {
                this.f47835e.x(K(mediaLoadData));
            }
        }

        @Override // rd.y
        public void G(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData) {
            if (w(i10, bVar)) {
                this.f47835e.o(loadEventInfo, K(mediaLoadData));
            }
        }

        @Override // rd.y
        public void H(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData, IOException iOException, boolean z10) {
            if (w(i10, bVar)) {
                this.f47835e.r(loadEventInfo, K(mediaLoadData), iOException, z10);
            }
        }

        @Override // sc.u
        public void J(int i10, r.b bVar) {
            if (w(i10, bVar)) {
                this.f47836i.i();
            }
        }

        @Override // rd.y
        public void g(int i10, r.b bVar, MediaLoadData mediaLoadData) {
            if (w(i10, bVar)) {
                this.f47835e.i(K(mediaLoadData));
            }
        }

        @Override // sc.u
        public void t(int i10, r.b bVar) {
            if (w(i10, bVar)) {
                this.f47836i.m();
            }
        }

        @Override // sc.u
        public void u(int i10, r.b bVar) {
            if (w(i10, bVar)) {
                this.f47836i.h();
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final r f47838a;

        /* renamed from: b  reason: collision with root package name */
        public final r.c f47839b;

        /* renamed from: c  reason: collision with root package name */
        public final a f47840c;

        public b(r rVar, r.c cVar, a aVar) {
            this.f47838a = rVar;
            this.f47839b = cVar;
            this.f47840c = aVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // rd.a
    public void B(me.c0 c0Var) {
        this.f47833u = c0Var;
        this.f47832t = oe.w0.w();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // rd.a
    public void D() {
        for (b bVar : this.f47831s.values()) {
            bVar.f47838a.e(bVar.f47839b);
            bVar.f47838a.h(bVar.f47840c);
            bVar.f47838a.l(bVar.f47840c);
        }
        this.f47831s.clear();
    }

    protected abstract r.b F(Object obj, r.b bVar);

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract void I(Object obj, r rVar, Timeline timeline);

    /* JADX INFO: Access modifiers changed from: protected */
    public final void J(final Object obj, r rVar) {
        oe.a.a(!this.f47831s.containsKey(obj));
        r.c cVar = new r.c() { // from class: rd.e
            @Override // rd.r.c
            public final void a(r rVar2, Timeline timeline) {
                f.this.I(obj, rVar2, timeline);
            }
        };
        a aVar = new a(obj);
        this.f47831s.put(obj, new b(rVar, cVar, aVar));
        rVar.j((Handler) oe.a.e(this.f47832t), aVar);
        rVar.b((Handler) oe.a.e(this.f47832t), aVar);
        rVar.g(cVar, this.f47833u, z());
        if (!A()) {
            rVar.m(cVar);
        }
    }

    @Override // rd.r
    public void q() {
        for (b bVar : this.f47831s.values()) {
            bVar.f47838a.q();
        }
    }

    @Override // rd.a
    protected void x() {
        for (b bVar : this.f47831s.values()) {
            bVar.f47838a.m(bVar.f47839b);
        }
    }

    @Override // rd.a
    protected void y() {
        for (b bVar : this.f47831s.values()) {
            bVar.f47838a.p(bVar.f47839b);
        }
    }

    protected long G(Object obj, long j10) {
        return j10;
    }

    protected int H(Object obj, int i10) {
        return i10;
    }
}
