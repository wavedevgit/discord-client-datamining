package iv;

import java.io.IOException;
import java.util.Objects;
import okhttp3.Call;
import okhttp3.MediaType;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;
import okio.Buffer;
import okio.BufferedSource;
import okio.Source;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class s implements d {

    /* renamed from: d  reason: collision with root package name */
    private final y f31391d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f31392e;

    /* renamed from: i  reason: collision with root package name */
    private final Object[] f31393i;

    /* renamed from: o  reason: collision with root package name */
    private final Call.Factory f31394o;

    /* renamed from: p  reason: collision with root package name */
    private final h f31395p;

    /* renamed from: q  reason: collision with root package name */
    private volatile boolean f31396q;

    /* renamed from: r  reason: collision with root package name */
    private Call f31397r;

    /* renamed from: s  reason: collision with root package name */
    private Throwable f31398s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f31399t;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class a implements tt.b {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ f f31400d;

        a(f fVar) {
            this.f31400d = fVar;
        }

        private void a(Throwable th2) {
            try {
                this.f31400d.a(s.this, th2);
            } catch (Throwable th3) {
                e0.t(th3);
                th3.printStackTrace();
            }
        }

        @Override // tt.b
        public void onFailure(Call call, IOException iOException) {
            a(iOException);
        }

        @Override // tt.b
        public void onResponse(Call call, Response response) {
            try {
                try {
                    this.f31400d.b(s.this, s.this.d(response));
                } catch (Throwable th2) {
                    e0.t(th2);
                    th2.printStackTrace();
                }
            } catch (Throwable th3) {
                e0.t(th3);
                a(th3);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends ResponseBody {

        /* renamed from: d  reason: collision with root package name */
        private final ResponseBody f31402d;

        /* renamed from: e  reason: collision with root package name */
        private final BufferedSource f31403e;

        /* renamed from: i  reason: collision with root package name */
        IOException f31404i;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        class a extends iu.k {
            a(Source source) {
                super(source);
            }

            @Override // iu.k, okio.Source
            public long read(Buffer buffer, long j10) {
                try {
                    return super.read(buffer, j10);
                } catch (IOException e10) {
                    b.this.f31404i = e10;
                    throw e10;
                }
            }
        }

        b(ResponseBody responseBody) {
            this.f31402d = responseBody;
            this.f31403e = iu.x.d(new a(responseBody.source()));
        }

        @Override // okhttp3.ResponseBody, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            this.f31402d.close();
        }

        @Override // okhttp3.ResponseBody
        public long contentLength() {
            return this.f31402d.contentLength();
        }

        @Override // okhttp3.ResponseBody
        public MediaType contentType() {
            return this.f31402d.contentType();
        }

        void h() {
            IOException iOException = this.f31404i;
            if (iOException == null) {
                return;
            }
            throw iOException;
        }

        @Override // okhttp3.ResponseBody
        public BufferedSource source() {
            return this.f31403e;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends ResponseBody {

        /* renamed from: d  reason: collision with root package name */
        private final MediaType f31406d;

        /* renamed from: e  reason: collision with root package name */
        private final long f31407e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(MediaType mediaType, long j10) {
            this.f31406d = mediaType;
            this.f31407e = j10;
        }

        @Override // okhttp3.ResponseBody
        public long contentLength() {
            return this.f31407e;
        }

        @Override // okhttp3.ResponseBody
        public MediaType contentType() {
            return this.f31406d;
        }

        @Override // okhttp3.ResponseBody
        public BufferedSource source() {
            throw new IllegalStateException("Cannot read raw response body of a converted body.");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public s(y yVar, Object obj, Object[] objArr, Call.Factory factory, h hVar) {
        this.f31391d = yVar;
        this.f31392e = obj;
        this.f31393i = objArr;
        this.f31394o = factory;
        this.f31395p = hVar;
    }

    private Call b() {
        Call a10 = this.f31394o.a(this.f31391d.a(this.f31392e, this.f31393i));
        if (a10 != null) {
            return a10;
        }
        throw new NullPointerException("Call.Factory returned null.");
    }

    private Call c() {
        Call call = this.f31397r;
        if (call != null) {
            return call;
        }
        Throwable th2 = this.f31398s;
        if (th2 != null) {
            if (!(th2 instanceof IOException)) {
                if (th2 instanceof RuntimeException) {
                    throw ((RuntimeException) th2);
                }
                throw ((Error) th2);
            }
            throw ((IOException) th2);
        }
        try {
            Call b10 = b();
            this.f31397r = b10;
            return b10;
        } catch (IOException | Error | RuntimeException e10) {
            e0.t(e10);
            this.f31398s = e10;
            throw e10;
        }
    }

    @Override // iv.d
    public void M0(f fVar) {
        Call call;
        Throwable th2;
        Objects.requireNonNull(fVar, "callback == null");
        synchronized (this) {
            try {
                if (!this.f31399t) {
                    this.f31399t = true;
                    call = this.f31397r;
                    th2 = this.f31398s;
                    if (call == null && th2 == null) {
                        Call b10 = b();
                        this.f31397r = b10;
                        call = b10;
                    }
                } else {
                    throw new IllegalStateException("Already executed.");
                }
            } catch (Throwable th3) {
                throw th3;
            }
        }
        if (th2 != null) {
            fVar.a(this, th2);
            return;
        }
        if (this.f31396q) {
            call.cancel();
        }
        call.C0(new a(fVar));
    }

    @Override // iv.d
    /* renamed from: a */
    public s m1191clone() {
        return new s(this.f31391d, this.f31392e, this.f31393i, this.f31394o, this.f31395p);
    }

    @Override // iv.d
    public void cancel() {
        Call call;
        this.f31396q = true;
        synchronized (this) {
            call = this.f31397r;
        }
        if (call != null) {
            call.cancel();
        }
    }

    z d(Response response) {
        ResponseBody x10 = response.x();
        Response c10 = response.M0().b(new c(x10.contentType(), x10.contentLength())).c();
        int L = c10.L();
        if (L >= 200 && L < 300) {
            if (L != 204 && L != 205) {
                b bVar = new b(x10);
                try {
                    return z.j(this.f31395p.a(bVar), c10);
                } catch (RuntimeException e10) {
                    bVar.h();
                    throw e10;
                }
            }
            x10.close();
            return z.j(null, c10);
        }
        try {
            return z.d(e0.a(x10), c10);
        } finally {
            x10.close();
        }
    }

    @Override // iv.d
    public synchronized Request h() {
        try {
        } catch (IOException e10) {
            throw new RuntimeException("Unable to create request.", e10);
        }
        return c().h();
    }

    @Override // iv.d
    public boolean x() {
        boolean z10 = true;
        if (this.f31396q) {
            return true;
        }
        synchronized (this) {
            try {
                Call call = this.f31397r;
                if (call == null || !call.x()) {
                    z10 = false;
                }
            } finally {
            }
        }
        return z10;
    }
}
