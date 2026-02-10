package io;

import android.graphics.Rect;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final Rect f28021a;

    /* renamed from: b  reason: collision with root package name */
    private final Rect f28022b;

    public c(Rect region, Rect viewport) {
        Intrinsics.checkNotNullParameter(region, "region");
        Intrinsics.checkNotNullParameter(viewport, "viewport");
        this.f28021a = region;
        this.f28022b = viewport;
    }

    public final Rect a() {
        return this.f28021a;
    }

    public final Rect b() {
        return this.f28022b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (Intrinsics.areEqual(this.f28021a, cVar.f28021a) && Intrinsics.areEqual(this.f28022b, cVar.f28022b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f28021a.hashCode() * 31) + this.f28022b.hashCode();
    }

    public String toString() {
        Rect rect = this.f28021a;
        Rect rect2 = this.f28022b;
        return "ViewfinderInfo(region=" + rect + ", viewport=" + rect2 + ")";
    }
}
