package com.facebook.imagepipeline.producers;

import android.net.Uri;
import com.facebook.common.time.RealtimeSinceBootClock;
import com.facebook.imagepipeline.producers.NetworkFetcher;
import com.facebook.react.views.image.ReactImageView;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b0 extends d {

    /* renamed from: a  reason: collision with root package name */
    private int f11322a;

    /* renamed from: b  reason: collision with root package name */
    private String f11323b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f11324c;

    /* renamed from: d  reason: collision with root package name */
    private final ExecutorService f11325d;

    /* renamed from: e  reason: collision with root package name */
    private final v8.b f11326e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ c f11327d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ NetworkFetcher.Callback f11328e;

        a(c cVar, NetworkFetcher.Callback callback) {
            this.f11327d = cVar;
            this.f11328e = callback;
        }

        @Override // java.lang.Runnable
        public void run() {
            b0.this.e(this.f11327d, this.f11328e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b extends f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Future f11330a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ NetworkFetcher.Callback f11331b;

        b(Future future, NetworkFetcher.Callback callback) {
            this.f11330a = future;
            this.f11331b = callback;
        }

        @Override // com.facebook.imagepipeline.producers.x0
        public void b() {
            if (this.f11330a.cancel(false)) {
                this.f11331b.a();
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class c extends FetchState {

        /* renamed from: f  reason: collision with root package name */
        private long f11333f;

        /* renamed from: g  reason: collision with root package name */
        private long f11334g;

        /* renamed from: h  reason: collision with root package name */
        private long f11335h;

        public c(Consumer consumer, ProducerContext producerContext) {
            super(consumer, producerContext);
        }
    }

    public b0(int i10) {
        this(null, null, RealtimeSinceBootClock.get());
        this.f11322a = i10;
    }

    private HttpURLConnection b(Uri uri, int i10) {
        Uri parse;
        String c10;
        HttpURLConnection j10 = j(uri);
        String str = this.f11323b;
        if (str != null) {
            j10.setRequestProperty("User-Agent", str);
        }
        Map map = this.f11324c;
        if (map != null) {
            for (Map.Entry entry : map.entrySet()) {
                j10.setRequestProperty((String) entry.getKey(), (String) entry.getValue());
            }
        }
        j10.setConnectTimeout(this.f11322a);
        int responseCode = j10.getResponseCode();
        if (h(responseCode)) {
            return j10;
        }
        if (g(responseCode)) {
            String headerField = j10.getHeaderField("Location");
            j10.disconnect();
            if (headerField == null) {
                parse = null;
            } else {
                parse = Uri.parse(headerField);
            }
            String scheme = uri.getScheme();
            if (i10 > 0 && parse != null && !o8.h.a(parse.getScheme(), scheme)) {
                return b(parse, i10 - 1);
            }
            if (i10 == 0) {
                c10 = c("URL %s follows too many redirects", uri.toString());
            } else {
                c10 = c("URL %s returned %d without a valid redirect", uri.toString(), Integer.valueOf(responseCode));
            }
            throw new IOException(c10);
        }
        j10.disconnect();
        throw new IOException(String.format("Image URL %s returned HTTP code %d", uri.toString(), Integer.valueOf(responseCode)));
    }

    private static String c(String str, Object... objArr) {
        return String.format(Locale.getDefault(), str, objArr);
    }

    private static boolean g(int i10) {
        if (i10 == 307 || i10 == 308) {
            return true;
        }
        switch (i10) {
            case ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS /* 300 */:
            case 301:
            case 302:
            case 303:
                return true;
            default:
                return false;
        }
    }

    private static boolean h(int i10) {
        return i10 >= 200 && i10 < 300;
    }

    static HttpURLConnection j(Uri uri) {
        return (HttpURLConnection) w8.f.s(uri).openConnection();
    }

    @Override // com.facebook.imagepipeline.producers.NetworkFetcher
    /* renamed from: a */
    public c createFetchState(Consumer consumer, ProducerContext producerContext) {
        return new c(consumer, producerContext);
    }

    @Override // com.facebook.imagepipeline.producers.NetworkFetcher
    /* renamed from: d */
    public void fetch(c cVar, NetworkFetcher.Callback callback) {
        cVar.f11333f = this.f11326e.now();
        cVar.b().h(new b(this.f11325d.submit(new a(cVar, callback)), callback));
    }

    /* JADX WARN: Removed duplicated region for block: B:29:0x0045  */
    /* JADX WARN: Removed duplicated region for block: B:38:0x0040 A[EXC_TOP_SPLITTER, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    void e(com.facebook.imagepipeline.producers.b0.c r5, com.facebook.imagepipeline.producers.NetworkFetcher.Callback r6) {
        /*
            r4 = this;
            r0 = 0
            android.net.Uri r1 = r5.g()     // Catch: java.lang.Throwable -> L2d java.io.IOException -> L30
            r2 = 5
            java.net.HttpURLConnection r1 = r4.b(r1, r2)     // Catch: java.lang.Throwable -> L2d java.io.IOException -> L30
            v8.b r2 = r4.f11326e     // Catch: java.lang.Throwable -> L1e java.io.IOException -> L20
            long r2 = r2.now()     // Catch: java.lang.Throwable -> L1e java.io.IOException -> L20
            com.facebook.imagepipeline.producers.b0.c.o(r5, r2)     // Catch: java.lang.Throwable -> L1e java.io.IOException -> L20
            if (r1 == 0) goto L22
            java.io.InputStream r0 = r1.getInputStream()     // Catch: java.lang.Throwable -> L1e java.io.IOException -> L20
            r5 = -1
            r6.b(r0, r5)     // Catch: java.lang.Throwable -> L1e java.io.IOException -> L20
            goto L22
        L1e:
            r5 = move-exception
            goto L3e
        L20:
            r5 = move-exception
            goto L32
        L22:
            if (r0 == 0) goto L27
            r0.close()     // Catch: java.io.IOException -> L27
        L27:
            if (r1 == 0) goto L3d
        L29:
            r1.disconnect()
            goto L3d
        L2d:
            r5 = move-exception
            r1 = r0
            goto L3e
        L30:
            r5 = move-exception
            r1 = r0
        L32:
            r6.onFailure(r5)     // Catch: java.lang.Throwable -> L1e
            if (r0 == 0) goto L3a
            r0.close()     // Catch: java.io.IOException -> L3a
        L3a:
            if (r1 == 0) goto L3d
            goto L29
        L3d:
            return
        L3e:
            if (r0 == 0) goto L43
            r0.close()     // Catch: java.io.IOException -> L43
        L43:
            if (r1 == 0) goto L48
            r1.disconnect()
        L48:
            throw r5
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.imagepipeline.producers.b0.e(com.facebook.imagepipeline.producers.b0$c, com.facebook.imagepipeline.producers.NetworkFetcher$Callback):void");
    }

    @Override // com.facebook.imagepipeline.producers.NetworkFetcher
    /* renamed from: f */
    public Map getExtraMap(c cVar, int i10) {
        HashMap hashMap = new HashMap(4);
        hashMap.put("queue_time", Long.toString(cVar.f11334g - cVar.f11333f));
        hashMap.put("fetch_time", Long.toString(cVar.f11335h - cVar.f11334g));
        hashMap.put("total_time", Long.toString(cVar.f11335h - cVar.f11333f));
        hashMap.put("image_size", Integer.toString(i10));
        return hashMap;
    }

    @Override // com.facebook.imagepipeline.producers.NetworkFetcher
    /* renamed from: i */
    public void onFetchCompletion(c cVar, int i10) {
        cVar.f11335h = this.f11326e.now();
    }

    b0(String str, Map map, v8.b bVar) {
        this.f11325d = Executors.newFixedThreadPool(3);
        this.f11326e = bVar;
        this.f11324c = map;
        this.f11323b = str;
    }
}
