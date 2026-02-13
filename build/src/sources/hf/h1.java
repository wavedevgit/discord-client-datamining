package hf;

import android.content.ComponentName;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h1 {

    /* renamed from: a  reason: collision with root package name */
    private final String f27826a;

    /* renamed from: b  reason: collision with root package name */
    private final String f27827b;

    /* renamed from: c  reason: collision with root package name */
    private final ComponentName f27828c;

    /* renamed from: d  reason: collision with root package name */
    private final int f27829d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f27830e;

    public h1(String str, String str2, int i10, boolean z10) {
        q.f(str);
        this.f27826a = str;
        q.f(str2);
        this.f27827b = str2;
        this.f27828c = null;
        this.f27829d = 4225;
        this.f27830e = z10;
    }

    public final String a() {
        return this.f27826a;
    }

    public final String b() {
        return this.f27827b;
    }

    public final ComponentName c() {
        return this.f27828c;
    }

    public final boolean d() {
        return this.f27830e;
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h1)) {
            return false;
        }
        h1 h1Var = (h1) obj;
        if (o.a(this.f27826a, h1Var.f27826a) && o.a(this.f27827b, h1Var.f27827b) && o.a(this.f27828c, h1Var.f27828c) && this.f27830e == h1Var.f27830e) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return o.b(this.f27826a, this.f27827b, this.f27828c, 4225, Boolean.valueOf(this.f27830e));
    }

    public final String toString() {
        String str = this.f27826a;
        if (str == null) {
            ComponentName componentName = this.f27828c;
            q.l(componentName);
            return componentName.flattenToString();
        }
        return str;
    }
}
