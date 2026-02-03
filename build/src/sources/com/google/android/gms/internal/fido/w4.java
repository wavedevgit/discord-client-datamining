package com.google.android.gms.internal.fido;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class w4 extends y4 {

    /* renamed from: b  reason: collision with root package name */
    private int f13749b;

    /* renamed from: c  reason: collision with root package name */
    private int f13750c;

    /* renamed from: d  reason: collision with root package name */
    private int f13751d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ w4(byte[] bArr, int i10, int i11, boolean z10, x4 x4Var) {
        super(null);
        this.f13751d = Integer.MAX_VALUE;
        this.f13749b = 0;
    }

    public final int a(int i10) {
        int i11 = this.f13751d;
        this.f13751d = 0;
        int i12 = this.f13749b + this.f13750c;
        this.f13749b = i12;
        if (i12 <= 0) {
            this.f13750c = 0;
            return i11;
        }
        this.f13750c = i12;
        this.f13749b = 0;
        return i11;
    }
}
