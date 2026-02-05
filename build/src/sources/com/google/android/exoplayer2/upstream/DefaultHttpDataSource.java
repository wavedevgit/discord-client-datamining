package com.google.android.exoplayer2.upstream;

import android.net.Uri;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.animated.InterpolationAnimatedNode;
import com.google.android.exoplayer2.upstream.DefaultHttpDataSource;
import com.google.android.exoplayer2.upstream.g;
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
import le.c0;
import le.m;
import le.t;
import li.n;
import mi.q0;
import ne.w0;
import ne.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class DefaultHttpDataSource extends le.f implements g {

    /* renamed from: e  reason: collision with root package name */
    private final boolean f13304e;

    /* renamed from: f  reason: collision with root package name */
    private final int f13305f;

    /* renamed from: g  reason: collision with root package name */
    private final int f13306g;

    /* renamed from: h  reason: collision with root package name */
    private final String f13307h;

    /* renamed from: i  reason: collision with root package name */
    private final g.C0176g f13308i;

    /* renamed from: j  reason: collision with root package name */
    private final g.C0176g f13309j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f13310k;

    /* renamed from: l  reason: collision with root package name */
    private n f13311l;

    /* renamed from: m  reason: collision with root package name */
    private com.google.android.exoplayer2.upstream.a f13312m;

    /* renamed from: n  reason: collision with root package name */
    private HttpURLConnection f13313n;

    /* renamed from: o  reason: collision with root package name */
    private InputStream f13314o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f13315p;

    /* renamed from: q  reason: collision with root package name */
    private int f13316q;

    /* renamed from: r  reason: collision with root package name */
    private long f13317r;

    /* renamed from: s  reason: collision with root package name */
    private long f13318s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Factory implements g.c {

        /* renamed from: b  reason: collision with root package name */
        private c0 f13320b;

        /* renamed from: c  reason: collision with root package name */
        private n f13321c;

        /* renamed from: d  reason: collision with root package name */
        private String f13322d;

        /* renamed from: g  reason: collision with root package name */
        private boolean f13325g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f13326h;

        /* renamed from: a  reason: collision with root package name */
        private final g.C0176g f13319a = new g.C0176g();

        /* renamed from: e  reason: collision with root package name */
        private int f13323e = 8000;

        /* renamed from: f  reason: collision with root package name */
        private int f13324f = 8000;

        @Override // com.google.android.exoplayer2.upstream.DataSource.Factory
        /* renamed from: a */
        public DefaultHttpDataSource createDataSource() {
            DefaultHttpDataSource defaultHttpDataSource = new DefaultHttpDataSource(this.f13322d, this.f13323e, this.f13324f, this.f13325g, this.f13319a, this.f13321c, this.f13326h);
            c0 c0Var = this.f13320b;
            if (c0Var != null) {
                defaultHttpDataSource.j(c0Var);
            }
            return defaultHttpDataSource;
        }

        public Factory b(String str) {
            this.f13322d = str;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class b extends mi.n {

        /* renamed from: d  reason: collision with root package name */
        private final Map f13327d;

        public b(Map map) {
            this.f13327d = map;
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
        @Override // mi.o
        /* renamed from: b */
        public Map a() {
            return this.f13327d;
        }

        @Override // mi.n, java.util.Map
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

        @Override // mi.n, java.util.Map
        public Set entrySet() {
            return q0.b(super.entrySet(), new n() { // from class: com.google.android.exoplayer2.upstream.e
                @Override // li.n
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

        @Override // mi.n, java.util.Map
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

        @Override // mi.n, java.util.Map
        public boolean isEmpty() {
            if (super.isEmpty() || (super.size() == 1 && super.containsKey(null))) {
                return true;
            }
            return false;
        }

        @Override // mi.n, java.util.Map
        public Set keySet() {
            return q0.b(super.keySet(), new n() { // from class: com.google.android.exoplayer2.upstream.d
                @Override // li.n
                public final boolean apply(Object obj) {
                    return DefaultHttpDataSource.b.f((String) obj);
                }
            });
        }

        @Override // mi.n, java.util.Map
        public int size() {
            return super.size() - (super.containsKey(null) ? 1 : 0);
        }
    }

    private void A(long j10, com.google.android.exoplayer2.upstream.a aVar) {
        if (j10 != 0) {
            byte[] bArr = new byte[RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT];
            while (j10 > 0) {
                int read = ((InputStream) w0.j(this.f13314o)).read(bArr, 0, (int) Math.min(j10, (long) RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT));
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
        HttpURLConnection httpURLConnection = this.f13313n;
        if (httpURLConnection != null) {
            try {
                httpURLConnection.disconnect();
            } catch (Exception e10) {
                y.d("DefaultHttpDataSource", "Unexpected error while disconnecting", e10);
            }
            this.f13313n = null;
        }
    }

    private URL t(URL url, String str, com.google.android.exoplayer2.upstream.a aVar) {
        if (str != null) {
            try {
                URL url2 = new URL(url, str);
                String protocol = url2.getProtocol();
                if (!"https".equals(protocol) && !"http".equals(protocol)) {
                    throw new g.d("Unsupported protocol redirect: " + protocol, aVar, 2001, 1);
                } else if (!this.f13304e && !protocol.equals(url.getProtocol())) {
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
        URL url = new URL(aVar.f13328a.toString());
        int i10 = aVar.f13330c;
        byte[] bArr = aVar.f13331d;
        long j10 = aVar.f13334g;
        long j11 = aVar.f13335h;
        int i11 = 1;
        boolean d10 = aVar.d(1);
        if (!this.f13304e && !this.f13310k) {
            return w(url, i10, bArr, j10, j11, d10, true, aVar.f13332e);
        }
        int i12 = 0;
        while (true) {
            int i13 = i12 + 1;
            if (i12 <= 20) {
                w10 = w(url, i10, bArr, j10, j11, d10, false, aVar.f13332e);
                int responseCode = w10.getResponseCode();
                String headerField = w10.getHeaderField("Location");
                if ((i10 != i11 && i10 != 3) || (responseCode != 300 && responseCode != 301 && responseCode != 302 && responseCode != 303 && responseCode != 307 && responseCode != 308)) {
                    if (i10 != 2 || (responseCode != 300 && responseCode != 301 && responseCode != 302 && responseCode != 303)) {
                        break;
                    }
                    w10.disconnect();
                    if (!this.f13310k || responseCode != 302) {
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
        y10.setConnectTimeout(this.f13305f);
        y10.setReadTimeout(this.f13306g);
        HashMap hashMap = new HashMap();
        g.C0176g c0176g = this.f13308i;
        if (c0176g != null) {
            hashMap.putAll(c0176g.b());
        }
        hashMap.putAll(this.f13309j.b());
        hashMap.putAll(map);
        for (Map.Entry entry : hashMap.entrySet()) {
            y10.setRequestProperty((String) entry.getKey(), (String) entry.getValue());
        }
        String a10 = t.a(j10, j11);
        if (a10 != null) {
            y10.setRequestProperty("Range", a10);
        }
        String str2 = this.f13307h;
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
        if (httpURLConnection != null && (i10 = w0.f39657a) >= 19 && i10 <= 20) {
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
        long j10 = this.f13317r;
        if (j10 != -1) {
            long j11 = j10 - this.f13318s;
            if (j11 == 0) {
                return -1;
            }
            i11 = (int) Math.min(i11, j11);
        }
        int read = ((InputStream) w0.j(this.f13314o)).read(bArr, i10, i11);
        if (read == -1) {
            return -1;
        }
        this.f13318s += read;
        o(read);
        return read;
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        byte[] bArr;
        m mVar;
        this.f13312m = aVar;
        long j10 = 0;
        this.f13318s = 0L;
        this.f13317r = 0L;
        q(aVar);
        try {
            HttpURLConnection v10 = v(aVar);
            this.f13313n = v10;
            this.f13316q = v10.getResponseCode();
            String responseMessage = v10.getResponseMessage();
            int i10 = this.f13316q;
            long j11 = -1;
            if (i10 >= 200 && i10 <= 299) {
                String contentType = v10.getContentType();
                n nVar = this.f13311l;
                if (nVar != null && !nVar.apply(contentType)) {
                    s();
                    throw new g.e(contentType, aVar);
                }
                if (this.f13316q == 200) {
                    long j12 = aVar.f13334g;
                    if (j12 != 0) {
                        j10 = j12;
                    }
                }
                boolean u10 = u(v10);
                if (!u10) {
                    long j13 = aVar.f13335h;
                    if (j13 != -1) {
                        this.f13317r = j13;
                    } else {
                        long b10 = t.b(v10.getHeaderField("Content-Length"), v10.getHeaderField("Content-Range"));
                        if (b10 != -1) {
                            j11 = b10 - j10;
                        }
                        this.f13317r = j11;
                    }
                } else {
                    this.f13317r = aVar.f13335h;
                }
                try {
                    this.f13314o = v10.getInputStream();
                    if (u10) {
                        this.f13314o = new GZIPInputStream(this.f13314o);
                    }
                    this.f13315p = true;
                    r(aVar);
                    try {
                        A(j10, aVar);
                        return this.f13317r;
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
            if (this.f13316q == 416) {
                if (aVar.f13334g == t.c(v10.getHeaderField("Content-Range"))) {
                    this.f13315p = true;
                    r(aVar);
                    long j14 = aVar.f13335h;
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
                    bArr = w0.f39662f;
                }
            } catch (IOException unused) {
                bArr = w0.f39662f;
            }
            byte[] bArr2 = bArr;
            s();
            if (this.f13316q == 416) {
                mVar = new m(2008);
            } else {
                mVar = null;
            }
            throw new g.f(this.f13316q, responseMessage, mVar, headerFields, aVar, bArr2);
        } catch (IOException e12) {
            s();
            throw g.d.c(e12, aVar, 1);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void close() {
        try {
            InputStream inputStream = this.f13314o;
            if (inputStream != null) {
                long j10 = this.f13317r;
                long j11 = -1;
                if (j10 != -1) {
                    j11 = j10 - this.f13318s;
                }
                x(this.f13313n, j11);
                try {
                    inputStream.close();
                } catch (IOException e10) {
                    throw new g.d(e10, (com.google.android.exoplayer2.upstream.a) w0.j(this.f13312m), 2000, 3);
                }
            }
        } finally {
            this.f13314o = null;
            s();
            if (this.f13315p) {
                this.f13315p = false;
                p();
            }
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Map d() {
        HttpURLConnection httpURLConnection = this.f13313n;
        if (httpURLConnection == null) {
            return mi.t.j();
        }
        return new b(httpURLConnection.getHeaderFields());
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        HttpURLConnection httpURLConnection = this.f13313n;
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
            throw g.d.c(e10, (com.google.android.exoplayer2.upstream.a) w0.j(this.f13312m), 2);
        }
    }

    HttpURLConnection y(URL url) {
        return (HttpURLConnection) url.openConnection();
    }

    private DefaultHttpDataSource(String str, int i10, int i11, boolean z10, g.C0176g c0176g, n nVar, boolean z11) {
        super(true);
        this.f13307h = str;
        this.f13305f = i10;
        this.f13306g = i11;
        this.f13304e = z10;
        this.f13308i = c0176g;
        this.f13311l = nVar;
        this.f13309j = new g.C0176g();
        this.f13310k = z11;
    }
}
