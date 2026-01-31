package com.google.android.play.core.assetpacks;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s0 extends AssetPackState {

    /* renamed from: a  reason: collision with root package name */
    private final String f17001a;

    /* renamed from: b  reason: collision with root package name */
    private final int f17002b;

    /* renamed from: c  reason: collision with root package name */
    private final int f17003c;

    /* renamed from: d  reason: collision with root package name */
    private final long f17004d;

    /* renamed from: e  reason: collision with root package name */
    private final long f17005e;

    /* renamed from: f  reason: collision with root package name */
    private final int f17006f;

    /* renamed from: g  reason: collision with root package name */
    private final int f17007g;

    /* renamed from: h  reason: collision with root package name */
    private final String f17008h;

    /* renamed from: i  reason: collision with root package name */
    private final String f17009i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s0(String str, int i10, int i11, long j10, long j11, int i12, int i13, String str2, String str3) {
        if (str != null) {
            this.f17001a = str;
            this.f17002b = i10;
            this.f17003c = i11;
            this.f17004d = j10;
            this.f17005e = j11;
            this.f17006f = i12;
            this.f17007g = i13;
            if (str2 != null) {
                this.f17008h = str2;
                if (str3 != null) {
                    this.f17009i = str3;
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
        return this.f17008h;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final long d() {
        return this.f17004d;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof AssetPackState) {
            AssetPackState assetPackState = (AssetPackState) obj;
            if (this.f17001a.equals(assetPackState.h()) && this.f17002b == assetPackState.i() && this.f17003c == assetPackState.f() && this.f17004d == assetPackState.d() && this.f17005e == assetPackState.j() && this.f17006f == assetPackState.k() && this.f17007g == assetPackState.l() && this.f17008h.equals(assetPackState.b()) && this.f17009i.equals(assetPackState.g())) {
                return true;
            }
        }
        return false;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final int f() {
        return this.f17003c;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final String g() {
        return this.f17009i;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final String h() {
        return this.f17001a;
    }

    public final int hashCode() {
        long j10 = this.f17005e;
        String str = this.f17008h;
        long j11 = this.f17004d;
        return ((((((((((((((((this.f17001a.hashCode() ^ 1000003) * 1000003) ^ this.f17002b) * 1000003) ^ this.f17003c) * 1000003) ^ ((int) ((j11 >>> 32) ^ j11))) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ this.f17006f) * 1000003) ^ this.f17007g) * 1000003) ^ str.hashCode()) * 1000003) ^ this.f17009i.hashCode();
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final int i() {
        return this.f17002b;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final long j() {
        return this.f17005e;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final int k() {
        return this.f17006f;
    }

    @Override // com.google.android.play.core.assetpacks.AssetPackState
    public final int l() {
        return this.f17007g;
    }

    public final String toString() {
        return "AssetPackState{name=" + this.f17001a + ", status=" + this.f17002b + ", errorCode=" + this.f17003c + ", bytesDownloaded=" + this.f17004d + ", totalBytesToDownload=" + this.f17005e + ", transferProgressPercentage=" + this.f17006f + ", updateAvailability=" + this.f17007g + ", availableVersionTag=" + this.f17008h + ", installedVersionTag=" + this.f17009i + "}";
    }
}
