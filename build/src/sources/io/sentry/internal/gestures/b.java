package io.sentry.internal.gestures;

import io.sentry.util.y;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    final WeakReference f28450a;

    /* renamed from: b  reason: collision with root package name */
    final String f28451b;

    /* renamed from: c  reason: collision with root package name */
    final String f28452c;

    /* renamed from: d  reason: collision with root package name */
    final String f28453d;

    /* renamed from: e  reason: collision with root package name */
    final String f28454e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum a {
        CLICKABLE,
        SCROLLABLE
    }

    public b(Object obj, String str, String str2, String str3, String str4) {
        this.f28450a = new WeakReference(obj);
        this.f28451b = str;
        this.f28452c = str2;
        this.f28453d = str3;
        this.f28454e = str4;
    }

    public String a() {
        return this.f28451b;
    }

    public String b() {
        String str = this.f28452c;
        if (str != null) {
            return str;
        }
        return (String) y.c(this.f28453d, "UiElement.tag can't be null");
    }

    public String c() {
        return this.f28454e;
    }

    public String d() {
        return this.f28452c;
    }

    public String e() {
        return this.f28453d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && b.class == obj.getClass()) {
            b bVar = (b) obj;
            if (y.a(this.f28451b, bVar.f28451b) && y.a(this.f28452c, bVar.f28452c) && y.a(this.f28453d, bVar.f28453d)) {
                return true;
            }
        }
        return false;
    }

    public Object f() {
        return this.f28450a.get();
    }

    public int hashCode() {
        return y.b(this.f28450a, this.f28452c, this.f28453d);
    }
}
