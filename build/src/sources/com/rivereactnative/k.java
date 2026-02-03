package com.rivereactnative;

import app.rive.runtime.kotlin.RiveAnimationView;
import app.rive.runtime.kotlin.core.errors.RiveException;
import com.facebook.react.uimanager.ThemedReactContext;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k extends RiveAnimationView {

    /* renamed from: d  reason: collision with root package name */
    private final ThemedReactContext f17290d;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public k(ThemedReactContext context) {
        super(context, null, 2, null);
        Intrinsics.checkNotNullParameter(context, "context");
        this.f17290d = context;
    }

    public final void c() {
        androidx.lifecycle.o lifecycleObserver = getLifecycleObserver();
        Intrinsics.checkNotNull(lifecycleObserver, "null cannot be cast to non-null type com.rivereactnative.ReactNativeRiveViewLifecycleObserver");
        ((l) lifecycleObserver).a();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // app.rive.runtime.kotlin.RiveAnimationView, app.rive.runtime.kotlin.RiveTextureView
    public androidx.lifecycle.o createObserver() {
        return new l(CollectionsKt.j1(CollectionsKt.q(getController(), getRendererAttributes().getAssetLoader())));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // app.rive.runtime.kotlin.RiveAnimationView, app.rive.runtime.kotlin.RiveTextureView, android.view.TextureView, android.view.View
    public void onAttachedToWindow() {
        try {
            super.onAttachedToWindow();
        } catch (RiveException e10) {
            n.f17300a.b(e10, "ReactNativeRiveAnimationView.onAttachedToWindow - RiveException");
        } catch (Exception e11) {
            n.f17300a.b(e11, "ReactNativeRiveAnimationView.onAttachedToWindow - Exception");
        }
    }
}
