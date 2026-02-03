package mp;

import java.util.concurrent.atomic.AtomicInteger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 {

    /* renamed from: a  reason: collision with root package name */
    private final int f38943a;

    /* renamed from: b  reason: collision with root package name */
    private AtomicInteger f38944b = new AtomicInteger(0);

    public d0(int i10) {
        this.f38943a = i10;
    }

    public final int a() {
        return this.f38943a + this.f38944b.getAndIncrement();
    }
}
