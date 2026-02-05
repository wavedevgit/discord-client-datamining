package com.google.android.gms.internal.fido;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class w4 extends y4 {

    /* renamed from: b  reason: collision with root package name */
    private int f14143b;

    /* renamed from: c  reason: collision with root package name */
    private int f14144c;

    /* renamed from: d  reason: collision with root package name */
    private int f14145d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ w4(byte[] bArr, int i10, int i11, boolean z10, x4 x4Var) {
        super(null);
        this.f14145d = Integer.MAX_VALUE;
        this.f14143b = 0;
    }

    public final int a(int i10) {
        int i11 = this.f14145d;
        this.f14145d = 0;
        int i12 = this.f14143b + this.f14144c;
        this.f14143b = i12;
        if (i12 <= 0) {
            this.f14144c = 0;
            return i11;
        }
        this.f14144c = i12;
        this.f14143b = 0;
        return i11;
    }
}
