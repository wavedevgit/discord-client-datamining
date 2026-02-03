package io.sentry.util;

import io.sentry.a1;
import java.util.concurrent.locks.ReentrantLock;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends ReentrantLock {

    /* renamed from: io.sentry.util.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class C0406a implements a1 {

        /* renamed from: d  reason: collision with root package name */
        private final ReentrantLock f30738d;

        C0406a(ReentrantLock reentrantLock) {
            this.f30738d = reentrantLock;
        }

        @Override // io.sentry.a1, java.lang.AutoCloseable
        public void close() {
            this.f30738d.unlock();
        }
    }

    public a1 a() {
        lock();
        return new C0406a(this);
    }
}
