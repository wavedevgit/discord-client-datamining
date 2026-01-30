package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class bd extends fd {

    /* renamed from: a  reason: collision with root package name */
    private String f42782a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f42783b;

    /* renamed from: c  reason: collision with root package name */
    private int f42784c;

    /* renamed from: d  reason: collision with root package name */
    private byte f42785d;

    @Override // og.fd
    public final fd a(boolean z10) {
        this.f42783b = true;
        this.f42785d = (byte) (1 | this.f42785d);
        return this;
    }

    @Override // og.fd
    public final fd b(int i10) {
        this.f42784c = 1;
        this.f42785d = (byte) (this.f42785d | 2);
        return this;
    }

    @Override // og.fd
    public final gd c() {
        String str;
        if (this.f42785d == 3 && (str = this.f42782a) != null) {
            return new dd(str, this.f42783b, this.f42784c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f42782a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f42785d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f42785d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final fd d(String str) {
        this.f42782a = str;
        return this;
    }
}
