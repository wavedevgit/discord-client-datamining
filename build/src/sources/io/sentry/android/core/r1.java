package io.sentry.android.core;

import android.content.Context;
import io.sentry.x7;
import java.io.File;
import java.io.FileOutputStream;
import java.io.RandomAccessFile;
import java.nio.charset.Charset;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class r1 {

    /* renamed from: a  reason: collision with root package name */
    static String f27373a;

    /* renamed from: b  reason: collision with root package name */
    private static final Charset f27374b = Charset.forName("UTF-8");

    /* renamed from: c  reason: collision with root package name */
    protected static final io.sentry.util.a f27375c = new io.sentry.util.a();

    public static String a(Context context) {
        io.sentry.a1 a10 = f27375c.a();
        try {
            if (f27373a == null) {
                File file = new File(context.getFilesDir(), "INSTALLATION");
                if (!file.exists()) {
                    String c10 = c(file);
                    f27373a = c10;
                    if (a10 != null) {
                        a10.close();
                    }
                    return c10;
                }
                f27373a = b(file);
            }
            String str = f27373a;
            if (a10 != null) {
                a10.close();
            }
            return str;
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    static String b(File file) {
        RandomAccessFile randomAccessFile = new RandomAccessFile(file, "r");
        try {
            byte[] bArr = new byte[(int) randomAccessFile.length()];
            randomAccessFile.readFully(bArr);
            String str = new String(bArr, f27374b);
            randomAccessFile.close();
            return str;
        } catch (Throwable th2) {
            try {
                randomAccessFile.close();
            } catch (Throwable th3) {
                th2.addSuppressed(th3);
            }
            throw th2;
        }
    }

    static String c(File file) {
        FileOutputStream fileOutputStream = new FileOutputStream(file);
        try {
            String a10 = x7.a();
            fileOutputStream.write(a10.getBytes(f27374b));
            fileOutputStream.flush();
            fileOutputStream.close();
            return a10;
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
