package com.discord.react_rootview;

import android.annotation.SuppressLint;
import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Rect;
import android.view.MotionEvent;
import android.view.View;
import com.discord.crash_reporting.CrashReporting;
import com.facebook.react.runtime.ReactSurfaceImpl;
import java.util.List;
import java.util.WeakHashMap;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000T\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0000\b\u0007\u0018\u00002\u00020\u00012\u00020\u0002B\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\u0006\u0010\u0005\u001a\u00020\u0006¢\u0006\u0004\b\u0007\u0010\bJ\u0010\u0010\u001b\u001a\u00020\u001c2\u0006\u0010\u001d\u001a\u00020\u0017H\u0016J\u001c\u0010\u001e\u001a\u00020\u00182\b\u0010\u001f\u001a\u0004\u0018\u00010\u00152\b\u0010 \u001a\u0004\u0018\u00010\u0015H\u0016J\u0010\u0010!\u001a\u00020\u00182\u0006\u0010\"\u001a\u00020#H\u0014R\u000e\u0010\t\u001a\u00020\nX\u0082\u0004¢\u0006\u0002\n\u0000R0\u0010\u000e\u001a\b\u0012\u0004\u0012\u00020\r0\f2\f\u0010\u000b\u001a\b\u0012\u0004\u0012\u00020\r0\f8V@VX\u0096\u000e¢\u0006\f\u001a\u0004\b\u000f\u0010\u0010\"\u0004\b\u0011\u0010\u0012R.\u0010\u0013\u001a\u001c\u0012\u0004\u0012\u00020\u0015\u0012\u0012\u0012\u0010\u0012\u0004\u0012\u00020\u0017\u0012\u0004\u0012\u00020\u0018\u0018\u00010\u00160\u00148VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u0019\u0010\u001a¨\u0006$"}, d2 = {"Lcom/discord/react_rootview/ReactSurfaceView;", "Lcom/facebook/react/runtime/ReactSurfaceView;", "Lcom/discord/react_rootview/RootViewInterface;", "context", "Landroid/content/Context;", "surface", "Lcom/facebook/react/runtime/ReactSurfaceImpl;", "<init>", "(Landroid/content/Context;Lcom/facebook/react/runtime/ReactSurfaceImpl;)V", "helper", "Lcom/discord/react_rootview/ReactViewHelper;", "value", "", "Landroid/graphics/Rect;", "exclusionRects", "getExclusionRects", "()Ljava/util/List;", "setExclusionRects", "(Ljava/util/List;)V", "onInterceptTouchEventListeners", "Ljava/util/WeakHashMap;", "Landroid/view/View;", "Lkotlin/Function1;", "Landroid/view/MotionEvent;", "", "getOnInterceptTouchEventListeners", "()Ljava/util/WeakHashMap;", "onInterceptTouchEvent", "", "e", "requestChildFocus", "child", "focused", "dispatchDraw", "canvas", "Landroid/graphics/Canvas;", "react_rootview_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SuppressLint({"ViewConstructor"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ReactSurfaceView extends com.facebook.react.runtime.ReactSurfaceView implements RootViewInterface {
    @NotNull
    private final ReactViewHelper helper;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ReactSurfaceView(@NotNull Context context, @NotNull ReactSurfaceImpl surface) {
        super(context, surface);
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(surface, "surface");
        this.helper = new ReactViewHelper();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit dispatchDraw$lambda$0(ReactSurfaceView reactSurfaceView, Canvas canvas) {
        super.dispatchDraw(canvas);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.ReactRootView, android.view.ViewGroup, android.view.View
    public void dispatchDraw(@NotNull final Canvas canvas) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        this.helper.handleDispatchDraw(this, new Function0() { // from class: com.discord.react_rootview.b
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit dispatchDraw$lambda$0;
                dispatchDraw$lambda$0 = ReactSurfaceView.dispatchDraw$lambda$0(ReactSurfaceView.this, canvas);
                return dispatchDraw$lambda$0;
            }
        });
    }

    @Override // com.discord.react_rootview.RootViewInterface
    @NotNull
    public List<Rect> getExclusionRects() {
        return this.helper.getExclusionRects();
    }

    @Override // com.discord.react_rootview.RootViewInterface
    @NotNull
    public WeakHashMap<View, Function1<MotionEvent, Unit>> getOnInterceptTouchEventListeners() {
        return this.helper.getOnInterceptTouchEventListeners();
    }

    @Override // com.facebook.react.ReactRootView, android.view.ViewGroup
    public boolean onInterceptTouchEvent(@NotNull MotionEvent e10) {
        Intrinsics.checkNotNullParameter(e10, "e");
        this.helper.handleInterceptTouchEvent(e10);
        return super.onInterceptTouchEvent(e10);
    }

    @Override // com.facebook.react.ReactRootView, android.view.ViewGroup, android.view.ViewParent
    public void requestChildFocus(View view, View view2) {
        boolean z10;
        if (view == null || view2 == null) {
            CrashReporting crashReporting = CrashReporting.INSTANCE;
            boolean z11 = false;
            if (view == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (view2 == null) {
                z11 = true;
            }
            CrashReporting.addBreadcrumb$default(crashReporting, "ReactSurfaceView.requestChildFocus: null args child=" + z10 + " focused=" + z11, null, null, null, false, 30, null);
        }
        if (view2 == null) {
            if (view == null) {
                return;
            }
            view2 = view;
        }
        if (view == null) {
            view = view2;
        }
        super.requestChildFocus(view, view2);
    }

    @Override // com.discord.react_rootview.RootViewInterface
    public void setExclusionRects(@NotNull List<Rect> value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.helper.setExclusionRects(value);
    }
}
