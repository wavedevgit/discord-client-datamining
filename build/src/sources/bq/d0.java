package bq;

import java.util.concurrent.atomic.AtomicInteger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 {

    /* renamed from: a  reason: collision with root package name */
    private final int f7343a;

    /* renamed from: b  reason: collision with root package name */
    private AtomicInteger f7344b = new AtomicInteger(0);

    public d0(int i10) {
        this.f7343a = i10;
    }

    public final int a() {
        return this.f7343a + this.f7344b.getAndIncrement();
    }
}
