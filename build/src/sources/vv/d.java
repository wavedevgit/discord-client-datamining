package vv;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d {

    /* renamed from: b  reason: collision with root package name */
    private final int f52031b;

    /* renamed from: a  reason: collision with root package name */
    private final Object f52030a = new Object();

    /* renamed from: c  reason: collision with root package name */
    private long f52032c = Long.MIN_VALUE;

    public d(int i10) {
        if (i10 > 0) {
            this.f52031b = i10;
            return;
        }
        throw new IllegalArgumentException("Expect sample rate to be > 0 sample(s) per second");
    }
}
