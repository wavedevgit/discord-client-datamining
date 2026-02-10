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
import rr.l;
import rr.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final Lazy f22452a;

    /* renamed from: b  reason: collision with root package name */
    private final Lazy f22453b;

    /* renamed from: c  reason: collision with root package name */
    private final long f22454c;

    /* renamed from: d  reason: collision with root package name */
    private final long f22455d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f22456e;

    /* renamed from: f  reason: collision with root package name */
    private final Headers f22457f;

    public c(BufferedSource bufferedSource) {
        o oVar = o.f49211i;
        this.f22452a = l.b(oVar, new Function0() { // from class: f5.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                CacheControl c10;
                c10 = c.c(c.this);
                return c10;
            }
        });
        this.f22453b = l.b(oVar, new Function0() { // from class: f5.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                MediaType d10;
                d10 = c.d(c.this);
                return d10;
            }
        });
        this.f22454c = Long.parseLong(bufferedSource.F0());
        this.f22455d = Long.parseLong(bufferedSource.F0());
        this.f22456e = Integer.parseInt(bufferedSource.F0()) > 0;
        int parseInt = Integer.parseInt(bufferedSource.F0());
        Headers.a aVar = new Headers.a();
        for (int i10 = 0; i10 < parseInt; i10++) {
            k.b(aVar, bufferedSource.F0());
        }
        this.f22457f = aVar.f();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final CacheControl c(c cVar) {
        return CacheControl.f41966n.b(cVar.f22457f);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final MediaType d(c cVar) {
        String c10 = cVar.f22457f.c("Content-Type");
        if (c10 != null) {
            return MediaType.f42047e.c(c10);
        }
        return null;
    }

    public final CacheControl e() {
        return (CacheControl) this.f22452a.getValue();
    }

    public final MediaType f() {
        return (MediaType) this.f22453b.getValue();
    }

    public final long g() {
        return this.f22455d;
    }

    public final Headers h() {
        return this.f22457f;
    }

    public final long i() {
        return this.f22454c;
    }

    public final boolean j() {
        return this.f22456e;
    }

    public final void k(BufferedSink bufferedSink) {
        long j10;
        bufferedSink.S0(this.f22454c).writeByte(10);
        bufferedSink.S0(this.f22455d).writeByte(10);
        if (this.f22456e) {
            j10 = 1;
        } else {
            j10 = 0;
        }
        bufferedSink.S0(j10).writeByte(10);
        bufferedSink.S0(this.f22457f.size()).writeByte(10);
        int size = this.f22457f.size();
        for (int i10 = 0; i10 < size; i10++) {
            bufferedSink.q0(this.f22457f.e(i10)).q0(": ").q0(this.f22457f.j(i10)).writeByte(10);
        }
    }

    public c(Response response) {
        o oVar = o.f49211i;
        this.f22452a = l.b(oVar, new Function0() { // from class: f5.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                CacheControl c10;
                c10 = c.c(c.this);
                return c10;
            }
        });
        this.f22453b = l.b(oVar, new Function0() { // from class: f5.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                MediaType d10;
                d10 = c.d(c.this);
                return d10;
            }
        });
        this.f22454c = response.a1();
        this.f22455d = response.V0();
        this.f22456e = response.I() != null;
        this.f22457f = response.C0();
    }
}
