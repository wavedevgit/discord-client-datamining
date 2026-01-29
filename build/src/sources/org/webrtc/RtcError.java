package org.webrtc;

import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class RtcError {
    private final RtcException error;

    private RtcError(RtcException rtcException) {
        this.error = rtcException;
    }

    @CalledByNative
    public static RtcError error(@NonNull String str) {
        return new RtcError(new RtcException(str));
    }

    @CalledByNative
    public static RtcError success() {
        return new RtcError(null);
    }

    public boolean isError() {
        if (this.error != null) {
            return true;
        }
        return false;
    }

    public boolean isSuccess() {
        if (this.error == null) {
            return true;
        }
        return false;
    }

    public void throwError() {
        RtcException rtcException = this.error;
        if (rtcException == null) {
            return;
        }
        throw rtcException;
    }

    public RtcException error() {
        return this.error;
    }
}
