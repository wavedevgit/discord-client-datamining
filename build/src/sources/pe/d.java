package pe;

import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.opengl.Matrix;
import android.view.Display;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d implements SensorEventListener {

    /* renamed from: a  reason: collision with root package name */
    private final float[] f45031a = new float[16];

    /* renamed from: b  reason: collision with root package name */
    private final float[] f45032b = new float[16];

    /* renamed from: c  reason: collision with root package name */
    private final float[] f45033c = new float[16];

    /* renamed from: d  reason: collision with root package name */
    private final float[] f45034d = new float[3];

    /* renamed from: e  reason: collision with root package name */
    private final Display f45035e;

    /* renamed from: f  reason: collision with root package name */
    private final a[] f45036f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f45037g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void a(float[] fArr, float f10);
    }

    public d(Display display, a... aVarArr) {
        this.f45035e = display;
        this.f45036f = aVarArr;
    }

    private float a(float[] fArr) {
        SensorManager.remapCoordinateSystem(fArr, 1, 131, this.f45032b);
        SensorManager.getOrientation(this.f45032b, this.f45034d);
        return this.f45034d[2];
    }

    private void b(float[] fArr, float f10) {
        for (a aVar : this.f45036f) {
            aVar.a(fArr, f10);
        }
    }

    private void c(float[] fArr) {
        if (!this.f45037g) {
            c.a(this.f45033c, fArr);
            this.f45037g = true;
        }
        float[] fArr2 = this.f45032b;
        System.arraycopy(fArr, 0, fArr2, 0, fArr2.length);
        Matrix.multiplyMM(fArr, 0, this.f45032b, 0, this.f45033c, 0);
    }

    private void d(float[] fArr, int i10) {
        if (i10 != 0) {
            int i11 = 129;
            int i12 = 1;
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        i11 = 130;
                    } else {
                        throw new IllegalStateException();
                    }
                } else {
                    i12 = 130;
                }
            } else {
                i12 = 129;
                i11 = 2;
            }
            float[] fArr2 = this.f45032b;
            System.arraycopy(fArr, 0, fArr2, 0, fArr2.length);
            SensorManager.remapCoordinateSystem(this.f45032b, i11, i12, fArr);
        }
    }

    private static void e(float[] fArr) {
        Matrix.rotateM(fArr, 0, 90.0f, 1.0f, 0.0f, 0.0f);
    }

    @Override // android.hardware.SensorEventListener
    public void onSensorChanged(SensorEvent sensorEvent) {
        SensorManager.getRotationMatrixFromVector(this.f45031a, sensorEvent.values);
        d(this.f45031a, this.f45035e.getRotation());
        float a10 = a(this.f45031a);
        e(this.f45031a);
        c(this.f45031a);
        b(this.f45031a, a10);
    }

    @Override // android.hardware.SensorEventListener
    public void onAccuracyChanged(Sensor sensor, int i10) {
    }
}
