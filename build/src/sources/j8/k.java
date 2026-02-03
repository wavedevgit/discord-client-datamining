package j8;

import com.facebook.cache.common.CacheKey;
import i8.c;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k implements i8.b {

    /* renamed from: i  reason: collision with root package name */
    private static final Object f31677i = new Object();

    /* renamed from: j  reason: collision with root package name */
    private static k f31678j;

    /* renamed from: k  reason: collision with root package name */
    private static int f31679k;

    /* renamed from: a  reason: collision with root package name */
    private CacheKey f31680a;

    /* renamed from: b  reason: collision with root package name */
    private String f31681b;

    /* renamed from: c  reason: collision with root package name */
    private long f31682c;

    /* renamed from: d  reason: collision with root package name */
    private long f31683d;

    /* renamed from: e  reason: collision with root package name */
    private long f31684e;

    /* renamed from: f  reason: collision with root package name */
    private IOException f31685f;

    /* renamed from: g  reason: collision with root package name */
    private c.a f31686g;

    /* renamed from: h  reason: collision with root package name */
    private k f31687h;

    private k() {
    }

    public static k a() {
        synchronized (f31677i) {
            try {
                k kVar = f31678j;
                if (kVar != null) {
                    f31678j = kVar.f31687h;
                    kVar.f31687h = null;
                    f31679k--;
                    return kVar;
                }
                return new k();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private void c() {
        this.f31680a = null;
        this.f31681b = null;
        this.f31682c = 0L;
        this.f31683d = 0L;
        this.f31684e = 0L;
        this.f31685f = null;
        this.f31686g = null;
    }

    public void b() {
        synchronized (f31677i) {
            try {
                if (f31679k < 5) {
                    c();
                    f31679k++;
                    k kVar = f31678j;
                    if (kVar != null) {
                        this.f31687h = kVar;
                    }
                    f31678j = this;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public k d(CacheKey cacheKey) {
        this.f31680a = cacheKey;
        return this;
    }

    public k e(long j10) {
        this.f31683d = j10;
        return this;
    }

    public k f(long j10) {
        this.f31684e = j10;
        return this;
    }

    public k g(c.a aVar) {
        this.f31686g = aVar;
        return this;
    }

    public k h(IOException iOException) {
        this.f31685f = iOException;
        return this;
    }

    public k i(long j10) {
        this.f31682c = j10;
        return this;
    }

    public k j(String str) {
        this.f31681b = str;
        return this;
    }
}
