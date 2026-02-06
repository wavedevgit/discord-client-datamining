package pt;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintStream;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.net.URLConnection;
import java.security.CodeSource;
import java.security.ProtectionDomain;
import java.util.ServiceLoader;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class d {

    /* renamed from: a  reason: collision with root package name */
    private static final boolean f45660a;

    /* renamed from: b  reason: collision with root package name */
    private static final d f45661b;

    /* renamed from: c  reason: collision with root package name */
    private static final boolean f45662c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class a extends d {
        a() {
            if (!d.f45660a) {
                return;
            }
            throw new IllegalStateException("The module time4j-android is not active. Check your configuration.");
        }

        @Override // pt.d
        public InputStream e(URI uri, boolean z10) {
            if (uri != null && !d.f45662c) {
                try {
                    URL url = uri.toURL();
                    if (z10) {
                        URLConnection openConnection = url.openConnection();
                        openConnection.setUseCaches(false);
                        openConnection.connect();
                        return openConnection.getInputStream();
                    }
                    return url.openStream();
                } catch (IOException e10) {
                    if (uri.toString().contains(".repository")) {
                        PrintStream printStream = System.err;
                        printStream.println("Warning: Loading of resource " + uri + " failed (" + e10.getMessage() + "). Consider setting the system property \"net.time4j.base.useClassloaderOnly\" for reducing overhead.");
                        e10.printStackTrace(System.err);
                    }
                }
            }
            return null;
        }

        @Override // pt.d
        public URI f(String str, Class cls, String str2) {
            String str3;
            CodeSource codeSource;
            try {
                try {
                    ProtectionDomain protectionDomain = cls.getProtectionDomain();
                    if (protectionDomain == null) {
                        codeSource = null;
                    } else {
                        codeSource = protectionDomain.getCodeSource();
                    }
                    if (codeSource != null) {
                        String externalForm = codeSource.getLocation().toExternalForm();
                        try {
                            if (externalForm.endsWith(".jar")) {
                                externalForm = "jar:" + externalForm + "!/";
                            }
                            str3 = externalForm + str2;
                            return new URI(str3);
                        } catch (URISyntaxException unused) {
                            System.err.println("Warning: malformed resource path = " + str3);
                            return null;
                        }
                    }
                } catch (SecurityException unused2) {
                }
            } catch (URISyntaxException unused3) {
                str3 = null;
            }
            return null;
        }

        @Override // pt.d
        public Iterable g(Class cls) {
            return ServiceLoader.load(cls, cls.getClassLoader());
        }
    }

    static {
        boolean z10;
        boolean equalsIgnoreCase = "Dalvik".equalsIgnoreCase(System.getProperty("java.vm.name"));
        f45660a = equalsIgnoreCase;
        if (!equalsIgnoreCase && Boolean.getBoolean("net.time4j.base.useClassloaderOnly")) {
            z10 = true;
        } else {
            z10 = false;
        }
        f45662c = z10;
        String property = System.getProperty("net.time4j.base.ResourceLoader");
        if (property == null) {
            f45661b = new a();
            return;
        }
        try {
            f45661b = (d) Class.forName(property).newInstance();
        } catch (Exception e10) {
            throw new AssertionError("Wrong configuration of external resource loader: " + e10.getMessage());
        }
    }

    public static d c() {
        return f45661b;
    }

    public final InputStream d(Class cls, String str, boolean z10) {
        if (!f45660a) {
            URL resource = cls.getClassLoader().getResource(str);
            if (resource != null) {
                if (z10) {
                    URLConnection openConnection = resource.openConnection();
                    openConnection.setUseCaches(false);
                    openConnection.connect();
                    return openConnection.getInputStream();
                }
                return resource.openStream();
            }
            throw new FileNotFoundException(str);
        }
        throw new FileNotFoundException(str);
    }

    public abstract InputStream e(URI uri, boolean z10);

    public abstract URI f(String str, Class cls, String str2);

    public abstract Iterable g(Class cls);
}
