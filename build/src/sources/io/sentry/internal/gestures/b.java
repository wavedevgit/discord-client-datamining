package io.sentry.internal.gestures;

import io.sentry.util.y;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    final WeakReference f30073a;

    /* renamed from: b  reason: collision with root package name */
    final String f30074b;

    /* renamed from: c  reason: collision with root package name */
    final String f30075c;

    /* renamed from: d  reason: collision with root package name */
    final String f30076d;

    /* renamed from: e  reason: collision with root package name */
    final String f30077e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum a {
        CLICKABLE,
        SCROLLABLE
    }

    public b(Object obj, String str, String str2, String str3, String str4) {
        this.f30073a = new WeakReference(obj);
        this.f30074b = str;
        this.f30075c = str2;
        this.f30076d = str3;
        this.f30077e = str4;
    }

    public String a() {
        return this.f30074b;
    }

    public String b() {
        String str = this.f30075c;
        if (str != null) {
            return str;
        }
        return (String) y.c(this.f30076d, "UiElement.tag can't be null");
    }

    public String c() {
        return this.f30077e;
    }

    public String d() {
        return this.f30075c;
    }

    public String e() {
        return this.f30076d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && b.class == obj.getClass()) {
            b bVar = (b) obj;
            if (y.a(this.f30074b, bVar.f30074b) && y.a(this.f30075c, bVar.f30075c) && y.a(this.f30076d, bVar.f30076d)) {
                return true;
            }
        }
        return false;
    }

    public Object f() {
        return this.f30073a.get();
    }

    public int hashCode() {
        return y.b(this.f30073a, this.f30075c, this.f30076d);
    }
}
