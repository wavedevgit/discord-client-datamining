package hf;

import android.content.ComponentName;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h1 {

    /* renamed from: a  reason: collision with root package name */
    private final String f27258a;

    /* renamed from: b  reason: collision with root package name */
    private final String f27259b;

    /* renamed from: c  reason: collision with root package name */
    private final ComponentName f27260c;

    /* renamed from: d  reason: collision with root package name */
    private final int f27261d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f27262e;

    public h1(String str, String str2, int i10, boolean z10) {
        q.f(str);
        this.f27258a = str;
        q.f(str2);
        this.f27259b = str2;
        this.f27260c = null;
        this.f27261d = 4225;
        this.f27262e = z10;
    }

    public final String a() {
        return this.f27258a;
    }

    public final String b() {
        return this.f27259b;
    }

    public final ComponentName c() {
        return this.f27260c;
    }

    public final boolean d() {
        return this.f27262e;
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h1)) {
            return false;
        }
        h1 h1Var = (h1) obj;
        if (o.a(this.f27258a, h1Var.f27258a) && o.a(this.f27259b, h1Var.f27259b) && o.a(this.f27260c, h1Var.f27260c) && this.f27262e == h1Var.f27262e) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return o.b(this.f27258a, this.f27259b, this.f27260c, 4225, Boolean.valueOf(this.f27262e));
    }

    public final String toString() {
        String str = this.f27258a;
        if (str == null) {
            ComponentName componentName = this.f27260c;
            q.l(componentName);
            return componentName.flattenToString();
        }
        return str;
    }
}
