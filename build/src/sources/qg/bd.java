package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class bd extends fd {

    /* renamed from: a  reason: collision with root package name */
    private String f44188a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f44189b;

    /* renamed from: c  reason: collision with root package name */
    private int f44190c;

    /* renamed from: d  reason: collision with root package name */
    private byte f44191d;

    @Override // qg.fd
    public final fd a(boolean z10) {
        this.f44189b = true;
        this.f44191d = (byte) (1 | this.f44191d);
        return this;
    }

    @Override // qg.fd
    public final fd b(int i10) {
        this.f44190c = 1;
        this.f44191d = (byte) (this.f44191d | 2);
        return this;
    }

    @Override // qg.fd
    public final gd c() {
        String str;
        if (this.f44191d == 3 && (str = this.f44188a) != null) {
            return new dd(str, this.f44189b, this.f44190c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f44188a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f44191d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f44191d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final fd d(String str) {
        this.f44188a = str;
        return this;
    }
}
