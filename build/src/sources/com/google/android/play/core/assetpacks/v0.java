package com.google.android.play.core.assetpacks;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class v0 extends h4 {

    /* renamed from: a  reason: collision with root package name */
    private final String f16927a;

    /* renamed from: b  reason: collision with root package name */
    private final long f16928b;

    /* renamed from: c  reason: collision with root package name */
    private final int f16929c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f16930d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f16931e;

    /* renamed from: f  reason: collision with root package name */
    private final byte[] f16932f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v0(String str, long j10, int i10, boolean z10, boolean z11, byte[] bArr) {
        this.f16927a = str;
        this.f16928b = j10;
        this.f16929c = i10;
        this.f16930d = z10;
        this.f16931e = z11;
        this.f16932f = bArr;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.h4
    public final int a() {
        return this.f16929c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.h4
    public final long b() {
        return this.f16928b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.h4
    public final String c() {
        return this.f16927a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.h4
    public final boolean d() {
        return this.f16931e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.h4
    public final boolean e() {
        return this.f16930d;
    }

    public final boolean equals(Object obj) {
        byte[] f10;
        if (obj == this) {
            return true;
        }
        if (obj instanceof h4) {
            h4 h4Var = (h4) obj;
            String str = this.f16927a;
            if (str != null ? str.equals(h4Var.c()) : h4Var.c() == null) {
                if (this.f16928b == h4Var.b() && this.f16929c == h4Var.a() && this.f16930d == h4Var.e() && this.f16931e == h4Var.d()) {
                    byte[] bArr = this.f16932f;
                    if (h4Var instanceof v0) {
                        f10 = ((v0) h4Var).f16932f;
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
        return this.f16932f;
    }

    public final int hashCode() {
        int hashCode;
        int i10;
        String str = this.f16927a;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        long j10 = this.f16928b;
        int i11 = this.f16929c;
        int i12 = 1231;
        if (true != this.f16930d) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        int i13 = ((((hashCode ^ 1000003) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ i11;
        if (true != this.f16931e) {
            i12 = 1237;
        }
        return (((((i13 * 1000003) ^ i10) * 1000003) ^ i12) * 1000003) ^ Arrays.hashCode(this.f16932f);
    }

    public final String toString() {
        String arrays = Arrays.toString(this.f16932f);
        return "ZipEntry{name=" + this.f16927a + ", size=" + this.f16928b + ", compressionMethod=" + this.f16929c + ", isPartial=" + this.f16930d + ", isEndOfArchive=" + this.f16931e + ", headerBytes=" + arrays + "}";
    }
}
