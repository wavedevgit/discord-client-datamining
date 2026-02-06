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
    private final Pattern f28208e;

    /* renamed from: f  reason: collision with root package name */
    private final Pattern f28209f;

    /* renamed from: g  reason: collision with root package name */
    private final ClassLoader f28210g;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final String f28211a;

        /* renamed from: b  reason: collision with root package name */
        private final String f28212b;

        public a(String str, String str2) {
            this.f28211a = str;
            this.f28212b = str2;
        }
    }

    public c(ILogger iLogger) {
        this(c.class.getClassLoader(), iLogger);
    }

    private a d(String str) {
        if (str == null) {
            return null;
        }
        Matcher matcher = this.f28209f.matcher(str);
        if (!matcher.matches() || matcher.groupCount() != 2) {
            return null;
        }
        return new a(matcher.group(1), matcher.group(2));
    }

    private List e() {
        ArrayList arrayList = new ArrayList();
        try {
            Enumeration<URL> resources = this.f28210g.getResources("META-INF/MANIFEST.MF");
            while (resources.hasMoreElements()) {
                a d10 = d(f(resources.nextElement()));
                if (d10 != null) {
                    arrayList.add(d10);
                }
            }
            return arrayList;
        } catch (Throwable th2) {
            this.f28214a.b(SentryLevel.ERROR, "Unable to detect modules via manifest files.", th2);
            return arrayList;
        }
    }

    private String f(URL url) {
        Matcher matcher = this.f28208e.matcher(url.toString());
        if (matcher.matches() && matcher.groupCount() == 1) {
            return matcher.group(1);
        }
        return null;
    }

    @Override // io.sentry.internal.modules.d
    protected Map b() {
        HashMap hashMap = new HashMap();
        for (a aVar : e()) {
            hashMap.put(aVar.f28211a, aVar.f28212b);
        }
        return hashMap;
    }

    c(ClassLoader classLoader, ILogger iLogger) {
        super(iLogger);
        this.f28208e = Pattern.compile(".*/(.+)!/META-INF/MANIFEST.MF");
        this.f28209f = Pattern.compile("(.*?)-(\\d+\\.\\d+.*).jar");
        this.f28210g = io.sentry.util.b.a(classLoader);
    }
}
