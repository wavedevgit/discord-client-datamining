package com.google.android.gms.internal.play_billing;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class t0 extends v0 {

    /* renamed from: b  reason: collision with root package name */
    private final byte[] f14376b;

    /* renamed from: c  reason: collision with root package name */
    private int f14377c;

    /* renamed from: d  reason: collision with root package name */
    private int f14378d;

    /* renamed from: e  reason: collision with root package name */
    private int f14379e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ t0(byte[] bArr, int i10, int i11, boolean z10, s0 s0Var) {
        super(null);
        this.f14379e = Integer.MAX_VALUE;
        this.f14376b = bArr;
        this.f14377c = 0;
    }

    public final int c(int i10) {
        int i11 = this.f14379e;
        this.f14379e = 0;
        int i12 = this.f14377c + this.f14378d;
        this.f14377c = i12;
        if (i12 <= 0) {
            this.f14378d = 0;
            return i11;
        }
        this.f14378d = i12;
        this.f14377c = 0;
        return i11;
    }
}
