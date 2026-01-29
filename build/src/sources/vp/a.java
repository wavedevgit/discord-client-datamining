package vp;

import android.view.View;
import kotlin.jvm.internal.Intrinsics;
import xp.k5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final k5 f51777a;

    /* renamed from: b  reason: collision with root package name */
    private final View f51778b;

    public a(k5 component, View view) {
        Intrinsics.checkNotNullParameter(component, "component");
        Intrinsics.checkNotNullParameter(view, "view");
        this.f51777a = component;
        this.f51778b = view;
    }

    public final k5 a() {
        return this.f51777a;
    }

    public final View b() {
        return this.f51778b;
    }

    public final k5 c() {
        return this.f51777a;
    }

    public final View d() {
        return this.f51778b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (Intrinsics.areEqual(this.f51777a, aVar.f51777a) && Intrinsics.areEqual(this.f51778b, aVar.f51778b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f51777a.hashCode() * 31) + this.f51778b.hashCode();
    }

    public String toString() {
        k5 k5Var = this.f51777a;
        View view = this.f51778b;
        return "ComponentView(component=" + k5Var + ", view=" + view + ")";
    }
}
