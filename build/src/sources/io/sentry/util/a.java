package io.sentry.util;

import io.sentry.a1;
import java.util.concurrent.locks.ReentrantLock;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends ReentrantLock {

    /* renamed from: io.sentry.util.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class C0407a implements a1 {

        /* renamed from: d  reason: collision with root package name */
        private final ReentrantLock f28988d;

        C0407a(ReentrantLock reentrantLock) {
            this.f28988d = reentrantLock;
        }

        @Override // io.sentry.a1, java.lang.AutoCloseable
        public void close() {
            this.f28988d.unlock();
        }
    }

    public a1 a() {
        lock();
        return new C0407a(this);
    }
}
