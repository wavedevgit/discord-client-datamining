package wp;

import android.view.View;
import kotlin.jvm.internal.Intrinsics;
import yp.k5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final k5 f52869a;

    /* renamed from: b  reason: collision with root package name */
    private final View f52870b;

    public a(k5 component, View view) {
        Intrinsics.checkNotNullParameter(component, "component");
        Intrinsics.checkNotNullParameter(view, "view");
        this.f52869a = component;
        this.f52870b = view;
    }

    public final k5 a() {
        return this.f52869a;
    }

    public final View b() {
        return this.f52870b;
    }

    public final k5 c() {
        return this.f52869a;
    }

    public final View d() {
        return this.f52870b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (Intrinsics.areEqual(this.f52869a, aVar.f52869a) && Intrinsics.areEqual(this.f52870b, aVar.f52870b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f52869a.hashCode() * 31) + this.f52870b.hashCode();
    }

    public String toString() {
        k5 k5Var = this.f52869a;
        View view = this.f52870b;
        return "ComponentView(component=" + k5Var + ", view=" + view + ")";
    }
}
