package yp;

import android.view.View;
import aq.k5;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final k5 f55155a;

    /* renamed from: b  reason: collision with root package name */
    private final View f55156b;

    public a(k5 component, View view) {
        Intrinsics.checkNotNullParameter(component, "component");
        Intrinsics.checkNotNullParameter(view, "view");
        this.f55155a = component;
        this.f55156b = view;
    }

    public final k5 a() {
        return this.f55155a;
    }

    public final View b() {
        return this.f55156b;
    }

    public final k5 c() {
        return this.f55155a;
    }

    public final View d() {
        return this.f55156b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (Intrinsics.areEqual(this.f55155a, aVar.f55155a) && Intrinsics.areEqual(this.f55156b, aVar.f55156b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f55155a.hashCode() * 31) + this.f55156b.hashCode();
    }

    public String toString() {
        k5 k5Var = this.f55155a;
        View view = this.f55156b;
        return "ComponentView(component=" + k5Var + ", view=" + view + ")";
    }
}
