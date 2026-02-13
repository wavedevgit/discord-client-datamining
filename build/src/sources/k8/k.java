package k8;

import com.facebook.cache.common.CacheKey;
import j8.c;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k implements j8.b {

    /* renamed from: i  reason: collision with root package name */
    private static final Object f32221i = new Object();

    /* renamed from: j  reason: collision with root package name */
    private static k f32222j;

    /* renamed from: k  reason: collision with root package name */
    private static int f32223k;

    /* renamed from: a  reason: collision with root package name */
    private CacheKey f32224a;

    /* renamed from: b  reason: collision with root package name */
    private String f32225b;

    /* renamed from: c  reason: collision with root package name */
    private long f32226c;

    /* renamed from: d  reason: collision with root package name */
    private long f32227d;

    /* renamed from: e  reason: collision with root package name */
    private long f32228e;

    /* renamed from: f  reason: collision with root package name */
    private IOException f32229f;

    /* renamed from: g  reason: collision with root package name */
    private c.a f32230g;

    /* renamed from: h  reason: collision with root package name */
    private k f32231h;

    private k() {
    }

    public static k a() {
        synchronized (f32221i) {
            try {
                k kVar = f32222j;
                if (kVar != null) {
                    f32222j = kVar.f32231h;
                    kVar.f32231h = null;
                    f32223k--;
                    return kVar;
                }
                return new k();
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private void c() {
        this.f32224a = null;
        this.f32225b = null;
        this.f32226c = 0L;
        this.f32227d = 0L;
        this.f32228e = 0L;
        this.f32229f = null;
        this.f32230g = null;
    }

    public void b() {
        synchronized (f32221i) {
            try {
                if (f32223k < 5) {
                    c();
                    f32223k++;
                    k kVar = f32222j;
                    if (kVar != null) {
                        this.f32231h = kVar;
                    }
                    f32222j = this;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public k d(CacheKey cacheKey) {
        this.f32224a = cacheKey;
        return this;
    }

    public k e(long j10) {
        this.f32227d = j10;
        return this;
    }

    public k f(long j10) {
        this.f32228e = j10;
        return this;
    }

    public k g(c.a aVar) {
        this.f32230g = aVar;
        return this;
    }

    public k h(IOException iOException) {
        this.f32229f = iOException;
        return this;
    }

    public k i(long j10) {
        this.f32226c = j10;
        return this;
    }

    public k j(String str) {
        this.f32225b = str;
        return this;
    }
}
