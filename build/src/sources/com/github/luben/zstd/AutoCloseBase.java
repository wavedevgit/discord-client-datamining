package com.github.luben.zstd;

import java.io.Closeable;
import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class AutoCloseBase implements Closeable {
    private static final AtomicIntegerFieldUpdater<AutoCloseBase> SHARED_LOCK_UPDATER = AtomicIntegerFieldUpdater.newUpdater(AutoCloseBase.class, "sharedLock");
    private volatile int sharedLock;

    /* JADX INFO: Access modifiers changed from: package-private */
    public void acquireSharedLock() {
        int i10;
        do {
            i10 = this.sharedLock;
            if (i10 >= 0) {
                if (i10 == Integer.MAX_VALUE) {
                    throw new IllegalStateException("Shared lock overflow");
                }
            } else {
                throw new IllegalStateException("Closed");
            }
        } while (!SHARED_LOCK_UPDATER.compareAndSet(this, i10, i10 + 1));
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        synchronized (this) {
            try {
                if (this.sharedLock == -1) {
                    return;
                }
                if (SHARED_LOCK_UPDATER.compareAndSet(this, 0, -1)) {
                    doClose();
                    return;
                }
                throw new IllegalStateException("Attempt to close while in use");
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    abstract void doClose();

    /* JADX INFO: Access modifiers changed from: package-private */
    public void releaseSharedLock() {
        int i10;
        do {
            i10 = this.sharedLock;
            if (i10 >= 0) {
                if (i10 == 0) {
                    throw new IllegalStateException("Shared lock underflow");
                }
            } else {
                throw new IllegalStateException("Closed");
            }
        } while (!SHARED_LOCK_UPDATER.compareAndSet(this, i10, i10 - 1));
    }
}
