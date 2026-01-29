package f6;

import f6.b;
import f6.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    b.r f24492a = null;

    /* renamed from: b  reason: collision with root package name */
    e f24493b = null;

    /* renamed from: c  reason: collision with root package name */
    String f24494c = null;

    /* renamed from: d  reason: collision with root package name */
    g.b f24495d = null;

    /* renamed from: e  reason: collision with root package name */
    String f24496e = null;

    /* renamed from: f  reason: collision with root package name */
    g.b f24497f = null;

    public f a(String str) {
        this.f24492a = new b(b.u.RenderOptions).d(str);
        return this;
    }

    public boolean b() {
        b.r rVar = this.f24492a;
        if (rVar != null && rVar.f() > 0) {
            return true;
        }
        return false;
    }

    public boolean c() {
        if (this.f24493b != null) {
            return true;
        }
        return false;
    }

    public boolean d() {
        if (this.f24494c != null) {
            return true;
        }
        return false;
    }

    public boolean e() {
        if (this.f24496e != null) {
            return true;
        }
        return false;
    }

    public boolean f() {
        if (this.f24495d != null) {
            return true;
        }
        return false;
    }

    public boolean g() {
        if (this.f24497f != null) {
            return true;
        }
        return false;
    }

    public f h(float f10, float f11, float f12, float f13) {
        this.f24497f = new g.b(f10, f11, f12, f13);
        return this;
    }
}
