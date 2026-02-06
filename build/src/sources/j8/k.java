package j8;

import com.facebook.cache.common.CacheKey;
import i8.c;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k implements i8.b {

    /* renamed from: i  reason: collision with root package name */
    private static final Object f29795i = new Object();

    /* renamed from: j  reason: collision with root package name */
    private static k f29796j;

    /* renamed from: k  reason: collision with root package name */
    private static int f29797k;

    /* renamed from: a  reason: collision with root package name */
    private CacheKey f29798a;

    /* renamed from: b  reason: collision with root package name */
    private String f29799b;

    /* renamed from: c  reason: collision with root package name */
    private long f29800c;

    /* renamed from: d  reason: collision with root package name */
    private long f29801d;

    /* renamed from: e  reason: collision with root package name */
    private long f29802e;

    /* renamed from: f  reason: collision with root package name */
    private IOException f29803f;

    /* renamed from: g  reason: collision with root package name */
    private c.a f29804g;

    /* renamed from: h  reason: collision with root package name */
    private k f29805h;

    private k() {
    }

    public static k a() {
        synchronized (f29795i) {
            try {
                k kVar = f29796j;
                if (kVar != null) {
                    f29796j = kVar.f29805h;
                    kVar.f29805h = null;
                    f29797k--;
                    return kVar;
                }
                return new k();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private void c() {
        this.f29798a = null;
        this.f29799b = null;
        this.f29800c = 0L;
        this.f29801d = 0L;
        this.f29802e = 0L;
        this.f29803f = null;
        this.f29804g = null;
    }

    public void b() {
        synchronized (f29795i) {
            try {
                if (f29797k < 5) {
                    c();
                    f29797k++;
                    k kVar = f29796j;
                    if (kVar != null) {
                        this.f29805h = kVar;
                    }
                    f29796j = this;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public k d(CacheKey cacheKey) {
        this.f29798a = cacheKey;
        return this;
    }

    public k e(long j10) {
        this.f29801d = j10;
        return this;
    }

    public k f(long j10) {
        this.f29802e = j10;
        return this;
    }

    public k g(c.a aVar) {
        this.f29804g = aVar;
        return this;
    }

    public k h(IOException iOException) {
        this.f29803f = iOException;
        return this;
    }

    public k i(long j10) {
        this.f29800c = j10;
        return this;
    }

    public k j(String str) {
        this.f29799b = str;
        return this;
    }
}
