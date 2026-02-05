package sc;

import android.net.Uri;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.animated.InterpolationAnimatedNode;
import com.google.android.exoplayer2.upstream.g;
import com.google.common.util.concurrent.SettableFuture;
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
import li.n;
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
    private final Call.Factory f49519e;

    /* renamed from: f  reason: collision with root package name */
    private final g.C0176g f49520f;

    /* renamed from: g  reason: collision with root package name */
    private final String f49521g;

    /* renamed from: h  reason: collision with root package name */
    private final CacheControl f49522h;

    /* renamed from: i  reason: collision with root package name */
    private final g.C0176g f49523i;

    /* renamed from: j  reason: collision with root package name */
    private n f49524j;

    /* renamed from: k  reason: collision with root package name */
    private com.google.android.exoplayer2.upstream.a f49525k;

    /* renamed from: l  reason: collision with root package name */
    private Response f49526l;

    /* renamed from: m  reason: collision with root package name */
    private InputStream f49527m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f49528n;

    /* renamed from: o  reason: collision with root package name */
    private long f49529o;

    /* renamed from: p  reason: collision with root package name */
    private long f49530p;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: sc.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class C0633a implements zt.b {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ SettableFuture f49531d;

        C0633a(SettableFuture settableFuture) {
            this.f49531d = settableFuture;
        }

        @Override // zt.b
        public void onFailure(Call call, IOException iOException) {
            this.f49531d.y(iOException);
        }

        @Override // zt.b
        public void onResponse(Call call, Response response) {
            this.f49531d.x(response);
        }
    }

    static {
        u.a("goog.exo.okhttp");
    }

    public a(Call.Factory factory, String str, CacheControl cacheControl, g.C0176g c0176g) {
        this(factory, str, cacheControl, c0176g, null);
    }

    private void s() {
        Response response = this.f49526l;
        if (response != null) {
            ((ResponseBody) ne.a.e(response.o())).close();
            this.f49526l = null;
        }
        this.f49527m = null;
    }

    private Response t(Call call) {
        SettableFuture z10 = SettableFuture.z();
        call.V(new C0633a(z10));
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
        long j10 = aVar.f13334g;
        long j11 = aVar.f13335h;
        HttpUrl m10 = HttpUrl.m(aVar.f13328a.toString());
        if (m10 != null) {
            Request.Builder m11 = new Request.Builder().m(m10);
            CacheControl cacheControl = this.f49522h;
            if (cacheControl != null) {
                m11.c(cacheControl);
            }
            HashMap hashMap = new HashMap();
            g.C0176g c0176g = this.f49523i;
            if (c0176g != null) {
                hashMap.putAll(c0176g.b());
            }
            hashMap.putAll(this.f49520f.b());
            hashMap.putAll(aVar.f13332e);
            for (Map.Entry entry : hashMap.entrySet()) {
                m11.e((String) entry.getKey(), (String) entry.getValue());
            }
            String a10 = t.a(j10, j11);
            if (a10 != null) {
                m11.a("Range", a10);
            }
            String str = this.f49521g;
            if (str != null) {
                m11.a("User-Agent", str);
            }
            if (!aVar.d(1)) {
                m11.a("Accept-Encoding", InterpolationAnimatedNode.EXTRAPOLATE_TYPE_IDENTITY);
            }
            byte[] bArr = aVar.f13331d;
            RequestBody requestBody = null;
            if (bArr != null) {
                requestBody = RequestBody.create((MediaType) null, bArr);
            } else if (aVar.f13330c == 2) {
                requestBody = RequestBody.create((MediaType) null, w0.f39662f);
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
        long j10 = this.f49529o;
        if (j10 != -1) {
            long j11 = j10 - this.f49530p;
            if (j11 == 0) {
                return -1;
            }
            i11 = (int) Math.min(i11, j11);
        }
        int read = ((InputStream) w0.j(this.f49527m)).read(bArr, i10, i11);
        if (read == -1) {
            return -1;
        }
        this.f49530p += read;
        o(read);
        return read;
    }

    private void w(long j10, com.google.android.exoplayer2.upstream.a aVar) {
        if (j10 != 0) {
            byte[] bArr = new byte[RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT];
            while (j10 > 0) {
                try {
                    int read = ((InputStream) w0.j(this.f49527m)).read(bArr, 0, (int) Math.min(j10, (long) RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT));
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
        this.f49525k = aVar;
        long j10 = 0;
        this.f49530p = 0L;
        this.f49529o = 0L;
        q(aVar);
        try {
            Response t10 = t(this.f49519e.a(u(aVar)));
            this.f49526l = t10;
            ResponseBody responseBody = (ResponseBody) ne.a.e(t10.o());
            this.f49527m = responseBody.byteStream();
            int L = t10.L();
            long j11 = -1;
            if (!t10.isSuccessful()) {
                if (L == 416) {
                    if (aVar.f13334g == t.c(t10.E0().c("Content-Range"))) {
                        this.f49528n = true;
                        r(aVar);
                        long j12 = aVar.f13335h;
                        if (j12 == -1) {
                            return 0L;
                        }
                        return j12;
                    }
                }
                try {
                    bArr = w0.i1((InputStream) ne.a.e(this.f49527m));
                } catch (IOException unused) {
                    bArr = w0.f39662f;
                }
                byte[] bArr2 = bArr;
                Map i10 = t10.E0().i();
                s();
                if (L == 416) {
                    mVar = new m(2008);
                } else {
                    mVar = null;
                }
                throw new g.f(L, t10.I0(), mVar, i10, aVar, bArr2);
            }
            MediaType contentType = responseBody.contentType();
            if (contentType != null) {
                str = contentType.toString();
            } else {
                str = "";
            }
            n nVar = this.f49524j;
            if (nVar != null && !nVar.apply(str)) {
                s();
                throw new g.e(str, aVar);
            }
            if (L == 200) {
                long j13 = aVar.f13334g;
                if (j13 != 0) {
                    j10 = j13;
                }
            }
            long j14 = aVar.f13335h;
            if (j14 != -1) {
                this.f49529o = j14;
            } else {
                long contentLength = responseBody.contentLength();
                if (contentLength != -1) {
                    j11 = contentLength - j10;
                }
                this.f49529o = j11;
            }
            this.f49528n = true;
            r(aVar);
            try {
                w(j10, aVar);
                return this.f49529o;
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
        if (this.f49528n) {
            this.f49528n = false;
            p();
            s();
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Map d() {
        Response response = this.f49526l;
        if (response == null) {
            return Collections.EMPTY_MAP;
        }
        return response.E0().i();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        Response response = this.f49526l;
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
            throw g.d.c(e10, (com.google.android.exoplayer2.upstream.a) w0.j(this.f49525k), 2);
        }
    }

    private a(Call.Factory factory, String str, CacheControl cacheControl, g.C0176g c0176g, n nVar) {
        super(true);
        this.f49519e = (Call.Factory) ne.a.e(factory);
        this.f49521g = str;
        this.f49522h = cacheControl;
        this.f49523i = c0176g;
        this.f49524j = nVar;
        this.f49520f = new g.C0176g();
    }
}
