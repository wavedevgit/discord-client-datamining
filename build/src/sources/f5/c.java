package f5;

import k5.k;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import lr.l;
import lr.o;
import okhttp3.CacheControl;
import okhttp3.Headers;
import okhttp3.MediaType;
import okhttp3.Response;
import okio.BufferedSink;
import okio.BufferedSource;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final Lazy f23171a;

    /* renamed from: b  reason: collision with root package name */
    private final Lazy f23172b;

    /* renamed from: c  reason: collision with root package name */
    private final long f23173c;

    /* renamed from: d  reason: collision with root package name */
    private final long f23174d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f23175e;

    /* renamed from: f  reason: collision with root package name */
    private final Headers f23176f;

    public c(BufferedSource bufferedSource) {
        o oVar = o.f37121i;
        this.f23171a = l.b(oVar, new Function0() { // from class: f5.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                CacheControl c10;
                c10 = c.c(c.this);
                return c10;
            }
        });
        this.f23172b = l.b(oVar, new Function0() { // from class: f5.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                MediaType d10;
                d10 = c.d(c.this);
                return d10;
            }
        });
        this.f23173c = Long.parseLong(bufferedSource.H0());
        this.f23174d = Long.parseLong(bufferedSource.H0());
        this.f23175e = Integer.parseInt(bufferedSource.H0()) > 0;
        int parseInt = Integer.parseInt(bufferedSource.H0());
        Headers.a aVar = new Headers.a();
        for (int i10 = 0; i10 < parseInt; i10++) {
            k.b(aVar, bufferedSource.H0());
        }
        this.f23176f = aVar.f();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final CacheControl c(c cVar) {
        return CacheControl.f43932n.b(cVar.f23176f);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final MediaType d(c cVar) {
        String c10 = cVar.f23176f.c("Content-Type");
        if (c10 != null) {
            return MediaType.f44013e.c(c10);
        }
        return null;
    }

    public final CacheControl e() {
        return (CacheControl) this.f23171a.getValue();
    }

    public final MediaType f() {
        return (MediaType) this.f23172b.getValue();
    }

    public final long g() {
        return this.f23174d;
    }

    public final Headers h() {
        return this.f23176f;
    }

    public final long i() {
        return this.f23173c;
    }

    public final boolean j() {
        return this.f23175e;
    }

    public final void k(BufferedSink bufferedSink) {
        long j10;
        bufferedSink.W0(this.f23173c).writeByte(10);
        bufferedSink.W0(this.f23174d).writeByte(10);
        if (this.f23175e) {
            j10 = 1;
        } else {
            j10 = 0;
        }
        bufferedSink.W0(j10).writeByte(10);
        bufferedSink.W0(this.f23176f.size()).writeByte(10);
        int size = this.f23176f.size();
        for (int i10 = 0; i10 < size; i10++) {
            bufferedSink.n0(this.f23176f.e(i10)).n0(": ").n0(this.f23176f.j(i10)).writeByte(10);
        }
    }

    public c(Response response) {
        o oVar = o.f37121i;
        this.f23171a = l.b(oVar, new Function0() { // from class: f5.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                CacheControl c10;
                c10 = c.c(c.this);
                return c10;
            }
        });
        this.f23172b = l.b(oVar, new Function0() { // from class: f5.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                MediaType d10;
                d10 = c.d(c.this);
                return d10;
            }
        });
        this.f23173c = response.e1();
        this.f23174d = response.Y0();
        this.f23175e = response.V() != null;
        this.f23176f = response.E0();
    }
}
