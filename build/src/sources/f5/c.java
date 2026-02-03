package f5;

import jr.l;
import jr.o;
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
    private final Lazy f23579a;

    /* renamed from: b  reason: collision with root package name */
    private final Lazy f23580b;

    /* renamed from: c  reason: collision with root package name */
    private final long f23581c;

    /* renamed from: d  reason: collision with root package name */
    private final long f23582d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f23583e;

    /* renamed from: f  reason: collision with root package name */
    private final Headers f23584f;

    public c(BufferedSource bufferedSource) {
        o oVar = o.f32183i;
        this.f23579a = l.a(oVar, new Function0() { // from class: f5.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                CacheControl c10;
                c10 = c.c(c.this);
                return c10;
            }
        });
        this.f23580b = l.a(oVar, new Function0() { // from class: f5.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                MediaType d10;
                d10 = c.d(c.this);
                return d10;
            }
        });
        this.f23581c = Long.parseLong(bufferedSource.I0());
        this.f23582d = Long.parseLong(bufferedSource.I0());
        this.f23583e = Integer.parseInt(bufferedSource.I0()) > 0;
        int parseInt = Integer.parseInt(bufferedSource.I0());
        Headers.a aVar = new Headers.a();
        for (int i10 = 0; i10 < parseInt; i10++) {
            k.b(aVar, bufferedSource.I0());
        }
        this.f23584f = aVar.f();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final CacheControl c(c cVar) {
        return CacheControl.f44132n.b(cVar.f23584f);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final MediaType d(c cVar) {
        String c10 = cVar.f23584f.c("Content-Type");
        if (c10 != null) {
            return MediaType.f44213e.c(c10);
        }
        return null;
    }

    public final CacheControl e() {
        return (CacheControl) this.f23579a.getValue();
    }

    public final MediaType f() {
        return (MediaType) this.f23580b.getValue();
    }

    public final long g() {
        return this.f23582d;
    }

    public final Headers h() {
        return this.f23584f;
    }

    public final long i() {
        return this.f23581c;
    }

    public final boolean j() {
        return this.f23583e;
    }

    public final void k(BufferedSink bufferedSink) {
        long j10;
        bufferedSink.W0(this.f23581c).writeByte(10);
        bufferedSink.W0(this.f23582d).writeByte(10);
        if (this.f23583e) {
            j10 = 1;
        } else {
            j10 = 0;
        }
        bufferedSink.W0(j10).writeByte(10);
        bufferedSink.W0(this.f23584f.size()).writeByte(10);
        int size = this.f23584f.size();
        for (int i10 = 0; i10 < size; i10++) {
            bufferedSink.o0(this.f23584f.e(i10)).o0(": ").o0(this.f23584f.j(i10)).writeByte(10);
        }
    }

    public c(Response response) {
        o oVar = o.f32183i;
        this.f23579a = l.a(oVar, new Function0() { // from class: f5.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                CacheControl c10;
                c10 = c.c(c.this);
                return c10;
            }
        });
        this.f23580b = l.a(oVar, new Function0() { // from class: f5.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                MediaType d10;
                d10 = c.d(c.this);
                return d10;
            }
        });
        this.f23581c = response.e1();
        this.f23582d = response.Y0();
        this.f23583e = response.V() != null;
        this.f23584f = response.F0();
    }
}
