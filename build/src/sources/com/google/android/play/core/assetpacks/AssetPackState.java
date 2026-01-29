package com.google.android.play.core.assetpacks;

import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class AssetPackState {
    public static AssetPackState a(String str, int i10, int i11, long j10, long j11, double d10, int i12, String str2, String str3) {
        return new s0(str, i10, i11, j10, j11, (int) Math.rint(100.0d * d10), i12, str2, str3);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static AssetPackState c(Bundle bundle, String str, b2 b2Var, o3 o3Var) {
        return e(bundle, str, b2Var, o3Var, new g0() { // from class: com.google.android.play.core.assetpacks.f0
            @Override // com.google.android.play.core.assetpacks.g0
            public final int a(int i10, String str2) {
                return i10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static AssetPackState e(Bundle bundle, String str, b2 b2Var, o3 o3Var, g0 g0Var) {
        int a10 = g0Var.a(bundle.getInt(uh.b.a("status", str)), str);
        int i10 = bundle.getInt(uh.b.a("error_code", str));
        long j10 = bundle.getLong(uh.b.a("bytes_downloaded", str));
        long j11 = bundle.getLong(uh.b.a("total_bytes_to_download", str));
        double a11 = b2Var.a(str);
        long j12 = bundle.getLong(uh.b.a("pack_version", str));
        long j13 = bundle.getLong(uh.b.a("pack_base_version", str));
        int i11 = 1;
        if (a10 == 4) {
            if (j13 != 0 && j13 != j12) {
                i11 = 2;
            }
            a10 = 4;
        }
        return a(str, a10, i10, j10, j11, a11, i11, bundle.getString(uh.b.a("pack_version_tag", str), String.valueOf(bundle.getInt("app_version_code"))), o3Var.a(str));
    }

    public abstract String b();

    public abstract long d();

    public abstract int f();

    public abstract String g();

    public abstract String h();

    public abstract int i();

    public abstract long j();

    public abstract int k();

    public abstract int l();
}
