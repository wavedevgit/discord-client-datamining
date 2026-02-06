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
    private final SensorManager f56355a;

    /* renamed from: b  reason: collision with root package name */
    private final Sensor f56356b;

    /* renamed from: c  reason: collision with root package name */
    private long f56357c;

    /* renamed from: d  reason: collision with root package name */
    private double f56358d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f56359e;

    /* renamed from: f  reason: collision with root package name */
    private final a f56360f;

    public b(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        Object systemService = context.getSystemService("sensor");
        Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.hardware.SensorManager");
        SensorManager sensorManager = (SensorManager) systemService;
        this.f56355a = sensorManager;
        this.f56356b = sensorManager.getDefaultSensor(4);
        this.f56360f = new a();
    }

    @Override // zn.a
    public a.C0775a a() {
        double d10;
        long j10 = this.f56357c;
        if (j10 == 0) {
            d10 = 0.0d;
        } else {
            d10 = this.f56358d / j10;
        }
        return new a.C0775a(d10);
    }

    @Override // zn.a
    public void b() {
        this.f56355a.unregisterListener(this.f56360f);
    }

    @Override // zn.a
    public void c() {
        if (!this.f56359e) {
            this.f56359e = true;
            Sensor sensor = this.f56356b;
            if (sensor != null) {
                this.f56355a.registerListener(this.f56360f, sensor, 100000);
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
                bVar.f56358d = ((bVar.f56358d * b.this.f56357c) + (((Math.abs(f10) + Math.abs(f11)) + Math.abs(f12)) / 3.0d)) / (b.this.f56357c + 1);
                b.this.f56357c++;
            }
        }

        @Override // android.hardware.SensorEventListener
        public void onAccuracyChanged(Sensor sensor, int i10) {
        }
    }
}
