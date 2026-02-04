package wp;

import an.e;
import android.content.Context;
import android.os.Parcel;
import android.os.Parcelable;
import android.util.AttributeSet;
import android.view.View;
import android.view.ViewGroup;
import android.view.animation.AccelerateDecelerateInterpolator;
import android.widget.FrameLayout;
import androidx.transition.x;
import kotlin.Pair;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import lr.v;
import org.jetbrains.annotations.NotNull;
import wp.n;
import ym.a0;
import ym.c0;
import ym.e0;
import ym.f0;
import ym.g;
import ym.g0;
import ym.h0;
import ym.j0;
import ym.k0;
import zm.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class n extends FrameLayout {

    /* renamed from: i  reason: collision with root package name */
    public static final a f52636i = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final an.e f52637d;

    /* renamed from: e  reason: collision with root package name */
    private ym.n f52638e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ ym.f f52639a;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: wp.n$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class C0708a extends FunctionReferenceImpl implements Function2 {
            C0708a(Object obj) {
                super(2, obj, n.class, "update", "update(Lcom/withpersona/sdk2/inquiry/shared/ui/ScreenWithTransition;Lcom/squareup/workflow1/ui/ViewEnvironment;)V", 0);
            }

            public final void a(k p02, a0 p12) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                Intrinsics.checkNotNullParameter(p12, "p1");
                ((n) this.receiver).c(p02, p12);
            }

            @Override // kotlin.jvm.functions.Function2
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
                a((k) obj, (a0) obj2);
                return Unit.f32464a;
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final View c(k initialRendering, a0 initialEnv, Context context, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialEnv, "initialEnv");
            Intrinsics.checkNotNullParameter(context, "context");
            n nVar = new n(context, null, 0, 0, 14, null);
            nVar.setId(mp.m.f38997i);
            nVar.setLayoutParams(new ViewGroup.LayoutParams(-1, -1));
            g0.a(nVar, initialRendering, initialEnv, new C0708a(nVar));
            return nVar;
        }

        @Override // ym.c0
        /* renamed from: d */
        public View a(k initialRendering, a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f52639a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // ym.c0
        public KClass getType() {
            return this.f52639a.getType();
        }

        private a() {
            this.f52639a = new ym.f(Reflection.getOrCreateKotlinClass(k.class), new Function4() { // from class: wp.m
                @Override // kotlin.jvm.functions.Function4
                public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
                    View c10;
                    c10 = n.a.c((k) obj, (a0) obj2, (Context) obj3, (ViewGroup) obj4);
                    return c10;
                }
            });
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class c {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f52641a;

        static {
            int[] iArr = new int[j.values().length];
            try {
                iArr[j.f52629d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[j.f52630e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[j.f52631i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f52641a = iArr;
        }
    }

    public /* synthetic */ n(Context context, AttributeSet attributeSet, int i10, int i11, int i12, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i12 & 2) != 0 ? null : attributeSet, (i12 & 4) != 0 ? 0 : i10, (i12 & 8) != 0 ? 0 : i11);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void d(View view, Function0 doStart) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(doStart, "doStart");
        d.a.e(zm.d.f56072n, view, null, 2, null);
        doStart.invoke();
    }

    private final View getCurrentView() {
        if (getChildCount() > 0) {
            return getChildAt(0);
        }
        return null;
    }

    protected void b(View view, View newView, j transition) {
        Pair a10;
        Intrinsics.checkNotNullParameter(newView, "newView");
        Intrinsics.checkNotNullParameter(transition, "transition");
        if (view != null) {
            View findViewById = view.findViewById(bn.a.f6641a);
            View findViewById2 = newView.findViewById(bn.a.f6641a);
            if (findViewById != null && findViewById2 != null) {
                view = findViewById;
            } else {
                findViewById2 = newView;
            }
            int i10 = c.f52641a[transition.ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        x.f(new androidx.transition.n(this, newView), null);
                        return;
                    }
                    throw new lr.p();
                }
                a10 = v.a(8388613, 8388611);
            } else {
                a10 = v.a(8388611, 8388613);
            }
            androidx.transition.a0 n02 = new androidx.transition.a0().v0(new androidx.transition.p(((Number) a10.a()).intValue()).d(view)).v0(new androidx.transition.p(((Number) a10.b()).intValue()).d(findViewById2)).n0(new AccelerateDecelerateInterpolator());
            Intrinsics.checkNotNullExpressionValue(n02, "setInterpolator(...)");
            x.d(this);
            x.f(new androidx.transition.n(this, newView), n02);
            return;
        }
        addView(newView);
    }

    protected final void c(k newRendering, a0 newViewEnvironment) {
        zm.d c10;
        View view;
        Intrinsics.checkNotNullParameter(newRendering, "newRendering");
        Intrinsics.checkNotNullParameter(newViewEnvironment, "newViewEnvironment");
        a0 c11 = newViewEnvironment.c(v.a(an.a.f717d, an.a.First));
        ym.n nVar = new ym.n(newRendering.a(), "screen_with_transition");
        View currentView = getCurrentView();
        if (currentView != null) {
            if (g0.b(currentView, nVar)) {
                view = currentView;
            } else {
                view = null;
            }
            if (view != null) {
                this.f52637d.d(CollectionsKt.e(nVar));
                g0.g(view, nVar, c11);
                return;
            }
        }
        Context context = getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        View c12 = f0.c((e0) c11.a(e0.f54599a), nVar, c11, context, this, new h0() { // from class: wp.l
            @Override // ym.h0
            public final void a(View view2, Function0 function0) {
                n.d(view2, function0);
            }
        });
        g0.h(c12);
        b(currentView, c12, newRendering.b());
        if (currentView != null && (c10 = zm.d.f56072n.c(currentView)) != null) {
            c10.j();
        }
        this.f52638e = nVar;
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onAttachedToWindow() {
        Object c10;
        super.onAttachedToWindow();
        u3.f c11 = zm.c.f56071a.c(this);
        g.a aVar = ym.g.f54607a;
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
        this.f52637d.a(g.a.b(aVar, c10, null, 2, null), c11);
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        this.f52637d.b();
        super.onDetachedFromWindow();
    }

    @Override // android.view.View
    protected void onRestoreInstanceState(Parcelable state) {
        b bVar;
        Intrinsics.checkNotNullParameter(state, "state");
        if (state instanceof b) {
            bVar = (b) state;
        } else {
            bVar = null;
        }
        if (bVar != null) {
            this.f52637d.f(bVar.a());
            super.onRestoreInstanceState(((b) state).getSuperState());
            return;
        }
        super.onRestoreInstanceState(super.onSaveInstanceState());
    }

    @Override // android.view.View
    protected Parcelable onSaveInstanceState() {
        Parcelable onSaveInstanceState = super.onSaveInstanceState();
        if (onSaveInstanceState != null) {
            return new b(onSaveInstanceState, this.f52637d.g());
        }
        return null;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends View.BaseSavedState {
        @NotNull
        public static final a CREATOR = new a(null);

        /* renamed from: d  reason: collision with root package name */
        private final e.a f52640d;

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
            this.f52640d = savedViewState;
        }

        public final e.a a() {
            return this.f52640d;
        }

        @Override // android.view.View.BaseSavedState, android.view.AbsSavedState, android.os.Parcelable
        public void writeToParcel(Parcel out, int i10) {
            Intrinsics.checkNotNullParameter(out, "out");
            super.writeToParcel(out, i10);
            out.writeParcelable(this.f52640d, i10);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(Parcel source) {
            super(source);
            Intrinsics.checkNotNullParameter(source, "source");
            Parcelable readParcelable = source.readParcelable(e.a.class.getClassLoader());
            Intrinsics.checkNotNull(readParcelable);
            this.f52640d = (e.a) readParcelable;
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public n(Context context, AttributeSet attributeSet, int i10, int i11) {
        super(context, attributeSet, i10, i11);
        Intrinsics.checkNotNullParameter(context, "context");
        this.f52637d = new an.e();
    }
}
