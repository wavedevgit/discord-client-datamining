package rn;

import android.util.Range;
import android.util.Size;
import kotlin.jvm.internal.Intrinsics;
import pn.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    private final String f49002a;

    /* renamed from: b  reason: collision with root package name */
    private final Size f49003b;

    /* renamed from: c  reason: collision with root package name */
    private final double f49004c;

    /* renamed from: d  reason: collision with root package name */
    private final Range f49005d;

    /* renamed from: e  reason: collision with root package name */
    private final int f49006e;

    /* renamed from: f  reason: collision with root package name */
    private final v.b f49007f;

    /* renamed from: g  reason: collision with root package name */
    private final o f49008g;

    /* renamed from: h  reason: collision with root package name */
    private final v f49009h;

    public l(String id2, Size size, double d10, Range targetFpsRange, int i10, v.b facingMode, o additionalOptions) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(size, "size");
        Intrinsics.checkNotNullParameter(targetFpsRange, "targetFpsRange");
        Intrinsics.checkNotNullParameter(facingMode, "facingMode");
        Intrinsics.checkNotNullParameter(additionalOptions, "additionalOptions");
        this.f49002a = id2;
        this.f49003b = size;
        this.f49004c = d10;
        this.f49005d = targetFpsRange;
        this.f49006e = i10;
        this.f49007f = facingMode;
        this.f49008g = additionalOptions;
        this.f49009h = new v(id2, facingMode, size, (int) d10);
    }

    public final o a() {
        return this.f49008g;
    }

    public final v b() {
        return this.f49009h;
    }

    public final v.b c() {
        return this.f49007f;
    }

    public final String d() {
        return this.f49002a;
    }

    public final int e() {
        return this.f49006e;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof l)) {
            return false;
        }
        l lVar = (l) obj;
        if (Intrinsics.areEqual(this.f49002a, lVar.f49002a) && Intrinsics.areEqual(this.f49003b, lVar.f49003b) && Double.compare(this.f49004c, lVar.f49004c) == 0 && Intrinsics.areEqual(this.f49005d, lVar.f49005d) && this.f49006e == lVar.f49006e && this.f49007f == lVar.f49007f && Intrinsics.areEqual(this.f49008g, lVar.f49008g)) {
            return true;
        }
        return false;
    }

    public final Size f() {
        return this.f49003b;
    }

    public final Range g() {
        return this.f49005d;
    }

    public int hashCode() {
        return (((((((((((this.f49002a.hashCode() * 31) + this.f49003b.hashCode()) * 31) + Double.hashCode(this.f49004c)) * 31) + this.f49005d.hashCode()) * 31) + Integer.hashCode(this.f49006e)) * 31) + this.f49007f.hashCode()) * 31) + this.f49008g.hashCode();
    }

    public String toString() {
        String str = this.f49002a;
        Size size = this.f49003b;
        double d10 = this.f49004c;
        Range range = this.f49005d;
        int i10 = this.f49006e;
        v.b bVar = this.f49007f;
        o oVar = this.f49008g;
        return "CameraChoice(id=" + str + ", size=" + size + ", maxFps=" + d10 + ", targetFpsRange=" + range + ", rotation=" + i10 + ", facingMode=" + bVar + ", additionalOptions=" + oVar + ")";
    }
}
