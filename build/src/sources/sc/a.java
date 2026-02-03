package sc;

import android.net.Uri;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.animated.InterpolationAnimatedNode;
import com.google.android.exoplayer2.upstream.g;
import com.google.common.util.concurrent.SettableFuture;
import ii.n;
import java.io.IOException;
import java.io.InputStream;
import java.io.InterruptedIOException;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ExecutionException;
import lc.u;
import le.f;
import le.m;
import le.t;
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
public class a extends f implements g {

    /* renamed from: e  reason: collision with root package name */
    private final Call.Factory f48963e;

    /* renamed from: f  reason: collision with root package name */
    private final g.C0179g f48964f;

    /* renamed from: g  reason: collision with root package name */
    private final String f48965g;

    /* renamed from: h  reason: collision with root package name */
    private final CacheControl f48966h;

    /* renamed from: i  reason: collision with root package name */
    private final g.C0179g f48967i;

    /* renamed from: j  reason: collision with root package name */
    private n f48968j;

    /* renamed from: k  reason: collision with root package name */
    private com.google.android.exoplayer2.upstream.a f48969k;

    /* renamed from: l  reason: collision with root package name */
    private Response f48970l;

    /* renamed from: m  reason: collision with root package name */
    private InputStream f48971m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f48972n;

    /* renamed from: o  reason: collision with root package name */
    private long f48973o;

    /* renamed from: p  reason: collision with root package name */
    private long f48974p;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: sc.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class C0607a implements ut.b {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ SettableFuture f48975d;

        C0607a(SettableFuture settableFuture) {
            this.f48975d = settableFuture;
        }

        @Override // ut.b
        public void onFailure(Call call, IOException iOException) {
            this.f48975d.y(iOException);
        }

        @Override // ut.b
        public void onResponse(Call call, Response response) {
            this.f48975d.x(response);
        }
    }

    static {
        u.a("goog.exo.okhttp");
    }

    public a(Call.Factory factory, String str, CacheControl cacheControl, g.C0179g c0179g) {
        this(factory, str, cacheControl, c0179g, null);
    }

    private void s() {
        Response response = this.f48970l;
        if (response != null) {
            ((ResponseBody) ne.a.e(response.x())).close();
            this.f48970l = null;
        }
        this.f48971m = null;
    }

    private Response t(Call call) {
        SettableFuture z10 = SettableFuture.z();
        call.t0(new C0607a(z10));
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
        long j10 = aVar.f13981g;
        long j11 = aVar.f13982h;
        HttpUrl m10 = HttpUrl.m(aVar.f13975a.toString());
        if (m10 != null) {
            Request.Builder m11 = new Request.Builder().m(m10);
            CacheControl cacheControl = this.f48966h;
            if (cacheControl != null) {
                m11.c(cacheControl);
            }
            HashMap hashMap = new HashMap();
            g.C0179g c0179g = this.f48967i;
            if (c0179g != null) {
                hashMap.putAll(c0179g.b());
            }
            hashMap.putAll(this.f48964f.b());
            hashMap.putAll(aVar.f13979e);
            for (Map.Entry entry : hashMap.entrySet()) {
                m11.e((String) entry.getKey(), (String) entry.getValue());
            }
            String a10 = t.a(j10, j11);
            if (a10 != null) {
                m11.a("Range", a10);
            }
            String str = this.f48965g;
            if (str != null) {
                m11.a("User-Agent", str);
            }
            if (!aVar.d(1)) {
                m11.a("Accept-Encoding", InterpolationAnimatedNode.EXTRAPOLATE_TYPE_IDENTITY);
            }
            byte[] bArr = aVar.f13978d;
            RequestBody requestBody = null;
            if (bArr != null) {
                requestBody = RequestBody.create((MediaType) null, bArr);
            } else if (aVar.f13977c == 2) {
                requestBody = RequestBody.create((MediaType) null, w0.f40163f);
            }
            m11.g(aVar.b(), requestBody);
            return m11.b();
        }
        throw new g.d("Malformed URL", aVar, 1004, 1);
    }

    private int v(byte[] bArr, int i10, int i11) {
        if (i11 == 0) {
            return 0;
        }
        long j10 = this.f48973o;
        if (j10 != -1) {
            long j11 = j10 - this.f48974p;
            if (j11 == 0) {
                return -1;
            }
            i11 = (int) Math.min(i11, j11);
        }
        int read = ((InputStream) w0.j(this.f48971m)).read(bArr, i10, i11);
        if (read == -1) {
            return -1;
        }
        this.f48974p += read;
        o(read);
        return read;
    }

    private void w(long j10, com.google.android.exoplayer2.upstream.a aVar) {
        if (j10 != 0) {
            byte[] bArr = new byte[RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT];
            while (j10 > 0) {
                try {
                    int read = ((InputStream) w0.j(this.f48971m)).read(bArr, 0, (int) Math.min(j10, (long) RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT));
                    if (!Thread.currentThread().isInterrupted()) {
                        if (read != -1) {
                            j10 -= read;
                            o(read);
                        } else {
                            throw new g.d(aVar, 2008, 1);
                        }
                    } else {
                        throw new InterruptedIOException();
                    }
                } catch (IOException e10) {
                    if (e10 instanceof g.d) {
                        throw ((g.d) e10);
                    }
                    throw new g.d(aVar, 2000, 1);
                }
            }
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        String str;
        byte[] bArr;
        m mVar;
        this.f48969k = aVar;
        long j10 = 0;
        this.f48974p = 0L;
        this.f48973o = 0L;
        q(aVar);
        try {
            Response t10 = t(this.f48963e.a(u(aVar)));
            this.f48970l = t10;
            ResponseBody responseBody = (ResponseBody) ne.a.e(t10.x());
            this.f48971m = responseBody.byteStream();
            int L = t10.L();
            long j11 = -1;
            if (!t10.isSuccessful()) {
                if (L == 416) {
                    if (aVar.f13981g == t.c(t10.F0().c("Content-Range"))) {
                        this.f48972n = true;
                        r(aVar);
                        long j12 = aVar.f13982h;
                        if (j12 == -1) {
                            return 0L;
                        }
                        return j12;
                    }
                }
                try {
                    bArr = w0.i1((InputStream) ne.a.e(this.f48971m));
                } catch (IOException unused) {
                    bArr = w0.f40163f;
                }
                byte[] bArr2 = bArr;
                Map i10 = t10.F0().i();
                s();
                if (L == 416) {
                    mVar = new m(2008);
                } else {
                    mVar = null;
                }
                throw new g.f(L, t10.J0(), mVar, i10, aVar, bArr2);
            }
            MediaType contentType = responseBody.contentType();
            if (contentType != null) {
                str = contentType.toString();
            } else {
                str = "";
            }
            n nVar = this.f48968j;
            if (nVar != null && !nVar.apply(str)) {
                s();
                throw new g.e(str, aVar);
            }
            if (L == 200) {
                long j13 = aVar.f13981g;
                if (j13 != 0) {
                    j10 = j13;
                }
            }
            long j14 = aVar.f13982h;
            if (j14 != -1) {
                this.f48973o = j14;
            } else {
                long contentLength = responseBody.contentLength();
                if (contentLength != -1) {
                    j11 = contentLength - j10;
                }
                this.f48973o = j11;
            }
            this.f48972n = true;
            r(aVar);
            try {
                w(j10, aVar);
                return this.f48973o;
            } catch (g.d e10) {
                s();
                throw e10;
            }
        } catch (IOException e11) {
            throw g.d.c(e11, aVar, 1);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void close() {
        if (this.f48972n) {
            this.f48972n = false;
            p();
            s();
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Map d() {
        Response response = this.f48970l;
        if (response == null) {
            return Collections.EMPTY_MAP;
        }
        return response.F0().i();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        Response response = this.f48970l;
        if (response == null) {
            return null;
        }
        return Uri.parse(response.Z0().n().toString());
    }

    @Override // le.j
    public int read(byte[] bArr, int i10, int i11) {
        try {
            return v(bArr, i10, i11);
        } catch (IOException e10) {
            throw g.d.c(e10, (com.google.android.exoplayer2.upstream.a) w0.j(this.f48969k), 2);
        }
    }

    private a(Call.Factory factory, String str, CacheControl cacheControl, g.C0179g c0179g, n nVar) {
        super(true);
        this.f48963e = (Call.Factory) ne.a.e(factory);
        this.f48965g = str;
        this.f48966h = cacheControl;
        this.f48967i = c0179g;
        this.f48968j = nVar;
        this.f48964f = new g.C0179g();
    }
}
