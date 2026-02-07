package com.google.android.exoplayer2.ext.cronet;

import android.net.Uri;
import android.text.TextUtils;
import com.facebook.react.animated.InterpolationAnimatedNode;
import com.google.android.exoplayer2.upstream.d;
import com.google.android.exoplayer2.upstream.h;
import java.io.IOException;
import java.io.InterruptedIOException;
import java.net.SocketTimeoutException;
import java.net.UnknownHostException;
import java.nio.ByteBuffer;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.Executor;
import kotlin.jvm.internal.LongCompanionObject;
import lc.u;
import le.c0;
import le.f;
import le.m;
import le.t;
import mi.n;
import ne.e;
import ne.w0;
import org.chromium.net.CronetEngine;
import org.chromium.net.CronetException;
import org.chromium.net.NetworkException;
import org.chromium.net.UrlRequest;
import org.chromium.net.UrlResponseInfo;
import org.webrtc.PeerConnection;
import pi.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class CronetDataSource extends f implements h {
    private boolean A;
    private volatile long B;

    /* renamed from: e  reason: collision with root package name */
    final UrlRequest.Callback f12388e;

    /* renamed from: f  reason: collision with root package name */
    private final CronetEngine f12389f;

    /* renamed from: g  reason: collision with root package name */
    private final Executor f12390g;

    /* renamed from: h  reason: collision with root package name */
    private final int f12391h;

    /* renamed from: i  reason: collision with root package name */
    private final int f12392i;

    /* renamed from: j  reason: collision with root package name */
    private final int f12393j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f12394k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f12395l;

    /* renamed from: m  reason: collision with root package name */
    private final String f12396m;

    /* renamed from: n  reason: collision with root package name */
    private final h.g f12397n;

    /* renamed from: o  reason: collision with root package name */
    private final h.g f12398o;

    /* renamed from: p  reason: collision with root package name */
    private final ne.h f12399p;

    /* renamed from: q  reason: collision with root package name */
    private final e f12400q;

    /* renamed from: r  reason: collision with root package name */
    private n f12401r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f12402s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f12403t;

    /* renamed from: u  reason: collision with root package name */
    private long f12404u;

    /* renamed from: v  reason: collision with root package name */
    private UrlRequest f12405v;

    /* renamed from: w  reason: collision with root package name */
    private com.google.android.exoplayer2.upstream.a f12406w;

    /* renamed from: x  reason: collision with root package name */
    private ByteBuffer f12407x;

    /* renamed from: y  reason: collision with root package name */
    private UrlResponseInfo f12408y;

    /* renamed from: z  reason: collision with root package name */
    private IOException f12409z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Factory implements h.c {

        /* renamed from: a  reason: collision with root package name */
        private final CronetEngine f12410a;

        /* renamed from: b  reason: collision with root package name */
        private final Executor f12411b;

        /* renamed from: e  reason: collision with root package name */
        private h.c f12414e;

        /* renamed from: f  reason: collision with root package name */
        private n f12415f;

        /* renamed from: g  reason: collision with root package name */
        private c0 f12416g;

        /* renamed from: h  reason: collision with root package name */
        private String f12417h;

        /* renamed from: l  reason: collision with root package name */
        private boolean f12421l;

        /* renamed from: m  reason: collision with root package name */
        private boolean f12422m;

        /* renamed from: n  reason: collision with root package name */
        private boolean f12423n;

        /* renamed from: c  reason: collision with root package name */
        private final h.g f12412c = new h.g();

        /* renamed from: d  reason: collision with root package name */
        private final d.b f12413d = null;

        /* renamed from: i  reason: collision with root package name */
        private int f12418i = 3;

        /* renamed from: j  reason: collision with root package name */
        private int f12419j = 8000;

        /* renamed from: k  reason: collision with root package name */
        private int f12420k = 8000;

        public Factory(CronetEngine cronetEngine, Executor executor) {
            this.f12410a = (CronetEngine) ne.a.e(cronetEngine);
            this.f12411b = executor;
        }

        @Override // com.google.android.exoplayer2.upstream.DataSource.Factory
        public h createDataSource() {
            if (this.f12410a == null) {
                h.c cVar = this.f12414e;
                if (cVar != null) {
                    return cVar.createDataSource();
                }
                return ((d.b) ne.a.e(this.f12413d)).createDataSource();
            }
            CronetDataSource cronetDataSource = new CronetDataSource(this.f12410a, this.f12411b, this.f12418i, this.f12419j, this.f12420k, this.f12421l, this.f12422m, this.f12417h, this.f12412c, this.f12415f, this.f12423n);
            c0 c0Var = this.f12416g;
            if (c0Var != null) {
                cronetDataSource.j(c0Var);
            }
            return cronetDataSource;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a extends UrlRequest.StatusListener {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ int[] f12424a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ ne.h f12425b;

        a(int[] iArr, ne.h hVar) {
            this.f12424a = iArr;
            this.f12425b = hVar;
        }

        @Override // org.chromium.net.UrlRequest.StatusListener
        public void onStatus(int i10) {
            this.f12424a[0] = i10;
            this.f12425b.f();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class c extends UrlRequest.Callback {
        private c() {
        }

        @Override // org.chromium.net.UrlRequest.Callback
        public synchronized void onFailed(UrlRequest urlRequest, UrlResponseInfo urlResponseInfo, CronetException cronetException) {
            try {
                if (urlRequest != CronetDataSource.this.f12405v) {
                    return;
                }
                if (!(cronetException instanceof NetworkException) || ((NetworkException) cronetException).getErrorCode() != 1) {
                    CronetDataSource.this.f12409z = cronetException;
                } else {
                    CronetDataSource.this.f12409z = new UnknownHostException();
                }
                CronetDataSource.this.f12399p.f();
            } catch (Throwable th2) {
                throw th2;
            }
        }

        @Override // org.chromium.net.UrlRequest.Callback
        public synchronized void onReadCompleted(UrlRequest urlRequest, UrlResponseInfo urlResponseInfo, ByteBuffer byteBuffer) {
            if (urlRequest != CronetDataSource.this.f12405v) {
                return;
            }
            CronetDataSource.this.f12399p.f();
        }

        @Override // org.chromium.net.UrlRequest.Callback
        public synchronized void onRedirectReceived(UrlRequest urlRequest, UrlResponseInfo urlResponseInfo, String str) {
            boolean z10;
            com.google.android.exoplayer2.upstream.a g10;
            if (urlRequest != CronetDataSource.this.f12405v) {
                return;
            }
            UrlRequest urlRequest2 = (UrlRequest) ne.a.e(CronetDataSource.this.f12405v);
            com.google.android.exoplayer2.upstream.a aVar = (com.google.android.exoplayer2.upstream.a) ne.a.e(CronetDataSource.this.f12406w);
            int httpStatusCode = urlResponseInfo.getHttpStatusCode();
            if (aVar.f13267c == 2 && (httpStatusCode == 307 || httpStatusCode == 308)) {
                CronetDataSource.this.f12409z = new h.f(httpStatusCode, urlResponseInfo.getHttpStatusText(), null, urlResponseInfo.getAllHeaders(), aVar, w0.f39065f);
                CronetDataSource.this.f12399p.f();
                return;
            }
            if (CronetDataSource.this.f12394k) {
                CronetDataSource.this.P();
            }
            if (CronetDataSource.this.f12402s && aVar.f13267c == 2 && httpStatusCode == 302) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10 || CronetDataSource.this.f12395l) {
                String M = CronetDataSource.M(urlResponseInfo.getAllHeaders().get("Set-Cookie"));
                if (!z10 && TextUtils.isEmpty(M)) {
                    urlRequest.followRedirect();
                    return;
                }
                urlRequest2.cancel();
                if (!z10 && aVar.f13267c == 2) {
                    g10 = aVar.a().j(str).d(1).c(null).a();
                } else {
                    g10 = aVar.g(Uri.parse(str));
                }
                try {
                    UrlRequest.Builder H = CronetDataSource.this.H(g10);
                    CronetDataSource.F(H, M);
                    CronetDataSource.this.f12405v = H.build();
                    CronetDataSource.this.f12405v.start();
                    return;
                } catch (IOException e10) {
                    CronetDataSource.this.f12409z = e10;
                    return;
                }
            }
            urlRequest.followRedirect();
        }

        @Override // org.chromium.net.UrlRequest.Callback
        public synchronized void onResponseStarted(UrlRequest urlRequest, UrlResponseInfo urlResponseInfo) {
            if (urlRequest == CronetDataSource.this.f12405v) {
                CronetDataSource.this.f12408y = urlResponseInfo;
                CronetDataSource.this.f12399p.f();
            }
        }

        @Override // org.chromium.net.UrlRequest.Callback
        public synchronized void onSucceeded(UrlRequest urlRequest, UrlResponseInfo urlResponseInfo) {
            if (urlRequest == CronetDataSource.this.f12405v) {
                CronetDataSource.this.A = true;
                CronetDataSource.this.f12399p.f();
            }
        }

        /* synthetic */ c(CronetDataSource cronetDataSource, a aVar) {
            this();
        }
    }

    static {
        u.a("goog.exo.cronet");
    }

    protected CronetDataSource(CronetEngine cronetEngine, Executor executor, int i10, int i11, int i12, boolean z10, boolean z11, String str, h.g gVar, n nVar, boolean z12) {
        super(true);
        this.f12389f = (CronetEngine) ne.a.e(cronetEngine);
        this.f12390g = (Executor) ne.a.e(executor);
        this.f12391h = i10;
        this.f12392i = i11;
        this.f12393j = i12;
        this.f12394k = z10;
        this.f12395l = z11;
        this.f12396m = str;
        this.f12397n = gVar;
        this.f12401r = nVar;
        this.f12402s = z12;
        this.f12400q = e.f38953a;
        this.f12388e = new c(this, null);
        this.f12398o = new h.g();
        this.f12399p = new ne.h();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void F(UrlRequest.Builder builder, String str) {
        if (TextUtils.isEmpty(str)) {
            return;
        }
        builder.addHeader("Cookie", str);
    }

    private boolean G() {
        long b10 = this.f12400q.b();
        boolean z10 = false;
        while (!z10 && b10 < this.B) {
            z10 = this.f12399p.b((this.B - b10) + 5);
            b10 = this.f12400q.b();
        }
        return z10;
    }

    private static String I(Map map, String str) {
        List list = (List) map.get(str);
        if (list != null && !list.isEmpty()) {
            return (String) list.get(0);
        }
        return null;
    }

    private ByteBuffer J() {
        if (this.f12407x == null) {
            ByteBuffer allocateDirect = ByteBuffer.allocateDirect(PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS);
            this.f12407x = allocateDirect;
            allocateDirect.limit(0);
        }
        return this.f12407x;
    }

    private static int K(UrlRequest urlRequest) {
        ne.h hVar = new ne.h();
        int[] iArr = new int[1];
        urlRequest.getStatus(new a(iArr, hVar));
        hVar.a();
        return iArr[0];
    }

    private static boolean L(UrlResponseInfo urlResponseInfo) {
        for (Map.Entry<String, String> entry : urlResponseInfo.getAllHeadersAsList()) {
            if (entry.getKey().equalsIgnoreCase("Content-Encoding")) {
                return !entry.getValue().equalsIgnoreCase(InterpolationAnimatedNode.EXTRAPOLATE_TYPE_IDENTITY);
            }
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static String M(List list) {
        if (list != null && !list.isEmpty()) {
            return TextUtils.join(";", list);
        }
        return null;
    }

    private void N(ByteBuffer byteBuffer, com.google.android.exoplayer2.upstream.a aVar) {
        ((UrlRequest) w0.j(this.f12405v)).read(byteBuffer);
        try {
        } catch (InterruptedException unused) {
            if (byteBuffer == this.f12407x) {
                this.f12407x = null;
            }
            Thread.currentThread().interrupt();
            this.f12409z = new InterruptedIOException();
        } catch (SocketTimeoutException e10) {
            if (byteBuffer == this.f12407x) {
                this.f12407x = null;
            }
            this.f12409z = new h.d(e10, aVar, 2002, 2);
        }
        if (!this.f12399p.b(this.f12393j)) {
            throw new SocketTimeoutException();
        }
        IOException iOException = this.f12409z;
        if (iOException != null) {
            if (iOException instanceof h.d) {
                throw ((h.d) iOException);
            }
            throw h.d.c(iOException, aVar, 2);
        }
    }

    private byte[] O() {
        byte[] bArr = w0.f39065f;
        ByteBuffer J = J();
        while (!this.A) {
            this.f12399p.d();
            J.clear();
            N(J, (com.google.android.exoplayer2.upstream.a) w0.j(this.f12406w));
            J.flip();
            if (J.remaining() > 0) {
                int length = bArr.length;
                bArr = Arrays.copyOf(bArr, bArr.length + J.remaining());
                J.get(bArr, length, J.remaining());
            }
        }
        return bArr;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void P() {
        this.B = this.f12400q.b() + this.f12392i;
    }

    private void Q(long j10, com.google.android.exoplayer2.upstream.a aVar) {
        int i10;
        if (j10 != 0) {
            ByteBuffer J = J();
            while (j10 > 0) {
                try {
                    this.f12399p.d();
                    J.clear();
                    N(J, aVar);
                    if (!Thread.currentThread().isInterrupted()) {
                        if (!this.A) {
                            J.flip();
                            ne.a.g(J.hasRemaining());
                            int min = (int) Math.min(J.remaining(), j10);
                            J.position(J.position() + min);
                            j10 -= min;
                        } else {
                            throw new b(aVar, 2008, 14);
                        }
                    } else {
                        throw new InterruptedIOException();
                    }
                } catch (IOException e10) {
                    if (!(e10 instanceof h.d)) {
                        if (e10 instanceof SocketTimeoutException) {
                            i10 = 2002;
                        } else {
                            i10 = 2001;
                        }
                        throw new b(e10, aVar, i10, 14);
                    }
                    throw ((h.d) e10);
                }
            }
        }
    }

    protected UrlRequest.Builder H(com.google.android.exoplayer2.upstream.a aVar) {
        UrlRequest.Builder allowDirectExecutor = this.f12389f.newUrlRequestBuilder(aVar.f13265a.toString(), this.f12388e, this.f12390g).setPriority(this.f12391h).allowDirectExecutor();
        HashMap hashMap = new HashMap();
        h.g gVar = this.f12397n;
        if (gVar != null) {
            hashMap.putAll(gVar.b());
        }
        hashMap.putAll(this.f12398o.b());
        hashMap.putAll(aVar.f13269e);
        for (Map.Entry entry : hashMap.entrySet()) {
            allowDirectExecutor.addHeader((String) entry.getKey(), (String) entry.getValue());
        }
        if (aVar.f13268d != null && !hashMap.containsKey("Content-Type")) {
            throw new b("HTTP request with non-empty body must set Content-Type", aVar, 1004, 0);
        }
        String a10 = t.a(aVar.f13271g, aVar.f13272h);
        if (a10 != null) {
            allowDirectExecutor.addHeader("Range", a10);
        }
        String str = this.f12396m;
        if (str != null) {
            allowDirectExecutor.addHeader("User-Agent", str);
        }
        allowDirectExecutor.setHttpMethod(aVar.b());
        byte[] bArr = aVar.f13268d;
        if (bArr != null) {
            allowDirectExecutor.setUploadDataProvider(new com.google.android.exoplayer2.ext.cronet.a(bArr), this.f12390g);
        }
        return allowDirectExecutor;
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        byte[] bArr;
        m mVar;
        String I;
        ne.a.e(aVar);
        ne.a.g(!this.f12403t);
        this.f12399p.d();
        P();
        this.f12406w = aVar;
        try {
            UrlRequest build = H(aVar).build();
            this.f12405v = build;
            build.start();
            q(aVar);
            try {
                boolean G = G();
                IOException iOException = this.f12409z;
                if (iOException != null) {
                    String message = iOException.getMessage();
                    if (message != null && mi.b.e(message).contains("err_cleartext_not_permitted")) {
                        throw new h.b(iOException, aVar);
                    }
                    throw new b(iOException, aVar, 2001, K(build));
                } else if (G) {
                    UrlResponseInfo urlResponseInfo = (UrlResponseInfo) ne.a.e(this.f12408y);
                    int httpStatusCode = urlResponseInfo.getHttpStatusCode();
                    Map<String, List<String>> allHeaders = urlResponseInfo.getAllHeaders();
                    long j10 = 0;
                    long j11 = -1;
                    if (httpStatusCode >= 200 && httpStatusCode <= 299) {
                        n nVar = this.f12401r;
                        if (nVar != null && (I = I(allHeaders, "Content-Type")) != null && !nVar.apply(I)) {
                            throw new h.e(I, aVar);
                        }
                        if (httpStatusCode == 200) {
                            long j12 = aVar.f13271g;
                            if (j12 != 0) {
                                j10 = j12;
                            }
                        }
                        if (!L(urlResponseInfo)) {
                            long j13 = aVar.f13272h;
                            if (j13 != -1) {
                                this.f12404u = j13;
                            } else {
                                long b10 = t.b(I(allHeaders, "Content-Length"), I(allHeaders, "Content-Range"));
                                if (b10 != -1) {
                                    j11 = b10 - j10;
                                }
                                this.f12404u = j11;
                            }
                        } else {
                            this.f12404u = aVar.f13272h;
                        }
                        this.f12403t = true;
                        r(aVar);
                        Q(j10, aVar);
                        return this.f12404u;
                    }
                    if (httpStatusCode == 416) {
                        if (aVar.f13271g == t.c(I(allHeaders, "Content-Range"))) {
                            this.f12403t = true;
                            r(aVar);
                            long j14 = aVar.f13272h;
                            if (j14 == -1) {
                                return 0L;
                            }
                            return j14;
                        }
                    }
                    try {
                        bArr = O();
                    } catch (IOException unused) {
                        bArr = w0.f39065f;
                    }
                    byte[] bArr2 = bArr;
                    if (httpStatusCode == 416) {
                        mVar = new m(2008);
                    } else {
                        mVar = null;
                    }
                    throw new h.f(httpStatusCode, urlResponseInfo.getHttpStatusText(), mVar, allHeaders, aVar, bArr2);
                } else {
                    throw new b(new SocketTimeoutException(), aVar, 2002, K(build));
                }
            } catch (InterruptedException unused2) {
                Thread.currentThread().interrupt();
                throw new b(new InterruptedIOException(), aVar, 1004, -1);
            }
        } catch (IOException e10) {
            if (e10 instanceof h.d) {
                throw ((h.d) e10);
            }
            throw new b(e10, aVar, 2000, 0);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public synchronized void close() {
        try {
            UrlRequest urlRequest = this.f12405v;
            if (urlRequest != null) {
                urlRequest.cancel();
                this.f12405v = null;
            }
            ByteBuffer byteBuffer = this.f12407x;
            if (byteBuffer != null) {
                byteBuffer.limit(0);
            }
            this.f12406w = null;
            this.f12408y = null;
            this.f12409z = null;
            this.A = false;
            if (this.f12403t) {
                this.f12403t = false;
                p();
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Map d() {
        UrlResponseInfo urlResponseInfo = this.f12408y;
        if (urlResponseInfo == null) {
            return Collections.EMPTY_MAP;
        }
        return urlResponseInfo.getAllHeaders();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        UrlResponseInfo urlResponseInfo = this.f12408y;
        if (urlResponseInfo == null) {
            return null;
        }
        return Uri.parse(urlResponseInfo.getUrl());
    }

    @Override // le.j
    public int read(byte[] bArr, int i10, int i11) {
        ne.a.g(this.f12403t);
        if (i11 == 0) {
            return 0;
        }
        if (this.f12404u == 0) {
            return -1;
        }
        ByteBuffer J = J();
        if (!J.hasRemaining()) {
            this.f12399p.d();
            J.clear();
            N(J, (com.google.android.exoplayer2.upstream.a) w0.j(this.f12406w));
            if (this.A) {
                this.f12404u = 0L;
                return -1;
            }
            J.flip();
            ne.a.g(J.hasRemaining());
        }
        long j10 = this.f12404u;
        if (j10 == -1) {
            j10 = LongCompanionObject.MAX_VALUE;
        }
        int d10 = (int) g.d(j10, J.remaining(), i11);
        J.get(bArr, i10, d10);
        long j11 = this.f12404u;
        if (j11 != -1) {
            this.f12404u = j11 - d10;
        }
        o(d10);
        return d10;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends h.d {

        /* renamed from: o  reason: collision with root package name */
        public final int f12426o;

        public b(IOException iOException, com.google.android.exoplayer2.upstream.a aVar, int i10, int i11) {
            super(iOException, aVar, i10, 1);
            this.f12426o = i11;
        }

        public b(String str, com.google.android.exoplayer2.upstream.a aVar, int i10, int i11) {
            super(str, aVar, i10, 1);
            this.f12426o = i11;
        }

        public b(com.google.android.exoplayer2.upstream.a aVar, int i10, int i11) {
            super(aVar, i10, 1);
            this.f12426o = i11;
        }
    }
}
