package j8;

import com.facebook.cache.common.CacheKey;
import i8.c;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k implements i8.b {

    /* renamed from: i  reason: collision with root package name */
    private static final Object f30822i = new Object();

    /* renamed from: j  reason: collision with root package name */
    private static k f30823j;

    /* renamed from: k  reason: collision with root package name */
    private static int f30824k;

    /* renamed from: a  reason: collision with root package name */
    private CacheKey f30825a;

    /* renamed from: b  reason: collision with root package name */
    private String f30826b;

    /* renamed from: c  reason: collision with root package name */
    private long f30827c;

    /* renamed from: d  reason: collision with root package name */
    private long f30828d;

    /* renamed from: e  reason: collision with root package name */
    private long f30829e;

    /* renamed from: f  reason: collision with root package name */
    private IOException f30830f;

    /* renamed from: g  reason: collision with root package name */
    private c.a f30831g;

    /* renamed from: h  reason: collision with root package name */
    private k f30832h;

    private k() {
    }

    public static k a() {
        synchronized (f30822i) {
            try {
                k kVar = f30823j;
                if (kVar != null) {
                    f30823j = kVar.f30832h;
                    kVar.f30832h = null;
                    f30824k--;
                    return kVar;
                }
                return new k();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private void c() {
        this.f30825a = null;
        this.f30826b = null;
        this.f30827c = 0L;
        this.f30828d = 0L;
        this.f30829e = 0L;
        this.f30830f = null;
        this.f30831g = null;
    }

    public void b() {
        synchronized (f30822i) {
            try {
                if (f30824k < 5) {
                    c();
                    f30824k++;
                    k kVar = f30823j;
                    if (kVar != null) {
                        this.f30832h = kVar;
                    }
                    f30823j = this;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public k d(CacheKey cacheKey) {
        this.f30825a = cacheKey;
        return this;
    }

    public k e(long j10) {
        this.f30828d = j10;
        return this;
    }

    public k f(long j10) {
        this.f30829e = j10;
        return this;
    }

    public k g(c.a aVar) {
        this.f30831g = aVar;
        return this;
    }

    public k h(IOException iOException) {
        this.f30830f = iOException;
        return this;
    }

    public k i(long j10) {
        this.f30827c = j10;
        return this;
    }

    public k j(String str) {
        this.f30826b = str;
        return this;
    }
}
