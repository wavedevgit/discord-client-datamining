package androidx.activity;

import android.os.Build;
import android.window.BackEvent;
import android.window.OnBackAnimationCallback;
import android.window.OnBackInvokedCallback;
import android.window.OnBackInvokedDispatcher;
import androidx.activity.OnBackPressedDispatcher;
import androidx.core.util.Consumer;
import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import java.util.Iterator;
import java.util.ListIterator;
import kotlin.Unit;
import kotlin.collections.ArrayDeque;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class OnBackPressedDispatcher {

    /* renamed from: a  reason: collision with root package name */
    private final Runnable f953a;

    /* renamed from: b  reason: collision with root package name */
    private final Consumer f954b;

    /* renamed from: c  reason: collision with root package name */
    private final ArrayDeque f955c;

    /* renamed from: d  reason: collision with root package name */
    private OnBackPressedCallback f956d;

    /* renamed from: e  reason: collision with root package name */
    private OnBackInvokedCallback f957e;

    /* renamed from: f  reason: collision with root package name */
    private OnBackInvokedDispatcher f958f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f959g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f960h;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class a extends Lambda implements Function1 {
        a() {
            super(1);
        }

        public final void a(BackEventCompat backEvent) {
            Intrinsics.checkNotNullParameter(backEvent, "backEvent");
            OnBackPressedDispatcher.this.n(backEvent);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((BackEventCompat) obj);
            return Unit.f31765a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class b extends Lambda implements Function1 {
        b() {
            super(1);
        }

        public final void a(BackEventCompat backEvent) {
            Intrinsics.checkNotNullParameter(backEvent, "backEvent");
            OnBackPressedDispatcher.this.m(backEvent);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((BackEventCompat) obj);
            return Unit.f31765a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class c extends Lambda implements Function0 {
        c() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m1invoke();
            return Unit.f31765a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m1invoke() {
            OnBackPressedDispatcher.this.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class d extends Lambda implements Function0 {
        d() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m2invoke();
            return Unit.f31765a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m2invoke() {
            OnBackPressedDispatcher.this.k();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class e extends Lambda implements Function0 {
        e() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m3invoke();
            return Unit.f31765a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m3invoke() {
            OnBackPressedDispatcher.this.l();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class f {

        /* renamed from: a  reason: collision with root package name */
        public static final f f966a = new f();

        private f() {
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final void c(Function0 function0) {
            function0.invoke();
        }

        public final OnBackInvokedCallback b(final Function0 onBackInvoked) {
            Intrinsics.checkNotNullParameter(onBackInvoked, "onBackInvoked");
            return new OnBackInvokedCallback() { // from class: androidx.activity.y
                public final void onBackInvoked() {
                    OnBackPressedDispatcher.f.c(Function0.this);
                }
            };
        }

        public final void d(Object dispatcher, int i10, Object callback) {
            Intrinsics.checkNotNullParameter(dispatcher, "dispatcher");
            Intrinsics.checkNotNullParameter(callback, "callback");
            ((OnBackInvokedDispatcher) dispatcher).registerOnBackInvokedCallback(i10, (OnBackInvokedCallback) callback);
        }

        public final void e(Object dispatcher, Object callback) {
            Intrinsics.checkNotNullParameter(dispatcher, "dispatcher");
            Intrinsics.checkNotNullParameter(callback, "callback");
            ((OnBackInvokedDispatcher) dispatcher).unregisterOnBackInvokedCallback((OnBackInvokedCallback) callback);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class g {

        /* renamed from: a  reason: collision with root package name */
        public static final g f967a = new g();

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class a implements OnBackAnimationCallback {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ Function1 f968a;

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ Function1 f969b;

            /* renamed from: c  reason: collision with root package name */
            final /* synthetic */ Function0 f970c;

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function0 f971d;

            a(Function1 function1, Function1 function12, Function0 function0, Function0 function02) {
                this.f968a = function1;
                this.f969b = function12;
                this.f970c = function0;
                this.f971d = function02;
            }

            public void onBackCancelled() {
                this.f971d.invoke();
            }

            public void onBackInvoked() {
                this.f970c.invoke();
            }

            public void onBackProgressed(BackEvent backEvent) {
                Intrinsics.checkNotNullParameter(backEvent, "backEvent");
                this.f969b.invoke(new BackEventCompat(backEvent));
            }

            public void onBackStarted(BackEvent backEvent) {
                Intrinsics.checkNotNullParameter(backEvent, "backEvent");
                this.f968a.invoke(new BackEventCompat(backEvent));
            }
        }

        private g() {
        }

        public final OnBackInvokedCallback a(Function1 onBackStarted, Function1 onBackProgressed, Function0 onBackInvoked, Function0 onBackCancelled) {
            Intrinsics.checkNotNullParameter(onBackStarted, "onBackStarted");
            Intrinsics.checkNotNullParameter(onBackProgressed, "onBackProgressed");
            Intrinsics.checkNotNullParameter(onBackInvoked, "onBackInvoked");
            Intrinsics.checkNotNullParameter(onBackCancelled, "onBackCancelled");
            return new a(onBackStarted, onBackProgressed, onBackInvoked, onBackCancelled);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class h implements androidx.lifecycle.m, Cancellable {

        /* renamed from: d  reason: collision with root package name */
        private final Lifecycle f972d;

        /* renamed from: e  reason: collision with root package name */
        private final OnBackPressedCallback f973e;

        /* renamed from: i  reason: collision with root package name */
        private Cancellable f974i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ OnBackPressedDispatcher f975o;

        public h(OnBackPressedDispatcher onBackPressedDispatcher, Lifecycle lifecycle, OnBackPressedCallback onBackPressedCallback) {
            Intrinsics.checkNotNullParameter(lifecycle, "lifecycle");
            Intrinsics.checkNotNullParameter(onBackPressedCallback, "onBackPressedCallback");
            this.f975o = onBackPressedDispatcher;
            this.f972d = lifecycle;
            this.f973e = onBackPressedCallback;
            lifecycle.a(this);
        }

        @Override // androidx.activity.Cancellable
        public void cancel() {
            this.f972d.d(this);
            this.f973e.removeCancellable(this);
            Cancellable cancellable = this.f974i;
            if (cancellable != null) {
                cancellable.cancel();
            }
            this.f974i = null;
        }

        @Override // androidx.lifecycle.m
        public void k(LifecycleOwner source, Lifecycle.a event) {
            Intrinsics.checkNotNullParameter(source, "source");
            Intrinsics.checkNotNullParameter(event, "event");
            if (event == Lifecycle.a.ON_START) {
                this.f974i = this.f975o.i(this.f973e);
            } else if (event == Lifecycle.a.ON_STOP) {
                Cancellable cancellable = this.f974i;
                if (cancellable != null) {
                    cancellable.cancel();
                }
            } else if (event == Lifecycle.a.ON_DESTROY) {
                cancel();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class i implements Cancellable {

        /* renamed from: d  reason: collision with root package name */
        private final OnBackPressedCallback f976d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ OnBackPressedDispatcher f977e;

        public i(OnBackPressedDispatcher onBackPressedDispatcher, OnBackPressedCallback onBackPressedCallback) {
            Intrinsics.checkNotNullParameter(onBackPressedCallback, "onBackPressedCallback");
            this.f977e = onBackPressedDispatcher;
            this.f976d = onBackPressedCallback;
        }

        @Override // androidx.activity.Cancellable
        public void cancel() {
            this.f977e.f955c.remove(this.f976d);
            if (Intrinsics.areEqual(this.f977e.f956d, this.f976d)) {
                this.f976d.handleOnBackCancelled();
                this.f977e.f956d = null;
            }
            this.f976d.removeCancellable(this);
            Function0<Unit> enabledChangedCallback$activity_release = this.f976d.getEnabledChangedCallback$activity_release();
            if (enabledChangedCallback$activity_release != null) {
                enabledChangedCallback$activity_release.invoke();
            }
            this.f976d.setEnabledChangedCallback$activity_release(null);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public /* synthetic */ class j extends FunctionReferenceImpl implements Function0 {
        j(Object obj) {
            super(0, obj, OnBackPressedDispatcher.class, "updateEnabledCallbacks", "updateEnabledCallbacks()V", 0);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m4invoke();
            return Unit.f31765a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m4invoke() {
            ((OnBackPressedDispatcher) this.receiver).q();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public /* synthetic */ class k extends FunctionReferenceImpl implements Function0 {
        k(Object obj) {
            super(0, obj, OnBackPressedDispatcher.class, "updateEnabledCallbacks", "updateEnabledCallbacks()V", 0);
        }

        @Override // kotlin.jvm.functions.Function0
        public /* bridge */ /* synthetic */ Object invoke() {
            m5invoke();
            return Unit.f31765a;
        }

        /* renamed from: invoke  reason: collision with other method in class */
        public final void m5invoke() {
            ((OnBackPressedDispatcher) this.receiver).q();
        }
    }

    public OnBackPressedDispatcher(Runnable runnable, Consumer consumer) {
        OnBackInvokedCallback b10;
        this.f953a = runnable;
        this.f954b = consumer;
        this.f955c = new ArrayDeque();
        int i10 = Build.VERSION.SDK_INT;
        if (i10 >= 33) {
            if (i10 >= 34) {
                b10 = g.f967a.a(new a(), new b(), new c(), new d());
            } else {
                b10 = f.f966a.b(new e());
            }
            this.f957e = b10;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r2v2 */
    /* JADX WARN: Type inference failed for: r2v3 */
    /* JADX WARN: Type inference failed for: r2v4, types: [java.lang.Object] */
    public final void k() {
        ?? r22;
        OnBackPressedCallback onBackPressedCallback = this.f956d;
        if (onBackPressedCallback == null) {
            ArrayDeque arrayDeque = this.f955c;
            ListIterator listIterator = arrayDeque.listIterator(arrayDeque.size());
            while (true) {
                if (listIterator.hasPrevious()) {
                    r22 = listIterator.previous();
                    if (((OnBackPressedCallback) r22).isEnabled()) {
                        break;
                    }
                } else {
                    r22 = 0;
                    break;
                }
            }
            onBackPressedCallback = r22;
        }
        this.f956d = null;
        if (onBackPressedCallback != null) {
            onBackPressedCallback.handleOnBackCancelled();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r1v2 */
    /* JADX WARN: Type inference failed for: r1v3 */
    /* JADX WARN: Type inference failed for: r1v4, types: [java.lang.Object] */
    public final void m(BackEventCompat backEventCompat) {
        ?? r12;
        OnBackPressedCallback onBackPressedCallback = this.f956d;
        if (onBackPressedCallback == null) {
            ArrayDeque arrayDeque = this.f955c;
            ListIterator listIterator = arrayDeque.listIterator(arrayDeque.size());
            while (true) {
                if (listIterator.hasPrevious()) {
                    r12 = listIterator.previous();
                    if (((OnBackPressedCallback) r12).isEnabled()) {
                        break;
                    }
                } else {
                    r12 = 0;
                    break;
                }
            }
            onBackPressedCallback = r12;
        }
        if (onBackPressedCallback != null) {
            onBackPressedCallback.handleOnBackProgressed(backEventCompat);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void n(BackEventCompat backEventCompat) {
        Object obj;
        ArrayDeque arrayDeque = this.f955c;
        ListIterator<E> listIterator = arrayDeque.listIterator(arrayDeque.size());
        while (true) {
            if (listIterator.hasPrevious()) {
                obj = listIterator.previous();
                if (((OnBackPressedCallback) obj).isEnabled()) {
                    break;
                }
            } else {
                obj = null;
                break;
            }
        }
        OnBackPressedCallback onBackPressedCallback = (OnBackPressedCallback) obj;
        if (this.f956d != null) {
            k();
        }
        this.f956d = onBackPressedCallback;
        if (onBackPressedCallback != null) {
            onBackPressedCallback.handleOnBackStarted(backEventCompat);
        }
    }

    private final void p(boolean z10) {
        OnBackInvokedDispatcher onBackInvokedDispatcher = this.f958f;
        OnBackInvokedCallback onBackInvokedCallback = this.f957e;
        if (onBackInvokedDispatcher != null && onBackInvokedCallback != null) {
            if (z10 && !this.f959g) {
                f.f966a.d(onBackInvokedDispatcher, 0, onBackInvokedCallback);
                this.f959g = true;
            } else if (!z10 && this.f959g) {
                f.f966a.e(onBackInvokedDispatcher, onBackInvokedCallback);
                this.f959g = false;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void q() {
        boolean z10 = this.f960h;
        ArrayDeque arrayDeque = this.f955c;
        boolean z11 = false;
        if (arrayDeque == null || !arrayDeque.isEmpty()) {
            Iterator<E> it = arrayDeque.iterator();
            while (true) {
                if (!it.hasNext()) {
                    break;
                } else if (((OnBackPressedCallback) it.next()).isEnabled()) {
                    z11 = true;
                    break;
                }
            }
        }
        this.f960h = z11;
        if (z11 != z10) {
            Consumer consumer = this.f954b;
            if (consumer != null) {
                consumer.accept(Boolean.valueOf(z11));
            }
            if (Build.VERSION.SDK_INT >= 33) {
                p(z11);
            }
        }
    }

    public final void h(LifecycleOwner owner, OnBackPressedCallback onBackPressedCallback) {
        Intrinsics.checkNotNullParameter(owner, "owner");
        Intrinsics.checkNotNullParameter(onBackPressedCallback, "onBackPressedCallback");
        Lifecycle lifecycle = owner.getLifecycle();
        if (lifecycle.b() == Lifecycle.State.f4543d) {
            return;
        }
        onBackPressedCallback.addCancellable(new h(this, lifecycle, onBackPressedCallback));
        q();
        onBackPressedCallback.setEnabledChangedCallback$activity_release(new j(this));
    }

    public final Cancellable i(OnBackPressedCallback onBackPressedCallback) {
        Intrinsics.checkNotNullParameter(onBackPressedCallback, "onBackPressedCallback");
        this.f955c.add(onBackPressedCallback);
        i iVar = new i(this, onBackPressedCallback);
        onBackPressedCallback.addCancellable(iVar);
        q();
        onBackPressedCallback.setEnabledChangedCallback$activity_release(new k(this));
        return iVar;
    }

    public final boolean j() {
        return this.f960h;
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r2v2 */
    /* JADX WARN: Type inference failed for: r2v3 */
    /* JADX WARN: Type inference failed for: r2v4, types: [java.lang.Object] */
    public final void l() {
        ?? r22;
        OnBackPressedCallback onBackPressedCallback = this.f956d;
        if (onBackPressedCallback == null) {
            ArrayDeque arrayDeque = this.f955c;
            ListIterator listIterator = arrayDeque.listIterator(arrayDeque.size());
            while (true) {
                if (listIterator.hasPrevious()) {
                    r22 = listIterator.previous();
                    if (((OnBackPressedCallback) r22).isEnabled()) {
                        break;
                    }
                } else {
                    r22 = 0;
                    break;
                }
            }
            onBackPressedCallback = r22;
        }
        this.f956d = null;
        if (onBackPressedCallback != null) {
            onBackPressedCallback.handleOnBackPressed();
            return;
        }
        Runnable runnable = this.f953a;
        if (runnable != null) {
            runnable.run();
        }
    }

    public final void o(OnBackInvokedDispatcher invoker) {
        Intrinsics.checkNotNullParameter(invoker, "invoker");
        this.f958f = invoker;
        p(this.f960h);
    }

    public OnBackPressedDispatcher(Runnable runnable) {
        this(runnable, null);
    }
}
