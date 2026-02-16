package com.google.android.play.core.assetpacks;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s0 extends AssetPackState {

    /* renamed from: a  reason: collision with root package name */
    private final String f16862a;

    /* renamed from: b  reason: collision with root package name */
    private final int f16863b;

    /* renamed from: c  reason: collision with root package name */
    private final int f16864c;

    /* renamed from: d  reason: collision with root package name */
    private final long f16865d;

    /* renamed from: e  reason: collision with root package name */
    private final long f16866e;

    /* renamed from: f  reason: collision with root package name */
    private final int f16867f;

    /* renamed from: g  reason: collision with root package name */
    private final int f16868g;

    /* renamed from: h  reason: collision with root package name */
    private final String f16869h;

    /* renamed from: i  reason: collision with root package name */
    private final String f16870i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s0(String str, int i10, int i11, long j10, long j11, int i12, int i13, String str2, String str3) {
        if (str != null) {
            this.f16862a = str;
            this.f16863b = i10;
            this.f16864c = i11;
            this.f16865d = j10;
            this.f16866e = j11;
            this.f16867f = i12;
            this.f16868g = i13;
            if (str2 != null) {
                this.f16869h = str2;
                if (str3 != null) {
                    this.f16870i = str3;
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
        return this.f16869h;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final long d() {
        return this.f16865d;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof AssetPackState) {
            AssetPackState assetPackState = (AssetPackState) obj;
            if (this.f16862a.equals(assetPackState.h()) && this.f16863b == assetPackState.i() && this.f16864c == assetPackState.f() && this.f16865d == assetPackState.d() && this.f16866e == assetPackState.j() && this.f16867f == assetPackState.k() && this.f16868g == assetPackState.l() && this.f16869h.equals(assetPackState.b()) && this.f16870i.equals(assetPackState.g())) {
                return true;
            }
        }
        return false;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final int f() {
        return this.f16864c;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final String g() {
        return this.f16870i;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final String h() {
        return this.f16862a;
    }

    public final int hashCode() {
        long j10 = this.f16866e;
        String str = this.f16869h;
        long j11 = this.f16865d;
        return ((((((((((((((((this.f16862a.hashCode() ^ 1000003) * 1000003) ^ this.f16863b) * 1000003) ^ this.f16864c) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ this.f16867f) * 1000003) ^ this.f16868g) * 1000003) ^ str.hashCode()) * 1000003) ^ this.f16870i.hashCode();
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final int i() {
        return this.f16863b;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final long j() {
        return this.f16866e;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final int k() {
        return this.f16867f;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final int l() {
        return this.f16868g;
    }

    public final String toString() {
        return "AssetPackState{name=" + this.f16862a + ", status=" + this.f16863b + ", errorCode=" + this.f16864c + ", bytesDownloaded=" + this.f16865d + ", totalBytesToDownload=" + this.f16866e + ", transferProgressPercentage=" + this.f16867f + ", updateAvailability=" + this.f16868g + ", availableVersionTag=" + this.f16869h + ", installedVersionTag=" + this.f16870i + "}";
    }
}
