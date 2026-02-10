package xn;

import android.util.Range;
import android.util.Size;
import kotlin.jvm.internal.Intrinsics;
import vn.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    private final String f55215a;

    /* renamed from: b  reason: collision with root package name */
    private final Size f55216b;

    /* renamed from: c  reason: collision with root package name */
    private final double f55217c;

    /* renamed from: d  reason: collision with root package name */
    private final Range f55218d;

    /* renamed from: e  reason: collision with root package name */
    private final int f55219e;

    /* renamed from: f  reason: collision with root package name */
    private final v.b f55220f;

    /* renamed from: g  reason: collision with root package name */
    private final o f55221g;

    /* renamed from: h  reason: collision with root package name */
    private final v f55222h;

    public l(String id2, Size size, double d10, Range targetFpsRange, int i10, v.b facingMode, o additionalOptions) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(size, "size");
        Intrinsics.checkNotNullParameter(targetFpsRange, "targetFpsRange");
        Intrinsics.checkNotNullParameter(facingMode, "facingMode");
        Intrinsics.checkNotNullParameter(additionalOptions, "additionalOptions");
        this.f55215a = id2;
        this.f55216b = size;
        this.f55217c = d10;
        this.f55218d = targetFpsRange;
        this.f55219e = i10;
        this.f55220f = facingMode;
        this.f55221g = additionalOptions;
        this.f55222h = new v(id2, facingMode, size, (int) d10);
    }

    public final o a() {
        return this.f55221g;
    }

    public final v b() {
        return this.f55222h;
    }

    public final v.b c() {
        return this.f55220f;
    }

    public final String d() {
        return this.f55215a;
    }

    public final int e() {
        return this.f55219e;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof l)) {
            return false;
        }
        l lVar = (l) obj;
        if (Intrinsics.areEqual(this.f55215a, lVar.f55215a) && Intrinsics.areEqual(this.f55216b, lVar.f55216b) && Double.compare(this.f55217c, lVar.f55217c) == 0 && Intrinsics.areEqual(this.f55218d, lVar.f55218d) && this.f55219e == lVar.f55219e && this.f55220f == lVar.f55220f && Intrinsics.areEqual(this.f55221g, lVar.f55221g)) {
            return true;
        }
        return false;
    }

    public final Size f() {
        return this.f55216b;
    }

    public final Range g() {
        return this.f55218d;
    }

    public int hashCode() {
        return (((((((((((this.f55215a.hashCode() * 31) + this.f55216b.hashCode()) * 31) + Double.hashCode(this.f55217c)) * 31) + this.f55218d.hashCode()) * 31) + Integer.hashCode(this.f55219e)) * 31) + this.f55220f.hashCode()) * 31) + this.f55221g.hashCode();
    }

    public String toString() {
        String str = this.f55215a;
        Size size = this.f55216b;
        double d10 = this.f55217c;
        Range range = this.f55218d;
        int i10 = this.f55219e;
        v.b bVar = this.f55220f;
        o oVar = this.f55221g;
        return "CameraChoice(id=" + str + ", size=" + size + ", maxFps=" + d10 + ", targetFpsRange=" + range + ", rotation=" + i10 + ", facingMode=" + bVar + ", additionalOptions=" + oVar + ")";
    }
}
