package on;

import android.util.Range;
import android.util.Size;
import kotlin.jvm.internal.Intrinsics;
import mn.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    private final String f44579a;

    /* renamed from: b  reason: collision with root package name */
    private final Size f44580b;

    /* renamed from: c  reason: collision with root package name */
    private final double f44581c;

    /* renamed from: d  reason: collision with root package name */
    private final Range f44582d;

    /* renamed from: e  reason: collision with root package name */
    private final int f44583e;

    /* renamed from: f  reason: collision with root package name */
    private final v.b f44584f;

    /* renamed from: g  reason: collision with root package name */
    private final o f44585g;

    /* renamed from: h  reason: collision with root package name */
    private final v f44586h;

    public l(String id2, Size size, double d10, Range targetFpsRange, int i10, v.b facingMode, o additionalOptions) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(size, "size");
        Intrinsics.checkNotNullParameter(targetFpsRange, "targetFpsRange");
        Intrinsics.checkNotNullParameter(facingMode, "facingMode");
        Intrinsics.checkNotNullParameter(additionalOptions, "additionalOptions");
        this.f44579a = id2;
        this.f44580b = size;
        this.f44581c = d10;
        this.f44582d = targetFpsRange;
        this.f44583e = i10;
        this.f44584f = facingMode;
        this.f44585g = additionalOptions;
        this.f44586h = new v(id2, facingMode, size, (int) d10);
    }

    public final o a() {
        return this.f44585g;
    }

    public final v b() {
        return this.f44586h;
    }

    public final v.b c() {
        return this.f44584f;
    }

    public final String d() {
        return this.f44579a;
    }

    public final int e() {
        return this.f44583e;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof l)) {
            return false;
        }
        l lVar = (l) obj;
        if (Intrinsics.areEqual(this.f44579a, lVar.f44579a) && Intrinsics.areEqual(this.f44580b, lVar.f44580b) && Double.compare(this.f44581c, lVar.f44581c) == 0 && Intrinsics.areEqual(this.f44582d, lVar.f44582d) && this.f44583e == lVar.f44583e && this.f44584f == lVar.f44584f && Intrinsics.areEqual(this.f44585g, lVar.f44585g)) {
            return true;
        }
        return false;
    }

    public final Size f() {
        return this.f44580b;
    }

    public final Range g() {
        return this.f44582d;
    }

    public int hashCode() {
        return (((((((((((this.f44579a.hashCode() * 31) + this.f44580b.hashCode()) * 31) + Double.hashCode(this.f44581c)) * 31) + this.f44582d.hashCode()) * 31) + Integer.hashCode(this.f44583e)) * 31) + this.f44584f.hashCode()) * 31) + this.f44585g.hashCode();
    }

    public String toString() {
        String str = this.f44579a;
        Size size = this.f44580b;
        double d10 = this.f44581c;
        Range range = this.f44582d;
        int i10 = this.f44583e;
        v.b bVar = this.f44584f;
        o oVar = this.f44585g;
        return "CameraChoice(id=" + str + ", size=" + size + ", maxFps=" + d10 + ", targetFpsRange=" + range + ", rotation=" + i10 + ", facingMode=" + bVar + ", additionalOptions=" + oVar + ")";
    }
}
