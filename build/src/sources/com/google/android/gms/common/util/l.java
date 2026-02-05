package com.google.android.gms.common.util;

import android.app.Application;
import android.os.Build;
import android.os.Process;
import android.os.StrictMode;
import hg.f0;
import hg.g0;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class l {

    /* renamed from: a  reason: collision with root package name */
    private static String f13839a;

    /* renamed from: b  reason: collision with root package name */
    private static int f13840b;

    /* renamed from: c  reason: collision with root package name */
    private static Boolean f13841c;

    public static String a() {
        BufferedReader bufferedReader;
        if (f13839a == null) {
            if (Build.VERSION.SDK_INT >= 28) {
                f13839a = Application.getProcessName();
            } else {
                int i10 = f13840b;
                if (i10 == 0) {
                    i10 = Process.myPid();
                    f13840b = i10;
                }
                String str = null;
                str = null;
                str = null;
                BufferedReader bufferedReader2 = null;
                if (i10 > 0) {
                    try {
                        StringBuilder sb2 = new StringBuilder(String.valueOf(i10).length() + 14);
                        sb2.append("/proc/");
                        sb2.append(i10);
                        sb2.append("/cmdline");
                        String sb3 = sb2.toString();
                        StrictMode.ThreadPolicy allowThreadDiskReads = StrictMode.allowThreadDiskReads();
                        bufferedReader = new BufferedReader(new FileReader(sb3));
                        StrictMode.setThreadPolicy(allowThreadDiskReads);
                    } catch (IOException unused) {
                        bufferedReader = null;
                    } catch (Throwable th2) {
                        th = th2;
                    }
                    try {
                        String readLine = bufferedReader.readLine();
                        gf.q.l(readLine);
                        str = readLine.trim();
                    } catch (IOException unused2) {
                    } catch (Throwable th3) {
                        th = th3;
                        bufferedReader2 = bufferedReader;
                        j.a(bufferedReader2);
                        throw th;
                    }
                    j.a(bufferedReader);
                }
                f13839a = str;
            }
        }
        return f13839a;
    }

    public static boolean b() {
        Boolean bool = f13841c;
        if (bool == null) {
            if (k.f()) {
                bool = Boolean.valueOf(Process.isIsolated());
            } else {
                try {
                    Object a10 = hg.r.a(Process.class, "isIsolated", new hg.q[0]);
                    Object[] objArr = new Object[0];
                    if (a10 != null) {
                        bool = (Boolean) a10;
                    } else {
                        throw new g0(f0.a("expected a non-null reference", objArr));
                    }
                } catch (ReflectiveOperationException unused) {
                    bool = Boolean.FALSE;
                }
            }
            f13841c = bool;
        }
        return bool.booleanValue();
    }
}
