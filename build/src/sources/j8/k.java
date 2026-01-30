package j8;

import com.facebook.cache.common.CacheKey;
import i8.c;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k implements i8.b {

    /* renamed from: i  reason: collision with root package name */
    private static final Object f31939i = new Object();

    /* renamed from: j  reason: collision with root package name */
    private static k f31940j;

    /* renamed from: k  reason: collision with root package name */
    private static int f31941k;

    /* renamed from: a  reason: collision with root package name */
    private CacheKey f31942a;

    /* renamed from: b  reason: collision with root package name */
    private String f31943b;

    /* renamed from: c  reason: collision with root package name */
    private long f31944c;

    /* renamed from: d  reason: collision with root package name */
    private long f31945d;

    /* renamed from: e  reason: collision with root package name */
    private long f31946e;

    /* renamed from: f  reason: collision with root package name */
    private IOException f31947f;

    /* renamed from: g  reason: collision with root package name */
    private c.a f31948g;

    /* renamed from: h  reason: collision with root package name */
    private k f31949h;

    private k() {
    }

    public static k a() {
        synchronized (f31939i) {
            try {
                k kVar = f31940j;
                if (kVar != null) {
                    f31940j = kVar.f31949h;
                    kVar.f31949h = null;
                    f31941k--;
                    return kVar;
                }
                return new k();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private void c() {
        this.f31942a = null;
        this.f31943b = null;
        this.f31944c = 0L;
        this.f31945d = 0L;
        this.f31946e = 0L;
        this.f31947f = null;
        this.f31948g = null;
    }

    public void b() {
        synchronized (f31939i) {
            try {
                if (f31941k < 5) {
                    c();
                    f31941k++;
                    k kVar = f31940j;
                    if (kVar != null) {
                        this.f31949h = kVar;
                    }
                    f31940j = this;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public k d(CacheKey cacheKey) {
        this.f31942a = cacheKey;
        return this;
    }

    public k e(long j10) {
        this.f31945d = j10;
        return this;
    }

    public k f(long j10) {
        this.f31946e = j10;
        return this;
    }

    public k g(c.a aVar) {
        this.f31948g = aVar;
        return this;
    }

    public k h(IOException iOException) {
        this.f31947f = iOException;
        return this;
    }

    public k i(long j10) {
        this.f31944c = j10;
        return this;
    }

    public k j(String str) {
        this.f31943b = str;
        return this;
    }
}
