package com.th3rdwave.safeareacontext;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewTreeObserver;
import com.facebook.react.views.view.ReactViewGroup;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f extends ReactViewGroup implements ViewTreeObserver.OnPreDrawListener {

    /* renamed from: d  reason: collision with root package name */
    private Function3 f18040d;

    /* renamed from: e  reason: collision with root package name */
    private a f18041e;

    /* renamed from: i  reason: collision with root package name */
    private c f18042i;

    public f(Context context) {
        super(context);
    }

    private final void c() {
        a e10;
        Function3 function3 = this.f18040d;
        if (function3 != null && (e10 = h.e(this)) != null) {
            View rootView = getRootView();
            Intrinsics.checkNotNull(rootView, "null cannot be cast to non-null type android.view.ViewGroup");
            c a10 = h.a((ViewGroup) rootView, this);
            if (a10 != null) {
                if (Intrinsics.areEqual(this.f18041e, e10) && Intrinsics.areEqual(this.f18042i, a10)) {
                    return;
                }
                function3.invoke(this, e10, a10);
                this.f18041e = e10;
                this.f18042i = a10;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup, android.view.View
    public void onAttachedToWindow() {
        super.onAttachedToWindow();
        getViewTreeObserver().addOnPreDrawListener(this);
        c();
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        getViewTreeObserver().removeOnPreDrawListener(this);
    }

    @Override // android.view.ViewTreeObserver.OnPreDrawListener
    public boolean onPreDraw() {
        c();
        return true;
    }

    public final void setOnInsetsChangeHandler(Function3 function3) {
        this.f18040d = function3;
        c();
    }
}
