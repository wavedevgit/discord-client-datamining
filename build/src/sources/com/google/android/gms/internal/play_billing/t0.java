package com.google.android.gms.internal.play_billing;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class t0 extends v0 {

    /* renamed from: b  reason: collision with root package name */
    private final byte[] f13982b;

    /* renamed from: c  reason: collision with root package name */
    private int f13983c;

    /* renamed from: d  reason: collision with root package name */
    private int f13984d;

    /* renamed from: e  reason: collision with root package name */
    private int f13985e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ t0(byte[] bArr, int i10, int i11, boolean z10, s0 s0Var) {
        super(null);
        this.f13985e = Integer.MAX_VALUE;
        this.f13982b = bArr;
        this.f13983c = 0;
    }

    public final int c(int i10) {
        int i11 = this.f13985e;
        this.f13985e = 0;
        int i12 = this.f13983c + this.f13984d;
        this.f13983c = i12;
        if (i12 <= 0) {
            this.f13984d = 0;
            return i11;
        }
        this.f13984d = i12;
        this.f13983c = 0;
        return i11;
    }
}
