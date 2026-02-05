package f5;

import k5.k;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import okhttp3.CacheControl;
import okhttp3.Headers;
import okhttp3.MediaType;
import okhttp3.Response;
import okio.BufferedSink;
import okio.BufferedSource;
import or.l;
import or.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final Lazy f22196a;

    /* renamed from: b  reason: collision with root package name */
    private final Lazy f22197b;

    /* renamed from: c  reason: collision with root package name */
    private final long f22198c;

    /* renamed from: d  reason: collision with root package name */
    private final long f22199d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f22200e;

    /* renamed from: f  reason: collision with root package name */
    private final Headers f22201f;

    public c(BufferedSource bufferedSource) {
        o oVar = o.f44233i;
        this.f22196a = l.b(oVar, new Function0() { // from class: f5.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                CacheControl c10;
                c10 = c.c(c.this);
                return c10;
            }
        });
        this.f22197b = l.b(oVar, new Function0() { // from class: f5.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                MediaType d10;
                d10 = c.d(c.this);
                return d10;
            }
        });
        this.f22198c = Long.parseLong(bufferedSource.H0());
        this.f22199d = Long.parseLong(bufferedSource.H0());
        this.f22200e = Integer.parseInt(bufferedSource.H0()) > 0;
        int parseInt = Integer.parseInt(bufferedSource.H0());
        Headers.a aVar = new Headers.a();
        for (int i10 = 0; i10 < parseInt; i10++) {
            k.b(aVar, bufferedSource.H0());
        }
        this.f22201f = aVar.f();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final CacheControl c(c cVar) {
        return CacheControl.f43685n.b(cVar.f22201f);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final MediaType d(c cVar) {
        String c10 = cVar.f22201f.c("Content-Type");
        if (c10 != null) {
            return MediaType.f43766e.c(c10);
        }
        return null;
    }

    public final CacheControl e() {
        return (CacheControl) this.f22196a.getValue();
    }

    public final MediaType f() {
        return (MediaType) this.f22197b.getValue();
    }

    public final long g() {
        return this.f22199d;
    }

    public final Headers h() {
        return this.f22201f;
    }

    public final long i() {
        return this.f22198c;
    }

    public final boolean j() {
        return this.f22200e;
    }

    public final void k(BufferedSink bufferedSink) {
        long j10;
        bufferedSink.W0(this.f22198c).writeByte(10);
        bufferedSink.W0(this.f22199d).writeByte(10);
        if (this.f22200e) {
            j10 = 1;
        } else {
            j10 = 0;
        }
        bufferedSink.W0(j10).writeByte(10);
        bufferedSink.W0(this.f22201f.size()).writeByte(10);
        int size = this.f22201f.size();
        for (int i10 = 0; i10 < size; i10++) {
            bufferedSink.o0(this.f22201f.e(i10)).o0(": ").o0(this.f22201f.j(i10)).writeByte(10);
        }
    }

    public c(Response response) {
        o oVar = o.f44233i;
        this.f22196a = l.b(oVar, new Function0() { // from class: f5.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                CacheControl c10;
                c10 = c.c(c.this);
                return c10;
            }
        });
        this.f22197b = l.b(oVar, new Function0() { // from class: f5.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                MediaType d10;
                d10 = c.d(c.this);
                return d10;
            }
        });
        this.f22198c = response.e1();
        this.f22199d = response.Y0();
        this.f22200e = response.V() != null;
        this.f22201f = response.E0();
    }
}
