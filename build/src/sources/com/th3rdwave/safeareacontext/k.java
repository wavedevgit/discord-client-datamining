package com.th3rdwave.safeareacontext;

import android.content.Context;
import android.util.Log;
import android.view.View;
import android.view.ViewParent;
import android.view.ViewTreeObserver;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.StateWrapper;
import com.facebook.react.uimanager.UIManagerModule;
import com.facebook.react.views.view.ReactViewGroup;
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.ReentrantLock;
import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Ref;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k extends ReactViewGroup implements ViewTreeObserver.OnPreDrawListener {

    /* renamed from: d  reason: collision with root package name */
    private o f19432d;

    /* renamed from: e  reason: collision with root package name */
    private a f19433e;

    /* renamed from: i  reason: collision with root package name */
    private m f19434i;

    /* renamed from: o  reason: collision with root package name */
    private View f19435o;

    /* renamed from: p  reason: collision with root package name */
    private StateWrapper f19436p;

    public k(Context context) {
        super(context);
        this.f19432d = o.f19449d;
    }

    private final View e() {
        for (ViewParent parent = getParent(); parent != null; parent = parent.getParent()) {
            if (parent instanceof f) {
                return (View) parent;
            }
        }
        return this;
    }

    private final boolean f() {
        a e10;
        View view = this.f19435o;
        if (view == null || (e10 = h.e(view)) == null || Intrinsics.areEqual(this.f19433e, e10)) {
            return false;
        }
        this.f19433e = e10;
        g();
        return true;
    }

    private final void g() {
        a aVar = this.f19433e;
        if (aVar != null) {
            m mVar = this.f19434i;
            if (mVar == null) {
                l lVar = l.f19438e;
                mVar = new m(lVar, lVar, lVar, lVar);
            }
            StateWrapper stateWrapper = getStateWrapper();
            if (stateWrapper != null) {
                WritableMap createMap = Arguments.createMap();
                Intrinsics.checkNotNullExpressionValue(createMap, "createMap(...)");
                createMap.putMap("insets", q.b(aVar));
                stateWrapper.updateState(createMap);
                return;
            }
            n nVar = new n(aVar, this.f19432d, mVar);
            ReactContext a10 = r.a(this);
            final UIManagerModule uIManagerModule = (UIManagerModule) a10.getNativeModule(UIManagerModule.class);
            if (uIManagerModule != null) {
                uIManagerModule.setViewLocalData(getId(), nVar);
                a10.runOnNativeModulesQueueThread(new Runnable() { // from class: com.th3rdwave.safeareacontext.i
                    @Override // java.lang.Runnable
                    public final void run() {
                        k.h(UIManagerModule.this);
                    }
                });
                i();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void h(UIManagerModule uIManagerModule) {
        uIManagerModule.getUIImplementation().dispatchViewUpdates(-1);
    }

    private final void i() {
        final Ref.BooleanRef booleanRef = new Ref.BooleanRef();
        final ReentrantLock reentrantLock = new ReentrantLock();
        final Condition newCondition = reentrantLock.newCondition();
        long nanoTime = System.nanoTime();
        r.a(this).runOnNativeModulesQueueThread(new Runnable() { // from class: com.th3rdwave.safeareacontext.j
            @Override // java.lang.Runnable
            public final void run() {
                k.j(reentrantLock, booleanRef, newCondition);
            }
        });
        reentrantLock.lock();
        long j10 = 0;
        while (!booleanRef.element && j10 < 500000000) {
            try {
                try {
                    newCondition.awaitNanos(500000000L);
                } catch (InterruptedException unused) {
                    booleanRef.element = true;
                }
                j10 += System.nanoTime() - nanoTime;
            } catch (Throwable th2) {
                reentrantLock.unlock();
                throw th2;
            }
        }
        Unit unit = Unit.f33298a;
        reentrantLock.unlock();
        if (j10 >= 500000000) {
            Log.w("SafeAreaView", "Timed out waiting for layout.");
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(ReentrantLock reentrantLock, Ref.BooleanRef booleanRef, Condition condition) {
        reentrantLock.lock();
        try {
            if (!booleanRef.element) {
                booleanRef.element = true;
                condition.signal();
            }
            Unit unit = Unit.f33298a;
            reentrantLock.unlock();
        } catch (Throwable th2) {
            reentrantLock.unlock();
            throw th2;
        }
    }

    public final StateWrapper getStateWrapper() {
        return this.f19436p;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup, android.view.View
    public void onAttachedToWindow() {
        ViewTreeObserver viewTreeObserver;
        super.onAttachedToWindow();
        View e10 = e();
        this.f19435o = e10;
        if (e10 != null && (viewTreeObserver = e10.getViewTreeObserver()) != null) {
            viewTreeObserver.addOnPreDrawListener(this);
        }
        f();
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        ViewTreeObserver viewTreeObserver;
        super.onDetachedFromWindow();
        View view = this.f19435o;
        if (view != null && (viewTreeObserver = view.getViewTreeObserver()) != null) {
            viewTreeObserver.removeOnPreDrawListener(this);
        }
        this.f19435o = null;
    }

    @Override // android.view.ViewTreeObserver.OnPreDrawListener
    public boolean onPreDraw() {
        boolean f10 = f();
        if (f10) {
            requestLayout();
        }
        return !f10;
    }

    public final void setEdges(@NotNull m edges) {
        Intrinsics.checkNotNullParameter(edges, "edges");
        this.f19434i = edges;
        g();
    }

    public final void setMode(@NotNull o mode) {
        Intrinsics.checkNotNullParameter(mode, "mode");
        this.f19432d = mode;
        g();
    }

    public final void setStateWrapper(StateWrapper stateWrapper) {
        this.f19436p = stateWrapper;
    }
}
