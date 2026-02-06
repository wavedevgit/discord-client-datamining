package com.reactnativecommunity.webview;

import android.annotation.SuppressLint;
import android.annotation.TargetApi;
import android.app.Activity;
import android.app.DownloadManager;
import android.graphics.Bitmap;
import android.net.Uri;
import android.net.http.SslError;
import android.os.Build;
import android.os.Environment;
import android.os.Message;
import android.text.TextUtils;
import android.util.Log;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.ConsoleMessage;
import android.webkit.CookieManager;
import android.webkit.DownloadListener;
import android.webkit.GeolocationPermissions;
import android.webkit.HttpAuthHandler;
import android.webkit.JavascriptInterface;
import android.webkit.PermissionRequest;
import android.webkit.RenderProcessGoneDetail;
import android.webkit.SslErrorHandler;
import android.webkit.URLUtil;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import androidx.annotation.NonNull;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.discord.notifications.renderer.NotificationRenderer;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.CatalystInstance;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapKeySetIterator;
import com.facebook.react.bridge.UIManager;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.common.build.ReactBuildConfig;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.modules.core.PermissionAwareActivity;
import com.facebook.react.modules.core.PermissionListener;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.UIManagerModule;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.ContentSizeChangeEvent;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.views.progressbar.ReactProgressBarViewManager;
import com.facebook.react.views.scroll.OnScrollDispatchHelper;
import com.facebook.react.views.scroll.ReactScrollViewHelper;
import com.facebook.react.views.scroll.ScrollEvent;
import com.facebook.react.views.scroll.ScrollEventType;
import com.reactnativecommunity.webview.RNCWebViewManager;
import com.reactnativecommunity.webview.b;
import f4.b;
import java.io.File;
import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import org.json.JSONException;
import org.json.JSONObject;
@ReactModule(name = RNCWebViewManager.REACT_CLASS)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class RNCWebViewManager extends SimpleViewManager<com.reactnativecommunity.webview.b> {
    protected static final String BLANK_URL = "about:blank";
    public static final int COMMAND_CLEAR_CACHE = 1001;
    public static final int COMMAND_CLEAR_FORM_DATA = 1000;
    public static final int COMMAND_CLEAR_HISTORY = 1002;
    public static final int COMMAND_FOCUS = 8;
    public static final int COMMAND_GO_BACK = 1;
    public static final int COMMAND_GO_FORWARD = 2;
    public static final int COMMAND_INJECT_JAVASCRIPT = 6;
    public static final int COMMAND_LOAD_URL = 7;
    public static final int COMMAND_POST_MESSAGE = 5;
    public static final int COMMAND_RELEASE = 4001;
    public static final int COMMAND_RELOAD = 3;
    public static final int COMMAND_STOP_LOADING = 4;
    protected static final String DEFAULT_DOWNLOADING_MESSAGE = "Downloading";
    protected static final String DEFAULT_LACK_PERMISSION_TO_DOWNLOAD_MESSAGE = "Cannot download files as permission was denied. Please provide permission to write to storage, in order to download files.";
    protected static final String HTML_ENCODING = "UTF-8";
    protected static final String HTML_MIME_TYPE = "text/html";
    protected static final String HTTP_METHOD_POST = "POST";
    protected static final String JAVASCRIPT_INTERFACE = "ReactNativeWebView";
    protected static final String REACT_CLASS = "RNCWebViewContainer";
    protected static final int SHOULD_OVERRIDE_URL_LOADING_TIMEOUT = 250;
    private static final String TAG = "RNCWebViewManager";
    Set<String> assetLoaderHandlerTypes;
    protected boolean mAllowsFullscreenVideo;
    protected boolean mAllowsProtectedMedia;
    protected String mDownloadingMessage;
    protected String mLackPermissionToDownloadMessage;
    protected String mUserAgent;
    protected String mUserAgentWithApplicationName;
    protected f mWebChromeClient;
    protected e1 mWebViewConfig;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements e1 {
        a() {
        }

        @Override // com.reactnativecommunity.webview.e1
        public void a(WebView webView) {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ g f17421d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ com.reactnativecommunity.webview.b f17422e;

        b(g gVar, com.reactnativecommunity.webview.b bVar) {
            this.f17421d = gVar;
            this.f17422e = bVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            a1.f17488a.b().put(Integer.valueOf(this.f17421d.getId()), Integer.valueOf(this.f17422e.getId()));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c implements DownloadListener {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ g f17424a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ ThemedReactContext f17425b;

        c(g gVar, ThemedReactContext themedReactContext) {
            this.f17424a = gVar;
            this.f17425b = themedReactContext;
        }

        @Override // android.webkit.DownloadListener
        public void onDownloadStart(String str, String str2, String str3, String str4, long j10) {
            this.f17424a.setIgnoreErrFailedForThisURL(str);
            RNCWebViewModule module = RNCWebViewManager.getModule(this.f17425b);
            try {
                DownloadManager.Request request = new DownloadManager.Request(Uri.parse(str));
                String guessFileName = URLUtil.guessFileName(str, str3, str4);
                String str5 = "Downloading " + guessFileName;
                try {
                    URL url = new URL(str);
                    request.addRequestHeader("Cookie", CookieManager.getInstance().getCookie(url.getProtocol() + "://" + url.getHost()));
                } catch (MalformedURLException e10) {
                    Log.w(RNCWebViewManager.TAG, "Error getting cookie for DownloadManager", e10);
                }
                request.addRequestHeader("User-Agent", str2);
                request.setTitle(guessFileName);
                request.setDescription(str5);
                request.allowScanningByMediaScanner();
                request.setNotificationVisibility(1);
                request.setDestinationInExternalPublicDir(Environment.DIRECTORY_DOWNLOADS, guessFileName);
                module.setDownloadRequest(request);
                if (module.grantFileDownloaderPermissions(RNCWebViewManager.this.getDownloadingMessage(), RNCWebViewManager.this.getLackPermissionToDownloadMessage())) {
                    module.downloadFile(RNCWebViewManager.this.getDownloadingMessage());
                }
            } catch (IllegalArgumentException e11) {
                Log.w(RNCWebViewManager.TAG, "Unsupported URI, aborting download", e11);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class d extends f {
        final /* synthetic */ int A;

        /* renamed from: z  reason: collision with root package name */
        final /* synthetic */ Activity f17427z;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(ReactContext reactContext, WebView webView, Activity activity, int i10) {
            super(reactContext, webView);
            this.f17427z = activity;
            this.A = i10;
        }

        @Override // android.webkit.WebChromeClient
        public Bitmap getDefaultVideoPoster() {
            return Bitmap.createBitmap(50, 50, Bitmap.Config.ARGB_8888);
        }

        @Override // android.webkit.WebChromeClient
        public void onHideCustomView() {
            if (this.f17432i == null) {
                return;
            }
            ViewGroup c10 = c();
            if (c10.getRootView() != this.f17431e.getRootView()) {
                this.f17431e.getRootView().setVisibility(0);
            } else {
                this.f17431e.setVisibility(0);
            }
            this.f17427z.getWindow().clearFlags(IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING);
            c10.removeView(this.f17432i);
            this.f17433o.onCustomViewHidden();
            this.f17432i = null;
            this.f17433o = null;
            this.f17427z.setRequestedOrientation(this.A);
            this.f17430d.removeLifecycleEventListener(this);
        }

        @Override // android.webkit.WebChromeClient
        public void onShowCustomView(View view, WebChromeClient.CustomViewCallback customViewCallback) {
            if (this.f17432i != null) {
                customViewCallback.onCustomViewHidden();
                return;
            }
            this.f17432i = view;
            this.f17433o = customViewCallback;
            this.f17427z.setRequestedOrientation(-1);
            this.f17432i.setSystemUiVisibility(7942);
            this.f17427z.getWindow().setFlags(IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING, IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING);
            this.f17432i.setBackgroundColor(-16777216);
            ViewGroup c10 = c();
            c10.addView(this.f17432i, f.f17429y);
            if (c10.getRootView() != this.f17431e.getRootView()) {
                this.f17431e.getRootView().setVisibility(8);
            } else {
                this.f17431e.setVisibility(8);
            }
            this.f17430d.addLifecycleEventListener(this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class e extends f {
        e(ReactContext reactContext, WebView webView) {
            super(reactContext, webView);
        }

        @Override // android.webkit.WebChromeClient
        public Bitmap getDefaultVideoPoster() {
            return Bitmap.createBitmap(50, 50, Bitmap.Config.ARGB_8888);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class f extends WebChromeClient implements LifecycleEventListener {

        /* renamed from: y  reason: collision with root package name */
        protected static final FrameLayout.LayoutParams f17429y = new FrameLayout.LayoutParams(-1, -1, 17);

        /* renamed from: d  reason: collision with root package name */
        protected ReactContext f17430d;

        /* renamed from: e  reason: collision with root package name */
        protected View f17431e;

        /* renamed from: i  reason: collision with root package name */
        protected View f17432i;

        /* renamed from: o  reason: collision with root package name */
        protected WebChromeClient.CustomViewCallback f17433o;

        /* renamed from: p  reason: collision with root package name */
        protected PermissionRequest f17434p;

        /* renamed from: q  reason: collision with root package name */
        protected List f17435q;

        /* renamed from: r  reason: collision with root package name */
        protected GeolocationPermissions.Callback f17436r;

        /* renamed from: s  reason: collision with root package name */
        protected String f17437s;

        /* renamed from: t  reason: collision with root package name */
        protected boolean f17438t = false;

        /* renamed from: u  reason: collision with root package name */
        protected List f17439u = new ArrayList();

        /* renamed from: v  reason: collision with root package name */
        protected g.b f17440v = null;

        /* renamed from: w  reason: collision with root package name */
        protected boolean f17441w = false;

        /* renamed from: x  reason: collision with root package name */
        private PermissionListener f17442x = new PermissionListener() { // from class: com.reactnativecommunity.webview.y0
            @Override // com.facebook.react.modules.core.PermissionListener
            public final boolean onRequestPermissionsResult(int i10, String[] strArr, int[] iArr) {
                boolean d10;
                d10 = RNCWebViewManager.f.this.d(i10, strArr, iArr);
                return d10;
            }
        };

        public f(ReactContext reactContext, WebView webView) {
            this.f17430d = reactContext;
            this.f17431e = webView;
        }

        private PermissionAwareActivity b() {
            Activity currentActivity = this.f17430d.getCurrentActivity();
            if (currentActivity != null) {
                if (currentActivity instanceof PermissionAwareActivity) {
                    return (PermissionAwareActivity) currentActivity;
                }
                throw new IllegalStateException("Tried to use permissions API but the host Activity doesn't implement PermissionAwareActivity.");
            }
            throw new IllegalStateException("Tried to use permissions API while not attached to an Activity.");
        }

        /* JADX INFO: Access modifiers changed from: private */
        public /* synthetic */ boolean d(int i10, String[] strArr, int[] iArr) {
            PermissionRequest permissionRequest;
            List list;
            boolean z10;
            List list2;
            List list3;
            List list4;
            GeolocationPermissions.Callback callback;
            String str;
            this.f17438t = false;
            boolean z11 = false;
            for (int i11 = 0; i11 < strArr.length; i11++) {
                String str2 = strArr[i11];
                if (iArr[i11] == 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                if (str2.equals("android.permission.ACCESS_FINE_LOCATION") && (callback = this.f17436r) != null && (str = this.f17437s) != null) {
                    if (z10) {
                        callback.invoke(str, true, false);
                    } else {
                        callback.invoke(str, false, false);
                    }
                    this.f17436r = null;
                    this.f17437s = null;
                }
                if (str2.equals("android.permission.RECORD_AUDIO")) {
                    if (z10 && (list4 = this.f17435q) != null) {
                        list4.add("android.webkit.resource.AUDIO_CAPTURE");
                    }
                    z11 = true;
                }
                if (str2.equals("android.permission.CAMERA")) {
                    if (z10 && (list3 = this.f17435q) != null) {
                        list3.add("android.webkit.resource.VIDEO_CAPTURE");
                    }
                    z11 = true;
                }
                if (str2.equals("android.webkit.resource.PROTECTED_MEDIA_ID")) {
                    if (z10 && (list2 = this.f17435q) != null) {
                        list2.add("android.webkit.resource.PROTECTED_MEDIA_ID");
                    }
                    z11 = true;
                }
            }
            if (z11 && (permissionRequest = this.f17434p) != null && (list = this.f17435q) != null) {
                permissionRequest.grant((String[]) list.toArray(new String[0]));
                this.f17434p = null;
                this.f17435q = null;
            }
            if (this.f17439u.isEmpty()) {
                return true;
            }
            e(this.f17439u);
            return false;
        }

        private synchronized void e(List list) {
            if (this.f17438t) {
                this.f17439u.addAll(list);
                return;
            }
            PermissionAwareActivity b10 = b();
            this.f17438t = true;
            b10.requestPermissions((String[]) list.toArray(new String[0]), 3, this.f17442x);
            this.f17439u.clear();
        }

        protected ViewGroup c() {
            return (ViewGroup) this.f17430d.getCurrentActivity().findViewById(16908290);
        }

        public void f(boolean z10) {
            this.f17441w = z10;
        }

        public void g(g.b bVar) {
            this.f17440v = bVar;
        }

        @Override // android.webkit.WebChromeClient
        public boolean onConsoleMessage(ConsoleMessage consoleMessage) {
            if (ReactBuildConfig.DEBUG) {
                return super.onConsoleMessage(consoleMessage);
            }
            return true;
        }

        @Override // android.webkit.WebChromeClient
        public boolean onCreateWindow(WebView webView, boolean z10, boolean z11, Message message) {
            ((WebView.WebViewTransport) message.obj).setWebView(new WebView(webView.getContext()));
            message.sendToTarget();
            return true;
        }

        @Override // android.webkit.WebChromeClient
        public void onGeolocationPermissionsShowPrompt(String str, GeolocationPermissions.Callback callback) {
            if (androidx.core.content.a.a(this.f17430d, "android.permission.ACCESS_FINE_LOCATION") != 0) {
                this.f17436r = callback;
                this.f17437s = str;
                e(Collections.singletonList("android.permission.ACCESS_FINE_LOCATION"));
                return;
            }
            callback.invoke(str, true, false);
        }

        @Override // com.facebook.react.bridge.LifecycleEventListener
        public void onHostDestroy() {
        }

        @Override // com.facebook.react.bridge.LifecycleEventListener
        public void onHostPause() {
        }

        @Override // com.facebook.react.bridge.LifecycleEventListener
        public void onHostResume() {
            View view = this.f17432i;
            if (view != null && view.getSystemUiVisibility() != 7942) {
                this.f17432i.setSystemUiVisibility(7942);
            }
        }

        @Override // android.webkit.WebChromeClient
        public void onPermissionRequest(PermissionRequest permissionRequest) {
            this.f17435q = new ArrayList();
            ArrayList arrayList = new ArrayList();
            String[] resources = permissionRequest.getResources();
            int length = resources.length;
            int i10 = 0;
            while (true) {
                String str = null;
                if (i10 >= length) {
                    break;
                }
                String str2 = resources[i10];
                if (str2.equals("android.webkit.resource.AUDIO_CAPTURE")) {
                    str = "android.permission.RECORD_AUDIO";
                } else if (str2.equals("android.webkit.resource.VIDEO_CAPTURE")) {
                    str = "android.permission.CAMERA";
                } else if (str2.equals("android.webkit.resource.PROTECTED_MEDIA_ID")) {
                    if (!this.f17441w) {
                        str = "android.webkit.resource.PROTECTED_MEDIA_ID";
                    } else {
                        this.f17435q.add(str2);
                    }
                }
                if (str != null) {
                    if (androidx.core.content.a.a(this.f17430d, str) == 0) {
                        this.f17435q.add(str2);
                    } else {
                        arrayList.add(str);
                    }
                }
                i10++;
            }
            if (arrayList.isEmpty()) {
                permissionRequest.grant((String[]) this.f17435q.toArray(new String[0]));
                this.f17435q = null;
                return;
            }
            this.f17434p = permissionRequest;
            e(arrayList);
        }

        @Override // android.webkit.WebChromeClient
        public void onProgressChanged(WebView webView, int i10) {
            super.onProgressChanged(webView, i10);
            String url = webView.getUrl();
            if (this.f17440v.a()) {
                return;
            }
            WritableMap createMap = Arguments.createMap();
            createMap.putDouble("target", com.reactnativecommunity.webview.b.c(webView));
            createMap.putString("title", webView.getTitle());
            createMap.putString("url", url);
            createMap.putBoolean("canGoBack", webView.canGoBack());
            createMap.putBoolean("canGoForward", webView.canGoForward());
            createMap.putDouble(ReactProgressBarViewManager.PROP_PROGRESS, i10 / 100.0f);
            ((g) webView).g(webView, new hm.d(com.reactnativecommunity.webview.b.c(webView), createMap));
        }

        @Override // android.webkit.WebChromeClient
        public boolean onShowFileChooser(WebView webView, ValueCallback valueCallback, WebChromeClient.FileChooserParams fileChooserParams) {
            String[] acceptTypes = fileChooserParams.getAcceptTypes();
            boolean z10 = true;
            if (fileChooserParams.getMode() != 1) {
                z10 = false;
            }
            return RNCWebViewManager.getModule(this.f17430d).startPhotoPickerIntent(valueCallback, acceptTypes, z10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class g extends WebView implements LifecycleEventListener {
        private static int B;
        WebChromeClient A;

        /* renamed from: d  reason: collision with root package name */
        protected String f17443d;

        /* renamed from: e  reason: collision with root package name */
        protected String f17444e;

        /* renamed from: i  reason: collision with root package name */
        protected boolean f17445i;

        /* renamed from: o  reason: collision with root package name */
        protected boolean f17446o;

        /* renamed from: p  reason: collision with root package name */
        protected boolean f17447p;

        /* renamed from: q  reason: collision with root package name */
        protected String f17448q;

        /* renamed from: r  reason: collision with root package name */
        protected String f17449r;

        /* renamed from: s  reason: collision with root package name */
        protected h f17450s;

        /* renamed from: t  reason: collision with root package name */
        protected CatalystInstance f17451t;

        /* renamed from: u  reason: collision with root package name */
        protected boolean f17452u;

        /* renamed from: v  reason: collision with root package name */
        private OnScrollDispatchHelper f17453v;

        /* renamed from: w  reason: collision with root package name */
        protected boolean f17454w;

        /* renamed from: x  reason: collision with root package name */
        protected boolean f17455x;

        /* renamed from: y  reason: collision with root package name */
        protected b f17456y;

        /* renamed from: z  reason: collision with root package name */
        protected ReadableMap f17457z;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public class a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ WebView f17458d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ String f17459e;

            a(WebView webView, String str) {
                this.f17458d = webView;
                this.f17459e = str;
            }

            @Override // java.lang.Runnable
            public void run() {
                h hVar = g.this.f17450s;
                if (hVar == null) {
                    return;
                }
                WebView webView = this.f17458d;
                WritableMap a10 = hVar.a(webView, webView.getUrl());
                a10.putString("data", this.f17459e);
                g.this.g(this.f17458d, new hm.f(com.reactnativecommunity.webview.b.c(this.f17458d), a10));
            }
        }

        /* JADX INFO: Access modifiers changed from: protected */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static class b {

            /* renamed from: a  reason: collision with root package name */
            private boolean f17461a = false;

            protected b() {
            }

            public boolean a() {
                return this.f17461a;
            }

            public void b(boolean z10) {
                this.f17461a = z10;
            }
        }

        /* JADX INFO: Access modifiers changed from: protected */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public class c {

            /* renamed from: a  reason: collision with root package name */
            g f17462a;

            c(g gVar) {
                this.f17462a = gVar;
            }

            @JavascriptInterface
            public void postMessage(String str) {
                this.f17462a.k(str);
            }
        }

        public g(ThemedReactContext themedReactContext) {
            super(themedReactContext);
            this.f17445i = true;
            this.f17446o = true;
            this.f17447p = false;
            this.f17452u = false;
            this.f17454w = false;
            this.f17455x = false;
            int i10 = B + 1;
            B = i10;
            setId(i10);
            e();
            this.f17456y = new b();
            setBackgroundColor(0);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public /* synthetic */ void j(WebView webView, String str, ReactContext reactContext) {
            WritableMap a10 = this.f17450s.a(webView, webView.getUrl());
            a10.putString("webViewKey", this.f17448q);
            a10.putString("data", str);
            ((DeviceEventManagerModule.RCTDeviceEventEmitter) reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)).emit("ReactNativeWebViewOnMessageWithWebViewKey", a10);
        }

        public void b() {
            String str;
            if (getSettings().getJavaScriptEnabled() && (str = this.f17443d) != null && !TextUtils.isEmpty(str)) {
                h("(function() {\n" + this.f17443d + ";\n})();");
            }
        }

        public void c() {
            String str;
            if (getSettings().getJavaScriptEnabled() && (str = this.f17444e) != null && !TextUtils.isEmpty(str)) {
                h("(function() {\n" + this.f17444e + ";\n})();");
            }
        }

        /* JADX INFO: Access modifiers changed from: protected */
        public void d() {
            setWebViewClient(null);
            destroy();
        }

        @Override // android.webkit.WebView
        public void destroy() {
            WebChromeClient webChromeClient = this.A;
            if (webChromeClient != null) {
                webChromeClient.onHideCustomView();
            }
            super.destroy();
        }

        protected void e() {
            ReactContext reactContext = (ReactContext) getContext();
            if (reactContext != null) {
                this.f17451t = reactContext.getCatalystInstance();
            }
        }

        protected c f(g gVar) {
            return new c(gVar);
        }

        protected void g(WebView webView, Event event) {
            if (event.getViewTag() == -1) {
                p8.a.J(RNCWebViewManager.TAG, "Unable to dispatch event: " + event.getEventName() + "due to RNCWebView not being attached.");
                return;
            }
            UIManager uIManagerForReactTag = UIManagerHelper.getUIManagerForReactTag((ReactContext) webView.getContext(), event.getViewTag());
            if (uIManagerForReactTag == null) {
                p8.a.J(RNCWebViewManager.TAG, "Unable to dispatch event: " + event.getEventName() + "due to RNCWebView not having a valid UIManager.");
                return;
            }
            uIManagerForReactTag.getEventDispatcher().dispatchEvent(event);
        }

        public h getRNCWebViewClient() {
            return this.f17450s;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        public void h(String str) {
            evaluateJavascript(str, null);
        }

        public boolean i(ReadableMap readableMap) {
            Map hashMap;
            Object hashMap2;
            if (this.f17457z == null || readableMap == null) {
                return true;
            }
            String[] strArr = {"uri", "method", "body", "html", "baseUrl"};
            for (int i10 = 0; i10 < 5; i10++) {
                String str = strArr[i10];
                String string = this.f17457z.getString(str);
                String string2 = readableMap.getString(str);
                if (string2 != null && !string2.equals(string)) {
                    return true;
                }
            }
            ReadableMap map = this.f17457z.getMap("headers");
            ReadableMap map2 = readableMap.getMap("headers");
            if (map == null) {
                hashMap = Collections.EMPTY_MAP;
            } else {
                hashMap = map.toHashMap();
            }
            if (map2 == null) {
                hashMap2 = Collections.EMPTY_MAP;
            } else {
                hashMap2 = map2.toHashMap();
            }
            return !hashMap.equals(hashMap2);
        }

        public void k(final String str) {
            final ReactContext reactContext = (ReactContext) getContext();
            if (this.f17448q != null && this.f17450s != null) {
                reactContext.runOnUiQueueThread(new Runnable() { // from class: com.reactnativecommunity.webview.z0
                    @Override // java.lang.Runnable
                    public final void run() {
                        RNCWebViewManager.g.this.j(this, str, reactContext);
                    }
                });
            } else if (this.f17450s != null) {
                post(new a(this, str));
            } else {
                WritableMap createMap = Arguments.createMap();
                createMap.putString("data", str);
                g(this, new hm.f(com.reactnativecommunity.webview.b.c(this), createMap));
            }
        }

        @Override // com.facebook.react.bridge.LifecycleEventListener
        public void onHostDestroy() {
            d();
        }

        @Override // com.facebook.react.bridge.LifecycleEventListener
        public void onHostPause() {
        }

        @Override // com.facebook.react.bridge.LifecycleEventListener
        public void onHostResume() {
        }

        @Override // android.webkit.WebView, android.view.View
        protected void onScrollChanged(int i10, int i11, int i12, int i13) {
            super.onScrollChanged(i10, i11, i12, i13);
            if (this.f17454w) {
                if (this.f17453v == null) {
                    this.f17453v = new OnScrollDispatchHelper();
                }
                if (this.f17453v.onScrollChanged(i10, i11)) {
                    g(this, ScrollEvent.obtain(com.reactnativecommunity.webview.b.c(this), ScrollEventType.SCROLL, i10, i11, this.f17453v.getXFlingVelocity(), this.f17453v.getYFlingVelocity(), computeHorizontalScrollRange(), computeVerticalScrollRange(), getWidth(), getHeight()));
                }
            }
        }

        @Override // android.webkit.WebView, android.view.View
        protected void onSizeChanged(int i10, int i11, int i12, int i13) {
            super.onSizeChanged(i10, i11, i12, i13);
            if (this.f17452u) {
                g(this, new ContentSizeChangeEvent(com.reactnativecommunity.webview.b.c(this), i10, i11));
            }
        }

        @Override // android.webkit.WebView, android.view.View
        public boolean onTouchEvent(MotionEvent motionEvent) {
            if (this.f17455x) {
                requestDisallowInterceptTouchEvent(true);
            }
            return super.onTouchEvent(motionEvent);
        }

        public void setBasicAuthCredential(com.reactnativecommunity.webview.a aVar) {
            this.f17450s.c(aVar);
        }

        public void setHasScrollEvent(boolean z10) {
            this.f17454w = z10;
        }

        public void setIgnoreErrFailedForThisURL(String str) {
            this.f17450s.d(str);
        }

        public void setInjectedJavaScript(String str) {
            this.f17443d = str;
        }

        public void setInjectedJavaScriptBeforeContentLoaded(String str) {
            this.f17444e = str;
        }

        public void setInjectedJavaScriptBeforeContentLoadedForMainFrameOnly(boolean z10) {
            this.f17446o = z10;
        }

        public void setInjectedJavaScriptForMainFrameOnly(boolean z10) {
            this.f17445i = z10;
        }

        @SuppressLint({"AddJavascriptInterface"})
        public void setMessagingEnabled(boolean z10) {
            if (this.f17447p == z10) {
                return;
            }
            this.f17447p = z10;
            if (z10) {
                addJavascriptInterface(f(this), RNCWebViewManager.JAVASCRIPT_INTERFACE);
            } else {
                removeJavascriptInterface(RNCWebViewManager.JAVASCRIPT_INTERFACE);
            }
        }

        public void setMessagingModuleName(String str) {
            this.f17449r = str;
        }

        public void setNestedScrollEnabled(boolean z10) {
            this.f17455x = z10;
        }

        public void setSendContentSizeChangeEvents(boolean z10) {
            this.f17452u = z10;
        }

        public void setSource(ReadableMap readableMap) {
            this.f17457z = readableMap;
        }

        @Override // android.webkit.WebView
        public void setWebChromeClient(WebChromeClient webChromeClient) {
            this.A = webChromeClient;
            super.setWebChromeClient(webChromeClient);
            if (webChromeClient instanceof f) {
                ((f) webChromeClient).g(this.f17456y);
            }
        }

        public void setWebViewAssetLoader(f4.b bVar) {
            this.f17450s.g(bVar);
        }

        @Override // android.webkit.WebView
        public void setWebViewClient(WebViewClient webViewClient) {
            super.setWebViewClient(webViewClient);
            if (webViewClient instanceof h) {
                h hVar = (h) webViewClient;
                this.f17450s = hVar;
                hVar.e(this.f17456y);
            }
        }

        public void setWebViewKey(String str) {
            this.f17448q = str;
        }
    }

    public RNCWebViewManager() {
        this.mWebChromeClient = null;
        this.mAllowsFullscreenVideo = false;
        this.mAllowsProtectedMedia = false;
        this.mUserAgent = null;
        this.mUserAgentWithApplicationName = null;
        this.mDownloadingMessage = null;
        this.mLackPermissionToDownloadMessage = null;
        this.assetLoaderHandlerTypes = new HashSet(Arrays.asList("assets", "internal", "resources"));
        this.mWebViewConfig = new a();
    }

    public static /* synthetic */ void B(boolean z10, g gVar) {
        int i10;
        WebSettings settings = gVar.getSettings();
        if (z10) {
            i10 = -1;
        } else {
            i10 = 2;
        }
        settings.setCacheMode(i10);
    }

    public static /* synthetic */ void E(g gVar) {
        gVar.getSettings().setCacheMode(2);
        gVar.clearHistory();
        gVar.clearCache(true);
        gVar.clearFormData();
        gVar.getSettings().setSavePassword(false);
        gVar.getSettings().setSaveFormData(false);
    }

    public static /* synthetic */ void N(f4.b bVar, g gVar) {
        gVar.setWebViewAssetLoader(bVar);
        if (gVar.getUrl() != null) {
            gVar.reload();
        }
    }

    public static /* synthetic */ void O(String str, com.reactnativecommunity.webview.b bVar, Map map, g gVar) {
        gVar.setWebViewKey(str);
        a1.f17488a.b().put(Integer.valueOf(gVar.getId()), Integer.valueOf(bVar.getId()));
        map.put(str, gVar);
    }

    public static /* synthetic */ void S(ReadableArray readableArray, g gVar) {
        h rNCWebViewClient = gVar.getRNCWebViewClient();
        if (rNCWebViewClient != null && readableArray != null) {
            rNCWebViewClient.f(readableArray);
        }
    }

    public static /* synthetic */ void a(String str, ReadableArray readableArray, g gVar) {
        boolean z10 = false;
        switch (str.hashCode()) {
            case -1241591313:
                if (str.equals("goBack")) {
                    gVar.goBack();
                    return;
                }
                return;
            case -948122918:
                if (str.equals("stopLoading")) {
                    gVar.stopLoading();
                    return;
                }
                return;
            case -934641255:
                if (str.equals("reload")) {
                    gVar.reload();
                    return;
                }
                return;
            case -759238347:
                if (str.equals("clearCache")) {
                    if (readableArray != null && readableArray.getBoolean(0)) {
                        z10 = true;
                    }
                    gVar.clearCache(z10);
                    return;
                }
                return;
            case -318289731:
                if (str.equals("goForward")) {
                    gVar.goForward();
                    return;
                }
                return;
            case -265032709:
                if (str.equals("clearFormData")) {
                    gVar.clearFormData();
                    return;
                }
                return;
            case 336631465:
                if (str.equals("loadUrl")) {
                    if (readableArray != null) {
                        gVar.f17456y.b(false);
                        gVar.loadUrl(readableArray.getString(0));
                        return;
                    }
                    throw new RuntimeException("Arguments for loading an url are null!");
                }
                return;
            case 903120263:
                if (str.equals("clearHistory")) {
                    gVar.clearHistory();
                    return;
                }
                return;
            case 1090594823:
                str.equals("release");
                return;
            case 1280029577:
                if (str.equals("requestFocus")) {
                    gVar.requestFocus();
                    return;
                }
                return;
            case 1490029383:
                if (str.equals("postMessage")) {
                    try {
                        JSONObject jSONObject = new JSONObject();
                        jSONObject.put("data", readableArray.getString(0));
                        gVar.h("(function () {var event;var data = " + jSONObject.toString() + ";try {event = new MessageEvent('message', data);} catch (e) {event = document.createEvent('MessageEvent');event.initMessageEvent('message', true, true, data.data, data.origin, data.lastEventId, data.source);}document.dispatchEvent(event);})();");
                        return;
                    } catch (JSONException e10) {
                        throw new RuntimeException(e10);
                    }
                }
                return;
            case 2104576510:
                if (str.equals("injectJavaScript")) {
                    gVar.h(readableArray.getString(0));
                    return;
                }
                return;
            default:
                return;
        }
    }

    public static /* synthetic */ void b(boolean z10, g gVar) {
        gVar.getSettings().setLoadWithOverviewMode(z10);
        gVar.getSettings().setUseWideViewPort(z10);
    }

    public static /* synthetic */ void e(Boolean bool, g gVar) {
        boolean z10;
        WebSettings settings = gVar.getSettings();
        if (bool != null && bool.booleanValue()) {
            z10 = true;
        } else {
            z10 = false;
        }
        settings.setGeolocationEnabled(z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public String getDownloadingMessage() {
        String str = this.mDownloadingMessage;
        if (str == null) {
            return DEFAULT_DOWNLOADING_MESSAGE;
        }
        return str;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public String getLackPermissionToDownloadMessage() {
        if (this.mDownloadingMessage == null) {
            return DEFAULT_LACK_PERMISSION_TO_DOWNLOAD_MESSAGE;
        }
        return this.mLackPermissionToDownloadMessage;
    }

    public static RNCWebViewModule getModule(ReactContext reactContext) {
        return (RNCWebViewModule) reactContext.getNativeModule(RNCWebViewModule.class);
    }

    public static /* synthetic */ void i(Boolean bool, g gVar) {
        boolean z10;
        WebSettings settings = gVar.getSettings();
        if (bool != null && bool.booleanValue()) {
            z10 = true;
        } else {
            z10 = false;
        }
        settings.setAllowFileAccess(z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ void lambda$onDropViewInstance$46(com.reactnativecommunity.webview.b bVar, g gVar) {
        if (gVar.f17448q == null) {
            ((ThemedReactContext) gVar.getContext()).removeLifecycleEventListener(gVar);
            gVar.d();
            this.mWebChromeClient = null;
            return;
        }
        bVar.e();
        a1.f17488a.b().remove(Integer.valueOf(gVar.getId()));
        if (bVar.f17491d != 0) {
            ViewGroup viewGroup = (ViewGroup) ((UIManagerModule) ((ReactContext) bVar.getContext()).getNativeModule(UIManagerModule.class)).resolveView(bVar.f17491d);
            viewGroup.addView(gVar);
            gVar.measure(View.MeasureSpec.makeMeasureSpec(viewGroup.getMeasuredWidth(), 1073741824), View.MeasureSpec.makeMeasureSpec(viewGroup.getMeasuredHeight(), 1073741824));
            gVar.layout(0, 0, gVar.getMeasuredWidth(), gVar.getMeasuredHeight());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ void lambda$setAllowsFullscreenVideo$37(com.reactnativecommunity.webview.b bVar, g gVar) {
        setupWebChromeClient((ReactContext) bVar.getContext(), gVar);
    }

    public static /* synthetic */ void q(boolean z10, g gVar) {
        int i10;
        if (Build.VERSION.SDK_INT > 28) {
            if (f4.c.a("FORCE_DARK")) {
                if (z10) {
                    i10 = 2;
                } else {
                    i10 = 0;
                }
                f4.a.b(gVar.getSettings(), i10);
            }
            if (z10 && f4.c.a("FORCE_DARK_STRATEGY")) {
                f4.a.c(gVar.getSettings(), 2);
            }
        }
    }

    public static /* synthetic */ void r(boolean z10, g gVar) {
        WebChromeClient webChromeClient = gVar.getWebChromeClient();
        if (webChromeClient != null && (webChromeClient instanceof f)) {
            ((f) webChromeClient).f(z10);
        }
    }

    public static /* synthetic */ void s(ReadableMap readableMap, g gVar) {
        g gVar2;
        byte[] bArr;
        String str;
        if (gVar.f17448q == null || gVar.i(readableMap)) {
            gVar.setSource(readableMap);
            if (readableMap != null) {
                if (readableMap.hasKey("html")) {
                    String string = readableMap.getString("html");
                    if (readableMap.hasKey("baseUrl")) {
                        str = readableMap.getString("baseUrl");
                    } else {
                        str = "";
                    }
                    gVar.loadDataWithBaseURL(str, string, HTML_MIME_TYPE, HTML_ENCODING, null);
                    return;
                }
                gVar2 = gVar;
                if (readableMap.hasKey("uri")) {
                    String string2 = readableMap.getString("uri");
                    String url = gVar2.getUrl();
                    if (url != null && url.equals(string2)) {
                        return;
                    }
                    if (readableMap.hasKey("method") && readableMap.getString("method").equalsIgnoreCase(HTTP_METHOD_POST)) {
                        if (readableMap.hasKey("body")) {
                            String string3 = readableMap.getString("body");
                            try {
                                bArr = string3.getBytes(HTML_ENCODING);
                            } catch (UnsupportedEncodingException unused) {
                                bArr = string3.getBytes();
                            }
                        } else {
                            bArr = null;
                        }
                        if (bArr == null) {
                            bArr = new byte[0];
                        }
                        gVar2.postUrl(string2, bArr);
                        return;
                    }
                    HashMap hashMap = new HashMap();
                    if (readableMap.hasKey("headers")) {
                        ReadableMap map = readableMap.getMap("headers");
                        ReadableMapKeySetIterator keySetIterator = map.keySetIterator();
                        while (keySetIterator.hasNextKey()) {
                            String nextKey = keySetIterator.nextKey();
                            if ("user-agent".equals(nextKey.toLowerCase(Locale.ENGLISH))) {
                                if (gVar2.getSettings() != null) {
                                    gVar2.getSettings().setUserAgentString(map.getString(nextKey));
                                }
                            } else {
                                hashMap.put(nextKey, map.getString(nextKey));
                            }
                        }
                    }
                    gVar2.loadUrl(string2, hashMap);
                    return;
                }
            } else {
                gVar2 = gVar;
            }
            gVar2.loadUrl(BLANK_URL);
        }
    }

    public static /* synthetic */ void y(ReadableMap readableMap, g gVar) {
        com.reactnativecommunity.webview.a aVar;
        if (readableMap != null && readableMap.hasKey(NotificationRenderer.USERNAME) && readableMap.hasKey("password")) {
            aVar = new com.reactnativecommunity.webview.a(readableMap.getString(NotificationRenderer.USERNAME), readableMap.getString("password"));
        } else {
            aVar = null;
        }
        gVar.setBasicAuthCredential(aVar);
    }

    protected g createRNCWebViewInstance(ThemedReactContext themedReactContext) {
        return new g(themedReactContext);
    }

    @Override // com.facebook.react.uimanager.ViewManager
    public Map<String, Integer> getCommandsMap() {
        return MapBuilder.builder().put("goBack", 1).put("goForward", 2).put("reload", 3).put("stopLoading", 4).put("postMessage", 5).put("injectJavaScript", 6).put("loadUrl", 7).put("requestFocus", 8).put("clearFormData", 1000).put("clearCache", Integer.valueOf((int) COMMAND_CLEAR_CACHE)).put("clearHistory", Integer.valueOf((int) COMMAND_CLEAR_HISTORY)).put("release", Integer.valueOf((int) COMMAND_RELEASE)).build();
    }

    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    public Map getExportedCustomDirectEventTypeConstants() {
        Map<String, Object> exportedCustomDirectEventTypeConstants = super.getExportedCustomDirectEventTypeConstants();
        if (exportedCustomDirectEventTypeConstants == null) {
            exportedCustomDirectEventTypeConstants = MapBuilder.newHashMap();
        }
        exportedCustomDirectEventTypeConstants.put("topLoadingStart", MapBuilder.of("registrationName", "onLoadingStart"));
        exportedCustomDirectEventTypeConstants.put("topLoadingFinish", MapBuilder.of("registrationName", "onLoadingFinish"));
        exportedCustomDirectEventTypeConstants.put("topLoadingError", MapBuilder.of("registrationName", "onLoadingError"));
        exportedCustomDirectEventTypeConstants.put("topMessage", MapBuilder.of("registrationName", "onMessage"));
        exportedCustomDirectEventTypeConstants.put("topLoadingProgress", MapBuilder.of("registrationName", "onLoadingProgress"));
        exportedCustomDirectEventTypeConstants.put("topShouldStartLoadWithRequest", MapBuilder.of("registrationName", "onShouldStartLoadWithRequest"));
        exportedCustomDirectEventTypeConstants.put(ScrollEventType.getJSEventName(ScrollEventType.SCROLL), MapBuilder.of("registrationName", "onScroll"));
        exportedCustomDirectEventTypeConstants.put("topHttpError", MapBuilder.of("registrationName", "onHttpError"));
        exportedCustomDirectEventTypeConstants.put("topRenderProcessGone", MapBuilder.of("registrationName", "onRenderProcessGone"));
        return exportedCustomDirectEventTypeConstants;
    }

    @Override // com.facebook.react.uimanager.ViewManager, com.facebook.react.bridge.NativeModule
    public String getName() {
        return REACT_CLASS;
    }

    @ReactProp(name = "allowFileAccess")
    public void setAllowFileAccess(com.reactnativecommunity.webview.b bVar, final Boolean bool) {
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.q
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                RNCWebViewManager.i(bool, gVar);
            }
        });
    }

    @ReactProp(name = "allowFileAccessFromFileURLs")
    public void setAllowFileAccessFromFileURLs(com.reactnativecommunity.webview.b bVar, final boolean z10) {
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.a0
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                gVar.getSettings().setAllowFileAccessFromFileURLs(z10);
            }
        });
    }

    @ReactProp(name = "allowUniversalAccessFromFileURLs")
    public void setAllowUniversalAccessFromFileURLs(com.reactnativecommunity.webview.b bVar, final boolean z10) {
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.z
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                gVar.getSettings().setAllowUniversalAccessFromFileURLs(z10);
            }
        });
    }

    @ReactProp(name = "allowsFullscreenVideo")
    public void setAllowsFullscreenVideo(final com.reactnativecommunity.webview.b bVar, Boolean bool) {
        boolean z10;
        if (bool != null && bool.booleanValue()) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.mAllowsFullscreenVideo = z10;
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.k0
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                RNCWebViewManager.this.lambda$setAllowsFullscreenVideo$37(bVar, gVar);
            }
        });
    }

    @ReactProp(name = "allowsProtectedMedia")
    public void setAllowsProtectedMedia(com.reactnativecommunity.webview.b bVar, final boolean z10) {
        this.mAllowsProtectedMedia = z10;
        if (Build.VERSION.SDK_INT >= 26) {
            bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.g
                @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
                public final void a(RNCWebViewManager.g gVar) {
                    RNCWebViewManager.r(z10, gVar);
                }
            });
        }
    }

    @ReactProp(name = "applicationNameForUserAgent")
    public void setApplicationNameForUserAgent(com.reactnativecommunity.webview.b bVar, String str) {
        if (str != null) {
            String defaultUserAgent = WebSettings.getDefaultUserAgent(bVar.getContext());
            this.mUserAgentWithApplicationName = defaultUserAgent + " " + str;
        } else {
            this.mUserAgentWithApplicationName = null;
        }
        bVar.d(new l(this));
    }

    @ReactProp(name = "androidAssetLoaderConfig")
    public void setAssetLoaderConfig(com.reactnativecommunity.webview.b bVar, ReadableMap readableMap) {
        b.C0317b c0317b = new b.C0317b();
        String string = readableMap.getString("domain");
        if (string != null) {
            c0317b.c(string);
        }
        if (readableMap.hasKey("httpAllowed")) {
            c0317b.d(readableMap.getBoolean("httpAllowed"));
        }
        ReadableArray array = readableMap.getArray("pathHandlers");
        if (array != null && array.size() > 0) {
            for (int i10 = 0; i10 < array.size(); i10++) {
                ReadableMap map = array.getMap(i10);
                String string2 = map.getString("type");
                if (string2 == null) {
                    p8.a.J(TAG, "WebViewAssetLoader error. Path Handler type is null.");
                } else if (!this.assetLoaderHandlerTypes.contains(string2)) {
                    p8.a.J(TAG, "WebViewAssetLoader error. Skipping Path Handler. Unexpected handler type: " + string2 + ". Path Handler type must be one of " + this.assetLoaderHandlerTypes);
                } else {
                    String string3 = map.getString("path");
                    if (string3 == null) {
                        p8.a.J(TAG, "WebViewAssetLoader error. Skipping Path Handler. Handler path is missing");
                    } else if (string2.equals("resources")) {
                        c0317b.a(string3, new b.f(bVar.getContext()));
                    } else if (string2.equals("assets")) {
                        c0317b.a(string3, new b.a(bVar.getContext()));
                    } else if (string2.equals("internal")) {
                        String string4 = map.getString("directory");
                        if (string4 == null) {
                            p8.a.J(TAG, "WebViewAssetLoader error. Skipping Path Handler. Directory is missing for internal handler path");
                        } else {
                            c0317b.a(string3, new b.c(bVar.getContext(), new File(string4)));
                        }
                    }
                }
            }
        } else {
            p8.a.J(TAG, "WebViewAssetLoader error. No Path Handlers found.");
        }
        final f4.b b10 = c0317b.b();
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.i
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                RNCWebViewManager.N(f4.b.this, gVar);
            }
        });
    }

    @ReactProp(name = "basicAuthCredential")
    public void setBasicAuthCredential(com.reactnativecommunity.webview.b bVar, final ReadableMap readableMap) {
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.n0
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                RNCWebViewManager.y(ReadableMap.this, gVar);
            }
        });
    }

    @ReactProp(name = "setBuiltInZoomControls")
    public void setBuiltInZoomControls(com.reactnativecommunity.webview.b bVar, final boolean z10) {
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.r0
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                gVar.getSettings().setBuiltInZoomControls(z10);
            }
        });
    }

    @ReactProp(name = "cacheEnabled")
    public void setCacheEnabled(com.reactnativecommunity.webview.b bVar, final boolean z10) {
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.t0
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                RNCWebViewManager.B(z10, gVar);
            }
        });
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    @ReactProp(name = "cacheMode")
    public void setCacheMode(com.reactnativecommunity.webview.b bVar, String str) {
        final int i10;
        switch (str.hashCode()) {
            case -2059164003:
                if (str.equals("LOAD_NO_CACHE")) {
                    i10 = 2;
                    break;
                }
                i10 = -1;
                break;
            case -1215135800:
                str.equals("LOAD_DEFAULT");
                i10 = -1;
                break;
            case -873877826:
                if (str.equals("LOAD_CACHE_ELSE_NETWORK")) {
                    i10 = 1;
                    break;
                }
                i10 = -1;
                break;
            case 1548620642:
                if (str.equals("LOAD_CACHE_ONLY")) {
                    i10 = 3;
                    break;
                }
                i10 = -1;
                break;
            default:
                i10 = -1;
                break;
        }
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.p0
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                gVar.getSettings().setCacheMode(i10.intValue());
            }
        });
    }

    @ReactProp(name = "setDisplayZoomControls")
    public void setDisplayZoomControls(com.reactnativecommunity.webview.b bVar, final boolean z10) {
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.f
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                gVar.getSettings().setDisplayZoomControls(z10);
            }
        });
    }

    @ReactProp(name = "domStorageEnabled")
    public void setDomStorageEnabled(com.reactnativecommunity.webview.b bVar, final boolean z10) {
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.e
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                gVar.getSettings().setDomStorageEnabled(z10);
            }
        });
    }

    @ReactProp(name = "downloadingMessage")
    public void setDownloadingMessage(WebView webView, String str) {
        this.mDownloadingMessage = str;
    }

    @ReactProp(name = "forceDarkOn")
    public void setForceDarkOn(com.reactnativecommunity.webview.b bVar, final boolean z10) {
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.o0
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                RNCWebViewManager.q(z10, gVar);
            }
        });
    }

    @ReactProp(name = "geolocationEnabled")
    public void setGeolocationEnabled(com.reactnativecommunity.webview.b bVar, final Boolean bool) {
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.c0
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                RNCWebViewManager.e(bool, gVar);
            }
        });
    }

    @ReactProp(name = "androidHardwareAccelerationDisabled")
    public void setHardwareAccelerationDisabled(com.reactnativecommunity.webview.b bVar, boolean z10) {
        if (z10) {
            bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.o
                @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
                public final void a(RNCWebViewManager.g gVar) {
                    gVar.setLayerType(1, null);
                }
            });
        }
    }

    @ReactProp(name = "incognito")
    public void setIncognito(com.reactnativecommunity.webview.b bVar, boolean z10) {
        if (!z10) {
            return;
        }
        CookieManager.getInstance().removeAllCookies(null);
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.x
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                RNCWebViewManager.E(gVar);
            }
        });
    }

    @ReactProp(name = "injectedJavaScript")
    public void setInjectedJavaScript(com.reactnativecommunity.webview.b bVar, final String str) {
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.u
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                gVar.setInjectedJavaScript(str);
            }
        });
    }

    @ReactProp(name = "injectedJavaScriptBeforeContentLoaded")
    public void setInjectedJavaScriptBeforeContentLoaded(com.reactnativecommunity.webview.b bVar, final String str) {
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.k
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                gVar.setInjectedJavaScriptBeforeContentLoaded(str);
            }
        });
    }

    @ReactProp(name = "injectedJavaScriptBeforeContentLoadedForMainFrameOnly")
    public void setInjectedJavaScriptBeforeContentLoadedForMainFrameOnly(com.reactnativecommunity.webview.b bVar, final boolean z10) {
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.s0
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                gVar.setInjectedJavaScriptBeforeContentLoadedForMainFrameOnly(z10);
            }
        });
    }

    @ReactProp(name = "injectedJavaScriptForMainFrameOnly")
    public void setInjectedJavaScriptForMainFrameOnly(com.reactnativecommunity.webview.b bVar, final boolean z10) {
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.w
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                gVar.setInjectedJavaScriptForMainFrameOnly(z10);
            }
        });
    }

    @ReactProp(name = "javaScriptCanOpenWindowsAutomatically")
    public void setJavaScriptCanOpenWindowsAutomatically(com.reactnativecommunity.webview.b bVar, final boolean z10) {
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.j0
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                gVar.getSettings().setJavaScriptCanOpenWindowsAutomatically(z10);
            }
        });
    }

    @ReactProp(name = "javaScriptEnabled")
    public void setJavaScriptEnabled(com.reactnativecommunity.webview.b bVar, final boolean z10) {
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.d
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                gVar.getSettings().setJavaScriptEnabled(z10);
            }
        });
    }

    @ReactProp(name = "lackPermissionToDownloadMessage")
    public void setLackPermissionToDownlaodMessage(WebView webView, String str) {
        this.mLackPermissionToDownloadMessage = str;
    }

    @ReactProp(name = "androidLayerType")
    public void setLayerType(com.reactnativecommunity.webview.b bVar, String str) {
        final int i10;
        str.getClass();
        if (!str.equals("hardware")) {
            if (!str.equals("software")) {
                i10 = 0;
            } else {
                i10 = 1;
            }
        } else {
            i10 = 2;
        }
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.x0
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                gVar.setLayerType(i10, null);
            }
        });
    }

    @ReactProp(name = "mediaPlaybackRequiresUserAction")
    @TargetApi(17)
    public void setMediaPlaybackRequiresUserAction(com.reactnativecommunity.webview.b bVar, final boolean z10) {
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.n
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                gVar.getSettings().setMediaPlaybackRequiresUserGesture(z10);
            }
        });
    }

    @ReactProp(name = "messagingEnabled")
    public void setMessagingEnabled(com.reactnativecommunity.webview.b bVar, final boolean z10) {
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.i0
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                gVar.setMessagingEnabled(z10);
            }
        });
    }

    @ReactProp(name = "messagingModuleName")
    public void setMessagingModuleName(com.reactnativecommunity.webview.b bVar, final String str) {
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.h0
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                gVar.setMessagingModuleName(str);
            }
        });
    }

    @ReactProp(name = "minimumFontSize")
    public void setMinimumFontSize(com.reactnativecommunity.webview.b bVar, final int i10) {
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.v0
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                gVar.getSettings().setMinimumFontSize(i10);
            }
        });
    }

    @ReactProp(name = "mixedContentMode")
    public void setMixedContentMode(com.reactnativecommunity.webview.b bVar, String str) {
        if (str != null && !ReactScrollViewHelper.OVER_SCROLL_NEVER.equals(str)) {
            if (ReactScrollViewHelper.OVER_SCROLL_ALWAYS.equals(str)) {
                bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.f0
                    @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
                    public final void a(RNCWebViewManager.g gVar) {
                        gVar.getSettings().setMixedContentMode(0);
                    }
                });
                return;
            } else if ("compatibility".equals(str)) {
                bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.g0
                    @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
                    public final void a(RNCWebViewManager.g gVar) {
                        gVar.getSettings().setMixedContentMode(2);
                    }
                });
                return;
            } else {
                return;
            }
        }
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.e0
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                gVar.getSettings().setMixedContentMode(1);
            }
        });
    }

    @ReactProp(name = "nestedScrollEnabled")
    public void setNestedScrollEnabled(com.reactnativecommunity.webview.b bVar, final boolean z10) {
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.c
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                gVar.setNestedScrollEnabled(z10);
            }
        });
    }

    @ReactProp(name = "onContentSizeChange")
    public void setOnContentSizeChange(com.reactnativecommunity.webview.b bVar, final boolean z10) {
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.r
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                gVar.setSendContentSizeChangeEvents(z10);
            }
        });
    }

    @ReactProp(name = "onScroll")
    public void setOnScroll(com.reactnativecommunity.webview.b bVar, final boolean z10) {
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.l0
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                gVar.setHasScrollEvent(z10);
            }
        });
    }

    @ReactProp(name = "overScrollMode")
    public void setOverScrollMode(com.reactnativecommunity.webview.b bVar, String str) {
        final int i10;
        int hashCode = str.hashCode();
        if (hashCode != -1414557169) {
            if (hashCode != 104712844) {
                if (hashCode == 951530617 && str.equals("content")) {
                    i10 = 1;
                }
            } else if (str.equals(ReactScrollViewHelper.OVER_SCROLL_NEVER)) {
                i10 = 2;
            }
            bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.t
                @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
                public final void a(RNCWebViewManager.g gVar) {
                    gVar.setOverScrollMode(i10.intValue());
                }
            });
        }
        str.equals(ReactScrollViewHelper.OVER_SCROLL_ALWAYS);
        i10 = 0;
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.t
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                gVar.setOverScrollMode(i10.intValue());
            }
        });
    }

    @ReactProp(name = "saveFormDataDisabled")
    public void setSaveFormDataDisabled(com.reactnativecommunity.webview.b bVar, final boolean z10) {
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.m
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                gVar.getSettings().setSaveFormData(!z10);
            }
        });
    }

    @ReactProp(name = "scalesPageToFit")
    public void setScalesPageToFit(com.reactnativecommunity.webview.b bVar, final boolean z10) {
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.w0
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                RNCWebViewManager.b(z10, gVar);
            }
        });
    }

    @ReactProp(name = "showsHorizontalScrollIndicator")
    public void setShowsHorizontalScrollIndicator(com.reactnativecommunity.webview.b bVar, final boolean z10) {
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.v
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                gVar.setHorizontalScrollBarEnabled(z10);
            }
        });
    }

    @ReactProp(name = "showsVerticalScrollIndicator")
    public void setShowsVerticalScrollIndicator(com.reactnativecommunity.webview.b bVar, final boolean z10) {
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.y
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                gVar.setVerticalScrollBarEnabled(z10);
            }
        });
    }

    @ReactProp(name = "source")
    public void setSource(com.reactnativecommunity.webview.b bVar, final ReadableMap readableMap) {
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.h
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                RNCWebViewManager.s(ReadableMap.this, gVar);
            }
        });
    }

    @ReactProp(name = "setSupportMultipleWindows")
    public void setSupportMultipleWindows(com.reactnativecommunity.webview.b bVar, final boolean z10) {
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.s
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                gVar.getSettings().setSupportMultipleWindows(z10);
            }
        });
    }

    @ReactProp(name = "temporaryParentNodeTag")
    public void setTemporaryParentNodeTag(com.reactnativecommunity.webview.b bVar, int i10) {
        bVar.f17491d = i10;
    }

    @ReactProp(name = "textZoom")
    public void setTextZoom(com.reactnativecommunity.webview.b bVar, final int i10) {
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.d0
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                gVar.getSettings().setTextZoom(i10);
            }
        });
    }

    @ReactProp(name = "thirdPartyCookiesEnabled")
    public void setThirdPartyCookiesEnabled(com.reactnativecommunity.webview.b bVar, final boolean z10) {
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.m0
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                CookieManager.getInstance().setAcceptThirdPartyCookies(gVar, z10);
            }
        });
    }

    @ReactProp(name = "urlPrefixesForDefaultIntent")
    public void setUrlPrefixesForDefaultIntent(com.reactnativecommunity.webview.b bVar, final ReadableArray readableArray) {
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.u0
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                RNCWebViewManager.S(ReadableArray.this, gVar);
            }
        });
    }

    @ReactProp(name = "userAgent")
    public void setUserAgent(com.reactnativecommunity.webview.b bVar, String str) {
        if (str != null) {
            this.mUserAgent = str;
        } else {
            this.mUserAgent = null;
        }
        bVar.d(new l(this));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void setUserAgentString(WebView webView) {
        if (this.mUserAgent != null) {
            webView.getSettings().setUserAgentString(this.mUserAgent);
        } else if (this.mUserAgentWithApplicationName != null) {
            webView.getSettings().setUserAgentString(this.mUserAgentWithApplicationName);
        } else {
            webView.getSettings().setUserAgentString(WebSettings.getDefaultUserAgent(webView.getContext()));
        }
    }

    @ReactProp(name = "webViewKey")
    public void setWebViewKey(final com.reactnativecommunity.webview.b bVar, final String str) {
        final Map a10 = a1.f17488a.a();
        if (a10.containsKey(str)) {
            g gVar = (g) a10.get(str);
            ViewGroup viewGroup = (ViewGroup) gVar.getParent();
            if (viewGroup != null && (viewGroup instanceof com.reactnativecommunity.webview.b)) {
                com.reactnativecommunity.webview.b bVar2 = (com.reactnativecommunity.webview.b) gVar.getParent();
                bVar2.b();
                setupWebChromeClient((ThemedReactContext) bVar2.getContext(), gVar);
            }
            if (viewGroup != null) {
                viewGroup.removeView(gVar);
            }
            bVar.a(gVar);
        }
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.q0
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar2) {
                RNCWebViewManager.O(str, bVar, a10, gVar2);
            }
        });
    }

    protected void setupWebChromeClient(ReactContext reactContext, WebView webView) {
        RNCWebViewManager rNCWebViewManager;
        WebView webView2;
        Activity currentActivity = reactContext.getCurrentActivity();
        if (this.mAllowsFullscreenVideo && currentActivity != null) {
            rNCWebViewManager = this;
            webView2 = webView;
            rNCWebViewManager.mWebChromeClient = new d(reactContext, webView2, currentActivity, currentActivity.getRequestedOrientation());
        } else {
            rNCWebViewManager = this;
            webView2 = webView;
            f fVar = rNCWebViewManager.mWebChromeClient;
            if (fVar != null) {
                fVar.onHideCustomView();
            }
            rNCWebViewManager.mWebChromeClient = new e(reactContext, webView2);
        }
        rNCWebViewManager.mWebChromeClient.f(rNCWebViewManager.mAllowsProtectedMedia);
        webView2.setWebChromeClient(rNCWebViewManager.mWebChromeClient);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    public void addEventEmitters(ThemedReactContext themedReactContext, com.reactnativecommunity.webview.b bVar) {
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.b0
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                gVar.setWebViewClient(new RNCWebViewManager.h());
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.ViewManager
    @TargetApi(ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED)
    public com.reactnativecommunity.webview.b createViewInstance(ThemedReactContext themedReactContext) {
        com.reactnativecommunity.webview.b bVar = new com.reactnativecommunity.webview.b(themedReactContext);
        g createRNCWebViewInstance = createRNCWebViewInstance(themedReactContext);
        bVar.a(createRNCWebViewInstance);
        bVar.post(new b(createRNCWebViewInstance, bVar));
        setupWebChromeClient(themedReactContext, createRNCWebViewInstance);
        themedReactContext.addLifecycleEventListener(createRNCWebViewInstance);
        this.mWebViewConfig.a(createRNCWebViewInstance);
        WebSettings settings = createRNCWebViewInstance.getSettings();
        settings.setBuiltInZoomControls(true);
        settings.setDisplayZoomControls(false);
        settings.setDomStorageEnabled(true);
        settings.setSupportMultipleWindows(true);
        settings.setAllowFileAccess(false);
        settings.setAllowContentAccess(false);
        settings.setAllowFileAccessFromFileURLs(false);
        setAllowUniversalAccessFromFileURLs(bVar, false);
        setMixedContentMode(bVar, ReactScrollViewHelper.OVER_SCROLL_NEVER);
        if ((themedReactContext.getApplicationInfo().flags & 2) != 0) {
            WebView.setWebContentsDebuggingEnabled(true);
        }
        createRNCWebViewInstance.setDownloadListener(new c(createRNCWebViewInstance, themedReactContext));
        return bVar;
    }

    @Override // com.facebook.react.uimanager.BaseViewManager, com.facebook.react.uimanager.ViewManager
    public void onDropViewInstance(final com.reactnativecommunity.webview.b bVar) {
        super.onDropViewInstance((RNCWebViewManager) bVar);
        if (bVar.getWebView() == null) {
            return;
        }
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.j
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                RNCWebViewManager.this.lambda$onDropViewInstance$46(bVar, gVar);
            }
        });
    }

    @Override // com.facebook.react.uimanager.ViewManager
    public void receiveCommand(@NonNull com.reactnativecommunity.webview.b bVar, final String str, final ReadableArray readableArray) {
        bVar.d(new b.InterfaceC0206b() { // from class: com.reactnativecommunity.webview.p
            @Override // com.reactnativecommunity.webview.b.InterfaceC0206b
            public final void a(RNCWebViewManager.g gVar) {
                RNCWebViewManager.a(str, readableArray, gVar);
            }
        });
        super.receiveCommand((RNCWebViewManager) bVar, str, readableArray);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class h extends WebViewClient {

        /* renamed from: b  reason: collision with root package name */
        protected ReadableArray f17465b;

        /* renamed from: f  reason: collision with root package name */
        protected f4.b f17469f;

        /* renamed from: a  reason: collision with root package name */
        protected boolean f17464a = false;

        /* renamed from: c  reason: collision with root package name */
        protected g.b f17466c = null;

        /* renamed from: d  reason: collision with root package name */
        protected String f17467d = null;

        /* renamed from: e  reason: collision with root package name */
        protected com.reactnativecommunity.webview.a f17468e = null;

        protected h() {
        }

        protected WritableMap a(WebView webView, String str) {
            boolean z10;
            WritableMap createMap = Arguments.createMap();
            createMap.putDouble("target", com.reactnativecommunity.webview.b.c(webView));
            createMap.putString("url", str);
            if (!this.f17464a && webView.getProgress() != 100) {
                z10 = true;
            } else {
                z10 = false;
            }
            createMap.putBoolean("loading", z10);
            createMap.putString("title", webView.getTitle());
            createMap.putBoolean("canGoBack", webView.canGoBack());
            createMap.putBoolean("canGoForward", webView.canGoForward());
            return createMap;
        }

        protected void b(WebView webView, String str) {
            ((g) webView).g(webView, new hm.c(com.reactnativecommunity.webview.b.c(webView), a(webView, str)));
        }

        public void c(com.reactnativecommunity.webview.a aVar) {
            this.f17468e = aVar;
        }

        public void d(String str) {
            this.f17467d = str;
        }

        public void e(g.b bVar) {
            this.f17466c = bVar;
        }

        public void f(ReadableArray readableArray) {
            this.f17465b = readableArray;
        }

        public void g(f4.b bVar) {
            this.f17469f = bVar;
        }

        @Override // android.webkit.WebViewClient
        public void onPageFinished(WebView webView, String str) {
            super.onPageFinished(webView, str);
            if (!this.f17464a) {
                ((g) webView).b();
                b(webView, str);
            }
        }

        @Override // android.webkit.WebViewClient
        public void onPageStarted(WebView webView, String str, Bitmap bitmap) {
            super.onPageStarted(webView, str, bitmap);
            this.f17464a = false;
            g gVar = (g) webView;
            gVar.c();
            gVar.g(webView, new hm.e(com.reactnativecommunity.webview.b.c(webView), a(webView, str)));
        }

        @Override // android.webkit.WebViewClient
        public void onReceivedError(WebView webView, int i10, String str, String str2) {
            String str3 = this.f17467d;
            if (str3 != null && str2.equals(str3) && i10 == -1 && str.equals("net::ERR_FAILED")) {
                d(null);
                return;
            }
            super.onReceivedError(webView, i10, str, str2);
            this.f17464a = true;
            b(webView, str2);
            WritableMap a10 = a(webView, str2);
            a10.putDouble("code", i10);
            a10.putString("description", str);
            ((g) webView).g(webView, new hm.b(com.reactnativecommunity.webview.b.c(webView), a10));
        }

        @Override // android.webkit.WebViewClient
        public void onReceivedHttpAuthRequest(WebView webView, HttpAuthHandler httpAuthHandler, String str, String str2) {
            com.reactnativecommunity.webview.a aVar = this.f17468e;
            if (aVar != null) {
                httpAuthHandler.proceed(aVar.f17485a, aVar.f17486b);
            } else {
                super.onReceivedHttpAuthRequest(webView, httpAuthHandler, str, str2);
            }
        }

        @Override // android.webkit.WebViewClient
        public void onReceivedHttpError(WebView webView, WebResourceRequest webResourceRequest, WebResourceResponse webResourceResponse) {
            super.onReceivedHttpError(webView, webResourceRequest, webResourceResponse);
            if (webResourceRequest.isForMainFrame()) {
                WritableMap a10 = a(webView, webResourceRequest.getUrl().toString());
                a10.putInt("statusCode", webResourceResponse.getStatusCode());
                a10.putString("description", webResourceResponse.getReasonPhrase());
                ((g) webView).g(webView, new hm.a(com.reactnativecommunity.webview.b.c(webView), a10));
            }
        }

        @Override // android.webkit.WebViewClient
        public void onReceivedSslError(WebView webView, SslErrorHandler sslErrorHandler, SslError sslError) {
            String str;
            String url = webView.getUrl();
            String url2 = sslError.getUrl();
            sslErrorHandler.cancel();
            if (!url.equalsIgnoreCase(url2)) {
                Log.w(RNCWebViewManager.TAG, "Resource blocked from loading due to SSL error. Blocked URL: " + url2);
                return;
            }
            int primaryError = sslError.getPrimaryError();
            if (primaryError != 0) {
                if (primaryError != 1) {
                    if (primaryError != 2) {
                        if (primaryError != 3) {
                            if (primaryError != 4) {
                                if (primaryError != 5) {
                                    str = "Unknown SSL Error";
                                } else {
                                    str = "A generic error occurred";
                                }
                            } else {
                                str = "The date of the certificate is invalid";
                            }
                        } else {
                            str = "The certificate authority is not trusted";
                        }
                    } else {
                        str = "Hostname mismatch";
                    }
                } else {
                    str = "The certificate has expired";
                }
            } else {
                str = "The certificate is not yet valid";
            }
            onReceivedError(webView, primaryError, "SSL error: " + str, url2);
        }

        @Override // android.webkit.WebViewClient
        public boolean onRenderProcessGone(WebView webView, RenderProcessGoneDetail renderProcessGoneDetail) {
            if (Build.VERSION.SDK_INT < 26) {
                return false;
            }
            super.onRenderProcessGone(webView, renderProcessGoneDetail);
            if (renderProcessGoneDetail.didCrash()) {
                Log.e(RNCWebViewManager.TAG, "The WebView rendering process crashed.");
            } else {
                Log.w(RNCWebViewManager.TAG, "The WebView rendering process was killed by the system.");
            }
            if (webView == null) {
                return true;
            }
            WritableMap a10 = a(webView, webView.getUrl());
            a10.putBoolean("didCrash", renderProcessGoneDetail.didCrash());
            ((g) webView).g(webView, new hm.g(com.reactnativecommunity.webview.b.c(webView), a10));
            return true;
        }

        @Override // android.webkit.WebViewClient
        public WebResourceResponse shouldInterceptRequest(WebView webView, WebResourceRequest webResourceRequest) {
            f4.b bVar = this.f17469f;
            if (bVar == null) {
                return super.shouldInterceptRequest(webView, webResourceRequest);
            }
            return bVar.a(webResourceRequest.getUrl());
        }

        @Override // android.webkit.WebViewClient
        public boolean shouldOverrideUrlLoading(WebView webView, String str) {
            p8.a.J(RNCWebViewManager.TAG, "Couldn't use blocking synchronous call for onShouldStartLoadWithRequest due to debugging or missing Catalyst instance, falling back to old event-and-load.");
            this.f17466c.b(true);
            ((g) webView).g(webView, new hm.h(com.reactnativecommunity.webview.b.c(webView), a(webView, str)));
            return true;
        }

        @Override // android.webkit.WebViewClient
        public boolean shouldOverrideUrlLoading(WebView webView, WebResourceRequest webResourceRequest) {
            return shouldOverrideUrlLoading(webView, webResourceRequest.getUrl().toString());
        }
    }

    public RNCWebViewManager(e1 e1Var) {
        this.mWebChromeClient = null;
        this.mAllowsFullscreenVideo = false;
        this.mAllowsProtectedMedia = false;
        this.mUserAgent = null;
        this.mUserAgentWithApplicationName = null;
        this.mDownloadingMessage = null;
        this.mLackPermissionToDownloadMessage = null;
        this.assetLoaderHandlerTypes = new HashSet(Arrays.asList("assets", "internal", "resources"));
        this.mWebViewConfig = e1Var;
    }
}
