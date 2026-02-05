package vn;

import android.graphics.Rect;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final Rect f52329a;

    /* renamed from: b  reason: collision with root package name */
    private final Rect f52330b;

    public c(Rect region, Rect viewport) {
        Intrinsics.checkNotNullParameter(region, "region");
        Intrinsics.checkNotNullParameter(viewport, "viewport");
        this.f52329a = region;
        this.f52330b = viewport;
    }

    public final Rect a() {
        return this.f52329a;
    }

    public final Rect b() {
        return this.f52330b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (Intrinsics.areEqual(this.f52329a, cVar.f52329a) && Intrinsics.areEqual(this.f52330b, cVar.f52330b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f52329a.hashCode() * 31) + this.f52330b.hashCode();
    }

    public String toString() {
        Rect rect = this.f52329a;
        Rect rect2 = this.f52330b;
        return "ViewfinderInfo(region=" + rect + ", viewport=" + rect2 + ")";
    }
}
