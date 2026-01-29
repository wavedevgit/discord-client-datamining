package ng;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class kb extends qb {

    /* renamed from: a  reason: collision with root package name */
    private String f41378a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f41379b;

    /* renamed from: c  reason: collision with root package name */
    private int f41380c;

    /* renamed from: d  reason: collision with root package name */
    private byte f41381d;

    @Override // ng.qb
    public final qb a(boolean z10) {
        this.f41379b = true;
        this.f41381d = (byte) (1 | this.f41381d);
        return this;
    }

    @Override // ng.qb
    public final qb b(int i10) {
        this.f41380c = 1;
        this.f41381d = (byte) (this.f41381d | 2);
        return this;
    }

    @Override // ng.qb
    public final rb c() {
        String str;
        if (this.f41381d == 3 && (str = this.f41378a) != null) {
            return new nb(str, this.f41379b, this.f41380c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f41378a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f41381d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f41381d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final qb d(String str) {
        this.f41378a = "vision-common";
        return this;
    }
}
