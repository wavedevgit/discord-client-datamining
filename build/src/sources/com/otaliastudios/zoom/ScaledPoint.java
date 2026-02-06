package com.otaliastudios.zoom;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ScaledPoint {

    /* renamed from: a  reason: collision with root package name */
    private float f17263a;

    /* renamed from: b  reason: collision with root package name */
    private float f17264b;

    public ScaledPoint(float f10, float f11) {
        this.f17263a = f10;
        this.f17264b = f11;
    }

    public static /* synthetic */ ScaledPoint b(ScaledPoint scaledPoint, float f10, float f11, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            f10 = scaledPoint.f17263a;
        }
        if ((i10 & 2) != 0) {
            f11 = scaledPoint.f17264b;
        }
        return scaledPoint.a(f10, f11);
    }

    public static /* synthetic */ AbsolutePoint k(ScaledPoint scaledPoint, float f10, AbsolutePoint absolutePoint, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            absolutePoint = new AbsolutePoint(0.0f, 0.0f, 3, null);
        }
        return scaledPoint.j(f10, absolutePoint);
    }

    public final ScaledPoint a(float f10, float f11) {
        return new ScaledPoint(f10, f11);
    }

    public final float c() {
        return this.f17263a;
    }

    public final float d() {
        return this.f17264b;
    }

    public final ScaledPoint e(ScaledPoint scaledPoint) {
        Intrinsics.checkNotNullParameter(scaledPoint, "scaledPoint");
        return new ScaledPoint(this.f17263a - scaledPoint.f17263a, this.f17264b - scaledPoint.f17264b);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ScaledPoint) {
            ScaledPoint scaledPoint = (ScaledPoint) obj;
            return Intrinsics.areEqual((Object) Float.valueOf(this.f17263a), (Object) Float.valueOf(scaledPoint.f17263a)) && Intrinsics.areEqual((Object) Float.valueOf(this.f17264b), (Object) Float.valueOf(scaledPoint.f17264b));
        }
        return false;
    }

    public final ScaledPoint f(ScaledPoint scaledPoint) {
        Intrinsics.checkNotNullParameter(scaledPoint, "scaledPoint");
        return new ScaledPoint(this.f17263a + scaledPoint.f17263a, this.f17264b + scaledPoint.f17264b);
    }

    public final void g(Number x10, Number y10) {
        Intrinsics.checkNotNullParameter(x10, "x");
        Intrinsics.checkNotNullParameter(y10, "y");
        this.f17263a = x10.floatValue();
        this.f17264b = y10.floatValue();
    }

    public final void h(float f10) {
        this.f17263a = f10;
    }

    public int hashCode() {
        return (Float.hashCode(this.f17263a) * 31) + Float.hashCode(this.f17264b);
    }

    public final void i(float f10) {
        this.f17264b = f10;
    }

    public final AbsolutePoint j(float f10, AbsolutePoint outPoint) {
        Intrinsics.checkNotNullParameter(outPoint, "outPoint");
        outPoint.h(Float.valueOf(this.f17263a / f10), Float.valueOf(this.f17264b / f10));
        return outPoint;
    }

    public String toString() {
        return "ScaledPoint(x=" + this.f17263a + ", y=" + this.f17264b + ')';
    }

    public /* synthetic */ ScaledPoint(float f10, float f11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? 0.0f : f10, (i10 & 2) != 0 ? 0.0f : f11);
    }
}
