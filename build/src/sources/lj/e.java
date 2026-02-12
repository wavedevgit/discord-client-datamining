package lj;

import com.google.firebase.installations.i;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class e {

    /* renamed from: d  reason: collision with root package name */
    private static final long f35881d = TimeUnit.HOURS.toMillis(24);

    /* renamed from: e  reason: collision with root package name */
    private static final long f35882e = TimeUnit.MINUTES.toMillis(30);

    /* renamed from: a  reason: collision with root package name */
    private final i f35883a = i.c();

    /* renamed from: b  reason: collision with root package name */
    private long f35884b;

    /* renamed from: c  reason: collision with root package name */
    private int f35885c;

    private synchronized long a(int i10) {
        if (!c(i10)) {
            return f35881d;
        }
        return (long) Math.min(Math.pow(2.0d, this.f35885c) + this.f35883a.e(), f35882e);
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
        this.f35885c = 0;
    }

    public synchronized boolean b() {
        boolean z10;
        if (this.f35885c != 0) {
            if (this.f35883a.a() <= this.f35884b) {
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
        this.f35885c++;
        this.f35884b = this.f35883a.a() + a(i10);
    }
}
