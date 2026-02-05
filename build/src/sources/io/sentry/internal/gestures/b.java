package io.sentry.internal.gestures;

import io.sentry.util.y;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    final WeakReference f29058a;

    /* renamed from: b  reason: collision with root package name */
    final String f29059b;

    /* renamed from: c  reason: collision with root package name */
    final String f29060c;

    /* renamed from: d  reason: collision with root package name */
    final String f29061d;

    /* renamed from: e  reason: collision with root package name */
    final String f29062e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum a {
        CLICKABLE,
        SCROLLABLE
    }

    public b(Object obj, String str, String str2, String str3, String str4) {
        this.f29058a = new WeakReference(obj);
        this.f29059b = str;
        this.f29060c = str2;
        this.f29061d = str3;
        this.f29062e = str4;
    }

    public String a() {
        return this.f29059b;
    }

    public String b() {
        String str = this.f29060c;
        if (str != null) {
            return str;
        }
        return (String) y.c(this.f29061d, "UiElement.tag can't be null");
    }

    public String c() {
        return this.f29062e;
    }

    public String d() {
        return this.f29060c;
    }

    public String e() {
        return this.f29061d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && b.class == obj.getClass()) {
            b bVar = (b) obj;
            if (y.a(this.f29059b, bVar.f29059b) && y.a(this.f29060c, bVar.f29060c) && y.a(this.f29061d, bVar.f29061d)) {
                return true;
            }
        }
        return false;
    }

    public Object f() {
        return this.f29058a.get();
    }

    public int hashCode() {
        return y.b(this.f29058a, this.f29060c, this.f29061d);
    }
}
