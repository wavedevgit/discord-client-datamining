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
    private final y f31375d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f31376e;

    /* renamed from: i  reason: collision with root package name */
    private final Object[] f31377i;

    /* renamed from: o  reason: collision with root package name */
    private final Call.Factory f31378o;

    /* renamed from: p  reason: collision with root package name */
    private final h f31379p;

    /* renamed from: q  reason: collision with root package name */
    private volatile boolean f31380q;

    /* renamed from: r  reason: collision with root package name */
    private Call f31381r;

    /* renamed from: s  reason: collision with root package name */
    private Throwable f31382s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f31383t;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class a implements tt.b {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ f f31384d;

        a(f fVar) {
            this.f31384d = fVar;
        }

        private void a(Throwable th2) {
            try {
                this.f31384d.a(s.this, th2);
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
                    this.f31384d.b(s.this, s.this.d(response));
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
        private final ResponseBody f31386d;

        /* renamed from: e  reason: collision with root package name */
        private final BufferedSource f31387e;

        /* renamed from: i  reason: collision with root package name */
        IOException f31388i;

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
                    b.this.f31388i = e10;
                    throw e10;
                }
            }
        }

        b(ResponseBody responseBody) {
            this.f31386d = responseBody;
            this.f31387e = iu.x.d(new a(responseBody.source()));
        }

        @Override // okhttp3.ResponseBody, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            this.f31386d.close();
        }

        @Override // okhttp3.ResponseBody
        public long contentLength() {
            return this.f31386d.contentLength();
        }

        @Override // okhttp3.ResponseBody
        public MediaType contentType() {
            return this.f31386d.contentType();
        }

        void h() {
            IOException iOException = this.f31388i;
            if (iOException == null) {
                return;
            }
            throw iOException;
        }

        @Override // okhttp3.ResponseBody
        public BufferedSource source() {
            return this.f31387e;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends ResponseBody {

        /* renamed from: d  reason: collision with root package name */
        private final MediaType f31390d;

        /* renamed from: e  reason: collision with root package name */
        private final long f31391e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(MediaType mediaType, long j10) {
            this.f31390d = mediaType;
            this.f31391e = j10;
        }

        @Override // okhttp3.ResponseBody
        public long contentLength() {
            return this.f31391e;
        }

        @Override // okhttp3.ResponseBody
        public MediaType contentType() {
            return this.f31390d;
        }

        @Override // okhttp3.ResponseBody
        public BufferedSource source() {
            throw new IllegalStateException("Cannot read raw response body of a converted body.");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public s(y yVar, Object obj, Object[] objArr, Call.Factory factory, h hVar) {
        this.f31375d = yVar;
        this.f31376e = obj;
        this.f31377i = objArr;
        this.f31378o = factory;
        this.f31379p = hVar;
    }

    private Call b() {
        Call a10 = this.f31378o.a(this.f31375d.a(this.f31376e, this.f31377i));
        if (a10 != null) {
            return a10;
        }
        throw new NullPointerException("Call.Factory returned null.");
    }

    private Call c() {
        Call call = this.f31381r;
        if (call != null) {
            return call;
        }
        Throwable th2 = this.f31382s;
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
            this.f31381r = b10;
            return b10;
        } catch (IOException | Error | RuntimeException e10) {
            e0.t(e10);
            this.f31382s = e10;
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
                if (!this.f31383t) {
                    this.f31383t = true;
                    call = this.f31381r;
                    th2 = this.f31382s;
                    if (call == null && th2 == null) {
                        Call b10 = b();
                        this.f31381r = b10;
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
        if (this.f31380q) {
            call.cancel();
        }
        call.C0(new a(fVar));
    }

    @Override // iv.d
    /* renamed from: a */
    public s m1191clone() {
        return new s(this.f31375d, this.f31376e, this.f31377i, this.f31378o, this.f31379p);
    }

    @Override // iv.d
    public void cancel() {
        Call call;
        this.f31380q = true;
        synchronized (this) {
            call = this.f31381r;
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
                    return z.j(this.f31379p.a(bVar), c10);
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
        if (this.f31380q) {
            return true;
        }
        synchronized (this) {
            try {
                Call call = this.f31381r;
                if (call == null || !call.x()) {
                    z10 = false;
                }
            } finally {
            }
        }
        return z10;
    }
}
