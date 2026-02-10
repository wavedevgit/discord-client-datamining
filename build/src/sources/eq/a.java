package eq;

import android.view.View;
import gq.k5;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final k5 f21964a;

    /* renamed from: b  reason: collision with root package name */
    private final View f21965b;

    public a(k5 component, View view) {
        Intrinsics.checkNotNullParameter(component, "component");
        Intrinsics.checkNotNullParameter(view, "view");
        this.f21964a = component;
        this.f21965b = view;
    }

    public final k5 a() {
        return this.f21964a;
    }

    public final View b() {
        return this.f21965b;
    }

    public final k5 c() {
        return this.f21964a;
    }

    public final View d() {
        return this.f21965b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (Intrinsics.areEqual(this.f21964a, aVar.f21964a) && Intrinsics.areEqual(this.f21965b, aVar.f21965b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f21964a.hashCode() * 31) + this.f21965b.hashCode();
    }

    public String toString() {
        k5 k5Var = this.f21964a;
        View view = this.f21965b;
        return "ComponentView(component=" + k5Var + ", view=" + view + ")";
    }
}
