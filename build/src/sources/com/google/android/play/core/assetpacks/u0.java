package com.google.android.play.core.assetpacks;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class u0 extends a4 {

    /* renamed from: a  reason: collision with root package name */
    private final int f17051a;

    /* renamed from: b  reason: collision with root package name */
    private final String f17052b;

    /* renamed from: c  reason: collision with root package name */
    private final long f17053c;

    /* renamed from: d  reason: collision with root package name */
    private final long f17054d;

    /* renamed from: e  reason: collision with root package name */
    private final int f17055e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public u0(int i10, String str, long j10, long j11, int i11) {
        this.f17051a = i10;
        this.f17052b = str;
        this.f17053c = j10;
        this.f17054d = j11;
        this.f17055e = i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.a4
    public final int a() {
        return this.f17051a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.a4
    public final int b() {
        return this.f17055e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.a4
    public final long c() {
        return this.f17053c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.a4
    public final long d() {
        return this.f17054d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.a4
    public final String e() {
        return this.f17052b;
    }

    public final boolean equals(Object obj) {
        String str;
        if (obj == this) {
            return true;
        }
        if (obj instanceof a4) {
            a4 a4Var = (a4) obj;
            if (this.f17051a == a4Var.a() && ((str = this.f17052b) != null ? str.equals(a4Var.e()) : a4Var.e() == null) && this.f17053c == a4Var.c() && this.f17054d == a4Var.d() && this.f17055e == a4Var.b()) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int hashCode;
        String str = this.f17052b;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i10 = this.f17051a;
        long j10 = this.f17053c;
        long j11 = this.f17054d;
        return ((((((hashCode ^ ((i10 ^ 1000003) * 1000003)) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ ((int) (j11 ^ (j11 >>> 32)))) * 1000003) ^ this.f17055e;
    }

    public final String toString() {
        return "SliceCheckpoint{fileExtractionStatus=" + this.f17051a + ", filePath=" + this.f17052b + ", fileOffset=" + this.f17053c + ", remainingBytes=" + this.f17054d + ", previousChunk=" + this.f17055e + "}";
    }
}
