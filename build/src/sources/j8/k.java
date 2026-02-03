package j8;

import com.facebook.cache.common.CacheKey;
import i8.c;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k implements i8.b {

    /* renamed from: i  reason: collision with root package name */
    private static final Object f31473i = new Object();

    /* renamed from: j  reason: collision with root package name */
    private static k f31474j;

    /* renamed from: k  reason: collision with root package name */
    private static int f31475k;

    /* renamed from: a  reason: collision with root package name */
    private CacheKey f31476a;

    /* renamed from: b  reason: collision with root package name */
    private String f31477b;

    /* renamed from: c  reason: collision with root package name */
    private long f31478c;

    /* renamed from: d  reason: collision with root package name */
    private long f31479d;

    /* renamed from: e  reason: collision with root package name */
    private long f31480e;

    /* renamed from: f  reason: collision with root package name */
    private IOException f31481f;

    /* renamed from: g  reason: collision with root package name */
    private c.a f31482g;

    /* renamed from: h  reason: collision with root package name */
    private k f31483h;

    private k() {
    }

    public static k a() {
        synchronized (f31473i) {
            try {
                k kVar = f31474j;
                if (kVar != null) {
                    f31474j = kVar.f31483h;
                    kVar.f31483h = null;
                    f31475k--;
                    return kVar;
                }
                return new k();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private void c() {
        this.f31476a = null;
        this.f31477b = null;
        this.f31478c = 0L;
        this.f31479d = 0L;
        this.f31480e = 0L;
        this.f31481f = null;
        this.f31482g = null;
    }

    public void b() {
        synchronized (f31473i) {
            try {
                if (f31475k < 5) {
                    c();
                    f31475k++;
                    k kVar = f31474j;
                    if (kVar != null) {
                        this.f31483h = kVar;
                    }
                    f31474j = this;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public k d(CacheKey cacheKey) {
        this.f31476a = cacheKey;
        return this;
    }

    public k e(long j10) {
        this.f31479d = j10;
        return this;
    }

    public k f(long j10) {
        this.f31480e = j10;
        return this;
    }

    public k g(c.a aVar) {
        this.f31482g = aVar;
        return this;
    }

    public k h(IOException iOException) {
        this.f31481f = iOException;
        return this;
    }

    public k i(long j10) {
        this.f31478c = j10;
        return this;
    }

    public k j(String str) {
        this.f31477b = str;
        return this;
    }
}
