package hf;

import android.content.ComponentName;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h1 {

    /* renamed from: a  reason: collision with root package name */
    private final String f26039a;

    /* renamed from: b  reason: collision with root package name */
    private final String f26040b;

    /* renamed from: c  reason: collision with root package name */
    private final ComponentName f26041c;

    /* renamed from: d  reason: collision with root package name */
    private final int f26042d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f26043e;

    public h1(String str, String str2, int i10, boolean z10) {
        q.f(str);
        this.f26039a = str;
        q.f(str2);
        this.f26040b = str2;
        this.f26041c = null;
        this.f26042d = 4225;
        this.f26043e = z10;
    }

    public final String a() {
        return this.f26039a;
    }

    public final String b() {
        return this.f26040b;
    }

    public final ComponentName c() {
        return this.f26041c;
    }

    public final boolean d() {
        return this.f26043e;
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h1)) {
            return false;
        }
        h1 h1Var = (h1) obj;
        if (o.a(this.f26039a, h1Var.f26039a) && o.a(this.f26040b, h1Var.f26040b) && o.a(this.f26041c, h1Var.f26041c) && this.f26043e == h1Var.f26043e) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return o.b(this.f26039a, this.f26040b, this.f26041c, 4225, Boolean.valueOf(this.f26043e));
    }

    public final String toString() {
        String str = this.f26039a;
        if (str == null) {
            ComponentName componentName = this.f26041c;
            q.l(componentName);
            return componentName.flattenToString();
        }
        return str;
    }
}
