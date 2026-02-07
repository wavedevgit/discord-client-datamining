package gf;

import android.util.Log;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final String f25133a;

    /* renamed from: b  reason: collision with root package name */
    private final String f25134b;

    public i(String str) {
        this(str, null);
    }

    private final String g(String str) {
        String str2 = this.f25134b;
        if (str2 == null) {
            return str;
        }
        return str2.concat(str);
    }

    public boolean a(int i10) {
        return Log.isLoggable(this.f25133a, i10);
    }

    public void b(String str, String str2) {
        if (a(3)) {
            Log.d(str, g(str2));
        }
    }

    public void c(String str, String str2) {
        if (a(6)) {
            Log.e(str, g(str2));
        }
    }

    public void d(String str, String str2, Throwable th2) {
        if (a(6)) {
            Log.e(str, g(str2), th2);
        }
    }

    public void e(String str, String str2) {
        if (a(2)) {
            Log.v(str, g(str2));
        }
    }

    public void f(String str, String str2) {
        if (a(5)) {
            Log.w(str, g(str2));
        }
    }

    public i(String str, String str2) {
        q.m(str, "log tag cannot be null");
        q.c(str.length() <= 23, "tag \"%s\" is longer than the %d character maximum", str, 23);
        this.f25133a = str;
        this.f25134b = (str2 == null || str2.length() <= 0) ? null : str2;
    }
}
