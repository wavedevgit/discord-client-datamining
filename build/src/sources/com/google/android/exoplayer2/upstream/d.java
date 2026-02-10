package com.google.android.exoplayer2.upstream;

import android.net.Uri;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.animated.InterpolationAnimatedNode;
import com.google.android.exoplayer2.upstream.d;
import com.google.android.exoplayer2.upstream.h;
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
import me.c0;
import me.m;
import me.t;
import ni.n;
import oe.w0;
import oe.y;
import oi.q0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d extends me.f implements h {

    /* renamed from: e  reason: collision with root package name */
    private final boolean f13521e;

    /* renamed from: f  reason: collision with root package name */
    private final int f13522f;

    /* renamed from: g  reason: collision with root package name */
    private final int f13523g;

    /* renamed from: h  reason: collision with root package name */
    private final String f13524h;

    /* renamed from: i  reason: collision with root package name */
    private final h.g f13525i;

    /* renamed from: j  reason: collision with root package name */
    private final h.g f13526j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f13527k;

    /* renamed from: l  reason: collision with root package name */
    private n f13528l;

    /* renamed from: m  reason: collision with root package name */
    private com.google.android.exoplayer2.upstream.a f13529m;

    /* renamed from: n  reason: collision with root package name */
    private HttpURLConnection f13530n;

    /* renamed from: o  reason: collision with root package name */
    private InputStream f13531o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f13532p;

    /* renamed from: q  reason: collision with root package name */
    private int f13533q;

    /* renamed from: r  reason: collision with root package name */
    private long f13534r;

    /* renamed from: s  reason: collision with root package name */
    private long f13535s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b implements h.c {

        /* renamed from: b  reason: collision with root package name */
        private c0 f13537b;

        /* renamed from: c  reason: collision with root package name */
        private n f13538c;

        /* renamed from: d  reason: collision with root package name */
        private String f13539d;

        /* renamed from: g  reason: collision with root package name */
        private boolean f13542g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f13543h;

        /* renamed from: a  reason: collision with root package name */
        private final h.g f13536a = new h.g();

        /* renamed from: e  reason: collision with root package name */
        private int f13540e = 8000;

        /* renamed from: f  reason: collision with root package name */
        private int f13541f = 8000;

        @Override // com.google.android.exoplayer2.upstream.h.c, com.google.android.exoplayer2.upstream.DataSource.Factory
        /* renamed from: a */
        public d createDataSource() {
            d dVar = new d(this.f13539d, this.f13540e, this.f13541f, this.f13542g, this.f13536a, this.f13538c, this.f13543h);
            c0 c0Var = this.f13537b;
            if (c0Var != null) {
                dVar.i(c0Var);
            }
            return dVar;
        }

        public b b(String str) {
            this.f13539d = str;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class c extends oi.n {

        /* renamed from: d  reason: collision with root package name */
        private final Map f13544d;

        public c(Map map) {
            this.f13544d = map;
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
        @Override // oi.o
        /* renamed from: b */
        public Map a() {
            return this.f13544d;
        }

        @Override // oi.n, java.util.Map
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

        @Override // oi.n, java.util.Map
        public Set entrySet() {
            return q0.b(super.entrySet(), new n() { // from class: com.google.android.exoplayer2.upstream.f
                @Override // ni.n
                public final boolean apply(Object obj) {
                    return d.c.g((Map.Entry) obj);
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

        @Override // oi.n, java.util.Map
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

        @Override // oi.n, java.util.Map
        public boolean isEmpty() {
            if (super.isEmpty() || (super.size() == 1 && super.containsKey(null))) {
                return true;
            }
            return false;
        }

        @Override // oi.n, java.util.Map
        public Set keySet() {
            return q0.b(super.keySet(), new n() { // from class: com.google.android.exoplayer2.upstream.e
                @Override // ni.n
                public final boolean apply(Object obj) {
                    return d.c.f((String) obj);
                }
            });
        }

        @Override // oi.n, java.util.Map
        public int size() {
            return super.size() - (super.containsKey(null) ? 1 : 0);
        }
    }

    private void A(long j10, com.google.android.exoplayer2.upstream.a aVar) {
        if (j10 != 0) {
            byte[] bArr = new byte[RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT];
            while (j10 > 0) {
                int read = ((InputStream) w0.j(this.f13531o)).read(bArr, 0, (int) Math.min(j10, (long) RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT));
                if (!Thread.currentThread().isInterrupted()) {
                    if (read != -1) {
                        j10 -= read;
                        o(read);
                    } else {
                        throw new h.d(aVar, 2008, 1);
                    }
                } else {
                    throw new h.d(new InterruptedIOException(), aVar, 2000, 1);
                }
            }
        }
    }

    private void s() {
        HttpURLConnection httpURLConnection = this.f13530n;
        if (httpURLConnection != null) {
            try {
                httpURLConnection.disconnect();
            } catch (Exception e10) {
                y.d("DefaultHttpDataSource", "Unexpected error while disconnecting", e10);
            }
            this.f13530n = null;
        }
    }

    private URL t(URL url, String str, com.google.android.exoplayer2.upstream.a aVar) {
        if (str != null) {
            try {
                URL url2 = new URL(url, str);
                String protocol = url2.getProtocol();
                if (!"https".equals(protocol) && !"http".equals(protocol)) {
                    throw new h.d("Unsupported protocol redirect: " + protocol, aVar, 2001, 1);
                } else if (!this.f13521e && !protocol.equals(url.getProtocol())) {
                    throw new h.d("Disallowed cross-protocol redirect (" + url.getProtocol() + " to " + protocol + ")", aVar, 2001, 1);
                } else {
                    return url2;
                }
            } catch (MalformedURLException e10) {
                throw new h.d(e10, aVar, 2001, 1);
            }
        }
        throw new h.d("Null location redirect", aVar, 2001, 1);
    }

    private static boolean u(HttpURLConnection httpURLConnection) {
        return "gzip".equalsIgnoreCase(httpURLConnection.getHeaderField("Content-Encoding"));
    }

    private HttpURLConnection v(com.google.android.exoplayer2.upstream.a aVar) {
        HttpURLConnection w10;
        URL url = new URL(aVar.f13405a.toString());
        int i10 = aVar.f13407c;
        byte[] bArr = aVar.f13408d;
        long j10 = aVar.f13411g;
        long j11 = aVar.f13412h;
        int i11 = 1;
        boolean d10 = aVar.d(1);
        if (!this.f13521e && !this.f13527k) {
            return w(url, i10, bArr, j10, j11, d10, true, aVar.f13409e);
        }
        int i12 = 0;
        while (true) {
            int i13 = i12 + 1;
            if (i12 <= 20) {
                w10 = w(url, i10, bArr, j10, j11, d10, false, aVar.f13409e);
                int responseCode = w10.getResponseCode();
                String headerField = w10.getHeaderField("Location");
                if ((i10 != i11 && i10 != 3) || (responseCode != 300 && responseCode != 301 && responseCode != 302 && responseCode != 303 && responseCode != 307 && responseCode != 308)) {
                    if (i10 != 2 || (responseCode != 300 && responseCode != 301 && responseCode != 302 && responseCode != 303)) {
                        break;
                    }
                    w10.disconnect();
                    if (!this.f13527k || responseCode != 302) {
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
                throw new h.d(new NoRouteToHostException("Too many redirects: " + i13), aVar, 2001, 1);
            }
        }
        return w10;
    }

    private HttpURLConnection w(URL url, int i10, byte[] bArr, long j10, long j11, boolean z10, boolean z11, Map map) {
        String str;
        boolean z12;
        HttpURLConnection y10 = y(url);
        y10.setConnectTimeout(this.f13522f);
        y10.setReadTimeout(this.f13523g);
        HashMap hashMap = new HashMap();
        h.g gVar = this.f13525i;
        if (gVar != null) {
            hashMap.putAll(gVar.b());
        }
        hashMap.putAll(this.f13526j.b());
        hashMap.putAll(map);
        for (Map.Entry entry : hashMap.entrySet()) {
            y10.setRequestProperty((String) entry.getKey(), (String) entry.getValue());
        }
        String a10 = t.a(j10, j11);
        if (a10 != null) {
            y10.setRequestProperty("Range", a10);
        }
        String str2 = this.f13524h;
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
        if (httpURLConnection != null && (i10 = w0.f40711a) >= 19 && i10 <= 20) {
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
                    Method declaredMethod = ((Class) oe.a.e(inputStream.getClass().getSuperclass())).getDeclaredMethod("unexpectedEndOfInput", null);
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
        long j10 = this.f13534r;
        if (j10 != -1) {
            long j11 = j10 - this.f13535s;
            if (j11 == 0) {
                return -1;
            }
            i11 = (int) Math.min(i11, j11);
        }
        int read = ((InputStream) w0.j(this.f13531o)).read(bArr, i10, i11);
        if (read == -1) {
            return -1;
        }
        this.f13535s += read;
        o(read);
        return read;
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        byte[] bArr;
        m mVar;
        this.f13529m = aVar;
        long j10 = 0;
        this.f13535s = 0L;
        this.f13534r = 0L;
        q(aVar);
        try {
            HttpURLConnection v10 = v(aVar);
            this.f13530n = v10;
            this.f13533q = v10.getResponseCode();
            String responseMessage = v10.getResponseMessage();
            int i10 = this.f13533q;
            long j11 = -1;
            if (i10 >= 200 && i10 <= 299) {
                String contentType = v10.getContentType();
                n nVar = this.f13528l;
                if (nVar != null && !nVar.apply(contentType)) {
                    s();
                    throw new h.e(contentType, aVar);
                }
                if (this.f13533q == 200) {
                    long j12 = aVar.f13411g;
                    if (j12 != 0) {
                        j10 = j12;
                    }
                }
                boolean u10 = u(v10);
                if (!u10) {
                    long j13 = aVar.f13412h;
                    if (j13 != -1) {
                        this.f13534r = j13;
                    } else {
                        long b10 = t.b(v10.getHeaderField("Content-Length"), v10.getHeaderField("Content-Range"));
                        if (b10 != -1) {
                            j11 = b10 - j10;
                        }
                        this.f13534r = j11;
                    }
                } else {
                    this.f13534r = aVar.f13412h;
                }
                try {
                    this.f13531o = v10.getInputStream();
                    if (u10) {
                        this.f13531o = new GZIPInputStream(this.f13531o);
                    }
                    this.f13532p = true;
                    r(aVar);
                    try {
                        A(j10, aVar);
                        return this.f13534r;
                    } catch (IOException e10) {
                        s();
                        if (e10 instanceof h.d) {
                            throw ((h.d) e10);
                        }
                        throw new h.d(e10, aVar, 2000, 1);
                    }
                } catch (IOException e11) {
                    s();
                    throw new h.d(e11, aVar, 2000, 1);
                }
            }
            Map<String, List<String>> headerFields = v10.getHeaderFields();
            if (this.f13533q == 416) {
                if (aVar.f13411g == t.c(v10.getHeaderField("Content-Range"))) {
                    this.f13532p = true;
                    r(aVar);
                    long j14 = aVar.f13412h;
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
                    bArr = w0.f40716f;
                }
            } catch (IOException unused) {
                bArr = w0.f40716f;
            }
            byte[] bArr2 = bArr;
            s();
            if (this.f13533q == 416) {
                mVar = new m(2008);
            } else {
                mVar = null;
            }
            throw new h.f(this.f13533q, responseMessage, mVar, headerFields, aVar, bArr2);
        } catch (IOException e12) {
            s();
            throw h.d.c(e12, aVar, 1);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void close() {
        try {
            InputStream inputStream = this.f13531o;
            if (inputStream != null) {
                long j10 = this.f13534r;
                long j11 = -1;
                if (j10 != -1) {
                    j11 = j10 - this.f13535s;
                }
                x(this.f13530n, j11);
                try {
                    inputStream.close();
                } catch (IOException e10) {
                    throw new h.d(e10, (com.google.android.exoplayer2.upstream.a) w0.j(this.f13529m), 2000, 3);
                }
            }
        } finally {
            this.f13531o = null;
            s();
            if (this.f13532p) {
                this.f13532p = false;
                p();
            }
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Map d() {
        HttpURLConnection httpURLConnection = this.f13530n;
        if (httpURLConnection == null) {
            return oi.t.j();
        }
        return new c(httpURLConnection.getHeaderFields());
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        HttpURLConnection httpURLConnection = this.f13530n;
        if (httpURLConnection == null) {
            return null;
        }
        return Uri.parse(httpURLConnection.getURL().toString());
    }

    @Override // me.j
    public int read(byte[] bArr, int i10, int i11) {
        try {
            return z(bArr, i10, i11);
        } catch (IOException e10) {
            throw h.d.c(e10, (com.google.android.exoplayer2.upstream.a) w0.j(this.f13529m), 2);
        }
    }

    HttpURLConnection y(URL url) {
        return (HttpURLConnection) url.openConnection();
    }

    private d(String str, int i10, int i11, boolean z10, h.g gVar, n nVar, boolean z11) {
        super(true);
        this.f13524h = str;
        this.f13522f = i10;
        this.f13523g = i11;
        this.f13521e = z10;
        this.f13525i = gVar;
        this.f13528l = nVar;
        this.f13526j = new h.g();
        this.f13527k = z11;
    }
}
