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
import mc.u;
import me.c0;
import me.f;
import me.m;
import me.t;
import oe.e;
import oe.w0;
import org.chromium.net.CronetEngine;
import org.chromium.net.CronetException;
import org.chromium.net.NetworkException;
import org.chromium.net.UrlRequest;
import org.chromium.net.UrlResponseInfo;
import org.webrtc.PeerConnection;
import pi.n;
import si.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class CronetDataSource extends f implements h {
    private boolean A;
    private volatile long B;

    /* renamed from: e  reason: collision with root package name */
    final UrlRequest.Callback f13106e;

    /* renamed from: f  reason: collision with root package name */
    private final CronetEngine f13107f;

    /* renamed from: g  reason: collision with root package name */
    private final Executor f13108g;

    /* renamed from: h  reason: collision with root package name */
    private final int f13109h;

    /* renamed from: i  reason: collision with root package name */
    private final int f13110i;

    /* renamed from: j  reason: collision with root package name */
    private final int f13111j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f13112k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f13113l;

    /* renamed from: m  reason: collision with root package name */
    private final String f13114m;

    /* renamed from: n  reason: collision with root package name */
    private final h.g f13115n;

    /* renamed from: o  reason: collision with root package name */
    private final h.g f13116o;

    /* renamed from: p  reason: collision with root package name */
    private final oe.h f13117p;

    /* renamed from: q  reason: collision with root package name */
    private final e f13118q;

    /* renamed from: r  reason: collision with root package name */
    private n f13119r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f13120s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f13121t;

    /* renamed from: u  reason: collision with root package name */
    private long f13122u;

    /* renamed from: v  reason: collision with root package name */
    private UrlRequest f13123v;

    /* renamed from: w  reason: collision with root package name */
    private com.google.android.exoplayer2.upstream.a f13124w;

    /* renamed from: x  reason: collision with root package name */
    private ByteBuffer f13125x;

    /* renamed from: y  reason: collision with root package name */
    private UrlResponseInfo f13126y;

    /* renamed from: z  reason: collision with root package name */
    private IOException f13127z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Factory implements h.c {

        /* renamed from: a  reason: collision with root package name */
        private final CronetEngine f13128a;

        /* renamed from: b  reason: collision with root package name */
        private final Executor f13129b;

        /* renamed from: e  reason: collision with root package name */
        private h.c f13132e;

        /* renamed from: f  reason: collision with root package name */
        private n f13133f;

        /* renamed from: g  reason: collision with root package name */
        private c0 f13134g;

        /* renamed from: h  reason: collision with root package name */
        private String f13135h;

        /* renamed from: l  reason: collision with root package name */
        private boolean f13139l;

        /* renamed from: m  reason: collision with root package name */
        private boolean f13140m;

        /* renamed from: n  reason: collision with root package name */
        private boolean f13141n;

        /* renamed from: c  reason: collision with root package name */
        private final h.g f13130c = new h.g();

        /* renamed from: d  reason: collision with root package name */
        private final d.b f13131d = null;

        /* renamed from: i  reason: collision with root package name */
        private int f13136i = 3;

        /* renamed from: j  reason: collision with root package name */
        private int f13137j = 8000;

        /* renamed from: k  reason: collision with root package name */
        private int f13138k = 8000;

        public Factory(CronetEngine cronetEngine, Executor executor) {
            this.f13128a = (CronetEngine) oe.a.e(cronetEngine);
            this.f13129b = executor;
        }

        @Override // com.google.android.exoplayer2.upstream.DataSource.Factory
        public h createDataSource() {
            if (this.f13128a == null) {
                h.c cVar = this.f13132e;
                if (cVar != null) {
                    return cVar.createDataSource();
                }
                return ((d.b) oe.a.e(this.f13131d)).createDataSource();
            }
            CronetDataSource cronetDataSource = new CronetDataSource(this.f13128a, this.f13129b, this.f13136i, this.f13137j, this.f13138k, this.f13139l, this.f13140m, this.f13135h, this.f13130c, this.f13133f, this.f13141n);
            c0 c0Var = this.f13134g;
            if (c0Var != null) {
                cronetDataSource.i(c0Var);
            }
            return cronetDataSource;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a extends UrlRequest.StatusListener {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ int[] f13142a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ oe.h f13143b;

        a(int[] iArr, oe.h hVar) {
            this.f13142a = iArr;
            this.f13143b = hVar;
        }

        @Override // org.chromium.net.UrlRequest.StatusListener
        public void onStatus(int i10) {
            this.f13142a[0] = i10;
            this.f13143b.f();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class c extends UrlRequest.Callback {
        private c() {
        }

        @Override // org.chromium.net.UrlRequest.Callback
        public synchronized void onFailed(UrlRequest urlRequest, UrlResponseInfo urlResponseInfo, CronetException cronetException) {
            try {
                if (urlRequest != CronetDataSource.this.f13123v) {
                    return;
                }
                if (!(cronetException instanceof NetworkException) || ((NetworkException) cronetException).getErrorCode() != 1) {
                    CronetDataSource.this.f13127z = cronetException;
                } else {
                    CronetDataSource.this.f13127z = new UnknownHostException();
                }
                CronetDataSource.this.f13117p.f();
            } catch (Throwable th2) {
                throw th2;
            }
        }

        @Override // org.chromium.net.UrlRequest.Callback
        public synchronized void onReadCompleted(UrlRequest urlRequest, UrlResponseInfo urlResponseInfo, ByteBuffer byteBuffer) {
            if (urlRequest != CronetDataSource.this.f13123v) {
                return;
            }
            CronetDataSource.this.f13117p.f();
        }

        @Override // org.chromium.net.UrlRequest.Callback
        public synchronized void onRedirectReceived(UrlRequest urlRequest, UrlResponseInfo urlResponseInfo, String str) {
            boolean z10;
            com.google.android.exoplayer2.upstream.a g10;
            if (urlRequest != CronetDataSource.this.f13123v) {
                return;
            }
            UrlRequest urlRequest2 = (UrlRequest) oe.a.e(CronetDataSource.this.f13123v);
            com.google.android.exoplayer2.upstream.a aVar = (com.google.android.exoplayer2.upstream.a) oe.a.e(CronetDataSource.this.f13124w);
            int httpStatusCode = urlResponseInfo.getHttpStatusCode();
            if (aVar.f13985c == 2 && (httpStatusCode == 307 || httpStatusCode == 308)) {
                CronetDataSource.this.f13127z = new h.f(httpStatusCode, urlResponseInfo.getHttpStatusText(), null, urlResponseInfo.getAllHeaders(), aVar, w0.f39043f);
                CronetDataSource.this.f13117p.f();
                return;
            }
            if (CronetDataSource.this.f13112k) {
                CronetDataSource.this.P();
            }
            if (CronetDataSource.this.f13120s && aVar.f13985c == 2 && httpStatusCode == 302) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10 || CronetDataSource.this.f13113l) {
                String M = CronetDataSource.M(urlResponseInfo.getAllHeaders().get("Set-Cookie"));
                if (!z10 && TextUtils.isEmpty(M)) {
                    urlRequest.followRedirect();
                    return;
                }
                urlRequest2.cancel();
                if (!z10 && aVar.f13985c == 2) {
                    g10 = aVar.a().j(str).d(1).c(null).a();
                } else {
                    g10 = aVar.g(Uri.parse(str));
                }
                try {
                    UrlRequest.Builder H = CronetDataSource.this.H(g10);
                    CronetDataSource.F(H, M);
                    CronetDataSource.this.f13123v = H.build();
                    CronetDataSource.this.f13123v.start();
                    return;
                } catch (IOException e10) {
                    CronetDataSource.this.f13127z = e10;
                    return;
                }
            }
            urlRequest.followRedirect();
        }

        @Override // org.chromium.net.UrlRequest.Callback
        public synchronized void onResponseStarted(UrlRequest urlRequest, UrlResponseInfo urlResponseInfo) {
            if (urlRequest == CronetDataSource.this.f13123v) {
                CronetDataSource.this.f13126y = urlResponseInfo;
                CronetDataSource.this.f13117p.f();
            }
        }

        @Override // org.chromium.net.UrlRequest.Callback
        public synchronized void onSucceeded(UrlRequest urlRequest, UrlResponseInfo urlResponseInfo) {
            if (urlRequest == CronetDataSource.this.f13123v) {
                CronetDataSource.this.A = true;
                CronetDataSource.this.f13117p.f();
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
        this.f13107f = (CronetEngine) oe.a.e(cronetEngine);
        this.f13108g = (Executor) oe.a.e(executor);
        this.f13109h = i10;
        this.f13110i = i11;
        this.f13111j = i12;
        this.f13112k = z10;
        this.f13113l = z11;
        this.f13114m = str;
        this.f13115n = gVar;
        this.f13119r = nVar;
        this.f13120s = z12;
        this.f13118q = e.f38931a;
        this.f13106e = new c(this, null);
        this.f13116o = new h.g();
        this.f13117p = new oe.h();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void F(UrlRequest.Builder builder, String str) {
        if (TextUtils.isEmpty(str)) {
            return;
        }
        builder.addHeader("Cookie", str);
    }

    private boolean G() {
        long b10 = this.f13118q.b();
        boolean z10 = false;
        while (!z10 && b10 < this.B) {
            z10 = this.f13117p.b((this.B - b10) + 5);
            b10 = this.f13118q.b();
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
        if (this.f13125x == null) {
            ByteBuffer allocateDirect = ByteBuffer.allocateDirect(PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS);
            this.f13125x = allocateDirect;
            allocateDirect.limit(0);
        }
        return this.f13125x;
    }

    private static int K(UrlRequest urlRequest) {
        oe.h hVar = new oe.h();
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
        ((UrlRequest) w0.j(this.f13123v)).read(byteBuffer);
        try {
        } catch (InterruptedException unused) {
            if (byteBuffer == this.f13125x) {
                this.f13125x = null;
            }
            Thread.currentThread().interrupt();
            this.f13127z = new InterruptedIOException();
        } catch (SocketTimeoutException e10) {
            if (byteBuffer == this.f13125x) {
                this.f13125x = null;
            }
            this.f13127z = new h.d(e10, aVar, 2002, 2);
        }
        if (!this.f13117p.b(this.f13111j)) {
            throw new SocketTimeoutException();
        }
        IOException iOException = this.f13127z;
        if (iOException != null) {
            if (iOException instanceof h.d) {
                throw ((h.d) iOException);
            }
            throw h.d.c(iOException, aVar, 2);
        }
    }

    private byte[] O() {
        byte[] bArr = w0.f39043f;
        ByteBuffer J = J();
        while (!this.A) {
            this.f13117p.d();
            J.clear();
            N(J, (com.google.android.exoplayer2.upstream.a) w0.j(this.f13124w));
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
        this.B = this.f13118q.b() + this.f13110i;
    }

    private void Q(long j10, com.google.android.exoplayer2.upstream.a aVar) {
        int i10;
        if (j10 != 0) {
            ByteBuffer J = J();
            while (j10 > 0) {
                try {
                    this.f13117p.d();
                    J.clear();
                    N(J, aVar);
                    if (!Thread.currentThread().isInterrupted()) {
                        if (!this.A) {
                            J.flip();
                            oe.a.g(J.hasRemaining());
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
        UrlRequest.Builder allowDirectExecutor = this.f13107f.newUrlRequestBuilder(aVar.f13983a.toString(), this.f13106e, this.f13108g).setPriority(this.f13109h).allowDirectExecutor();
        HashMap hashMap = new HashMap();
        h.g gVar = this.f13115n;
        if (gVar != null) {
            hashMap.putAll(gVar.b());
        }
        hashMap.putAll(this.f13116o.b());
        hashMap.putAll(aVar.f13987e);
        for (Map.Entry entry : hashMap.entrySet()) {
            allowDirectExecutor.addHeader((String) entry.getKey(), (String) entry.getValue());
        }
        if (aVar.f13986d != null && !hashMap.containsKey("Content-Type")) {
            throw new b("HTTP request with non-empty body must set Content-Type", aVar, 1004, 0);
        }
        String a10 = t.a(aVar.f13989g, aVar.f13990h);
        if (a10 != null) {
            allowDirectExecutor.addHeader("Range", a10);
        }
        String str = this.f13114m;
        if (str != null) {
            allowDirectExecutor.addHeader("User-Agent", str);
        }
        allowDirectExecutor.setHttpMethod(aVar.b());
        byte[] bArr = aVar.f13986d;
        if (bArr != null) {
            allowDirectExecutor.setUploadDataProvider(new com.google.android.exoplayer2.ext.cronet.a(bArr), this.f13108g);
        }
        return allowDirectExecutor;
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        byte[] bArr;
        m mVar;
        String I;
        oe.a.e(aVar);
        oe.a.g(!this.f13121t);
        this.f13117p.d();
        P();
        this.f13124w = aVar;
        try {
            UrlRequest build = H(aVar).build();
            this.f13123v = build;
            build.start();
            q(aVar);
            try {
                boolean G = G();
                IOException iOException = this.f13127z;
                if (iOException != null) {
                    String message = iOException.getMessage();
                    if (message != null && pi.b.e(message).contains("err_cleartext_not_permitted")) {
                        throw new h.b(iOException, aVar);
                    }
                    throw new b(iOException, aVar, 2001, K(build));
                } else if (G) {
                    UrlResponseInfo urlResponseInfo = (UrlResponseInfo) oe.a.e(this.f13126y);
                    int httpStatusCode = urlResponseInfo.getHttpStatusCode();
                    Map<String, List<String>> allHeaders = urlResponseInfo.getAllHeaders();
                    long j10 = 0;
                    long j11 = -1;
                    if (httpStatusCode >= 200 && httpStatusCode <= 299) {
                        n nVar = this.f13119r;
                        if (nVar != null && (I = I(allHeaders, "Content-Type")) != null && !nVar.apply(I)) {
                            throw new h.e(I, aVar);
                        }
                        if (httpStatusCode == 200) {
                            long j12 = aVar.f13989g;
                            if (j12 != 0) {
                                j10 = j12;
                            }
                        }
                        if (!L(urlResponseInfo)) {
                            long j13 = aVar.f13990h;
                            if (j13 != -1) {
                                this.f13122u = j13;
                            } else {
                                long b10 = t.b(I(allHeaders, "Content-Length"), I(allHeaders, "Content-Range"));
                                if (b10 != -1) {
                                    j11 = b10 - j10;
                                }
                                this.f13122u = j11;
                            }
                        } else {
                            this.f13122u = aVar.f13990h;
                        }
                        this.f13121t = true;
                        r(aVar);
                        Q(j10, aVar);
                        return this.f13122u;
                    }
                    if (httpStatusCode == 416) {
                        if (aVar.f13989g == t.c(I(allHeaders, "Content-Range"))) {
                            this.f13121t = true;
                            r(aVar);
                            long j14 = aVar.f13990h;
                            if (j14 == -1) {
                                return 0L;
                            }
                            return j14;
                        }
                    }
                    try {
                        bArr = O();
                    } catch (IOException unused) {
                        bArr = w0.f39043f;
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
            UrlRequest urlRequest = this.f13123v;
            if (urlRequest != null) {
                urlRequest.cancel();
                this.f13123v = null;
            }
            ByteBuffer byteBuffer = this.f13125x;
            if (byteBuffer != null) {
                byteBuffer.limit(0);
            }
            this.f13124w = null;
            this.f13126y = null;
            this.f13127z = null;
            this.A = false;
            if (this.f13121t) {
                this.f13121t = false;
                p();
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Map d() {
        UrlResponseInfo urlResponseInfo = this.f13126y;
        if (urlResponseInfo == null) {
            return Collections.EMPTY_MAP;
        }
        return urlResponseInfo.getAllHeaders();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        UrlResponseInfo urlResponseInfo = this.f13126y;
        if (urlResponseInfo == null) {
            return null;
        }
        return Uri.parse(urlResponseInfo.getUrl());
    }

    @Override // me.j
    public int read(byte[] bArr, int i10, int i11) {
        oe.a.g(this.f13121t);
        if (i11 == 0) {
            return 0;
        }
        if (this.f13122u == 0) {
            return -1;
        }
        ByteBuffer J = J();
        if (!J.hasRemaining()) {
            this.f13117p.d();
            J.clear();
            N(J, (com.google.android.exoplayer2.upstream.a) w0.j(this.f13124w));
            if (this.A) {
                this.f13122u = 0L;
                return -1;
            }
            J.flip();
            oe.a.g(J.hasRemaining());
        }
        long j10 = this.f13122u;
        if (j10 == -1) {
            j10 = LongCompanionObject.MAX_VALUE;
        }
        int d10 = (int) g.d(j10, J.remaining(), i11);
        J.get(bArr, i10, d10);
        long j11 = this.f13122u;
        if (j11 != -1) {
            this.f13122u = j11 - d10;
        }
        o(d10);
        return d10;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends h.d {

        /* renamed from: o  reason: collision with root package name */
        public final int f13144o;

        public b(IOException iOException, com.google.android.exoplayer2.upstream.a aVar, int i10, int i11) {
            super(iOException, aVar, i10, 1);
            this.f13144o = i11;
        }

        public b(String str, com.google.android.exoplayer2.upstream.a aVar, int i10, int i11) {
            super(str, aVar, i10, 1);
            this.f13144o = i11;
        }

        public b(com.google.android.exoplayer2.upstream.a aVar, int i10, int i11) {
            super(aVar, i10, 1);
            this.f13144o = i11;
        }
    }
}
