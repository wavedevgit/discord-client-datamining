package r;

import android.hardware.camera2.CameraAccessException;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f extends Exception {

    /* renamed from: i  reason: collision with root package name */
    static final Set f47911i = Collections.unmodifiableSet(new HashSet(Arrays.asList(4, 5, 1, 2, 3)));

    /* renamed from: o  reason: collision with root package name */
    static final Set f47912o = Collections.unmodifiableSet(new HashSet(Arrays.asList(10001, 10002)));

    /* renamed from: d  reason: collision with root package name */
    private final int f47913d;

    /* renamed from: e  reason: collision with root package name */
    private final CameraAccessException f47914e;

    public f(int i10, String str, Throwable th2) {
        super(a(i10, str), th2);
        this.f47913d = i10;
        this.f47914e = f47911i.contains(Integer.valueOf(i10)) ? new CameraAccessException(i10, str, th2) : null;
    }

    private static String a(int i10, String str) {
        return String.format("%s (%d): %s", c(i10), Integer.valueOf(i10), str);
    }

    private static String b(int i10) {
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        if (i10 != 5) {
                            if (i10 != 10001) {
                                if (i10 != 10002) {
                                    return null;
                                }
                                return "Failed to create CameraCharacteristics.";
                            }
                            return "Some API 28 devices cannot access the camera when the device is in \"Do Not Disturb\" mode. The camera will not be accessible until \"Do Not Disturb\" mode is disabled.";
                        }
                        return "The system-wide limit for number of open cameras has been reached, and more camera devices cannot be opened until previous instances are closed.";
                    }
                    return "The camera device is in use already";
                }
                return "The camera device is currently in the error state; no further calls to it will succeed.";
            }
            return "The camera device is removable and has been disconnected from the Android device, or the camera service has shut down the connection due to a higher-priority access request for the camera device.";
        }
        return "The camera is disabled due to a device policy, and cannot be opened.";
    }

    private static String c(int i10) {
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        if (i10 != 5) {
                            if (i10 != 1000) {
                                if (i10 != 10001) {
                                    if (i10 != 10002) {
                                        return "<UNKNOWN ERROR>";
                                    }
                                    return "CAMERA_CHARACTERISTICS_CREATION_ERROR";
                                }
                                return "CAMERA_UNAVAILABLE_DO_NOT_DISTURB";
                            }
                            return "CAMERA_DEPRECATED_HAL";
                        }
                        return "MAX_CAMERAS_IN_USE";
                    }
                    return "CAMERA_IN_USE";
                }
                return "CAMERA_ERROR";
            }
            return "CAMERA_DISCONNECTED";
        }
        return "CAMERA_DISABLED";
    }

    public static f e(CameraAccessException cameraAccessException) {
        if (cameraAccessException != null) {
            return new f(cameraAccessException);
        }
        throw new NullPointerException("cameraAccessException should not be null");
    }

    public final int d() {
        return this.f47913d;
    }

    public f(int i10, Throwable th2) {
        super(b(i10), th2);
        this.f47913d = i10;
        this.f47914e = f47911i.contains(Integer.valueOf(i10)) ? new CameraAccessException(i10, null, th2) : null;
    }

    private f(CameraAccessException cameraAccessException) {
        super(cameraAccessException.getMessage(), cameraAccessException.getCause());
        this.f47913d = cameraAccessException.getReason();
        this.f47914e = cameraAccessException;
    }
}
