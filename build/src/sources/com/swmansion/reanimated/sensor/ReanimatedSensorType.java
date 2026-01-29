package com.swmansion.reanimated.sensor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public enum ReanimatedSensorType {
    ACCELEROMETER(10),
    GYROSCOPE(4),
    GRAVITY(9),
    MAGNETIC_FIELD(2),
    ROTATION_VECTOR(11);
    
    private final int type;

    ReanimatedSensorType(int i10) {
        this.type = i10;
    }

    public static ReanimatedSensorType getInstanceById(int i10) {
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        if (i10 == 5) {
                            return ROTATION_VECTOR;
                        }
                        throw new IllegalArgumentException("[Reanimated] Unknown sensor type.");
                    }
                    return MAGNETIC_FIELD;
                }
                return GRAVITY;
            }
            return GYROSCOPE;
        }
        return ACCELEROMETER;
    }

    public int getType() {
        return this.type;
    }
}
