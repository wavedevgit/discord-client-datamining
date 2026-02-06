package c6;

import android.os.SystemClock;
import com.android.volley.b;
import com.android.volley.l;
import com.android.volley.n;
import com.android.volley.r;
import com.android.volley.s;
import com.android.volley.t;
import com.android.volley.u;
import com.android.volley.v;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.SocketTimeoutException;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class i {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class b {

        /* renamed from: a  reason: collision with root package name */
        private final String f7258a;

        /* renamed from: b  reason: collision with root package name */
        private final u f7259b;

        private b(String str, u uVar) {
            this.f7258a = str;
            this.f7259b = uVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void a(n nVar, b bVar) {
        r retryPolicy = nVar.getRetryPolicy();
        int timeoutMs = nVar.getTimeoutMs();
        try {
            retryPolicy.b(bVar.f7259b);
            nVar.addMarker(String.format("%s-retry [timeout=%s]", bVar.f7258a, Integer.valueOf(timeoutMs)));
        } catch (u e10) {
            nVar.addMarker(String.format("%s-timeout-giveup [timeout=%s]", bVar.f7258a, Integer.valueOf(timeoutMs)));
            throw e10;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static com.android.volley.k b(n nVar, long j10, List list) {
        b.a cacheEntry = nVar.getCacheEntry();
        if (cacheEntry == null) {
            return new com.android.volley.k(304, (byte[]) null, true, j10, list);
        }
        return new com.android.volley.k(304, cacheEntry.f8039a, true, j10, e.a(list, cacheEntry));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static byte[] c(InputStream inputStream, int i10, c cVar) {
        byte[] bArr;
        j jVar = new j(cVar, i10);
        try {
            bArr = cVar.a(IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET);
            while (true) {
                try {
                    int read = inputStream.read(bArr);
                    if (read == -1) {
                        break;
                    }
                    jVar.write(bArr, 0, read);
                } catch (Throwable th2) {
                    th = th2;
                    if (inputStream != null) {
                        try {
                            inputStream.close();
                        } catch (IOException unused) {
                            v.e("Error occurred when closing InputStream", new Object[0]);
                        }
                    }
                    cVar.b(bArr);
                    jVar.close();
                    throw th;
                }
            }
            byte[] byteArray = jVar.toByteArray();
            try {
                inputStream.close();
            } catch (IOException unused2) {
                v.e("Error occurred when closing InputStream", new Object[0]);
            }
            cVar.b(bArr);
            jVar.close();
            return byteArray;
        } catch (Throwable th3) {
            th = th3;
            bArr = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void d(long j10, n nVar, byte[] bArr, int i10) {
        Object obj;
        if (!v.f8105b && j10 <= 3000) {
            return;
        }
        Long valueOf = Long.valueOf(j10);
        if (bArr != null) {
            obj = Integer.valueOf(bArr.length);
        } else {
            obj = "null";
        }
        v.b("HTTP response for request=<%s> [lifetime=%d], [size=%s], [rc=%d], [retryCount=%s]", nVar, valueOf, obj, Integer.valueOf(i10), Integer.valueOf(nVar.getRetryPolicy().a()));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b e(n nVar, IOException iOException, long j10, f fVar, byte[] bArr) {
        if (iOException instanceof SocketTimeoutException) {
            return new b("socket", new t());
        }
        if (!(iOException instanceof MalformedURLException)) {
            if (fVar != null) {
                int d10 = fVar.d();
                v.c("Unexpected response code %d for %s", Integer.valueOf(d10), nVar.getUrl());
                if (bArr != null) {
                    com.android.volley.k kVar = new com.android.volley.k(d10, bArr, false, SystemClock.elapsedRealtime() - j10, fVar.c());
                    if (d10 != 401 && d10 != 403) {
                        if (d10 >= 400 && d10 <= 499) {
                            throw new com.android.volley.d(kVar);
                        }
                        if (d10 >= 500 && d10 <= 599 && nVar.shouldRetryServerErrors()) {
                            return new b("server", new s(kVar));
                        }
                        throw new s(kVar);
                    }
                    return new b("auth", new com.android.volley.a(kVar));
                }
                return new b("network", new com.android.volley.j());
            } else if (nVar.shouldRetryConnectionErrors()) {
                return new b("connection", new l());
            } else {
                throw new l(iOException);
            }
        }
        throw new RuntimeException("Bad URL " + nVar.getUrl(), iOException);
    }
}
