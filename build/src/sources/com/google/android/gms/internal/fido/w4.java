package com.google.android.gms.internal.fido;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class w4 extends y4 {

    /* renamed from: b  reason: collision with root package name */
    private int f15152b;

    /* renamed from: c  reason: collision with root package name */
    private int f15153c;

    /* renamed from: d  reason: collision with root package name */
    private int f15154d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ w4(byte[] bArr, int i10, int i11, boolean z10, x4 x4Var) {
        super(null);
        this.f15154d = Integer.MAX_VALUE;
        this.f15152b = 0;
    }

    public final int a(int i10) {
        int i11 = this.f15154d;
        this.f15154d = 0;
        int i12 = this.f15152b + this.f15153c;
        this.f15152b = i12;
        if (i12 <= 0) {
            this.f15153c = 0;
            return i11;
        }
        this.f15153c = i12;
        this.f15152b = 0;
        return i11;
    }
}
