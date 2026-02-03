package io.sentry.react;

import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.facebook.react.uimanager.events.EventDispatcherListener;
import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.android.core.x0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class s extends FragmentManager.l {

    /* renamed from: a  reason: collision with root package name */
    private final x0 f30196a;

    /* renamed from: b  reason: collision with root package name */
    private final Runnable f30197b;

    /* renamed from: c  reason: collision with root package name */
    private final ILogger f30198c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements EventDispatcherListener {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ EventDispatcher f30199a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ View f30200b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Runnable f30201c;

        a(EventDispatcher eventDispatcher, View view, Runnable runnable) {
            this.f30199a = eventDispatcher;
            this.f30200b = view;
            this.f30201c = runnable;
        }

        @Override // com.facebook.react.uimanager.events.EventDispatcherListener
        public void onEventDispatch(Event event) {
            if ("gn.f".equals(event.getClass().getCanonicalName())) {
                this.f30199a.removeListener(this);
                io.sentry.android.core.internal.util.r.e(this.f30200b, this.f30201c, s.this.f30196a);
            }
        }
    }

    public s(x0 x0Var, Runnable runnable, ILogger iLogger) {
        this.f30196a = x0Var;
        this.f30197b = runnable;
        this.f30198c = iLogger;
    }

    private static EventDispatcher b(View view, int i10) {
        return UIManagerHelper.getEventDispatcherForReactTag(UIManagerHelper.getReactContext(view), i10);
    }

    @Override // androidx.fragment.app.FragmentManager.l
    public void onFragmentViewCreated(FragmentManager fragmentManager, Fragment fragment, View view, Bundle bundle) {
        if (!"com.swmansion.rnscreens.n0".equals(fragment.getClass().getCanonicalName())) {
            this.f30198c.c(SentryLevel.DEBUG, "Fragment is not a ScreenStackFragment, won't listen for the first draw.", new Object[0]);
        } else if (!(view instanceof ViewGroup)) {
            this.f30198c.c(SentryLevel.WARNING, "Fragment view is not a ViewGroup, won't listen for the first draw.", new Object[0]);
        } else {
            ViewGroup viewGroup = (ViewGroup) view;
            if (viewGroup.getChildCount() == 0) {
                this.f30198c.c(SentryLevel.WARNING, "Fragment view has no children, won't listen for the first draw.", new Object[0]);
                return;
            }
            View childAt = viewGroup.getChildAt(0);
            if (childAt != null && (childAt.getContext() instanceof ReactContext)) {
                int id2 = childAt.getId();
                if (id2 == -1) {
                    this.f30198c.c(SentryLevel.WARNING, "Screen has no id, won't listen for the first draw.", new Object[0]);
                    return;
                }
                EventDispatcher b10 = b(childAt, id2);
                if (b10 == null) {
                    this.f30198c.c(SentryLevel.WARNING, "Screen has no event dispatcher, won't listen for the first draw.", new Object[0]);
                    return;
                } else {
                    b10.addListener(new a(b10, view, this.f30197b));
                    return;
                }
            }
            this.f30198c.c(SentryLevel.WARNING, "Fragment view has no ReactContext, won't listen for the first draw.", new Object[0]);
        }
    }
}
