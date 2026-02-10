package io.sentry.react.replay;

import android.os.Bundle;
import android.util.DisplayMetrics;
import android.view.View;
import android.view.ViewTreeObserver;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.android.replay.ReplayIntegration;
import io.sentry.l4;
import io.sentry.u3;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends FragmentManager.l {

    /* renamed from: a  reason: collision with root package name */
    private final ILogger f28999a;

    /* renamed from: b  reason: collision with root package name */
    private ReplayIntegration f29000b;

    /* renamed from: c  reason: collision with root package name */
    private int f29001c = -1;

    /* renamed from: d  reason: collision with root package name */
    private int f29002d = -1;

    /* renamed from: e  reason: collision with root package name */
    private WeakReference f29003e;

    /* renamed from: f  reason: collision with root package name */
    private ViewTreeObserver.OnGlobalLayoutListener f29004f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: io.sentry.react.replay.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class ViewTreeObserver$OnGlobalLayoutListenerC0430a implements ViewTreeObserver.OnGlobalLayoutListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ WeakReference f29005d;

        ViewTreeObserver$OnGlobalLayoutListenerC0430a(WeakReference weakReference) {
            this.f29005d = weakReference;
        }

        @Override // android.view.ViewTreeObserver.OnGlobalLayoutListener
        public void onGlobalLayout() {
            View view = (View) this.f29005d.get();
            if (view != null) {
                a.this.c(view);
            }
        }
    }

    public a(ILogger iLogger) {
        this.f28999a = iLogger;
    }

    private void b(View view) {
        ViewTreeObserver$OnGlobalLayoutListenerC0430a viewTreeObserver$OnGlobalLayoutListenerC0430a = new ViewTreeObserver$OnGlobalLayoutListenerC0430a(new WeakReference(view));
        this.f29003e = new WeakReference(view);
        this.f29004f = viewTreeObserver$OnGlobalLayoutListenerC0430a;
        view.getViewTreeObserver().addOnGlobalLayoutListener(viewTreeObserver$OnGlobalLayoutListenerC0430a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void c(View view) {
        try {
            DisplayMetrics displayMetrics = view.getContext().getResources().getDisplayMetrics();
            int i10 = displayMetrics.widthPixels;
            int i11 = displayMetrics.heightPixels;
            if (this.f29001c == i10 && this.f29002d == i11) {
                return;
            }
            this.f29001c = i10;
            this.f29002d = i11;
            f(i10, i11);
        } catch (Exception e10) {
            this.f28999a.b(SentryLevel.DEBUG, "Failed to check window size", e10);
        }
    }

    private void d() {
        View view;
        WeakReference weakReference = this.f29003e;
        if (weakReference != null) {
            view = (View) weakReference.get();
        } else {
            view = null;
        }
        if (view != null && this.f29004f != null) {
            try {
                ViewTreeObserver viewTreeObserver = view.getViewTreeObserver();
                if (viewTreeObserver != null) {
                    viewTreeObserver.removeOnGlobalLayoutListener(this.f29004f);
                }
            } catch (Exception e10) {
                this.f28999a.b(SentryLevel.DEBUG, "Failed to remove layout change listener", e10);
            }
        }
        this.f29003e = null;
        this.f29004f = null;
    }

    private ReplayIntegration e() {
        try {
            u3 replayController = l4.g().b().getReplayController();
            if (replayController instanceof ReplayIntegration) {
                return (ReplayIntegration) replayController;
            }
            this.f28999a.c(SentryLevel.DEBUG, "Error getting replay integration", new Object[0]);
            return null;
        } catch (Exception e10) {
            this.f28999a.b(SentryLevel.DEBUG, "Error getting replay integration", e10);
            return null;
        }
    }

    private void f(int i10, int i11) {
        if (this.f29000b == null) {
            this.f29000b = e();
        }
        ReplayIntegration replayIntegration = this.f29000b;
        if (replayIntegration == null) {
            return;
        }
        try {
            replayIntegration.k(i10, i11);
        } catch (Exception e10) {
            this.f28999a.b(SentryLevel.DEBUG, "Failed to notify replay integration of size change", e10);
        }
    }

    @Override // androidx.fragment.app.FragmentManager.l
    public void onFragmentViewCreated(FragmentManager fragmentManager, Fragment fragment, View view, Bundle bundle) {
        d();
        b(view);
    }

    @Override // androidx.fragment.app.FragmentManager.l
    public void onFragmentViewDestroyed(FragmentManager fragmentManager, Fragment fragment) {
        d();
    }
}
