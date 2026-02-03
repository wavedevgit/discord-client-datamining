package com.google.android.play.core.assetpacks;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class s0 extends AssetPackState {

    /* renamed from: a  reason: collision with root package name */
    private final String f15598a;

    /* renamed from: b  reason: collision with root package name */
    private final int f15599b;

    /* renamed from: c  reason: collision with root package name */
    private final int f15600c;

    /* renamed from: d  reason: collision with root package name */
    private final long f15601d;

    /* renamed from: e  reason: collision with root package name */
    private final long f15602e;

    /* renamed from: f  reason: collision with root package name */
    private final int f15603f;

    /* renamed from: g  reason: collision with root package name */
    private final int f15604g;

    /* renamed from: h  reason: collision with root package name */
    private final String f15605h;

    /* renamed from: i  reason: collision with root package name */
    private final String f15606i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s0(String str, int i10, int i11, long j10, long j11, int i12, int i13, String str2, String str3) {
        if (str != null) {
            this.f15598a = str;
            this.f15599b = i10;
            this.f15600c = i11;
            this.f15601d = j10;
            this.f15602e = j11;
            this.f15603f = i12;
            this.f15604g = i13;
            if (str2 != null) {
                this.f15605h = str2;
                if (str3 != null) {
                    this.f15606i = str3;
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
        return this.f15605h;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final long d() {
        return this.f15601d;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof AssetPackState) {
            AssetPackState assetPackState = (AssetPackState) obj;
            if (this.f15598a.equals(assetPackState.h()) && this.f15599b == assetPackState.i() && this.f15600c == assetPackState.f() && this.f15601d == assetPackState.d() && this.f15602e == assetPackState.j() && this.f15603f == assetPackState.k() && this.f15604g == assetPackState.l() && this.f15605h.equals(assetPackState.b()) && this.f15606i.equals(assetPackState.g())) {
                return true;
            }
        }
        return false;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final int f() {
        return this.f15600c;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final String g() {
        return this.f15606i;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final String h() {
        return this.f15598a;
    }

    public final int hashCode() {
        long j10 = this.f15602e;
        String str = this.f15605h;
        long j11 = this.f15601d;
        return ((((((((((((((((this.f15598a.hashCode() ^ 1000003) * 1000003) ^ this.f15599b) * 1000003) ^ this.f15600c) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ this.f15603f) * 1000003) ^ this.f15604g) * 1000003) ^ str.hashCode()) * 1000003) ^ this.f15606i.hashCode();
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final int i() {
        return this.f15599b;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final long j() {
        return this.f15602e;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final int k() {
        return this.f15603f;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final int l() {
        return this.f15604g;
    }

    public final String toString() {
        return "AssetPackState{name=" + this.f15598a + ", status=" + this.f15599b + ", errorCode=" + this.f15600c + ", bytesDownloaded=" + this.f15601d + ", totalBytesToDownload=" + this.f15602e + ", transferProgressPercentage=" + this.f15603f + ", updateAvailability=" + this.f15604g + ", availableVersionTag=" + this.f15605h + ", installedVersionTag=" + this.f15606i + "}";
    }
}
