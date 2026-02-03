package un;

import android.content.Context;
import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import kotlin.jvm.internal.Intrinsics;
import un.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements un.a {

    /* renamed from: a  reason: collision with root package name */
    private final SensorManager f50758a;

    /* renamed from: b  reason: collision with root package name */
    private final Sensor f50759b;

    /* renamed from: c  reason: collision with root package name */
    private long f50760c;

    /* renamed from: d  reason: collision with root package name */
    private double f50761d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f50762e;

    /* renamed from: f  reason: collision with root package name */
    private final a f50763f;

    public b(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        Object systemService = context.getSystemService("sensor");
        Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.hardware.SensorManager");
        SensorManager sensorManager = (SensorManager) systemService;
        this.f50758a = sensorManager;
        this.f50759b = sensorManager.getDefaultSensor(4);
        this.f50763f = new a();
    }

    @Override // un.a
    public a.C0638a a() {
        double d10;
        long j10 = this.f50760c;
        if (j10 == 0) {
            d10 = 0.0d;
        } else {
            d10 = this.f50761d / j10;
        }
        return new a.C0638a(d10);
    }

    @Override // un.a
    public void b() {
        this.f50758a.unregisterListener(this.f50763f);
    }

    @Override // un.a
    public void c() {
        if (!this.f50762e) {
            this.f50762e = true;
            Sensor sensor = this.f50759b;
            if (sensor != null) {
                this.f50758a.registerListener(this.f50763f, sensor, 100000);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements SensorEventListener {
        a() {
        }

        @Override // android.hardware.SensorEventListener
        public void onSensorChanged(SensorEvent sensorEvent) {
            float[] fArr;
            if (sensorEvent != null && (fArr = sensorEvent.values) != null && fArr.length >= 3) {
                float f10 = fArr[0];
                float f11 = fArr[1];
                float f12 = fArr[2];
                b bVar = b.this;
                bVar.f50761d = ((bVar.f50761d * b.this.f50760c) + (((Math.abs(f10) + Math.abs(f11)) + Math.abs(f12)) / 3.0d)) / (b.this.f50760c + 1);
                b.this.f50760c++;
            }
        }

        @Override // android.hardware.SensorEventListener
        public void onAccuracyChanged(Sensor sensor, int i10) {
        }
    }
}
