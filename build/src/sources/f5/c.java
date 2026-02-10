package f5;

import as.l;
import as.o;
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
    private final Lazy f23577a;

    /* renamed from: b  reason: collision with root package name */
    private final Lazy f23578b;

    /* renamed from: c  reason: collision with root package name */
    private final long f23579c;

    /* renamed from: d  reason: collision with root package name */
    private final long f23580d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f23581e;

    /* renamed from: f  reason: collision with root package name */
    private final Headers f23582f;

    public c(BufferedSource bufferedSource) {
        o oVar = o.f6083i;
        this.f23577a = l.a(oVar, new Function0() { // from class: f5.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                CacheControl c10;
                c10 = c.c(c.this);
                return c10;
            }
        });
        this.f23578b = l.a(oVar, new Function0() { // from class: f5.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                MediaType d10;
                d10 = c.d(c.this);
                return d10;
            }
        });
        this.f23579c = Long.parseLong(bufferedSource.J0());
        this.f23580d = Long.parseLong(bufferedSource.J0());
        this.f23581e = Integer.parseInt(bufferedSource.J0()) > 0;
        int parseInt = Integer.parseInt(bufferedSource.J0());
        Headers.a aVar = new Headers.a();
        for (int i10 = 0; i10 < parseInt; i10++) {
            k.b(aVar, bufferedSource.J0());
        }
        this.f23582f = aVar.f();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final CacheControl c(c cVar) {
        return CacheControl.f40216n.b(cVar.f23582f);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final MediaType d(c cVar) {
        String c10 = cVar.f23582f.c("Content-Type");
        if (c10 != null) {
            return MediaType.f40297e.c(c10);
        }
        return null;
    }

    public final CacheControl e() {
        return (CacheControl) this.f23577a.getValue();
    }

    public final MediaType f() {
        return (MediaType) this.f23578b.getValue();
    }

    public final long g() {
        return this.f23580d;
    }

    public final Headers h() {
        return this.f23582f;
    }

    public final long i() {
        return this.f23579c;
    }

    public final boolean j() {
        return this.f23581e;
    }

    public final void k(BufferedSink bufferedSink) {
        long j10;
        bufferedSink.W0(this.f23579c).writeByte(10);
        bufferedSink.W0(this.f23580d).writeByte(10);
        if (this.f23581e) {
            j10 = 1;
        } else {
            j10 = 0;
        }
        bufferedSink.W0(j10).writeByte(10);
        bufferedSink.W0(this.f23582f.size()).writeByte(10);
        int size = this.f23582f.size();
        for (int i10 = 0; i10 < size; i10++) {
            bufferedSink.q0(this.f23582f.e(i10)).q0(": ").q0(this.f23582f.k(i10)).writeByte(10);
        }
    }

    public c(Response response) {
        o oVar = o.f6083i;
        this.f23577a = l.a(oVar, new Function0() { // from class: f5.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                CacheControl c10;
                c10 = c.c(c.this);
                return c10;
            }
        });
        this.f23578b = l.a(oVar, new Function0() { // from class: f5.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                MediaType d10;
                d10 = c.d(c.this);
                return d10;
            }
        });
        this.f23579c = response.S0();
        this.f23580d = response.N0();
        this.f23581e = response.I() != null;
        this.f23582f = response.z0();
    }
}
