package com.google.android.gms.internal.fido;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class w4 extends y4 {

    /* renamed from: b  reason: collision with root package name */
    private int f14246b;

    /* renamed from: c  reason: collision with root package name */
    private int f14247c;

    /* renamed from: d  reason: collision with root package name */
    private int f14248d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ w4(byte[] bArr, int i10, int i11, boolean z10, x4 x4Var) {
        super(null);
        this.f14248d = Integer.MAX_VALUE;
        this.f14246b = 0;
    }

    public final int a(int i10) {
        int i11 = this.f14248d;
        this.f14248d = 0;
        int i12 = this.f14246b + this.f14247c;
        this.f14246b = i12;
        if (i12 <= 0) {
            this.f14247c = 0;
            return i11;
        }
        this.f14247c = i12;
        this.f14246b = 0;
        return i11;
    }
}
