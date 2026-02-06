package io.sentry.cache;

import io.sentry.SentryLevel;
import io.sentry.k7;
import io.sentry.m1;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.nio.charset.Charset;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class d {

    /* renamed from: a  reason: collision with root package name */
    private static final Charset f27940a = Charset.forName("UTF-8");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void a(k7 k7Var, String str, String str2) {
        File b10 = b(k7Var, str);
        if (b10 == null) {
            k7Var.getLogger().c(SentryLevel.INFO, "Cache dir is not set, cannot delete from scope cache", new Object[0]);
            return;
        }
        File file = new File(b10, str2);
        k7Var.getLogger().c(SentryLevel.DEBUG, "Deleting %s from scope cache", str2);
        if (!file.delete()) {
            k7Var.getLogger().c(SentryLevel.INFO, "Failed to delete: %s", file.getAbsolutePath());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static File b(k7 k7Var, String str) {
        String cacheDirPath = k7Var.getCacheDirPath();
        if (cacheDirPath == null) {
            return null;
        }
        File file = new File(cacheDirPath, str);
        file.mkdirs();
        return file;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Object c(k7 k7Var, String str, String str2, Class cls, m1 m1Var) {
        Object e10;
        File b10 = b(k7Var, str);
        if (b10 == null) {
            k7Var.getLogger().c(SentryLevel.INFO, "Cache dir is not set, cannot read from scope cache", new Object[0]);
            return null;
        }
        File file = new File(b10, str2);
        if (file.exists()) {
            try {
                BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(new FileInputStream(file), f27940a));
                if (m1Var == null) {
                    e10 = k7Var.getSerializer().c(bufferedReader, cls);
                } else {
                    e10 = k7Var.getSerializer().e(bufferedReader, cls, m1Var);
                }
                bufferedReader.close();
                return e10;
            } catch (Throwable th2) {
                k7Var.getLogger().a(SentryLevel.ERROR, th2, "Error reading entity from scope cache: %s", str2);
            }
        } else {
            k7Var.getLogger().c(SentryLevel.DEBUG, "No entry stored for %s", str2);
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void d(k7 k7Var, Object obj, String str, String str2) {
        File b10 = b(k7Var, str);
        if (b10 == null) {
            k7Var.getLogger().c(SentryLevel.INFO, "Cache dir is not set, cannot store in scope cache", new Object[0]);
            return;
        }
        try {
            FileOutputStream fileOutputStream = new FileOutputStream(new File(b10, str2));
            BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(fileOutputStream, f27940a));
            try {
                k7Var.getSerializer().a(obj, bufferedWriter);
                bufferedWriter.close();
                fileOutputStream.close();
            } catch (Throwable th2) {
                try {
                    bufferedWriter.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
                throw th2;
            }
        } catch (Throwable th4) {
            k7Var.getLogger().a(SentryLevel.ERROR, th4, "Error persisting entity: %s", str2);
        }
    }
}
