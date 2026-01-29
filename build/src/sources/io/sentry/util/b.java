package io.sentry.util;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {
    public static ClassLoader a(ClassLoader classLoader) {
        if (classLoader == null) {
            ClassLoader contextClassLoader = Thread.currentThread().getContextClassLoader();
            if (contextClassLoader != null) {
                return contextClassLoader;
            }
            return ClassLoader.getSystemClassLoader();
        }
        return classLoader;
    }
}
