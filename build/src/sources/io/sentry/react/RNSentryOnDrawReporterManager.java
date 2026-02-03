package io.sentry.react;

import android.app.Activity;
import android.view.View;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.android.core.l2;
import io.sentry.android.core.x0;
import io.sentry.android.core.z;
import io.sentry.k5;
import io.sentry.react.RNSentryOnDrawReporterManager;
import java.util.Objects;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class RNSentryOnDrawReporterManager extends SimpleViewManager<a> {
    public static final String REACT_CLASS = "RNSentryOnDrawReporter";
    public static final String TTFD_PREFIX = "ttfd-";
    public static final String TTID_PREFIX = "ttid-";
    @NotNull
    private final ReactApplicationContext mCallerContext;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a extends View {

        /* renamed from: s  reason: collision with root package name */
        private static final ILogger f30141s = new z("RNSentryOnDrawReporterView");

        /* renamed from: d  reason: collision with root package name */
        private final ReactApplicationContext f30142d;

        /* renamed from: e  reason: collision with root package name */
        private final k5 f30143e;

        /* renamed from: i  reason: collision with root package name */
        private final x0 f30144i;

        /* renamed from: o  reason: collision with root package name */
        private boolean f30145o;

        /* renamed from: p  reason: collision with root package name */
        private boolean f30146p;

        /* renamed from: q  reason: collision with root package name */
        private boolean f30147q;

        /* renamed from: r  reason: collision with root package name */
        private String f30148r;

        public a(ReactApplicationContext reactApplicationContext, x0 x0Var) {
            super(reactApplicationContext);
            this.f30143e = new l2();
            this.f30145o = false;
            this.f30146p = false;
            this.f30147q = false;
            this.f30148r = null;
            this.f30142d = reactApplicationContext;
            this.f30144i = x0Var;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public /* synthetic */ void b() {
            Double valueOf = Double.valueOf(this.f30143e.now().h() / 1.0E9d);
            if (this.f30148r == null) {
                f30141s.c(SentryLevel.ERROR, "[TimeToDisplay] parentSpanId removed before frame was rendered.", new Object[0]);
            } else if (this.f30145o) {
                w.e(RNSentryOnDrawReporterManager.TTID_PREFIX + this.f30148r, valueOf);
            } else if (this.f30146p) {
                w.e(RNSentryOnDrawReporterManager.TTFD_PREFIX + this.f30148r, valueOf);
            } else {
                f30141s.c(SentryLevel.DEBUG, "[TimeToDisplay] display type removed before frame was rendered.", new Object[0]);
            }
        }

        private void c() {
            if (this.f30148r == null) {
                return;
            }
            if (this.f30147q) {
                ILogger iLogger = f30141s;
                SentryLevel sentryLevel = SentryLevel.DEBUG;
                iLogger.c(sentryLevel, "[TimeToDisplay] Already recorded time to display for spanId: " + this.f30148r, new Object[0]);
                return;
            }
            if (this.f30145o) {
                f30141s.c(SentryLevel.DEBUG, "[TimeToDisplay] Register initial display event emitter.", new Object[0]);
            } else if (this.f30146p) {
                f30141s.c(SentryLevel.DEBUG, "[TimeToDisplay] Register full display event emitter.", new Object[0]);
            } else {
                f30141s.c(SentryLevel.DEBUG, "[TimeToDisplay] Not ready, missing displayType prop.", new Object[0]);
                return;
            }
            if (this.f30144i == null) {
                f30141s.c(SentryLevel.ERROR, "[TimeToDisplay] Won't emit next frame drawn event, buildInfo is null.", new Object[0]);
                return;
            }
            ReactApplicationContext reactApplicationContext = this.f30142d;
            if (reactApplicationContext == null) {
                f30141s.c(SentryLevel.ERROR, "[TimeToDisplay] Won't emit next frame drawn event, reactContext is null.", new Object[0]);
                return;
            }
            ILogger iLogger2 = f30141s;
            Activity a10 = io.sentry.react.utils.a.a(reactApplicationContext, iLogger2);
            if (a10 == null) {
                iLogger2.c(SentryLevel.ERROR, "[TimeToDisplay] Won't emit next frame drawn event, activity is null.", new Object[0]);
                return;
            }
            this.f30147q = true;
            d(a10, new Runnable() { // from class: io.sentry.react.o
                @Override // java.lang.Runnable
                public final void run() {
                    RNSentryOnDrawReporterManager.a.this.b();
                }
            }, this.f30144i);
        }

        protected void d(Activity activity, Runnable runnable, x0 x0Var) {
            io.sentry.android.core.internal.util.r.d(activity, runnable, x0Var);
        }

        public void setFullDisplay(boolean z10) {
            if (z10 != this.f30146p) {
                this.f30146p = z10;
                c();
            }
        }

        public void setInitialDisplay(boolean z10) {
            if (z10 != this.f30145o) {
                this.f30145o = z10;
                c();
            }
        }

        public void setParentSpanId(String str) {
            if (!Objects.equals(str, this.f30148r)) {
                this.f30148r = str;
                this.f30147q = false;
                c();
            }
        }
    }

    public RNSentryOnDrawReporterManager(ReactApplicationContext reactApplicationContext) {
        this.mCallerContext = reactApplicationContext;
    }

    @Override // com.facebook.react.uimanager.ViewManager, com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return REACT_CLASS;
    }

    @ReactProp(defaultBoolean = false, name = "fullDisplay")
    public void setFullDisplay(a aVar, boolean z10) {
        aVar.setFullDisplay(z10);
    }

    @ReactProp(defaultBoolean = false, name = "initialDisplay")
    public void setInitialDisplay(a aVar, boolean z10) {
        aVar.setInitialDisplay(z10);
    }

    @ReactProp(name = "parentSpanId")
    public void setParentSpanId(a aVar, String str) {
        aVar.setParentSpanId(str);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.uimanager.ViewManager
    @NotNull
    public a createViewInstance(@NotNull ThemedReactContext themedReactContext) {
        return new a(this.mCallerContext, new x0(new z()));
    }
}
