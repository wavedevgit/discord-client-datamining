package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class kb extends qb {

    /* renamed from: a  reason: collision with root package name */
    private String f42174a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f42175b;

    /* renamed from: c  reason: collision with root package name */
    private int f42176c;

    /* renamed from: d  reason: collision with root package name */
    private byte f42177d;

    @Override // pg.qb
    public final qb a(boolean z10) {
        this.f42175b = true;
        this.f42177d = (byte) (1 | this.f42177d);
        return this;
    }

    @Override // pg.qb
    public final qb b(int i10) {
        this.f42176c = 1;
        this.f42177d = (byte) (this.f42177d | 2);
        return this;
    }

    @Override // pg.qb
    public final rb c() {
        String str;
        if (this.f42177d == 3 && (str = this.f42174a) != null) {
            return new nb(str, this.f42175b, this.f42176c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f42174a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f42177d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f42177d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final qb d(String str) {
        this.f42174a = "vision-common";
        return this;
    }
}
