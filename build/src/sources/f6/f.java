package f6;

import f6.b;
import f6.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    b.r f22320a = null;

    /* renamed from: b  reason: collision with root package name */
    e f22321b = null;

    /* renamed from: c  reason: collision with root package name */
    String f22322c = null;

    /* renamed from: d  reason: collision with root package name */
    g.b f22323d = null;

    /* renamed from: e  reason: collision with root package name */
    String f22324e = null;

    /* renamed from: f  reason: collision with root package name */
    g.b f22325f = null;

    public f a(String str) {
        this.f22320a = new b(b.u.RenderOptions).d(str);
        return this;
    }

    public boolean b() {
        b.r rVar = this.f22320a;
        if (rVar != null && rVar.f() > 0) {
            return true;
        }
        return false;
    }

    public boolean c() {
        if (this.f22321b != null) {
            return true;
        }
        return false;
    }

    public boolean d() {
        if (this.f22322c != null) {
            return true;
        }
        return false;
    }

    public boolean e() {
        if (this.f22324e != null) {
            return true;
        }
        return false;
    }

    public boolean f() {
        if (this.f22323d != null) {
            return true;
        }
        return false;
    }

    public boolean g() {
        if (this.f22325f != null) {
            return true;
        }
        return false;
    }

    public f h(float f10, float f11, float f12, float f13) {
        this.f22325f = new g.b(f10, f11, f12, f13);
        return this;
    }
}
