package f6;

import f6.b;
import f6.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    b.r f23703a = null;

    /* renamed from: b  reason: collision with root package name */
    e f23704b = null;

    /* renamed from: c  reason: collision with root package name */
    String f23705c = null;

    /* renamed from: d  reason: collision with root package name */
    g.b f23706d = null;

    /* renamed from: e  reason: collision with root package name */
    String f23707e = null;

    /* renamed from: f  reason: collision with root package name */
    g.b f23708f = null;

    public f a(String str) {
        this.f23703a = new b(b.u.RenderOptions).d(str);
        return this;
    }

    public boolean b() {
        b.r rVar = this.f23703a;
        if (rVar != null && rVar.f() > 0) {
            return true;
        }
        return false;
    }

    public boolean c() {
        if (this.f23704b != null) {
            return true;
        }
        return false;
    }

    public boolean d() {
        if (this.f23705c != null) {
            return true;
        }
        return false;
    }

    public boolean e() {
        if (this.f23707e != null) {
            return true;
        }
        return false;
    }

    public boolean f() {
        if (this.f23706d != null) {
            return true;
        }
        return false;
    }

    public boolean g() {
        if (this.f23708f != null) {
            return true;
        }
        return false;
    }

    public f h(float f10, float f11, float f12, float f13) {
        this.f23708f = new g.b(f10, f11, f12, f13);
        return this;
    }
}
