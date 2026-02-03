package ng;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class kb extends qb {

    /* renamed from: a  reason: collision with root package name */
    private String f41257a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f41258b;

    /* renamed from: c  reason: collision with root package name */
    private int f41259c;

    /* renamed from: d  reason: collision with root package name */
    private byte f41260d;

    @Override // ng.qb
    public final qb a(boolean z10) {
        this.f41258b = true;
        this.f41260d = (byte) (1 | this.f41260d);
        return this;
    }

    @Override // ng.qb
    public final qb b(int i10) {
        this.f41259c = 1;
        this.f41260d = (byte) (this.f41260d | 2);
        return this;
    }

    @Override // ng.qb
    public final rb c() {
        String str;
        if (this.f41260d == 3 && (str = this.f41257a) != null) {
            return new nb(str, this.f41258b, this.f41259c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f41257a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f41260d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f41260d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final qb d(String str) {
        this.f41257a = "vision-common";
        return this;
    }
}
