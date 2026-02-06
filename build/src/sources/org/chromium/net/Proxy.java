package org.chromium.net;

import androidx.annotation.NonNull;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.util.List;
import java.util.Map;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class Proxy {
    public static final int HTTP = 0;
    public static final int HTTPS = 1;
    @NonNull
    private final Callback mCallback;
    @NonNull
    private final String mHost;
    private final int mPort;
    private final int mScheme;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class Callback {
        public abstract List<Map.Entry<String, String>> onBeforeTunnelRequest();

        public abstract boolean onTunnelHeadersReceived(@NonNull List<Map.Entry<String, String>> list, int i10);
    }

    @Retention(RetentionPolicy.SOURCE)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public @interface Scheme {
    }

    public Proxy(int i10, @NonNull String str, int i11, @NonNull Callback callback) {
        if (i10 != 0 && i10 != 1) {
            throw new IllegalArgumentException(String.format("Unknown scheme %s", Integer.valueOf(i10)));
        }
        this.mScheme = i10;
        Objects.requireNonNull(str);
        this.mHost = str;
        this.mPort = i11;
        Objects.requireNonNull(callback);
        this.mCallback = callback;
    }

    @NonNull
    public Callback getCallback() {
        return this.mCallback;
    }

    @NonNull
    public String getHost() {
        return this.mHost;
    }

    public int getPort() {
        return this.mPort;
    }

    public int getScheme() {
        return this.mScheme;
    }
}
