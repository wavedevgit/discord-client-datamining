package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class bd extends fd {

    /* renamed from: a  reason: collision with root package name */
    private String f45520a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f45521b;

    /* renamed from: c  reason: collision with root package name */
    private int f45522c;

    /* renamed from: d  reason: collision with root package name */
    private byte f45523d;

    @Override // qg.fd
    public final fd a(boolean z10) {
        this.f45521b = true;
        this.f45523d = (byte) (1 | this.f45523d);
        return this;
    }

    @Override // qg.fd
    public final fd b(int i10) {
        this.f45522c = 1;
        this.f45523d = (byte) (this.f45523d | 2);
        return this;
    }

    @Override // qg.fd
    public final gd c() {
        String str;
        if (this.f45523d == 3 && (str = this.f45520a) != null) {
            return new dd(str, this.f45521b, this.f45522c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f45520a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f45523d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f45523d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final fd d(String str) {
        this.f45520a = str;
        return this;
    }
}
