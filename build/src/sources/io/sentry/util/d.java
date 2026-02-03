package io.sentry.util;

import io.sentry.SentryLevel;
import io.sentry.k7;
import io.sentry.u6;
import java.util.Iterator;
import java.util.List;
import java.util.Properties;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class d {

    /* renamed from: a  reason: collision with root package name */
    public static String f30744a = "sentry-debug-meta.properties";

    public static void a(k7 k7Var, List list) {
        if (list != null) {
            f(k7Var, list);
            b(k7Var, list);
            d(k7Var, list);
        }
    }

    private static void b(k7 k7Var, List list) {
        Iterator it = list.iterator();
        while (it.hasNext()) {
            Properties properties = (Properties) it.next();
            String g10 = g(properties);
            if (g10 != null) {
                String h10 = h(properties);
                if (h10 == null) {
                    h10 = "unknown";
                }
                k7Var.getLogger().c(SentryLevel.DEBUG, "Build tool found: %s, version %s", g10, h10);
                u6.d().b(g10, h10);
                return;
            }
        }
    }

    private static void c(k7 k7Var, List list) {
        if (k7Var.getBundleIds().isEmpty()) {
            Iterator it = list.iterator();
            while (it.hasNext()) {
                String property = ((Properties) it.next()).getProperty("io.sentry.bundle-ids");
                k7Var.getLogger().c(SentryLevel.DEBUG, "Bundle IDs found: %s", property);
                if (property != null) {
                    for (String str : property.split(",", -1)) {
                        k7Var.addBundleId(str);
                    }
                }
            }
        }
    }

    private static void d(k7 k7Var, List list) {
        k7.g distribution;
        Iterator it = list.iterator();
        while (it.hasNext()) {
            Properties properties = (Properties) it.next();
            String k10 = k(properties);
            String l10 = l(properties);
            String i10 = i(properties);
            String j10 = j(properties);
            if (k10 == null && l10 == null && i10 == null) {
                if (j10 != null) {
                    distribution = k7Var.getDistribution();
                    if (k10 != null) {
                        k7Var.getLogger().c(SentryLevel.DEBUG, "Distribution org slug found: %s", k10);
                        distribution.f30052b = k10;
                    }
                    if (l10 != null) {
                        k7Var.getLogger().c(SentryLevel.DEBUG, "Distribution project slug found: %s", l10);
                        distribution.f30053c = l10;
                    }
                    if (i10 != null) {
                        k7Var.getLogger().c(SentryLevel.DEBUG, "Distribution org auth token found", new Object[0]);
                        distribution.f30051a = i10;
                    }
                    if (j10 == null) {
                        return;
                    }
                    return;
                }
            } else {
                distribution = k7Var.getDistribution();
                if (k10 != null && !k10.isEmpty() && distribution.f30052b.isEmpty()) {
                    k7Var.getLogger().c(SentryLevel.DEBUG, "Distribution org slug found: %s", k10);
                    distribution.f30052b = k10;
                }
                if (l10 != null && !l10.isEmpty() && distribution.f30053c.isEmpty()) {
                    k7Var.getLogger().c(SentryLevel.DEBUG, "Distribution project slug found: %s", l10);
                    distribution.f30053c = l10;
                }
                if (i10 != null && !i10.isEmpty() && distribution.f30051a.isEmpty()) {
                    k7Var.getLogger().c(SentryLevel.DEBUG, "Distribution org auth token found", new Object[0]);
                    distribution.f30051a = i10;
                }
                if (j10 == null && !j10.isEmpty() && distribution.f30055e == null) {
                    k7Var.getLogger().c(SentryLevel.DEBUG, "Distribution build configuration found: %s", j10);
                    distribution.f30055e = j10;
                    return;
                }
                return;
            }
        }
    }

    private static void e(k7 k7Var, List list) {
        if (k7Var.getProguardUuid() == null) {
            Iterator it = list.iterator();
            while (it.hasNext()) {
                String m10 = m((Properties) it.next());
                if (m10 != null) {
                    k7Var.getLogger().c(SentryLevel.DEBUG, "Proguard UUID found: %s", m10);
                    k7Var.setProguardUuid(m10);
                    return;
                }
            }
        }
    }

    public static void f(k7 k7Var, List list) {
        if (list != null) {
            c(k7Var, list);
            e(k7Var, list);
        }
    }

    public static String g(Properties properties) {
        return properties.getProperty("io.sentry.build-tool");
    }

    public static String h(Properties properties) {
        return properties.getProperty("io.sentry.build-tool-version");
    }

    private static String i(Properties properties) {
        return properties.getProperty("io.sentry.distribution.auth-token");
    }

    private static String j(Properties properties) {
        return properties.getProperty("io.sentry.distribution.build-configuration");
    }

    private static String k(Properties properties) {
        return properties.getProperty("io.sentry.distribution.org-slug");
    }

    private static String l(Properties properties) {
        return properties.getProperty("io.sentry.distribution.project-slug");
    }

    public static String m(Properties properties) {
        return properties.getProperty("io.sentry.ProguardUuids");
    }
}
