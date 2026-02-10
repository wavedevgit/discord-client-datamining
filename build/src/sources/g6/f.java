package g6;

import g6.b;
import g6.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    b.r f23706a = null;

    /* renamed from: b  reason: collision with root package name */
    e f23707b = null;

    /* renamed from: c  reason: collision with root package name */
    String f23708c = null;

    /* renamed from: d  reason: collision with root package name */
    g.b f23709d = null;

    /* renamed from: e  reason: collision with root package name */
    String f23710e = null;

    /* renamed from: f  reason: collision with root package name */
    g.b f23711f = null;

    public f a(String str) {
        this.f23706a = new b(b.u.RenderOptions).d(str);
        return this;
    }

    public boolean b() {
        b.r rVar = this.f23706a;
        if (rVar != null && rVar.f() > 0) {
            return true;
        }
        return false;
    }

    public boolean c() {
        if (this.f23707b != null) {
            return true;
        }
        return false;
    }

    public boolean d() {
        if (this.f23708c != null) {
            return true;
        }
        return false;
    }

    public boolean e() {
        if (this.f23710e != null) {
            return true;
        }
        return false;
    }

    public boolean f() {
        if (this.f23709d != null) {
            return true;
        }
        return false;
    }

    public boolean g() {
        if (this.f23711f != null) {
            return true;
        }
        return false;
    }

    public f h(float f10, float f11, float f12, float f13) {
        this.f23711f = new g.b(f10, f11, f12, f13);
        return this;
    }
}
