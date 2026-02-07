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
import qr.l;
import qr.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final Lazy f22497a;

    /* renamed from: b  reason: collision with root package name */
    private final Lazy f22498b;

    /* renamed from: c  reason: collision with root package name */
    private final long f22499c;

    /* renamed from: d  reason: collision with root package name */
    private final long f22500d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f22501e;

    /* renamed from: f  reason: collision with root package name */
    private final Headers f22502f;

    public c(BufferedSource bufferedSource) {
        o oVar = o.f48093i;
        this.f22497a = l.b(oVar, new Function0() { // from class: f5.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                CacheControl c10;
                c10 = c.c(c.this);
                return c10;
            }
        });
        this.f22498b = l.b(oVar, new Function0() { // from class: f5.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                MediaType d10;
                d10 = c.d(c.this);
                return d10;
            }
        });
        this.f22499c = Long.parseLong(bufferedSource.H0());
        this.f22500d = Long.parseLong(bufferedSource.H0());
        this.f22501e = Integer.parseInt(bufferedSource.H0()) > 0;
        int parseInt = Integer.parseInt(bufferedSource.H0());
        Headers.a aVar = new Headers.a();
        for (int i10 = 0; i10 < parseInt; i10++) {
            k.b(aVar, bufferedSource.H0());
        }
        this.f22502f = aVar.f();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final CacheControl c(c cVar) {
        return CacheControl.f42839n.b(cVar.f22502f);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final MediaType d(c cVar) {
        String c10 = cVar.f22502f.c("Content-Type");
        if (c10 != null) {
            return MediaType.f42920e.c(c10);
        }
        return null;
    }

    public final CacheControl e() {
        return (CacheControl) this.f22497a.getValue();
    }

    public final MediaType f() {
        return (MediaType) this.f22498b.getValue();
    }

    public final long g() {
        return this.f22500d;
    }

    public final Headers h() {
        return this.f22502f;
    }

    public final long i() {
        return this.f22499c;
    }

    public final boolean j() {
        return this.f22501e;
    }

    public final void k(BufferedSink bufferedSink) {
        long j10;
        bufferedSink.W0(this.f22499c).writeByte(10);
        bufferedSink.W0(this.f22500d).writeByte(10);
        if (this.f22501e) {
            j10 = 1;
        } else {
            j10 = 0;
        }
        bufferedSink.W0(j10).writeByte(10);
        bufferedSink.W0(this.f22502f.size()).writeByte(10);
        int size = this.f22502f.size();
        for (int i10 = 0; i10 < size; i10++) {
            bufferedSink.q0(this.f22502f.e(i10)).q0(": ").q0(this.f22502f.j(i10)).writeByte(10);
        }
    }

    public c(Response response) {
        o oVar = o.f48093i;
        this.f22497a = l.b(oVar, new Function0() { // from class: f5.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                CacheControl c10;
                c10 = c.c(c.this);
                return c10;
            }
        });
        this.f22498b = l.b(oVar, new Function0() { // from class: f5.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                MediaType d10;
                d10 = c.d(c.this);
                return d10;
            }
        });
        this.f22499c = response.d1();
        this.f22500d = response.V0();
        this.f22501e = response.I() != null;
        this.f22502f = response.E0();
    }
}
