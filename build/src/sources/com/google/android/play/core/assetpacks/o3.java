package com.google.android.play.core.assetpacks;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Properties;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o3 {

    /* renamed from: c  reason: collision with root package name */
    private static final xh.k0 f15924c = new xh.k0("PackMetadataManager");

    /* renamed from: a  reason: collision with root package name */
    private final n0 f15925a;

    /* renamed from: b  reason: collision with root package name */
    private final q3 f15926b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o3(n0 n0Var, q3 q3Var) {
        this.f15925a = n0Var;
        this.f15926b = q3Var;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final String a(String str) {
        if (!this.f15925a.f(str)) {
            return "";
        }
        q3 q3Var = this.f15926b;
        n0 n0Var = this.f15925a;
        int a10 = q3Var.a();
        File x10 = n0Var.x(str, a10, n0Var.r(str));
        try {
            if (!x10.exists()) {
                return String.valueOf(a10);
            }
            FileInputStream fileInputStream = new FileInputStream(x10);
            Properties properties = new Properties();
            properties.load(fileInputStream);
            fileInputStream.close();
            String property = properties.getProperty("moduleVersionTag");
            if (property == null) {
                return String.valueOf(a10);
            }
            return property;
        } catch (IOException unused) {
            f15924c.b("Failed to read pack version tag for pack %s", str);
            return "";
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b(String str, int i10, long j10, String str2) {
        if (str2 == null || str2.isEmpty()) {
            str2 = String.valueOf(i10);
        }
        Properties properties = new Properties();
        properties.put("moduleVersionTag", str2);
        File x10 = this.f15925a.x(str, i10, j10);
        x10.getParentFile().mkdirs();
        x10.createNewFile();
        FileOutputStream fileOutputStream = new FileOutputStream(x10);
        try {
            properties.store(fileOutputStream, (String) null);
            fileOutputStream.close();
        } catch (Throwable th2) {
            try {
                fileOutputStream.close();
            } catch (Throwable th3) {
                th2.addSuppressed(th3);
            }
            throw th2;
        }
    }
}
