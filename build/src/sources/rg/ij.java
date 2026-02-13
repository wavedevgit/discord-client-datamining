package rg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class ij extends nj {

    /* renamed from: a  reason: collision with root package name */
    private String f47322a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f47323b;

    /* renamed from: c  reason: collision with root package name */
    private int f47324c;

    /* renamed from: d  reason: collision with root package name */
    private byte f47325d;

    @Override // rg.nj
    public final nj a(boolean z10) {
        this.f47323b = true;
        this.f47325d = (byte) (1 | this.f47325d);
        return this;
    }

    @Override // rg.nj
    public final nj b(int i10) {
        this.f47324c = 1;
        this.f47325d = (byte) (this.f47325d | 2);
        return this;
    }

    @Override // rg.nj
    public final oj c() {
        String str;
        if (this.f47325d == 3 && (str = this.f47322a) != null) {
            return new kj(str, this.f47323b, this.f47324c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f47322a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f47325d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f47325d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final nj d(String str) {
        if (str != null) {
            this.f47322a = str;
            return this;
        }
        throw new NullPointerException("Null libraryName");
    }
}
