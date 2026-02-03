package io.sentry;

import java.util.Objects;
import java.util.regex.Pattern;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e0 {

    /* renamed from: a  reason: collision with root package name */
    private final String f29882a;

    /* renamed from: b  reason: collision with root package name */
    private final Pattern f29883b;

    public e0(String str) {
        Pattern pattern;
        this.f29882a = str;
        try {
            pattern = Pattern.compile(str);
        } catch (Throwable unused) {
            b5.v().b().getLogger().c(SentryLevel.DEBUG, "Only using filter string for String comparison as it could not be parsed as regex: %s", str);
            pattern = null;
        }
        this.f29883b = pattern;
    }

    public String a() {
        return this.f29882a;
    }

    public boolean b(String str) {
        Pattern pattern = this.f29883b;
        if (pattern == null) {
            return false;
        }
        return pattern.matcher(str).matches();
    }

    public boolean equals(Object obj) {
        if (obj != null && e0.class == obj.getClass()) {
            return Objects.equals(this.f29882a, ((e0) obj).f29882a);
        }
        return false;
    }

    public int hashCode() {
        return Objects.hash(this.f29882a);
    }
}
