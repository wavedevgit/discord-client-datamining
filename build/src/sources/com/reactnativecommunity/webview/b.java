package com.reactnativecommunity.webview;

import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebView;
import android.widget.FrameLayout;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.uimanager.ThemedReactContext;
import com.reactnativecommunity.webview.RNCWebViewManager;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b extends FrameLayout {

    /* renamed from: d  reason: collision with root package name */
    public int f18137d;

    /* renamed from: e  reason: collision with root package name */
    private RNCWebViewManager.g f18138e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements ViewGroup.OnHierarchyChangeListener {
        a() {
        }

        @Override // android.view.ViewGroup.OnHierarchyChangeListener
        public void onChildViewAdded(View view, View view2) {
            if (view != null) {
                view.measure(View.MeasureSpec.makeMeasureSpec(b.this.getMeasuredWidth(), 1073741824), View.MeasureSpec.makeMeasureSpec(b.this.getMeasuredHeight(), 1073741824));
                view.layout(0, 0, view.getMeasuredWidth(), view.getMeasuredHeight());
            }
        }

        @Override // android.view.ViewGroup.OnHierarchyChangeListener
        public void onChildViewRemoved(View view, View view2) {
        }
    }

    /* renamed from: com.reactnativecommunity.webview.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0215b {
        void a(RNCWebViewManager.g gVar);
    }

    public b(ThemedReactContext themedReactContext) {
        super(themedReactContext);
        this.f18137d = 0;
        setOnHierarchyChangeListener(new a());
    }

    public static int c(WebView webView) {
        if (((ReactContext) webView.getContext()).isBridgeless()) {
            View view = (View) webView.getParent();
            if (view == null) {
                p8.a.p("RNCWebViewContainer", new Throwable(), "WebView parent is null (bridgeless mode)", new Object[0]);
                return -1;
            }
            return view.getId();
        }
        Integer num = (Integer) a1.f18134a.b().get(Integer.valueOf(webView.getId()));
        if (num == null) {
            return -1;
        }
        return num.intValue();
    }

    public void a(RNCWebViewManager.g gVar) {
        this.f18138e = gVar;
        if (gVar.getParent() == null) {
            addView(gVar, new FrameLayout.LayoutParams(-1, -1));
            return;
        }
        throw new IllegalArgumentException("WebView with key: " + gVar.f18094q + " parent is non null. Cannot re-attach webview.");
    }

    public RNCWebViewManager.g b() {
        if (this.f18138e != null) {
            e();
            RNCWebViewManager.g gVar = this.f18138e;
            this.f18138e = null;
            return gVar;
        }
        throw new IllegalStateException("Webview is null");
    }

    public void d(InterfaceC0215b interfaceC0215b) {
        RNCWebViewManager.g gVar = this.f18138e;
        if (gVar != null) {
            interfaceC0215b.a(gVar);
        } else {
            p8.a.p("RNCWebViewContainer", new Throwable(), "Internal WebView is null", new Object[0]);
        }
    }

    public void e() {
        RNCWebViewManager.g gVar = this.f18138e;
        if (gVar != null) {
            endViewTransition(gVar);
            removeView(this.f18138e);
        }
    }

    public RNCWebViewManager.g getWebView() {
        return this.f18138e;
    }
}
