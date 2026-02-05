package ng;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class kb extends qb {

    /* renamed from: a  reason: collision with root package name */
    private String f40756a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f40757b;

    /* renamed from: c  reason: collision with root package name */
    private int f40758c;

    /* renamed from: d  reason: collision with root package name */
    private byte f40759d;

    @Override // ng.qb
    public final qb a(boolean z10) {
        this.f40757b = true;
        this.f40759d = (byte) (1 | this.f40759d);
        return this;
    }

    @Override // ng.qb
    public final qb b(int i10) {
        this.f40758c = 1;
        this.f40759d = (byte) (this.f40759d | 2);
        return this;
    }

    @Override // ng.qb
    public final rb c() {
        String str;
        if (this.f40759d == 3 && (str = this.f40756a) != null) {
            return new nb(str, this.f40757b, this.f40758c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f40756a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f40759d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f40759d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final qb d(String str) {
        this.f40756a = "vision-common";
        return this;
    }
}
