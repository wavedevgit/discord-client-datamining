package gf;

import android.content.ComponentName;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h1 {

    /* renamed from: a  reason: collision with root package name */
    private final String f24827a;

    /* renamed from: b  reason: collision with root package name */
    private final String f24828b;

    /* renamed from: c  reason: collision with root package name */
    private final ComponentName f24829c;

    /* renamed from: d  reason: collision with root package name */
    private final int f24830d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f24831e;

    public h1(String str, String str2, int i10, boolean z10) {
        q.f(str);
        this.f24827a = str;
        q.f(str2);
        this.f24828b = str2;
        this.f24829c = null;
        this.f24830d = 4225;
        this.f24831e = z10;
    }

    public final String a() {
        return this.f24827a;
    }

    public final String b() {
        return this.f24828b;
    }

    public final ComponentName c() {
        return this.f24829c;
    }

    public final boolean d() {
        return this.f24831e;
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h1)) {
            return false;
        }
        h1 h1Var = (h1) obj;
        if (o.a(this.f24827a, h1Var.f24827a) && o.a(this.f24828b, h1Var.f24828b) && o.a(this.f24829c, h1Var.f24829c) && this.f24831e == h1Var.f24831e) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return o.b(this.f24827a, this.f24828b, this.f24829c, 4225, Boolean.valueOf(this.f24831e));
    }

    public final String toString() {
        String str = this.f24827a;
        if (str == null) {
            ComponentName componentName = this.f24829c;
            q.l(componentName);
            return componentName.flattenToString();
        }
        return str;
    }
}
