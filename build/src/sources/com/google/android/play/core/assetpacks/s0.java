package com.google.android.play.core.assetpacks;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class s0 extends AssetPackState {

    /* renamed from: a  reason: collision with root package name */
    private final String f16861a;

    /* renamed from: b  reason: collision with root package name */
    private final int f16862b;

    /* renamed from: c  reason: collision with root package name */
    private final int f16863c;

    /* renamed from: d  reason: collision with root package name */
    private final long f16864d;

    /* renamed from: e  reason: collision with root package name */
    private final long f16865e;

    /* renamed from: f  reason: collision with root package name */
    private final int f16866f;

    /* renamed from: g  reason: collision with root package name */
    private final int f16867g;

    /* renamed from: h  reason: collision with root package name */
    private final String f16868h;

    /* renamed from: i  reason: collision with root package name */
    private final String f16869i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s0(String str, int i10, int i11, long j10, long j11, int i12, int i13, String str2, String str3) {
        if (str != null) {
            this.f16861a = str;
            this.f16862b = i10;
            this.f16863c = i11;
            this.f16864d = j10;
            this.f16865e = j11;
            this.f16866f = i12;
            this.f16867g = i13;
            if (str2 != null) {
                this.f16868h = str2;
                if (str3 != null) {
                    this.f16869i = str3;
                    return;
                }
                throw new NullPointerException("Null installedVersionTag");
            }
            throw new NullPointerException("Null availableVersionTag");
        }
        throw new NullPointerException("Null name");
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final String b() {
        return this.f16868h;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final long d() {
        return this.f16864d;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof AssetPackState) {
            AssetPackState assetPackState = (AssetPackState) obj;
            if (this.f16861a.equals(assetPackState.h()) && this.f16862b == assetPackState.i() && this.f16863c == assetPackState.f() && this.f16864d == assetPackState.d() && this.f16865e == assetPackState.j() && this.f16866f == assetPackState.k() && this.f16867g == assetPackState.l() && this.f16868h.equals(assetPackState.b()) && this.f16869i.equals(assetPackState.g())) {
                return true;
            }
        }
        return false;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final int f() {
        return this.f16863c;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final String g() {
        return this.f16869i;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final String h() {
        return this.f16861a;
    }

    public final int hashCode() {
        long j10 = this.f16865e;
        String str = this.f16868h;
        long j11 = this.f16864d;
        return ((((((((((((((((this.f16861a.hashCode() ^ 1000003) * 1000003) ^ this.f16862b) * 1000003) ^ this.f16863c) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ this.f16866f) * 1000003) ^ this.f16867g) * 1000003) ^ str.hashCode()) * 1000003) ^ this.f16869i.hashCode();
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final int i() {
        return this.f16862b;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final long j() {
        return this.f16865e;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final int k() {
        return this.f16866f;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final int l() {
        return this.f16867g;
    }

    public final String toString() {
        return "AssetPackState{name=" + this.f16861a + ", status=" + this.f16862b + ", errorCode=" + this.f16863c + ", bytesDownloaded=" + this.f16864d + ", totalBytesToDownload=" + this.f16865e + ", transferProgressPercentage=" + this.f16866f + ", updateAvailability=" + this.f16867g + ", availableVersionTag=" + this.f16868h + ", installedVersionTag=" + this.f16869i + "}";
    }
}
