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
    private final y f53079d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f53080e;

    /* renamed from: i  reason: collision with root package name */
    private final Object[] f53081i;

    /* renamed from: o  reason: collision with root package name */
    private final Call.Factory f53082o;

    /* renamed from: p  reason: collision with root package name */
    private final h f53083p;

    /* renamed from: q  reason: collision with root package name */
    private volatile boolean f53084q;

    /* renamed from: r  reason: collision with root package name */
    private Call f53085r;

    /* renamed from: s  reason: collision with root package name */
    private Throwable f53086s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f53087t;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class a implements bu.b {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ f f53088d;

        a(f fVar) {
            this.f53088d = fVar;
        }

        private void a(Throwable th2) {
            try {
                this.f53088d.b(s.this, th2);
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
                    this.f53088d.a(s.this, s.this.d(response));
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
        private final ResponseBody f53090d;

        /* renamed from: e  reason: collision with root package name */
        private final BufferedSource f53091e;

        /* renamed from: i  reason: collision with root package name */
        IOException f53092i;

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
                    b.this.f53092i = e10;
                    throw e10;
                }
            }
        }

        b(ResponseBody responseBody) {
            this.f53090d = responseBody;
            this.f53091e = qu.x.d(new a(responseBody.source()));
        }

        @Override // okhttp3.ResponseBody, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            this.f53090d.close();
        }

        @Override // okhttp3.ResponseBody
        public long contentLength() {
            return this.f53090d.contentLength();
        }

        @Override // okhttp3.ResponseBody
        public MediaType contentType() {
            return this.f53090d.contentType();
        }

        void g() {
            IOException iOException = this.f53092i;
            if (iOException == null) {
                return;
            }
            throw iOException;
        }

        @Override // okhttp3.ResponseBody
        public BufferedSource source() {
            return this.f53091e;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends ResponseBody {

        /* renamed from: d  reason: collision with root package name */
        private final MediaType f53094d;

        /* renamed from: e  reason: collision with root package name */
        private final long f53095e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(MediaType mediaType, long j10) {
            this.f53094d = mediaType;
            this.f53095e = j10;
        }

        @Override // okhttp3.ResponseBody
        public long contentLength() {
            return this.f53095e;
        }

        @Override // okhttp3.ResponseBody
        public MediaType contentType() {
            return this.f53094d;
        }

        @Override // okhttp3.ResponseBody
        public BufferedSource source() {
            throw new IllegalStateException("Cannot read raw response body of a converted body.");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public s(y yVar, Object obj, Object[] objArr, Call.Factory factory, h hVar) {
        this.f53079d = yVar;
        this.f53080e = obj;
        this.f53081i = objArr;
        this.f53082o = factory;
        this.f53083p = hVar;
    }

    private Call b() {
        Call a10 = this.f53082o.a(this.f53079d.a(this.f53080e, this.f53081i));
        if (a10 != null) {
            return a10;
        }
        throw new NullPointerException("Call.Factory returned null.");
    }

    private Call c() {
        Call call = this.f53085r;
        if (call != null) {
            return call;
        }
        Throwable th2 = this.f53086s;
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
            this.f53085r = b10;
            return b10;
        } catch (IOException | Error | RuntimeException e10) {
            e0.t(e10);
            this.f53086s = e10;
            throw e10;
        }
    }

    @Override // vv.d
    public boolean C() {
        boolean z10 = true;
        if (this.f53084q) {
            return true;
        }
        synchronized (this) {
            try {
                Call call = this.f53085r;
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
                if (!this.f53087t) {
                    this.f53087t = true;
                    call = this.f53085r;
                    th2 = this.f53086s;
                    if (call == null && th2 == null) {
                        Call b10 = b();
                        this.f53085r = b10;
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
        if (this.f53084q) {
            call.cancel();
        }
        call.J0(new a(fVar));
    }

    @Override // vv.d
    /* renamed from: a */
    public s mo1234clone() {
        return new s(this.f53079d, this.f53080e, this.f53081i, this.f53082o, this.f53083p);
    }

    @Override // vv.d
    public void cancel() {
        Call call;
        this.f53084q = true;
        synchronized (this) {
            call = this.f53085r;
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
                    return z.j(this.f53083p.a(bVar), c10);
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
