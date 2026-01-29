package com.google.android.gms.internal.play_billing;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k0 extends o0 {

    /* renamed from: q  reason: collision with root package name */
    private final int f15272q;

    /* JADX INFO: Access modifiers changed from: package-private */
    public k0(byte[] bArr, int i10, int i11) {
        super(bArr);
        r0.j(0, i11, bArr.length);
        this.f15272q = i11;
    }

    @Override // com.google.android.gms.internal.play_billing.o0, com.google.android.gms.internal.play_billing.r0
    public final byte b(int i10) {
        int i11 = this.f15272q;
        if (((i11 - (i10 + 1)) | i10) < 0) {
            if (i10 < 0) {
                throw new ArrayIndexOutOfBoundsException("Index < 0: " + i10);
            }
            throw new ArrayIndexOutOfBoundsException("Index > length: " + i10 + ", " + i11);
        }
        return this.f15350p[i10];
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.gms.internal.play_billing.o0, com.google.android.gms.internal.play_billing.r0
    public final byte c(int i10) {
        return this.f15350p[i10];
    }

    @Override // com.google.android.gms.internal.play_billing.o0, com.google.android.gms.internal.play_billing.r0
    public final int d() {
        return this.f15272q;
    }

    @Override // com.google.android.gms.internal.play_billing.o0
    protected final int o() {
        return 0;
    }
}
