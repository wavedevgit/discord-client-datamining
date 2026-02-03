package c6;

import com.android.volley.n;
import java.io.DataOutputStream;
import java.io.FilterInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLSocketFactory;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h extends c6.a {

    /* renamed from: a  reason: collision with root package name */
    private final SSLSocketFactory f8006a;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a extends FilterInputStream {

        /* renamed from: d  reason: collision with root package name */
        private final HttpURLConnection f8007d;

        a(HttpURLConnection httpURLConnection) {
            super(h.j(httpURLConnection));
            this.f8007d = httpURLConnection;
        }

        @Override // java.io.FilterInputStream, java.io.InputStream, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            super.close();
            this.f8007d.disconnect();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface b {
    }

    public h() {
        this(null);
    }

    private void c(HttpURLConnection httpURLConnection, n nVar, byte[] bArr) {
        httpURLConnection.setDoOutput(true);
        if (!httpURLConnection.getRequestProperties().containsKey("Content-Type")) {
            httpURLConnection.setRequestProperty("Content-Type", nVar.getBodyContentType());
        }
        DataOutputStream dataOutputStream = new DataOutputStream(h(nVar, httpURLConnection, bArr.length));
        dataOutputStream.write(bArr);
        dataOutputStream.close();
    }

    private void d(HttpURLConnection httpURLConnection, n nVar) {
        byte[] body = nVar.getBody();
        if (body != null) {
            c(httpURLConnection, nVar, body);
        }
    }

    static List e(Map map) {
        ArrayList arrayList = new ArrayList(map.size());
        for (Map.Entry entry : map.entrySet()) {
            if (entry.getKey() != null) {
                for (String str : (List) entry.getValue()) {
                    arrayList.add(new com.android.volley.g((String) entry.getKey(), str));
                }
            }
        }
        return arrayList;
    }

    private static boolean i(int i10, int i11) {
        if (i10 != 4) {
            if ((100 > i11 || i11 >= 200) && i11 != 204 && i11 != 304) {
                return true;
            }
            return false;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static InputStream j(HttpURLConnection httpURLConnection) {
        try {
            return httpURLConnection.getInputStream();
        } catch (IOException unused) {
            return httpURLConnection.getErrorStream();
        }
    }

    private HttpURLConnection k(URL url, n nVar) {
        SSLSocketFactory sSLSocketFactory;
        HttpURLConnection f10 = f(url);
        int timeoutMs = nVar.getTimeoutMs();
        f10.setConnectTimeout(timeoutMs);
        f10.setReadTimeout(timeoutMs);
        f10.setUseCaches(false);
        f10.setDoInput(true);
        if ("https".equals(url.getProtocol()) && (sSLSocketFactory = this.f8006a) != null) {
            ((HttpsURLConnection) f10).setSSLSocketFactory(sSLSocketFactory);
        }
        return f10;
    }

    @Override // c6.a
    public f a(n nVar, Map map) {
        String url = nVar.getUrl();
        HashMap hashMap = new HashMap();
        hashMap.putAll(map);
        hashMap.putAll(nVar.getHeaders());
        HttpURLConnection k10 = k(new URL(url), nVar);
        try {
            for (String str : hashMap.keySet()) {
                k10.setRequestProperty(str, (String) hashMap.get(str));
            }
            l(k10, nVar);
            int responseCode = k10.getResponseCode();
            if (responseCode != -1) {
                if (!i(nVar.getMethod(), responseCode)) {
                    f fVar = new f(responseCode, e(k10.getHeaderFields()));
                    k10.disconnect();
                    return fVar;
                }
                return new f(responseCode, e(k10.getHeaderFields()), k10.getContentLength(), g(nVar, k10));
            }
            throw new IOException("Could not retrieve response code from HttpUrlConnection.");
        } catch (Throwable th2) {
            if (0 == 0) {
                k10.disconnect();
            }
            throw th2;
        }
    }

    protected HttpURLConnection f(URL url) {
        HttpURLConnection httpURLConnection = (HttpURLConnection) url.openConnection();
        httpURLConnection.setInstanceFollowRedirects(HttpURLConnection.getFollowRedirects());
        return httpURLConnection;
    }

    protected InputStream g(n nVar, HttpURLConnection httpURLConnection) {
        return new a(httpURLConnection);
    }

    protected OutputStream h(n nVar, HttpURLConnection httpURLConnection, int i10) {
        return httpURLConnection.getOutputStream();
    }

    void l(HttpURLConnection httpURLConnection, n nVar) {
        switch (nVar.getMethod()) {
            case -1:
                byte[] postBody = nVar.getPostBody();
                if (postBody != null) {
                    httpURLConnection.setRequestMethod("POST");
                    c(httpURLConnection, nVar, postBody);
                    return;
                }
                return;
            case 0:
                httpURLConnection.setRequestMethod("GET");
                return;
            case 1:
                httpURLConnection.setRequestMethod("POST");
                d(httpURLConnection, nVar);
                return;
            case 2:
                httpURLConnection.setRequestMethod("PUT");
                d(httpURLConnection, nVar);
                return;
            case 3:
                httpURLConnection.setRequestMethod("DELETE");
                return;
            case 4:
                httpURLConnection.setRequestMethod("HEAD");
                return;
            case 5:
                httpURLConnection.setRequestMethod("OPTIONS");
                return;
            case 6:
                httpURLConnection.setRequestMethod("TRACE");
                return;
            case 7:
                httpURLConnection.setRequestMethod("PATCH");
                d(httpURLConnection, nVar);
                return;
            default:
                throw new IllegalStateException("Unknown method type.");
        }
    }

    public h(b bVar) {
        this(bVar, null);
    }

    public h(b bVar, SSLSocketFactory sSLSocketFactory) {
        this.f8006a = sSLSocketFactory;
    }
}
