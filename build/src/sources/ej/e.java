package ej;

import com.google.firebase.installations.i;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class e {

    /* renamed from: d  reason: collision with root package name */
    private static final long f22914d = TimeUnit.HOURS.toMillis(24);

    /* renamed from: e  reason: collision with root package name */
    private static final long f22915e = TimeUnit.MINUTES.toMillis(30);

    /* renamed from: a  reason: collision with root package name */
    private final i f22916a = i.c();

    /* renamed from: b  reason: collision with root package name */
    private long f22917b;

    /* renamed from: c  reason: collision with root package name */
    private int f22918c;

    private synchronized long a(int i10) {
        if (!c(i10)) {
            return f22914d;
        }
        return (long) Math.min(Math.pow(2.0d, this.f22918c) + this.f22916a.e(), f22915e);
    }

    private static boolean c(int i10) {
        if (i10 != 429) {
            if (i10 < 500 || i10 >= 600) {
                return false;
            }
            return true;
        }
        return true;
    }

    private static boolean d(int i10) {
        if ((i10 < 200 || i10 >= 300) && i10 != 401 && i10 != 404) {
            return false;
        }
        return true;
    }

    private synchronized void e() {
        this.f22918c = 0;
    }

    public synchronized boolean b() {
        boolean z10;
        if (this.f22918c != 0) {
            if (this.f22916a.a() <= this.f22917b) {
                z10 = false;
            }
        }
        z10 = true;
        return z10;
    }

    public synchronized void f(int i10) {
        if (d(i10)) {
            e();
            return;
        }
        this.f22918c++;
        this.f22917b = this.f22916a.a() + a(i10);
    }
}
