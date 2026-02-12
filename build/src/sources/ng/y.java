package ng;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class y extends d0 {

    /* renamed from: a  reason: collision with root package name */
    private String f37892a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f37893b;

    /* renamed from: c  reason: collision with root package name */
    private int f37894c;

    /* renamed from: d  reason: collision with root package name */
    private byte f37895d;

    @Override // ng.d0
    public final d0 a(boolean z10) {
        this.f37893b = true;
        this.f37895d = (byte) (1 | this.f37895d);
        return this;
    }

    @Override // ng.d0
    public final d0 b(int i10) {
        this.f37894c = 1;
        this.f37895d = (byte) (this.f37895d | 2);
        return this;
    }

    @Override // ng.d0
    public final e0 c() {
        String str;
        if (this.f37895d == 3 && (str = this.f37892a) != null) {
            return new a0(str, this.f37893b, this.f37894c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f37892a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f37895d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f37895d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final d0 d(String str) {
        this.f37892a = "common";
        return this;
    }
}
