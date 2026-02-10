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
    private final SensorManager f31974a;

    /* renamed from: b  reason: collision with root package name */
    private final Sensor f31975b;

    /* renamed from: c  reason: collision with root package name */
    private long f31976c;

    /* renamed from: d  reason: collision with root package name */
    private double f31977d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f31978e;

    /* renamed from: f  reason: collision with root package name */
    private final a f31979f;

    public b(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        Object systemService = context.getSystemService("sensor");
        Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.hardware.SensorManager");
        SensorManager sensorManager = (SensorManager) systemService;
        this.f31974a = sensorManager;
        this.f31975b = sensorManager.getDefaultSensor(4);
        this.f31979f = new a();
    }

    @Override // ko.a
    public a.C0451a a() {
        double d10;
        long j10 = this.f31976c;
        if (j10 == 0) {
            d10 = 0.0d;
        } else {
            d10 = this.f31977d / j10;
        }
        return new a.C0451a(d10);
    }

    @Override // ko.a
    public void b() {
        this.f31974a.unregisterListener(this.f31979f);
    }

    @Override // ko.a
    public void c() {
        if (!this.f31978e) {
            this.f31978e = true;
            Sensor sensor = this.f31975b;
            if (sensor != null) {
                this.f31974a.registerListener(this.f31979f, sensor, 100000);
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
                bVar.f31977d = ((bVar.f31977d * b.this.f31976c) + (((Math.abs(f10) + Math.abs(f11)) + Math.abs(f12)) / 3.0d)) / (b.this.f31976c + 1);
                b.this.f31976c++;
            }
        }

        @Override // android.hardware.SensorEventListener
        public void onAccuracyChanged(Sensor sensor, int i10) {
        }
    }
}
