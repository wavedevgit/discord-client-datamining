package com.google.android.play.core.assetpacks;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class u0 extends a4 {

    /* renamed from: a  reason: collision with root package name */
    private final int f15648a;

    /* renamed from: b  reason: collision with root package name */
    private final String f15649b;

    /* renamed from: c  reason: collision with root package name */
    private final long f15650c;

    /* renamed from: d  reason: collision with root package name */
    private final long f15651d;

    /* renamed from: e  reason: collision with root package name */
    private final int f15652e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public u0(int i10, String str, long j10, long j11, int i11) {
        this.f15648a = i10;
        this.f15649b = str;
        this.f15650c = j10;
        this.f15651d = j11;
        this.f15652e = i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.a4
    public final int a() {
        return this.f15648a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.a4
    public final int b() {
        return this.f15652e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.a4
    public final long c() {
        return this.f15650c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.a4
    public final long d() {
        return this.f15651d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.a4
    public final String e() {
        return this.f15649b;
    }

    public final boolean equals(Object obj) {
        String str;
        if (obj == this) {
            return true;
        }
        if (obj instanceof a4) {
            a4 a4Var = (a4) obj;
            if (this.f15648a == a4Var.a() && ((str = this.f15649b) != null ? str.equals(a4Var.e()) : a4Var.e() == null) && this.f15650c == a4Var.c() && this.f15651d == a4Var.d() && this.f15652e == a4Var.b()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int hashCode;
        String str = this.f15649b;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i10 = this.f15648a;
        long j10 = this.f15650c;
        long j11 = this.f15651d;
        return ((((((hashCode ^ ((i10 ^ 1000003) * 1000003)) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003) ^ this.f15652e;
    }

    public final String toString() {
        return "SliceCheckpoint{fileExtractionStatus=" + this.f15648a + ", filePath=" + this.f15649b + ", fileOffset=" + this.f15650c + ", remainingBytes=" + this.f15651d + ", previousChunk=" + this.f15652e + "}";
    }
}
