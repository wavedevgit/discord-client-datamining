package com.google.android.gms.internal.fido;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class q4 extends t4 {

    /* renamed from: o  reason: collision with root package name */
    private final int f15107o;

    /* renamed from: p  reason: collision with root package name */
    private final int f15108p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public q4(byte[] bArr, int i10, int i11) {
        super(bArr);
        v4.j(i10, i10 + i11, bArr.length);
        this.f15107o = i10;
        this.f15108p = i11;
    }

    @Override // com.google.android.gms.internal.fido.t4, com.google.android.gms.internal.fido.v4
    public final byte b(int i10) {
        int i11 = this.f15108p;
        if (((i11 - (i10 + 1)) | i10) < 0) {
            if (i10 < 0) {
                throw new ArrayIndexOutOfBoundsException("Index < 0: " + i10);
            }
            throw new ArrayIndexOutOfBoundsException("Index > length: " + i10 + ", " + i11);
        }
        return this.f15130i[this.f15107o + i10];
    }

    @Override // com.google.android.gms.internal.fido.t4, com.google.android.gms.internal.fido.v4
    final byte c(int i10) {
        return this.f15130i[this.f15107o + i10];
    }

    @Override // com.google.android.gms.internal.fido.t4, com.google.android.gms.internal.fido.v4
    public final int d() {
        return this.f15108p;
    }

    @Override // com.google.android.gms.internal.fido.t4, com.google.android.gms.internal.fido.v4
    protected final void e(byte[] bArr, int i10, int i11, int i12) {
        System.arraycopy(this.f15130i, this.f15107o, bArr, 0, i12);
    }

    @Override // com.google.android.gms.internal.fido.t4
    protected final int o() {
        return this.f15107o;
    }
}
