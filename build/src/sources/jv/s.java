package jv;

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
    private final y f32488d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f32489e;

    /* renamed from: i  reason: collision with root package name */
    private final Object[] f32490i;

    /* renamed from: o  reason: collision with root package name */
    private final Call.Factory f32491o;

    /* renamed from: p  reason: collision with root package name */
    private final h f32492p;

    /* renamed from: q  reason: collision with root package name */
    private volatile boolean f32493q;

    /* renamed from: r  reason: collision with root package name */
    private Call f32494r;

    /* renamed from: s  reason: collision with root package name */
    private Throwable f32495s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f32496t;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class a implements ut.b {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ f f32497d;

        a(f fVar) {
            this.f32497d = fVar;
        }

        private void a(Throwable th2) {
            try {
                this.f32497d.b(s.this, th2);
            } catch (Throwable th3) {
                e0.t(th3);
                th3.printStackTrace();
            }
        }

        @Override // ut.b
        public void onFailure(Call call, IOException iOException) {
            a(iOException);
        }

        @Override // ut.b
        public void onResponse(Call call, Response response) {
            try {
                try {
                    this.f32497d.a(s.this, s.this.d(response));
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
        private final ResponseBody f32499d;

        /* renamed from: e  reason: collision with root package name */
        private final BufferedSource f32500e;

        /* renamed from: i  reason: collision with root package name */
        IOException f32501i;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        class a extends ju.k {
            a(Source source) {
                super(source);
            }

            @Override // ju.k, okio.Source
            public long read(Buffer buffer, long j10) {
                try {
                    return super.read(buffer, j10);
                } catch (IOException e10) {
                    b.this.f32501i = e10;
                    throw e10;
                }
            }
        }

        b(ResponseBody responseBody) {
            this.f32499d = responseBody;
            this.f32500e = ju.x.d(new a(responseBody.source()));
        }

        @Override // okhttp3.ResponseBody, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            this.f32499d.close();
        }

        @Override // okhttp3.ResponseBody
        public long contentLength() {
            return this.f32499d.contentLength();
        }

        @Override // okhttp3.ResponseBody
        public MediaType contentType() {
            return this.f32499d.contentType();
        }

        void h() {
            IOException iOException = this.f32501i;
            if (iOException == null) {
                return;
            }
            throw iOException;
        }

        @Override // okhttp3.ResponseBody
        public BufferedSource source() {
            return this.f32500e;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends ResponseBody {

        /* renamed from: d  reason: collision with root package name */
        private final MediaType f32503d;

        /* renamed from: e  reason: collision with root package name */
        private final long f32504e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(MediaType mediaType, long j10) {
            this.f32503d = mediaType;
            this.f32504e = j10;
        }

        @Override // okhttp3.ResponseBody
        public long contentLength() {
            return this.f32504e;
        }

        @Override // okhttp3.ResponseBody
        public MediaType contentType() {
            return this.f32503d;
        }

        @Override // okhttp3.ResponseBody
        public BufferedSource source() {
            throw new IllegalStateException("Cannot read raw response body of a converted body.");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public s(y yVar, Object obj, Object[] objArr, Call.Factory factory, h hVar) {
        this.f32488d = yVar;
        this.f32489e = obj;
        this.f32490i = objArr;
        this.f32491o = factory;
        this.f32492p = hVar;
    }

    private Call b() {
        Call a10 = this.f32491o.a(this.f32488d.a(this.f32489e, this.f32490i));
        if (a10 != null) {
            return a10;
        }
        throw new NullPointerException("Call.Factory returned null.");
    }

    private Call c() {
        Call call = this.f32494r;
        if (call != null) {
            return call;
        }
        Throwable th2 = this.f32495s;
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
            this.f32494r = b10;
            return b10;
        } catch (IOException | Error | RuntimeException e10) {
            e0.t(e10);
            this.f32495s = e10;
            throw e10;
        }
    }

    @Override // jv.d
    public void E0(f fVar) {
        Call call;
        Throwable th2;
        Objects.requireNonNull(fVar, "callback == null");
        synchronized (this) {
            try {
                if (!this.f32496t) {
                    this.f32496t = true;
                    call = this.f32494r;
                    th2 = this.f32495s;
                    if (call == null && th2 == null) {
                        Call b10 = b();
                        this.f32494r = b10;
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
        if (this.f32493q) {
            call.cancel();
        }
        call.t0(new a(fVar));
    }

    @Override // jv.d
    /* renamed from: a */
    public s mo1193clone() {
        return new s(this.f32488d, this.f32489e, this.f32490i, this.f32491o, this.f32492p);
    }

    @Override // jv.d
    public void cancel() {
        Call call;
        this.f32493q = true;
        synchronized (this) {
            call = this.f32494r;
        }
        if (call != null) {
            call.cancel();
        }
    }

    z d(Response response) {
        ResponseBody x10 = response.x();
        Response c10 = response.L0().b(new c(x10.contentType(), x10.contentLength())).c();
        int L = c10.L();
        if (L >= 200 && L < 300) {
            if (L != 204 && L != 205) {
                b bVar = new b(x10);
                try {
                    return z.j(this.f32492p.a(bVar), c10);
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

    @Override // jv.d
    public synchronized Request h() {
        try {
        } catch (IOException e10) {
            throw new RuntimeException("Unable to create request.", e10);
        }
        return c().h();
    }

    @Override // jv.d
    public boolean x() {
        boolean z10 = true;
        if (this.f32493q) {
            return true;
        }
        synchronized (this) {
            try {
                Call call = this.f32494r;
                if (call == null || !call.x()) {
                    z10 = false;
                }
            } finally {
            }
        }
        return z10;
    }
}
