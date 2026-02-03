package io.sentry.internal.gestures;

import io.sentry.util.y;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    final WeakReference f30000a;

    /* renamed from: b  reason: collision with root package name */
    final String f30001b;

    /* renamed from: c  reason: collision with root package name */
    final String f30002c;

    /* renamed from: d  reason: collision with root package name */
    final String f30003d;

    /* renamed from: e  reason: collision with root package name */
    final String f30004e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum a {
        CLICKABLE,
        SCROLLABLE
    }

    public b(Object obj, String str, String str2, String str3, String str4) {
        this.f30000a = new WeakReference(obj);
        this.f30001b = str;
        this.f30002c = str2;
        this.f30003d = str3;
        this.f30004e = str4;
    }

    public String a() {
        return this.f30001b;
    }

    public String b() {
        String str = this.f30002c;
        if (str != null) {
            return str;
        }
        return (String) y.c(this.f30003d, "UiElement.tag can't be null");
    }

    public String c() {
        return this.f30004e;
    }

    public String d() {
        return this.f30002c;
    }

    public String e() {
        return this.f30003d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && b.class == obj.getClass()) {
            b bVar = (b) obj;
            if (y.a(this.f30001b, bVar.f30001b) && y.a(this.f30002c, bVar.f30002c) && y.a(this.f30003d, bVar.f30003d)) {
                return true;
            }
        }
        return false;
    }

    public Object f() {
        return this.f30000a.get();
    }

    public int hashCode() {
        return y.b(this.f30000a, this.f30002c, this.f30003d);
    }
}
