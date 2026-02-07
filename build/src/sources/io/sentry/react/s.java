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
    private final x0 f28807a;

    /* renamed from: b  reason: collision with root package name */
    private final Runnable f28808b;

    /* renamed from: c  reason: collision with root package name */
    private final ILogger f28809c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements EventDispatcherListener {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ EventDispatcher f28810a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ View f28811b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Runnable f28812c;

        a(EventDispatcher eventDispatcher, View view, Runnable runnable) {
            this.f28810a = eventDispatcher;
            this.f28811b = view;
            this.f28812c = runnable;
        }

        @Override // com.facebook.react.uimanager.events.EventDispatcherListener
        public void onEventDispatch(Event event) {
            if ("nn.f".equals(event.getClass().getCanonicalName())) {
                this.f28810a.removeListener(this);
                io.sentry.android.core.internal.util.r.e(this.f28811b, this.f28812c, s.this.f28807a);
            }
        }
    }

    public s(x0 x0Var, Runnable runnable, ILogger iLogger) {
        this.f28807a = x0Var;
        this.f28808b = runnable;
        this.f28809c = iLogger;
    }

    private static EventDispatcher b(View view, int i10) {
        return UIManagerHelper.getEventDispatcherForReactTag(UIManagerHelper.getReactContext(view), i10);
    }

    @Override // androidx.fragment.app.FragmentManager.l
    public void onFragmentViewCreated(FragmentManager fragmentManager, Fragment fragment, View view, Bundle bundle) {
        if (!"com.swmansion.rnscreens.n0".equals(fragment.getClass().getCanonicalName())) {
            this.f28809c.c(SentryLevel.DEBUG, "Fragment is not a ScreenStackFragment, won't listen for the first draw.", new Object[0]);
        } else if (!(view instanceof ViewGroup)) {
            this.f28809c.c(SentryLevel.WARNING, "Fragment view is not a ViewGroup, won't listen for the first draw.", new Object[0]);
        } else {
            ViewGroup viewGroup = (ViewGroup) view;
            if (viewGroup.getChildCount() == 0) {
                this.f28809c.c(SentryLevel.WARNING, "Fragment view has no children, won't listen for the first draw.", new Object[0]);
                return;
            }
            View childAt = viewGroup.getChildAt(0);
            if (childAt != null && (childAt.getContext() instanceof ReactContext)) {
                int id2 = childAt.getId();
                if (id2 == -1) {
                    this.f28809c.c(SentryLevel.WARNING, "Screen has no id, won't listen for the first draw.", new Object[0]);
                    return;
                }
                EventDispatcher b10 = b(childAt, id2);
                if (b10 == null) {
                    this.f28809c.c(SentryLevel.WARNING, "Screen has no event dispatcher, won't listen for the first draw.", new Object[0]);
                    return;
                } else {
                    b10.addListener(new a(b10, view, this.f28808b));
                    return;
                }
            }
            this.f28809c.c(SentryLevel.WARNING, "Fragment view has no ReactContext, won't listen for the first draw.", new Object[0]);
        }
    }
}
