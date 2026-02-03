package vd;

import com.google.android.exoplayer2.Format;
import dd.h0;
import ne.s0;
import tc.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements j {

    /* renamed from: d  reason: collision with root package name */
    private static final y f51056d = new y();

    /* renamed from: a  reason: collision with root package name */
    final tc.k f51057a;

    /* renamed from: b  reason: collision with root package name */
    private final Format f51058b;

    /* renamed from: c  reason: collision with root package name */
    private final s0 f51059c;

    public b(tc.k kVar, Format format, s0 s0Var) {
        this.f51057a = kVar;
        this.f51058b = format;
        this.f51059c = s0Var;
    }

    @Override // vd.j
    public boolean a(tc.l lVar) {
        if (this.f51057a.d(lVar, f51056d) == 0) {
            return true;
        }
        return false;
    }

    @Override // vd.j
    public void b() {
        this.f51057a.a(0L, 0L);
    }

    @Override // vd.j
    public void c(tc.m mVar) {
        this.f51057a.c(mVar);
    }

    @Override // vd.j
    public boolean d() {
        tc.k kVar = this.f51057a;
        if (!(kVar instanceof h0) && !(kVar instanceof bd.g)) {
            return false;
        }
        return true;
    }

    @Override // vd.j
    public boolean e() {
        tc.k kVar = this.f51057a;
        if (!(kVar instanceof dd.h) && !(kVar instanceof dd.b) && !(kVar instanceof dd.e) && !(kVar instanceof ad.f)) {
            return false;
        }
        return true;
    }

    @Override // vd.j
    public j f() {
        tc.k fVar;
        ne.a.g(!d());
        tc.k kVar = this.f51057a;
        if (kVar instanceof t) {
            fVar = new t(this.f51058b.f12326i, this.f51059c);
        } else if (kVar instanceof dd.h) {
            fVar = new dd.h();
        } else if (kVar instanceof dd.b) {
            fVar = new dd.b();
        } else if (kVar instanceof dd.e) {
            fVar = new dd.e();
        } else if (kVar instanceof ad.f) {
            fVar = new ad.f();
        } else {
            throw new IllegalStateException("Unexpected extractor type for recreation: " + this.f51057a.getClass().getSimpleName());
        }
        return new b(fVar, this.f51058b, this.f51059c);
    }
}
