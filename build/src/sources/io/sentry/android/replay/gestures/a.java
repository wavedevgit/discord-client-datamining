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
    private final k7 f27910d;

    /* renamed from: e  reason: collision with root package name */
    private final c f27911e;

    /* renamed from: i  reason: collision with root package name */
    private final ArrayList f27912i;

    /* renamed from: o  reason: collision with root package name */
    private final io.sentry.util.a f27913o;

    /* renamed from: io.sentry.android.replay.gestures.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0419a extends f {

        /* renamed from: e  reason: collision with root package name */
        private final k7 f27914e;

        /* renamed from: i  reason: collision with root package name */
        private final c f27915i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public C0419a(k7 options, c cVar, Window.Callback callback) {
            super(callback);
            Intrinsics.checkNotNullParameter(options, "options");
            this.f27914e = options;
            this.f27915i = cVar;
        }

        @Override // io.sentry.android.replay.util.f, android.view.Window.Callback
        public boolean dispatchTouchEvent(MotionEvent motionEvent) {
            if (motionEvent != null) {
                MotionEvent obtainNoHistory = MotionEvent.obtainNoHistory(motionEvent);
                Intrinsics.checkNotNullExpressionValue(obtainNoHistory, "obtainNoHistory(...)");
                try {
                    c cVar = this.f27915i;
                    if (cVar != null) {
                        cVar.onTouchEvent(obtainNoHistory);
                    }
                } catch (Throwable th2) {
                    try {
                        this.f27914e.getLogger().b(SentryLevel.ERROR, "Error dispatching touch event", th2);
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
        final /* synthetic */ View f27916d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(View view) {
            super(1);
            this.f27916d = view;
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Boolean invoke(WeakReference it) {
            Intrinsics.checkNotNullParameter(it, "it");
            return Boolean.valueOf(Intrinsics.areEqual(it.get(), this.f27916d));
        }
    }

    public a(k7 options, c touchRecorderCallback) {
        Intrinsics.checkNotNullParameter(options, "options");
        Intrinsics.checkNotNullParameter(touchRecorderCallback, "touchRecorderCallback");
        this.f27910d = options;
        this.f27911e = touchRecorderCallback;
        this.f27912i = new ArrayList();
        this.f27913o = new io.sentry.util.a();
    }

    private final void a(View view) {
        Window a10 = x.a(view);
        if (a10 == null) {
            this.f27910d.getLogger().c(SentryLevel.DEBUG, "Window is invalid, not tracking gestures", new Object[0]);
            return;
        }
        Window.Callback callback = a10.getCallback();
        if (!(callback instanceof C0419a)) {
            a10.setCallback(new C0419a(this.f27910d, this.f27911e, callback));
        }
    }

    private final void c(View view) {
        Window a10 = x.a(view);
        if (a10 == null) {
            this.f27910d.getLogger().c(SentryLevel.DEBUG, "Window was null in stopGestureTracking", new Object[0]);
            return;
        }
        Window.Callback callback = a10.getCallback();
        if (callback instanceof C0419a) {
            a10.setCallback(((C0419a) callback).f28052d);
        }
    }

    public final void b() {
        a1 a10 = this.f27913o.a();
        try {
            for (WeakReference weakReference : this.f27912i) {
                View view = (View) weakReference.get();
                if (view != null) {
                    Intrinsics.checkNotNull(view);
                    c(view);
                }
            }
            this.f27912i.clear();
            Unit unit = Unit.f31765a;
            ds.a.a(a10, null);
        } finally {
        }
    }

    @Override // io.sentry.android.replay.e
    public void g(View root, boolean z10) {
        Intrinsics.checkNotNullParameter(root, "root");
        a1 a10 = this.f27913o.a();
        try {
            if (z10) {
                this.f27912i.add(new WeakReference(root));
                a(root);
                Unit unit = Unit.f31765a;
            } else {
                c(root);
                CollectionsKt.J(this.f27912i, new b(root));
            }
            ds.a.a(a10, null);
        } finally {
        }
    }
}
