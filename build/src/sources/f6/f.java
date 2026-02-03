package f6;

import f6.b;
import f6.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    b.r f23295a = null;

    /* renamed from: b  reason: collision with root package name */
    e f23296b = null;

    /* renamed from: c  reason: collision with root package name */
    String f23297c = null;

    /* renamed from: d  reason: collision with root package name */
    g.b f23298d = null;

    /* renamed from: e  reason: collision with root package name */
    String f23299e = null;

    /* renamed from: f  reason: collision with root package name */
    g.b f23300f = null;

    public f a(String str) {
        this.f23295a = new b(b.u.RenderOptions).d(str);
        return this;
    }

    public boolean b() {
        b.r rVar = this.f23295a;
        if (rVar != null && rVar.f() > 0) {
            return true;
        }
        return false;
    }

    public boolean c() {
        if (this.f23296b != null) {
            return true;
        }
        return false;
    }

    public boolean d() {
        if (this.f23297c != null) {
            return true;
        }
        return false;
    }

    public boolean e() {
        if (this.f23299e != null) {
            return true;
        }
        return false;
    }

    public boolean f() {
        if (this.f23298d != null) {
            return true;
        }
        return false;
    }

    public boolean g() {
        if (this.f23300f != null) {
            return true;
        }
        return false;
    }

    public f h(float f10, float f11, float f12, float f13) {
        this.f23300f = new g.b(f10, f11, f12, f13);
        return this;
    }
}
