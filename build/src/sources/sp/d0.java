package sp;

import java.util.concurrent.atomic.AtomicInteger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 {

    /* renamed from: a  reason: collision with root package name */
    private final int f49914a;

    /* renamed from: b  reason: collision with root package name */
    private AtomicInteger f49915b = new AtomicInteger(0);

    public d0(int i10) {
        this.f49914a = i10;
    }

    public final int a() {
        return this.f49914a + this.f49915b.getAndIncrement();
    }
}
