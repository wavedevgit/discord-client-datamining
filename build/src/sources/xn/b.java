package xn;

import android.content.Context;
import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import kotlin.jvm.internal.Intrinsics;
import xn.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements xn.a {

    /* renamed from: a  reason: collision with root package name */
    private final SensorManager f53994a;

    /* renamed from: b  reason: collision with root package name */
    private final Sensor f53995b;

    /* renamed from: c  reason: collision with root package name */
    private long f53996c;

    /* renamed from: d  reason: collision with root package name */
    private double f53997d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f53998e;

    /* renamed from: f  reason: collision with root package name */
    private final a f53999f;

    public b(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        Object systemService = context.getSystemService("sensor");
        Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.hardware.SensorManager");
        SensorManager sensorManager = (SensorManager) systemService;
        this.f53994a = sensorManager;
        this.f53995b = sensorManager.getDefaultSensor(4);
        this.f53999f = new a();
    }

    @Override // xn.a
    public a.C0715a a() {
        double d10;
        long j10 = this.f53996c;
        if (j10 == 0) {
            d10 = 0.0d;
        } else {
            d10 = this.f53997d / j10;
        }
        return new a.C0715a(d10);
    }

    @Override // xn.a
    public void b() {
        this.f53994a.unregisterListener(this.f53999f);
    }

    @Override // xn.a
    public void c() {
        if (!this.f53998e) {
            this.f53998e = true;
            Sensor sensor = this.f53995b;
            if (sensor != null) {
                this.f53994a.registerListener(this.f53999f, sensor, 100000);
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
                bVar.f53997d = ((bVar.f53997d * b.this.f53996c) + (((Math.abs(f10) + Math.abs(f11)) + Math.abs(f12)) / 3.0d)) / (b.this.f53996c + 1);
                b.this.f53996c++;
            }
        }

        @Override // android.hardware.SensorEventListener
        public void onAccuracyChanged(Sensor sensor, int i10) {
        }
    }
}
