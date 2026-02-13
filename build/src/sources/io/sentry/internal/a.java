package io.sentry.internal;

import io.sentry.a1;
import io.sentry.u6;
import java.io.IOException;
import java.net.URL;
import java.util.Enumeration;
import java.util.jar.Attributes;
import java.util.jar.Manifest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: d  reason: collision with root package name */
    private static volatile a f29944d;

    /* renamed from: e  reason: collision with root package name */
    private static final io.sentry.util.a f29945e = new io.sentry.util.a();

    /* renamed from: a  reason: collision with root package name */
    private volatile boolean f29946a = false;

    /* renamed from: b  reason: collision with root package name */
    private final C0401a f29947b = new C0401a();

    /* renamed from: c  reason: collision with root package name */
    private io.sentry.util.a f29948c = new io.sentry.util.a();

    /* renamed from: io.sentry.internal.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0401a {

        /* renamed from: a  reason: collision with root package name */
        private volatile String f29949a;

        /* renamed from: b  reason: collision with root package name */
        private volatile String f29950b;
    }

    private a() {
    }

    public static a a() {
        if (f29944d == null) {
            a1 a10 = f29945e.a();
            try {
                if (f29944d == null) {
                    f29944d = new a();
                }
                if (a10 != null) {
                    a10.close();
                }
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
        return f29944d;
    }

    public void b() {
        a1 a10;
        if (!this.f29946a) {
            try {
                a10 = this.f29948c.a();
            } catch (IOException unused) {
            } catch (Throwable th2) {
                this.f29946a = true;
                throw th2;
            }
            if (this.f29946a) {
                if (a10 != null) {
                    a10.close();
                }
                this.f29946a = true;
                return;
            }
            Enumeration<URL> resources = ClassLoader.getSystemClassLoader().getResources("META-INF/MANIFEST.MF");
            while (resources.hasMoreElements()) {
                try {
                    Attributes mainAttributes = new Manifest(resources.nextElement().openStream()).getMainAttributes();
                    if (mainAttributes != null) {
                        String value = mainAttributes.getValue("Sentry-Opentelemetry-SDK-Name");
                        String value2 = mainAttributes.getValue("Implementation-Version");
                        String value3 = mainAttributes.getValue("Sentry-SDK-Name");
                        String value4 = mainAttributes.getValue("Sentry-SDK-Package-Name");
                        if (value != null && value2 != null) {
                            this.f29947b.f29949a = value;
                            this.f29947b.f29950b = value2;
                            String value5 = mainAttributes.getValue("Sentry-Opentelemetry-Version-Name");
                            if (value5 != null) {
                                u6.d().b("maven:io.opentelemetry:opentelemetry-sdk", value5);
                                u6.d().a("OpenTelemetry");
                            }
                            String value6 = mainAttributes.getValue("Sentry-Opentelemetry-Javaagent-Version-Name");
                            if (value6 != null) {
                                u6.d().b("maven:io.opentelemetry.javaagent:opentelemetry-javaagent", value6);
                                u6.d().a("OpenTelemetry-Agent");
                            }
                            if (value.equals("sentry.java.opentelemetry.agentless")) {
                                u6.d().a("OpenTelemetry-Agentless");
                            }
                            if (value.equals("sentry.java.opentelemetry.agentless-spring")) {
                                u6.d().a("OpenTelemetry-Agentless-Spring");
                            }
                        }
                        if (value3 != null && value2 != null && value4 != null && value3.startsWith("sentry.java")) {
                            u6.d().b(value4, value2);
                        }
                    }
                } catch (Exception unused2) {
                }
            }
            if (a10 != null) {
                a10.close();
            }
            this.f29946a = true;
        }
    }
}
