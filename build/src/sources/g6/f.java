package g6;

import g6.b;
import g6.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    b.r f25006a = null;

    /* renamed from: b  reason: collision with root package name */
    e f25007b = null;

    /* renamed from: c  reason: collision with root package name */
    String f25008c = null;

    /* renamed from: d  reason: collision with root package name */
    g.b f25009d = null;

    /* renamed from: e  reason: collision with root package name */
    String f25010e = null;

    /* renamed from: f  reason: collision with root package name */
    g.b f25011f = null;

    public f a(String str) {
        this.f25006a = new b(b.u.RenderOptions).d(str);
        return this;
    }

    public boolean b() {
        b.r rVar = this.f25006a;
        if (rVar != null && rVar.f() > 0) {
            return true;
        }
        return false;
    }

    public boolean c() {
        if (this.f25007b != null) {
            return true;
        }
        return false;
    }

    public boolean d() {
        if (this.f25008c != null) {
            return true;
        }
        return false;
    }

    public boolean e() {
        if (this.f25010e != null) {
            return true;
        }
        return false;
    }

    public boolean f() {
        if (this.f25009d != null) {
            return true;
        }
        return false;
    }

    public boolean g() {
        if (this.f25011f != null) {
            return true;
        }
        return false;
    }

    public f h(float f10, float f11, float f12, float f13) {
        this.f25011f = new g.b(f10, f11, f12, f13);
        return this;
    }
}
