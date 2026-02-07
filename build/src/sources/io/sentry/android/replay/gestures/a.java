package io.sentry.android.replay.gestures;

import android.view.MotionEvent;
import android.view.View;
import android.view.Window;
import io.sentry.SentryLevel;
import io.sentry.a1;
import io.sentry.android.replay.e;
import io.sentry.android.replay.util.f;
import io.sentry.android.replay.x;
import io.sentry.k7;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements e {

    /* renamed from: d  reason: collision with root package name */
    private final k7 f27710d;

    /* renamed from: e  reason: collision with root package name */
    private final c f27711e;

    /* renamed from: i  reason: collision with root package name */
    private final ArrayList f27712i;

    /* renamed from: o  reason: collision with root package name */
    private final io.sentry.util.a f27713o;

    /* renamed from: io.sentry.android.replay.gestures.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0393a extends f {

        /* renamed from: e  reason: collision with root package name */
        private final k7 f27714e;

        /* renamed from: i  reason: collision with root package name */
        private final c f27715i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public C0393a(k7 options, c cVar, Window.Callback callback) {
            super(callback);
            Intrinsics.checkNotNullParameter(options, "options");
            this.f27714e = options;
            this.f27715i = cVar;
        }

        @Override // io.sentry.android.replay.util.f, android.view.Window.Callback
        public boolean dispatchTouchEvent(MotionEvent motionEvent) {
            if (motionEvent != null) {
                MotionEvent obtainNoHistory = MotionEvent.obtainNoHistory(motionEvent);
                Intrinsics.checkNotNullExpressionValue(obtainNoHistory, "obtainNoHistory(...)");
                try {
                    c cVar = this.f27715i;
                    if (cVar != null) {
                        cVar.onTouchEvent(obtainNoHistory);
                    }
                } catch (Throwable th2) {
                    try {
                        this.f27714e.getLogger().b(SentryLevel.ERROR, "Error dispatching touch event", th2);
                    } finally {
                        obtainNoHistory.recycle();
                    }
                }
            }
            return super.dispatchTouchEvent(motionEvent);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ View f27716d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(View view) {
            super(1);
            this.f27716d = view;
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Boolean invoke(WeakReference it) {
            Intrinsics.checkNotNullParameter(it, "it");
            return Boolean.valueOf(Intrinsics.areEqual(it.get(), this.f27716d));
        }
    }

    public a(k7 options, c touchRecorderCallback) {
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(touchRecorderCallback, "touchRecorderCallback");
        this.f27710d = options;
        this.f27711e = touchRecorderCallback;
        this.f27712i = new ArrayList();
        this.f27713o = new io.sentry.util.a();
    }

    private final void a(View view) {
        Window a10 = x.a(view);
        if (a10 == null) {
            this.f27710d.getLogger().c(SentryLevel.DEBUG, "Window is invalid, not tracking gestures", new Object[0]);
            return;
        }
        Window.Callback callback = a10.getCallback();
        if (!(callback instanceof C0393a)) {
            a10.setCallback(new C0393a(this.f27710d, this.f27711e, callback));
        }
    }

    private final void c(View view) {
        Window a10 = x.a(view);
        if (a10 == null) {
            this.f27710d.getLogger().c(SentryLevel.DEBUG, "Window was null in stopGestureTracking", new Object[0]);
            return;
        }
        Window.Callback callback = a10.getCallback();
        if (callback instanceof C0393a) {
            a10.setCallback(((C0393a) callback).f27852d);
        }
    }

    public final void b() {
        a1 a10 = this.f27713o.a();
        try {
            for (WeakReference weakReference : this.f27712i) {
                View view = (View) weakReference.get();
                if (view != null) {
                    Intrinsics.checkNotNull(view);
                    c(view);
                }
            }
            this.f27712i.clear();
            Unit unit = Unit.f32056a;
            cs.a.a(a10, null);
        } finally {
        }
    }

    @Override // io.sentry.android.replay.e
    public void g(View root, boolean z10) {
        Intrinsics.checkNotNullParameter(root, "root");
        a1 a10 = this.f27713o.a();
        try {
            if (z10) {
                this.f27712i.add(new WeakReference(root));
                a(root);
                Unit unit = Unit.f32056a;
            } else {
                c(root);
                CollectionsKt.J(this.f27712i, new b(root));
            }
            cs.a.a(a10, null);
        } finally {
        }
    }
}
