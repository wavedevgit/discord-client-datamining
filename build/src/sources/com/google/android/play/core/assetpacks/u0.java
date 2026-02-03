package com.google.android.play.core.assetpacks;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class u0 extends a4 {

    /* renamed from: a  reason: collision with root package name */
    private final int f16680a;

    /* renamed from: b  reason: collision with root package name */
    private final String f16681b;

    /* renamed from: c  reason: collision with root package name */
    private final long f16682c;

    /* renamed from: d  reason: collision with root package name */
    private final long f16683d;

    /* renamed from: e  reason: collision with root package name */
    private final int f16684e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public u0(int i10, String str, long j10, long j11, int i11) {
        this.f16680a = i10;
        this.f16681b = str;
        this.f16682c = j10;
        this.f16683d = j11;
        this.f16684e = i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.a4
    public final int a() {
        return this.f16680a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.a4
    public final int b() {
        return this.f16684e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.a4
    public final long c() {
        return this.f16682c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.a4
    public final long d() {
        return this.f16683d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.a4
    public final String e() {
        return this.f16681b;
    }

    public final boolean equals(Object obj) {
        String str;
        if (obj == this) {
            return true;
        }
        if (obj instanceof a4) {
            a4 a4Var = (a4) obj;
            if (this.f16680a == a4Var.a() && ((str = this.f16681b) != null ? str.equals(a4Var.e()) : a4Var.e() == null) && this.f16682c == a4Var.c() && this.f16683d == a4Var.d() && this.f16684e == a4Var.b()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int hashCode;
        String str = this.f16681b;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i10 = this.f16680a;
        long j10 = this.f16682c;
        long j11 = this.f16683d;
        return ((((((hashCode ^ ((i10 ^ 1000003) * 1000003)) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003) ^ this.f16684e;
    }

    public final String toString() {
        return "SliceCheckpoint{fileExtractionStatus=" + this.f16680a + ", filePath=" + this.f16681b + ", fileOffset=" + this.f16682c + ", remainingBytes=" + this.f16683d + ", previousChunk=" + this.f16684e + "}";
    }
}
