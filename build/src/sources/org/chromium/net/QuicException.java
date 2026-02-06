package org.chromium.net;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class QuicException extends NetworkException {
    protected QuicException(String str, Throwable th2) {
        super(str, th2);
    }

    public int getConnectionCloseSource() {
        return 0;
    }

    public abstract int getQuicDetailedErrorCode();
}
