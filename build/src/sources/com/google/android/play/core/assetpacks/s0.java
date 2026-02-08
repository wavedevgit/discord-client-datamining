package com.google.android.play.core.assetpacks;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s0 extends AssetPackState {

    /* renamed from: a  reason: collision with root package name */
    private final String f15972a;

    /* renamed from: b  reason: collision with root package name */
    private final int f15973b;

    /* renamed from: c  reason: collision with root package name */
    private final int f15974c;

    /* renamed from: d  reason: collision with root package name */
    private final long f15975d;

    /* renamed from: e  reason: collision with root package name */
    private final long f15976e;

    /* renamed from: f  reason: collision with root package name */
    private final int f15977f;

    /* renamed from: g  reason: collision with root package name */
    private final int f15978g;

    /* renamed from: h  reason: collision with root package name */
    private final String f15979h;

    /* renamed from: i  reason: collision with root package name */
    private final String f15980i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s0(String str, int i10, int i11, long j10, long j11, int i12, int i13, String str2, String str3) {
        if (str != null) {
            this.f15972a = str;
            this.f15973b = i10;
            this.f15974c = i11;
            this.f15975d = j10;
            this.f15976e = j11;
            this.f15977f = i12;
            this.f15978g = i13;
            if (str2 != null) {
                this.f15979h = str2;
                if (str3 != null) {
                    this.f15980i = str3;
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
        return this.f15979h;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final long d() {
        return this.f15975d;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof AssetPackState) {
            AssetPackState assetPackState = (AssetPackState) obj;
            if (this.f15972a.equals(assetPackState.h()) && this.f15973b == assetPackState.i() && this.f15974c == assetPackState.f() && this.f15975d == assetPackState.d() && this.f15976e == assetPackState.j() && this.f15977f == assetPackState.k() && this.f15978g == assetPackState.l() && this.f15979h.equals(assetPackState.b()) && this.f15980i.equals(assetPackState.g())) {
                return true;
            }
        }
        return false;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final int f() {
        return this.f15974c;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final String g() {
        return this.f15980i;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final String h() {
        return this.f15972a;
    }

    public final int hashCode() {
        long j10 = this.f15976e;
        String str = this.f15979h;
        long j11 = this.f15975d;
        return ((((((((((((((((this.f15972a.hashCode() ^ 1000003) * 1000003) ^ this.f15973b) * 1000003) ^ this.f15974c) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ this.f15977f) * 1000003) ^ this.f15978g) * 1000003) ^ str.hashCode()) * 1000003) ^ this.f15980i.hashCode();
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final int i() {
        return this.f15973b;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final long j() {
        return this.f15976e;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final int k() {
        return this.f15977f;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final int l() {
        return this.f15978g;
    }

    public final String toString() {
        return "AssetPackState{name=" + this.f15972a + ", status=" + this.f15973b + ", errorCode=" + this.f15974c + ", bytesDownloaded=" + this.f15975d + ", totalBytesToDownload=" + this.f15976e + ", transferProgressPercentage=" + this.f15977f + ", updateAvailability=" + this.f15978g + ", availableVersionTag=" + this.f15979h + ", installedVersionTag=" + this.f15980i + "}";
    }
}
