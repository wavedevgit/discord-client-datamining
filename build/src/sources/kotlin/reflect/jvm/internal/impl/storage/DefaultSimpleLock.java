package kotlin.reflect.jvm.internal.impl.storage;

import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class DefaultSimpleLock implements SimpleLock {

    /* renamed from: a  reason: collision with root package name */
    private final Lock f35801a;

    public DefaultSimpleLock() {
        this(null, 1, null);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Lock a() {
        return this.f35801a;
    }

    @Override // kotlin.reflect.jvm.internal.impl.storage.SimpleLock
    public void lock() {
        this.f35801a.lock();
    }

    @Override // kotlin.reflect.jvm.internal.impl.storage.SimpleLock
    public void unlock() {
        this.f35801a.unlock();
    }

    public DefaultSimpleLock(@NotNull Lock lock) {
        Intrinsics.checkNotNullParameter(lock, "lock");
        this.f35801a = lock;
    }

    public /* synthetic */ DefaultSimpleLock(Lock lock, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? new ReentrantLock() : lock);
    }
}
