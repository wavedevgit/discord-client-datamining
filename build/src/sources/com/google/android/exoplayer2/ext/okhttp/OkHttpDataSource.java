package com.google.android.exoplayer2.ext.okhttp;

import android.net.Uri;
import androidx.recyclerview.widget.RecyclerView;
import bu.b;
import com.facebook.react.animated.InterpolationAnimatedNode;
import com.google.android.exoplayer2.upstream.h;
import com.google.common.util.concurrent.SettableFuture;
import java.io.IOException;
import java.io.InputStream;
import java.io.InterruptedIOException;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ExecutionException;
import lc.u;
import le.c0;
import le.f;
import le.m;
import le.t;
import mi.n;
import ne.w0;
import okhttp3.CacheControl;
import okhttp3.Call;
import okhttp3.HttpUrl;
import okhttp3.MediaType;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class OkHttpDataSource extends f implements h {

    /* renamed from: e  reason: collision with root package name */
    private final Call.Factory f12430e;

    /* renamed from: f  reason: collision with root package name */
    private final h.g f12431f;

    /* renamed from: g  reason: collision with root package name */
    private final String f12432g;

    /* renamed from: h  reason: collision with root package name */
    private final CacheControl f12433h;

    /* renamed from: i  reason: collision with root package name */
    private final h.g f12434i;

    /* renamed from: j  reason: collision with root package name */
    private n f12435j;

    /* renamed from: k  reason: collision with root package name */
    private com.google.android.exoplayer2.upstream.a f12436k;

    /* renamed from: l  reason: collision with root package name */
    private Response f12437l;

    /* renamed from: m  reason: collision with root package name */
    private InputStream f12438m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f12439n;

    /* renamed from: o  reason: collision with root package name */
    private long f12440o;

    /* renamed from: p  reason: collision with root package name */
    private long f12441p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Factory implements h.c {

        /* renamed from: a  reason: collision with root package name */
        private final h.g f12442a = new h.g();

        /* renamed from: b  reason: collision with root package name */
        private final Call.Factory f12443b;

        /* renamed from: c  reason: collision with root package name */
        private String f12444c;

        /* renamed from: d  reason: collision with root package name */
        private c0 f12445d;

        /* renamed from: e  reason: collision with root package name */
        private CacheControl f12446e;

        /* renamed from: f  reason: collision with root package name */
        private n f12447f;

        public Factory(Call.Factory factory) {
            this.f12443b = factory;
        }

        @Override // com.google.android.exoplayer2.upstream.h.c, com.google.android.exoplayer2.upstream.DataSource.Factory
        /* renamed from: a */
        public OkHttpDataSource createDataSource() {
            OkHttpDataSource okHttpDataSource = new OkHttpDataSource(this.f12443b, this.f12444c, this.f12446e, this.f12442a, this.f12447f, null);
            c0 c0Var = this.f12445d;
            if (c0Var != null) {
                okHttpDataSource.j(c0Var);
            }
            return okHttpDataSource;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a implements b {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ SettableFuture f12448d;

        a(SettableFuture settableFuture) {
            this.f12448d = settableFuture;
        }

        @Override // bu.b
        public void onFailure(Call call, IOException iOException) {
            this.f12448d.y(iOException);
        }

        @Override // bu.b
        public void onResponse(Call call, Response response) {
            this.f12448d.x(response);
        }
    }

    static {
        u.a("goog.exo.okhttp");
    }

    /* synthetic */ OkHttpDataSource(Call.Factory factory, String str, CacheControl cacheControl, h.g gVar, n nVar, a aVar) {
        this(factory, str, cacheControl, gVar, nVar);
    }

    private void s() {
        Response response = this.f12437l;
        if (response != null) {
            ((ResponseBody) ne.a.e(response.n())).close();
            this.f12437l = null;
        }
        this.f12438m = null;
    }

    private Response t(Call call) {
        SettableFuture z10 = SettableFuture.z();
        call.J0(new a(z10));
        try {
            return (Response) z10.get();
        } catch (InterruptedException unused) {
            call.cancel();
            throw new InterruptedIOException();
        } catch (ExecutionException e10) {
            throw new IOException(e10);
        }
    }

    private Request u(com.google.android.exoplayer2.upstream.a aVar) {
        long j10 = aVar.f13271g;
        long j11 = aVar.f13272h;
        HttpUrl m10 = HttpUrl.m(aVar.f13265a.toString());
        if (m10 != null) {
            Request.Builder m11 = new Request.Builder().m(m10);
            CacheControl cacheControl = this.f12433h;
            if (cacheControl != null) {
                m11.c(cacheControl);
            }
            HashMap hashMap = new HashMap();
            h.g gVar = this.f12434i;
            if (gVar != null) {
                hashMap.putAll(gVar.b());
            }
            hashMap.putAll(this.f12431f.b());
            hashMap.putAll(aVar.f13269e);
            for (Map.Entry entry : hashMap.entrySet()) {
                m11.e((String) entry.getKey(), (String) entry.getValue());
            }
            String a10 = t.a(j10, j11);
            if (a10 != null) {
                m11.a("Range", a10);
            }
            String str = this.f12432g;
            if (str != null) {
                m11.a("User-Agent", str);
            }
            if (!aVar.d(1)) {
                m11.a("Accept-Encoding", InterpolationAnimatedNode.EXTRAPOLATE_TYPE_IDENTITY);
            }
            byte[] bArr = aVar.f13268d;
            RequestBody requestBody = null;
            if (bArr != null) {
                requestBody = RequestBody.create((MediaType) null, bArr);
            } else if (aVar.f13267c == 2) {
                requestBody = RequestBody.create((MediaType) null, w0.f39065f);
            }
            m11.g(aVar.b(), requestBody);
            return m11.b();
        }
        throw new h.d("Malformed URL", aVar, 1004, 1);
    }

    private int v(byte[] bArr, int i10, int i11) {
        if (i11 == 0) {
            return 0;
        }
        long j10 = this.f12440o;
        if (j10 != -1) {
            long j11 = j10 - this.f12441p;
            if (j11 == 0) {
                return -1;
            }
            i11 = (int) Math.min(i11, j11);
        }
        int read = ((InputStream) w0.j(this.f12438m)).read(bArr, i10, i11);
        if (read == -1) {
            return -1;
        }
        this.f12441p += read;
        o(read);
        return read;
    }

    private void w(long j10, com.google.android.exoplayer2.upstream.a aVar) {
        if (j10 != 0) {
            byte[] bArr = new byte[RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT];
            while (j10 > 0) {
                try {
                    int read = ((InputStream) w0.j(this.f12438m)).read(bArr, 0, (int) Math.min(j10, (long) RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT));
                    if (!Thread.currentThread().isInterrupted()) {
                        if (read != -1) {
                            j10 -= read;
                            o(read);
                        } else {
                            throw new h.d(aVar, 2008, 1);
                        }
                    } else {
                        throw new InterruptedIOException();
                    }
                } catch (IOException e10) {
                    if (e10 instanceof h.d) {
                        throw ((h.d) e10);
                    }
                    throw new h.d(aVar, 2000, 1);
                }
            }
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        String str;
        byte[] bArr;
        m mVar;
        this.f12436k = aVar;
        long j10 = 0;
        this.f12441p = 0L;
        this.f12440o = 0L;
        q(aVar);
        try {
            Response t10 = t(this.f12430e.a(u(aVar)));
            this.f12437l = t10;
            ResponseBody responseBody = (ResponseBody) ne.a.e(t10.n());
            this.f12438m = responseBody.byteStream();
            int z10 = t10.z();
            long j11 = -1;
            if (!t10.isSuccessful()) {
                if (z10 == 416) {
                    if (aVar.f13271g == t.c(t10.E0().c("Content-Range"))) {
                        this.f12439n = true;
                        r(aVar);
                        long j12 = aVar.f13272h;
                        if (j12 == -1) {
                            return 0L;
                        }
                        return j12;
                    }
                }
                try {
                    bArr = w0.i1((InputStream) ne.a.e(this.f12438m));
                } catch (IOException unused) {
                    bArr = w0.f39065f;
                }
                byte[] bArr2 = bArr;
                Map i10 = t10.E0().i();
                s();
                if (z10 == 416) {
                    mVar = new m(2008);
                } else {
                    mVar = null;
                }
                throw new h.f(z10, t10.I0(), mVar, i10, aVar, bArr2);
            }
            MediaType contentType = responseBody.contentType();
            if (contentType != null) {
                str = contentType.toString();
            } else {
                str = "";
            }
            n nVar = this.f12435j;
            if (nVar != null && !nVar.apply(str)) {
                s();
                throw new h.e(str, aVar);
            }
            if (z10 == 200) {
                long j13 = aVar.f13271g;
                if (j13 != 0) {
                    j10 = j13;
                }
            }
            long j14 = aVar.f13272h;
            if (j14 != -1) {
                this.f12440o = j14;
            } else {
                long contentLength = responseBody.contentLength();
                if (contentLength != -1) {
                    j11 = contentLength - j10;
                }
                this.f12440o = j11;
            }
            this.f12439n = true;
            r(aVar);
            try {
                w(j10, aVar);
                return this.f12440o;
            } catch (h.d e10) {
                s();
                throw e10;
            }
        } catch (IOException e11) {
            throw h.d.c(e11, aVar, 1);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void close() {
        if (this.f12439n) {
            this.f12439n = false;
            p();
            s();
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Map d() {
        Response response = this.f12437l;
        if (response == null) {
            return Collections.EMPTY_MAP;
        }
        return response.E0().i();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        Response response = this.f12437l;
        if (response == null) {
            return null;
        }
        return Uri.parse(response.Y0().n().toString());
    }

    @Override // le.j
    public int read(byte[] bArr, int i10, int i11) {
        try {
            return v(bArr, i10, i11);
        } catch (IOException e10) {
            throw h.d.c(e10, (com.google.android.exoplayer2.upstream.a) w0.j(this.f12436k), 2);
        }
    }

    public OkHttpDataSource(Call.Factory factory, String str, CacheControl cacheControl, h.g gVar) {
        this(factory, str, cacheControl, gVar, null);
    }

    private OkHttpDataSource(Call.Factory factory, String str, CacheControl cacheControl, h.g gVar, n nVar) {
        super(true);
        this.f12430e = (Call.Factory) ne.a.e(factory);
        this.f12432g = str;
        this.f12433h = cacheControl;
        this.f12434i = gVar;
        this.f12435j = nVar;
        this.f12431f = new h.g();
    }
}
