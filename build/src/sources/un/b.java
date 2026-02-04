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
    private final SensorManager f50755a;

    /* renamed from: b  reason: collision with root package name */
    private final Sensor f50756b;

    /* renamed from: c  reason: collision with root package name */
    private long f50757c;

    /* renamed from: d  reason: collision with root package name */
    private double f50758d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f50759e;

    /* renamed from: f  reason: collision with root package name */
    private final a f50760f;

    public b(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        Object systemService = context.getSystemService("sensor");
        Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.hardware.SensorManager");
        SensorManager sensorManager = (SensorManager) systemService;
        this.f50755a = sensorManager;
        this.f50756b = sensorManager.getDefaultSensor(4);
        this.f50760f = new a();
    }

    @Override // un.a
    public a.C0638a a() {
        double d10;
        long j10 = this.f50757c;
        if (j10 == 0) {
            d10 = 0.0d;
        } else {
            d10 = this.f50758d / j10;
        }
        return new a.C0638a(d10);
    }

    @Override // un.a
    public void b() {
        this.f50755a.unregisterListener(this.f50760f);
    }

    @Override // un.a
    public void c() {
        if (!this.f50759e) {
            this.f50759e = true;
            Sensor sensor = this.f50756b;
            if (sensor != null) {
                this.f50755a.registerListener(this.f50760f, sensor, 100000);
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
                bVar.f50758d = ((bVar.f50758d * b.this.f50757c) + (((Math.abs(f10) + Math.abs(f11)) + Math.abs(f12)) / 3.0d)) / (b.this.f50757c + 1);
                b.this.f50757c++;
            }
        }

        @Override // android.hardware.SensorEventListener
        public void onAccuracyChanged(Sensor sensor, int i10) {
        }
    }
}
