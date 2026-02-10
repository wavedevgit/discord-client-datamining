package com.google.android.play.core.assetpacks;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class v0 extends h4 {

    /* renamed from: a  reason: collision with root package name */
    private final String f16177a;

    /* renamed from: b  reason: collision with root package name */
    private final long f16178b;

    /* renamed from: c  reason: collision with root package name */
    private final int f16179c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f16180d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f16181e;

    /* renamed from: f  reason: collision with root package name */
    private final byte[] f16182f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v0(String str, long j10, int i10, boolean z10, boolean z11, byte[] bArr) {
        this.f16177a = str;
        this.f16178b = j10;
        this.f16179c = i10;
        this.f16180d = z10;
        this.f16181e = z11;
        this.f16182f = bArr;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.h4
    public final int a() {
        return this.f16179c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.h4
    public final long b() {
        return this.f16178b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.h4
    public final String c() {
        return this.f16177a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.h4
    public final boolean d() {
        return this.f16181e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.google.android.play.core.assetpacks.h4
    public final boolean e() {
        return this.f16180d;
    }

    public final boolean equals(Object obj) {
        byte[] f10;
        if (obj == this) {
            return true;
        }
        if (obj instanceof h4) {
            h4 h4Var = (h4) obj;
            String str = this.f16177a;
            if (str != null ? str.equals(h4Var.c()) : h4Var.c() == null) {
                if (this.f16178b == h4Var.b() && this.f16179c == h4Var.a() && this.f16180d == h4Var.e() && this.f16181e == h4Var.d()) {
                    byte[] bArr = this.f16182f;
                    if (h4Var instanceof v0) {
                        f10 = ((v0) h4Var).f16182f;
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
        return this.f16182f;
    }

    public final int hashCode() {
        int hashCode;
        int i10;
        String str = this.f16177a;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        long j10 = this.f16178b;
        int i11 = this.f16179c;
        int i12 = 1231;
        if (true != this.f16180d) {
            i10 = 1237;
        } else {
            i10 = 1231;
        }
        int i13 = ((((hashCode ^ 1000003) * 1000003) ^ ((int) (j10 ^ (j10 >>> 32)))) * 1000003) ^ i11;
        if (true != this.f16181e) {
            i12 = 1237;
        }
        return (((((i13 * 1000003) ^ i10) * 1000003) ^ i12) * 1000003) ^ Arrays.hashCode(this.f16182f);
    }

    public final String toString() {
        String arrays = Arrays.toString(this.f16182f);
        return "ZipEntry{name=" + this.f16177a + ", size=" + this.f16178b + ", compressionMethod=" + this.f16179c + ", isPartial=" + this.f16180d + ", isEndOfArchive=" + this.f16181e + ", headerBytes=" + arrays + "}";
    }
}
