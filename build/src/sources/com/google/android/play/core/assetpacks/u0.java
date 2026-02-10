package com.google.android.play.core.assetpacks;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class u0 extends a4 {

    /* renamed from: a  reason: collision with root package name */
    private final int f16911a;

    /* renamed from: b  reason: collision with root package name */
    private final String f16912b;

    /* renamed from: c  reason: collision with root package name */
    private final long f16913c;

    /* renamed from: d  reason: collision with root package name */
    private final long f16914d;

    /* renamed from: e  reason: collision with root package name */
    private final int f16915e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public u0(int i10, String str, long j10, long j11, int i11) {
        this.f16911a = i10;
        this.f16912b = str;
        this.f16913c = j10;
        this.f16914d = j11;
        this.f16915e = i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.a4
    public final int a() {
        return this.f16911a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.a4
    public final int b() {
        return this.f16915e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.a4
    public final long c() {
        return this.f16913c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.a4
    public final long d() {
        return this.f16914d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.a4
    public final String e() {
        return this.f16912b;
    }

    public final boolean equals(Object obj) {
        String str;
        if (obj == this) {
            return true;
        }
        if (obj instanceof a4) {
            a4 a4Var = (a4) obj;
            if (this.f16911a == a4Var.a() && ((str = this.f16912b) != null ? str.equals(a4Var.e()) : a4Var.e() == null) && this.f16913c == a4Var.c() && this.f16914d == a4Var.d() && this.f16915e == a4Var.b()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int hashCode;
        String str = this.f16912b;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i10 = this.f16911a;
        long j10 = this.f16913c;
        long j11 = this.f16914d;
        return ((((((hashCode ^ ((i10 ^ 1000003) * 1000003)) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003) ^ this.f16915e;
    }

    public final String toString() {
        return "SliceCheckpoint{fileExtractionStatus=" + this.f16911a + ", filePath=" + this.f16912b + ", fileOffset=" + this.f16913c + ", remainingBytes=" + this.f16914d + ", previousChunk=" + this.f16915e + "}";
    }
}
