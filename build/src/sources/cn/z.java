package cn;

import android.view.MotionEvent;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import kotlin.Pair;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class z {

    /* renamed from: f  reason: collision with root package name */
    public static final a f8698f = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final double f8699a;

    /* renamed from: b  reason: collision with root package name */
    private final double f8700b;

    /* renamed from: c  reason: collision with root package name */
    private final double f8701c;

    /* renamed from: d  reason: collision with root package name */
    private final double f8702d;

    /* renamed from: e  reason: collision with root package name */
    private final double f8703e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final Pair b(double d10, double d11) {
            double atan;
            double atan2;
            double d12;
            if (d10 < 1.0E-9d) {
                atan = 1.5707963267948966d;
                double d13 = 0.0d;
                if (d11 >= 1.0E-9d && Math.abs(d11 - 6.283185307179586d) >= 1.0E-9d) {
                    d12 = 0.0d;
                } else {
                    d12 = 1.5707963267948966d;
                }
                double d14 = d11 - 1.5707963267948966d;
                if (Math.abs(d14) < 1.0E-9d) {
                    d13 = 1.5707963267948966d;
                }
                double d15 = d11 - 3.141592653589793d;
                atan2 = -1.5707963267948966d;
                if (Math.abs(d15) < 1.0E-9d) {
                    d12 = -1.5707963267948966d;
                }
                double d16 = d11 - 4.71238898038469d;
                if (Math.abs(d16) < 1.0E-9d) {
                    d13 = -1.5707963267948966d;
                }
                if (d11 > 1.0E-9d && Math.abs(d14) < 1.0E-9d) {
                    d13 = 1.5707963267948966d;
                    d12 = 1.5707963267948966d;
                }
                if (Math.abs(d14) > 1.0E-9d && Math.abs(d15) < 1.0E-9d) {
                    d13 = 1.5707963267948966d;
                    d12 = -1.5707963267948966d;
                }
                if (Math.abs(d15) > 1.0E-9d && Math.abs(d16) < 1.0E-9d) {
                    d13 = -1.5707963267948966d;
                    d12 = -1.5707963267948966d;
                }
                if (Math.abs(d16) <= 1.0E-9d || Math.abs(d11 - 6.283185307179586d) >= 1.0E-9d) {
                    atan2 = d13;
                    atan = d12;
                }
            } else {
                double tan = Math.tan(d10);
                atan = Math.atan(Math.cos(d11) / tan);
                atan2 = Math.atan(Math.sin(d11) / tan);
            }
            return new Pair(Double.valueOf(Math.rint(atan * 57.29577951308232d)), Double.valueOf(Math.rint(atan2 * 57.29577951308232d)));
        }

        public final z a(MotionEvent event) {
            Intrinsics.checkNotNullParameter(event, "event");
            double axisValue = 1.5707963267948966d - event.getAxisValue(25);
            double pressure = event.getPressure(0);
            double orientation = (event.getOrientation(0) + 1.5707963267948966d) % 6.283185307179586d;
            if (orientation != 0.0d && Math.signum(orientation) != Math.signum(6.283185307179586d)) {
                orientation += 6.283185307179586d;
            }
            double d10 = orientation;
            Pair b10 = b(axisValue, d10);
            return new z(((Number) b10.c()).doubleValue(), ((Number) b10.d()).doubleValue(), axisValue, d10, pressure);
        }

        private a() {
        }
    }

    public z(double d10, double d11, double d12, double d13, double d14) {
        this.f8699a = d10;
        this.f8700b = d11;
        this.f8701c = d12;
        this.f8702d = d13;
        this.f8703e = d14;
    }

    public final double a() {
        return this.f8703e;
    }

    public final ReadableMap b() {
        WritableMap createMap = Arguments.createMap();
        createMap.putDouble("tiltX", this.f8699a);
        createMap.putDouble("tiltY", this.f8700b);
        createMap.putDouble("altitudeAngle", this.f8701c);
        createMap.putDouble("azimuthAngle", this.f8702d);
        createMap.putDouble("pressure", this.f8703e);
        Intrinsics.checkNotNullExpressionValue(createMap, "apply(...)");
        return createMap;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof z)) {
            return false;
        }
        z zVar = (z) obj;
        if (Double.compare(this.f8699a, zVar.f8699a) == 0 && Double.compare(this.f8700b, zVar.f8700b) == 0 && Double.compare(this.f8701c, zVar.f8701c) == 0 && Double.compare(this.f8702d, zVar.f8702d) == 0 && Double.compare(this.f8703e, zVar.f8703e) == 0) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((((Double.hashCode(this.f8699a) * 31) + Double.hashCode(this.f8700b)) * 31) + Double.hashCode(this.f8701c)) * 31) + Double.hashCode(this.f8702d)) * 31) + Double.hashCode(this.f8703e);
    }

    public String toString() {
        double d10 = this.f8699a;
        double d11 = this.f8700b;
        double d12 = this.f8701c;
        double d13 = this.f8702d;
        double d14 = this.f8703e;
        return "StylusData(tiltX=" + d10 + ", tiltY=" + d11 + ", altitudeAngle=" + d12 + ", azimuthAngle=" + d13 + ", pressure=" + d14 + ")";
    }

    public /* synthetic */ z(double d10, double d11, double d12, double d13, double d14, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? 0.0d : d10, (i10 & 2) != 0 ? 0.0d : d11, (i10 & 4) != 0 ? 0.0d : d12, (i10 & 8) != 0 ? 0.0d : d13, (i10 & 16) != 0 ? -1.0d : d14);
    }
}
