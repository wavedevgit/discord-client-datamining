package vd;

import com.google.android.exoplayer2.Format;
import dd.h0;
import ne.s0;
import tc.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements j {

    /* renamed from: d  reason: collision with root package name */
    private static final y f52483d = new y();

    /* renamed from: a  reason: collision with root package name */
    final tc.k f52484a;

    /* renamed from: b  reason: collision with root package name */
    private final Format f52485b;

    /* renamed from: c  reason: collision with root package name */
    private final s0 f52486c;

    public b(tc.k kVar, Format format, s0 s0Var) {
        this.f52484a = kVar;
        this.f52485b = format;
        this.f52486c = s0Var;
    }

    @Override // vd.j
    public boolean a(tc.l lVar) {
        if (this.f52484a.d(lVar, f52483d) == 0) {
            return true;
        }
        return false;
    }

    @Override // vd.j
    public void b() {
        this.f52484a.a(0L, 0L);
    }

    @Override // vd.j
    public void c(tc.m mVar) {
        this.f52484a.c(mVar);
    }

    @Override // vd.j
    public boolean d() {
        tc.k kVar = this.f52484a;
        if (!(kVar instanceof h0) && !(kVar instanceof bd.g)) {
            return false;
        }
        return true;
    }

    @Override // vd.j
    public boolean e() {
        tc.k kVar = this.f52484a;
        if (!(kVar instanceof dd.h) && !(kVar instanceof dd.b) && !(kVar instanceof dd.e) && !(kVar instanceof ad.f)) {
            return false;
        }
        return true;
    }

    @Override // vd.j
    public j f() {
        tc.k fVar;
        ne.a.g(!d());
        tc.k kVar = this.f52484a;
        if (kVar instanceof t) {
            fVar = new t(this.f52485b.f11578i, this.f52486c);
        } else if (kVar instanceof dd.h) {
            fVar = new dd.h();
        } else if (kVar instanceof dd.b) {
            fVar = new dd.b();
        } else if (kVar instanceof dd.e) {
            fVar = new dd.e();
        } else if (kVar instanceof ad.f) {
            fVar = new ad.f();
        } else {
            throw new IllegalStateException("Unexpected extractor type for recreation: " + this.f52484a.getClass().getSimpleName());
        }
        return new b(fVar, this.f52485b, this.f52486c);
    }
}
