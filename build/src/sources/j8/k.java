package j8;

import com.facebook.cache.common.CacheKey;
import i8.c;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k implements i8.b {

    /* renamed from: i  reason: collision with root package name */
    private static final Object f29843i = new Object();

    /* renamed from: j  reason: collision with root package name */
    private static k f29844j;

    /* renamed from: k  reason: collision with root package name */
    private static int f29845k;

    /* renamed from: a  reason: collision with root package name */
    private CacheKey f29846a;

    /* renamed from: b  reason: collision with root package name */
    private String f29847b;

    /* renamed from: c  reason: collision with root package name */
    private long f29848c;

    /* renamed from: d  reason: collision with root package name */
    private long f29849d;

    /* renamed from: e  reason: collision with root package name */
    private long f29850e;

    /* renamed from: f  reason: collision with root package name */
    private IOException f29851f;

    /* renamed from: g  reason: collision with root package name */
    private c.a f29852g;

    /* renamed from: h  reason: collision with root package name */
    private k f29853h;

    private k() {
    }

    public static k a() {
        synchronized (f29843i) {
            try {
                k kVar = f29844j;
                if (kVar != null) {
                    f29844j = kVar.f29853h;
                    kVar.f29853h = null;
                    f29845k--;
                    return kVar;
                }
                return new k();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private void c() {
        this.f29846a = null;
        this.f29847b = null;
        this.f29848c = 0L;
        this.f29849d = 0L;
        this.f29850e = 0L;
        this.f29851f = null;
        this.f29852g = null;
    }

    public void b() {
        synchronized (f29843i) {
            try {
                if (f29845k < 5) {
                    c();
                    f29845k++;
                    k kVar = f29844j;
                    if (kVar != null) {
                        this.f29853h = kVar;
                    }
                    f29844j = this;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public k d(CacheKey cacheKey) {
        this.f29846a = cacheKey;
        return this;
    }

    public k e(long j10) {
        this.f29849d = j10;
        return this;
    }

    public k f(long j10) {
        this.f29850e = j10;
        return this;
    }

    public k g(c.a aVar) {
        this.f29852g = aVar;
        return this;
    }

    public k h(IOException iOException) {
        this.f29851f = iOException;
        return this;
    }

    public k i(long j10) {
        this.f29848c = j10;
        return this;
    }

    public k j(String str) {
        this.f29847b = str;
        return this;
    }
}
