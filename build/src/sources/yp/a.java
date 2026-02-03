package yp;

import android.view.View;
import aq.k5;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final k5 f55158a;

    /* renamed from: b  reason: collision with root package name */
    private final View f55159b;

    public a(k5 component, View view) {
        Intrinsics.checkNotNullParameter(component, "component");
        Intrinsics.checkNotNullParameter(view, "view");
        this.f55158a = component;
        this.f55159b = view;
    }

    public final k5 a() {
        return this.f55158a;
    }

    public final View b() {
        return this.f55159b;
    }

    public final k5 c() {
        return this.f55158a;
    }

    public final View d() {
        return this.f55159b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (Intrinsics.areEqual(this.f55158a, aVar.f55158a) && Intrinsics.areEqual(this.f55159b, aVar.f55159b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f55158a.hashCode() * 31) + this.f55159b.hashCode();
    }

    public String toString() {
        k5 k5Var = this.f55158a;
        View view = this.f55159b;
        return "ComponentView(component=" + k5Var + ", view=" + view + ")";
    }
}
