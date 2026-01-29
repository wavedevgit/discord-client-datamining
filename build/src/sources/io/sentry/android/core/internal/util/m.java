package io.sentry.android.core.internal.util;

import io.sentry.a1;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: c  reason: collision with root package name */
    private static final m f29048c = new m();

    /* renamed from: a  reason: collision with root package name */
    private final io.sentry.util.a f29049a = new io.sentry.util.a();

    /* renamed from: b  reason: collision with root package name */
    private final List f29050b = new ArrayList();

    private m() {
    }

    public static m a() {
        return f29048c;
    }

    String b() {
        return "/sys/devices/system/cpu";
    }

    public List c() {
        a1 a10 = this.f29049a.a();
        try {
            if (!this.f29050b.isEmpty()) {
                List list = this.f29050b;
                if (a10 != null) {
                    a10.close();
                }
                return list;
            }
            File[] listFiles = new File(b()).listFiles();
            if (listFiles == null) {
                ArrayList arrayList = new ArrayList();
                if (a10 != null) {
                    a10.close();
                }
                return arrayList;
            }
            for (File file : listFiles) {
                if (file.getName().matches("cpu[0-9]+")) {
                    try {
                        String c10 = io.sentry.util.i.c(new File(file, "cpufreq/cpuinfo_max_freq"));
                        if (c10 != null) {
                            this.f29050b.add(Integer.valueOf((int) (Long.parseLong(c10.trim()) / 1000)));
                        }
                    } catch (IOException | NumberFormatException unused) {
                    }
                }
            }
            List list2 = this.f29050b;
            if (a10 != null) {
                a10.close();
            }
            return list2;
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
}
