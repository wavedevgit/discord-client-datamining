package ng;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class zj extends ek {

    /* renamed from: a  reason: collision with root package name */
    private String f40675a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f40676b;

    /* renamed from: c  reason: collision with root package name */
    private int f40677c;

    /* renamed from: d  reason: collision with root package name */
    private byte f40678d;

    @Override // ng.ek
    public final ek a(boolean z10) {
        this.f40676b = true;
        this.f40678d = (byte) (1 | this.f40678d);
        return this;
    }

    @Override // ng.ek
    public final ek b(int i10) {
        this.f40677c = 1;
        this.f40678d = (byte) (this.f40678d | 2);
        return this;
    }

    @Override // ng.ek
    public final fk c() {
        String str;
        if (this.f40678d == 3 && (str = this.f40675a) != null) {
            return new bk(str, this.f40676b, this.f40677c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f40675a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f40678d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f40678d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final ek d(String str) {
        this.f40675a = str;
        return this;
    }
}
