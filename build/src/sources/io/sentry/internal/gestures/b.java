package io.sentry.internal.gestures;

import io.sentry.util.y;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    final WeakReference f29386a;

    /* renamed from: b  reason: collision with root package name */
    final String f29387b;

    /* renamed from: c  reason: collision with root package name */
    final String f29388c;

    /* renamed from: d  reason: collision with root package name */
    final String f29389d;

    /* renamed from: e  reason: collision with root package name */
    final String f29390e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum a {
        CLICKABLE,
        SCROLLABLE
    }

    public b(Object obj, String str, String str2, String str3, String str4) {
        this.f29386a = new WeakReference(obj);
        this.f29387b = str;
        this.f29388c = str2;
        this.f29389d = str3;
        this.f29390e = str4;
    }

    public String a() {
        return this.f29387b;
    }

    public String b() {
        String str = this.f29388c;
        if (str != null) {
            return str;
        }
        return (String) y.c(this.f29389d, "UiElement.tag can't be null");
    }

    public String c() {
        return this.f29390e;
    }

    public String d() {
        return this.f29388c;
    }

    public String e() {
        return this.f29389d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && b.class == obj.getClass()) {
            b bVar = (b) obj;
            if (y.a(this.f29387b, bVar.f29387b) && y.a(this.f29388c, bVar.f29388c) && y.a(this.f29389d, bVar.f29389d)) {
                return true;
            }
        }
        return false;
    }

    public Object f() {
        return this.f29386a.get();
    }

    public int hashCode() {
        return y.b(this.f29386a, this.f29388c, this.f29389d);
    }
}
