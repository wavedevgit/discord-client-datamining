package io.sentry.internal.gestures;

import io.sentry.util.y;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    final WeakReference f29639a;

    /* renamed from: b  reason: collision with root package name */
    final String f29640b;

    /* renamed from: c  reason: collision with root package name */
    final String f29641c;

    /* renamed from: d  reason: collision with root package name */
    final String f29642d;

    /* renamed from: e  reason: collision with root package name */
    final String f29643e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum a {
        CLICKABLE,
        SCROLLABLE
    }

    public b(Object obj, String str, String str2, String str3, String str4) {
        this.f29639a = new WeakReference(obj);
        this.f29640b = str;
        this.f29641c = str2;
        this.f29642d = str3;
        this.f29643e = str4;
    }

    public String a() {
        return this.f29640b;
    }

    public String b() {
        String str = this.f29641c;
        if (str != null) {
            return str;
        }
        return (String) y.c(this.f29642d, "UiElement.tag can't be null");
    }

    public String c() {
        return this.f29643e;
    }

    public String d() {
        return this.f29641c;
    }

    public String e() {
        return this.f29642d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && b.class == obj.getClass()) {
            b bVar = (b) obj;
            if (y.a(this.f29640b, bVar.f29640b) && y.a(this.f29641c, bVar.f29641c) && y.a(this.f29642d, bVar.f29642d)) {
                return true;
            }
        }
        return false;
    }

    public Object f() {
        return this.f29639a.get();
    }

    public int hashCode() {
        return y.b(this.f29639a, this.f29641c, this.f29642d);
    }
}
