package io.sentry.react;

import android.app.Activity;
import android.content.Context;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.util.Base64;
import android.util.SparseIntArray;
import androidx.core.app.FrameMetricsAggregator;
import androidx.fragment.app.FragmentActivity;
import androidx.fragment.app.FragmentManager;
import com.discord.notifications.renderer.NotificationRenderer;
import com.facebook.hermes.instrumentation.HermesSamplingProfiler;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapKeySetIterator;
import com.facebook.react.bridge.ReadableType;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.common.JavascriptException;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import com.reactnativecommunity.clipboard.ClipboardModule;
import io.sentry.Breadcrumb;
import io.sentry.Hint;
import io.sentry.ILogger;
import io.sentry.IScope;
import io.sentry.SentryEvent;
import io.sentry.SentryLevel;
import io.sentry.UncaughtExceptionHandlerIntegration;
import io.sentry.android.core.AnrIntegration;
import io.sentry.android.core.NdkIntegration;
import io.sentry.android.core.SentryAndroidOptions;
import io.sentry.android.core.ViewHierarchyEventProcessor;
import io.sentry.android.core.f1;
import io.sentry.android.core.i0;
import io.sentry.android.core.internal.util.c0;
import io.sentry.android.core.k2;
import io.sentry.android.core.l2;
import io.sentry.android.core.w1;
import io.sentry.android.core.x0;
import io.sentry.android.core.z;
import io.sentry.b4;
import io.sentry.b5;
import io.sentry.k1;
import io.sentry.k5;
import io.sentry.k7;
import io.sentry.l4;
import io.sentry.m7;
import io.sentry.n4;
import io.sentry.protocol.h0;
import io.sentry.protocol.x;
import io.sentry.protocol.y;
import io.sentry.q6;
import io.sentry.z0;
import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.net.URISyntaxException;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Properties;
import java.util.Set;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;
import java.util.regex.Pattern;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class n {

    /* renamed from: o  reason: collision with root package name */
    private static final ILogger f30587o;

    /* renamed from: p  reason: collision with root package name */
    private static final x0 f30588p;

    /* renamed from: q  reason: collision with root package name */
    private static final Charset f30589q;

    /* renamed from: r  reason: collision with root package name */
    static long f30590r;

    /* renamed from: a  reason: collision with root package name */
    private final ReactApplicationContext f30591a;

    /* renamed from: b  reason: collision with root package name */
    private final PackageInfo f30592b;

    /* renamed from: d  reason: collision with root package name */
    private boolean f30594d;

    /* renamed from: c  reason: collision with root package name */
    private FrameMetricsAggregator f30593c = null;

    /* renamed from: e  reason: collision with root package name */
    private int f30595e = 101;

    /* renamed from: f  reason: collision with root package name */
    private i0 f30596f = null;

    /* renamed from: g  reason: collision with root package name */
    private boolean f30597g = false;

    /* renamed from: h  reason: collision with root package name */
    private String f30598h = null;

    /* renamed from: i  reason: collision with root package name */
    private String f30599i = null;

    /* renamed from: j  reason: collision with root package name */
    private z0 f30600j = null;

    /* renamed from: l  reason: collision with root package name */
    private long f30602l = 5242880;

    /* renamed from: k  reason: collision with root package name */
    private final Runnable f30601k = w();

    /* renamed from: m  reason: collision with root package name */
    private final k5 f30603m = new l2();

    /* renamed from: n  reason: collision with root package name */
    private final io.sentry.util.u f30604n = new io.sentry.util.u();

    static {
        z zVar = new z(NativeRNSentrySpec.NAME);
        f30587o = zVar;
        f30588p = new x0(zVar);
        f30589q = Charset.forName("UTF-8");
        f30590r = -1L;
    }

    public n(ReactApplicationContext reactApplicationContext) {
        this.f30592b = R(reactApplicationContext);
        this.f30591a = reactApplicationContext;
    }

    private Activity N() {
        return this.f30591a.getCurrentActivity();
    }

    private static PackageInfo R(Context context) {
        try {
            return context.getPackageManager().getPackageInfo(context.getPackageName(), 0);
        } catch (PackageManager.NameNotFoundException unused) {
            f30587o.c(SentryLevel.WARNING, "Error getting package info.", new Object[0]);
            return null;
        }
    }

    private String S() {
        if (this.f30599i == null) {
            this.f30599i = new File(U().getCacheDir(), "sentry/react").getAbsolutePath();
        }
        File file = new File(this.f30599i, "profiling_trace");
        file.mkdirs();
        return file.getAbsolutePath();
    }

    private String T() {
        if (this.f30597g) {
            return this.f30598h;
        }
        this.f30597g = true;
        List<Properties> a10 = new io.sentry.android.core.internal.debugmeta.a(U(), f30587o).a();
        if (a10 == null) {
            return null;
        }
        for (Properties properties : a10) {
            String m10 = io.sentry.util.d.m(properties);
            this.f30598h = m10;
            if (m10 != null) {
                ILogger iLogger = f30587o;
                SentryLevel sentryLevel = SentryLevel.INFO;
                iLogger.c(sentryLevel, "Proguard uuid found: " + this.f30598h, new Object[0]);
                return this.f30598h;
            }
        }
        f30587o.c(SentryLevel.WARNING, "No proguard uuid found in debug meta properties file!", new Object[0]);
        return null;
    }

    private ReactApplicationContext U() {
        return this.f30591a;
    }

    private m7 V(ReadableMap readableMap) {
        Double d10;
        ReadableMap map;
        boolean z10;
        boolean z11 = false;
        m7 m7Var = new m7(false, new io.sentry.protocol.r("sentry.javascript.react-native", "7.7.0"));
        if (readableMap.hasKey("replaysSessionSampleRate") || readableMap.hasKey("replaysOnErrorSampleRate")) {
            Double d11 = null;
            if (readableMap.hasKey("replaysSessionSampleRate")) {
                d10 = Double.valueOf(readableMap.getDouble("replaysSessionSampleRate"));
            } else {
                d10 = null;
            }
            m7Var.N(d10);
            if (readableMap.hasKey("replaysOnErrorSampleRate")) {
                d11 = Double.valueOf(readableMap.getDouble("replaysOnErrorSampleRate"));
            }
            m7Var.J(d11);
            if (readableMap.hasKey("replaysSessionQuality")) {
                m7Var.K(i0(readableMap.getString("replaysSessionQuality")));
            }
            if (readableMap.hasKey("mobileReplayOptions") && (map = readableMap.getMap("mobileReplayOptions")) != null) {
                if (map.hasKey("maskAllText") && !map.getBoolean("maskAllText")) {
                    z10 = false;
                } else {
                    z10 = true;
                }
                m7Var.C(z10);
                if (!map.hasKey("maskAllImages") || map.getBoolean("maskAllImages")) {
                    z11 = true;
                }
                m7Var.B(z11);
                if (!map.hasKey("maskAllVectors") || map.getBoolean("maskAllVectors")) {
                    m7Var.a("com.horcrux.svg.SvgView");
                }
                if (map.hasKey("screenshotStrategy")) {
                    m7Var.L(j0(map.getString("screenshotStrategy")));
                }
                m7Var.D(io.sentry.react.replay.b.class.getName());
                m7Var.O(io.sentry.react.replay.c.class.getName());
                return m7Var;
            }
        }
        return m7Var;
    }

    public static String X(String str) {
        if (str == null) {
            return null;
        }
        try {
            URI uri = new URI(str);
            return uri.getScheme() + "://" + uri.getHost();
        } catch (URISyntaxException unused) {
            return null;
        }
    }

    private void Y() {
        FragmentManager supportFragmentManager;
        s sVar = new s(f30588p, this.f30601k, f30587o);
        FragmentActivity fragmentActivity = (FragmentActivity) N();
        if (fragmentActivity != null && (supportFragmentManager = fragmentActivity.getSupportFragmentManager()) != null) {
            supportFragmentManager.l1(sVar, true);
        }
    }

    private void Z() {
        FragmentManager supportFragmentManager;
        io.sentry.react.replay.a aVar = new io.sentry.react.replay.a(f30587o);
        Activity N = N();
        if ((N instanceof FragmentActivity) && (supportFragmentManager = ((FragmentActivity) N).getSupportFragmentManager()) != null) {
            supportFragmentManager.l1(aVar, true);
        }
    }

    private void c0() {
        if (this.f30600j == null) {
            this.f30600j = new q6();
        }
        String S = S();
        int micros = ((int) TimeUnit.SECONDS.toMicros(1L)) / this.f30595e;
        ReactApplicationContext reactApplicationContext = this.f30591a;
        ILogger iLogger = f30587o;
        this.f30596f = new i0(S, micros, new c0(reactApplicationContext, iLogger, f30588p), this.f30600j, iLogger);
    }

    public static /* synthetic */ Breadcrumb d(String str, String str2, Breadcrumb breadcrumb, Hint hint) {
        String str3;
        Object o10 = breadcrumb.o("url");
        if (o10 instanceof String) {
            str3 = (String) o10;
        } else {
            str3 = "";
        }
        if ("http".equals(breadcrumb.u())) {
            if (str == null || !str3.startsWith(str)) {
                if (str2 != null && str3.startsWith(str2)) {
                    return null;
                }
            } else {
                return null;
            }
        }
        return breadcrumb;
    }

    private boolean d0() {
        if (this.f30594d && this.f30593c != null) {
            return true;
        }
        return false;
    }

    public static /* synthetic */ void e(ReadableMap readableMap, ReadableMap readableMap2, IScope iScope) {
        ReadableMap map;
        if (readableMap == null && readableMap2 == null) {
            iScope.j(null);
            return;
        }
        h0 h0Var = new h0();
        if (readableMap != null) {
            if (readableMap.hasKey("email")) {
                h0Var.m(readableMap.getString("email"));
            }
            if (readableMap.hasKey(StackTraceHelper.ID_KEY)) {
                h0Var.o(readableMap.getString(StackTraceHelper.ID_KEY));
            }
            if (readableMap.hasKey(NotificationRenderer.USERNAME)) {
                h0Var.r(readableMap.getString(NotificationRenderer.USERNAME));
            }
            if (readableMap.hasKey("ip_address")) {
                h0Var.p(readableMap.getString("ip_address"));
            }
            if (readableMap.hasKey("geo") && (map = readableMap.getMap("geo")) != null) {
                io.sentry.protocol.i iVar = new io.sentry.protocol.i();
                if (map.hasKey("city")) {
                    iVar.d(map.getString("city"));
                }
                if (map.hasKey("country_code")) {
                    iVar.e(map.getString("country_code"));
                }
                if (map.hasKey("region")) {
                    iVar.f(map.getString("region"));
                }
                h0Var.n(iVar);
            }
        }
        if (readableMap2 != null) {
            HashMap hashMap = new HashMap();
            ReadableMapKeySetIterator keySetIterator = readableMap2.keySetIterator();
            while (keySetIterator.hasNextKey()) {
                String nextKey = keySetIterator.nextKey();
                String string = readableMap2.getString(nextKey);
                if (string != null) {
                    hashMap.put(nextKey, string);
                }
            }
            h0Var.l(hashMap);
        }
        iScope.j(h0Var);
    }

    private boolean e0(m7 m7Var) {
        if (m7Var.q() == null && m7Var.l() == null) {
            return false;
        }
        return true;
    }

    public static /* synthetic */ void f(ReadableMap readableMap, String str, IScope iScope) {
        if (readableMap == null) {
            iScope.H(str);
        } else {
            iScope.z(str, readableMap.toHashMap());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ void f0() {
        w.f(Double.valueOf(this.f30603m.now().h() / 1.0E9d));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ SentryEvent g0(SentryAndroidOptions sentryAndroidOptions, SentryEvent sentryEvent, Hint hint) {
        q0(sentryEvent);
        n(sentryEvent, sentryAndroidOptions.getSdkVersion());
        return sentryEvent;
    }

    public static /* synthetic */ void h(byte[][] bArr, Activity activity, CountDownLatch countDownLatch) {
        bArr[0] = io.sentry.android.core.internal.util.w.f(activity, f30587o, f30588p);
        countDownLatch.countDown();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ void h0(ReadableMap readableMap, SentryAndroidOptions sentryAndroidOptions) {
        W(sentryAndroidOptions, readableMap, f30587o);
    }

    private m7.a i0(String str) {
        if (str == null) {
            return m7.a.MEDIUM;
        }
        String lowerCase = str.toLowerCase(Locale.ROOT);
        lowerCase.getClass();
        char c10 = 65535;
        switch (lowerCase.hashCode()) {
            case -1078030475:
                if (lowerCase.equals("medium")) {
                    c10 = 0;
                    break;
                }
                break;
            case 107348:
                if (lowerCase.equals("low")) {
                    c10 = 1;
                    break;
                }
                break;
            case 3202466:
                if (lowerCase.equals("high")) {
                    c10 = 2;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                return m7.a.MEDIUM;
            case 1:
                return m7.a.LOW;
            case 2:
                return m7.a.HIGH;
            default:
                return m7.a.MEDIUM;
        }
    }

    public static /* synthetic */ void j(ReadableMap readableMap, IScope iScope) {
        iScope.e(a.a(readableMap));
        String b10 = a.b(readableMap);
        if (b10 != null) {
            iScope.L(b10);
        }
    }

    private n4 j0(String str) {
        if (str == null) {
            return n4.PIXEL_COPY;
        }
        String lowerCase = str.toLowerCase(Locale.ROOT);
        lowerCase.getClass();
        if (!lowerCase.equals("canvas")) {
            return n4.PIXEL_COPY;
        }
        return n4.CANVAS;
    }

    private String l0(File file) {
        BufferedReader bufferedReader = new BufferedReader(new FileReader(file));
        try {
            StringBuilder sb2 = new StringBuilder();
            while (true) {
                String readLine = bufferedReader.readLine();
                if (readLine != null) {
                    sb2.append(readLine);
                    sb2.append('\n');
                } else {
                    String sb3 = sb2.toString();
                    bufferedReader.close();
                    return sb3;
                }
            }
        } catch (Throwable th2) {
            try {
                bufferedReader.close();
            } catch (Throwable th3) {
                th2.addSuppressed(th3);
            }
            throw th2;
        }
    }

    private void n(SentryEvent sentryEvent, io.sentry.protocol.r rVar) {
        io.sentry.protocol.r L = sentryEvent.L();
        if (L != null && "sentry.javascript.react-native".equals(L.f()) && rVar != null) {
            Set<y> g10 = rVar.g();
            if (g10 != null) {
                for (y yVar : g10) {
                    L.d(yVar.a(), yVar.b());
                }
            }
            Set<String> e10 = rVar.e();
            if (e10 != null) {
                for (String str : e10) {
                    L.c(str);
                }
            }
            sentryEvent.d0(L);
        }
    }

    private void p0(SentryEvent sentryEvent, String str) {
        sentryEvent.f0("event.origin", "android");
        sentryEvent.f0("event.environment", str);
    }

    private void q0(SentryEvent sentryEvent) {
        io.sentry.protocol.r L = sentryEvent.L();
        if (L != null) {
            String f10 = L.f();
            f10.getClass();
            if (!f10.equals("sentry.java.android.react-native")) {
                if (f10.equals("sentry.native.android.react-native")) {
                    p0(sentryEvent, "native");
                    return;
                }
                return;
            }
            p0(sentryEvent, "java");
        }
    }

    private boolean r() {
        return true;
    }

    private Runnable w() {
        return new Runnable() { // from class: io.sentry.react.j
            @Override // java.lang.Runnable
            public final void run() {
                n.this.f0();
            }
        };
    }

    private static byte[] w0(final Activity activity) {
        final CountDownLatch countDownLatch = new CountDownLatch(1);
        final byte[][] bArr = {new byte[0]};
        Runnable runnable = new Runnable() { // from class: io.sentry.react.i
            @Override // java.lang.Runnable
            public final void run() {
                n.h(bArr, activity, countDownLatch);
            }
        };
        if (UiThreadUtil.isOnUiThread()) {
            runnable.run();
        } else {
            UiThreadUtil.runOnUiThread(runnable);
        }
        try {
            countDownLatch.await(2L, TimeUnit.SECONDS);
            return bArr[0];
        } catch (InterruptedException unused) {
            f30587o.c(SentryLevel.ERROR, "Screenshot process was interrupted.", new Object[0]);
            return new byte[0];
        }
    }

    public void A(Promise promise) {
        try {
            BufferedInputStream bufferedInputStream = new BufferedInputStream(U().getResources().getAssets().open("modules.json"));
            try {
                byte[] bArr = new byte[bufferedInputStream.available()];
                bufferedInputStream.read(bArr);
                bufferedInputStream.close();
                promise.resolve(new String(bArr, f30589q));
                bufferedInputStream.close();
            } catch (Throwable th2) {
                try {
                    bufferedInputStream.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
                throw th2;
            }
        } catch (FileNotFoundException unused) {
            promise.resolve(null);
        } catch (Throwable unused2) {
            f30587o.c(SentryLevel.WARNING, "Fetching JS Modules failed.", new Object[0]);
            promise.resolve(null);
        }
    }

    public void B(Promise promise) {
        C(promise, io.sentry.android.core.performance.h.q(), w1.i(), f30587o);
    }

    protected void C(Promise promise, io.sentry.android.core.performance.h hVar, Map map, ILogger iLogger) {
        boolean z10;
        if (!hVar.s()) {
            iLogger.c(SentryLevel.WARNING, "Invalid app start data: app not launched in foreground.", new Object[0]);
            promise.resolve(null);
            return;
        }
        WritableMap writableMap = (WritableMap) b.c(map);
        long j10 = hVar.l().j();
        long j11 = f30590r;
        if (j11 > 0 && j11 == j10) {
            z10 = true;
        } else {
            z10 = false;
        }
        writableMap.putBoolean("has_fetched", z10);
        if (f30590r < 0) {
            iLogger.c(SentryLevel.DEBUG, "App Start data reported to the RN layer for the first time.", new Object[0]);
        } else if (z10) {
            iLogger.c(SentryLevel.DEBUG, "App Start data already fetched from native before.", new Object[0]);
        } else {
            iLogger.c(SentryLevel.DEBUG, "App Start data updated, reporting to the RN layer again.", new Object[0]);
        }
        f30590r = j10;
        hVar.t();
        promise.resolve(writableMap);
    }

    public void D(Promise promise) {
        E(promise, l4.h().b(), U().getApplicationContext(), w1.j());
    }

    protected void E(Promise promise, k7 k7Var, Context context, IScope iScope) {
        if (!(k7Var instanceof SentryAndroidOptions)) {
            promise.resolve(null);
        } else if (context == null) {
            promise.resolve(null);
        } else {
            if (iScope != null) {
                Iterator it = iScope.s().iterator();
                while (it.hasNext()) {
                    if ("react-native".equals(((Breadcrumb) it.next()).s())) {
                        it.remove();
                    }
                }
            }
            promise.resolve(b.c(w1.k(context, (SentryAndroidOptions) k7Var, iScope)));
        }
    }

    public void F(Promise promise) {
        int i10;
        int i11;
        int i12;
        SparseIntArray sparseIntArray;
        if (!d0()) {
            promise.resolve(null);
            return;
        }
        try {
            SparseIntArray[] b10 = this.f30593c.b();
            if (b10 != null && (sparseIntArray = b10[0]) != null) {
                i10 = 0;
                i11 = 0;
                i12 = 0;
                for (int i13 = 0; i13 < sparseIntArray.size(); i13++) {
                    int keyAt = sparseIntArray.keyAt(i13);
                    int valueAt = sparseIntArray.valueAt(i13);
                    i10 += valueAt;
                    if (keyAt > 700) {
                        i12 += valueAt;
                    } else if (keyAt > 16) {
                        i11 += valueAt;
                    }
                }
            } else {
                i10 = 0;
                i11 = 0;
                i12 = 0;
            }
            WritableMap createMap = Arguments.createMap();
            createMap.putInt("totalFrames", i10);
            createMap.putInt("slowFrames", i11);
            createMap.putInt("frozenFrames", i12);
            promise.resolve(createMap);
        } catch (Throwable unused) {
            f30587o.c(SentryLevel.WARNING, "Error fetching native frames.", new Object[0]);
            promise.resolve(null);
        }
    }

    public void G(Promise promise) {
        H(promise, l4.h().b(), U().getApplicationContext(), w1.j());
    }

    protected void H(Promise promise, k7 k7Var, Context context, IScope iScope) {
        if ((k7Var instanceof SentryAndroidOptions) && context != null) {
            Object obj = w1.k(context, (SentryAndroidOptions) k7Var, iScope).get("contexts");
            if (!(obj instanceof Map)) {
                promise.resolve(null);
                return;
            }
            Map map = (Map) obj;
            HashMap hashMap = new HashMap();
            if (map.containsKey("os")) {
                hashMap.put("os", map.get("os"));
            }
            if (map.containsKey("device")) {
                hashMap.put("device", map.get("device"));
            }
            hashMap.put("release", k7Var.getRelease());
            HashMap hashMap2 = new HashMap();
            hashMap2.put("contexts", hashMap);
            promise.resolve(b.c(hashMap2));
            return;
        }
        promise.resolve(null);
    }

    public String I() {
        return this.f30592b.packageName;
    }

    public void J(Promise promise) {
        WritableMap createMap = Arguments.createMap();
        createMap.putString(StackTraceHelper.ID_KEY, this.f30592b.packageName);
        createMap.putString("version", this.f30592b.versionName);
        createMap.putString("build", String.valueOf(this.f30592b.versionCode));
        promise.resolve(createMap);
    }

    public void K(Promise promise) {
        io.sentry.protocol.r sdkVersion = l4.h().b().getSdkVersion();
        if (sdkVersion == null) {
            promise.resolve(null);
            return;
        }
        WritableNativeMap writableNativeMap = new WritableNativeMap();
        writableNativeMap.putString(StackTraceHelper.NAME_KEY, sdkVersion.f());
        writableNativeMap.putString("version", sdkVersion.h());
        promise.resolve(writableNativeMap);
    }

    public void L(Promise promise) {
        Activity N = N();
        ILogger iLogger = f30587o;
        io.sentry.protocol.i0 d10 = ViewHierarchyEventProcessor.d(N, iLogger);
        if (d10 == null) {
            iLogger.c(SentryLevel.ERROR, "Could not get ViewHierarchy.", new Object[0]);
            promise.resolve(null);
            return;
        }
        byte[] c10 = io.sentry.util.q.c(l4.h().b().getSerializer(), iLogger, d10);
        if (c10 == null) {
            iLogger.c(SentryLevel.ERROR, "Could not serialize ViewHierarchy.", new Object[0]);
            promise.resolve(null);
        } else if (c10.length < 1) {
            iLogger.c(SentryLevel.ERROR, "Got empty bytes array after serializing ViewHierarchy.", new Object[0]);
            promise.resolve(null);
        } else {
            WritableNativeArray writableNativeArray = new WritableNativeArray();
            for (byte b10 : c10) {
                writableNativeArray.pushInt(b10);
            }
            promise.resolve(writableNativeArray);
        }
    }

    protected Context M() {
        Context applicationContext = U().getApplicationContext();
        if (applicationContext == null) {
            f30587o.c(SentryLevel.ERROR, "ApplicationContext is null, using ReactApplicationContext fallback.", new Object[0]);
            return U();
        }
        return applicationContext;
    }

    public String O() {
        x J;
        IScope j10 = w1.j();
        if (j10 == null || (J = j10.J()) == x.f30470e) {
            return null;
        }
        return J.toString();
    }

    public void P(String str, Promise promise) {
        try {
            InputStream openInputStream = U().getContentResolver().openInputStream(Uri.parse(str));
            if (openInputStream == null) {
                String str2 = "File not found for uri: " + str;
                f30587o.c(SentryLevel.ERROR, str2, new Object[0]);
                promise.reject(new Exception(str2));
                if (openInputStream == null) {
                    return;
                }
            } else {
                ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
                byte[] bArr = new byte[IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET];
                while (true) {
                    int read = openInputStream.read(bArr);
                    if (read == -1) {
                        break;
                    }
                    byteArrayOutputStream.write(bArr, 0, read);
                }
                byte[] byteArray = byteArrayOutputStream.toByteArray();
                WritableArray createArray = Arguments.createArray();
                for (byte b10 : byteArray) {
                    createArray.pushInt(b10 & 255);
                }
                promise.resolve(createArray);
            }
            openInputStream.close();
        } catch (IOException e10) {
            String str3 = "Error reading uri: " + str + ": " + e10.getMessage();
            f30587o.c(SentryLevel.ERROR, str3, new Object[0]);
            promise.reject(new Exception(str3));
        }
    }

    public void Q(Promise promise) {
        w.c(promise, this.f30603m);
    }

    protected void W(final SentryAndroidOptions sentryAndroidOptions, ReadableMap readableMap, ILogger iLogger) {
        io.sentry.protocol.r sdkVersion = sentryAndroidOptions.getSdkVersion();
        if (sdkVersion == null) {
            sdkVersion = new io.sentry.protocol.r("sentry.java.android.react-native", "8.27.0");
        } else {
            sdkVersion.i("sentry.java.android.react-native");
        }
        sdkVersion.d("npm:@sentry/react-native", "7.7.0");
        sentryAndroidOptions.setSentryClientName(sdkVersion.f() + "/" + sdkVersion.h());
        sentryAndroidOptions.setNativeSdkName("sentry.native.android.react-native");
        sentryAndroidOptions.setSdkVersion(sdkVersion);
        if (readableMap.hasKey("debug") && readableMap.getBoolean("debug")) {
            sentryAndroidOptions.setDebug(true);
        }
        if (readableMap.hasKey(ViewProps.ENABLED)) {
            sentryAndroidOptions.setEnabled(readableMap.getBoolean(ViewProps.ENABLED));
        }
        if (readableMap.hasKey("dsn") && readableMap.getString("dsn") != null) {
            String string = readableMap.getString("dsn");
            iLogger.c(SentryLevel.INFO, String.format("Starting with DSN: '%s'", string), new Object[0]);
            sentryAndroidOptions.setDsn(string);
        } else {
            sentryAndroidOptions.setDsn("");
        }
        if (readableMap.hasKey("sampleRate")) {
            sentryAndroidOptions.setSampleRate(Double.valueOf(readableMap.getDouble("sampleRate")));
        }
        if (readableMap.hasKey("sendClientReports")) {
            sentryAndroidOptions.setSendClientReports(readableMap.getBoolean("sendClientReports"));
        }
        if (readableMap.hasKey("maxBreadcrumbs")) {
            sentryAndroidOptions.setMaxBreadcrumbs(readableMap.getInt("maxBreadcrumbs"));
        }
        if (readableMap.hasKey("maxCacheItems")) {
            sentryAndroidOptions.setMaxCacheItems(readableMap.getInt("maxCacheItems"));
        }
        if (readableMap.hasKey("environment") && readableMap.getString("environment") != null) {
            sentryAndroidOptions.setEnvironment(readableMap.getString("environment"));
        }
        if (readableMap.hasKey("release") && readableMap.getString("release") != null) {
            sentryAndroidOptions.setRelease(readableMap.getString("release"));
        }
        if (readableMap.hasKey("dist") && readableMap.getString("dist") != null) {
            sentryAndroidOptions.setDist(readableMap.getString("dist"));
        }
        if (readableMap.hasKey("enableAutoSessionTracking")) {
            sentryAndroidOptions.setEnableAutoSessionTracking(readableMap.getBoolean("enableAutoSessionTracking"));
        }
        if (readableMap.hasKey("sessionTrackingIntervalMillis")) {
            sentryAndroidOptions.setSessionTrackingIntervalMillis(readableMap.getInt("sessionTrackingIntervalMillis"));
        }
        if (readableMap.hasKey("shutdownTimeout")) {
            sentryAndroidOptions.setShutdownTimeoutMillis(readableMap.getInt("shutdownTimeout"));
        }
        if (readableMap.hasKey("enableNdkScopeSync")) {
            sentryAndroidOptions.setEnableScopeSync(readableMap.getBoolean("enableNdkScopeSync"));
        }
        if (readableMap.hasKey("attachStacktrace")) {
            sentryAndroidOptions.setAttachStacktrace(readableMap.getBoolean("attachStacktrace"));
        }
        if (readableMap.hasKey("attachThreads")) {
            sentryAndroidOptions.setAttachThreads(readableMap.getBoolean("attachThreads"));
        }
        if (readableMap.hasKey("attachScreenshot")) {
            sentryAndroidOptions.setAttachScreenshot(readableMap.getBoolean("attachScreenshot"));
        }
        if (readableMap.hasKey("attachViewHierarchy")) {
            sentryAndroidOptions.setAttachViewHierarchy(readableMap.getBoolean("attachViewHierarchy"));
        }
        if (readableMap.hasKey("sendDefaultPii")) {
            sentryAndroidOptions.setSendDefaultPii(readableMap.getBoolean("sendDefaultPii"));
        }
        if (readableMap.hasKey("maxQueueSize")) {
            sentryAndroidOptions.setMaxQueueSize(readableMap.getInt("maxQueueSize"));
        }
        if (readableMap.hasKey("enableNdk")) {
            sentryAndroidOptions.setEnableNdk(readableMap.getBoolean("enableNdk"));
        }
        if (readableMap.hasKey("enableLogs")) {
            sentryAndroidOptions.getLogs().b(readableMap.getBoolean("enableLogs"));
        }
        if (readableMap.hasKey("spotlight")) {
            if (readableMap.getType("spotlight") == ReadableType.Boolean) {
                sentryAndroidOptions.setEnableSpotlight(readableMap.getBoolean("spotlight"));
                sentryAndroidOptions.setSpotlightConnectionUrl(readableMap.getString("defaultSidecarUrl"));
            } else if (readableMap.getType("spotlight") == ReadableType.String) {
                sentryAndroidOptions.setEnableSpotlight(true);
                sentryAndroidOptions.setSpotlightConnectionUrl(readableMap.getString("spotlight"));
            }
        }
        m7 V = V(readableMap);
        sentryAndroidOptions.setSessionReplay(V);
        boolean c10 = this.f30604n.c("io.sentry.android.replay.ReplayIntegration", iLogger);
        if (e0(V) && c10) {
            sentryAndroidOptions.getReplayController().x(new t());
            Z();
        }
        final String X = X(readableMap.getString("dsn"));
        final String string2 = readableMap.getString("devServerUrl");
        sentryAndroidOptions.setBeforeBreadcrumb(new k7.a() { // from class: io.sentry.react.m
            @Override // io.sentry.k7.a
            public final Breadcrumb a(Breadcrumb breadcrumb, Hint hint) {
                return n.d(X, string2, breadcrumb, hint);
            }
        });
        sentryAndroidOptions.addIgnoredExceptionForType(JavascriptException.class);
        x0(sentryAndroidOptions, readableMap);
        sentryAndroidOptions.setBeforeSend(new k7.c() { // from class: io.sentry.react.d
            @Override // io.sentry.k7.c
            public final SentryEvent a(SentryEvent sentryEvent, Hint hint) {
                SentryEvent g02;
                g02 = n.this.g0(sentryAndroidOptions, sentryEvent, hint);
                return g02;
            }
        });
        if (readableMap.hasKey("enableNativeCrashHandling") && !readableMap.getBoolean("enableNativeCrashHandling")) {
            List<k1> integrations = sentryAndroidOptions.getIntegrations();
            for (k1 k1Var : integrations) {
                if ((k1Var instanceof UncaughtExceptionHandlerIntegration) || (k1Var instanceof AnrIntegration) || (k1Var instanceof NdkIntegration)) {
                    integrations.remove(k1Var);
                }
            }
        }
        iLogger.c(SentryLevel.INFO, String.format("Native Integrations '%s'", sentryAndroidOptions.getIntegrations()), new Object[0]);
        f1 c11 = f1.c();
        Activity N = N();
        if (N != null) {
            c11.d(N);
        }
    }

    public void a0(Promise promise) {
        Y();
    }

    public void b0(final ReadableMap readableMap, Promise promise) {
        k2.g(M(), new b5.a() { // from class: io.sentry.react.f
            @Override // io.sentry.b5.a
            public final void a(k7 k7Var) {
                n.this.h0(readableMap, (SentryAndroidOptions) k7Var);
            }
        });
        promise.resolve(Boolean.TRUE);
    }

    public void k0(String str, Promise promise) {
        if (str != null) {
            promise.resolve(w.d(str));
        } else {
            promise.resolve(null);
        }
    }

    public void l(final ReadableMap readableMap) {
        b5.p(new b4() { // from class: io.sentry.react.l
            @Override // io.sentry.b4
            public final void a(IScope iScope) {
                n.j(ReadableMap.this, iScope);
            }
        });
    }

    public void m(String str) {
        f30587o.c(SentryLevel.ERROR, "addListener of NativeEventEmitter can't be used on Android!", new Object[0]);
    }

    public void m0(double d10) {
        f30587o.c(SentryLevel.ERROR, "removeListeners of NativeEventEmitter can't be used on Android!", new Object[0]);
    }

    public boolean n0(String str) {
        w.g(str);
        return true;
    }

    public void o(String str, ReadableMap readableMap, Promise promise) {
        boolean z10;
        byte[] a10 = io.sentry.vendor.a.a(str, 0);
        try {
        } catch (Throwable unused) {
            f30587o.c(SentryLevel.ERROR, "Error while capturing envelope", new Object[0]);
            promise.resolve(Boolean.FALSE);
        }
        if (readableMap.hasKey("hardCrashed") && readableMap.getBoolean("hardCrashed")) {
            z10 = false;
            w1.f(a10, z10);
            promise.resolve(Boolean.TRUE);
        }
        z10 = true;
        w1.f(a10, z10);
        promise.resolve(Boolean.TRUE);
    }

    public void o0(final String str, final ReadableMap readableMap) {
        if (str == null) {
            f30587o.c(SentryLevel.ERROR, "RNSentry.setContext called with null key, can't change context.", new Object[0]);
        } else {
            b5.p(new b4() { // from class: io.sentry.react.k
                @Override // io.sentry.b4
                public final void a(IScope iScope) {
                    n.f(ReadableMap.this, str, iScope);
                }
            });
        }
    }

    public void p(boolean z10, Promise promise) {
        b5.v().b().getReplayController().B(Boolean.valueOf(z10));
        promise.resolve(O());
    }

    public void q(Promise promise) {
        Activity N = N();
        if (N == null) {
            f30587o.c(SentryLevel.WARNING, "CurrentActivity is null, can't capture screenshot.", new Object[0]);
            promise.resolve(null);
            return;
        }
        byte[] w02 = w0(N);
        if (w02 != null && w02.length != 0) {
            WritableNativeArray writableNativeArray = new WritableNativeArray();
            for (byte b10 : w02) {
                writableNativeArray.pushInt(b10);
            }
            WritableNativeMap writableNativeMap = new WritableNativeMap();
            writableNativeMap.putString("contentType", ClipboardModule.MIMETYPE_PNG);
            writableNativeMap.putArray("data", writableNativeArray);
            writableNativeMap.putString("filename", "screenshot.png");
            WritableNativeArray writableNativeArray2 = new WritableNativeArray();
            writableNativeArray2.pushMap(writableNativeMap);
            promise.resolve(writableNativeArray2);
            return;
        }
        f30587o.c(SentryLevel.WARNING, "Screenshot is null, screen was not captured.", new Object[0]);
        promise.resolve(null);
    }

    public void r0(final String str, final String str2) {
        if (str != null && str2 != null) {
            b5.p(new b4() { // from class: io.sentry.react.e
                @Override // io.sentry.b4
                public final void a(IScope iScope) {
                    iScope.f(str, str2);
                }
            });
        } else {
            f30587o.c(SentryLevel.ERROR, "RNSentry.setExtra called with null key or value, can't change extra.", new Object[0]);
        }
    }

    public void s() {
        b5.p(new b4() { // from class: io.sentry.react.h
            @Override // io.sentry.b4
            public final void a(IScope iScope) {
                iScope.w();
            }
        });
    }

    public void s0(final String str, final String str2) {
        b5.p(new b4() { // from class: io.sentry.react.g
            @Override // io.sentry.b4
            public final void a(IScope iScope) {
                iScope.a(str, str2);
            }
        });
    }

    public void t(Promise promise) {
        b5.o();
        x();
        promise.resolve(Boolean.TRUE);
    }

    public void t0(final ReadableMap readableMap, final ReadableMap readableMap2) {
        b5.p(new b4() { // from class: io.sentry.react.c
            @Override // io.sentry.b4
            public final void a(IScope iScope) {
                n.e(ReadableMap.this, readableMap2, iScope);
            }
        });
    }

    public void u() {
        throw new RuntimeException("TEST - Sentry Client Crash (only works in release mode)");
    }

    public WritableMap u0(boolean z10) {
        WritableNativeMap writableNativeMap = new WritableNativeMap();
        if (this.f30596f == null && z10) {
            c0();
        }
        try {
            HermesSamplingProfiler.enable();
            i0 i0Var = this.f30596f;
            if (i0Var != null) {
                i0Var.j();
            }
            writableNativeMap.putBoolean("started", true);
            return writableNativeMap;
        } catch (Throwable th2) {
            writableNativeMap.putBoolean("started", false);
            writableNativeMap.putString("error", th2.toString());
            return writableNativeMap;
        }
    }

    public void v(Promise promise) {
        promise.resolve(b5.H());
    }

    public WritableMap v0() {
        i0.b bVar;
        boolean isDebug = l4.h().b().isDebug();
        WritableNativeMap writableNativeMap = new WritableNativeMap();
        File file = null;
        try {
            i0 i0Var = this.f30596f;
            if (i0Var != null) {
                bVar = i0Var.g(false, null);
            } else {
                bVar = null;
            }
            HermesSamplingProfiler.disable();
            file = File.createTempFile("sampling-profiler-trace", ".cpuprofile", this.f30591a.getCacheDir());
            if (isDebug) {
                f30587o.c(SentryLevel.INFO, "Profile saved to: " + file.getAbsolutePath(), new Object[0]);
            }
            HermesSamplingProfiler.dumpSampledTraceToFile(file.getPath());
            writableNativeMap.putString("profile", l0(file));
            if (bVar != null) {
                WritableNativeMap writableNativeMap2 = new WritableNativeMap();
                writableNativeMap2.putString("sampled_profile", io.sentry.vendor.a.f(io.sentry.util.i.b(bVar.f28939c.getPath(), this.f30602l), 3));
                writableNativeMap2.putInt("android_api_level", f30588p.d());
                writableNativeMap2.putString("build_id", T());
                writableNativeMap.putMap("androidProfile", writableNativeMap2);
            }
            try {
                if (!file.delete()) {
                    f30587o.c(SentryLevel.WARNING, "Profile not deleted from:" + file.getAbsolutePath(), new Object[0]);
                    return writableNativeMap;
                }
            } catch (Throwable unused) {
                f30587o.c(SentryLevel.WARNING, "Profile not deleted from:" + file.getAbsolutePath(), new Object[0]);
            }
        } catch (Throwable th2) {
            try {
                writableNativeMap.putString("error", th2.toString());
                if (file != null) {
                    try {
                        if (!file.delete()) {
                            f30587o.c(SentryLevel.WARNING, "Profile not deleted from:" + file.getAbsolutePath(), new Object[0]);
                        }
                    } catch (Throwable unused2) {
                        f30587o.c(SentryLevel.WARNING, "Profile not deleted from:" + file.getAbsolutePath(), new Object[0]);
                    }
                }
            } catch (Throwable th3) {
                if (file != null) {
                    try {
                        if (!file.delete()) {
                            f30587o.c(SentryLevel.WARNING, "Profile not deleted from:" + file.getAbsolutePath(), new Object[0]);
                        }
                    } catch (Throwable unused3) {
                        f30587o.c(SentryLevel.WARNING, "Profile not deleted from:" + file.getAbsolutePath(), new Object[0]);
                    }
                }
                throw th3;
            }
        }
        return writableNativeMap;
    }

    public void x() {
        if (d0()) {
            this.f30593c.e();
            this.f30593c = null;
        }
    }

    protected void x0(SentryAndroidOptions sentryAndroidOptions, ReadableMap readableMap) {
        ReadableArray readableArray;
        int i10;
        int i11;
        ReadableArray readableArray2 = null;
        if (readableMap.hasKey("ignoreErrorsRegex")) {
            readableArray = readableMap.getArray("ignoreErrorsRegex");
        } else {
            readableArray = null;
        }
        if (readableMap.hasKey("ignoreErrorsStr")) {
            readableArray2 = readableMap.getArray("ignoreErrorsStr");
        }
        if (readableArray == null && readableArray2 == null) {
            return;
        }
        if (readableArray != null) {
            i10 = readableArray.size();
        } else {
            i10 = 0;
        }
        if (readableArray2 != null) {
            i11 = readableArray2.size();
        } else {
            i11 = 0;
        }
        ArrayList arrayList = new ArrayList(i10 + i11);
        if (readableArray != null) {
            for (int i12 = 0; i12 < readableArray.size(); i12++) {
                arrayList.add(readableArray.getString(i12));
            }
        }
        if (readableArray2 != null) {
            for (int i13 = 0; i13 < readableArray2.size(); i13++) {
                arrayList.add(k7.DEFAULT_PROPAGATION_TARGETS + Pattern.quote(readableArray2.getString(i13)) + k7.DEFAULT_PROPAGATION_TARGETS);
            }
        }
        sentryAndroidOptions.setIgnoredErrors(arrayList);
    }

    public void y() {
        boolean r10 = r();
        this.f30594d = r10;
        if (r10) {
            this.f30593c = new FrameMetricsAggregator();
            Activity N = N();
            FrameMetricsAggregator frameMetricsAggregator = this.f30593c;
            if (frameMetricsAggregator != null && N != null) {
                try {
                    frameMetricsAggregator.a(N);
                    f30587o.c(SentryLevel.INFO, "FrameMetricsAggregator installed.", new Object[0]);
                    return;
                } catch (Throwable unused) {
                    f30587o.c(SentryLevel.ERROR, "Error adding Activity to frameMetricsAggregator.", new Object[0]);
                    return;
                }
            }
            f30587o.c(SentryLevel.INFO, "currentActivity isn't available.", new Object[0]);
            return;
        }
        f30587o.c(SentryLevel.WARNING, "androidx.core' isn't available as a dependency.", new Object[0]);
    }

    public void z(ReadableArray readableArray, Promise promise) {
        byte[] bArr = new byte[readableArray.size()];
        for (int i10 = 0; i10 < readableArray.size(); i10++) {
            bArr[i10] = (byte) readableArray.getInt(i10);
        }
        promise.resolve(Base64.encodeToString(bArr, 0));
    }
}
