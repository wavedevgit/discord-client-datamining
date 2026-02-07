package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class kb extends qb {

    /* renamed from: a  reason: collision with root package name */
    private String f42256a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f42257b;

    /* renamed from: c  reason: collision with root package name */
    private int f42258c;

    /* renamed from: d  reason: collision with root package name */
    private byte f42259d;

    @Override // og.qb
    public final qb a(boolean z10) {
        this.f42257b = true;
        this.f42259d = (byte) (1 | this.f42259d);
        return this;
    }

    @Override // og.qb
    public final qb b(int i10) {
        this.f42258c = 1;
        this.f42259d = (byte) (this.f42259d | 2);
        return this;
    }

    @Override // og.qb
    public final rb c() {
        String str;
        if (this.f42259d == 3 && (str = this.f42256a) != null) {
            return new nb(str, this.f42257b, this.f42258c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f42256a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f42259d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f42259d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final qb d(String str) {
        this.f42256a = "vision-common";
        return this;
    }
}
