package com.google.android.play.core.assetpacks;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class u0 extends a4 {

    /* renamed from: a  reason: collision with root package name */
    private final int f16042a;

    /* renamed from: b  reason: collision with root package name */
    private final String f16043b;

    /* renamed from: c  reason: collision with root package name */
    private final long f16044c;

    /* renamed from: d  reason: collision with root package name */
    private final long f16045d;

    /* renamed from: e  reason: collision with root package name */
    private final int f16046e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public u0(int i10, String str, long j10, long j11, int i11) {
        this.f16042a = i10;
        this.f16043b = str;
        this.f16044c = j10;
        this.f16045d = j11;
        this.f16046e = i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.a4
    public final int a() {
        return this.f16042a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.a4
    public final int b() {
        return this.f16046e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.a4
    public final long c() {
        return this.f16044c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.a4
    public final long d() {
        return this.f16045d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.a4
    public final String e() {
        return this.f16043b;
    }

    public final boolean equals(Object obj) {
        String str;
        if (obj == this) {
            return true;
        }
        if (obj instanceof a4) {
            a4 a4Var = (a4) obj;
            if (this.f16042a == a4Var.a() && ((str = this.f16043b) != null ? str.equals(a4Var.e()) : a4Var.e() == null) && this.f16044c == a4Var.c() && this.f16045d == a4Var.d() && this.f16046e == a4Var.b()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int hashCode;
        String str = this.f16043b;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i10 = this.f16042a;
        long j10 = this.f16044c;
        long j11 = this.f16045d;
        return ((((((hashCode ^ ((i10 ^ 1000003) * 1000003)) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003) ^ this.f16046e;
    }

    public final String toString() {
        return "SliceCheckpoint{fileExtractionStatus=" + this.f16042a + ", filePath=" + this.f16043b + ", fileOffset=" + this.f16044c + ", remainingBytes=" + this.f16045d + ", previousChunk=" + this.f16046e + "}";
    }
}
