package com.google.android.play.core.assetpacks;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class v0 extends h4 {

    /* renamed from: a  reason: collision with root package name */
    private final String f16926a;

    /* renamed from: b  reason: collision with root package name */
    private final long f16927b;

    /* renamed from: c  reason: collision with root package name */
    private final int f16928c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f16929d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f16930e;

    /* renamed from: f  reason: collision with root package name */
    private final byte[] f16931f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v0(String str, long j10, int i10, boolean z10, boolean z11, byte[] bArr) {
        this.f16926a = str;
        this.f16927b = j10;
        this.f16928c = i10;
        this.f16929d = z10;
        this.f16930e = z11;
        this.f16931f = bArr;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.h4
    public final int a() {
        return this.f16928c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.h4
    public final long b() {
        return this.f16927b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.h4
    public final String c() {
        return this.f16926a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.h4
    public final boolean d() {
        return this.f16930e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.h4
    public final boolean e() {
        return this.f16929d;
    }

    public final boolean equals(Object obj) {
        byte[] f10;
        if (obj == this) {
            return true;
        }
        if (obj instanceof h4) {
            h4 h4Var = (h4) obj;
            String str = this.f16926a;
            if (str != null ? str.equals(h4Var.c()) : h4Var.c() == null) {
                if (this.f16927b == h4Var.b() && this.f16928c == h4Var.a() && this.f16929d == h4Var.e() && this.f16930e == h4Var.d()) {
                    byte[] bArr = this.f16931f;
                    if (h4Var instanceof v0) {
                        f10 = ((v0) h4Var).f16931f;
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
        return this.f16931f;
    }

    public final int hashCode() {
        int hashCode;
        int i10;
        String str = this.f16926a;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        long j10 = this.f16927b;
        int i11 = this.f16928c;
        int i12 = 1231;
        if (true != this.f16929d) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        int i13 = ((((hashCode ^ 1000003) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ i11;
        if (true != this.f16930e) {
            i12 = 1237;
        }
        return (((((i13 * 1000003) ^ i10) * 1000003) ^ i12) * 1000003) ^ Arrays.hashCode(this.f16931f);
    }

    public final String toString() {
        String arrays = Arrays.toString(this.f16931f);
        return "ZipEntry{name=" + this.f16926a + ", size=" + this.f16927b + ", compressionMethod=" + this.f16928c + ", isPartial=" + this.f16929d + ", isEndOfArchive=" + this.f16930e + ", headerBytes=" + arrays + "}";
    }
}
