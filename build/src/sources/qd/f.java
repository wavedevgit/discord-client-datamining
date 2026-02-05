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
    private final HashMap f47617s = new HashMap();

    /* renamed from: t  reason: collision with root package name */
    private Handler f47618t;

    /* renamed from: u  reason: collision with root package name */
    private le.c0 f47619u;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class a implements y, rc.u {

        /* renamed from: d  reason: collision with root package name */
        private final Object f47620d;

        /* renamed from: e  reason: collision with root package name */
        private y.a f47621e;

        /* renamed from: i  reason: collision with root package name */
        private u.a f47622i;

        public a(Object obj) {
            this.f47621e = f.this.w(null);
            this.f47622i = f.this.u(null);
            this.f47620d = obj;
        }

        private MediaLoadData K(MediaLoadData mediaLoadData) {
            long G = f.this.G(this.f47620d, mediaLoadData.f12749f);
            long G2 = f.this.G(this.f47620d, mediaLoadData.f12750g);
            if (G == mediaLoadData.f12749f && G2 == mediaLoadData.f12750g) {
                return mediaLoadData;
            }
            return new MediaLoadData(mediaLoadData.f12744a, mediaLoadData.f12745b, mediaLoadData.f12746c, mediaLoadData.f12747d, mediaLoadData.f12748e, G, G2);
        }

        private boolean u(int i10, r.b bVar) {
            r.b bVar2;
            if (bVar != null) {
                bVar2 = f.this.F(this.f47620d, bVar);
                if (bVar2 == null) {
                    return false;
                }
            } else {
                bVar2 = null;
            }
            int H = f.this.H(this.f47620d, i10);
            y.a aVar = this.f47621e;
            if (aVar.f47851a != H || !ne.w0.c(aVar.f47852b, bVar2)) {
                this.f47621e = f.this.v(H, bVar2);
            }
            u.a aVar2 = this.f47622i;
            if (aVar2.f48775a != H || !ne.w0.c(aVar2.f48776b, bVar2)) {
                this.f47622i = f.this.t(H, bVar2);
                return true;
            }
            return true;
        }

        @Override // rc.u
        public void A(int i10, r.b bVar) {
            if (u(i10, bVar)) {
                this.f47622i.h();
            }
        }

        @Override // qd.y
        public void C(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData) {
            if (u(i10, bVar)) {
                this.f47621e.u(loadEventInfo, K(mediaLoadData));
            }
        }

        @Override // qd.y
        public void D(int i10, r.b bVar, MediaLoadData mediaLoadData) {
            if (u(i10, bVar)) {
                this.f47621e.x(K(mediaLoadData));
            }
        }

        @Override // rc.u
        public void F(int i10, r.b bVar) {
            if (u(i10, bVar)) {
                this.f47622i.m();
            }
        }

        @Override // qd.y
        public void G(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData) {
            if (u(i10, bVar)) {
                this.f47621e.l(loadEventInfo, K(mediaLoadData));
            }
        }

        @Override // qd.y
        public void H(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData) {
            if (u(i10, bVar)) {
                this.f47621e.o(loadEventInfo, K(mediaLoadData));
            }
        }

        @Override // rc.u
        public void I(int i10, r.b bVar, Exception exc) {
            if (u(i10, bVar)) {
                this.f47622i.l(exc);
            }
        }

        @Override // rc.u
        public void J(int i10, r.b bVar, int i11) {
            if (u(i10, bVar)) {
                this.f47622i.k(i11);
            }
        }

        @Override // qd.y
        public void g(int i10, r.b bVar, MediaLoadData mediaLoadData) {
            if (u(i10, bVar)) {
                this.f47621e.i(K(mediaLoadData));
            }
        }

        @Override // qd.y
        public void t(int i10, r.b bVar, LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData, IOException iOException, boolean z10) {
            if (u(i10, bVar)) {
                this.f47621e.r(loadEventInfo, K(mediaLoadData), iOException, z10);
            }
        }

        @Override // rc.u
        public void w(int i10, r.b bVar) {
            if (u(i10, bVar)) {
                this.f47622i.j();
            }
        }

        @Override // rc.u
        public void z(int i10, r.b bVar) {
            if (u(i10, bVar)) {
                this.f47622i.i();
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final r f47624a;

        /* renamed from: b  reason: collision with root package name */
        public final r.c f47625b;

        /* renamed from: c  reason: collision with root package name */
        public final a f47626c;

        public b(r rVar, r.c cVar, a aVar) {
            this.f47624a = rVar;
            this.f47625b = cVar;
            this.f47626c = aVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // qd.a
    public void B(le.c0 c0Var) {
        this.f47619u = c0Var;
        this.f47618t = ne.w0.w();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // qd.a
    public void D() {
        for (b bVar : this.f47617s.values()) {
            bVar.f47624a.a(bVar.f47625b);
            bVar.f47624a.k(bVar.f47626c);
            bVar.f47624a.d(bVar.f47626c);
        }
        this.f47617s.clear();
    }

    protected abstract r.b F(Object obj, r.b bVar);

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract void I(Object obj, r rVar, Timeline timeline);

    /* JADX INFO: Access modifiers changed from: protected */
    public final void J(final Object obj, r rVar) {
        ne.a.a(!this.f47617s.containsKey(obj));
        r.c cVar = new r.c() { // from class: qd.e
            @Override // qd.r.c
            public final void a(r rVar2, Timeline timeline) {
                f.this.I(obj, rVar2, timeline);
            }
        };
        a aVar = new a(obj);
        this.f47617s.put(obj, new b(rVar, cVar, aVar));
        rVar.g((Handler) ne.a.e(this.f47618t), aVar);
        rVar.e((Handler) ne.a.e(this.f47618t), aVar);
        rVar.r(cVar, this.f47619u, z());
        if (!A()) {
            rVar.m(cVar);
        }
    }

    @Override // qd.r
    public void o() {
        for (b bVar : this.f47617s.values()) {
            bVar.f47624a.o();
        }
    }

    @Override // qd.a
    protected void x() {
        for (b bVar : this.f47617s.values()) {
            bVar.f47624a.m(bVar.f47625b);
        }
    }

    @Override // qd.a
    protected void y() {
        for (b bVar : this.f47617s.values()) {
            bVar.f47624a.s(bVar.f47625b);
        }
    }

    protected long G(Object obj, long j10) {
        return j10;
    }

    protected int H(Object obj, int i10) {
        return i10;
    }
}
