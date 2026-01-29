package io.sentry.clientreport;

import io.sentry.util.y;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final String f29860a;

    /* renamed from: b  reason: collision with root package name */
    private final String f29861b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(String str, String str2) {
        this.f29860a = str;
        this.f29861b = str2;
    }

    public String a() {
        return this.f29861b;
    }

    public String b() {
        return this.f29860a;
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
