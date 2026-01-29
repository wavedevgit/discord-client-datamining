package w;

import a0.d0;
import android.hardware.camera2.CameraCharacteristics;
import q.s0;
import x.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private s0 f51981a;

    public h(s0 s0Var) {
        this.f51981a = s0Var;
    }

    public static h a(o oVar) {
        d0 h10 = ((d0) oVar).h();
        b2.e.b(h10 instanceof s0, "CameraInfo doesn't contain Camera2 implementation.");
        return ((s0) h10).l();
    }

    public Object b(CameraCharacteristics.Key key) {
        return this.f51981a.m().a(key);
    }

    public String c() {
        return this.f51981a.b();
    }
}
