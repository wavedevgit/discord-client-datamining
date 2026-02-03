package sn;

import android.content.Context;
import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import kotlin.jvm.internal.Intrinsics;
import sn.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements sn.a {

    /* renamed from: a  reason: collision with root package name */
    private final SensorManager f49162a;

    /* renamed from: b  reason: collision with root package name */
    private final Sensor f49163b;

    /* renamed from: c  reason: collision with root package name */
    private long f49164c;

    /* renamed from: d  reason: collision with root package name */
    private double f49165d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f49166e;

    /* renamed from: f  reason: collision with root package name */
    private final a f49167f;

    public b(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        Object systemService = context.getSystemService("sensor");
        Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.hardware.SensorManager");
        SensorManager sensorManager = (SensorManager) systemService;
        this.f49162a = sensorManager;
        this.f49163b = sensorManager.getDefaultSensor(4);
        this.f49167f = new a();
    }

    @Override // sn.a
    public a.C0610a a() {
        double d10;
        long j10 = this.f49164c;
        if (j10 == 0) {
            d10 = 0.0d;
        } else {
            d10 = this.f49165d / j10;
        }
        return new a.C0610a(d10);
    }

    @Override // sn.a
    public void b() {
        this.f49162a.unregisterListener(this.f49167f);
    }

    @Override // sn.a
    public void c() {
        if (!this.f49166e) {
            this.f49166e = true;
            Sensor sensor = this.f49163b;
            if (sensor != null) {
                this.f49162a.registerListener(this.f49167f, sensor, 100000);
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
                bVar.f49165d = ((bVar.f49165d * b.this.f49164c) + (((Math.abs(f10) + Math.abs(f11)) + Math.abs(f12)) / 3.0d)) / (b.this.f49164c + 1);
                b.this.f49164c++;
            }
        }

        @Override // android.hardware.SensorEventListener
        public void onAccuracyChanged(Sensor sensor, int i10) {
        }
    }
}
