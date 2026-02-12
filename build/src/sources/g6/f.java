package g6;

import g6.b;
import g6.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    b.r f25007a = null;

    /* renamed from: b  reason: collision with root package name */
    e f25008b = null;

    /* renamed from: c  reason: collision with root package name */
    String f25009c = null;

    /* renamed from: d  reason: collision with root package name */
    g.b f25010d = null;

    /* renamed from: e  reason: collision with root package name */
    String f25011e = null;

    /* renamed from: f  reason: collision with root package name */
    g.b f25012f = null;

    public f a(String str) {
        this.f25007a = new b(b.u.RenderOptions).d(str);
        return this;
    }

    public boolean b() {
        b.r rVar = this.f25007a;
        if (rVar != null && rVar.f() > 0) {
            return true;
        }
        return false;
    }

    public boolean c() {
        if (this.f25008b != null) {
            return true;
        }
        return false;
    }

    public boolean d() {
        if (this.f25009c != null) {
            return true;
        }
        return false;
    }

    public boolean e() {
        if (this.f25011e != null) {
            return true;
        }
        return false;
    }

    public boolean f() {
        if (this.f25010d != null) {
            return true;
        }
        return false;
    }

    public boolean g() {
        if (this.f25012f != null) {
            return true;
        }
        return false;
    }

    public f h(float f10, float f11, float f12, float f13) {
        this.f25012f = new g.b(f10, f11, f12, f13);
        return this;
    }
}
