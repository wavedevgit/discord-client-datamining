package io.sentry.internal.gestures;

import io.sentry.util.y;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    final WeakReference f30057a;

    /* renamed from: b  reason: collision with root package name */
    final String f30058b;

    /* renamed from: c  reason: collision with root package name */
    final String f30059c;

    /* renamed from: d  reason: collision with root package name */
    final String f30060d;

    /* renamed from: e  reason: collision with root package name */
    final String f30061e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum a {
        CLICKABLE,
        SCROLLABLE
    }

    public b(Object obj, String str, String str2, String str3, String str4) {
        this.f30057a = new WeakReference(obj);
        this.f30058b = str;
        this.f30059c = str2;
        this.f30060d = str3;
        this.f30061e = str4;
    }

    public String a() {
        return this.f30058b;
    }

    public String b() {
        String str = this.f30059c;
        if (str != null) {
            return str;
        }
        return (String) y.c(this.f30060d, "UiElement.tag can't be null");
    }

    public String c() {
        return this.f30061e;
    }

    public String d() {
        return this.f30059c;
    }

    public String e() {
        return this.f30060d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && b.class == obj.getClass()) {
            b bVar = (b) obj;
            if (y.a(this.f30058b, bVar.f30058b) && y.a(this.f30059c, bVar.f30059c) && y.a(this.f30060d, bVar.f30060d)) {
                return true;
            }
        }
        return false;
    }

    public Object f() {
        return this.f30057a.get();
    }

    public int hashCode() {
        return y.b(this.f30057a, this.f30059c, this.f30060d);
    }
}
