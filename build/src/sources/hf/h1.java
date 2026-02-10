package hf;

import android.content.ComponentName;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h1 {

    /* renamed from: a  reason: collision with root package name */
    private final String f27257a;

    /* renamed from: b  reason: collision with root package name */
    private final String f27258b;

    /* renamed from: c  reason: collision with root package name */
    private final ComponentName f27259c;

    /* renamed from: d  reason: collision with root package name */
    private final int f27260d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f27261e;

    public h1(String str, String str2, int i10, boolean z10) {
        q.f(str);
        this.f27257a = str;
        q.f(str2);
        this.f27258b = str2;
        this.f27259c = null;
        this.f27260d = 4225;
        this.f27261e = z10;
    }

    public final String a() {
        return this.f27257a;
    }

    public final String b() {
        return this.f27258b;
    }

    public final ComponentName c() {
        return this.f27259c;
    }

    public final boolean d() {
        return this.f27261e;
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h1)) {
            return false;
        }
        h1 h1Var = (h1) obj;
        if (o.a(this.f27257a, h1Var.f27257a) && o.a(this.f27258b, h1Var.f27258b) && o.a(this.f27259c, h1Var.f27259c) && this.f27261e == h1Var.f27261e) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return o.b(this.f27257a, this.f27258b, this.f27259c, 4225, Boolean.valueOf(this.f27261e));
    }

    public final String toString() {
        String str = this.f27257a;
        if (str == null) {
            ComponentName componentName = this.f27259c;
            q.l(componentName);
            return componentName.flattenToString();
        }
        return str;
    }
}
