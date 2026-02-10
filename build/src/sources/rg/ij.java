package rg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class ij extends nj {

    /* renamed from: a  reason: collision with root package name */
    private String f46753a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f46754b;

    /* renamed from: c  reason: collision with root package name */
    private int f46755c;

    /* renamed from: d  reason: collision with root package name */
    private byte f46756d;

    @Override // rg.nj
    public final nj a(boolean z10) {
        this.f46754b = true;
        this.f46756d = (byte) (1 | this.f46756d);
        return this;
    }

    @Override // rg.nj
    public final nj b(int i10) {
        this.f46755c = 1;
        this.f46756d = (byte) (this.f46756d | 2);
        return this;
    }

    @Override // rg.nj
    public final oj c() {
        String str;
        if (this.f46756d == 3 && (str = this.f46753a) != null) {
            return new kj(str, this.f46754b, this.f46755c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f46753a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f46756d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f46756d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final nj d(String str) {
        if (str != null) {
            this.f46753a = str;
            return this;
        }
        throw new NullPointerException("Null libraryName");
    }
}
