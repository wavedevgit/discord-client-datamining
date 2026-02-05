package p8;

import android.util.Log;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b implements c {

    /* renamed from: c  reason: collision with root package name */
    public static final b f44961c = new b();

    /* renamed from: a  reason: collision with root package name */
    private String f44962a = "unknown";

    /* renamed from: b  reason: collision with root package name */
    private int f44963b = 5;

    private b() {
    }

    public static b a() {
        return f44961c;
    }

    private static String c(String str, Throwable th2) {
        return str + '\n' + f(th2);
    }

    private static String f(Throwable th2) {
        if (th2 == null) {
            return "";
        }
        return Log.getStackTraceString(th2);
    }

    private String g(String str) {
        if (this.f44962a != null) {
            return this.f44962a + ":" + str;
        }
        return str;
    }

    private void h(int i10, String str, String str2) {
        Log.println(i10, g(str), str2);
    }

    private void j(int i10, String str, String str2, Throwable th2) {
        Log.println(i10, g(str), c(str2, th2));
    }

    public int b() {
        return this.f44963b;
    }

    @Override // p8.c
    public void d(String str, String str2) {
        h(3, str, str2);
    }

    @Override // p8.c
    public void e(String str, String str2) {
        h(6, str, str2);
    }

    @Override // p8.c
    public void i(String str, String str2) {
        h(4, str, str2);
    }

    @Override // p8.c
    public boolean isLoggable(int i10) {
        if (this.f44963b <= i10) {
            return true;
        }
        return false;
    }

    public void k(int i10) {
        this.f44963b = i10;
    }

    public void l(String str, String str2, Throwable th2) {
        j(2, str, str2, th2);
    }

    @Override // p8.c
    public void v(String str, String str2) {
        h(2, str, str2);
    }

    @Override // p8.c
    public void w(String str, String str2) {
        h(5, str, str2);
    }

    @Override // p8.c
    public void wtf(String str, String str2) {
        h(6, str, str2);
    }

    @Override // p8.c
    public void d(String str, String str2, Throwable th2) {
        j(3, str, str2, th2);
    }

    @Override // p8.c
    public void e(String str, String str2, Throwable th2) {
        j(6, str, str2, th2);
    }

    @Override // p8.c
    public void w(String str, String str2, Throwable th2) {
        j(5, str, str2, th2);
    }

    @Override // p8.c
    public void wtf(String str, String str2, Throwable th2) {
        j(6, str, str2, th2);
    }
}
