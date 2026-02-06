package io.sentry;

import java.net.URI;
import java.util.HashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class x3 {

    /* renamed from: a  reason: collision with root package name */
    private final u f29082a;

    /* renamed from: b  reason: collision with root package name */
    private final String f29083b;

    public x3(k7 k7Var) {
        io.sentry.util.y.c(k7Var, "options is required");
        this.f29082a = k7Var.retrieveParsedDsn();
        this.f29083b = k7Var.getSentryClientName();
    }

    public w3 a() {
        URI c10;
        String str;
        String uri = this.f29082a.c().resolve(c10.getPath() + "/envelope/").toString();
        String a10 = this.f29082a.a();
        String b10 = this.f29082a.b();
        StringBuilder sb2 = new StringBuilder();
        sb2.append("Sentry sentry_version=7,sentry_client=");
        sb2.append(this.f29083b);
        sb2.append(",sentry_key=");
        sb2.append(a10);
        if (b10 != null && b10.length() > 0) {
            str = ",sentry_secret=" + b10;
        } else {
            str = "";
        }
        sb2.append(str);
        String sb3 = sb2.toString();
        HashMap hashMap = new HashMap();
        hashMap.put("User-Agent", this.f29083b);
        hashMap.put("X-Sentry-Auth", sb3);
        return new w3(uri, hashMap);
    }
}
