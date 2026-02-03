package io.sentry;

import java.net.URI;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u {

    /* renamed from: a  reason: collision with root package name */
    private final String f30360a;

    /* renamed from: b  reason: collision with root package name */
    private final String f30361b;

    /* renamed from: c  reason: collision with root package name */
    private final String f30362c;

    /* renamed from: d  reason: collision with root package name */
    private final String f30363d;

    /* renamed from: e  reason: collision with root package name */
    private final URI f30364e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public u(String str) {
        String str2;
        try {
            io.sentry.util.y.c(str, "The DSN is required.");
            URI normalize = new URI(str).normalize();
            String scheme = normalize.getScheme();
            if (!"http".equalsIgnoreCase(scheme) && !"https".equalsIgnoreCase(scheme)) {
                throw new IllegalArgumentException("Invalid DSN scheme: " + scheme);
            }
            String userInfo = normalize.getUserInfo();
            if (userInfo != null && !userInfo.isEmpty()) {
                String[] split = userInfo.split(":", -1);
                String str3 = split[0];
                this.f30363d = str3;
                if (str3 != null && !str3.isEmpty()) {
                    if (split.length > 1) {
                        str2 = split[1];
                    } else {
                        str2 = null;
                    }
                    this.f30362c = str2;
                    String path = normalize.getPath();
                    path = path.endsWith("/") ? path.substring(0, path.length() - 1) : path;
                    int lastIndexOf = path.lastIndexOf("/") + 1;
                    String substring = path.substring(0, lastIndexOf);
                    if (!substring.endsWith("/")) {
                        substring = substring + "/";
                    }
                    this.f30361b = substring;
                    String substring2 = path.substring(lastIndexOf);
                    this.f30360a = substring2;
                    if (!substring2.isEmpty()) {
                        String str4 = substring;
                        this.f30364e = new URI(scheme, null, normalize.getHost(), normalize.getPort(), str4 + "api/" + substring2, null, null);
                        return;
                    }
                    throw new IllegalArgumentException("Invalid DSN: A Project Id is required.");
                }
                throw new IllegalArgumentException("Invalid DSN: No public key provided.");
            }
            throw new IllegalArgumentException("Invalid DSN: No public key provided.");
        } catch (Throwable th2) {
            throw new IllegalArgumentException(th2);
        }
    }

    public String a() {
        return this.f30363d;
    }

    public String b() {
        return this.f30362c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public URI c() {
        return this.f30364e;
    }
}
