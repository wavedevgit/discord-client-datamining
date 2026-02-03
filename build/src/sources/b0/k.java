package b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class k {

    /* renamed from: a  reason: collision with root package name */
    private final long f6186a;

    /* renamed from: b  reason: collision with root package name */
    private final long f6187b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(long j10, long j11) {
        this.f6186a = j10;
        this.f6187b = j11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public long a() {
        return this.f6187b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public long b() {
        return this.f6186a;
    }

    public String toString() {
        return this.f6186a + "/" + this.f6187b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public k(double d10) {
        this((long) (d10 * 10000.0d), 10000L);
    }
}
