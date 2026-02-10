package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class kb extends qb {

    /* renamed from: a  reason: collision with root package name */
    private String f43716a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f43717b;

    /* renamed from: c  reason: collision with root package name */
    private int f43718c;

    /* renamed from: d  reason: collision with root package name */
    private byte f43719d;

    @Override // pg.qb
    public final qb a(boolean z10) {
        this.f43717b = true;
        this.f43719d = (byte) (1 | this.f43719d);
        return this;
    }

    @Override // pg.qb
    public final qb b(int i10) {
        this.f43718c = 1;
        this.f43719d = (byte) (this.f43719d | 2);
        return this;
    }

    @Override // pg.qb
    public final rb c() {
        String str;
        if (this.f43719d == 3 && (str = this.f43716a) != null) {
            return new nb(str, this.f43717b, this.f43718c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f43716a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f43719d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f43719d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final qb d(String str) {
        this.f43716a = "vision-common";
        return this;
    }
}
