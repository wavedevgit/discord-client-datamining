package com.swmansion.reanimated.sensor;

import android.hardware.Sensor;
import android.hardware.SensorManager;
import android.view.WindowManager;
import com.facebook.react.bridge.ReactApplicationContext;
import com.swmansion.reanimated.nativeProxy.SensorSetter;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class ReanimatedSensor {
    private static final int DEFAULT_INTERVAL = 8;
    int interval;
    ReanimatedSensorListener listener;
    Sensor sensor;
    SensorManager sensorManager;
    ReanimatedSensorType sensorType;

    /* JADX INFO: Access modifiers changed from: package-private */
    public ReanimatedSensor(WeakReference<ReactApplicationContext> weakReference, ReanimatedSensorType reanimatedSensorType, int i10, SensorSetter sensorSetter) {
        this.listener = new ReanimatedSensorListener(sensorSetter, i10, ((WindowManager) weakReference.get().getSystemService("window")).getDefaultDisplay());
        weakReference.get();
        this.sensorManager = (SensorManager) weakReference.get().getSystemService("sensor");
        this.sensorType = reanimatedSensorType;
        if (i10 == -1) {
            this.interval = 8;
        } else {
            this.interval = i10;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void cancel() {
        this.sensorManager.unregisterListener(this.listener, this.sensor);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean initialize() {
        Sensor defaultSensor = this.sensorManager.getDefaultSensor(this.sensorType.getType());
        this.sensor = defaultSensor;
        if (defaultSensor != null) {
            this.sensorManager.registerListener(this.listener, defaultSensor, this.interval * 1000);
            return true;
        }
        return false;
    }
}
