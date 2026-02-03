package androidx.camera.core;

import java.util.concurrent.atomic.AtomicBoolean;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class s extends e {

    /* renamed from: o  reason: collision with root package name */
    private final AtomicBoolean f2052o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s(n nVar) {
        super(nVar);
        this.f2052o = new AtomicBoolean(false);
    }

    @Override // androidx.camera.core.e, androidx.camera.core.n, java.lang.AutoCloseable
    public void close() {
        if (!this.f2052o.getAndSet(true)) {
            super.close();
        }
    }
}
