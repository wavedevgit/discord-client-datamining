package com.squareup.workflow1.ui.backstack;

import android.content.Context;
import android.os.Parcel;
import android.os.Parcelable;
import android.util.AttributeSet;
import android.view.View;
import android.view.ViewGroup;
import android.view.animation.AccelerateDecelerateInterpolator;
import android.widget.FrameLayout;
import androidx.transition.x;
import com.squareup.workflow1.ui.backstack.BackStackContainer;
import dn.a0;
import dn.c0;
import dn.e0;
import dn.f;
import dn.f0;
import dn.g;
import dn.g0;
import dn.h;
import dn.h0;
import dn.j0;
import dn.k0;
import dn.n;
import en.d;
import fn.e;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import org.jetbrains.annotations.NotNull;
import qr.p;
import qr.v;
@Metadata(d1 = {"\u0000X\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\t\b\u0017\u0018\u0000 -2\u00020\u0001:\u0002.\u0017B1\b\u0007\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0004\u0012\b\b\u0002\u0010\u0007\u001a\u00020\u0006\u0012\b\b\u0002\u0010\b\u001a\u00020\u0006¢\u0006\u0004\b\t\u0010\nJ#\u0010\u0010\u001a\u00020\u000f2\n\u0010\f\u001a\u0006\u0012\u0002\b\u00030\u000b2\u0006\u0010\u000e\u001a\u00020\rH\u0004¢\u0006\u0004\b\u0010\u0010\u0011J)\u0010\u0017\u001a\u00020\u000f2\b\u0010\u0013\u001a\u0004\u0018\u00010\u00122\u0006\u0010\u0014\u001a\u00020\u00122\u0006\u0010\u0016\u001a\u00020\u0015H\u0014¢\u0006\u0004\b\u0017\u0010\u0018J\u0011\u0010\u001a\u001a\u0004\u0018\u00010\u0019H\u0014¢\u0006\u0004\b\u001a\u0010\u001bJ\u0017\u0010\u001d\u001a\u00020\u000f2\u0006\u0010\u001c\u001a\u00020\u0019H\u0014¢\u0006\u0004\b\u001d\u0010\u001eJ\u000f\u0010\u001f\u001a\u00020\u000fH\u0014¢\u0006\u0004\b\u001f\u0010 J\u000f\u0010!\u001a\u00020\u000fH\u0014¢\u0006\u0004\b!\u0010 R\u0014\u0010%\u001a\u00020\"8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b#\u0010$R\"\u0010)\u001a\u000e\u0012\b\u0012\u0006\u0012\u0002\b\u00030&\u0018\u00010\u000b8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b'\u0010(R\u0016\u0010,\u001a\u0004\u0018\u00010\u00128BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b*\u0010+¨\u0006/"}, d2 = {"Lcom/squareup/workflow1/ui/backstack/BackStackContainer;", "Landroid/widget/FrameLayout;", "Landroid/content/Context;", "context", "Landroid/util/AttributeSet;", "attributeSet", "", "defStyle", "defStyleRes", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;II)V", "Lfn/c;", "newRendering", "Ldn/a0;", "newViewEnvironment", "", "c", "(Lfn/c;Ldn/a0;)V", "Landroid/view/View;", "oldViewMaybe", "newView", "", "popped", "b", "(Landroid/view/View;Landroid/view/View;Z)V", "Landroid/os/Parcelable;", "onSaveInstanceState", "()Landroid/os/Parcelable;", "state", "onRestoreInstanceState", "(Landroid/os/Parcelable;)V", "onAttachedToWindow", "()V", "onDetachedFromWindow", "Lfn/e;", "d", "Lfn/e;", "viewStateCache", "Ldn/n;", "e", "Lfn/c;", "currentRendering", "getCurrentView", "()Landroid/view/View;", "currentView", "i", "a", "wf1-container-android"}, k = 1, mv = {1, 6, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class BackStackContainer extends FrameLayout {

    /* renamed from: i  reason: collision with root package name */
    public static final a f18050i = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final e f18051d;

    /* renamed from: e  reason: collision with root package name */
    private fn.c f18052e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ f f18053a;

        /* renamed from: com.squareup.workflow1.ui.backstack.BackStackContainer$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class C0217a extends Lambda implements Function4 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0217a f18054d = new C0217a();

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: com.squareup.workflow1.ui.backstack.BackStackContainer$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
            public /* synthetic */ class C0218a extends FunctionReferenceImpl implements Function2 {
                C0218a(Object obj) {
                    super(2, obj, BackStackContainer.class, "update", "update(Lcom/squareup/workflow1/ui/backstack/BackStackScreen;Lcom/squareup/workflow1/ui/ViewEnvironment;)V", 0);
                }

                public final void a(fn.c p02, a0 p12) {
                    Intrinsics.checkNotNullParameter(p02, "p0");
                    Intrinsics.checkNotNullParameter(p12, "p1");
                    ((BackStackContainer) this.receiver).c(p02, p12);
                }

                @Override // kotlin.jvm.functions.Function2
                public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
                    a((fn.c) obj, (a0) obj2);
                    return Unit.f32056a;
                }
            }

            C0217a() {
                super(4);
            }

            @Override // kotlin.jvm.functions.Function4
            /* renamed from: a */
            public final View invoke(fn.c initialRendering, a0 initialEnv, Context context, ViewGroup viewGroup) {
                Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
                Intrinsics.checkNotNullParameter(initialEnv, "initialEnv");
                Intrinsics.checkNotNullParameter(context, "context");
                BackStackContainer backStackContainer = new BackStackContainer(context, null, 0, 0, 14, null);
                backStackContainer.setId(gn.a.f25456c);
                backStackContainer.setLayoutParams(new ViewGroup.LayoutParams(-1, -1));
                g0.a(backStackContainer, initialRendering, initialEnv, new C0218a(backStackContainer));
                return backStackContainer;
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // dn.c0
        /* renamed from: b */
        public View a(fn.c initialRendering, a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f18053a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // dn.c0
        public KClass getType() {
            return this.f18053a.getType();
        }

        private a() {
            this.f18053a = new f(Reflection.getOrCreateKotlinClass(fn.c.class), C0217a.f18054d);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final c f18056d = new c();

        c() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final n invoke(Object it) {
            Intrinsics.checkNotNullParameter(it, "it");
            return new n(it, "backstack");
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public BackStackContainer(@NotNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0, 0, 12, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void d(View view, Function0 doStart) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(doStart, "doStart");
        d.a.e(d.f21675f, view, null, 2, null);
        doStart.invoke();
    }

    private final View getCurrentView() {
        if (getChildCount() > 0) {
            return getChildAt(0);
        }
        return null;
    }

    protected void b(View view, View newView, boolean z10) {
        Pair a10;
        Intrinsics.checkNotNullParameter(newView, "newView");
        if (view == null) {
            addView(newView);
            return;
        }
        View findViewById = view.findViewById(gn.a.f25454a);
        View findViewById2 = newView.findViewById(gn.a.f25454a);
        if (findViewById != null && findViewById2 != null) {
            view = findViewById;
        } else {
            findViewById2 = newView;
        }
        if (!z10) {
            a10 = v.a(8388611, 8388613);
        } else if (z10) {
            a10 = v.a(8388613, 8388611);
        } else {
            throw new p();
        }
        androidx.transition.a0 o02 = new androidx.transition.a0().w0(new androidx.transition.p(((Number) a10.a()).intValue()).d(view)).w0(new androidx.transition.p(((Number) a10.b()).intValue()).d(findViewById2)).o0(new AccelerateDecelerateInterpolator());
        Intrinsics.checkNotNullExpressionValue(o02, "TransitionSet()\n        …DecelerateInterpolator())");
        x.d(this);
        x.f(new androidx.transition.n(this, newView), o02);
    }

    protected final void c(fn.c newRendering, a0 newViewEnvironment) {
        fn.a aVar;
        d c10;
        List a10;
        View view;
        Intrinsics.checkNotNullParameter(newRendering, "newRendering");
        Intrinsics.checkNotNullParameter(newViewEnvironment, "newViewEnvironment");
        if (newRendering.a().isEmpty()) {
            aVar = fn.a.First;
        } else {
            aVar = fn.a.Other;
        }
        a0 c11 = newViewEnvironment.c(v.a(fn.a.f23353d, aVar));
        fn.c d10 = newRendering.d(c.f18056d);
        View currentView = getCurrentView();
        if (currentView != null) {
            if (g0.b(currentView, d10.c())) {
                view = currentView;
            } else {
                view = null;
            }
            if (view != null) {
                this.f18051d.d(d10.b());
                g0.g(view, d10.c(), c11);
                return;
            }
        }
        Object c12 = d10.c();
        Context context = getContext();
        Intrinsics.checkNotNullExpressionValue(context, "this.context");
        View c13 = f0.c((e0) c11.a(e0.f20867a), c12, c11, context, this, new h0() { // from class: fn.b
            @Override // dn.h0
            public final void a(View view2, Function0 function0) {
                BackStackContainer.d(view2, function0);
            }
        });
        g0.h(c13);
        this.f18051d.h(d10.a(), currentView, c13);
        fn.c cVar = this.f18052e;
        boolean z10 = false;
        if (cVar != null && (a10 = cVar.a()) != null) {
            List list = a10;
            if (!(list instanceof Collection) || !list.isEmpty()) {
                Iterator it = list.iterator();
                while (true) {
                    if (!it.hasNext()) {
                        break;
                    } else if (h.a((n) it.next(), d10.c())) {
                        z10 = true;
                        break;
                    }
                }
            }
        }
        b(currentView, c13, z10);
        if (currentView != null && (c10 = d.f21675f.c(currentView)) != null) {
            c10.d();
        }
        this.f18052e = d10;
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onAttachedToWindow() {
        Object c10;
        super.onAttachedToWindow();
        u3.f c11 = en.c.f21674a.c(this);
        g.a aVar = g.f20875a;
        j0 d10 = k0.d(this);
        if (d10 == null) {
            c10 = null;
        } else {
            c10 = d10.c();
        }
        if (c10 == null) {
            c10 = null;
        }
        Intrinsics.checkNotNull(c10);
        this.f18051d.a(g.a.b(aVar, c10, null, 2, null), c11);
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        this.f18051d.b();
        super.onDetachedFromWindow();
    }

    @Override // android.view.View
    protected void onRestoreInstanceState(Parcelable state) {
        b bVar;
        Intrinsics.checkNotNullParameter(state, "state");
        Unit unit = null;
        if (state instanceof b) {
            bVar = (b) state;
        } else {
            bVar = null;
        }
        if (bVar != null) {
            this.f18051d.f(bVar.a());
            super.onRestoreInstanceState(((b) state).getSuperState());
            unit = Unit.f32056a;
        }
        if (unit == null) {
            super.onRestoreInstanceState(super.onSaveInstanceState());
        }
    }

    @Override // android.view.View
    protected Parcelable onSaveInstanceState() {
        Parcelable onSaveInstanceState = super.onSaveInstanceState();
        if (onSaveInstanceState == null) {
            return null;
        }
        return new b(onSaveInstanceState, this.f18051d.g());
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends View.BaseSavedState {
        @NotNull
        public static final a CREATOR = new a(null);

        /* renamed from: d  reason: collision with root package name */
        private final e.a f18055d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements Parcelable.Creator {
            public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public b createFromParcel(Parcel source) {
                Intrinsics.checkNotNullParameter(source, "source");
                return new b(source);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: b */
            public b[] newArray(int i10) {
                return new b[i10];
            }

            private a() {
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(Parcelable superState, e.a savedViewState) {
            super(superState);
            Intrinsics.checkNotNullParameter(superState, "superState");
            Intrinsics.checkNotNullParameter(savedViewState, "savedViewState");
            this.f18055d = savedViewState;
        }

        public final e.a a() {
            return this.f18055d;
        }

        @Override // android.view.View.BaseSavedState, android.view.AbsSavedState, android.os.Parcelable
        public void writeToParcel(Parcel out, int i10) {
            Intrinsics.checkNotNullParameter(out, "out");
            super.writeToParcel(out, i10);
            out.writeParcelable(this.f18055d, i10);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(Parcel source) {
            super(source);
            Intrinsics.checkNotNullParameter(source, "source");
            Parcelable readParcelable = source.readParcelable(e.a.class.getClassLoader());
            Intrinsics.checkNotNull(readParcelable);
            Intrinsics.checkNotNullExpressionValue(readParcelable, "source.readParcelable(Vi…class.java.classLoader)!!");
            this.f18055d = (e.a) readParcelable;
        }
    }

    public /* synthetic */ BackStackContainer(Context context, AttributeSet attributeSet, int i10, int i11, int i12, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i12 & 2) != 0 ? null : attributeSet, (i12 & 4) != 0 ? 0 : i10, (i12 & 8) != 0 ? 0 : i11);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public BackStackContainer(Context context, AttributeSet attributeSet, int i10, int i11) {
        super(context, attributeSet, i10, i11);
        Intrinsics.checkNotNullParameter(context, "context");
        this.f18051d = new e();
    }
}
