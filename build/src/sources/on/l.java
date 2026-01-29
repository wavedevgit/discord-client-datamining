package on;

import android.util.Range;
import android.util.Size;
import kotlin.jvm.internal.Intrinsics;
import mn.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    private final String f44563a;

    /* renamed from: b  reason: collision with root package name */
    private final Size f44564b;

    /* renamed from: c  reason: collision with root package name */
    private final double f44565c;

    /* renamed from: d  reason: collision with root package name */
    private final Range f44566d;

    /* renamed from: e  reason: collision with root package name */
    private final int f44567e;

    /* renamed from: f  reason: collision with root package name */
    private final v.b f44568f;

    /* renamed from: g  reason: collision with root package name */
    private final o f44569g;

    /* renamed from: h  reason: collision with root package name */
    private final v f44570h;

    public l(String id2, Size size, double d10, Range targetFpsRange, int i10, v.b facingMode, o additionalOptions) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(size, "size");
        Intrinsics.checkNotNullParameter(targetFpsRange, "targetFpsRange");
        Intrinsics.checkNotNullParameter(facingMode, "facingMode");
        Intrinsics.checkNotNullParameter(additionalOptions, "additionalOptions");
        this.f44563a = id2;
        this.f44564b = size;
        this.f44565c = d10;
        this.f44566d = targetFpsRange;
        this.f44567e = i10;
        this.f44568f = facingMode;
        this.f44569g = additionalOptions;
        this.f44570h = new v(id2, facingMode, size, (int) d10);
    }

    public final o a() {
        return this.f44569g;
    }

    public final v b() {
        return this.f44570h;
    }

    public final v.b c() {
        return this.f44568f;
    }

    public final String d() {
        return this.f44563a;
    }

    public final int e() {
        return this.f44567e;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof l)) {
            return false;
        }
        l lVar = (l) obj;
        if (Intrinsics.areEqual(this.f44563a, lVar.f44563a) && Intrinsics.areEqual(this.f44564b, lVar.f44564b) && Double.compare(this.f44565c, lVar.f44565c) == 0 && Intrinsics.areEqual(this.f44566d, lVar.f44566d) && this.f44567e == lVar.f44567e && this.f44568f == lVar.f44568f && Intrinsics.areEqual(this.f44569g, lVar.f44569g)) {
            return true;
        }
        return false;
    }

    public final Size f() {
        return this.f44564b;
    }

    public final Range g() {
        return this.f44566d;
    }

    public int hashCode() {
        return (((((((((((this.f44563a.hashCode() * 31) + this.f44564b.hashCode()) * 31) + Double.hashCode(this.f44565c)) * 31) + this.f44566d.hashCode()) * 31) + Integer.hashCode(this.f44567e)) * 31) + this.f44568f.hashCode()) * 31) + this.f44569g.hashCode();
    }

    public String toString() {
        String str = this.f44563a;
        Size size = this.f44564b;
        double d10 = this.f44565c;
        Range range = this.f44566d;
        int i10 = this.f44567e;
        v.b bVar = this.f44568f;
        o oVar = this.f44569g;
        return "CameraChoice(id=" + str + ", size=" + size + ", maxFps=" + d10 + ", targetFpsRange=" + range + ", rotation=" + i10 + ", facingMode=" + bVar + ", additionalOptions=" + oVar + ")";
    }
}
