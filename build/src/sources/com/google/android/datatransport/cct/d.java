package com.google.android.datatransport.cct;

import ac.f;
import ac.g;
import ac.m;
import android.content.Context;
import android.content.pm.PackageManager;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.os.Build;
import android.telephony.TelephonyManager;
import com.appsflyer.AdRevenueScheme;
import com.facebook.react.views.text.ReactFontManager;
import com.google.android.datatransport.cct.d;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.net.ConnectException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.UnknownHostException;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.TimeZone;
import java.util.zip.GZIPInputStream;
import java.util.zip.GZIPOutputStream;
import yb.j;
import yb.k;
import yb.l;
import yb.m;
import yb.n;
import yb.o;
import yb.p;
import zb.h;
import zb.i;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d implements m {

    /* renamed from: a  reason: collision with root package name */
    private final ui.a f12271a;

    /* renamed from: b  reason: collision with root package name */
    private final ConnectivityManager f12272b;

    /* renamed from: c  reason: collision with root package name */
    private final Context f12273c;

    /* renamed from: d  reason: collision with root package name */
    final URL f12274d;

    /* renamed from: e  reason: collision with root package name */
    private final jc.a f12275e;

    /* renamed from: f  reason: collision with root package name */
    private final jc.a f12276f;

    /* renamed from: g  reason: collision with root package name */
    private final int f12277g;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        final URL f12278a;

        /* renamed from: b  reason: collision with root package name */
        final j f12279b;

        /* renamed from: c  reason: collision with root package name */
        final String f12280c;

        a(URL url, j jVar, String str) {
            this.f12278a = url;
            this.f12279b = jVar;
            this.f12280c = str;
        }

        a a(URL url) {
            return new a(url, this.f12279b, this.f12280c);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        final int f12281a;

        /* renamed from: b  reason: collision with root package name */
        final URL f12282b;

        /* renamed from: c  reason: collision with root package name */
        final long f12283c;

        b(int i10, URL url, long j10) {
            this.f12281a = i10;
            this.f12282b = url;
            this.f12283c = j10;
        }
    }

    d(Context context, jc.a aVar, jc.a aVar2, int i10) {
        this.f12271a = j.b();
        this.f12273c = context;
        this.f12272b = (ConnectivityManager) context.getSystemService("connectivity");
        this.f12274d = m(com.google.android.datatransport.cct.a.f12262c);
        this.f12275e = aVar2;
        this.f12276f = aVar;
        this.f12277g = i10;
    }

    public static /* synthetic */ a d(a aVar, b bVar) {
        URL url = bVar.f12282b;
        if (url != null) {
            dc.a.b("CctTransportBackend", "Following redirect to: %s", url);
            return aVar.a(bVar.f12282b);
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public b e(a aVar) {
        dc.a.f("CctTransportBackend", "Making request to: %s", aVar.f12278a);
        HttpURLConnection httpURLConnection = (HttpURLConnection) aVar.f12278a.openConnection();
        httpURLConnection.setConnectTimeout(30000);
        httpURLConnection.setReadTimeout(this.f12277g);
        httpURLConnection.setDoOutput(true);
        httpURLConnection.setInstanceFollowRedirects(false);
        httpURLConnection.setRequestMethod("POST");
        httpURLConnection.setRequestProperty("User-Agent", String.format("datatransport/%s android/", "3.1.9"));
        httpURLConnection.setRequestProperty("Content-Encoding", "gzip");
        httpURLConnection.setRequestProperty("Content-Type", "application/json");
        httpURLConnection.setRequestProperty("Accept-Encoding", "gzip");
        String str = aVar.f12280c;
        if (str != null) {
            httpURLConnection.setRequestProperty("X-Goog-Api-Key", str);
        }
        try {
            OutputStream outputStream = httpURLConnection.getOutputStream();
            try {
                GZIPOutputStream gZIPOutputStream = new GZIPOutputStream(outputStream);
                this.f12271a.a(aVar.f12279b, new BufferedWriter(new OutputStreamWriter(gZIPOutputStream)));
                gZIPOutputStream.close();
                if (outputStream != null) {
                    outputStream.close();
                }
                int responseCode = httpURLConnection.getResponseCode();
                dc.a.f("CctTransportBackend", "Status Code: %d", Integer.valueOf(responseCode));
                dc.a.b("CctTransportBackend", "Content-Type: %s", httpURLConnection.getHeaderField("Content-Type"));
                dc.a.b("CctTransportBackend", "Content-Encoding: %s", httpURLConnection.getHeaderField("Content-Encoding"));
                if (responseCode != 302 && responseCode != 301 && responseCode != 307) {
                    if (responseCode != 200) {
                        return new b(responseCode, null, 0L);
                    }
                    InputStream inputStream = httpURLConnection.getInputStream();
                    try {
                        InputStream l10 = l(inputStream, httpURLConnection.getHeaderField("Content-Encoding"));
                        b bVar = new b(responseCode, null, n.b(new BufferedReader(new InputStreamReader(l10))).c());
                        if (l10 != null) {
                            l10.close();
                        }
                        if (inputStream != null) {
                            inputStream.close();
                        }
                        return bVar;
                    } catch (Throwable th2) {
                        if (inputStream != null) {
                            try {
                                inputStream.close();
                            } catch (Throwable th3) {
                                th2.addSuppressed(th3);
                            }
                        }
                        throw th2;
                    }
                }
                return new b(responseCode, new URL(httpURLConnection.getHeaderField("Location")), 0L);
            } catch (Throwable th4) {
                if (outputStream != null) {
                    try {
                        outputStream.close();
                    } catch (Throwable th5) {
                        th4.addSuppressed(th5);
                    }
                }
                throw th4;
            }
        } catch (ConnectException e10) {
            e = e10;
            dc.a.d("CctTransportBackend", "Couldn't open connection, returning with 500", e);
            return new b(500, null, 0L);
        } catch (UnknownHostException e11) {
            e = e11;
            dc.a.d("CctTransportBackend", "Couldn't open connection, returning with 500", e);
            return new b(500, null, 0L);
        } catch (IOException e12) {
            e = e12;
            dc.a.d("CctTransportBackend", "Couldn't encode request, returning with 400", e);
            return new b(ReactFontManager.TypefaceStyle.NORMAL, null, 0L);
        } catch (ui.b e13) {
            e = e13;
            dc.a.d("CctTransportBackend", "Couldn't encode request, returning with 400", e);
            return new b(ReactFontManager.TypefaceStyle.NORMAL, null, 0L);
        }
    }

    private static int f(NetworkInfo networkInfo) {
        if (networkInfo == null) {
            return o.b.UNKNOWN_MOBILE_SUBTYPE.d();
        }
        int subtype = networkInfo.getSubtype();
        if (subtype == -1) {
            return o.b.COMBINED.d();
        }
        if (o.b.a(subtype) != null) {
            return subtype;
        }
        return 0;
    }

    private static int g(NetworkInfo networkInfo) {
        if (networkInfo == null) {
            return o.c.NONE.d();
        }
        return networkInfo.getType();
    }

    private static int h(Context context) {
        try {
            return context.getPackageManager().getPackageInfo(context.getPackageName(), 0).versionCode;
        } catch (PackageManager.NameNotFoundException e10) {
            dc.a.d("CctTransportBackend", "Unable to find version code for package", e10);
            return -1;
        }
    }

    private j i(f fVar) {
        l.a j10;
        HashMap hashMap = new HashMap();
        for (i iVar : fVar.b()) {
            String j11 = iVar.j();
            if (!hashMap.containsKey(j11)) {
                ArrayList arrayList = new ArrayList();
                arrayList.add(iVar);
                hashMap.put(j11, arrayList);
            } else {
                ((List) hashMap.get(j11)).add(iVar);
            }
        }
        ArrayList arrayList2 = new ArrayList();
        for (Map.Entry entry : hashMap.entrySet()) {
            i iVar2 = (i) ((List) entry.getValue()).get(0);
            m.a b10 = yb.m.a().f(p.DEFAULT).g(this.f12276f.a()).h(this.f12275e.a()).b(k.a().c(k.b.ANDROID_FIREBASE).b(yb.a.a().m(Integer.valueOf(iVar2.g("sdk-version"))).j(iVar2.b("model")).f(iVar2.b("hardware")).d(iVar2.b("device")).l(iVar2.b("product")).k(iVar2.b("os-uild")).h(iVar2.b("manufacturer")).e(iVar2.b("fingerprint")).c(iVar2.b(AdRevenueScheme.COUNTRY)).g(iVar2.b("locale")).i(iVar2.b("mcc_mnc")).b(iVar2.b("application_build")).a()).a());
            try {
                b10.i(Integer.parseInt((String) entry.getKey()));
            } catch (NumberFormatException unused) {
                b10.j((String) entry.getKey());
            }
            ArrayList arrayList3 = new ArrayList();
            for (i iVar3 : (List) entry.getValue()) {
                h e10 = iVar3.e();
                xb.c b11 = e10.b();
                if (b11.equals(xb.c.b("proto"))) {
                    j10 = l.j(e10.a());
                } else if (b11.equals(xb.c.b("json"))) {
                    j10 = l.i(new String(e10.a(), Charset.forName("UTF-8")));
                } else {
                    dc.a.g("CctTransportBackend", "Received event of unsupported encoding %s. Skipping...", b11);
                }
                j10.c(iVar3.f()).d(iVar3.k()).h(iVar3.h("tz-offset")).e(o.a().c(o.c.a(iVar3.g("net-type"))).b(o.b.a(iVar3.g("mobile-subtype"))).a());
                if (iVar3.d() != null) {
                    j10.b(iVar3.d());
                }
                arrayList3.add(j10.a());
            }
            b10.c(arrayList3);
            arrayList2.add(b10.a());
        }
        return j.a(arrayList2);
    }

    private static TelephonyManager j(Context context) {
        return (TelephonyManager) context.getSystemService("phone");
    }

    static long k() {
        Calendar.getInstance();
        return TimeZone.getDefault().getOffset(Calendar.getInstance().getTimeInMillis()) / 1000;
    }

    private static InputStream l(InputStream inputStream, String str) {
        if ("gzip".equals(str)) {
            return new GZIPInputStream(inputStream);
        }
        return inputStream;
    }

    private static URL m(String str) {
        try {
            return new URL(str);
        } catch (MalformedURLException e10) {
            throw new IllegalArgumentException("Invalid url: " + str, e10);
        }
    }

    @Override // ac.m
    public i a(i iVar) {
        NetworkInfo activeNetworkInfo = this.f12272b.getActiveNetworkInfo();
        return iVar.l().a("sdk-version", Build.VERSION.SDK_INT).c("model", Build.MODEL).c("hardware", Build.HARDWARE).c("device", Build.DEVICE).c("product", Build.PRODUCT).c("os-uild", Build.ID).c("manufacturer", Build.MANUFACTURER).c("fingerprint", Build.FINGERPRINT).b("tz-offset", k()).a("net-type", g(activeNetworkInfo)).a("mobile-subtype", f(activeNetworkInfo)).c(AdRevenueScheme.COUNTRY, Locale.getDefault().getCountry()).c("locale", Locale.getDefault().getLanguage()).c("mcc_mnc", j(this.f12273c).getSimOperator()).c("application_build", Integer.toString(h(this.f12273c))).d();
    }

    @Override // ac.m
    public g b(f fVar) {
        j i10 = i(fVar);
        URL url = this.f12274d;
        String str = null;
        if (fVar.c() != null) {
            try {
                com.google.android.datatransport.cct.a c10 = com.google.android.datatransport.cct.a.c(fVar.c());
                if (c10.d() != null) {
                    str = c10.d();
                }
                if (c10.e() != null) {
                    url = m(c10.e());
                }
            } catch (IllegalArgumentException unused) {
                return g.a();
            }
        }
        try {
            b bVar = (b) ec.b.a(5, new a(url, i10, str), new ec.a() { // from class: com.google.android.datatransport.cct.b
                @Override // ec.a
                public final Object apply(Object obj) {
                    d.b e10;
                    e10 = d.this.e((d.a) obj);
                    return e10;
                }
            }, new ec.c() { // from class: com.google.android.datatransport.cct.c
                @Override // ec.c
                public final Object a(Object obj, Object obj2) {
                    return d.d((d.a) obj, (d.b) obj2);
                }
            });
            int i11 = bVar.f12281a;
            if (i11 == 200) {
                return g.e(bVar.f12283c);
            }
            if (i11 < 500 && i11 != 404) {
                if (i11 == 400) {
                    return g.d();
                }
                return g.a();
            }
            return g.f();
        } catch (IOException e10) {
            dc.a.d("CctTransportBackend", "Could not make request to the backend", e10);
            return g.f();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(Context context, jc.a aVar, jc.a aVar2) {
        this(context, aVar, aVar2, 130000);
    }
}
