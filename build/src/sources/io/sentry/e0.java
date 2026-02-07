package io.sentry;

import java.util.Objects;
import java.util.regex.Pattern;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e0 {

    /* renamed from: a  reason: collision with root package name */
    private final String f28132a;

    /* renamed from: b  reason: collision with root package name */
    private final Pattern f28133b;

    public e0(String str) {
        Pattern pattern;
        this.f28132a = str;
        try {
            pattern = Pattern.compile(str);
        } catch (Throwable unused) {
            b5.v().b().getLogger().c(SentryLevel.DEBUG, "Only using filter string for String comparison as it could not be parsed as regex: %s", str);
            pattern = null;
        }
        this.f28133b = pattern;
    }

    public String a() {
        return this.f28132a;
    }

    public boolean b(String str) {
        Pattern pattern = this.f28133b;
        if (pattern == null) {
            return false;
        }
        return pattern.matcher(str).matches();
    }

    public boolean equals(Object obj) {
        if (obj != null && e0.class == obj.getClass()) {
            return Objects.equals(this.f28132a, ((e0) obj).f28132a);
        }
        return false;
    }

    public int hashCode() {
        return Objects.hash(this.f28132a);
    }
}
