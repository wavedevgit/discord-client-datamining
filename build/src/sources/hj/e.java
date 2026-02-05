package hj;

import com.google.firebase.installations.i;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class e {

    /* renamed from: d  reason: collision with root package name */
    private static final long f25917d = TimeUnit.HOURS.toMillis(24);

    /* renamed from: e  reason: collision with root package name */
    private static final long f25918e = TimeUnit.MINUTES.toMillis(30);

    /* renamed from: a  reason: collision with root package name */
    private final i f25919a = i.c();

    /* renamed from: b  reason: collision with root package name */
    private long f25920b;

    /* renamed from: c  reason: collision with root package name */
    private int f25921c;

    private synchronized long a(int i10) {
        if (!c(i10)) {
            return f25917d;
        }
        return (long) Math.min(Math.pow(2.0d, this.f25921c) + this.f25919a.e(), f25918e);
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
        this.f25921c = 0;
    }

    public synchronized boolean b() {
        boolean z10;
        if (this.f25921c != 0) {
            if (this.f25919a.a() <= this.f25920b) {
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
        this.f25921c++;
        this.f25920b = this.f25919a.a() + a(i10);
    }
}
