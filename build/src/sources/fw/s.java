package fw;

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
    private final y f24480d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f24481e;

    /* renamed from: i  reason: collision with root package name */
    private final Object[] f24482i;

    /* renamed from: o  reason: collision with root package name */
    private final Call.Factory f24483o;

    /* renamed from: p  reason: collision with root package name */
    private final h f24484p;

    /* renamed from: q  reason: collision with root package name */
    private volatile boolean f24485q;

    /* renamed from: r  reason: collision with root package name */
    private Call f24486r;

    /* renamed from: s  reason: collision with root package name */
    private Throwable f24487s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f24488t;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class a implements lu.b {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ f f24489d;

        a(f fVar) {
            this.f24489d = fVar;
        }

        private void a(Throwable th2) {
            try {
                this.f24489d.a(s.this, th2);
            } catch (Throwable th3) {
                e0.t(th3);
                th3.printStackTrace();
            }
        }

        @Override // lu.b
        public void onFailure(Call call, IOException iOException) {
            a(iOException);
        }

        @Override // lu.b
        public void onResponse(Call call, Response response) {
            try {
                try {
                    this.f24489d.b(s.this, s.this.d(response));
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
        private final ResponseBody f24491d;

        /* renamed from: e  reason: collision with root package name */
        private final BufferedSource f24492e;

        /* renamed from: i  reason: collision with root package name */
        IOException f24493i;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        class a extends av.k {
            a(Source source) {
                super(source);
            }

            @Override // av.k, okio.Source
            public long read(Buffer buffer, long j10) {
                try {
                    return super.read(buffer, j10);
                } catch (IOException e10) {
                    b.this.f24493i = e10;
                    throw e10;
                }
            }
        }

        b(ResponseBody responseBody) {
            this.f24491d = responseBody;
            this.f24492e = av.x.d(new a(responseBody.source()));
        }

        @Override // okhttp3.ResponseBody, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            this.f24491d.close();
        }

        @Override // okhttp3.ResponseBody
        public long contentLength() {
            return this.f24491d.contentLength();
        }

        @Override // okhttp3.ResponseBody
        public MediaType contentType() {
            return this.f24491d.contentType();
        }

        void h() {
            IOException iOException = this.f24493i;
            if (iOException == null) {
                return;
            }
            throw iOException;
        }

        @Override // okhttp3.ResponseBody
        public BufferedSource source() {
            return this.f24492e;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends ResponseBody {

        /* renamed from: d  reason: collision with root package name */
        private final MediaType f24495d;

        /* renamed from: e  reason: collision with root package name */
        private final long f24496e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(MediaType mediaType, long j10) {
            this.f24495d = mediaType;
            this.f24496e = j10;
        }

        @Override // okhttp3.ResponseBody
        public long contentLength() {
            return this.f24496e;
        }

        @Override // okhttp3.ResponseBody
        public MediaType contentType() {
            return this.f24495d;
        }

        @Override // okhttp3.ResponseBody
        public BufferedSource source() {
            throw new IllegalStateException("Cannot read raw response body of a converted body.");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public s(y yVar, Object obj, Object[] objArr, Call.Factory factory, h hVar) {
        this.f24480d = yVar;
        this.f24481e = obj;
        this.f24482i = objArr;
        this.f24483o = factory;
        this.f24484p = hVar;
    }

    private Call b() {
        Call a10 = this.f24483o.a(this.f24480d.a(this.f24481e, this.f24482i));
        if (a10 != null) {
            return a10;
        }
        throw new NullPointerException("Call.Factory returned null.");
    }

    private Call c() {
        Call call = this.f24486r;
        if (call != null) {
            return call;
        }
        Throwable th2 = this.f24487s;
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
            this.f24486r = b10;
            return b10;
        } catch (IOException | Error | RuntimeException e10) {
            e0.t(e10);
            this.f24487s = e10;
            throw e10;
        }
    }

    @Override // fw.d
    public boolean C() {
        boolean z10 = true;
        if (this.f24485q) {
            return true;
        }
        synchronized (this) {
            try {
                Call call = this.f24486r;
                if (call == null || !call.C()) {
                    z10 = false;
                }
            } finally {
            }
        }
        return z10;
    }

    @Override // fw.d
    public void P1(f fVar) {
        Call call;
        Throwable th2;
        Objects.requireNonNull(fVar, "callback == null");
        synchronized (this) {
            try {
                if (!this.f24488t) {
                    this.f24488t = true;
                    call = this.f24486r;
                    th2 = this.f24487s;
                    if (call == null && th2 == null) {
                        Call b10 = b();
                        this.f24486r = b10;
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
        if (this.f24485q) {
            call.cancel();
        }
        call.b1(new a(fVar));
    }

    @Override // fw.d
    /* renamed from: a */
    public s m1171clone() {
        return new s(this.f24480d, this.f24481e, this.f24482i, this.f24483o, this.f24484p);
    }

    @Override // fw.d
    public void cancel() {
        Call call;
        this.f24485q = true;
        synchronized (this) {
            call = this.f24486r;
        }
        if (call != null) {
            call.cancel();
        }
    }

    z d(Response response) {
        ResponseBody n10 = response.n();
        Response c10 = response.G0().b(new c(n10.contentType(), n10.contentLength())).c();
        int z10 = c10.z();
        if (z10 >= 200 && z10 < 300) {
            if (z10 != 204 && z10 != 205) {
                b bVar = new b(n10);
                try {
                    return z.j(this.f24484p.a(bVar), c10);
                } catch (RuntimeException e10) {
                    bVar.h();
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

    @Override // fw.d
    public synchronized Request i() {
        try {
        } catch (IOException e10) {
            throw new RuntimeException("Unable to create request.", e10);
        }
        return c().i();
    }
}
