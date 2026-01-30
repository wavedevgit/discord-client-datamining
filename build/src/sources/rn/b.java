package rn;

import android.content.Context;
import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import kotlin.jvm.internal.Intrinsics;
import rn.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements rn.a {

    /* renamed from: a  reason: collision with root package name */
    private final SensorManager f48381a;

    /* renamed from: b  reason: collision with root package name */
    private final Sensor f48382b;

    /* renamed from: c  reason: collision with root package name */
    private long f48383c;

    /* renamed from: d  reason: collision with root package name */
    private double f48384d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f48385e;

    /* renamed from: f  reason: collision with root package name */
    private final a f48386f;

    public b(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        Object systemService = context.getSystemService("sensor");
        Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.hardware.SensorManager");
        SensorManager sensorManager = (SensorManager) systemService;
        this.f48381a = sensorManager;
        this.f48382b = sensorManager.getDefaultSensor(4);
        this.f48386f = new a();
    }

    @Override // rn.a
    public a.C0590a a() {
        double d10;
        long j10 = this.f48383c;
        if (j10 == 0) {
            d10 = 0.0d;
        } else {
            d10 = this.f48384d / j10;
        }
        return new a.C0590a(d10);
    }

    @Override // rn.a
    public void b() {
        this.f48381a.unregisterListener(this.f48386f);
    }

    @Override // rn.a
    public void c() {
        if (!this.f48385e) {
            this.f48385e = true;
            Sensor sensor = this.f48382b;
            if (sensor != null) {
                this.f48381a.registerListener(this.f48386f, sensor, 100000);
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
                bVar.f48384d = ((bVar.f48384d * b.this.f48383c) + (((Math.abs(f10) + Math.abs(f11)) + Math.abs(f12)) / 3.0d)) / (b.this.f48383c + 1);
                b.this.f48383c++;
            }
        }

        @Override // android.hardware.SensorEventListener
        public void onAccuracyChanged(Sensor sensor, int i10) {
        }
    }
}
