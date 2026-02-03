package com.google.android.play.core.assetpacks;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class r0 extends b {

    /* renamed from: c  reason: collision with root package name */
    private final int f16614c;

    /* renamed from: d  reason: collision with root package name */
    private final String f16615d;

    /* renamed from: e  reason: collision with root package name */
    private final String f16616e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public r0(int i10, String str, String str2) {
        this.f16614c = i10;
        this.f16615d = str;
        this.f16616e = str2;
    }

    @Override // com.google.android.play.core.assetpacks.b
    public final String b() {
        return this.f16616e;
    }

    @Override // com.google.android.play.core.assetpacks.b
    public final int c() {
        return this.f16614c;
    }

    @Override // com.google.android.play.core.assetpacks.b
    public final String d() {
        return this.f16615d;
    }

    public final boolean equals(Object obj) {
        String str;
        String str2;
        if (obj == this) {
            return true;
        }
        if (obj instanceof b) {
            b bVar = (b) obj;
            if (this.f16614c == bVar.c() && ((str = this.f16615d) != null ? str.equals(bVar.d()) : bVar.d() == null) && ((str2 = this.f16616e) != null ? str2.equals(bVar.b()) : bVar.b() == null)) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        int hashCode;
        String str = this.f16615d;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = this.f16614c;
        String str2 = this.f16616e;
        if (str2 != null) {
            i10 = str2.hashCode();
        }
        return ((hashCode ^ ((i11 ^ 1000003) * 1000003)) * 1000003) ^ i10;
    }

    public final String toString() {
        return "AssetPackLocation{packStorageMethod=" + this.f16614c + ", path=" + this.f16615d + ", assetsPath=" + this.f16616e + "}";
    }
}
