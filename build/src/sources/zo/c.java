package zo;

import android.content.Context;
import android.os.Parcel;
import android.os.Parcelable;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import bn.a0;
import bn.c0;
import bn.e0;
import bn.f;
import bn.f0;
import bn.g;
import bn.g0;
import bn.h0;
import bn.j0;
import bn.k0;
import bn.n;
import cn.d;
import dn.e;
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
import org.jetbrains.annotations.NotNull;
import so.f2;
import zo.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends FrameLayout {

    /* renamed from: i  reason: collision with root package name */
    public static final a f56131i = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final uo.b f56132d;

    /* renamed from: e  reason: collision with root package name */
    private final e f56133e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ f f56134a;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: zo.c$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class C0791a extends FunctionReferenceImpl implements Function2 {
            C0791a(Object obj) {
                super(2, obj, c.class, "update", "update(Lcom/withpersona/sdk2/inquiry/internal/ui/DisableableScreen;Lcom/squareup/workflow1/ui/ViewEnvironment;)V", 0);
            }

            public final void a(d p02, a0 p12) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                Intrinsics.checkNotNullParameter(p12, "p1");
                ((c) this.receiver).d(p02, p12);
            }

            @Override // kotlin.jvm.functions.Function2
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
                a((d) obj, (a0) obj2);
                return Unit.f31988a;
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final View c(d initialRendering, a0 initialEnv, Context context, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialEnv, "initialEnv");
            Intrinsics.checkNotNullParameter(context, "context");
            c cVar = new c(context, null, 0, 0, 14, null);
            cVar.setId(f2.f50073h);
            cVar.setLayoutParams(new ViewGroup.LayoutParams(-1, -1));
            g0.a(cVar, initialRendering, initialEnv, new C0791a(cVar));
            return cVar;
        }

        @Override // bn.c0
        /* renamed from: d */
        public View a(d initialRendering, a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f56134a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // bn.c0
        public KClass getType() {
            return this.f56134a.getType();
        }

        private a() {
            this.f56134a = new f(Reflection.getOrCreateKotlinClass(d.class), new Function4() { // from class: zo.b
                @Override // kotlin.jvm.functions.Function4
                public final Object invoke(Object obj, Object obj2, Object obj3, Object obj4) {
                    View c10;
                    c10 = c.a.c((d) obj, (a0) obj2, (Context) obj3, (ViewGroup) obj4);
                    return c10;
                }
            });
        }
    }

    public /* synthetic */ c(Context context, AttributeSet attributeSet, int i10, int i11, int i12, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i12 & 2) != 0 ? null : attributeSet, (i12 & 4) != 0 ? 0 : i10, (i12 & 8) != 0 ? 0 : i11);
    }

    private final View b(d dVar, a0 a0Var) {
        cn.d c10;
        View view;
        n nVar = new n(dVar.a(), "disableable_container");
        View currentView = getCurrentView();
        if (currentView != null) {
            if (g0.b(currentView, nVar)) {
                view = currentView;
            } else {
                view = null;
            }
            if (view != null) {
                this.f56133e.d(CollectionsKt.e(nVar));
                g0.g(view, nVar, a0Var);
                return view;
            }
        }
        Context context = getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        View c11 = f0.c((e0) a0Var.a(e0.f6544a), nVar, a0Var, context, this, new h0() { // from class: zo.a
            @Override // bn.h0
            public final void a(View view2, Function0 function0) {
                c.c(view2, function0);
            }
        });
        g0.h(c11);
        this.f56133e.h(CollectionsKt.l(), currentView, c11);
        this.f56132d.f51646c.removeView(currentView);
        this.f56132d.f51646c.addView(c11);
        if (currentView != null && (c10 = cn.d.f7731a.c(currentView)) != null) {
            c10.d();
        }
        return c11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void c(View view, Function0 doStart) {
        Intrinsics.checkNotNullParameter(view, "view");
        Intrinsics.checkNotNullParameter(doStart, "doStart");
        d.a.e(cn.d.f7731a, view, null, 2, null);
        doStart.invoke();
    }

    private final View getCurrentView() {
        if (this.f56132d.f51646c.getChildCount() > 0) {
            return this.f56132d.f51646c.getChildAt(0);
        }
        return null;
    }

    public final void d(d newRendering, a0 newViewEnvironment) {
        Intrinsics.checkNotNullParameter(newRendering, "newRendering");
        Intrinsics.checkNotNullParameter(newViewEnvironment, "newViewEnvironment");
        View b10 = b(newRendering, newViewEnvironment);
        setEnabled(newRendering.b());
        if (!isEnabled()) {
            b10.setAlpha(0.5f);
            this.f56132d.f51645b.setVisibility(0);
            return;
        }
        b10.setAlpha(1.0f);
        this.f56132d.f51645b.setVisibility(8);
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onAttachedToWindow() {
        Object c10;
        super.onAttachedToWindow();
        u3.f c11 = cn.c.f7730a.c(this);
        g.a aVar = g.f6552a;
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
        this.f56133e.a(g.a.b(aVar, c10, null, 2, null), c11);
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        this.f56133e.b();
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
            this.f56133e.f(bVar.a());
            super.onRestoreInstanceState(((b) state).getSuperState());
            return;
        }
        super.onRestoreInstanceState(super.onSaveInstanceState());
    }

    @Override // android.view.View
    protected Parcelable onSaveInstanceState() {
        Parcelable onSaveInstanceState = super.onSaveInstanceState();
        if (onSaveInstanceState != null) {
            return new b(onSaveInstanceState, this.f56133e.g());
        }
        return null;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends View.BaseSavedState {
        @NotNull
        public static final a CREATOR = new a(null);

        /* renamed from: d  reason: collision with root package name */
        private final e.a f56135d;

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
            this.f56135d = savedViewState;
        }

        public final e.a a() {
            return this.f56135d;
        }

        @Override // android.view.View.BaseSavedState, android.view.AbsSavedState, android.os.Parcelable
        public void writeToParcel(Parcel out, int i10) {
            Intrinsics.checkNotNullParameter(out, "out");
            super.writeToParcel(out, i10);
            out.writeParcelable(this.f56135d, i10);
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(Parcel source) {
            super(source);
            Intrinsics.checkNotNullParameter(source, "source");
            Parcelable readParcelable = source.readParcelable(e.a.class.getClassLoader());
            Intrinsics.checkNotNull(readParcelable);
            this.f56135d = (e.a) readParcelable;
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public c(Context context, AttributeSet attributeSet, int i10, int i11) {
        super(context, attributeSet, i10, i11);
        Intrinsics.checkNotNullParameter(context, "context");
        uo.b b10 = uo.b.b(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(b10, "inflate(...)");
        this.f56132d = b10;
        this.f56133e = new e();
    }
}
