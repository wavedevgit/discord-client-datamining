package io.sentry.util;

import io.sentry.SentryLevel;
import io.sentry.d3;
import io.sentry.e2;
import io.sentry.j2;
import io.sentry.k7;
import io.sentry.u0;
import io.sentry.z1;
import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class o {
    private static String a(k7 k7Var) {
        String profilingTracesDirPath = k7Var.getProfilingTracesDirPath();
        if (profilingTracesDirPath != null) {
            return profilingTracesDirPath;
        }
        File file = new File(System.getProperty("java.io.tmpdir"), "sentry_profiling_traces");
        if (!file.mkdirs() && !file.exists()) {
            throw new IllegalArgumentException("Creating a fallback directory for profiling failed in " + file.getAbsolutePath());
        }
        String absolutePath = file.getAbsolutePath();
        k7Var.setProfilingTracesDirPath(absolutePath);
        return absolutePath;
    }

    public static u0 b(k7 k7Var) {
        if (!e(k7Var)) {
            return k7Var.getProfilerConverter();
        }
        u0 b10 = io.sentry.profiling.c.b();
        if (b10 instanceof j2) {
            k7Var.getLogger().c(SentryLevel.WARNING, "Could not load profile converter. If you are using Spring or Spring Boot with the OTEL Agent, profile converter init will be retried.", new Object[0]);
        } else {
            k7Var.setProfilerConverter(b10);
            k7Var.getLogger().c(SentryLevel.INFO, "Successfully loaded profile converter", new Object[0]);
        }
        return k7Var.getProfilerConverter();
    }

    public static io.sentry.l0 c(k7 k7Var) {
        if (!f(k7Var)) {
            return k7Var.getContinuousProfiler();
        }
        try {
            io.sentry.l0 a10 = io.sentry.profiling.c.a(k7Var.getLogger(), a(k7Var), k7Var.getProfilingTracesHz(), k7Var.getExecutorService());
            if (a10 instanceof e2) {
                k7Var.getLogger().c(SentryLevel.WARNING, "Could not load profiler, profiling will be disabled. If you are using Spring or Spring Boot with the OTEL Agent profiler init will be retried.", new Object[0]);
            } else {
                k7Var.setContinuousProfiler(a10);
                k7Var.getLogger().c(SentryLevel.INFO, "Successfully loaded profiler", new Object[0]);
            }
        } catch (Exception e10) {
            k7Var.getLogger().b(SentryLevel.ERROR, "Failed to create default profiling traces directory", e10);
        }
        return k7Var.getContinuousProfiler();
    }

    public static boolean d(k7 k7Var, k7 k7Var2, boolean z10) {
        String str;
        if (a0.c() && (k7Var2.getVersionDetector() instanceof d3)) {
            k7Var2.setVersionDetector(new z1(k7Var2));
        }
        if (k7Var2.getVersionDetector().a()) {
            k7Var2.getLogger().c(SentryLevel.ERROR, "Not initializing Sentry because mixed SDK versions have been detected.", new Object[0]);
            if (a0.a()) {
                str = "https://docs.sentry.io/platforms/android/troubleshooting/mixed-versions";
            } else {
                str = "https://docs.sentry.io/platforms/java/troubleshooting/mixed-versions";
            }
            throw new IllegalStateException("Sentry SDK has detected a mix of versions. This is not supported and likely leads to crashes. Please always use the same version of all SDK modules (dependencies). See " + str + " for more details.");
        } else if (z10 && k7Var != null && !k7Var2.isForceInit() && k7Var.getInitPriority().ordinal() > k7Var2.getInitPriority().ordinal()) {
            return false;
        } else {
            return true;
        }
    }

    private static boolean e(k7 k7Var) {
        if (k7Var.isContinuousProfilingEnabled() && (k7Var.getProfilerConverter() instanceof j2)) {
            return true;
        }
        return false;
    }

    private static boolean f(k7 k7Var) {
        if (k7Var.isContinuousProfilingEnabled() && (k7Var.getContinuousProfiler() instanceof e2)) {
            return true;
        }
        return false;
    }
}
