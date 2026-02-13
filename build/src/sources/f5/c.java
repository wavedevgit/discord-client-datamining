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
    private final Lazy f23578a;

    /* renamed from: b  reason: collision with root package name */
    private final Lazy f23579b;

    /* renamed from: c  reason: collision with root package name */
    private final long f23580c;

    /* renamed from: d  reason: collision with root package name */
    private final long f23581d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f23582e;

    /* renamed from: f  reason: collision with root package name */
    private final Headers f23583f;

    public c(BufferedSource bufferedSource) {
        o oVar = o.f6083i;
        this.f23578a = l.a(oVar, new Function0() { // from class: f5.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                CacheControl c10;
                c10 = c.c(c.this);
                return c10;
            }
        });
        this.f23579b = l.a(oVar, new Function0() { // from class: f5.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                MediaType d10;
                d10 = c.d(c.this);
                return d10;
            }
        });
        this.f23580c = Long.parseLong(bufferedSource.J0());
        this.f23581d = Long.parseLong(bufferedSource.J0());
        this.f23582e = Integer.parseInt(bufferedSource.J0()) > 0;
        int parseInt = Integer.parseInt(bufferedSource.J0());
        Headers.a aVar = new Headers.a();
        for (int i10 = 0; i10 < parseInt; i10++) {
            k.b(aVar, bufferedSource.J0());
        }
        this.f23583f = aVar.f();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final CacheControl c(c cVar) {
        return CacheControl.f40785n.b(cVar.f23583f);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final MediaType d(c cVar) {
        String c10 = cVar.f23583f.c("Content-Type");
        if (c10 != null) {
            return MediaType.f40866e.c(c10);
        }
        return null;
    }

    public final CacheControl e() {
        return (CacheControl) this.f23578a.getValue();
    }

    public final MediaType f() {
        return (MediaType) this.f23579b.getValue();
    }

    public final long g() {
        return this.f23581d;
    }

    public final Headers h() {
        return this.f23583f;
    }

    public final long i() {
        return this.f23580c;
    }

    public final boolean j() {
        return this.f23582e;
    }

    public final void k(BufferedSink bufferedSink) {
        long j10;
        bufferedSink.W0(this.f23580c).writeByte(10);
        bufferedSink.W0(this.f23581d).writeByte(10);
        if (this.f23582e) {
            j10 = 1;
        } else {
            j10 = 0;
        }
        bufferedSink.W0(j10).writeByte(10);
        bufferedSink.W0(this.f23583f.size()).writeByte(10);
        int size = this.f23583f.size();
        for (int i10 = 0; i10 < size; i10++) {
            bufferedSink.q0(this.f23583f.e(i10)).q0(": ").q0(this.f23583f.k(i10)).writeByte(10);
        }
    }

    public c(Response response) {
        o oVar = o.f6083i;
        this.f23578a = l.a(oVar, new Function0() { // from class: f5.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                CacheControl c10;
                c10 = c.c(c.this);
                return c10;
            }
        });
        this.f23579b = l.a(oVar, new Function0() { // from class: f5.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                MediaType d10;
                d10 = c.d(c.this);
                return d10;
            }
        });
        this.f23580c = response.S0();
        this.f23581d = response.N0();
        this.f23582e = response.I() != null;
        this.f23583f = response.z0();
    }
}
