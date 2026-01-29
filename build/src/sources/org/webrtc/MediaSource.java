package org.webrtc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class MediaSource {
    private long nativeSource;
    private final RefCountDelegate refCountDelegate;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public enum State {
        INITIALIZING,
        LIVE,
        ENDED,
        MUTED;

        @CalledByNative("State")
        static State fromNativeIndex(int i10) {
            return values()[i10];
        }
    }

    public MediaSource(final long j10) {
        this.refCountDelegate = new RefCountDelegate(new Runnable() { // from class: org.webrtc.h0
            @Override // java.lang.Runnable
            public final void run() {
                JniCommon.nativeReleaseRef(j10);
            }
        });
        this.nativeSource = j10;
    }

    private void checkMediaSourceExists() {
        if (this.nativeSource != 0) {
            return;
        }
        throw new IllegalStateException("MediaSource has been disposed.");
    }

    private static native State nativeGetState(long j10);

    public void dispose() {
        checkMediaSourceExists();
        this.refCountDelegate.release();
        this.nativeSource = 0L;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public long getNativeMediaSource() {
        checkMediaSourceExists();
        return this.nativeSource;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void runWithReference(Runnable runnable) {
        if (this.refCountDelegate.safeRetain()) {
            try {
                runnable.run();
            } finally {
                this.refCountDelegate.release();
            }
        }
    }

    public State state() {
        checkMediaSourceExists();
        return nativeGetState(this.nativeSource);
    }
}
