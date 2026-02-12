package com.google.android.exoplayer2.ext.okhttp;

import android.net.Uri;
import androidx.recyclerview.widget.RecyclerView;
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
import lu.b;
import mc.u;
import me.c0;
import me.f;
import me.m;
import me.t;
import oe.w0;
import okhttp3.CacheControl;
import okhttp3.Call;
import okhttp3.HttpUrl;
import okhttp3.MediaType;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;
import pi.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class OkHttpDataSource extends f implements h {

    /* renamed from: e  reason: collision with root package name */
    private final Call.Factory f13148e;

    /* renamed from: f  reason: collision with root package name */
    private final h.g f13149f;

    /* renamed from: g  reason: collision with root package name */
    private final String f13150g;

    /* renamed from: h  reason: collision with root package name */
    private final CacheControl f13151h;

    /* renamed from: i  reason: collision with root package name */
    private final h.g f13152i;

    /* renamed from: j  reason: collision with root package name */
    private n f13153j;

    /* renamed from: k  reason: collision with root package name */
    private com.google.android.exoplayer2.upstream.a f13154k;

    /* renamed from: l  reason: collision with root package name */
    private Response f13155l;

    /* renamed from: m  reason: collision with root package name */
    private InputStream f13156m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f13157n;

    /* renamed from: o  reason: collision with root package name */
    private long f13158o;

    /* renamed from: p  reason: collision with root package name */
    private long f13159p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Factory implements h.c {

        /* renamed from: a  reason: collision with root package name */
        private final h.g f13160a = new h.g();

        /* renamed from: b  reason: collision with root package name */
        private final Call.Factory f13161b;

        /* renamed from: c  reason: collision with root package name */
        private String f13162c;

        /* renamed from: d  reason: collision with root package name */
        private c0 f13163d;

        /* renamed from: e  reason: collision with root package name */
        private CacheControl f13164e;

        /* renamed from: f  reason: collision with root package name */
        private n f13165f;

        public Factory(Call.Factory factory) {
            this.f13161b = factory;
        }

        @Override // com.google.android.exoplayer2.upstream.h.c, com.google.android.exoplayer2.upstream.DataSource.Factory
        /* renamed from: a */
        public OkHttpDataSource createDataSource() {
            OkHttpDataSource okHttpDataSource = new OkHttpDataSource(this.f13161b, this.f13162c, this.f13164e, this.f13160a, this.f13165f, null);
            c0 c0Var = this.f13163d;
            if (c0Var != null) {
                okHttpDataSource.i(c0Var);
            }
            return okHttpDataSource;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a implements b {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ SettableFuture f13166d;

        a(SettableFuture settableFuture) {
            this.f13166d = settableFuture;
        }

        @Override // lu.b
        public void onFailure(Call call, IOException iOException) {
            this.f13166d.y(iOException);
        }

        @Override // lu.b
        public void onResponse(Call call, Response response) {
            this.f13166d.x(response);
        }
    }

    static {
        u.a("goog.exo.okhttp");
    }

    /* synthetic */ OkHttpDataSource(Call.Factory factory, String str, CacheControl cacheControl, h.g gVar, n nVar, a aVar) {
        this(factory, str, cacheControl, gVar, nVar);
    }

    private void s() {
        Response response = this.f13155l;
        if (response != null) {
            ((ResponseBody) oe.a.e(response.n())).close();
            this.f13155l = null;
        }
        this.f13156m = null;
    }

    private Response t(Call call) {
        SettableFuture z10 = SettableFuture.z();
        call.b1(new a(z10));
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
        long j10 = aVar.f13989g;
        long j11 = aVar.f13990h;
        HttpUrl m10 = HttpUrl.m(aVar.f13983a.toString());
        if (m10 != null) {
            Request.Builder m11 = new Request.Builder().m(m10);
            CacheControl cacheControl = this.f13151h;
            if (cacheControl != null) {
                m11.c(cacheControl);
            }
            HashMap hashMap = new HashMap();
            h.g gVar = this.f13152i;
            if (gVar != null) {
                hashMap.putAll(gVar.b());
            }
            hashMap.putAll(this.f13149f.b());
            hashMap.putAll(aVar.f13987e);
            for (Map.Entry entry : hashMap.entrySet()) {
                m11.e((String) entry.getKey(), (String) entry.getValue());
            }
            String a10 = t.a(j10, j11);
            if (a10 != null) {
                m11.a("Range", a10);
            }
            String str = this.f13150g;
            if (str != null) {
                m11.a("User-Agent", str);
            }
            if (!aVar.d(1)) {
                m11.a("Accept-Encoding", InterpolationAnimatedNode.EXTRAPOLATE_TYPE_IDENTITY);
            }
            byte[] bArr = aVar.f13986d;
            RequestBody requestBody = null;
            if (bArr != null) {
                requestBody = RequestBody.create((MediaType) null, bArr);
            } else if (aVar.f13985c == 2) {
                requestBody = RequestBody.create((MediaType) null, w0.f39043f);
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
        long j10 = this.f13158o;
        if (j10 != -1) {
            long j11 = j10 - this.f13159p;
            if (j11 == 0) {
                return -1;
            }
            i11 = (int) Math.min(i11, j11);
        }
        int read = ((InputStream) w0.j(this.f13156m)).read(bArr, i10, i11);
        if (read == -1) {
            return -1;
        }
        this.f13159p += read;
        o(read);
        return read;
    }

    private void w(long j10, com.google.android.exoplayer2.upstream.a aVar) {
        if (j10 != 0) {
            byte[] bArr = new byte[RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT];
            while (j10 > 0) {
                try {
                    int read = ((InputStream) w0.j(this.f13156m)).read(bArr, 0, (int) Math.min(j10, (long) RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT));
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
        this.f13154k = aVar;
        long j10 = 0;
        this.f13159p = 0L;
        this.f13158o = 0L;
        q(aVar);
        try {
            Response t10 = t(this.f13148e.a(u(aVar)));
            this.f13155l = t10;
            ResponseBody responseBody = (ResponseBody) oe.a.e(t10.n());
            this.f13156m = responseBody.byteStream();
            int z10 = t10.z();
            long j11 = -1;
            if (!t10.isSuccessful()) {
                if (z10 == 416) {
                    if (aVar.f13989g == t.c(t10.z0().c("Content-Range"))) {
                        this.f13157n = true;
                        r(aVar);
                        long j12 = aVar.f13990h;
                        if (j12 == -1) {
                            return 0L;
                        }
                        return j12;
                    }
                }
                try {
                    bArr = w0.i1((InputStream) oe.a.e(this.f13156m));
                } catch (IOException unused) {
                    bArr = w0.f39043f;
                }
                byte[] bArr2 = bArr;
                Map j13 = t10.z0().j();
                s();
                if (z10 == 416) {
                    mVar = new m(2008);
                } else {
                    mVar = null;
                }
                throw new h.f(z10, t10.E0(), mVar, j13, aVar, bArr2);
            }
            MediaType contentType = responseBody.contentType();
            if (contentType != null) {
                str = contentType.toString();
            } else {
                str = "";
            }
            n nVar = this.f13153j;
            if (nVar != null && !nVar.apply(str)) {
                s();
                throw new h.e(str, aVar);
            }
            if (z10 == 200) {
                long j14 = aVar.f13989g;
                if (j14 != 0) {
                    j10 = j14;
                }
            }
            long j15 = aVar.f13990h;
            if (j15 != -1) {
                this.f13158o = j15;
            } else {
                long contentLength = responseBody.contentLength();
                if (contentLength != -1) {
                    j11 = contentLength - j10;
                }
                this.f13158o = j11;
            }
            this.f13157n = true;
            r(aVar);
            try {
                w(j10, aVar);
                return this.f13158o;
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
        if (this.f13157n) {
            this.f13157n = false;
            p();
            s();
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Map d() {
        Response response = this.f13155l;
        if (response == null) {
            return Collections.EMPTY_MAP;
        }
        return response.z0().j();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        Response response = this.f13155l;
        if (response == null) {
            return null;
        }
        return Uri.parse(response.O0().n().toString());
    }

    @Override // me.j
    public int read(byte[] bArr, int i10, int i11) {
        try {
            return v(bArr, i10, i11);
        } catch (IOException e10) {
            throw h.d.c(e10, (com.google.android.exoplayer2.upstream.a) w0.j(this.f13154k), 2);
        }
    }

    public OkHttpDataSource(Call.Factory factory, String str, CacheControl cacheControl, h.g gVar) {
        this(factory, str, cacheControl, gVar, null);
    }

    private OkHttpDataSource(Call.Factory factory, String str, CacheControl cacheControl, h.g gVar, n nVar) {
        super(true);
        this.f13148e = (Call.Factory) oe.a.e(factory);
        this.f13150g = str;
        this.f13151h = cacheControl;
        this.f13152i = gVar;
        this.f13153j = nVar;
        this.f13149f = new h.g();
    }
}
