package ko;

import android.content.Context;
import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import ko.a;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements ko.a {

    /* renamed from: a  reason: collision with root package name */
    private final SensorManager f32543a;

    /* renamed from: b  reason: collision with root package name */
    private final Sensor f32544b;

    /* renamed from: c  reason: collision with root package name */
    private long f32545c;

    /* renamed from: d  reason: collision with root package name */
    private double f32546d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f32547e;

    /* renamed from: f  reason: collision with root package name */
    private final a f32548f;

    public b(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        Object systemService = context.getSystemService("sensor");
        Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.hardware.SensorManager");
        SensorManager sensorManager = (SensorManager) systemService;
        this.f32543a = sensorManager;
        this.f32544b = sensorManager.getDefaultSensor(4);
        this.f32548f = new a();
    }

    @Override // ko.a
    public a.C0451a a() {
        double d10;
        long j10 = this.f32545c;
        if (j10 == 0) {
            d10 = 0.0d;
        } else {
            d10 = this.f32546d / j10;
        }
        return new a.C0451a(d10);
    }

    @Override // ko.a
    public void b() {
        this.f32543a.unregisterListener(this.f32548f);
    }

    @Override // ko.a
    public void c() {
        if (!this.f32547e) {
            this.f32547e = true;
            Sensor sensor = this.f32544b;
            if (sensor != null) {
                this.f32543a.registerListener(this.f32548f, sensor, 100000);
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
                bVar.f32546d = ((bVar.f32546d * b.this.f32545c) + (((Math.abs(f10) + Math.abs(f11)) + Math.abs(f12)) / 3.0d)) / (b.this.f32545c + 1);
                b.this.f32545c++;
            }
        }

        @Override // android.hardware.SensorEventListener
        public void onAccuracyChanged(Sensor sensor, int i10) {
        }
    }
}
