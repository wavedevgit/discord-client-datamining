package wd;

import com.google.android.exoplayer2.Format;
import ed.h0;
import oe.s0;
import uc.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements j {

    /* renamed from: d  reason: collision with root package name */
    private static final y f53108d = new y();

    /* renamed from: a  reason: collision with root package name */
    final uc.k f53109a;

    /* renamed from: b  reason: collision with root package name */
    private final Format f53110b;

    /* renamed from: c  reason: collision with root package name */
    private final s0 f53111c;

    public b(uc.k kVar, Format format, s0 s0Var) {
        this.f53109a = kVar;
        this.f53110b = format;
        this.f53111c = s0Var;
    }

    @Override // wd.j
    public boolean a(uc.l lVar) {
        if (this.f53109a.h(lVar, f53108d) == 0) {
            return true;
        }
        return false;
    }

    @Override // wd.j
    public void b() {
        this.f53109a.a(0L, 0L);
    }

    @Override // wd.j
    public void c(uc.m mVar) {
        this.f53109a.c(mVar);
    }

    @Override // wd.j
    public boolean d() {
        uc.k kVar = this.f53109a;
        if (!(kVar instanceof h0) && !(kVar instanceof cd.g)) {
            return false;
        }
        return true;
    }

    @Override // wd.j
    public boolean e() {
        uc.k kVar = this.f53109a;
        if (!(kVar instanceof ed.h) && !(kVar instanceof ed.b) && !(kVar instanceof ed.e) && !(kVar instanceof bd.f)) {
            return false;
        }
        return true;
    }

    @Override // wd.j
    public j f() {
        uc.k fVar;
        oe.a.g(!d());
        uc.k kVar = this.f53109a;
        if (kVar instanceof t) {
            fVar = new t(this.f53110b.f12296i, this.f53111c);
        } else if (kVar instanceof ed.h) {
            fVar = new ed.h();
        } else if (kVar instanceof ed.b) {
            fVar = new ed.b();
        } else if (kVar instanceof ed.e) {
            fVar = new ed.e();
        } else if (kVar instanceof bd.f) {
            fVar = new bd.f();
        } else {
            throw new IllegalStateException("Unexpected extractor type for recreation: " + this.f53109a.getClass().getSimpleName());
        }
        return new b(fVar, this.f53110b, this.f53111c);
    }
}
