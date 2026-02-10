package b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class k {

    /* renamed from: a  reason: collision with root package name */
    private final long f6401a;

    /* renamed from: b  reason: collision with root package name */
    private final long f6402b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(long j10, long j11) {
        this.f6401a = j10;
        this.f6402b = j11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public long a() {
        return this.f6402b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public long b() {
        return this.f6401a;
    }

    public String toString() {
        return this.f6401a + "/" + this.f6402b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(double d10) {
        this((long) (d10 * 10000.0d), 10000L);
    }
}
