package pn;

import android.graphics.Rect;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final Rect f46129a;

    /* renamed from: b  reason: collision with root package name */
    private final Rect f46130b;

    public c(Rect region, Rect viewport) {
        Intrinsics.checkNotNullParameter(region, "region");
        Intrinsics.checkNotNullParameter(viewport, "viewport");
        this.f46129a = region;
        this.f46130b = viewport;
    }

    public final Rect a() {
        return this.f46129a;
    }

    public final Rect b() {
        return this.f46130b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (Intrinsics.areEqual(this.f46129a, cVar.f46129a) && Intrinsics.areEqual(this.f46130b, cVar.f46130b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f46129a.hashCode() * 31) + this.f46130b.hashCode();
    }

    public String toString() {
        Rect rect = this.f46129a;
        Rect rect2 = this.f46130b;
        return "ViewfinderInfo(region=" + rect + ", viewport=" + rect2 + ")";
    }
}
