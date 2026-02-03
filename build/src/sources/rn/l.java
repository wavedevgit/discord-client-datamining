package rn;

import android.util.Range;
import android.util.Size;
import kotlin.jvm.internal.Intrinsics;
import pn.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    private final String f49005a;

    /* renamed from: b  reason: collision with root package name */
    private final Size f49006b;

    /* renamed from: c  reason: collision with root package name */
    private final double f49007c;

    /* renamed from: d  reason: collision with root package name */
    private final Range f49008d;

    /* renamed from: e  reason: collision with root package name */
    private final int f49009e;

    /* renamed from: f  reason: collision with root package name */
    private final v.b f49010f;

    /* renamed from: g  reason: collision with root package name */
    private final o f49011g;

    /* renamed from: h  reason: collision with root package name */
    private final v f49012h;

    public l(String id2, Size size, double d10, Range targetFpsRange, int i10, v.b facingMode, o additionalOptions) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(size, "size");
        Intrinsics.checkNotNullParameter(targetFpsRange, "targetFpsRange");
        Intrinsics.checkNotNullParameter(facingMode, "facingMode");
        Intrinsics.checkNotNullParameter(additionalOptions, "additionalOptions");
        this.f49005a = id2;
        this.f49006b = size;
        this.f49007c = d10;
        this.f49008d = targetFpsRange;
        this.f49009e = i10;
        this.f49010f = facingMode;
        this.f49011g = additionalOptions;
        this.f49012h = new v(id2, facingMode, size, (int) d10);
    }

    public final o a() {
        return this.f49011g;
    }

    public final v b() {
        return this.f49012h;
    }

    public final v.b c() {
        return this.f49010f;
    }

    public final String d() {
        return this.f49005a;
    }

    public final int e() {
        return this.f49009e;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof l)) {
            return false;
        }
        l lVar = (l) obj;
        if (Intrinsics.areEqual(this.f49005a, lVar.f49005a) && Intrinsics.areEqual(this.f49006b, lVar.f49006b) && Double.compare(this.f49007c, lVar.f49007c) == 0 && Intrinsics.areEqual(this.f49008d, lVar.f49008d) && this.f49009e == lVar.f49009e && this.f49010f == lVar.f49010f && Intrinsics.areEqual(this.f49011g, lVar.f49011g)) {
            return true;
        }
        return false;
    }

    public final Size f() {
        return this.f49006b;
    }

    public final Range g() {
        return this.f49008d;
    }

    public int hashCode() {
        return (((((((((((this.f49005a.hashCode() * 31) + this.f49006b.hashCode()) * 31) + Double.hashCode(this.f49007c)) * 31) + this.f49008d.hashCode()) * 31) + Integer.hashCode(this.f49009e)) * 31) + this.f49010f.hashCode()) * 31) + this.f49011g.hashCode();
    }

    public String toString() {
        String str = this.f49005a;
        Size size = this.f49006b;
        double d10 = this.f49007c;
        Range range = this.f49008d;
        int i10 = this.f49009e;
        v.b bVar = this.f49010f;
        o oVar = this.f49011g;
        return "CameraChoice(id=" + str + ", size=" + size + ", maxFps=" + d10 + ", targetFpsRange=" + range + ", rotation=" + i10 + ", facingMode=" + bVar + ", additionalOptions=" + oVar + ")";
    }
}
