package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class zj extends ek {

    /* renamed from: a  reason: collision with root package name */
    private String f38512a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f38513b;

    /* renamed from: c  reason: collision with root package name */
    private int f38514c;

    /* renamed from: d  reason: collision with root package name */
    private byte f38515d;

    @Override // mg.ek
    public final ek a(boolean z10) {
        this.f38513b = true;
        this.f38515d = (byte) (1 | this.f38515d);
        return this;
    }

    @Override // mg.ek
    public final ek b(int i10) {
        this.f38514c = 1;
        this.f38515d = (byte) (this.f38515d | 2);
        return this;
    }

    @Override // mg.ek
    public final fk c() {
        String str;
        if (this.f38515d == 3 && (str = this.f38512a) != null) {
            return new bk(str, this.f38513b, this.f38514c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f38512a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f38515d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f38515d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final ek d(String str) {
        this.f38512a = str;
        return this;
    }
}
