package k8;

import com.facebook.cache.common.CacheKey;
import j8.c;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k implements j8.b {

    /* renamed from: i  reason: collision with root package name */
    private static final Object f31652i = new Object();

    /* renamed from: j  reason: collision with root package name */
    private static k f31653j;

    /* renamed from: k  reason: collision with root package name */
    private static int f31654k;

    /* renamed from: a  reason: collision with root package name */
    private CacheKey f31655a;

    /* renamed from: b  reason: collision with root package name */
    private String f31656b;

    /* renamed from: c  reason: collision with root package name */
    private long f31657c;

    /* renamed from: d  reason: collision with root package name */
    private long f31658d;

    /* renamed from: e  reason: collision with root package name */
    private long f31659e;

    /* renamed from: f  reason: collision with root package name */
    private IOException f31660f;

    /* renamed from: g  reason: collision with root package name */
    private c.a f31661g;

    /* renamed from: h  reason: collision with root package name */
    private k f31662h;

    private k() {
    }

    public static k a() {
        synchronized (f31652i) {
            try {
                k kVar = f31653j;
                if (kVar != null) {
                    f31653j = kVar.f31662h;
                    kVar.f31662h = null;
                    f31654k--;
                    return kVar;
                }
                return new k();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private void c() {
        this.f31655a = null;
        this.f31656b = null;
        this.f31657c = 0L;
        this.f31658d = 0L;
        this.f31659e = 0L;
        this.f31660f = null;
        this.f31661g = null;
    }

    public void b() {
        synchronized (f31652i) {
            try {
                if (f31654k < 5) {
                    c();
                    f31654k++;
                    k kVar = f31653j;
                    if (kVar != null) {
                        this.f31662h = kVar;
                    }
                    f31653j = this;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public k d(CacheKey cacheKey) {
        this.f31655a = cacheKey;
        return this;
    }

    public k e(long j10) {
        this.f31658d = j10;
        return this;
    }

    public k f(long j10) {
        this.f31659e = j10;
        return this;
    }

    public k g(c.a aVar) {
        this.f31661g = aVar;
        return this;
    }

    public k h(IOException iOException) {
        this.f31660f = iOException;
        return this;
    }

    public k i(long j10) {
        this.f31657c = j10;
        return this;
    }

    public k j(String str) {
        this.f31656b = str;
        return this;
    }
}
