package ao;

import android.content.Context;
import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import ao.a;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements ao.a {

    /* renamed from: a  reason: collision with root package name */
    private final SensorManager f5924a;

    /* renamed from: b  reason: collision with root package name */
    private final Sensor f5925b;

    /* renamed from: c  reason: collision with root package name */
    private long f5926c;

    /* renamed from: d  reason: collision with root package name */
    private double f5927d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f5928e;

    /* renamed from: f  reason: collision with root package name */
    private final a f5929f;

    public b(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        Object systemService = context.getSystemService("sensor");
        Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.hardware.SensorManager");
        SensorManager sensorManager = (SensorManager) systemService;
        this.f5924a = sensorManager;
        this.f5925b = sensorManager.getDefaultSensor(4);
        this.f5929f = new a();
    }

    @Override // ao.a
    public a.C0084a a() {
        double d10;
        long j10 = this.f5926c;
        if (j10 == 0) {
            d10 = 0.0d;
        } else {
            d10 = this.f5927d / j10;
        }
        return new a.C0084a(d10);
    }

    @Override // ao.a
    public void b() {
        this.f5924a.unregisterListener(this.f5929f);
    }

    @Override // ao.a
    public void c() {
        if (!this.f5928e) {
            this.f5928e = true;
            Sensor sensor = this.f5925b;
            if (sensor != null) {
                this.f5924a.registerListener(this.f5929f, sensor, 100000);
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
                bVar.f5927d = ((bVar.f5927d * b.this.f5926c) + (((Math.abs(f10) + Math.abs(f11)) + Math.abs(f12)) / 3.0d)) / (b.this.f5926c + 1);
                b.this.f5926c++;
            }
        }

        @Override // android.hardware.SensorEventListener
        public void onAccuracyChanged(Sensor sensor, int i10) {
        }
    }
}
