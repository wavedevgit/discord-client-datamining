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
    private final ILogger f30549a;

    /* renamed from: b  reason: collision with root package name */
    private ReplayIntegration f30550b;

    /* renamed from: c  reason: collision with root package name */
    private int f30551c = -1;

    /* renamed from: d  reason: collision with root package name */
    private int f30552d = -1;

    /* renamed from: e  reason: collision with root package name */
    private WeakReference f30553e;

    /* renamed from: f  reason: collision with root package name */
    private ViewTreeObserver.OnGlobalLayoutListener f30554f;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: io.sentry.react.replay.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class ViewTreeObserver$OnGlobalLayoutListenerC0403a implements ViewTreeObserver.OnGlobalLayoutListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ WeakReference f30555d;

        ViewTreeObserver$OnGlobalLayoutListenerC0403a(WeakReference weakReference) {
            this.f30555d = weakReference;
        }

        @Override // android.view.ViewTreeObserver.OnGlobalLayoutListener
        public void onGlobalLayout() {
            View view = (View) this.f30555d.get();
            if (view != null) {
                a.this.c(view);
            }
        }
    }

    public a(ILogger iLogger) {
        this.f30549a = iLogger;
    }

    private void b(View view) {
        ViewTreeObserver$OnGlobalLayoutListenerC0403a viewTreeObserver$OnGlobalLayoutListenerC0403a = new ViewTreeObserver$OnGlobalLayoutListenerC0403a(new WeakReference(view));
        this.f30553e = new WeakReference(view);
        this.f30554f = viewTreeObserver$OnGlobalLayoutListenerC0403a;
        view.getViewTreeObserver().addOnGlobalLayoutListener(viewTreeObserver$OnGlobalLayoutListenerC0403a);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void c(View view) {
        try {
            DisplayMetrics displayMetrics = view.getContext().getResources().getDisplayMetrics();
            int i10 = displayMetrics.widthPixels;
            int i11 = displayMetrics.heightPixels;
            if (this.f30551c == i10 && this.f30552d == i11) {
                return;
            }
            this.f30551c = i10;
            this.f30552d = i11;
            f(i10, i11);
        } catch (Exception e10) {
            this.f30549a.b(SentryLevel.DEBUG, "Failed to check window size", e10);
        }
    }

    private void d() {
        View view;
        WeakReference weakReference = this.f30553e;
        if (weakReference != null) {
            view = (View) weakReference.get();
        } else {
            view = null;
        }
        if (view != null && this.f30554f != null) {
            try {
                ViewTreeObserver viewTreeObserver = view.getViewTreeObserver();
                if (viewTreeObserver != null) {
                    viewTreeObserver.removeOnGlobalLayoutListener(this.f30554f);
                }
            } catch (Exception e10) {
                this.f30549a.b(SentryLevel.DEBUG, "Failed to remove layout change listener", e10);
            }
        }
        this.f30553e = null;
        this.f30554f = null;
    }

    private ReplayIntegration e() {
        try {
            u3 replayController = l4.h().b().getReplayController();
            if (replayController instanceof ReplayIntegration) {
                return (ReplayIntegration) replayController;
            }
            this.f30549a.c(SentryLevel.DEBUG, "Error getting replay integration", new Object[0]);
            return null;
        } catch (Exception e10) {
            this.f30549a.b(SentryLevel.DEBUG, "Error getting replay integration", e10);
            return null;
        }
    }

    private void f(int i10, int i11) {
        if (this.f30550b == null) {
            this.f30550b = e();
        }
        ReplayIntegration replayIntegration = this.f30550b;
        if (replayIntegration == null) {
            return;
        }
        try {
            replayIntegration.l(i10, i11);
        } catch (Exception e10) {
            this.f30549a.b(SentryLevel.DEBUG, "Failed to notify replay integration of size change", e10);
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
