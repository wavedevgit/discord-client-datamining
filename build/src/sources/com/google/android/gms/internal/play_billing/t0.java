package com.google.android.gms.internal.play_billing;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class t0 extends v0 {

    /* renamed from: b  reason: collision with root package name */
    private final byte[] f15057b;

    /* renamed from: c  reason: collision with root package name */
    private int f15058c;

    /* renamed from: d  reason: collision with root package name */
    private int f15059d;

    /* renamed from: e  reason: collision with root package name */
    private int f15060e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ t0(byte[] bArr, int i10, int i11, boolean z10, s0 s0Var) {
        super(null);
        this.f15060e = Integer.MAX_VALUE;
        this.f15057b = bArr;
        this.f15058c = 0;
    }

    public final int c(int i10) {
        int i11 = this.f15060e;
        this.f15060e = 0;
        int i12 = this.f15058c + this.f15059d;
        this.f15058c = i12;
        if (i12 <= 0) {
            this.f15059d = 0;
            return i11;
        }
        this.f15059d = i12;
        this.f15058c = 0;
        return i11;
    }
}
