package pn;

import android.graphics.Rect;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final Rect f46145a;

    /* renamed from: b  reason: collision with root package name */
    private final Rect f46146b;

    public c(Rect region, Rect viewport) {
        Intrinsics.checkNotNullParameter(region, "region");
        Intrinsics.checkNotNullParameter(viewport, "viewport");
        this.f46145a = region;
        this.f46146b = viewport;
    }

    public final Rect a() {
        return this.f46145a;
    }

    public final Rect b() {
        return this.f46146b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (Intrinsics.areEqual(this.f46145a, cVar.f46145a) && Intrinsics.areEqual(this.f46146b, cVar.f46146b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f46145a.hashCode() * 31) + this.f46146b.hashCode();
    }

    public String toString() {
        Rect rect = this.f46145a;
        Rect rect2 = this.f46146b;
        return "ViewfinderInfo(region=" + rect + ", viewport=" + rect2 + ")";
    }
}
