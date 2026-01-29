package com.github.luben.zstd.util;

import android.support.v4.media.session.b;
import java.io.File;
import java.security.AccessController;
import java.security.PrivilegedAction;
import java.util.concurrent.atomic.AtomicBoolean;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public enum Native {
    ;
    
    private static final String errorMsg = "Unsupported OS/arch, cannot find " + resourceName() + " or load zstd-jni-1.5.7-3 from system libraries. Please try building from source the jar or providing libzstd-jni-1.5.7-3 in your system.";
    private static AtomicBoolean loaded = new AtomicBoolean(false);

    private static String libExtension() {
        if (!osName().contains("os_x") && !osName().contains("darwin")) {
            if (osName().contains("win")) {
                return "dll";
            }
            return "so";
        }
        return "dylib";
    }

    public static synchronized void load() {
        synchronized (Native.class) {
            try {
                String property = System.getProperty("ZstdTempFolder");
                if (property == null) {
                    load(null);
                } else {
                    load(new File(property));
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private static void loadLibrary(final String str) {
        AccessController.doPrivileged(new PrivilegedAction<Void>() { // from class: com.github.luben.zstd.util.Native.1
            @Override // java.security.PrivilegedAction
            public Void run() {
                System.loadLibrary(str);
                return null;
            }
        });
    }

    private static void loadLibraryFile(final String str) {
        AccessController.doPrivileged(new PrivilegedAction<Void>() { // from class: com.github.luben.zstd.util.Native.2
            @Override // java.security.PrivilegedAction
            public Void run() {
                System.load(str);
                return null;
            }
        });
    }

    private static String osName() {
        String replace = System.getProperty("os.name").toLowerCase().replace(' ', '_');
        if (replace.startsWith("win")) {
            return "win";
        }
        if (replace.startsWith("mac")) {
            return "darwin";
        }
        return replace;
    }

    private static String resourceName() {
        String osName = osName();
        String property = System.getProperty("os.arch");
        if (osName.equals("darwin") && property.equals("amd64")) {
            property = "x86_64";
        }
        return "/" + osName + "/" + property + "/libzstd-jni-1.5.7-3." + libExtension();
    }

    public static Native valueOf(String str) {
        b.a(Enum.valueOf(Native.class, str));
        return null;
    }

    public static synchronized void load(File file) {
        synchronized (Native.class) {
            if (loaded.get()) {
                return;
            }
            resourceName();
            String property = System.getProperty("ZstdNativePath");
            if (property != null) {
                loadLibraryFile(property);
                loaded.set(true);
                return;
            }
            Class.forName("org.osgi.framework.BundleEvent");
            loadLibrary("libzstd-jni-1.5.7-3");
            loaded.set(true);
        }
    }
}
