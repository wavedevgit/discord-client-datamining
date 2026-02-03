package com.google.android.play.core.assetpacks;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class s0 extends AssetPackState {

    /* renamed from: a  reason: collision with root package name */
    private final String f16630a;

    /* renamed from: b  reason: collision with root package name */
    private final int f16631b;

    /* renamed from: c  reason: collision with root package name */
    private final int f16632c;

    /* renamed from: d  reason: collision with root package name */
    private final long f16633d;

    /* renamed from: e  reason: collision with root package name */
    private final long f16634e;

    /* renamed from: f  reason: collision with root package name */
    private final int f16635f;

    /* renamed from: g  reason: collision with root package name */
    private final int f16636g;

    /* renamed from: h  reason: collision with root package name */
    private final String f16637h;

    /* renamed from: i  reason: collision with root package name */
    private final String f16638i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s0(String str, int i10, int i11, long j10, long j11, int i12, int i13, String str2, String str3) {
        if (str != null) {
            this.f16630a = str;
            this.f16631b = i10;
            this.f16632c = i11;
            this.f16633d = j10;
            this.f16634e = j11;
            this.f16635f = i12;
            this.f16636g = i13;
            if (str2 != null) {
                this.f16637h = str2;
                if (str3 != null) {
                    this.f16638i = str3;
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
        return this.f16637h;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final long d() {
        return this.f16633d;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof AssetPackState) {
            AssetPackState assetPackState = (AssetPackState) obj;
            if (this.f16630a.equals(assetPackState.h()) && this.f16631b == assetPackState.i() && this.f16632c == assetPackState.f() && this.f16633d == assetPackState.d() && this.f16634e == assetPackState.j() && this.f16635f == assetPackState.k() && this.f16636g == assetPackState.l() && this.f16637h.equals(assetPackState.b()) && this.f16638i.equals(assetPackState.g())) {
                return true;
            }
        }
        return false;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final int f() {
        return this.f16632c;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final String g() {
        return this.f16638i;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final String h() {
        return this.f16630a;
    }

    public final int hashCode() {
        long j10 = this.f16634e;
        String str = this.f16637h;
        long j11 = this.f16633d;
        return ((((((((((((((((this.f16630a.hashCode() ^ 1000003) * 1000003) ^ this.f16631b) * 1000003) ^ this.f16632c) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ this.f16635f) * 1000003) ^ this.f16636g) * 1000003) ^ str.hashCode()) * 1000003) ^ this.f16638i.hashCode();
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final int i() {
        return this.f16631b;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final long j() {
        return this.f16634e;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final int k() {
        return this.f16635f;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final int l() {
        return this.f16636g;
    }

    public final String toString() {
        return "AssetPackState{name=" + this.f16630a + ", status=" + this.f16631b + ", errorCode=" + this.f16632c + ", bytesDownloaded=" + this.f16633d + ", totalBytesToDownload=" + this.f16634e + ", transferProgressPercentage=" + this.f16635f + ", updateAvailability=" + this.f16636g + ", availableVersionTag=" + this.f16637h + ", installedVersionTag=" + this.f16638i + "}";
    }
}
