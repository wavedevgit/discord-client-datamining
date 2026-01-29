package com.swmansion.reanimated.sensor;

import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.view.Display;
import com.swmansion.reanimated.nativeProxy.SensorSetter;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class ReanimatedSensorListener implements SensorEventListener {
    private final Display display;
    private final double interval;
    private SensorSetter setter;
    private double lastRead = System.currentTimeMillis();
    private float[] rotation = new float[9];
    private float[] orientation = new float[3];
    private float[] quaternion = new float[4];

    /* JADX INFO: Access modifiers changed from: package-private */
    public ReanimatedSensorListener(SensorSetter sensorSetter, double d10, Display display) {
        this.setter = sensorSetter;
        this.interval = d10;
        this.display = display;
    }

    @Override // android.hardware.SensorEventListener
    public void onAccuracyChanged(Sensor sensor, int i10) {
    }

    @Override // android.hardware.SensorEventListener
    public void onSensorChanged(SensorEvent sensorEvent) {
        int i10;
        double currentTimeMillis = System.currentTimeMillis();
        if (currentTimeMillis - this.lastRead < this.interval) {
            return;
        }
        int type = sensorEvent.sensor.getType();
        this.lastRead = currentTimeMillis;
        int rotation = this.display.getRotation();
        if (rotation != 1) {
            if (rotation != 2) {
                if (rotation != 3) {
                    i10 = 0;
                } else {
                    i10 = 270;
                }
            } else {
                i10 = 180;
            }
        } else {
            i10 = 90;
        }
        if (type != 2 && type != 4) {
            switch (type) {
                case 9:
                case 10:
                    float[] fArr = sensorEvent.values;
                    this.setter.sensorSetter(new float[]{-fArr[0], -fArr[1], -fArr[2]}, i10);
                    return;
                case 11:
                    SensorManager.getQuaternionFromVector(this.quaternion, sensorEvent.values);
                    SensorManager.getRotationMatrixFromVector(this.rotation, sensorEvent.values);
                    SensorManager.getOrientation(this.rotation, this.orientation);
                    float[] fArr2 = this.quaternion;
                    float f10 = fArr2[1];
                    float f11 = fArr2[3];
                    float f12 = fArr2[0];
                    float[] fArr3 = this.orientation;
                    this.setter.sensorSetter(new float[]{f10, f11, -fArr2[2], f12, -fArr3[0], -fArr3[1], fArr3[2]}, i10);
                    return;
                default:
                    throw new IllegalArgumentException("[Reanimated] Unknown sensor type.");
            }
        }
        float[] fArr4 = sensorEvent.values;
        this.setter.sensorSetter(new float[]{fArr4[0], fArr4[1], fArr4[2]}, i10);
    }
}
