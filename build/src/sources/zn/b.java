package zn;

import android.content.Context;
import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import kotlin.jvm.internal.Intrinsics;
import zn.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements zn.a {

    /* renamed from: a  reason: collision with root package name */
    private final SensorManager f56403a;

    /* renamed from: b  reason: collision with root package name */
    private final Sensor f56404b;

    /* renamed from: c  reason: collision with root package name */
    private long f56405c;

    /* renamed from: d  reason: collision with root package name */
    private double f56406d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f56407e;

    /* renamed from: f  reason: collision with root package name */
    private final a f56408f;

    public b(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        Object systemService = context.getSystemService("sensor");
        Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.hardware.SensorManager");
        SensorManager sensorManager = (SensorManager) systemService;
        this.f56403a = sensorManager;
        this.f56404b = sensorManager.getDefaultSensor(4);
        this.f56408f = new a();
    }

    @Override // zn.a
    public a.C0775a a() {
        double d10;
        long j10 = this.f56405c;
        if (j10 == 0) {
            d10 = 0.0d;
        } else {
            d10 = this.f56406d / j10;
        }
        return new a.C0775a(d10);
    }

    @Override // zn.a
    public void b() {
        this.f56403a.unregisterListener(this.f56408f);
    }

    @Override // zn.a
    public void c() {
        if (!this.f56407e) {
            this.f56407e = true;
            Sensor sensor = this.f56404b;
            if (sensor != null) {
                this.f56403a.registerListener(this.f56408f, sensor, 100000);
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
                bVar.f56406d = ((bVar.f56406d * b.this.f56405c) + (((Math.abs(f10) + Math.abs(f11)) + Math.abs(f12)) / 3.0d)) / (b.this.f56405c + 1);
                b.this.f56405c++;
            }
        }

        @Override // android.hardware.SensorEventListener
        public void onAccuracyChanged(Sensor sensor, int i10) {
        }
    }
}
