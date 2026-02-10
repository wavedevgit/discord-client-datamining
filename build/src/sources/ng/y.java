package ng;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class y extends d0 {

    /* renamed from: a  reason: collision with root package name */
    private String f37891a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f37892b;

    /* renamed from: c  reason: collision with root package name */
    private int f37893c;

    /* renamed from: d  reason: collision with root package name */
    private byte f37894d;

    @Override // ng.d0
    public final d0 a(boolean z10) {
        this.f37892b = true;
        this.f37894d = (byte) (1 | this.f37894d);
        return this;
    }

    @Override // ng.d0
    public final d0 b(int i10) {
        this.f37893c = 1;
        this.f37894d = (byte) (this.f37894d | 2);
        return this;
    }

    @Override // ng.d0
    public final e0 c() {
        String str;
        if (this.f37894d == 3 && (str = this.f37891a) != null) {
            return new a0(str, this.f37892b, this.f37893c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f37891a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f37894d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f37894d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final d0 d(String str) {
        this.f37891a = "common";
        return this;
    }
}
