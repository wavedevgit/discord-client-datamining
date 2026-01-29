package com.otaliastudios.zoom;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class AbsolutePoint {

    /* renamed from: a  reason: collision with root package name */
    private float f18266a;

    /* renamed from: b  reason: collision with root package name */
    private float f18267b;

    public AbsolutePoint(float f10, float f11) {
        this.f18266a = f10;
        this.f18267b = f11;
    }

    public static /* synthetic */ AbsolutePoint b(AbsolutePoint absolutePoint, float f10, float f11, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            f10 = absolutePoint.f18266a;
        }
        if ((i10 & 2) != 0) {
            f11 = absolutePoint.f18267b;
        }
        return absolutePoint.a(f10, f11);
    }

    public static /* synthetic */ ScaledPoint j(AbsolutePoint absolutePoint, float f10, ScaledPoint scaledPoint, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            scaledPoint = new ScaledPoint(0.0f, 0.0f, 3, null);
        }
        return absolutePoint.i(f10, scaledPoint);
    }

    public final AbsolutePoint a(float f10, float f11) {
        return new AbsolutePoint(f10, f11);
    }

    public final float c() {
        return this.f18266a;
    }

    public final float d() {
        return this.f18267b;
    }

    public final AbsolutePoint e(AbsolutePoint absolutePoint) {
        Intrinsics.checkNotNullParameter(absolutePoint, "absolutePoint");
        return new AbsolutePoint(this.f18266a - absolutePoint.f18266a, this.f18267b - absolutePoint.f18267b);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof AbsolutePoint) {
            AbsolutePoint absolutePoint = (AbsolutePoint) obj;
            return Intrinsics.areEqual((Object) Float.valueOf(this.f18266a), (Object) Float.valueOf(absolutePoint.f18266a)) && Intrinsics.areEqual((Object) Float.valueOf(this.f18267b), (Object) Float.valueOf(absolutePoint.f18267b));
        }
        return false;
    }

    public final AbsolutePoint f(AbsolutePoint absolutePoint) {
        Intrinsics.checkNotNullParameter(absolutePoint, "absolutePoint");
        return new AbsolutePoint(this.f18266a + absolutePoint.f18266a, this.f18267b + absolutePoint.f18267b);
    }

    public final void g(AbsolutePoint p10) {
        Intrinsics.checkNotNullParameter(p10, "p");
        h(Float.valueOf(p10.f18266a), Float.valueOf(p10.f18267b));
    }

    public final void h(Number x10, Number y10) {
        Intrinsics.checkNotNullParameter(x10, "x");
        Intrinsics.checkNotNullParameter(y10, "y");
        this.f18266a = x10.floatValue();
        this.f18267b = y10.floatValue();
    }

    public int hashCode() {
        return (Float.hashCode(this.f18266a) * 31) + Float.hashCode(this.f18267b);
    }

    public final ScaledPoint i(float f10, ScaledPoint outPoint) {
        Intrinsics.checkNotNullParameter(outPoint, "outPoint");
        outPoint.g(Float.valueOf(this.f18266a * f10), Float.valueOf(this.f18267b * f10));
        return outPoint;
    }

    public String toString() {
        return "AbsolutePoint(x=" + this.f18266a + ", y=" + this.f18267b + ')';
    }

    public /* synthetic */ AbsolutePoint(float f10, float f11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? 0.0f : f10, (i10 & 2) != 0 ? 0.0f : f11);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public AbsolutePoint(AbsolutePoint point) {
        this(point.f18266a, point.f18267b);
        Intrinsics.checkNotNullParameter(point, "point");
    }
}
