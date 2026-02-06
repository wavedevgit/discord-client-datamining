package gf;

import android.content.ComponentName;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h1 {

    /* renamed from: a  reason: collision with root package name */
    private final String f25080a;

    /* renamed from: b  reason: collision with root package name */
    private final String f25081b;

    /* renamed from: c  reason: collision with root package name */
    private final ComponentName f25082c;

    /* renamed from: d  reason: collision with root package name */
    private final int f25083d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f25084e;

    public h1(String str, String str2, int i10, boolean z10) {
        q.f(str);
        this.f25080a = str;
        q.f(str2);
        this.f25081b = str2;
        this.f25082c = null;
        this.f25083d = 4225;
        this.f25084e = z10;
    }

    public final String a() {
        return this.f25080a;
    }

    public final String b() {
        return this.f25081b;
    }

    public final ComponentName c() {
        return this.f25082c;
    }

    public final boolean d() {
        return this.f25084e;
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h1)) {
            return false;
        }
        h1 h1Var = (h1) obj;
        if (o.a(this.f25080a, h1Var.f25080a) && o.a(this.f25081b, h1Var.f25081b) && o.a(this.f25082c, h1Var.f25082c) && this.f25084e == h1Var.f25084e) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return o.b(this.f25080a, this.f25081b, this.f25082c, 4225, Boolean.valueOf(this.f25084e));
    }

    public final String toString() {
        String str = this.f25080a;
        if (str == null) {
            ComponentName componentName = this.f25082c;
            q.l(componentName);
            return componentName.flattenToString();
        }
        return str;
    }
}
