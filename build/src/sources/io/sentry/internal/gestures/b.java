package io.sentry.internal.gestures;

import io.sentry.util.y;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    final WeakReference f28250a;

    /* renamed from: b  reason: collision with root package name */
    final String f28251b;

    /* renamed from: c  reason: collision with root package name */
    final String f28252c;

    /* renamed from: d  reason: collision with root package name */
    final String f28253d;

    /* renamed from: e  reason: collision with root package name */
    final String f28254e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum a {
        CLICKABLE,
        SCROLLABLE
    }

    public b(Object obj, String str, String str2, String str3, String str4) {
        this.f28250a = new WeakReference(obj);
        this.f28251b = str;
        this.f28252c = str2;
        this.f28253d = str3;
        this.f28254e = str4;
    }

    public String a() {
        return this.f28251b;
    }

    public String b() {
        String str = this.f28252c;
        if (str != null) {
            return str;
        }
        return (String) y.c(this.f28253d, "UiElement.tag can't be null");
    }

    public String c() {
        return this.f28254e;
    }

    public String d() {
        return this.f28252c;
    }

    public String e() {
        return this.f28253d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && b.class == obj.getClass()) {
            b bVar = (b) obj;
            if (y.a(this.f28251b, bVar.f28251b) && y.a(this.f28252c, bVar.f28252c) && y.a(this.f28253d, bVar.f28253d)) {
                return true;
            }
        }
        return false;
    }

    public Object f() {
        return this.f28250a.get();
    }

    public int hashCode() {
        return y.b(this.f28250a, this.f28252c, this.f28253d);
    }
}
