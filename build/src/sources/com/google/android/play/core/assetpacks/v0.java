package com.google.android.play.core.assetpacks;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class v0 extends h4 {

    /* renamed from: a  reason: collision with root package name */
    private final String f15663a;

    /* renamed from: b  reason: collision with root package name */
    private final long f15664b;

    /* renamed from: c  reason: collision with root package name */
    private final int f15665c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f15666d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f15667e;

    /* renamed from: f  reason: collision with root package name */
    private final byte[] f15668f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v0(String str, long j10, int i10, boolean z10, boolean z11, byte[] bArr) {
        this.f15663a = str;
        this.f15664b = j10;
        this.f15665c = i10;
        this.f15666d = z10;
        this.f15667e = z11;
        this.f15668f = bArr;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.h4
    public final int a() {
        return this.f15665c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.h4
    public final long b() {
        return this.f15664b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.h4
    public final String c() {
        return this.f15663a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.h4
    public final boolean d() {
        return this.f15667e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.h4
    public final boolean e() {
        return this.f15666d;
    }

    public final boolean equals(Object obj) {
        byte[] f10;
        if (obj == this) {
            return true;
        }
        if (obj instanceof h4) {
            h4 h4Var = (h4) obj;
            String str = this.f15663a;
            if (str != null ? str.equals(h4Var.c()) : h4Var.c() == null) {
                if (this.f15664b == h4Var.b() && this.f15665c == h4Var.a() && this.f15666d == h4Var.e() && this.f15667e == h4Var.d()) {
                    byte[] bArr = this.f15668f;
                    if (h4Var instanceof v0) {
                        f10 = ((v0) h4Var).f15668f;
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
        return this.f15668f;
    }

    public final int hashCode() {
        int hashCode;
        int i10;
        String str = this.f15663a;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        long j10 = this.f15664b;
        int i11 = this.f15665c;
        int i12 = 1231;
        if (true != this.f15666d) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        int i13 = ((((hashCode ^ 1000003) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ i11;
        if (true != this.f15667e) {
            i12 = 1237;
        }
        return (((((i13 * 1000003) ^ i10) * 1000003) ^ i12) * 1000003) ^ Arrays.hashCode(this.f15668f);
    }

    public final String toString() {
        String arrays = Arrays.toString(this.f15668f);
        return "ZipEntry{name=" + this.f15663a + ", size=" + this.f15664b + ", compressionMethod=" + this.f15665c + ", isPartial=" + this.f15666d + ", isEndOfArchive=" + this.f15667e + ", headerBytes=" + arrays + "}";
    }
}
