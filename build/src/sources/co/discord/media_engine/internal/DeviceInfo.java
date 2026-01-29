package co.discord.media_engine.internal;

import androidx.annotation.NonNull;
import co.discord.media_engine.CameraEnumeratorProvider;
import java.util.Locale;
import org.webrtc.CameraEnumerator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class DeviceInfo {
    private static CameraEnumerator enumerator() {
        return CameraEnumeratorProvider.get();
    }

    @NonNull
    private String getDeviceFacingString(int i10) {
        if (getDeviceFrontFacing(i10)) {
            return "front";
        }
        if (getDeviceBackFacing(i10)) {
            return "back";
        }
        return "unknown";
    }

    public boolean getDeviceBackFacing(int i10) {
        return enumerator().isBackFacing(getDeviceName(i10));
    }

    public boolean getDeviceFrontFacing(int i10) {
        return enumerator().isFrontFacing(getDeviceName(i10));
    }

    @NonNull
    public String getDeviceGuid(int i10) {
        return String.format(Locale.US, "android_camera_%d_%s_facing", Integer.valueOf(i10), getDeviceFacingString(i10));
    }

    @NonNull
    public String getDeviceName(int i10) {
        return enumerator().getDeviceNames()[i10];
    }

    public int numberOfDevices() {
        return enumerator().getDeviceNames().length;
    }
}
