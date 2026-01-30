package jp;

import java.util.concurrent.atomic.AtomicInteger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 {

    /* renamed from: a  reason: collision with root package name */
    private final int f32297a;

    /* renamed from: b  reason: collision with root package name */
    private AtomicInteger f32298b = new AtomicInteger(0);

    public d0(int i10) {
        this.f32297a = i10;
    }

    public final int a() {
        return this.f32297a + this.f32298b.getAndIncrement();
    }
}
