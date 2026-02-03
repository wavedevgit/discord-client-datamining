package fn;

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
    public static final a f24253f = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final double f24254a;

    /* renamed from: b  reason: collision with root package name */
    private final double f24255b;

    /* renamed from: c  reason: collision with root package name */
    private final double f24256c;

    /* renamed from: d  reason: collision with root package name */
    private final double f24257d;

    /* renamed from: e  reason: collision with root package name */
    private final double f24258e;

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
        this.f24254a = d10;
        this.f24255b = d11;
        this.f24256c = d12;
        this.f24257d = d13;
        this.f24258e = d14;
    }

    public final double a() {
        return this.f24258e;
    }

    public final ReadableMap b() {
        WritableMap createMap = Arguments.createMap();
        createMap.putDouble("tiltX", this.f24254a);
        createMap.putDouble("tiltY", this.f24255b);
        createMap.putDouble("altitudeAngle", this.f24256c);
        createMap.putDouble("azimuthAngle", this.f24257d);
        createMap.putDouble("pressure", this.f24258e);
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
        if (Double.compare(this.f24254a, zVar.f24254a) == 0 && Double.compare(this.f24255b, zVar.f24255b) == 0 && Double.compare(this.f24256c, zVar.f24256c) == 0 && Double.compare(this.f24257d, zVar.f24257d) == 0 && Double.compare(this.f24258e, zVar.f24258e) == 0) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((((Double.hashCode(this.f24254a) * 31) + Double.hashCode(this.f24255b)) * 31) + Double.hashCode(this.f24256c)) * 31) + Double.hashCode(this.f24257d)) * 31) + Double.hashCode(this.f24258e);
    }

    public String toString() {
        double d10 = this.f24254a;
        double d11 = this.f24255b;
        double d12 = this.f24256c;
        double d13 = this.f24257d;
        double d14 = this.f24258e;
        return "StylusData(tiltX=" + d10 + ", tiltY=" + d11 + ", altitudeAngle=" + d12 + ", azimuthAngle=" + d13 + ", pressure=" + d14 + ")";
    }

    public /* synthetic */ z(double d10, double d11, double d12, double d13, double d14, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? 0.0d : d10, (i10 & 2) != 0 ? 0.0d : d11, (i10 & 4) != 0 ? 0.0d : d12, (i10 & 8) != 0 ? 0.0d : d13, (i10 & 16) != 0 ? -1.0d : d14);
    }
}
