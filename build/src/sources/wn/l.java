package wn;

import android.util.Range;
import android.util.Size;
import kotlin.jvm.internal.Intrinsics;
import un.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    private final String f54004a;

    /* renamed from: b  reason: collision with root package name */
    private final Size f54005b;

    /* renamed from: c  reason: collision with root package name */
    private final double f54006c;

    /* renamed from: d  reason: collision with root package name */
    private final Range f54007d;

    /* renamed from: e  reason: collision with root package name */
    private final int f54008e;

    /* renamed from: f  reason: collision with root package name */
    private final v.b f54009f;

    /* renamed from: g  reason: collision with root package name */
    private final o f54010g;

    /* renamed from: h  reason: collision with root package name */
    private final v f54011h;

    public l(String id2, Size size, double d10, Range targetFpsRange, int i10, v.b facingMode, o additionalOptions) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(size, "size");
        Intrinsics.checkNotNullParameter(targetFpsRange, "targetFpsRange");
        Intrinsics.checkNotNullParameter(facingMode, "facingMode");
        Intrinsics.checkNotNullParameter(additionalOptions, "additionalOptions");
        this.f54004a = id2;
        this.f54005b = size;
        this.f54006c = d10;
        this.f54007d = targetFpsRange;
        this.f54008e = i10;
        this.f54009f = facingMode;
        this.f54010g = additionalOptions;
        this.f54011h = new v(id2, facingMode, size, (int) d10);
    }

    public final o a() {
        return this.f54010g;
    }

    public final v b() {
        return this.f54011h;
    }

    public final v.b c() {
        return this.f54009f;
    }

    public final String d() {
        return this.f54004a;
    }

    public final int e() {
        return this.f54008e;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof l)) {
            return false;
        }
        l lVar = (l) obj;
        if (Intrinsics.areEqual(this.f54004a, lVar.f54004a) && Intrinsics.areEqual(this.f54005b, lVar.f54005b) && Double.compare(this.f54006c, lVar.f54006c) == 0 && Intrinsics.areEqual(this.f54007d, lVar.f54007d) && this.f54008e == lVar.f54008e && this.f54009f == lVar.f54009f && Intrinsics.areEqual(this.f54010g, lVar.f54010g)) {
            return true;
        }
        return false;
    }

    public final Size f() {
        return this.f54005b;
    }

    public final Range g() {
        return this.f54007d;
    }

    public int hashCode() {
        return (((((((((((this.f54004a.hashCode() * 31) + this.f54005b.hashCode()) * 31) + Double.hashCode(this.f54006c)) * 31) + this.f54007d.hashCode()) * 31) + Integer.hashCode(this.f54008e)) * 31) + this.f54009f.hashCode()) * 31) + this.f54010g.hashCode();
    }

    public String toString() {
        String str = this.f54004a;
        Size size = this.f54005b;
        double d10 = this.f54006c;
        Range range = this.f54007d;
        int i10 = this.f54008e;
        v.b bVar = this.f54009f;
        o oVar = this.f54010g;
        return "CameraChoice(id=" + str + ", size=" + size + ", maxFps=" + d10 + ", targetFpsRange=" + range + ", rotation=" + i10 + ", facingMode=" + bVar + ", additionalOptions=" + oVar + ")";
    }
}
