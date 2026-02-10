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
    final UrlRequest.Callback f13105e;

    /* renamed from: f  reason: collision with root package name */
    private final CronetEngine f13106f;

    /* renamed from: g  reason: collision with root package name */
    private final Executor f13107g;

    /* renamed from: h  reason: collision with root package name */
    private final int f13108h;

    /* renamed from: i  reason: collision with root package name */
    private final int f13109i;

    /* renamed from: j  reason: collision with root package name */
    private final int f13110j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f13111k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f13112l;

    /* renamed from: m  reason: collision with root package name */
    private final String f13113m;

    /* renamed from: n  reason: collision with root package name */
    private final h.g f13114n;

    /* renamed from: o  reason: collision with root package name */
    private final h.g f13115o;

    /* renamed from: p  reason: collision with root package name */
    private final oe.h f13116p;

    /* renamed from: q  reason: collision with root package name */
    private final e f13117q;

    /* renamed from: r  reason: collision with root package name */
    private n f13118r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f13119s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f13120t;

    /* renamed from: u  reason: collision with root package name */
    private long f13121u;

    /* renamed from: v  reason: collision with root package name */
    private UrlRequest f13122v;

    /* renamed from: w  reason: collision with root package name */
    private com.google.android.exoplayer2.upstream.a f13123w;

    /* renamed from: x  reason: collision with root package name */
    private ByteBuffer f13124x;

    /* renamed from: y  reason: collision with root package name */
    private UrlResponseInfo f13125y;

    /* renamed from: z  reason: collision with root package name */
    private IOException f13126z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Factory implements h.c {

        /* renamed from: a  reason: collision with root package name */
        private final CronetEngine f13127a;

        /* renamed from: b  reason: collision with root package name */
        private final Executor f13128b;

        /* renamed from: e  reason: collision with root package name */
        private h.c f13131e;

        /* renamed from: f  reason: collision with root package name */
        private n f13132f;

        /* renamed from: g  reason: collision with root package name */
        private c0 f13133g;

        /* renamed from: h  reason: collision with root package name */
        private String f13134h;

        /* renamed from: l  reason: collision with root package name */
        private boolean f13138l;

        /* renamed from: m  reason: collision with root package name */
        private boolean f13139m;

        /* renamed from: n  reason: collision with root package name */
        private boolean f13140n;

        /* renamed from: c  reason: collision with root package name */
        private final h.g f13129c = new h.g();

        /* renamed from: d  reason: collision with root package name */
        private final d.b f13130d = null;

        /* renamed from: i  reason: collision with root package name */
        private int f13135i = 3;

        /* renamed from: j  reason: collision with root package name */
        private int f13136j = 8000;

        /* renamed from: k  reason: collision with root package name */
        private int f13137k = 8000;

        public Factory(CronetEngine cronetEngine, Executor executor) {
            this.f13127a = (CronetEngine) oe.a.e(cronetEngine);
            this.f13128b = executor;
        }

        @Override // com.google.android.exoplayer2.upstream.DataSource.Factory
        public h createDataSource() {
            if (this.f13127a == null) {
                h.c cVar = this.f13131e;
                if (cVar != null) {
                    return cVar.createDataSource();
                }
                return ((d.b) oe.a.e(this.f13130d)).createDataSource();
            }
            CronetDataSource cronetDataSource = new CronetDataSource(this.f13127a, this.f13128b, this.f13135i, this.f13136j, this.f13137k, this.f13138l, this.f13139m, this.f13134h, this.f13129c, this.f13132f, this.f13140n);
            c0 c0Var = this.f13133g;
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
        final /* synthetic */ int[] f13141a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ oe.h f13142b;

        a(int[] iArr, oe.h hVar) {
            this.f13141a = iArr;
            this.f13142b = hVar;
        }

        @Override // org.chromium.net.UrlRequest.StatusListener
        public void onStatus(int i10) {
            this.f13141a[0] = i10;
            this.f13142b.f();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class c extends UrlRequest.Callback {
        private c() {
        }

        @Override // org.chromium.net.UrlRequest.Callback
        public synchronized void onFailed(UrlRequest urlRequest, UrlResponseInfo urlResponseInfo, CronetException cronetException) {
            try {
                if (urlRequest != CronetDataSource.this.f13122v) {
                    return;
                }
                if (!(cronetException instanceof NetworkException) || ((NetworkException) cronetException).getErrorCode() != 1) {
                    CronetDataSource.this.f13126z = cronetException;
                } else {
                    CronetDataSource.this.f13126z = new UnknownHostException();
                }
                CronetDataSource.this.f13116p.f();
            } catch (Throwable th2) {
                throw th2;
            }
        }

        @Override // org.chromium.net.UrlRequest.Callback
        public synchronized void onReadCompleted(UrlRequest urlRequest, UrlResponseInfo urlResponseInfo, ByteBuffer byteBuffer) {
            if (urlRequest != CronetDataSource.this.f13122v) {
                return;
            }
            CronetDataSource.this.f13116p.f();
        }

        @Override // org.chromium.net.UrlRequest.Callback
        public synchronized void onRedirectReceived(UrlRequest urlRequest, UrlResponseInfo urlResponseInfo, String str) {
            boolean z10;
            com.google.android.exoplayer2.upstream.a g10;
            if (urlRequest != CronetDataSource.this.f13122v) {
                return;
            }
            UrlRequest urlRequest2 = (UrlRequest) oe.a.e(CronetDataSource.this.f13122v);
            com.google.android.exoplayer2.upstream.a aVar = (com.google.android.exoplayer2.upstream.a) oe.a.e(CronetDataSource.this.f13123w);
            int httpStatusCode = urlResponseInfo.getHttpStatusCode();
            if (aVar.f13984c == 2 && (httpStatusCode == 307 || httpStatusCode == 308)) {
                CronetDataSource.this.f13126z = new h.f(httpStatusCode, urlResponseInfo.getHttpStatusText(), null, urlResponseInfo.getAllHeaders(), aVar, w0.f39042f);
                CronetDataSource.this.f13116p.f();
                return;
            }
            if (CronetDataSource.this.f13111k) {
                CronetDataSource.this.P();
            }
            if (CronetDataSource.this.f13119s && aVar.f13984c == 2 && httpStatusCode == 302) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10 || CronetDataSource.this.f13112l) {
                String M = CronetDataSource.M(urlResponseInfo.getAllHeaders().get("Set-Cookie"));
                if (!z10 && TextUtils.isEmpty(M)) {
                    urlRequest.followRedirect();
                    return;
                }
                urlRequest2.cancel();
                if (!z10 && aVar.f13984c == 2) {
                    g10 = aVar.a().j(str).d(1).c(null).a();
                } else {
                    g10 = aVar.g(Uri.parse(str));
                }
                try {
                    UrlRequest.Builder H = CronetDataSource.this.H(g10);
                    CronetDataSource.F(H, M);
                    CronetDataSource.this.f13122v = H.build();
                    CronetDataSource.this.f13122v.start();
                    return;
                } catch (IOException e10) {
                    CronetDataSource.this.f13126z = e10;
                    return;
                }
            }
            urlRequest.followRedirect();
        }

        @Override // org.chromium.net.UrlRequest.Callback
        public synchronized void onResponseStarted(UrlRequest urlRequest, UrlResponseInfo urlResponseInfo) {
            if (urlRequest == CronetDataSource.this.f13122v) {
                CronetDataSource.this.f13125y = urlResponseInfo;
                CronetDataSource.this.f13116p.f();
            }
        }

        @Override // org.chromium.net.UrlRequest.Callback
        public synchronized void onSucceeded(UrlRequest urlRequest, UrlResponseInfo urlResponseInfo) {
            if (urlRequest == CronetDataSource.this.f13122v) {
                CronetDataSource.this.A = true;
                CronetDataSource.this.f13116p.f();
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
        this.f13106f = (CronetEngine) oe.a.e(cronetEngine);
        this.f13107g = (Executor) oe.a.e(executor);
        this.f13108h = i10;
        this.f13109i = i11;
        this.f13110j = i12;
        this.f13111k = z10;
        this.f13112l = z11;
        this.f13113m = str;
        this.f13114n = gVar;
        this.f13118r = nVar;
        this.f13119s = z12;
        this.f13117q = e.f38930a;
        this.f13105e = new c(this, null);
        this.f13115o = new h.g();
        this.f13116p = new oe.h();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void F(UrlRequest.Builder builder, String str) {
        if (TextUtils.isEmpty(str)) {
            return;
        }
        builder.addHeader("Cookie", str);
    }

    private boolean G() {
        long b10 = this.f13117q.b();
        boolean z10 = false;
        while (!z10 && b10 < this.B) {
            z10 = this.f13116p.b((this.B - b10) + 5);
            b10 = this.f13117q.b();
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
        if (this.f13124x == null) {
            ByteBuffer allocateDirect = ByteBuffer.allocateDirect(PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS);
            this.f13124x = allocateDirect;
            allocateDirect.limit(0);
        }
        return this.f13124x;
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
        ((UrlRequest) w0.j(this.f13122v)).read(byteBuffer);
        try {
        } catch (InterruptedException unused) {
            if (byteBuffer == this.f13124x) {
                this.f13124x = null;
            }
            Thread.currentThread().interrupt();
            this.f13126z = new InterruptedIOException();
        } catch (SocketTimeoutException e10) {
            if (byteBuffer == this.f13124x) {
                this.f13124x = null;
            }
            this.f13126z = new h.d(e10, aVar, 2002, 2);
        }
        if (!this.f13116p.b(this.f13110j)) {
            throw new SocketTimeoutException();
        }
        IOException iOException = this.f13126z;
        if (iOException != null) {
            if (iOException instanceof h.d) {
                throw ((h.d) iOException);
            }
            throw h.d.c(iOException, aVar, 2);
        }
    }

    private byte[] O() {
        byte[] bArr = w0.f39042f;
        ByteBuffer J = J();
        while (!this.A) {
            this.f13116p.d();
            J.clear();
            N(J, (com.google.android.exoplayer2.upstream.a) w0.j(this.f13123w));
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
        this.B = this.f13117q.b() + this.f13109i;
    }

    private void Q(long j10, com.google.android.exoplayer2.upstream.a aVar) {
        int i10;
        if (j10 != 0) {
            ByteBuffer J = J();
            while (j10 > 0) {
                try {
                    this.f13116p.d();
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
        UrlRequest.Builder allowDirectExecutor = this.f13106f.newUrlRequestBuilder(aVar.f13982a.toString(), this.f13105e, this.f13107g).setPriority(this.f13108h).allowDirectExecutor();
        HashMap hashMap = new HashMap();
        h.g gVar = this.f13114n;
        if (gVar != null) {
            hashMap.putAll(gVar.b());
        }
        hashMap.putAll(this.f13115o.b());
        hashMap.putAll(aVar.f13986e);
        for (Map.Entry entry : hashMap.entrySet()) {
            allowDirectExecutor.addHeader((String) entry.getKey(), (String) entry.getValue());
        }
        if (aVar.f13985d != null && !hashMap.containsKey("Content-Type")) {
            throw new b("HTTP request with non-empty body must set Content-Type", aVar, 1004, 0);
        }
        String a10 = t.a(aVar.f13988g, aVar.f13989h);
        if (a10 != null) {
            allowDirectExecutor.addHeader("Range", a10);
        }
        String str = this.f13113m;
        if (str != null) {
            allowDirectExecutor.addHeader("User-Agent", str);
        }
        allowDirectExecutor.setHttpMethod(aVar.b());
        byte[] bArr = aVar.f13985d;
        if (bArr != null) {
            allowDirectExecutor.setUploadDataProvider(new com.google.android.exoplayer2.ext.cronet.a(bArr), this.f13107g);
        }
        return allowDirectExecutor;
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        byte[] bArr;
        m mVar;
        String I;
        oe.a.e(aVar);
        oe.a.g(!this.f13120t);
        this.f13116p.d();
        P();
        this.f13123w = aVar;
        try {
            UrlRequest build = H(aVar).build();
            this.f13122v = build;
            build.start();
            q(aVar);
            try {
                boolean G = G();
                IOException iOException = this.f13126z;
                if (iOException != null) {
                    String message = iOException.getMessage();
                    if (message != null && pi.b.e(message).contains("err_cleartext_not_permitted")) {
                        throw new h.b(iOException, aVar);
                    }
                    throw new b(iOException, aVar, 2001, K(build));
                } else if (G) {
                    UrlResponseInfo urlResponseInfo = (UrlResponseInfo) oe.a.e(this.f13125y);
                    int httpStatusCode = urlResponseInfo.getHttpStatusCode();
                    Map<String, List<String>> allHeaders = urlResponseInfo.getAllHeaders();
                    long j10 = 0;
                    long j11 = -1;
                    if (httpStatusCode >= 200 && httpStatusCode <= 299) {
                        n nVar = this.f13118r;
                        if (nVar != null && (I = I(allHeaders, "Content-Type")) != null && !nVar.apply(I)) {
                            throw new h.e(I, aVar);
                        }
                        if (httpStatusCode == 200) {
                            long j12 = aVar.f13988g;
                            if (j12 != 0) {
                                j10 = j12;
                            }
                        }
                        if (!L(urlResponseInfo)) {
                            long j13 = aVar.f13989h;
                            if (j13 != -1) {
                                this.f13121u = j13;
                            } else {
                                long b10 = t.b(I(allHeaders, "Content-Length"), I(allHeaders, "Content-Range"));
                                if (b10 != -1) {
                                    j11 = b10 - j10;
                                }
                                this.f13121u = j11;
                            }
                        } else {
                            this.f13121u = aVar.f13989h;
                        }
                        this.f13120t = true;
                        r(aVar);
                        Q(j10, aVar);
                        return this.f13121u;
                    }
                    if (httpStatusCode == 416) {
                        if (aVar.f13988g == t.c(I(allHeaders, "Content-Range"))) {
                            this.f13120t = true;
                            r(aVar);
                            long j14 = aVar.f13989h;
                            if (j14 == -1) {
                                return 0L;
                            }
                            return j14;
                        }
                    }
                    try {
                        bArr = O();
                    } catch (IOException unused) {
                        bArr = w0.f39042f;
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
            UrlRequest urlRequest = this.f13122v;
            if (urlRequest != null) {
                urlRequest.cancel();
                this.f13122v = null;
            }
            ByteBuffer byteBuffer = this.f13124x;
            if (byteBuffer != null) {
                byteBuffer.limit(0);
            }
            this.f13123w = null;
            this.f13125y = null;
            this.f13126z = null;
            this.A = false;
            if (this.f13120t) {
                this.f13120t = false;
                p();
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Map d() {
        UrlResponseInfo urlResponseInfo = this.f13125y;
        if (urlResponseInfo == null) {
            return Collections.EMPTY_MAP;
        }
        return urlResponseInfo.getAllHeaders();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        UrlResponseInfo urlResponseInfo = this.f13125y;
        if (urlResponseInfo == null) {
            return null;
        }
        return Uri.parse(urlResponseInfo.getUrl());
    }

    @Override // me.j
    public int read(byte[] bArr, int i10, int i11) {
        oe.a.g(this.f13120t);
        if (i11 == 0) {
            return 0;
        }
        if (this.f13121u == 0) {
            return -1;
        }
        ByteBuffer J = J();
        if (!J.hasRemaining()) {
            this.f13116p.d();
            J.clear();
            N(J, (com.google.android.exoplayer2.upstream.a) w0.j(this.f13123w));
            if (this.A) {
                this.f13121u = 0L;
                return -1;
            }
            J.flip();
            oe.a.g(J.hasRemaining());
        }
        long j10 = this.f13121u;
        if (j10 == -1) {
            j10 = LongCompanionObject.MAX_VALUE;
        }
        int d10 = (int) g.d(j10, J.remaining(), i11);
        J.get(bArr, i10, d10);
        long j11 = this.f13121u;
        if (j11 != -1) {
            this.f13121u = j11 - d10;
        }
        o(d10);
        return d10;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends h.d {

        /* renamed from: o  reason: collision with root package name */
        public final int f13143o;

        public b(IOException iOException, com.google.android.exoplayer2.upstream.a aVar, int i10, int i11) {
            super(iOException, aVar, i10, 1);
            this.f13143o = i11;
        }

        public b(String str, com.google.android.exoplayer2.upstream.a aVar, int i10, int i11) {
            super(str, aVar, i10, 1);
            this.f13143o = i11;
        }

        public b(com.google.android.exoplayer2.upstream.a aVar, int i10, int i11) {
            super(aVar, i10, 1);
            this.f13143o = i11;
        }
    }
}
