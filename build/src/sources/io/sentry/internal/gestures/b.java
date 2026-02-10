package io.sentry.internal.gestures;

import io.sentry.util.y;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    final WeakReference f29385a;

    /* renamed from: b  reason: collision with root package name */
    final String f29386b;

    /* renamed from: c  reason: collision with root package name */
    final String f29387c;

    /* renamed from: d  reason: collision with root package name */
    final String f29388d;

    /* renamed from: e  reason: collision with root package name */
    final String f29389e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum a {
        CLICKABLE,
        SCROLLABLE
    }

    public b(Object obj, String str, String str2, String str3, String str4) {
        this.f29385a = new WeakReference(obj);
        this.f29386b = str;
        this.f29387c = str2;
        this.f29388d = str3;
        this.f29389e = str4;
    }

    public String a() {
        return this.f29386b;
    }

    public String b() {
        String str = this.f29387c;
        if (str != null) {
            return str;
        }
        return (String) y.c(this.f29388d, "UiElement.tag can't be null");
    }

    public String c() {
        return this.f29389e;
    }

    public String d() {
        return this.f29387c;
    }

    public String e() {
        return this.f29388d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && b.class == obj.getClass()) {
            b bVar = (b) obj;
            if (y.a(this.f29386b, bVar.f29386b) && y.a(this.f29387c, bVar.f29387c) && y.a(this.f29388d, bVar.f29388d)) {
                return true;
            }
        }
        return false;
    }

    public Object f() {
        return this.f29385a.get();
    }

    public int hashCode() {
        return y.b(this.f29385a, this.f29387c, this.f29388d);
    }
}
