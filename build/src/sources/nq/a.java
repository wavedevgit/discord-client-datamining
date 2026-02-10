package nq;

import android.view.View;
import kotlin.jvm.internal.Intrinsics;
import pq.k5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final k5 f38240a;

    /* renamed from: b  reason: collision with root package name */
    private final View f38241b;

    public a(k5 component, View view) {
        Intrinsics.checkNotNullParameter(component, "component");
        Intrinsics.checkNotNullParameter(view, "view");
        this.f38240a = component;
        this.f38241b = view;
    }

    public final k5 a() {
        return this.f38240a;
    }

    public final View b() {
        return this.f38241b;
    }

    public final k5 c() {
        return this.f38240a;
    }

    public final View d() {
        return this.f38241b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (Intrinsics.areEqual(this.f38240a, aVar.f38240a) && Intrinsics.areEqual(this.f38241b, aVar.f38241b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f38240a.hashCode() * 31) + this.f38241b.hashCode();
    }

    public String toString() {
        k5 k5Var = this.f38240a;
        View view = this.f38241b;
        return "ComponentView(component=" + k5Var + ", view=" + view + ")";
    }
}
