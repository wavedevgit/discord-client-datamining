package k8;

import com.facebook.cache.common.CacheKey;
import j8.c;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k implements j8.b {

    /* renamed from: i  reason: collision with root package name */
    private static final Object f31653i = new Object();

    /* renamed from: j  reason: collision with root package name */
    private static k f31654j;

    /* renamed from: k  reason: collision with root package name */
    private static int f31655k;

    /* renamed from: a  reason: collision with root package name */
    private CacheKey f31656a;

    /* renamed from: b  reason: collision with root package name */
    private String f31657b;

    /* renamed from: c  reason: collision with root package name */
    private long f31658c;

    /* renamed from: d  reason: collision with root package name */
    private long f31659d;

    /* renamed from: e  reason: collision with root package name */
    private long f31660e;

    /* renamed from: f  reason: collision with root package name */
    private IOException f31661f;

    /* renamed from: g  reason: collision with root package name */
    private c.a f31662g;

    /* renamed from: h  reason: collision with root package name */
    private k f31663h;

    private k() {
    }

    public static k a() {
        synchronized (f31653i) {
            try {
                k kVar = f31654j;
                if (kVar != null) {
                    f31654j = kVar.f31663h;
                    kVar.f31663h = null;
                    f31655k--;
                    return kVar;
                }
                return new k();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private void c() {
        this.f31656a = null;
        this.f31657b = null;
        this.f31658c = 0L;
        this.f31659d = 0L;
        this.f31660e = 0L;
        this.f31661f = null;
        this.f31662g = null;
    }

    public void b() {
        synchronized (f31653i) {
            try {
                if (f31655k < 5) {
                    c();
                    f31655k++;
                    k kVar = f31654j;
                    if (kVar != null) {
                        this.f31663h = kVar;
                    }
                    f31654j = this;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public k d(CacheKey cacheKey) {
        this.f31656a = cacheKey;
        return this;
    }

    public k e(long j10) {
        this.f31659d = j10;
        return this;
    }

    public k f(long j10) {
        this.f31660e = j10;
        return this;
    }

    public k g(c.a aVar) {
        this.f31662g = aVar;
        return this;
    }

    public k h(IOException iOException) {
        this.f31661f = iOException;
        return this;
    }

    public k i(long j10) {
        this.f31658c = j10;
        return this;
    }

    public k j(String str) {
        this.f31657b = str;
        return this;
    }
}
