package ov;

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
    private final y f44634d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f44635e;

    /* renamed from: i  reason: collision with root package name */
    private final Object[] f44636i;

    /* renamed from: o  reason: collision with root package name */
    private final Call.Factory f44637o;

    /* renamed from: p  reason: collision with root package name */
    private final h f44638p;

    /* renamed from: q  reason: collision with root package name */
    private volatile boolean f44639q;

    /* renamed from: r  reason: collision with root package name */
    private Call f44640r;

    /* renamed from: s  reason: collision with root package name */
    private Throwable f44641s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f44642t;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class a implements zt.b {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ f f44643d;

        a(f fVar) {
            this.f44643d = fVar;
        }

        private void a(Throwable th2) {
            try {
                this.f44643d.b(s.this, th2);
            } catch (Throwable th3) {
                e0.t(th3);
                th3.printStackTrace();
            }
        }

        @Override // zt.b
        public void onFailure(Call call, IOException iOException) {
            a(iOException);
        }

        @Override // zt.b
        public void onResponse(Call call, Response response) {
            try {
                try {
                    this.f44643d.a(s.this, s.this.d(response));
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
        private final ResponseBody f44645d;

        /* renamed from: e  reason: collision with root package name */
        private final BufferedSource f44646e;

        /* renamed from: i  reason: collision with root package name */
        IOException f44647i;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        class a extends ou.k {
            a(Source source) {
                super(source);
            }

            @Override // ou.k, okio.Source
            public long read(Buffer buffer, long j10) {
                try {
                    return super.read(buffer, j10);
                } catch (IOException e10) {
                    b.this.f44647i = e10;
                    throw e10;
                }
            }
        }

        b(ResponseBody responseBody) {
            this.f44645d = responseBody;
            this.f44646e = ou.x.d(new a(responseBody.source()));
        }

        @Override // okhttp3.ResponseBody, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            this.f44645d.close();
        }

        @Override // okhttp3.ResponseBody
        public long contentLength() {
            return this.f44645d.contentLength();
        }

        @Override // okhttp3.ResponseBody
        public MediaType contentType() {
            return this.f44645d.contentType();
        }

        void h() {
            IOException iOException = this.f44647i;
            if (iOException == null) {
                return;
            }
            throw iOException;
        }

        @Override // okhttp3.ResponseBody
        public BufferedSource source() {
            return this.f44646e;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends ResponseBody {

        /* renamed from: d  reason: collision with root package name */
        private final MediaType f44649d;

        /* renamed from: e  reason: collision with root package name */
        private final long f44650e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(MediaType mediaType, long j10) {
            this.f44649d = mediaType;
            this.f44650e = j10;
        }

        @Override // okhttp3.ResponseBody
        public long contentLength() {
            return this.f44650e;
        }

        @Override // okhttp3.ResponseBody
        public MediaType contentType() {
            return this.f44649d;
        }

        @Override // okhttp3.ResponseBody
        public BufferedSource source() {
            throw new IllegalStateException("Cannot read raw response body of a converted body.");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public s(y yVar, Object obj, Object[] objArr, Call.Factory factory, h hVar) {
        this.f44634d = yVar;
        this.f44635e = obj;
        this.f44636i = objArr;
        this.f44637o = factory;
        this.f44638p = hVar;
    }

    private Call b() {
        Call a10 = this.f44637o.a(this.f44634d.a(this.f44635e, this.f44636i));
        if (a10 != null) {
            return a10;
        }
        throw new NullPointerException("Call.Factory returned null.");
    }

    private Call c() {
        Call call = this.f44640r;
        if (call != null) {
            return call;
        }
        Throwable th2 = this.f44641s;
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
            this.f44640r = b10;
            return b10;
        } catch (IOException | Error | RuntimeException e10) {
            e0.t(e10);
            this.f44641s = e10;
            throw e10;
        }
    }

    @Override // ov.d
    public void C0(f fVar) {
        Call call;
        Throwable th2;
        Objects.requireNonNull(fVar, "callback == null");
        synchronized (this) {
            try {
                if (!this.f44642t) {
                    this.f44642t = true;
                    call = this.f44640r;
                    th2 = this.f44641s;
                    if (call == null && th2 == null) {
                        Call b10 = b();
                        this.f44640r = b10;
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
        if (this.f44639q) {
            call.cancel();
        }
        call.V(new a(fVar));
    }

    @Override // ov.d
    /* renamed from: a */
    public s mo1221clone() {
        return new s(this.f44634d, this.f44635e, this.f44636i, this.f44637o, this.f44638p);
    }

    @Override // ov.d
    public void cancel() {
        Call call;
        this.f44639q = true;
        synchronized (this) {
            call = this.f44640r;
        }
        if (call != null) {
            call.cancel();
        }
    }

    z d(Response response) {
        ResponseBody o10 = response.o();
        Response c10 = response.N0().b(new c(o10.contentType(), o10.contentLength())).c();
        int L = c10.L();
        if (L >= 200 && L < 300) {
            if (L != 204 && L != 205) {
                b bVar = new b(o10);
                try {
                    return z.j(this.f44638p.a(bVar), c10);
                } catch (RuntimeException e10) {
                    bVar.h();
                    throw e10;
                }
            }
            o10.close();
            return z.j(null, c10);
        }
        try {
            return z.d(e0.a(o10), c10);
        } finally {
            o10.close();
        }
    }

    @Override // ov.d
    public synchronized Request h() {
        try {
        } catch (IOException e10) {
            throw new RuntimeException("Unable to create request.", e10);
        }
        return c().h();
    }

    @Override // ov.d
    public boolean y() {
        boolean z10 = true;
        if (this.f44639q) {
            return true;
        }
        synchronized (this) {
            try {
                Call call = this.f44640r;
                if (call == null || !call.y()) {
                    z10 = false;
                }
            } finally {
            }
        }
        return z10;
    }
}
