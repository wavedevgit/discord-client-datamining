package lv;

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
    private final y f37426d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f37427e;

    /* renamed from: i  reason: collision with root package name */
    private final Object[] f37428i;

    /* renamed from: o  reason: collision with root package name */
    private final Call.Factory f37429o;

    /* renamed from: p  reason: collision with root package name */
    private final h f37430p;

    /* renamed from: q  reason: collision with root package name */
    private volatile boolean f37431q;

    /* renamed from: r  reason: collision with root package name */
    private Call f37432r;

    /* renamed from: s  reason: collision with root package name */
    private Throwable f37433s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f37434t;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class a implements wt.b {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ f f37435d;

        a(f fVar) {
            this.f37435d = fVar;
        }

        private void a(Throwable th2) {
            try {
                this.f37435d.b(s.this, th2);
            } catch (Throwable th3) {
                e0.t(th3);
                th3.printStackTrace();
            }
        }

        @Override // wt.b
        public void onFailure(Call call, IOException iOException) {
            a(iOException);
        }

        @Override // wt.b
        public void onResponse(Call call, Response response) {
            try {
                try {
                    this.f37435d.a(s.this, s.this.d(response));
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
        private final ResponseBody f37437d;

        /* renamed from: e  reason: collision with root package name */
        private final BufferedSource f37438e;

        /* renamed from: i  reason: collision with root package name */
        IOException f37439i;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        class a extends lu.k {
            a(Source source) {
                super(source);
            }

            @Override // lu.k, okio.Source
            public long read(Buffer buffer, long j10) {
                try {
                    return super.read(buffer, j10);
                } catch (IOException e10) {
                    b.this.f37439i = e10;
                    throw e10;
                }
            }
        }

        b(ResponseBody responseBody) {
            this.f37437d = responseBody;
            this.f37438e = lu.x.d(new a(responseBody.source()));
        }

        @Override // okhttp3.ResponseBody, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            this.f37437d.close();
        }

        @Override // okhttp3.ResponseBody
        public long contentLength() {
            return this.f37437d.contentLength();
        }

        @Override // okhttp3.ResponseBody
        public MediaType contentType() {
            return this.f37437d.contentType();
        }

        void h() {
            IOException iOException = this.f37439i;
            if (iOException == null) {
                return;
            }
            throw iOException;
        }

        @Override // okhttp3.ResponseBody
        public BufferedSource source() {
            return this.f37438e;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends ResponseBody {

        /* renamed from: d  reason: collision with root package name */
        private final MediaType f37441d;

        /* renamed from: e  reason: collision with root package name */
        private final long f37442e;

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(MediaType mediaType, long j10) {
            this.f37441d = mediaType;
            this.f37442e = j10;
        }

        @Override // okhttp3.ResponseBody
        public long contentLength() {
            return this.f37442e;
        }

        @Override // okhttp3.ResponseBody
        public MediaType contentType() {
            return this.f37441d;
        }

        @Override // okhttp3.ResponseBody
        public BufferedSource source() {
            throw new IllegalStateException("Cannot read raw response body of a converted body.");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public s(y yVar, Object obj, Object[] objArr, Call.Factory factory, h hVar) {
        this.f37426d = yVar;
        this.f37427e = obj;
        this.f37428i = objArr;
        this.f37429o = factory;
        this.f37430p = hVar;
    }

    private Call b() {
        Call a10 = this.f37429o.a(this.f37426d.a(this.f37427e, this.f37428i));
        if (a10 != null) {
            return a10;
        }
        throw new NullPointerException("Call.Factory returned null.");
    }

    private Call c() {
        Call call = this.f37432r;
        if (call != null) {
            return call;
        }
        Throwable th2 = this.f37433s;
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
            this.f37432r = b10;
            return b10;
        } catch (IOException | Error | RuntimeException e10) {
            e0.t(e10);
            this.f37433s = e10;
            throw e10;
        }
    }

    @Override // lv.d
    public void I0(f fVar) {
        Call call;
        Throwable th2;
        Objects.requireNonNull(fVar, "callback == null");
        synchronized (this) {
            try {
                if (!this.f37434t) {
                    this.f37434t = true;
                    call = this.f37432r;
                    th2 = this.f37433s;
                    if (call == null && th2 == null) {
                        Call b10 = b();
                        this.f37432r = b10;
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
        if (this.f37431q) {
            call.cancel();
        }
        call.M0(new a(fVar));
    }

    @Override // lv.d
    /* renamed from: a */
    public s mo1203clone() {
        return new s(this.f37426d, this.f37427e, this.f37428i, this.f37429o, this.f37430p);
    }

    @Override // lv.d
    public void cancel() {
        Call call;
        this.f37431q = true;
        synchronized (this) {
            call = this.f37432r;
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
                    return z.j(this.f37430p.a(bVar), c10);
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

    @Override // lv.d
    public synchronized Request h() {
        try {
        } catch (IOException e10) {
            throw new RuntimeException("Unable to create request.", e10);
        }
        return c().h();
    }

    @Override // lv.d
    public boolean x() {
        boolean z10 = true;
        if (this.f37431q) {
            return true;
        }
        synchronized (this) {
            try {
                Call call = this.f37432r;
                if (call == null || !call.x()) {
                    z10 = false;
                }
            } finally {
            }
        }
        return z10;
    }
}
