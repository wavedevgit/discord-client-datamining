package dn;

import android.content.Context;
import android.view.View;
import androidx.activity.OnBackPressedCallback;
import androidx.lifecycle.DefaultLifecycleObserver;
import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import androidx.lifecycle.r0;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements View.OnAttachStateChangeListener, DefaultLifecycleObserver {

    /* renamed from: d  reason: collision with root package name */
    private final View f20901d;

    /* renamed from: e  reason: collision with root package name */
    private final Function0 f20902e;

    /* renamed from: i  reason: collision with root package name */
    private final a f20903i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends OnBackPressedCallback {
        a() {
            super(false);
        }

        @Override // androidx.activity.OnBackPressedCallback
        public void handleOnBackPressed() {
            j.this.a().invoke();
        }
    }

    public j(View view, Function0 handler) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f20901d = view;
        this.f20902e = handler;
        this.f20903i = new a();
    }

    public final Function0 a() {
        return this.f20902e;
    }

    public final void b() {
        Lifecycle lifecycle;
        this.f20903i.remove();
        this.f20901d.removeOnAttachStateChangeListener(this);
        LifecycleOwner a10 = r0.a(this.f20901d);
        if (a10 == null || (lifecycle = a10.getLifecycle()) == null) {
            return;
        }
        lifecycle.d(this);
    }

    @Override // androidx.lifecycle.DefaultLifecycleObserver
    public void onDestroy(LifecycleOwner owner) {
        Intrinsics.checkNotNullParameter(owner, "owner");
        b();
    }

    @Override // android.view.View.OnAttachStateChangeListener
    public void onViewAttachedToWindow(View attachedView) {
        Intrinsics.checkNotNullParameter(attachedView, "attachedView");
        if (this.f20901d == attachedView) {
            this.f20903i.setEnabled(true);
            return;
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    @Override // android.view.View.OnAttachStateChangeListener
    public void onViewDetachedFromWindow(View detachedView) {
        Intrinsics.checkNotNullParameter(detachedView, "detachedView");
        if (this.f20901d == detachedView) {
            this.f20903i.setEnabled(false);
            return;
        }
        throw new IllegalArgumentException("Failed requirement.");
    }

    public final void start() {
        Lifecycle lifecycle;
        Context context = this.f20901d.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "view.context");
        androidx.activity.z b10 = e.b(context);
        if (b10 != null) {
            b10.getOnBackPressedDispatcher().h(b10, this.f20903i);
            this.f20901d.addOnAttachStateChangeListener(this);
            if (this.f20901d.isAttachedToWindow()) {
                onViewAttachedToWindow(this.f20901d);
            }
            LifecycleOwner a10 = r0.a(this.f20901d);
            if (a10 == null || (lifecycle = a10.getLifecycle()) == null) {
                return;
            }
            lifecycle.a(this);
        }
    }
}
