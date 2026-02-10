package com.google.android.gms.internal.play_billing;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class t0 extends v0 {

    /* renamed from: b  reason: collision with root package name */
    private final byte[] f14479b;

    /* renamed from: c  reason: collision with root package name */
    private int f14480c;

    /* renamed from: d  reason: collision with root package name */
    private int f14481d;

    /* renamed from: e  reason: collision with root package name */
    private int f14482e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ t0(byte[] bArr, int i10, int i11, boolean z10, s0 s0Var) {
        super(null);
        this.f14482e = Integer.MAX_VALUE;
        this.f14479b = bArr;
        this.f14480c = 0;
    }

    public final int c(int i10) {
        int i11 = this.f14482e;
        this.f14482e = 0;
        int i12 = this.f14480c + this.f14481d;
        this.f14480c = i12;
        if (i12 <= 0) {
            this.f14481d = 0;
            return i11;
        }
        this.f14481d = i12;
        this.f14480c = 0;
        return i11;
    }
}
