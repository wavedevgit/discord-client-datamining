package hk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h extends i {

    /* renamed from: c  reason: collision with root package name */
    private final i f26147c;

    public h(i iVar) {
        super(iVar.d(), iVar.a());
        this.f26147c = iVar;
    }

    @Override // hk.i
    public byte[] b() {
        byte[] b10 = this.f26147c.b();
        int d10 = d() * a();
        byte[] bArr = new byte[d10];
        for (int i10 = 0; i10 < d10; i10++) {
            bArr[i10] = (byte) (255 - (b10[i10] & 255));
        }
        return bArr;
    }

    @Override // hk.i
    public byte[] c(int i10, byte[] bArr) {
        byte[] c10 = this.f26147c.c(i10, bArr);
        int d10 = d();
        for (int i11 = 0; i11 < d10; i11++) {
            c10[i11] = (byte) (255 - (c10[i11] & 255));
        }
        return c10;
    }

    @Override // hk.i
    public i e() {
        return this.f26147c;
    }

    @Override // hk.i
    public boolean f() {
        return this.f26147c.f();
    }

    @Override // hk.i
    public i g() {
        return new h(this.f26147c.g());
    }
}
