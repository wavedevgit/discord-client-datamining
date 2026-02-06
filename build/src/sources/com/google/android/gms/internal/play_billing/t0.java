package com.google.android.gms.internal.play_billing;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class t0 extends v0 {

    /* renamed from: b  reason: collision with root package name */
    private final byte[] f14339b;

    /* renamed from: c  reason: collision with root package name */
    private int f14340c;

    /* renamed from: d  reason: collision with root package name */
    private int f14341d;

    /* renamed from: e  reason: collision with root package name */
    private int f14342e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ t0(byte[] bArr, int i10, int i11, boolean z10, s0 s0Var) {
        super(null);
        this.f14342e = Integer.MAX_VALUE;
        this.f14339b = bArr;
        this.f14340c = 0;
    }

    public final int c(int i10) {
        int i11 = this.f14342e;
        this.f14342e = 0;
        int i12 = this.f14340c + this.f14341d;
        this.f14340c = i12;
        if (i12 <= 0) {
            this.f14341d = 0;
            return i11;
        }
        this.f14341d = i12;
        this.f14340c = 0;
        return i11;
    }
}
