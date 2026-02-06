package com.google.android.play.core.assetpacks;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class u0 extends a4 {

    /* renamed from: a  reason: collision with root package name */
    private final int f16022a;

    /* renamed from: b  reason: collision with root package name */
    private final String f16023b;

    /* renamed from: c  reason: collision with root package name */
    private final long f16024c;

    /* renamed from: d  reason: collision with root package name */
    private final long f16025d;

    /* renamed from: e  reason: collision with root package name */
    private final int f16026e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public u0(int i10, String str, long j10, long j11, int i11) {
        this.f16022a = i10;
        this.f16023b = str;
        this.f16024c = j10;
        this.f16025d = j11;
        this.f16026e = i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.a4
    public final int a() {
        return this.f16022a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.a4
    public final int b() {
        return this.f16026e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.a4
    public final long c() {
        return this.f16024c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.a4
    public final long d() {
        return this.f16025d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.a4
    public final String e() {
        return this.f16023b;
    }

    public final boolean equals(Object obj) {
        String str;
        if (obj == this) {
            return true;
        }
        if (obj instanceof a4) {
            a4 a4Var = (a4) obj;
            if (this.f16022a == a4Var.a() && ((str = this.f16023b) != null ? str.equals(a4Var.e()) : a4Var.e() == null) && this.f16024c == a4Var.c() && this.f16025d == a4Var.d() && this.f16026e == a4Var.b()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int hashCode;
        String str = this.f16023b;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i10 = this.f16022a;
        long j10 = this.f16024c;
        long j11 = this.f16025d;
        return ((((((hashCode ^ ((i10 ^ 1000003) * 1000003)) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003) ^ this.f16026e;
    }

    public final String toString() {
        return "SliceCheckpoint{fileExtractionStatus=" + this.f16022a + ", filePath=" + this.f16023b + ", fileOffset=" + this.f16024c + ", remainingBytes=" + this.f16025d + ", previousChunk=" + this.f16026e + "}";
    }
}
