package com.google.android.gms.common.util;

import android.app.Application;
import android.os.Build;
import android.os.Process;
import android.os.StrictMode;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class l {

    /* renamed from: a  reason: collision with root package name */
    private static String f14475a;

    /* renamed from: b  reason: collision with root package name */
    private static int f14476b;

    /* renamed from: c  reason: collision with root package name */
    private static Boolean f14477c;

    public static String a() {
        BufferedReader bufferedReader;
        if (f14475a == null) {
            if (Build.VERSION.SDK_INT >= 28) {
                f14475a = Application.getProcessName();
            } else {
                int i10 = f14476b;
                if (i10 == 0) {
                    i10 = Process.myPid();
                    f14476b = i10;
                }
                String str = null;
                str = null;
                str = null;
                BufferedReader bufferedReader2 = null;
                if (i10 > 0) {
                    try {
                        String str2 = "/proc/" + i10 + "/cmdline";
                        StrictMode.ThreadPolicy allowThreadDiskReads = StrictMode.allowThreadDiskReads();
                        try {
                            bufferedReader = new BufferedReader(new FileReader(str2));
                            try {
                                String readLine = bufferedReader.readLine();
                                gf.q.l(readLine);
                                str = readLine.trim();
                            } catch (IOException unused) {
                            } catch (Throwable th2) {
                                th = th2;
                                bufferedReader2 = bufferedReader;
                                j.a(bufferedReader2);
                                throw th;
                            }
                        } finally {
                            StrictMode.setThreadPolicy(allowThreadDiskReads);
                        }
                    } catch (IOException unused2) {
                        bufferedReader = null;
                    } catch (Throwable th3) {
                        th = th3;
                    }
                    j.a(bufferedReader);
                }
                f14475a = str;
            }
        }
        return f14475a;
    }

    public static boolean b() {
        Boolean bool = f14477c;
        if (bool == null) {
            if (k.f()) {
                bool = Boolean.valueOf(Process.isIsolated());
            } else {
                try {
                    Object a10 = hg.i.a(Process.class, "isIsolated", new hg.h[0]);
                    Object[] objArr = new Object[0];
                    if (a10 != null) {
                        bool = (Boolean) a10;
                    } else {
                        throw new hg.d(hg.c.a("expected a non-null reference", objArr));
                    }
                } catch (ReflectiveOperationException unused) {
                    bool = Boolean.FALSE;
                }
            }
            f14477c = bool;
        }
        return bool.booleanValue();
    }
}
