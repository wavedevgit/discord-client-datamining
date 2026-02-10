package com.google.android.play.core.assetpacks;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class s0 extends AssetPackState {

    /* renamed from: a  reason: collision with root package name */
    private final String f16112a;

    /* renamed from: b  reason: collision with root package name */
    private final int f16113b;

    /* renamed from: c  reason: collision with root package name */
    private final int f16114c;

    /* renamed from: d  reason: collision with root package name */
    private final long f16115d;

    /* renamed from: e  reason: collision with root package name */
    private final long f16116e;

    /* renamed from: f  reason: collision with root package name */
    private final int f16117f;

    /* renamed from: g  reason: collision with root package name */
    private final int f16118g;

    /* renamed from: h  reason: collision with root package name */
    private final String f16119h;

    /* renamed from: i  reason: collision with root package name */
    private final String f16120i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s0(String str, int i10, int i11, long j10, long j11, int i12, int i13, String str2, String str3) {
        if (str != null) {
            this.f16112a = str;
            this.f16113b = i10;
            this.f16114c = i11;
            this.f16115d = j10;
            this.f16116e = j11;
            this.f16117f = i12;
            this.f16118g = i13;
            if (str2 != null) {
                this.f16119h = str2;
                if (str3 != null) {
                    this.f16120i = str3;
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
        return this.f16119h;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final long d() {
        return this.f16115d;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof AssetPackState) {
            AssetPackState assetPackState = (AssetPackState) obj;
            if (this.f16112a.equals(assetPackState.h()) && this.f16113b == assetPackState.i() && this.f16114c == assetPackState.f() && this.f16115d == assetPackState.d() && this.f16116e == assetPackState.j() && this.f16117f == assetPackState.k() && this.f16118g == assetPackState.l() && this.f16119h.equals(assetPackState.b()) && this.f16120i.equals(assetPackState.g())) {
                return true;
            }
        }
        return false;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final int f() {
        return this.f16114c;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final String g() {
        return this.f16120i;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final String h() {
        return this.f16112a;
    }

    public final int hashCode() {
        long j10 = this.f16116e;
        String str = this.f16119h;
        long j11 = this.f16115d;
        return ((((((((((((((((this.f16112a.hashCode() ^ 1000003) * 1000003) ^ this.f16113b) * 1000003) ^ this.f16114c) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ this.f16117f) * 1000003) ^ this.f16118g) * 1000003) ^ str.hashCode()) * 1000003) ^ this.f16120i.hashCode();
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final int i() {
        return this.f16113b;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final long j() {
        return this.f16116e;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final int k() {
        return this.f16117f;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final int l() {
        return this.f16118g;
    }

    public final String toString() {
        return "AssetPackState{name=" + this.f16112a + ", status=" + this.f16113b + ", errorCode=" + this.f16114c + ", bytesDownloaded=" + this.f16115d + ", totalBytesToDownload=" + this.f16116e + ", transferProgressPercentage=" + this.f16117f + ", updateAvailability=" + this.f16118g + ", availableVersionTag=" + this.f16119h + ", installedVersionTag=" + this.f16120i + "}";
    }
}
