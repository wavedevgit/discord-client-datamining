package io.sentry.internal.modules;

import io.sentry.ILogger;
import io.sentry.SentryLevel;
import java.net.URL;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends d {

    /* renamed from: e  reason: collision with root package name */
    private final Pattern f29064e;

    /* renamed from: f  reason: collision with root package name */
    private final Pattern f29065f;

    /* renamed from: g  reason: collision with root package name */
    private final ClassLoader f29066g;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final String f29067a;

        /* renamed from: b  reason: collision with root package name */
        private final String f29068b;

        public a(String str, String str2) {
            this.f29067a = str;
            this.f29068b = str2;
        }
    }

    public c(ILogger iLogger) {
        this(c.class.getClassLoader(), iLogger);
    }

    private a d(String str) {
        if (str == null) {
            return null;
        }
        Matcher matcher = this.f29065f.matcher(str);
        if (!matcher.matches() || matcher.groupCount() != 2) {
            return null;
        }
        return new a(matcher.group(1), matcher.group(2));
    }

    private List e() {
        ArrayList arrayList = new ArrayList();
        try {
            Enumeration<URL> resources = this.f29066g.getResources("META-INF/MANIFEST.MF");
            while (resources.hasMoreElements()) {
                a d10 = d(f(resources.nextElement()));
                if (d10 != null) {
                    arrayList.add(d10);
                }
            }
            return arrayList;
        } catch (Throwable th2) {
            this.f29070a.b(SentryLevel.ERROR, "Unable to detect modules via manifest files.", th2);
            return arrayList;
        }
    }

    private String f(URL url) {
        Matcher matcher = this.f29064e.matcher(url.toString());
        if (matcher.matches() && matcher.groupCount() == 1) {
            return matcher.group(1);
        }
        return null;
    }

    @Override // io.sentry.internal.modules.d
    protected Map b() {
        HashMap hashMap = new HashMap();
        for (a aVar : e()) {
            hashMap.put(aVar.f29067a, aVar.f29068b);
        }
        return hashMap;
    }

    c(ClassLoader classLoader, ILogger iLogger) {
        super(iLogger);
        this.f29064e = Pattern.compile(".*/(.+)!/META-INF/MANIFEST.MF");
        this.f29065f = Pattern.compile("(.*?)-(\\d+\\.\\d+.*).jar");
        this.f29066g = io.sentry.util.b.a(classLoader);
    }
}
