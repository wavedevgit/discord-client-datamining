package f5;

import ir.l;
import ir.o;
import k5.k;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import okhttp3.CacheControl;
import okhttp3.Headers;
import okhttp3.MediaType;
import okhttp3.Response;
import okio.BufferedSink;
import okio.BufferedSource;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final Lazy f24368a;

    /* renamed from: b  reason: collision with root package name */
    private final Lazy f24369b;

    /* renamed from: c  reason: collision with root package name */
    private final long f24370c;

    /* renamed from: d  reason: collision with root package name */
    private final long f24371d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f24372e;

    /* renamed from: f  reason: collision with root package name */
    private final Headers f24373f;

    public c(BufferedSource bufferedSource) {
        o oVar = o.f31120i;
        this.f24368a = l.a(oVar, new Function0() { // from class: f5.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                CacheControl c10;
                c10 = c.c(c.this);
                return c10;
            }
        });
        this.f24369b = l.a(oVar, new Function0() { // from class: f5.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                MediaType d10;
                d10 = c.d(c.this);
                return d10;
            }
        });
        this.f24370c = Long.parseLong(bufferedSource.H0());
        this.f24371d = Long.parseLong(bufferedSource.H0());
        this.f24372e = Integer.parseInt(bufferedSource.H0()) > 0;
        int parseInt = Integer.parseInt(bufferedSource.H0());
        Headers.a aVar = new Headers.a();
        for (int i10 = 0; i10 < parseInt; i10++) {
            k.b(aVar, bufferedSource.H0());
        }
        this.f24373f = aVar.f();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final CacheControl c(c cVar) {
        return CacheControl.f44004n.b(cVar.f24373f);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final MediaType d(c cVar) {
        String c10 = cVar.f24373f.c("Content-Type");
        if (c10 != null) {
            return MediaType.f44085e.c(c10);
        }
        return null;
    }

    public final CacheControl e() {
        return (CacheControl) this.f24368a.getValue();
    }

    public final MediaType f() {
        return (MediaType) this.f24369b.getValue();
    }

    public final long g() {
        return this.f24371d;
    }

    public final Headers h() {
        return this.f24373f;
    }

    public final long i() {
        return this.f24370c;
    }

    public final boolean j() {
        return this.f24372e;
    }

    public final void k(BufferedSink bufferedSink) {
        long j10;
        bufferedSink.V0(this.f24370c).writeByte(10);
        bufferedSink.V0(this.f24371d).writeByte(10);
        if (this.f24372e) {
            j10 = 1;
        } else {
            j10 = 0;
        }
        bufferedSink.V0(j10).writeByte(10);
        bufferedSink.V0(this.f24373f.size()).writeByte(10);
        int size = this.f24373f.size();
        for (int i10 = 0; i10 < size; i10++) {
            bufferedSink.n0(this.f24373f.e(i10)).n0(": ").n0(this.f24373f.j(i10)).writeByte(10);
        }
    }

    public c(Response response) {
        o oVar = o.f31120i;
        this.f24368a = l.a(oVar, new Function0() { // from class: f5.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                CacheControl c10;
                c10 = c.c(c.this);
                return c10;
            }
        });
        this.f24369b = l.a(oVar, new Function0() { // from class: f5.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                MediaType d10;
                d10 = c.d(c.this);
                return d10;
            }
        });
        this.f24370c = response.d1();
        this.f24371d = response.X0();
        this.f24372e = response.V() != null;
        this.f24373f = response.E0();
    }
}
