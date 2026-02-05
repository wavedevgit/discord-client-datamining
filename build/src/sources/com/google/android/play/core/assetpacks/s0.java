package com.google.android.play.core.assetpacks;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s0 extends AssetPackState {

    /* renamed from: a  reason: collision with root package name */
    private final String f15992a;

    /* renamed from: b  reason: collision with root package name */
    private final int f15993b;

    /* renamed from: c  reason: collision with root package name */
    private final int f15994c;

    /* renamed from: d  reason: collision with root package name */
    private final long f15995d;

    /* renamed from: e  reason: collision with root package name */
    private final long f15996e;

    /* renamed from: f  reason: collision with root package name */
    private final int f15997f;

    /* renamed from: g  reason: collision with root package name */
    private final int f15998g;

    /* renamed from: h  reason: collision with root package name */
    private final String f15999h;

    /* renamed from: i  reason: collision with root package name */
    private final String f16000i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s0(String str, int i10, int i11, long j10, long j11, int i12, int i13, String str2, String str3) {
        if (str != null) {
            this.f15992a = str;
            this.f15993b = i10;
            this.f15994c = i11;
            this.f15995d = j10;
            this.f15996e = j11;
            this.f15997f = i12;
            this.f15998g = i13;
            if (str2 != null) {
                this.f15999h = str2;
                if (str3 != null) {
                    this.f16000i = str3;
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
        return this.f15999h;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final long d() {
        return this.f15995d;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof AssetPackState) {
            AssetPackState assetPackState = (AssetPackState) obj;
            if (this.f15992a.equals(assetPackState.h()) && this.f15993b == assetPackState.i() && this.f15994c == assetPackState.f() && this.f15995d == assetPackState.d() && this.f15996e == assetPackState.j() && this.f15997f == assetPackState.k() && this.f15998g == assetPackState.l() && this.f15999h.equals(assetPackState.b()) && this.f16000i.equals(assetPackState.g())) {
                return true;
            }
        }
        return false;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final int f() {
        return this.f15994c;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final String g() {
        return this.f16000i;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final String h() {
        return this.f15992a;
    }

    public final int hashCode() {
        long j10 = this.f15996e;
        String str = this.f15999h;
        long j11 = this.f15995d;
        return ((((((((((((((((this.f15992a.hashCode() ^ 1000003) * 1000003) ^ this.f15993b) * 1000003) ^ this.f15994c) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ this.f15997f) * 1000003) ^ this.f15998g) * 1000003) ^ str.hashCode()) * 1000003) ^ this.f16000i.hashCode();
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final int i() {
        return this.f15993b;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final long j() {
        return this.f15996e;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final int k() {
        return this.f15997f;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final int l() {
        return this.f15998g;
    }

    public final String toString() {
        return "AssetPackState{name=" + this.f15992a + ", status=" + this.f15993b + ", errorCode=" + this.f15994c + ", bytesDownloaded=" + this.f15995d + ", totalBytesToDownload=" + this.f15996e + ", transferProgressPercentage=" + this.f15997f + ", updateAvailability=" + this.f15998g + ", availableVersionTag=" + this.f15999h + ", installedVersionTag=" + this.f16000i + "}";
    }
}
