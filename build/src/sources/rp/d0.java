package rp;

import java.util.concurrent.atomic.AtomicInteger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 {

    /* renamed from: a  reason: collision with root package name */
    private final int f49089a;

    /* renamed from: b  reason: collision with root package name */
    private AtomicInteger f49090b = new AtomicInteger(0);

    public d0(int i10) {
        this.f49089a = i10;
    }

    public final int a() {
        return this.f49089a + this.f49090b.getAndIncrement();
    }
}
