package io.sentry;

import java.net.MalformedURLException;
import java.net.URI;
import java.net.URL;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w3 {

    /* renamed from: a  reason: collision with root package name */
    private final URL f30913a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f30914b;

    public w3(String str, Map map) {
        io.sentry.util.y.c(str, "url is required");
        io.sentry.util.y.c(map, "headers is required");
        try {
            this.f30913a = URI.create(str).toURL();
            this.f30914b = map;
        } catch (MalformedURLException e10) {
            throw new IllegalArgumentException("Failed to compose the Sentry's server URL.", e10);
        }
    }

    public Map a() {
        return this.f30914b;
    }

    public URL b() {
        return this.f30913a;
    }
}
