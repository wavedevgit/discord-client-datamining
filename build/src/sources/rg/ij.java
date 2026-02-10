package rg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class ij extends nj {

    /* renamed from: a  reason: collision with root package name */
    private String f48299a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f48300b;

    /* renamed from: c  reason: collision with root package name */
    private int f48301c;

    /* renamed from: d  reason: collision with root package name */
    private byte f48302d;

    @Override // rg.nj
    public final nj a(boolean z10) {
        this.f48300b = true;
        this.f48302d = (byte) (1 | this.f48302d);
        return this;
    }

    @Override // rg.nj
    public final nj b(int i10) {
        this.f48301c = 1;
        this.f48302d = (byte) (this.f48302d | 2);
        return this;
    }

    @Override // rg.nj
    public final oj c() {
        String str;
        if (this.f48302d == 3 && (str = this.f48299a) != null) {
            return new kj(str, this.f48300b, this.f48301c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f48299a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f48302d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f48302d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final nj d(String str) {
        if (str != null) {
            this.f48299a = str;
            return this;
        }
        throw new NullPointerException("Null libraryName");
    }
}
