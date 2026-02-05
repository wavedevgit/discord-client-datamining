package io.sentry.android.core.internal.util;

import io.sentry.a1;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: c  reason: collision with root package name */
    private static final m f28049c = new m();

    /* renamed from: a  reason: collision with root package name */
    private final io.sentry.util.a f28050a = new io.sentry.util.a();

    /* renamed from: b  reason: collision with root package name */
    private final List f28051b = new ArrayList();

    private m() {
    }

    public static m a() {
        return f28049c;
    }

    String b() {
        return "/sys/devices/system/cpu";
    }

    public List c() {
        a1 a10 = this.f28050a.a();
        try {
            if (!this.f28051b.isEmpty()) {
                List list = this.f28051b;
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
                            this.f28051b.add(Integer.valueOf((int) (Long.parseLong(c10.trim()) / 1000)));
                        }
                    } catch (IOException | NumberFormatException unused) {
                    }
                }
            }
            List list2 = this.f28051b;
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
