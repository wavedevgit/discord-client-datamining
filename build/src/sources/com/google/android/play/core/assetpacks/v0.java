package com.google.android.play.core.assetpacks;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class v0 extends h4 {

    /* renamed from: a  reason: collision with root package name */
    private final String f17066a;

    /* renamed from: b  reason: collision with root package name */
    private final long f17067b;

    /* renamed from: c  reason: collision with root package name */
    private final int f17068c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f17069d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f17070e;

    /* renamed from: f  reason: collision with root package name */
    private final byte[] f17071f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v0(String str, long j10, int i10, boolean z10, boolean z11, byte[] bArr) {
        this.f17066a = str;
        this.f17067b = j10;
        this.f17068c = i10;
        this.f17069d = z10;
        this.f17070e = z11;
        this.f17071f = bArr;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.h4
    public final int a() {
        return this.f17068c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.h4
    public final long b() {
        return this.f17067b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.h4
    public final String c() {
        return this.f17066a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.h4
    public final boolean d() {
        return this.f17070e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.h4
    public final boolean e() {
        return this.f17069d;
    }

    public final boolean equals(Object obj) {
        byte[] f10;
        if (obj == this) {
            return true;
        }
        if (obj instanceof h4) {
            h4 h4Var = (h4) obj;
            String str = this.f17066a;
            if (str != null ? str.equals(h4Var.c()) : h4Var.c() == null) {
                if (this.f17067b == h4Var.b() && this.f17068c == h4Var.a() && this.f17069d == h4Var.e() && this.f17070e == h4Var.d()) {
                    byte[] bArr = this.f17071f;
                    if (h4Var instanceof v0) {
                        f10 = ((v0) h4Var).f17071f;
                    } else {
                        f10 = h4Var.f();
                    }
                    if (Arrays.equals(bArr, f10)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.h4
    public final byte[] f() {
        return this.f17071f;
    }

    public final int hashCode() {
        int hashCode;
        int i10;
        String str = this.f17066a;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        long j10 = this.f17067b;
        int i11 = this.f17068c;
        int i12 = 1231;
        if (true != this.f17069d) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        int i13 = ((((hashCode ^ 1000003) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ i11;
        if (true != this.f17070e) {
            i12 = 1237;
        }
        return (((((i13 * 1000003) ^ i10) * 1000003) ^ i12) * 1000003) ^ Arrays.hashCode(this.f17071f);
    }

    public final String toString() {
        String arrays = Arrays.toString(this.f17071f);
        return "ZipEntry{name=" + this.f17066a + ", size=" + this.f17067b + ", compressionMethod=" + this.f17068c + ", isPartial=" + this.f17069d + ", isEndOfArchive=" + this.f17070e + ", headerBytes=" + arrays + "}";
    }
}
