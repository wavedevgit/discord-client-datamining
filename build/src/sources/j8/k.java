package j8;

import com.facebook.cache.common.CacheKey;
import i8.c;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k implements i8.b {

    /* renamed from: i  reason: collision with root package name */
    private static final Object f31923i = new Object();

    /* renamed from: j  reason: collision with root package name */
    private static k f31924j;

    /* renamed from: k  reason: collision with root package name */
    private static int f31925k;

    /* renamed from: a  reason: collision with root package name */
    private CacheKey f31926a;

    /* renamed from: b  reason: collision with root package name */
    private String f31927b;

    /* renamed from: c  reason: collision with root package name */
    private long f31928c;

    /* renamed from: d  reason: collision with root package name */
    private long f31929d;

    /* renamed from: e  reason: collision with root package name */
    private long f31930e;

    /* renamed from: f  reason: collision with root package name */
    private IOException f31931f;

    /* renamed from: g  reason: collision with root package name */
    private c.a f31932g;

    /* renamed from: h  reason: collision with root package name */
    private k f31933h;

    private k() {
    }

    public static k a() {
        synchronized (f31923i) {
            try {
                k kVar = f31924j;
                if (kVar != null) {
                    f31924j = kVar.f31933h;
                    kVar.f31933h = null;
                    f31925k--;
                    return kVar;
                }
                return new k();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private void c() {
        this.f31926a = null;
        this.f31927b = null;
        this.f31928c = 0L;
        this.f31929d = 0L;
        this.f31930e = 0L;
        this.f31931f = null;
        this.f31932g = null;
    }

    public void b() {
        synchronized (f31923i) {
            try {
                if (f31925k < 5) {
                    c();
                    f31925k++;
                    k kVar = f31924j;
                    if (kVar != null) {
                        this.f31933h = kVar;
                    }
                    f31924j = this;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public k d(CacheKey cacheKey) {
        this.f31926a = cacheKey;
        return this;
    }

    public k e(long j10) {
        this.f31929d = j10;
        return this;
    }

    public k f(long j10) {
        this.f31930e = j10;
        return this;
    }

    public k g(c.a aVar) {
        this.f31932g = aVar;
        return this;
    }

    public k h(IOException iOException) {
        this.f31931f = iOException;
        return this;
    }

    public k i(long j10) {
        this.f31928c = j10;
        return this;
    }

    public k j(String str) {
        this.f31927b = str;
        return this;
    }
}
