package r;

import android.hardware.camera2.CameraCharacteristics;
import android.hardware.camera2.params.StreamConfigurationMap;
import android.os.Build;
import java.util.HashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a0 {

    /* renamed from: b  reason: collision with root package name */
    private final a f48204b;

    /* renamed from: c  reason: collision with root package name */
    private final String f48205c;

    /* renamed from: a  reason: collision with root package name */
    private final Map f48203a = new HashMap();

    /* renamed from: d  reason: collision with root package name */
    private s0 f48206d = null;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        Object a(CameraCharacteristics.Key key);
    }

    private a0(CameraCharacteristics cameraCharacteristics, String str) {
        if (Build.VERSION.SDK_INT >= 28) {
            this.f48204b = new x(cameraCharacteristics);
        } else {
            this.f48204b = new y(cameraCharacteristics);
        }
        this.f48205c = str;
    }

    private boolean c(CameraCharacteristics.Key key) {
        return key.equals(CameraCharacteristics.SENSOR_ORIENTATION);
    }

    public static a0 e(CameraCharacteristics cameraCharacteristics, String str) {
        return new a0(cameraCharacteristics, str);
    }

    public Object a(CameraCharacteristics.Key key) {
        if (c(key)) {
            return this.f48204b.a(key);
        }
        synchronized (this) {
            try {
                Object obj = this.f48203a.get(key);
                if (obj != null) {
                    return obj;
                }
                Object a10 = this.f48204b.a(key);
                if (a10 != null) {
                    this.f48203a.put(key, a10);
                }
                return a10;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public s0 b() {
        if (this.f48206d == null) {
            try {
                StreamConfigurationMap streamConfigurationMap = (StreamConfigurationMap) a(CameraCharacteristics.SCALER_STREAM_CONFIGURATION_MAP);
                if (streamConfigurationMap != null) {
                    this.f48206d = s0.e(streamConfigurationMap, new u.n(this.f48205c));
                } else {
                    throw new IllegalArgumentException("StreamConfigurationMap is null!");
                }
            } catch (AssertionError | NullPointerException e10) {
                throw new IllegalArgumentException(e10.getMessage());
            }
        }
        return this.f48206d;
    }

    public boolean d() {
        CameraCharacteristics.Key key;
        if (Build.VERSION.SDK_INT >= 34) {
            a aVar = this.f48204b;
            key = CameraCharacteristics.CONTROL_AVAILABLE_SETTINGS_OVERRIDES;
            int[] iArr = (int[]) aVar.a(key);
            if (iArr != null) {
                for (int i10 : iArr) {
                    if (i10 == 1) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
}
