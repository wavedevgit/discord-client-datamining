package k8;

import com.facebook.cache.common.CacheKey;
import j8.c;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k implements j8.b {

    /* renamed from: i  reason: collision with root package name */
    private static final Object f30794i = new Object();

    /* renamed from: j  reason: collision with root package name */
    private static k f30795j;

    /* renamed from: k  reason: collision with root package name */
    private static int f30796k;

    /* renamed from: a  reason: collision with root package name */
    private CacheKey f30797a;

    /* renamed from: b  reason: collision with root package name */
    private String f30798b;

    /* renamed from: c  reason: collision with root package name */
    private long f30799c;

    /* renamed from: d  reason: collision with root package name */
    private long f30800d;

    /* renamed from: e  reason: collision with root package name */
    private long f30801e;

    /* renamed from: f  reason: collision with root package name */
    private IOException f30802f;

    /* renamed from: g  reason: collision with root package name */
    private c.a f30803g;

    /* renamed from: h  reason: collision with root package name */
    private k f30804h;

    private k() {
    }

    public static k a() {
        synchronized (f30794i) {
            try {
                k kVar = f30795j;
                if (kVar != null) {
                    f30795j = kVar.f30804h;
                    kVar.f30804h = null;
                    f30796k--;
                    return kVar;
                }
                return new k();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private void c() {
        this.f30797a = null;
        this.f30798b = null;
        this.f30799c = 0L;
        this.f30800d = 0L;
        this.f30801e = 0L;
        this.f30802f = null;
        this.f30803g = null;
    }

    public void b() {
        synchronized (f30794i) {
            try {
                if (f30796k < 5) {
                    c();
                    f30796k++;
                    k kVar = f30795j;
                    if (kVar != null) {
                        this.f30804h = kVar;
                    }
                    f30795j = this;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public k d(CacheKey cacheKey) {
        this.f30797a = cacheKey;
        return this;
    }

    public k e(long j10) {
        this.f30800d = j10;
        return this;
    }

    public k f(long j10) {
        this.f30801e = j10;
        return this;
    }

    public k g(c.a aVar) {
        this.f30803g = aVar;
        return this;
    }

    public k h(IOException iOException) {
        this.f30802f = iOException;
        return this;
    }

    public k i(long j10) {
        this.f30799c = j10;
        return this;
    }

    public k j(String str) {
        this.f30798b = str;
        return this;
    }
}
