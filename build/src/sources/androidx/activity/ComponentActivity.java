package androidx.activity;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.Application;
import android.content.Context;
import android.content.Intent;
import android.content.IntentSender;
import android.content.res.Configuration;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.os.SystemClock;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewTreeObserver;
import android.view.Window;
import android.window.OnBackInvokedDispatcher;
import androidx.activity.ComponentActivity;
import androidx.activity.contextaware.ContextAwareHelper;
import androidx.activity.contextaware.OnContextAvailableListener;
import androidx.activity.result.ActivityResultCallback;
import androidx.activity.result.ActivityResultLauncher;
import androidx.activity.result.ActivityResultRegistry;
import androidx.activity.result.contract.ActivityResultContract;
import androidx.core.util.Consumer;
import androidx.core.view.MenuHostHelper;
import androidx.core.view.MenuProvider;
import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import androidx.lifecycle.LifecycleRegistry;
import androidx.lifecycle.ViewModelProvider;
import androidx.lifecycle.ViewModelStore;
import androidx.lifecycle.e0;
import androidx.lifecycle.j0;
import androidx.lifecycle.q0;
import androidx.lifecycle.r0;
import androidx.lifecycle.s0;
import androidx.lifecycle.viewmodel.CreationExtras;
import androidx.savedstate.SavedStateRegistry;
import androidx.savedstate.SavedStateRegistryController;
import java.util.Iterator;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.Executor;
import java.util.concurrent.atomic.AtomicInteger;
import kotlin.Lazy;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ComponentActivity extends androidx.core.app.ComponentActivity implements LifecycleOwner, q0, androidx.lifecycle.h, u3.f, z, d.d, d.b, androidx.core.content.d, androidx.core.content.e, androidx.core.app.s, androidx.core.app.t, androidx.core.view.n, x {
    @NotNull
    private static final String ACTIVITY_RESULT_TAG = "android:support:activity-result";
    @NotNull
    private static final Companion Companion = new Companion(null);
    private ViewModelStore _viewModelStore;
    @NotNull
    private final ActivityResultRegistry activityResultRegistry;
    private int contentLayoutId;
    @NotNull
    private final Lazy defaultViewModelProviderFactory$delegate;
    private boolean dispatchingOnMultiWindowModeChanged;
    private boolean dispatchingOnPictureInPictureModeChanged;
    @NotNull
    private final Lazy fullyDrawnReporter$delegate;
    @NotNull
    private final AtomicInteger nextLocalRequestCode;
    @NotNull
    private final Lazy onBackPressedDispatcher$delegate;
    @NotNull
    private final CopyOnWriteArrayList<Consumer> onConfigurationChangedListeners;
    @NotNull
    private final CopyOnWriteArrayList<Consumer> onMultiWindowModeChangedListeners;
    @NotNull
    private final CopyOnWriteArrayList<Consumer> onNewIntentListeners;
    @NotNull
    private final CopyOnWriteArrayList<Consumer> onPictureInPictureModeChangedListeners;
    @NotNull
    private final CopyOnWriteArrayList<Consumer> onTrimMemoryListeners;
    @NotNull
    private final CopyOnWriteArrayList<Runnable> onUserLeaveHintListeners;
    @NotNull
    private final ReportFullyDrawnExecutor reportFullyDrawnExecutor;
    @NotNull
    private final SavedStateRegistryController savedStateRegistryController;
    @NotNull
    private final ContextAwareHelper contextAwareHelper = new ContextAwareHelper();
    @NotNull
    private final MenuHostHelper menuHostHelper = new MenuHostHelper(new Runnable() { // from class: androidx.activity.b
        @Override // java.lang.Runnable
        public final void run() {
            ComponentActivity.q(ComponentActivity.this);
        }
    });

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface ReportFullyDrawnExecutor extends Executor {
        void F0(View view);

        void g();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a implements androidx.lifecycle.m {
        a() {
        }

        @Override // androidx.lifecycle.m
        public void k(LifecycleOwner source, Lifecycle.a event) {
            Intrinsics.checkNotNullParameter(source, "source");
            Intrinsics.checkNotNullParameter(event, "event");
            ComponentActivity.this.p();
            ComponentActivity.this.getLifecycle().d(this);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public static final b f1233a = new b();

        private b() {
        }

        public final OnBackInvokedDispatcher a(Activity activity) {
            Intrinsics.checkNotNullParameter(activity, "activity");
            OnBackInvokedDispatcher onBackInvokedDispatcher = activity.getOnBackInvokedDispatcher();
            Intrinsics.checkNotNullExpressionValue(onBackInvokedDispatcher, "activity.getOnBackInvokedDispatcher()");
            return onBackInvokedDispatcher;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        private Object f1234a;

        /* renamed from: b  reason: collision with root package name */
        private ViewModelStore f1235b;

        public final Object a() {
            return this.f1234a;
        }

        public final ViewModelStore b() {
            return this.f1235b;
        }

        public final void c(Object obj) {
            this.f1234a = obj;
        }

        public final void d(ViewModelStore viewModelStore) {
            this.f1235b = viewModelStore;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class d implements ReportFullyDrawnExecutor, ViewTreeObserver.OnDrawListener, Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final long f1236d = SystemClock.uptimeMillis() + 10000;

        /* renamed from: e  reason: collision with root package name */
        private Runnable f1237e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f1238i;

        public d() {
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void b(d dVar) {
            Runnable runnable = dVar.f1237e;
            if (runnable != null) {
                Intrinsics.checkNotNull(runnable);
                runnable.run();
                dVar.f1237e = null;
            }
        }

        @Override // androidx.activity.ComponentActivity.ReportFullyDrawnExecutor
        public void F0(View view) {
            Intrinsics.checkNotNullParameter(view, "view");
            if (!this.f1238i) {
                this.f1238i = true;
                view.getViewTreeObserver().addOnDrawListener(this);
            }
        }

        @Override // java.util.concurrent.Executor
        public void execute(Runnable runnable) {
            Intrinsics.checkNotNullParameter(runnable, "runnable");
            this.f1237e = runnable;
            View decorView = ComponentActivity.this.getWindow().getDecorView();
            Intrinsics.checkNotNullExpressionValue(decorView, "window.decorView");
            if (this.f1238i) {
                if (Intrinsics.areEqual(Looper.myLooper(), Looper.getMainLooper())) {
                    decorView.invalidate();
                    return;
                } else {
                    decorView.postInvalidate();
                    return;
                }
            }
            decorView.postOnAnimation(new Runnable() { // from class: androidx.activity.h
                @Override // java.lang.Runnable
                public final void run() {
                    ComponentActivity.d.b(ComponentActivity.d.this);
                }
            });
        }

        @Override // androidx.activity.ComponentActivity.ReportFullyDrawnExecutor
        public void g() {
            ComponentActivity.this.getWindow().getDecorView().removeCallbacks(this);
            ComponentActivity.this.getWindow().getDecorView().getViewTreeObserver().removeOnDrawListener(this);
        }

        @Override // android.view.ViewTreeObserver.OnDrawListener
        public void onDraw() {
            Runnable runnable = this.f1237e;
            if (runnable != null) {
                runnable.run();
                this.f1237e = null;
                if (ComponentActivity.this.getFullyDrawnReporter().c()) {
                    this.f1238i = false;
                    ComponentActivity.this.getWindow().getDecorView().post(this);
                }
            } else if (SystemClock.uptimeMillis() > this.f1236d) {
                this.f1238i = false;
                ComponentActivity.this.getWindow().getDecorView().post(this);
            }
        }

        @Override // java.lang.Runnable
        public void run() {
            ComponentActivity.this.getWindow().getDecorView().getViewTreeObserver().removeOnDrawListener(this);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class e extends ActivityResultRegistry {
        e() {
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void s(e eVar, int i10, ActivityResultContract.a aVar) {
            eVar.f(i10, aVar.a());
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void t(e eVar, int i10, IntentSender.SendIntentException sendIntentException) {
            eVar.e(i10, 0, new Intent().setAction("androidx.activity.result.contract.action.INTENT_SENDER_REQUEST").putExtra("androidx.activity.result.contract.extra.SEND_INTENT_EXCEPTION", sendIntentException));
        }

        @Override // androidx.activity.result.ActivityResultRegistry
        public void i(final int i10, ActivityResultContract contract, Object obj, androidx.core.app.d dVar) {
            Bundle bundle;
            final int i11;
            Intrinsics.checkNotNullParameter(contract, "contract");
            ComponentActivity componentActivity = ComponentActivity.this;
            final ActivityResultContract.a synchronousResult = contract.getSynchronousResult(componentActivity, obj);
            if (synchronousResult != null) {
                new Handler(Looper.getMainLooper()).post(new Runnable() { // from class: androidx.activity.i
                    @Override // java.lang.Runnable
                    public final void run() {
                        ComponentActivity.e.s(ComponentActivity.e.this, i10, synchronousResult);
                    }
                });
                return;
            }
            Intent createIntent = contract.createIntent(componentActivity, obj);
            if (createIntent.getExtras() != null) {
                Bundle extras = createIntent.getExtras();
                Intrinsics.checkNotNull(extras);
                if (extras.getClassLoader() == null) {
                    createIntent.setExtrasClassLoader(componentActivity.getClassLoader());
                }
            }
            if (createIntent.hasExtra("androidx.activity.result.contract.extra.ACTIVITY_OPTIONS_BUNDLE")) {
                bundle = createIntent.getBundleExtra("androidx.activity.result.contract.extra.ACTIVITY_OPTIONS_BUNDLE");
                createIntent.removeExtra("androidx.activity.result.contract.extra.ACTIVITY_OPTIONS_BUNDLE");
            } else if (dVar != null) {
                bundle = dVar.b();
            } else {
                bundle = null;
            }
            Bundle bundle2 = bundle;
            if (Intrinsics.areEqual("androidx.activity.result.contract.action.REQUEST_PERMISSIONS", createIntent.getAction())) {
                String[] stringArrayExtra = createIntent.getStringArrayExtra("androidx.activity.result.contract.extra.PERMISSIONS");
                if (stringArrayExtra == null) {
                    stringArrayExtra = new String[0];
                }
                androidx.core.app.b.v(componentActivity, stringArrayExtra, i10);
            } else if (Intrinsics.areEqual("androidx.activity.result.contract.action.INTENT_SENDER_REQUEST", createIntent.getAction())) {
                d.e eVar = (d.e) createIntent.getParcelableExtra("androidx.activity.result.contract.extra.INTENT_SENDER_REQUEST");
                try {
                    Intrinsics.checkNotNull(eVar);
                    i11 = i10;
                } catch (IntentSender.SendIntentException e10) {
                    e = e10;
                    i11 = i10;
                }
                try {
                    androidx.core.app.b.A(componentActivity, eVar.d(), i11, eVar.a(), eVar.b(), eVar.c(), 0, bundle2);
                } catch (IntentSender.SendIntentException e11) {
                    e = e11;
                    final IntentSender.SendIntentException sendIntentException = e;
                    new Handler(Looper.getMainLooper()).post(new Runnable() { // from class: androidx.activity.j
                        @Override // java.lang.Runnable
                        public final void run() {
                            ComponentActivity.e.t(ComponentActivity.e.this, i11, sendIntentException);
                        }
                    });
                }
            } else {
                androidx.core.app.b.z(componentActivity, createIntent, i10, bundle2);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class f extends Lambda implements Function0 {
        f() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final j0 invoke() {
            Bundle bundle;
            Application application = ComponentActivity.this.getApplication();
            ComponentActivity componentActivity = ComponentActivity.this;
            if (componentActivity.getIntent() != null) {
                bundle = ComponentActivity.this.getIntent().getExtras();
            } else {
                bundle = null;
            }
            return new j0(application, componentActivity, bundle);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class g extends Lambda implements Function0 {

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class a extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ ComponentActivity f1243d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(ComponentActivity componentActivity) {
                super(0);
                this.f1243d = componentActivity;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m0invoke();
                return Unit.f32008a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m0invoke() {
                this.f1243d.reportFullyDrawn();
            }
        }

        g() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final FullyDrawnReporter invoke() {
            return new FullyDrawnReporter(ComponentActivity.this.reportFullyDrawnExecutor, new a(ComponentActivity.this));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class h extends Lambda implements Function0 {
        h() {
            super(0);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void d(ComponentActivity componentActivity) {
            try {
                ComponentActivity.super.onBackPressed();
            } catch (IllegalStateException e10) {
                if (Intrinsics.areEqual(e10.getMessage(), "Can not perform this action after onSaveInstanceState")) {
                    return;
                }
                throw e10;
            } catch (NullPointerException e11) {
                if (!Intrinsics.areEqual(e11.getMessage(), "Attempt to invoke virtual method 'android.os.Handler android.app.FragmentHostCallback.getHandler()' on a null object reference")) {
                    throw e11;
                }
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void e(ComponentActivity componentActivity, OnBackPressedDispatcher onBackPressedDispatcher) {
            componentActivity.m(onBackPressedDispatcher);
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: c */
        public final OnBackPressedDispatcher invoke() {
            final ComponentActivity componentActivity = ComponentActivity.this;
            final OnBackPressedDispatcher onBackPressedDispatcher = new OnBackPressedDispatcher(new Runnable() { // from class: androidx.activity.k
                @Override // java.lang.Runnable
                public final void run() {
                    ComponentActivity.h.d(ComponentActivity.this);
                }
            });
            final ComponentActivity componentActivity2 = ComponentActivity.this;
            if (Build.VERSION.SDK_INT >= 33) {
                if (Intrinsics.areEqual(Looper.myLooper(), Looper.getMainLooper())) {
                    componentActivity2.m(onBackPressedDispatcher);
                } else {
                    new Handler(Looper.getMainLooper()).post(new Runnable() { // from class: androidx.activity.l
                        @Override // java.lang.Runnable
                        public final void run() {
                            ComponentActivity.h.e(ComponentActivity.this, onBackPressedDispatcher);
                        }
                    });
                    return onBackPressedDispatcher;
                }
            }
            return onBackPressedDispatcher;
        }
    }

    public ComponentActivity() {
        SavedStateRegistryController b10 = SavedStateRegistryController.f5501c.b(this);
        this.savedStateRegistryController = b10;
        this.reportFullyDrawnExecutor = o();
        this.fullyDrawnReporter$delegate = qr.l.a(new g());
        this.nextLocalRequestCode = new AtomicInteger();
        this.activityResultRegistry = new e();
        this.onConfigurationChangedListeners = new CopyOnWriteArrayList<>();
        this.onTrimMemoryListeners = new CopyOnWriteArrayList<>();
        this.onNewIntentListeners = new CopyOnWriteArrayList<>();
        this.onMultiWindowModeChangedListeners = new CopyOnWriteArrayList<>();
        this.onPictureInPictureModeChangedListeners = new CopyOnWriteArrayList<>();
        this.onUserLeaveHintListeners = new CopyOnWriteArrayList<>();
        if (getLifecycle() != null) {
            getLifecycle().a(new androidx.lifecycle.m() { // from class: androidx.activity.c
                @Override // androidx.lifecycle.m
                public final void k(LifecycleOwner lifecycleOwner, Lifecycle.a aVar) {
                    ComponentActivity.i(ComponentActivity.this, lifecycleOwner, aVar);
                }
            });
            getLifecycle().a(new androidx.lifecycle.m() { // from class: androidx.activity.d
                @Override // androidx.lifecycle.m
                public final void k(LifecycleOwner lifecycleOwner, Lifecycle.a aVar) {
                    ComponentActivity.j(ComponentActivity.this, lifecycleOwner, aVar);
                }
            });
            getLifecycle().a(new a());
            b10.c();
            e0.c(this);
            getSavedStateRegistry().c(ACTIVITY_RESULT_TAG, new SavedStateRegistry.b() { // from class: androidx.activity.e
                @Override // androidx.savedstate.SavedStateRegistry.b
                public final Bundle a() {
                    Bundle k10;
                    k10 = ComponentActivity.k(ComponentActivity.this);
                    return k10;
                }
            });
            addOnContextAvailableListener(new OnContextAvailableListener() { // from class: androidx.activity.f
                @Override // androidx.activity.contextaware.OnContextAvailableListener
                public final void a(Context context) {
                    ComponentActivity.l(ComponentActivity.this, context);
                }
            });
            this.defaultViewModelProviderFactory$delegate = qr.l.a(new f());
            this.onBackPressedDispatcher$delegate = qr.l.a(new h());
            return;
        }
        throw new IllegalStateException("getLifecycle() returned null in ComponentActivity's constructor. Please make sure you are lazily constructing your Lifecycle in the first call to getLifecycle() rather than relying on field initialization.");
    }

    public static /* synthetic */ void getOnBackPressedDispatcher$annotations() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void i(ComponentActivity componentActivity, LifecycleOwner lifecycleOwner, Lifecycle.a event) {
        Window window;
        View peekDecorView;
        Intrinsics.checkNotNullParameter(lifecycleOwner, "<anonymous parameter 0>");
        Intrinsics.checkNotNullParameter(event, "event");
        if (event == Lifecycle.a.ON_STOP && (window = componentActivity.getWindow()) != null && (peekDecorView = window.peekDecorView()) != null) {
            peekDecorView.cancelPendingInputEvents();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(ComponentActivity componentActivity, LifecycleOwner lifecycleOwner, Lifecycle.a event) {
        Intrinsics.checkNotNullParameter(lifecycleOwner, "<anonymous parameter 0>");
        Intrinsics.checkNotNullParameter(event, "event");
        if (event == Lifecycle.a.ON_DESTROY) {
            componentActivity.contextAwareHelper.b();
            if (!componentActivity.isChangingConfigurations()) {
                componentActivity.getViewModelStore().a();
            }
            componentActivity.reportFullyDrawnExecutor.g();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Bundle k(ComponentActivity componentActivity) {
        Bundle bundle = new Bundle();
        componentActivity.activityResultRegistry.k(bundle);
        return bundle;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void l(ComponentActivity componentActivity, Context it) {
        Intrinsics.checkNotNullParameter(it, "it");
        Bundle a10 = componentActivity.getSavedStateRegistry().a(ACTIVITY_RESULT_TAG);
        if (a10 != null) {
            componentActivity.activityResultRegistry.j(a10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void m(final OnBackPressedDispatcher onBackPressedDispatcher) {
        getLifecycle().a(new androidx.lifecycle.m() { // from class: androidx.activity.g
            @Override // androidx.lifecycle.m
            public final void k(LifecycleOwner lifecycleOwner, Lifecycle.a aVar) {
                ComponentActivity.n(OnBackPressedDispatcher.this, this, lifecycleOwner, aVar);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void n(OnBackPressedDispatcher onBackPressedDispatcher, ComponentActivity componentActivity, LifecycleOwner lifecycleOwner, Lifecycle.a event) {
        Intrinsics.checkNotNullParameter(lifecycleOwner, "<anonymous parameter 0>");
        Intrinsics.checkNotNullParameter(event, "event");
        if (event == Lifecycle.a.ON_CREATE) {
            onBackPressedDispatcher.o(b.f1233a.a(componentActivity));
        }
    }

    private final ReportFullyDrawnExecutor o() {
        return new d();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void p() {
        if (this._viewModelStore == null) {
            c cVar = (c) getLastNonConfigurationInstance();
            if (cVar != null) {
                this._viewModelStore = cVar.b();
            }
            if (this._viewModelStore == null) {
                this._viewModelStore = new ViewModelStore();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void q(ComponentActivity componentActivity) {
        componentActivity.invalidateMenu();
    }

    @Override // android.app.Activity
    public void addContentView(View view, ViewGroup.LayoutParams layoutParams) {
        initializeViewTreeOwners();
        ReportFullyDrawnExecutor reportFullyDrawnExecutor = this.reportFullyDrawnExecutor;
        View decorView = getWindow().getDecorView();
        Intrinsics.checkNotNullExpressionValue(decorView, "window.decorView");
        reportFullyDrawnExecutor.F0(decorView);
        super.addContentView(view, layoutParams);
    }

    @Override // androidx.core.view.n
    public void addMenuProvider(@NotNull MenuProvider provider) {
        Intrinsics.checkNotNullParameter(provider, "provider");
        this.menuHostHelper.c(provider);
    }

    @Override // androidx.core.content.d
    public final void addOnConfigurationChangedListener(@NotNull Consumer listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        this.onConfigurationChangedListeners.add(listener);
    }

    public final void addOnContextAvailableListener(@NotNull OnContextAvailableListener listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        this.contextAwareHelper.a(listener);
    }

    @Override // androidx.core.app.s
    public final void addOnMultiWindowModeChangedListener(@NotNull Consumer listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        this.onMultiWindowModeChangedListeners.add(listener);
    }

    public final void addOnNewIntentListener(@NotNull Consumer listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        this.onNewIntentListeners.add(listener);
    }

    @Override // androidx.core.app.t
    public final void addOnPictureInPictureModeChangedListener(@NotNull Consumer listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        this.onPictureInPictureModeChangedListeners.add(listener);
    }

    @Override // androidx.core.content.e
    public final void addOnTrimMemoryListener(@NotNull Consumer listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        this.onTrimMemoryListeners.add(listener);
    }

    public final void addOnUserLeaveHintListener(@NotNull Runnable listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        this.onUserLeaveHintListeners.add(listener);
    }

    @Override // d.d
    @NotNull
    public final ActivityResultRegistry getActivityResultRegistry() {
        return this.activityResultRegistry;
    }

    @Override // androidx.lifecycle.h
    @NotNull
    public CreationExtras getDefaultViewModelCreationExtras() {
        Bundle bundle = null;
        androidx.lifecycle.viewmodel.a aVar = new androidx.lifecycle.viewmodel.a(null, 1, null);
        if (getApplication() != null) {
            CreationExtras.c cVar = ViewModelProvider.a.f4905h;
            Application application = getApplication();
            Intrinsics.checkNotNullExpressionValue(application, "application");
            aVar.c(cVar, application);
        }
        aVar.c(e0.f4935a, this);
        aVar.c(e0.f4936b, this);
        Intent intent = getIntent();
        if (intent != null) {
            bundle = intent.getExtras();
        }
        if (bundle != null) {
            aVar.c(e0.f4937c, bundle);
        }
        return aVar;
    }

    @Override // androidx.lifecycle.h
    @NotNull
    public ViewModelProvider.Factory getDefaultViewModelProviderFactory() {
        return (ViewModelProvider.Factory) this.defaultViewModelProviderFactory$delegate.getValue();
    }

    @NotNull
    public FullyDrawnReporter getFullyDrawnReporter() {
        return (FullyDrawnReporter) this.fullyDrawnReporter$delegate.getValue();
    }

    @qr.c
    public Object getLastCustomNonConfigurationInstance() {
        c cVar = (c) getLastNonConfigurationInstance();
        if (cVar != null) {
            return cVar.a();
        }
        return null;
    }

    @Override // androidx.core.app.ComponentActivity, androidx.lifecycle.LifecycleOwner
    @NotNull
    public Lifecycle getLifecycle() {
        return super.getLifecycle();
    }

    @Override // androidx.activity.z
    @NotNull
    public final OnBackPressedDispatcher getOnBackPressedDispatcher() {
        return (OnBackPressedDispatcher) this.onBackPressedDispatcher$delegate.getValue();
    }

    @Override // u3.f
    @NotNull
    public final SavedStateRegistry getSavedStateRegistry() {
        return this.savedStateRegistryController.b();
    }

    @Override // androidx.lifecycle.q0
    @NotNull
    public ViewModelStore getViewModelStore() {
        if (getApplication() != null) {
            p();
            ViewModelStore viewModelStore = this._viewModelStore;
            Intrinsics.checkNotNull(viewModelStore);
            return viewModelStore;
        }
        throw new IllegalStateException("Your activity is not yet attached to the Application instance. You can't request ViewModel before onCreate call.");
    }

    public void initializeViewTreeOwners() {
        View decorView = getWindow().getDecorView();
        Intrinsics.checkNotNullExpressionValue(decorView, "window.decorView");
        r0.b(decorView, this);
        View decorView2 = getWindow().getDecorView();
        Intrinsics.checkNotNullExpressionValue(decorView2, "window.decorView");
        s0.a(decorView2, this);
        View decorView3 = getWindow().getDecorView();
        Intrinsics.checkNotNullExpressionValue(decorView3, "window.decorView");
        u3.j.b(decorView3, this);
        View decorView4 = getWindow().getDecorView();
        Intrinsics.checkNotNullExpressionValue(decorView4, "window.decorView");
        d0.a(decorView4, this);
        View decorView5 = getWindow().getDecorView();
        Intrinsics.checkNotNullExpressionValue(decorView5, "window.decorView");
        c0.a(decorView5, this);
    }

    public void invalidateMenu() {
        invalidateOptionsMenu();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.app.Activity
    public void onActivityResult(int i10, int i11, Intent intent) {
        if (!this.activityResultRegistry.e(i10, i11, intent)) {
            super.onActivityResult(i10, i11, intent);
        }
    }

    @Override // android.app.Activity
    @qr.c
    public void onBackPressed() {
        getOnBackPressedDispatcher().l();
    }

    @Override // android.app.Activity, android.content.ComponentCallbacks
    public void onConfigurationChanged(Configuration newConfig) {
        Intrinsics.checkNotNullParameter(newConfig, "newConfig");
        super.onConfigurationChanged(newConfig);
        Iterator<Consumer> it = this.onConfigurationChangedListeners.iterator();
        while (it.hasNext()) {
            it.next().accept(newConfig);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.core.app.ComponentActivity, android.app.Activity
    public void onCreate(Bundle bundle) {
        this.savedStateRegistryController.d(bundle);
        this.contextAwareHelper.c(this);
        super.onCreate(bundle);
        androidx.lifecycle.a0.f4912e.c(this);
        int i10 = this.contentLayoutId;
        if (i10 != 0) {
            setContentView(i10);
        }
    }

    @Override // android.app.Activity, android.view.Window.Callback
    public boolean onCreatePanelMenu(int i10, @NotNull Menu menu) {
        Intrinsics.checkNotNullParameter(menu, "menu");
        if (i10 == 0) {
            super.onCreatePanelMenu(i10, menu);
            this.menuHostHelper.f(menu, getMenuInflater());
            return true;
        }
        return true;
    }

    @Override // android.app.Activity, android.view.Window.Callback
    public boolean onMenuItemSelected(int i10, MenuItem item) {
        Intrinsics.checkNotNullParameter(item, "item");
        if (super.onMenuItemSelected(i10, item)) {
            return true;
        }
        if (i10 == 0) {
            return this.menuHostHelper.h(item);
        }
        return false;
    }

    @Override // android.app.Activity
    @qr.c
    public void onMultiWindowModeChanged(boolean z10) {
        if (this.dispatchingOnMultiWindowModeChanged) {
            return;
        }
        Iterator<Consumer> it = this.onMultiWindowModeChangedListeners.iterator();
        while (it.hasNext()) {
            it.next().accept(new androidx.core.app.h(z10));
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.app.Activity
    public void onNewIntent(@NotNull Intent intent) {
        Intrinsics.checkNotNullParameter(intent, "intent");
        super.onNewIntent(intent);
        Iterator<Consumer> it = this.onNewIntentListeners.iterator();
        while (it.hasNext()) {
            it.next().accept(intent);
        }
    }

    @Override // android.app.Activity, android.view.Window.Callback
    public void onPanelClosed(int i10, Menu menu) {
        Intrinsics.checkNotNullParameter(menu, "menu");
        this.menuHostHelper.g(menu);
        super.onPanelClosed(i10, menu);
    }

    @Override // android.app.Activity
    @qr.c
    public void onPictureInPictureModeChanged(boolean z10) {
        if (this.dispatchingOnPictureInPictureModeChanged) {
            return;
        }
        Iterator<Consumer> it = this.onPictureInPictureModeChangedListeners.iterator();
        while (it.hasNext()) {
            it.next().accept(new androidx.core.app.v(z10));
        }
    }

    @Override // android.app.Activity, android.view.Window.Callback
    public boolean onPreparePanel(int i10, View view, @NotNull Menu menu) {
        Intrinsics.checkNotNullParameter(menu, "menu");
        if (i10 == 0) {
            super.onPreparePanel(i10, view, menu);
            this.menuHostHelper.i(menu);
            return true;
        }
        return true;
    }

    @Override // android.app.Activity
    public void onRequestPermissionsResult(int i10, String[] permissions, int[] grantResults) {
        Intrinsics.checkNotNullParameter(permissions, "permissions");
        Intrinsics.checkNotNullParameter(grantResults, "grantResults");
        if (!this.activityResultRegistry.e(i10, -1, new Intent().putExtra("androidx.activity.result.contract.extra.PERMISSIONS", permissions).putExtra("androidx.activity.result.contract.extra.PERMISSION_GRANT_RESULTS", grantResults))) {
            super.onRequestPermissionsResult(i10, permissions, grantResults);
        }
    }

    @qr.c
    public Object onRetainCustomNonConfigurationInstance() {
        return null;
    }

    @Override // android.app.Activity
    public final Object onRetainNonConfigurationInstance() {
        c cVar;
        Object onRetainCustomNonConfigurationInstance = onRetainCustomNonConfigurationInstance();
        ViewModelStore viewModelStore = this._viewModelStore;
        if (viewModelStore == null && (cVar = (c) getLastNonConfigurationInstance()) != null) {
            viewModelStore = cVar.b();
        }
        if (viewModelStore == null && onRetainCustomNonConfigurationInstance == null) {
            return null;
        }
        c cVar2 = new c();
        cVar2.c(onRetainCustomNonConfigurationInstance);
        cVar2.d(viewModelStore);
        return cVar2;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.core.app.ComponentActivity, android.app.Activity
    public void onSaveInstanceState(@NotNull Bundle outState) {
        Intrinsics.checkNotNullParameter(outState, "outState");
        if (getLifecycle() instanceof LifecycleRegistry) {
            Lifecycle lifecycle = getLifecycle();
            Intrinsics.checkNotNull(lifecycle, "null cannot be cast to non-null type androidx.lifecycle.LifecycleRegistry");
            ((LifecycleRegistry) lifecycle).o(Lifecycle.State.f4848i);
        }
        super.onSaveInstanceState(outState);
        this.savedStateRegistryController.e(outState);
    }

    @Override // android.app.Activity, android.content.ComponentCallbacks2
    public void onTrimMemory(int i10) {
        super.onTrimMemory(i10);
        Iterator<Consumer> it = this.onTrimMemoryListeners.iterator();
        while (it.hasNext()) {
            it.next().accept(Integer.valueOf(i10));
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.app.Activity
    public void onUserLeaveHint() {
        super.onUserLeaveHint();
        Iterator<Runnable> it = this.onUserLeaveHintListeners.iterator();
        while (it.hasNext()) {
            it.next().run();
        }
    }

    public Context peekAvailableContext() {
        return this.contextAwareHelper.d();
    }

    @NotNull
    public final <I, O> ActivityResultLauncher registerForActivityResult(@NotNull ActivityResultContract contract, @NotNull ActivityResultRegistry registry, @NotNull ActivityResultCallback callback) {
        Intrinsics.checkNotNullParameter(contract, "contract");
        Intrinsics.checkNotNullParameter(registry, "registry");
        Intrinsics.checkNotNullParameter(callback, "callback");
        return registry.m("activity_rq#" + this.nextLocalRequestCode.getAndIncrement(), this, contract, callback);
    }

    @Override // androidx.core.view.n
    public void removeMenuProvider(@NotNull MenuProvider provider) {
        Intrinsics.checkNotNullParameter(provider, "provider");
        this.menuHostHelper.j(provider);
    }

    @Override // androidx.core.content.d
    public final void removeOnConfigurationChangedListener(@NotNull Consumer listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        this.onConfigurationChangedListeners.remove(listener);
    }

    public final void removeOnContextAvailableListener(@NotNull OnContextAvailableListener listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        this.contextAwareHelper.e(listener);
    }

    @Override // androidx.core.app.s
    public final void removeOnMultiWindowModeChangedListener(@NotNull Consumer listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        this.onMultiWindowModeChangedListeners.remove(listener);
    }

    public final void removeOnNewIntentListener(@NotNull Consumer listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        this.onNewIntentListeners.remove(listener);
    }

    @Override // androidx.core.app.t
    public final void removeOnPictureInPictureModeChangedListener(@NotNull Consumer listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        this.onPictureInPictureModeChangedListeners.remove(listener);
    }

    @Override // androidx.core.content.e
    public final void removeOnTrimMemoryListener(@NotNull Consumer listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        this.onTrimMemoryListeners.remove(listener);
    }

    public final void removeOnUserLeaveHintListener(@NotNull Runnable listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        this.onUserLeaveHintListeners.remove(listener);
    }

    @Override // android.app.Activity
    public void reportFullyDrawn() {
        try {
            if (c4.a.h()) {
                c4.a.c("reportFullyDrawn() for ComponentActivity");
            }
            super.reportFullyDrawn();
            getFullyDrawnReporter().b();
            c4.a.f();
        } catch (Throwable th2) {
            c4.a.f();
            throw th2;
        }
    }

    @Override // android.app.Activity
    public void setContentView(int i10) {
        initializeViewTreeOwners();
        ReportFullyDrawnExecutor reportFullyDrawnExecutor = this.reportFullyDrawnExecutor;
        View decorView = getWindow().getDecorView();
        Intrinsics.checkNotNullExpressionValue(decorView, "window.decorView");
        reportFullyDrawnExecutor.F0(decorView);
        super.setContentView(i10);
    }

    @Override // android.app.Activity
    @qr.c
    public void startActivityForResult(@NotNull Intent intent, int i10) {
        Intrinsics.checkNotNullParameter(intent, "intent");
        super.startActivityForResult(intent, i10);
    }

    @Override // android.app.Activity
    @qr.c
    public void startIntentSenderForResult(@NotNull IntentSender intent, int i10, Intent intent2, int i11, int i12, int i13) {
        Intrinsics.checkNotNullParameter(intent, "intent");
        super.startIntentSenderForResult(intent, i10, intent2, i11, i12, i13);
    }

    public void addMenuProvider(@NotNull MenuProvider provider, @NotNull LifecycleOwner owner) {
        Intrinsics.checkNotNullParameter(provider, "provider");
        Intrinsics.checkNotNullParameter(owner, "owner");
        this.menuHostHelper.d(provider, owner);
    }

    @Override // android.app.Activity
    @qr.c
    public void startActivityForResult(@NotNull Intent intent, int i10, Bundle bundle) {
        Intrinsics.checkNotNullParameter(intent, "intent");
        super.startActivityForResult(intent, i10, bundle);
    }

    @Override // android.app.Activity
    @qr.c
    public void startIntentSenderForResult(@NotNull IntentSender intent, int i10, Intent intent2, int i11, int i12, int i13, Bundle bundle) {
        Intrinsics.checkNotNullParameter(intent, "intent");
        super.startIntentSenderForResult(intent, i10, intent2, i11, i12, i13, bundle);
    }

    @SuppressLint({"LambdaLast"})
    public void addMenuProvider(@NotNull MenuProvider provider, @NotNull LifecycleOwner owner, @NotNull Lifecycle.State state) {
        Intrinsics.checkNotNullParameter(provider, "provider");
        Intrinsics.checkNotNullParameter(owner, "owner");
        Intrinsics.checkNotNullParameter(state, "state");
        this.menuHostHelper.e(provider, owner, state);
    }

    @Override // d.b
    @NotNull
    public final <I, O> ActivityResultLauncher registerForActivityResult(@NotNull ActivityResultContract contract, @NotNull ActivityResultCallback callback) {
        Intrinsics.checkNotNullParameter(contract, "contract");
        Intrinsics.checkNotNullParameter(callback, "callback");
        return registerForActivityResult(contract, this.activityResultRegistry, callback);
    }

    @Override // android.app.Activity
    public void onMultiWindowModeChanged(boolean z10, @NotNull Configuration newConfig) {
        Intrinsics.checkNotNullParameter(newConfig, "newConfig");
        this.dispatchingOnMultiWindowModeChanged = true;
        try {
            super.onMultiWindowModeChanged(z10, newConfig);
            this.dispatchingOnMultiWindowModeChanged = false;
            Iterator<Consumer> it = this.onMultiWindowModeChangedListeners.iterator();
            while (it.hasNext()) {
                it.next().accept(new androidx.core.app.h(z10, newConfig));
            }
        } catch (Throwable th2) {
            this.dispatchingOnMultiWindowModeChanged = false;
            throw th2;
        }
    }

    @Override // android.app.Activity
    public void onPictureInPictureModeChanged(boolean z10, @NotNull Configuration newConfig) {
        Intrinsics.checkNotNullParameter(newConfig, "newConfig");
        this.dispatchingOnPictureInPictureModeChanged = true;
        try {
            super.onPictureInPictureModeChanged(z10, newConfig);
            this.dispatchingOnPictureInPictureModeChanged = false;
            Iterator<Consumer> it = this.onPictureInPictureModeChangedListeners.iterator();
            while (it.hasNext()) {
                it.next().accept(new androidx.core.app.v(z10, newConfig));
            }
        } catch (Throwable th2) {
            this.dispatchingOnPictureInPictureModeChanged = false;
            throw th2;
        }
    }

    @Override // android.app.Activity
    public void setContentView(View view) {
        initializeViewTreeOwners();
        ReportFullyDrawnExecutor reportFullyDrawnExecutor = this.reportFullyDrawnExecutor;
        View decorView = getWindow().getDecorView();
        Intrinsics.checkNotNullExpressionValue(decorView, "window.decorView");
        reportFullyDrawnExecutor.F0(decorView);
        super.setContentView(view);
    }

    @Override // android.app.Activity
    public void setContentView(View view, ViewGroup.LayoutParams layoutParams) {
        initializeViewTreeOwners();
        ReportFullyDrawnExecutor reportFullyDrawnExecutor = this.reportFullyDrawnExecutor;
        View decorView = getWindow().getDecorView();
        Intrinsics.checkNotNullExpressionValue(decorView, "window.decorView");
        reportFullyDrawnExecutor.F0(decorView);
        super.setContentView(view, layoutParams);
    }
}
