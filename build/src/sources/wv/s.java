package wv;

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
    private final y f54154d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f54155e;

    /* renamed from: i  reason: collision with root package name */
    private final Object[] f54156i;

    /* renamed from: o  reason: collision with root package name */
    private final Call.Factory f54157o;

    /* renamed from: p  reason: collision with root package name */
    private final h f54158p;

    /* renamed from: q  reason: collision with root package name */
    private volatile boolean f54159q;

    /* renamed from: r  reason: collision with root package name */
    private Call f54160r;

    /* renamed from: s  reason: collision with root package name */
    private Throwable f54161s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f54162t;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class a implements cu.b {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ f f54163d;

        a(f fVar) {
            this.f54163d = fVar;
        }

        private void a(Throwable th2) {
            try {
                this.f54163d.a(s.this, th2);
            } catch (Throwable th3) {
                e0.t(th3);
                th3.printStackTrace();
            }
        }

        @Override // cu.b
        public void onFailure(Call call, IOException iOException) {
            a(iOException);
        }

        @Override // cu.b
        public void onResponse(Call call, Response response) {
            try {
                try {
                    this.f54163d.b(s.this, s.this.d(response));
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
        private final ResponseBody f54165d;

        /* renamed from: e  reason: collision with root package name */
        private final BufferedSource f54166e;

        /* renamed from: i  reason: collision with root package name */
        IOException f54167i;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        class a extends ru.k {
            a(Source source) {
                super(source);
            }

            @Override // ru.k, okio.Source
            public long read(Buffer buffer, long j10) {
                try {
                    return super.read(buffer, j10);
                } catch (IOException e10) {
                    b.this.f54167i = e10;
                    throw e10;
                }
            }
        }

        b(ResponseBody responseBody) {
            this.f54165d = responseBody;
            this.f54166e = ru.x.d(new a(responseBody.source()));
        }

        @Override // okhttp3.ResponseBody, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            this.f54165d.close();
        }

        @Override // okhttp3.ResponseBody
        public long contentLength() {
            return this.f54165d.contentLength();
        }

        @Override // okhttp3.ResponseBody
        public MediaType contentType() {
            return this.f54165d.contentType();
        }

        void g() {
            IOException iOException = this.f54167i;
            if (iOException == null) {
                return;
            }
            throw iOException;
        }

        @Override // okhttp3.ResponseBody
        public BufferedSource source() {
            return this.f54166e;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends ResponseBody {

        /* renamed from: d  reason: collision with root package name */
        private final MediaType f54169d;

        /* renamed from: e  reason: collision with root package name */
        private final long f54170e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(MediaType mediaType, long j10) {
            this.f54169d = mediaType;
            this.f54170e = j10;
        }

        @Override // okhttp3.ResponseBody
        public long contentLength() {
            return this.f54170e;
        }

        @Override // okhttp3.ResponseBody
        public MediaType contentType() {
            return this.f54169d;
        }

        @Override // okhttp3.ResponseBody
        public BufferedSource source() {
            throw new IllegalStateException("Cannot read raw response body of a converted body.");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public s(y yVar, Object obj, Object[] objArr, Call.Factory factory, h hVar) {
        this.f54154d = yVar;
        this.f54155e = obj;
        this.f54156i = objArr;
        this.f54157o = factory;
        this.f54158p = hVar;
    }

    private Call b() {
        Call a10 = this.f54157o.a(this.f54154d.a(this.f54155e, this.f54156i));
        if (a10 != null) {
            return a10;
        }
        throw new NullPointerException("Call.Factory returned null.");
    }

    private Call c() {
        Call call = this.f54160r;
        if (call != null) {
            return call;
        }
        Throwable th2 = this.f54161s;
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
            this.f54160r = b10;
            return b10;
        } catch (IOException | Error | RuntimeException e10) {
            e0.t(e10);
            this.f54161s = e10;
            throw e10;
        }
    }

    @Override // wv.d
    public boolean C() {
        boolean z10 = true;
        if (this.f54159q) {
            return true;
        }
        synchronized (this) {
            try {
                Call call = this.f54160r;
                if (call == null || !call.C()) {
                    z10 = false;
                }
            } finally {
            }
        }
        return z10;
    }

    @Override // wv.d
    public void C0(f fVar) {
        Call call;
        Throwable th2;
        Objects.requireNonNull(fVar, "callback == null");
        synchronized (this) {
            try {
                if (!this.f54162t) {
                    this.f54162t = true;
                    call = this.f54160r;
                    th2 = this.f54161s;
                    if (call == null && th2 == null) {
                        Call b10 = b();
                        this.f54160r = b10;
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
        if (this.f54159q) {
            call.cancel();
        }
        call.J0(new a(fVar));
    }

    @Override // wv.d
    /* renamed from: a */
    public s mo1234clone() {
        return new s(this.f54154d, this.f54155e, this.f54156i, this.f54157o, this.f54158p);
    }

    @Override // wv.d
    public void cancel() {
        Call call;
        this.f54159q = true;
        synchronized (this) {
            call = this.f54160r;
        }
        if (call != null) {
            call.cancel();
        }
    }

    z d(Response response) {
        ResponseBody n10 = response.n();
        Response c10 = response.J0().b(new c(n10.contentType(), n10.contentLength())).c();
        int z10 = c10.z();
        if (z10 >= 200 && z10 < 300) {
            if (z10 != 204 && z10 != 205) {
                b bVar = new b(n10);
                try {
                    return z.j(this.f54158p.a(bVar), c10);
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

    @Override // wv.d
    public synchronized Request g() {
        try {
        } catch (IOException e10) {
            throw new RuntimeException("Unable to create request.", e10);
        }
        return c().g();
    }
}
