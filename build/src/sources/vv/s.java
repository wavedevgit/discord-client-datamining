package vv;

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
    private final y f53127d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f53128e;

    /* renamed from: i  reason: collision with root package name */
    private final Object[] f53129i;

    /* renamed from: o  reason: collision with root package name */
    private final Call.Factory f53130o;

    /* renamed from: p  reason: collision with root package name */
    private final h f53131p;

    /* renamed from: q  reason: collision with root package name */
    private volatile boolean f53132q;

    /* renamed from: r  reason: collision with root package name */
    private Call f53133r;

    /* renamed from: s  reason: collision with root package name */
    private Throwable f53134s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f53135t;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class a implements bu.b {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ f f53136d;

        a(f fVar) {
            this.f53136d = fVar;
        }

        private void a(Throwable th2) {
            try {
                this.f53136d.b(s.this, th2);
            } catch (Throwable th3) {
                e0.t(th3);
                th3.printStackTrace();
            }
        }

        @Override // bu.b
        public void onFailure(Call call, IOException iOException) {
            a(iOException);
        }

        @Override // bu.b
        public void onResponse(Call call, Response response) {
            try {
                try {
                    this.f53136d.a(s.this, s.this.d(response));
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
        private final ResponseBody f53138d;

        /* renamed from: e  reason: collision with root package name */
        private final BufferedSource f53139e;

        /* renamed from: i  reason: collision with root package name */
        IOException f53140i;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        class a extends qu.k {
            a(Source source) {
                super(source);
            }

            @Override // qu.k, okio.Source
            public long read(Buffer buffer, long j10) {
                try {
                    return super.read(buffer, j10);
                } catch (IOException e10) {
                    b.this.f53140i = e10;
                    throw e10;
                }
            }
        }

        b(ResponseBody responseBody) {
            this.f53138d = responseBody;
            this.f53139e = qu.x.d(new a(responseBody.source()));
        }

        @Override // okhttp3.ResponseBody, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            this.f53138d.close();
        }

        @Override // okhttp3.ResponseBody
        public long contentLength() {
            return this.f53138d.contentLength();
        }

        @Override // okhttp3.ResponseBody
        public MediaType contentType() {
            return this.f53138d.contentType();
        }

        void g() {
            IOException iOException = this.f53140i;
            if (iOException == null) {
                return;
            }
            throw iOException;
        }

        @Override // okhttp3.ResponseBody
        public BufferedSource source() {
            return this.f53139e;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends ResponseBody {

        /* renamed from: d  reason: collision with root package name */
        private final MediaType f53142d;

        /* renamed from: e  reason: collision with root package name */
        private final long f53143e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(MediaType mediaType, long j10) {
            this.f53142d = mediaType;
            this.f53143e = j10;
        }

        @Override // okhttp3.ResponseBody
        public long contentLength() {
            return this.f53143e;
        }

        @Override // okhttp3.ResponseBody
        public MediaType contentType() {
            return this.f53142d;
        }

        @Override // okhttp3.ResponseBody
        public BufferedSource source() {
            throw new IllegalStateException("Cannot read raw response body of a converted body.");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public s(y yVar, Object obj, Object[] objArr, Call.Factory factory, h hVar) {
        this.f53127d = yVar;
        this.f53128e = obj;
        this.f53129i = objArr;
        this.f53130o = factory;
        this.f53131p = hVar;
    }

    private Call b() {
        Call a10 = this.f53130o.a(this.f53127d.a(this.f53128e, this.f53129i));
        if (a10 != null) {
            return a10;
        }
        throw new NullPointerException("Call.Factory returned null.");
    }

    private Call c() {
        Call call = this.f53133r;
        if (call != null) {
            return call;
        }
        Throwable th2 = this.f53134s;
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
            this.f53133r = b10;
            return b10;
        } catch (IOException | Error | RuntimeException e10) {
            e0.t(e10);
            this.f53134s = e10;
            throw e10;
        }
    }

    @Override // vv.d
    public boolean C() {
        boolean z10 = true;
        if (this.f53132q) {
            return true;
        }
        synchronized (this) {
            try {
                Call call = this.f53133r;
                if (call == null || !call.C()) {
                    z10 = false;
                }
            } finally {
            }
        }
        return z10;
    }

    @Override // vv.d
    public void E0(f fVar) {
        Call call;
        Throwable th2;
        Objects.requireNonNull(fVar, "callback == null");
        synchronized (this) {
            try {
                if (!this.f53135t) {
                    this.f53135t = true;
                    call = this.f53133r;
                    th2 = this.f53134s;
                    if (call == null && th2 == null) {
                        Call b10 = b();
                        this.f53133r = b10;
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
            fVar.b(this, th2);
            return;
        }
        if (this.f53132q) {
            call.cancel();
        }
        call.J0(new a(fVar));
    }

    @Override // vv.d
    /* renamed from: a */
    public s mo1234clone() {
        return new s(this.f53127d, this.f53128e, this.f53129i, this.f53130o, this.f53131p);
    }

    @Override // vv.d
    public void cancel() {
        Call call;
        this.f53132q = true;
        synchronized (this) {
            call = this.f53133r;
        }
        if (call != null) {
            call.cancel();
        }
    }

    z d(Response response) {
        ResponseBody n10 = response.n();
        Response c10 = response.K0().b(new c(n10.contentType(), n10.contentLength())).c();
        int z10 = c10.z();
        if (z10 >= 200 && z10 < 300) {
            if (z10 != 204 && z10 != 205) {
                b bVar = new b(n10);
                try {
                    return z.j(this.f53131p.a(bVar), c10);
                } catch (RuntimeException e10) {
                    bVar.g();
                    throw e10;
                }
            }
            n10.close();
            return z.j(null, c10);
        }
        try {
            return z.d(e0.a(n10), c10);
        } finally {
            n10.close();
        }
    }

    @Override // vv.d
    public synchronized Request g() {
        try {
        } catch (IOException e10) {
            throw new RuntimeException("Unable to create request.", e10);
        }
        return c().g();
    }
}
