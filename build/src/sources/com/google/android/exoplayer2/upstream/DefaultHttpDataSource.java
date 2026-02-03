package com.google.android.exoplayer2.upstream;

import android.net.Uri;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.animated.InterpolationAnimatedNode;
import com.google.android.exoplayer2.upstream.DefaultHttpDataSource;
import com.google.android.exoplayer2.upstream.g;
import ii.n;
import java.io.IOException;
import java.io.InputStream;
import java.io.InterruptedIOException;
import java.io.OutputStream;
import java.lang.reflect.Method;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.NoRouteToHostException;
import java.net.URL;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.zip.GZIPInputStream;
import ji.q0;
import le.c0;
import le.m;
import le.t;
import ne.w0;
import ne.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class DefaultHttpDataSource extends le.f implements g {

    /* renamed from: e  reason: collision with root package name */
    private final boolean f12919e;

    /* renamed from: f  reason: collision with root package name */
    private final int f12920f;

    /* renamed from: g  reason: collision with root package name */
    private final int f12921g;

    /* renamed from: h  reason: collision with root package name */
    private final String f12922h;

    /* renamed from: i  reason: collision with root package name */
    private final g.C0160g f12923i;

    /* renamed from: j  reason: collision with root package name */
    private final g.C0160g f12924j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f12925k;

    /* renamed from: l  reason: collision with root package name */
    private n f12926l;

    /* renamed from: m  reason: collision with root package name */
    private com.google.android.exoplayer2.upstream.a f12927m;

    /* renamed from: n  reason: collision with root package name */
    private HttpURLConnection f12928n;

    /* renamed from: o  reason: collision with root package name */
    private InputStream f12929o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f12930p;

    /* renamed from: q  reason: collision with root package name */
    private int f12931q;

    /* renamed from: r  reason: collision with root package name */
    private long f12932r;

    /* renamed from: s  reason: collision with root package name */
    private long f12933s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Factory implements g.c {

        /* renamed from: b  reason: collision with root package name */
        private c0 f12935b;

        /* renamed from: c  reason: collision with root package name */
        private n f12936c;

        /* renamed from: d  reason: collision with root package name */
        private String f12937d;

        /* renamed from: g  reason: collision with root package name */
        private boolean f12940g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f12941h;

        /* renamed from: a  reason: collision with root package name */
        private final g.C0160g f12934a = new g.C0160g();

        /* renamed from: e  reason: collision with root package name */
        private int f12938e = 8000;

        /* renamed from: f  reason: collision with root package name */
        private int f12939f = 8000;

        @Override // com.google.android.exoplayer2.upstream.DataSource.Factory
        /* renamed from: a */
        public DefaultHttpDataSource createDataSource() {
            DefaultHttpDataSource defaultHttpDataSource = new DefaultHttpDataSource(this.f12937d, this.f12938e, this.f12939f, this.f12940g, this.f12934a, this.f12936c, this.f12941h);
            c0 c0Var = this.f12935b;
            if (c0Var != null) {
                defaultHttpDataSource.j(c0Var);
            }
            return defaultHttpDataSource;
        }

        public Factory b(String str) {
            this.f12937d = str;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class b extends ji.n {

        /* renamed from: d  reason: collision with root package name */
        private final Map f12942d;

        public b(Map map) {
            this.f12942d = map;
        }

        public static /* synthetic */ boolean f(String str) {
            if (str != null) {
                return true;
            }
            return false;
        }

        public static /* synthetic */ boolean g(Map.Entry entry) {
            if (entry.getKey() != null) {
                return true;
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // ji.o
        /* renamed from: b */
        public Map a() {
            return this.f12942d;
        }

        @Override // ji.n, java.util.Map
        public boolean containsKey(Object obj) {
            if (obj != null && super.containsKey(obj)) {
                return true;
            }
            return false;
        }

        @Override // java.util.Map
        public boolean containsValue(Object obj) {
            return super.c(obj);
        }

        @Override // ji.n, java.util.Map
        public Set entrySet() {
            return q0.b(super.entrySet(), new n() { // from class: com.google.android.exoplayer2.upstream.e
                @Override // ii.n
                public final boolean apply(Object obj) {
                    return DefaultHttpDataSource.b.g((Map.Entry) obj);
                }
            });
        }

        @Override // java.util.Map
        public boolean equals(Object obj) {
            if (obj != null && super.d(obj)) {
                return true;
            }
            return false;
        }

        @Override // ji.n, java.util.Map
        /* renamed from: h */
        public List get(Object obj) {
            if (obj == null) {
                return null;
            }
            return (List) super.get(obj);
        }

        @Override // java.util.Map
        public int hashCode() {
            return super.e();
        }

        @Override // ji.n, java.util.Map
        public boolean isEmpty() {
            if (super.isEmpty() || (super.size() == 1 && super.containsKey(null))) {
                return true;
            }
            return false;
        }

        @Override // ji.n, java.util.Map
        public Set keySet() {
            return q0.b(super.keySet(), new n() { // from class: com.google.android.exoplayer2.upstream.d
                @Override // ii.n
                public final boolean apply(Object obj) {
                    return DefaultHttpDataSource.b.f((String) obj);
                }
            });
        }

        @Override // ji.n, java.util.Map
        public int size() {
            return super.size() - (super.containsKey(null) ? 1 : 0);
        }
    }

    private void A(long j10, com.google.android.exoplayer2.upstream.a aVar) {
        if (j10 != 0) {
            byte[] bArr = new byte[RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT];
            while (j10 > 0) {
                int read = ((InputStream) w0.j(this.f12929o)).read(bArr, 0, (int) Math.min(j10, (long) RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT));
                if (!Thread.currentThread().isInterrupted()) {
                    if (read != -1) {
                        j10 -= read;
                        o(read);
                    } else {
                        throw new g.d(aVar, 2008, 1);
                    }
                } else {
                    throw new g.d(new InterruptedIOException(), aVar, 2000, 1);
                }
            }
        }
    }

    private void s() {
        HttpURLConnection httpURLConnection = this.f12928n;
        if (httpURLConnection != null) {
            try {
                httpURLConnection.disconnect();
            } catch (Exception e10) {
                y.d("DefaultHttpDataSource", "Unexpected error while disconnecting", e10);
            }
            this.f12928n = null;
        }
    }

    private URL t(URL url, String str, com.google.android.exoplayer2.upstream.a aVar) {
        if (str != null) {
            try {
                URL url2 = new URL(url, str);
                String protocol = url2.getProtocol();
                if (!"https".equals(protocol) && !"http".equals(protocol)) {
                    throw new g.d("Unsupported protocol redirect: " + protocol, aVar, 2001, 1);
                } else if (!this.f12919e && !protocol.equals(url.getProtocol())) {
                    throw new g.d("Disallowed cross-protocol redirect (" + url.getProtocol() + " to " + protocol + ")", aVar, 2001, 1);
                } else {
                    return url2;
                }
            } catch (MalformedURLException e10) {
                throw new g.d(e10, aVar, 2001, 1);
            }
        }
        throw new g.d("Null location redirect", aVar, 2001, 1);
    }

    private static boolean u(HttpURLConnection httpURLConnection) {
        return "gzip".equalsIgnoreCase(httpURLConnection.getHeaderField("Content-Encoding"));
    }

    private HttpURLConnection v(com.google.android.exoplayer2.upstream.a aVar) {
        HttpURLConnection w10;
        URL url = new URL(aVar.f12943a.toString());
        int i10 = aVar.f12945c;
        byte[] bArr = aVar.f12946d;
        long j10 = aVar.f12949g;
        long j11 = aVar.f12950h;
        int i11 = 1;
        boolean d10 = aVar.d(1);
        if (!this.f12919e && !this.f12925k) {
            return w(url, i10, bArr, j10, j11, d10, true, aVar.f12947e);
        }
        int i12 = 0;
        while (true) {
            int i13 = i12 + 1;
            if (i12 <= 20) {
                w10 = w(url, i10, bArr, j10, j11, d10, false, aVar.f12947e);
                int responseCode = w10.getResponseCode();
                String headerField = w10.getHeaderField("Location");
                if ((i10 != i11 && i10 != 3) || (responseCode != 300 && responseCode != 301 && responseCode != 302 && responseCode != 303 && responseCode != 307 && responseCode != 308)) {
                    if (i10 != 2 || (responseCode != 300 && responseCode != 301 && responseCode != 302 && responseCode != 303)) {
                        break;
                    }
                    w10.disconnect();
                    if (!this.f12925k || responseCode != 302) {
                        bArr = null;
                        i10 = 1;
                    }
                    url = t(url, headerField, aVar);
                } else {
                    w10.disconnect();
                    url = t(url, headerField, aVar);
                }
                i12 = i13;
                i11 = 1;
            } else {
                throw new g.d(new NoRouteToHostException("Too many redirects: " + i13), aVar, 2001, 1);
            }
        }
        return w10;
    }

    private HttpURLConnection w(URL url, int i10, byte[] bArr, long j10, long j11, boolean z10, boolean z11, Map map) {
        String str;
        boolean z12;
        HttpURLConnection y10 = y(url);
        y10.setConnectTimeout(this.f12920f);
        y10.setReadTimeout(this.f12921g);
        HashMap hashMap = new HashMap();
        g.C0160g c0160g = this.f12923i;
        if (c0160g != null) {
            hashMap.putAll(c0160g.b());
        }
        hashMap.putAll(this.f12924j.b());
        hashMap.putAll(map);
        for (Map.Entry entry : hashMap.entrySet()) {
            y10.setRequestProperty((String) entry.getKey(), (String) entry.getValue());
        }
        String a10 = t.a(j10, j11);
        if (a10 != null) {
            y10.setRequestProperty("Range", a10);
        }
        String str2 = this.f12922h;
        if (str2 != null) {
            y10.setRequestProperty("User-Agent", str2);
        }
        if (z10) {
            str = "gzip";
        } else {
            str = InterpolationAnimatedNode.EXTRAPOLATE_TYPE_IDENTITY;
        }
        y10.setRequestProperty("Accept-Encoding", str);
        y10.setInstanceFollowRedirects(z11);
        if (bArr != null) {
            z12 = true;
        } else {
            z12 = false;
        }
        y10.setDoOutput(z12);
        y10.setRequestMethod(com.google.android.exoplayer2.upstream.a.c(i10));
        if (bArr != null) {
            y10.setFixedLengthStreamingMode(bArr.length);
            y10.connect();
            OutputStream outputStream = y10.getOutputStream();
            outputStream.write(bArr);
            outputStream.close();
            return y10;
        }
        y10.connect();
        return y10;
    }

    private static void x(HttpURLConnection httpURLConnection, long j10) {
        int i10;
        if (httpURLConnection != null && (i10 = w0.f40197a) >= 19 && i10 <= 20) {
            try {
                InputStream inputStream = httpURLConnection.getInputStream();
                if (j10 == -1) {
                    if (inputStream.read() == -1) {
                        return;
                    }
                } else if (j10 <= 2048) {
                    return;
                }
                String name = inputStream.getClass().getName();
                if ("com.android.okhttp.internal.http.HttpTransport$ChunkedInputStream".equals(name) || "com.android.okhttp.internal.http.HttpTransport$FixedLengthInputStream".equals(name)) {
                    Method declaredMethod = ((Class) ne.a.e(inputStream.getClass().getSuperclass())).getDeclaredMethod("unexpectedEndOfInput", null);
                    declaredMethod.setAccessible(true);
                    declaredMethod.invoke(inputStream, null);
                }
            } catch (Exception unused) {
            }
        }
    }

    private int z(byte[] bArr, int i10, int i11) {
        if (i11 == 0) {
            return 0;
        }
        long j10 = this.f12932r;
        if (j10 != -1) {
            long j11 = j10 - this.f12933s;
            if (j11 == 0) {
                return -1;
            }
            i11 = (int) Math.min(i11, j11);
        }
        int read = ((InputStream) w0.j(this.f12929o)).read(bArr, i10, i11);
        if (read == -1) {
            return -1;
        }
        this.f12933s += read;
        o(read);
        return read;
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        byte[] bArr;
        m mVar;
        this.f12927m = aVar;
        long j10 = 0;
        this.f12933s = 0L;
        this.f12932r = 0L;
        q(aVar);
        try {
            HttpURLConnection v10 = v(aVar);
            this.f12928n = v10;
            this.f12931q = v10.getResponseCode();
            String responseMessage = v10.getResponseMessage();
            int i10 = this.f12931q;
            long j11 = -1;
            if (i10 >= 200 && i10 <= 299) {
                String contentType = v10.getContentType();
                n nVar = this.f12926l;
                if (nVar != null && !nVar.apply(contentType)) {
                    s();
                    throw new g.e(contentType, aVar);
                }
                if (this.f12931q == 200) {
                    long j12 = aVar.f12949g;
                    if (j12 != 0) {
                        j10 = j12;
                    }
                }
                boolean u10 = u(v10);
                if (!u10) {
                    long j13 = aVar.f12950h;
                    if (j13 != -1) {
                        this.f12932r = j13;
                    } else {
                        long b10 = t.b(v10.getHeaderField("Content-Length"), v10.getHeaderField("Content-Range"));
                        if (b10 != -1) {
                            j11 = b10 - j10;
                        }
                        this.f12932r = j11;
                    }
                } else {
                    this.f12932r = aVar.f12950h;
                }
                try {
                    this.f12929o = v10.getInputStream();
                    if (u10) {
                        this.f12929o = new GZIPInputStream(this.f12929o);
                    }
                    this.f12930p = true;
                    r(aVar);
                    try {
                        A(j10, aVar);
                        return this.f12932r;
                    } catch (IOException e10) {
                        s();
                        if (e10 instanceof g.d) {
                            throw ((g.d) e10);
                        }
                        throw new g.d(e10, aVar, 2000, 1);
                    }
                } catch (IOException e11) {
                    s();
                    throw new g.d(e11, aVar, 2000, 1);
                }
            }
            Map<String, List<String>> headerFields = v10.getHeaderFields();
            if (this.f12931q == 416) {
                if (aVar.f12949g == t.c(v10.getHeaderField("Content-Range"))) {
                    this.f12930p = true;
                    r(aVar);
                    long j14 = aVar.f12950h;
                    if (j14 == -1) {
                        return 0L;
                    }
                    return j14;
                }
            }
            InputStream errorStream = v10.getErrorStream();
            try {
                if (errorStream != null) {
                    bArr = w0.i1(errorStream);
                } else {
                    bArr = w0.f40202f;
                }
            } catch (IOException unused) {
                bArr = w0.f40202f;
            }
            byte[] bArr2 = bArr;
            s();
            if (this.f12931q == 416) {
                mVar = new m(2008);
            } else {
                mVar = null;
            }
            throw new g.f(this.f12931q, responseMessage, mVar, headerFields, aVar, bArr2);
        } catch (IOException e12) {
            s();
            throw g.d.c(e12, aVar, 1);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void close() {
        try {
            InputStream inputStream = this.f12929o;
            if (inputStream != null) {
                long j10 = this.f12932r;
                long j11 = -1;
                if (j10 != -1) {
                    j11 = j10 - this.f12933s;
                }
                x(this.f12928n, j11);
                try {
                    inputStream.close();
                } catch (IOException e10) {
                    throw new g.d(e10, (com.google.android.exoplayer2.upstream.a) w0.j(this.f12927m), 2000, 3);
                }
            }
        } finally {
            this.f12929o = null;
            s();
            if (this.f12930p) {
                this.f12930p = false;
                p();
            }
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Map d() {
        HttpURLConnection httpURLConnection = this.f12928n;
        if (httpURLConnection == null) {
            return ji.t.j();
        }
        return new b(httpURLConnection.getHeaderFields());
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        HttpURLConnection httpURLConnection = this.f12928n;
        if (httpURLConnection == null) {
            return null;
        }
        return Uri.parse(httpURLConnection.getURL().toString());
    }

    @Override // le.j
    public int read(byte[] bArr, int i10, int i11) {
        try {
            return z(bArr, i10, i11);
        } catch (IOException e10) {
            throw g.d.c(e10, (com.google.android.exoplayer2.upstream.a) w0.j(this.f12927m), 2);
        }
    }

    HttpURLConnection y(URL url) {
        return (HttpURLConnection) url.openConnection();
    }

    private DefaultHttpDataSource(String str, int i10, int i11, boolean z10, g.C0160g c0160g, n nVar, boolean z11) {
        super(true);
        this.f12922h = str;
        this.f12920f = i10;
        this.f12921g = i11;
        this.f12919e = z10;
        this.f12923i = c0160g;
        this.f12926l = nVar;
        this.f12924j = new g.C0160g();
        this.f12925k = z11;
    }
}
