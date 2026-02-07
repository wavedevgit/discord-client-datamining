package gf;

import android.content.ComponentName;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h1 {

    /* renamed from: a  reason: collision with root package name */
    private final String f25128a;

    /* renamed from: b  reason: collision with root package name */
    private final String f25129b;

    /* renamed from: c  reason: collision with root package name */
    private final ComponentName f25130c;

    /* renamed from: d  reason: collision with root package name */
    private final int f25131d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f25132e;

    public h1(String str, String str2, int i10, boolean z10) {
        q.f(str);
        this.f25128a = str;
        q.f(str2);
        this.f25129b = str2;
        this.f25130c = null;
        this.f25131d = 4225;
        this.f25132e = z10;
    }

    public final String a() {
        return this.f25128a;
    }

    public final String b() {
        return this.f25129b;
    }

    public final ComponentName c() {
        return this.f25130c;
    }

    public final boolean d() {
        return this.f25132e;
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h1)) {
            return false;
        }
        h1 h1Var = (h1) obj;
        if (o.a(this.f25128a, h1Var.f25128a) && o.a(this.f25129b, h1Var.f25129b) && o.a(this.f25130c, h1Var.f25130c) && this.f25132e == h1Var.f25132e) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return o.b(this.f25128a, this.f25129b, this.f25130c, 4225, Boolean.valueOf(this.f25132e));
    }

    public final String toString() {
        String str = this.f25128a;
        if (str == null) {
            ComponentName componentName = this.f25130c;
            q.l(componentName);
            return componentName.flattenToString();
        }
        return str;
    }
}
