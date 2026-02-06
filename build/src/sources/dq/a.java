package dq;

import android.view.View;
import fq.k5;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final k5 f21016a;

    /* renamed from: b  reason: collision with root package name */
    private final View f21017b;

    public a(k5 component, View view) {
        Intrinsics.checkNotNullParameter(component, "component");
        Intrinsics.checkNotNullParameter(view, "view");
        this.f21016a = component;
        this.f21017b = view;
    }

    public final k5 a() {
        return this.f21016a;
    }

    public final View b() {
        return this.f21017b;
    }

    public final k5 c() {
        return this.f21016a;
    }

    public final View d() {
        return this.f21017b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (Intrinsics.areEqual(this.f21016a, aVar.f21016a) && Intrinsics.areEqual(this.f21017b, aVar.f21017b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f21016a.hashCode() * 31) + this.f21017b.hashCode();
    }

    public String toString() {
        k5 k5Var = this.f21016a;
        View view = this.f21017b;
        return "ComponentView(component=" + k5Var + ", view=" + view + ")";
    }
}
