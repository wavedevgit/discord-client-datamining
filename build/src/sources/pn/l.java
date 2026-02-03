package pn;

import android.util.Range;
import android.util.Size;
import kotlin.jvm.internal.Intrinsics;
import nn.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    private final String f46369a;

    /* renamed from: b  reason: collision with root package name */
    private final Size f46370b;

    /* renamed from: c  reason: collision with root package name */
    private final double f46371c;

    /* renamed from: d  reason: collision with root package name */
    private final Range f46372d;

    /* renamed from: e  reason: collision with root package name */
    private final int f46373e;

    /* renamed from: f  reason: collision with root package name */
    private final v.b f46374f;

    /* renamed from: g  reason: collision with root package name */
    private final o f46375g;

    /* renamed from: h  reason: collision with root package name */
    private final v f46376h;

    public l(String id2, Size size, double d10, Range targetFpsRange, int i10, v.b facingMode, o additionalOptions) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(size, "size");
        Intrinsics.checkNotNullParameter(targetFpsRange, "targetFpsRange");
        Intrinsics.checkNotNullParameter(facingMode, "facingMode");
        Intrinsics.checkNotNullParameter(additionalOptions, "additionalOptions");
        this.f46369a = id2;
        this.f46370b = size;
        this.f46371c = d10;
        this.f46372d = targetFpsRange;
        this.f46373e = i10;
        this.f46374f = facingMode;
        this.f46375g = additionalOptions;
        this.f46376h = new v(id2, facingMode, size, (int) d10);
    }

    public final o a() {
        return this.f46375g;
    }

    public final v b() {
        return this.f46376h;
    }

    public final v.b c() {
        return this.f46374f;
    }

    public final String d() {
        return this.f46369a;
    }

    public final int e() {
        return this.f46373e;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof l)) {
            return false;
        }
        l lVar = (l) obj;
        if (Intrinsics.areEqual(this.f46369a, lVar.f46369a) && Intrinsics.areEqual(this.f46370b, lVar.f46370b) && Double.compare(this.f46371c, lVar.f46371c) == 0 && Intrinsics.areEqual(this.f46372d, lVar.f46372d) && this.f46373e == lVar.f46373e && this.f46374f == lVar.f46374f && Intrinsics.areEqual(this.f46375g, lVar.f46375g)) {
            return true;
        }
        return false;
    }

    public final Size f() {
        return this.f46370b;
    }

    public final Range g() {
        return this.f46372d;
    }

    public int hashCode() {
        return (((((((((((this.f46369a.hashCode() * 31) + this.f46370b.hashCode()) * 31) + Double.hashCode(this.f46371c)) * 31) + this.f46372d.hashCode()) * 31) + Integer.hashCode(this.f46373e)) * 31) + this.f46374f.hashCode()) * 31) + this.f46375g.hashCode();
    }

    public String toString() {
        String str = this.f46369a;
        Size size = this.f46370b;
        double d10 = this.f46371c;
        Range range = this.f46372d;
        int i10 = this.f46373e;
        v.b bVar = this.f46374f;
        o oVar = this.f46375g;
        return "CameraChoice(id=" + str + ", size=" + size + ", maxFps=" + d10 + ", targetFpsRange=" + range + ", rotation=" + i10 + ", facingMode=" + bVar + ", additionalOptions=" + oVar + ")";
    }
}
