package io.sentry.clientreport;

import io.sentry.util.y;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final String f29803a;

    /* renamed from: b  reason: collision with root package name */
    private final String f29804b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(String str, String str2) {
        this.f29803a = str;
        this.f29804b = str2;
    }

    public String a() {
        return this.f29804b;
    }

    public String b() {
        return this.f29803a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (y.a(b(), dVar.b()) && y.a(a(), dVar.a())) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return y.b(b(), a());
    }
}
