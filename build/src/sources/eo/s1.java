package eo;

import android.content.Context;
import android.graphics.Color;
import android.graphics.drawable.Drawable;
import android.util.TypedValue;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.constraintlayout.widget.ConstraintSet;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.PendingPageTextPosition;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import eo.f5;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import ym.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s1 implements ym.k {

    /* renamed from: d  reason: collision with root package name */
    public static final a f22340d = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final io.j f22341b;

    /* renamed from: c  reason: collision with root package name */
    private View f22342c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements ym.c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ ym.c0 f22343a;

        /* renamed from: eo.s1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0299a extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0299a f22344d = new C0299a();

            C0299a() {
                super(3, io.j.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2GovernmentidSubmittingScreenBinding;", 0);
            }

            public final io.j a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return io.j.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final b f22345d = new b();

            b() {
                super(1, s1.class, "<init>", "<init>(Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2GovernmentidSubmittingScreenBinding;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final s1 invoke(io.j p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new s1(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // ym.c0
        /* renamed from: b */
        public View a(f5.f initialRendering, ym.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f22343a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // ym.c0
        public KClass getType() {
            return this.f22343a.getType();
        }

        private a() {
            k.a aVar = ym.k.f54645a;
            this.f22343a = new ym.z(Reflection.getOrCreateKotlinClass(f5.f.class), C0299a.f22344d, b.f22345d);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f22346a;

        static {
            int[] iArr = new int[StyleElements.PositionType.values().length];
            try {
                iArr[StyleElements.PositionType.START.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[StyleElements.PositionType.CENTER.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[StyleElements.PositionType.END.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f22346a = iArr;
        }
    }

    public s1(final io.j binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.f22341b = binding;
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Integer f10 = mp.s.f(context, ep.a.f22466n, null, false, 6, null);
        if (f10 != null) {
            binding.f28636f.setAnimation(f10.intValue());
            binding.f28636f.v();
        } else {
            binding.f28636f.l(new q5.e("scanner", "**"), l5.a0.f36445a, new y5.e() { // from class: eo.r1
                @Override // y5.e
                public final Object a(y5.b bVar) {
                    return s1.c(s1.this, binding, bVar);
                }
            });
        }
        ConstraintLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        wp.f.d(root, false, false, false, false, 15, null);
    }

    public static Integer c(s1 s1Var, io.j jVar, y5.b bVar) {
        Context context = jVar.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        return Integer.valueOf(g(s1Var, context, f.a.f22893v, null, false, 6, null));
    }

    private final void e(StepStyles.GovernmentIdStepStyle governmentIdStepStyle, ym.a0 a0Var, PendingPageTextPosition pendingPageTextPosition) {
        float f10;
        StyleElements.PositionType pendingPageAlignmentValue = governmentIdStepStyle.getPendingPageAlignmentValue();
        if (pendingPageAlignmentValue == null) {
            if (pendingPageTextPosition == PendingPageTextPosition.TOP) {
                pendingPageAlignmentValue = StyleElements.PositionType.START;
            } else {
                pendingPageAlignmentValue = StyleElements.PositionType.CENTER;
            }
        }
        int[] iArr = pendingPageTextPosition == PendingPageTextPosition.TOP ? new int[]{this.f22341b.f28637g.getId(), this.f22341b.f28633c.getId(), this.f22341b.f28632b.getId()} : new int[]{this.f22341b.f28632b.getId(), this.f22341b.f28637g.getId(), this.f22341b.f28633c.getId()};
        ConstraintSet constraintSet = new ConstraintSet();
        constraintSet.f(this.f22341b.f28634d);
        int i10 = b.f22346a[pendingPageAlignmentValue.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    f10 = 1.0f;
                } else {
                    throw new lr.p();
                }
            } else {
                f10 = 0.5f;
            }
        } else {
            f10 = 0.0f;
        }
        constraintSet.p(0, 3, 0, 4, iArr, null, 2);
        constraintSet.D(kotlin.collections.i.T(iArr), f10);
        constraintSet.c(this.f22341b.f28634d);
        Integer backgroundColorValue = governmentIdStepStyle.getBackgroundColorValue();
        if (backgroundColorValue != null) {
            int intValue = backgroundColorValue.intValue();
            this.f22341b.getRoot().setBackgroundColor(intValue);
            vp.c.a(a0Var, intValue);
        }
        Context context = this.f22341b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Drawable a10 = hq.c.a(governmentIdStepStyle, context);
        if (a10 != null) {
            this.f22341b.getRoot().setBackground(a10);
        }
        TextBasedComponentStyle processingTitleStyleValue = governmentIdStepStyle.getProcessingTitleStyleValue();
        if (processingTitleStyleValue != null) {
            TextView title = this.f22341b.f28637g;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            fq.f0.n(title, processingTitleStyleValue, null, 2, null);
        }
        TextBasedComponentStyle processingTextStyleValue = governmentIdStepStyle.getProcessingTextStyleValue();
        if (processingTextStyleValue != null) {
            TextView body = this.f22341b.f28633c;
            Intrinsics.checkNotNullExpressionValue(body, "body");
            fq.f0.n(body, processingTextStyleValue, null, 2, null);
        }
        Integer fillColorValue = governmentIdStepStyle.getFillColorValue();
        if (fillColorValue != null) {
            int intValue2 = fillColorValue.intValue();
            this.f22341b.f28636f.I(Color.parseColor("#AA85FF"), intValue2);
            this.f22341b.f28636f.I(Color.parseColor("#4600EB"), intValue2);
        }
        Integer strokeColorValue = governmentIdStepStyle.getStrokeColorValue();
        if (strokeColorValue != null) {
            this.f22341b.f28636f.I(Color.parseColor("#190052"), strokeColorValue.intValue());
        }
        Integer backgroundColorValue2 = governmentIdStepStyle.getBackgroundColorValue();
        if (backgroundColorValue2 != null) {
            int intValue3 = backgroundColorValue2.intValue();
            this.f22341b.f28636f.I(Color.parseColor("#FFFFFF"), intValue3);
            this.f22341b.f28636f.I(Color.parseColor("#F1EBFF"), intValue3);
        }
    }

    private final int f(Context context, int i10, TypedValue typedValue, boolean z10) {
        context.getTheme().resolveAttribute(i10, typedValue, z10);
        return typedValue.data;
    }

    static /* synthetic */ int g(s1 s1Var, Context context, int i10, TypedValue typedValue, boolean z10, int i11, Object obj) {
        if ((i11 & 2) != 0) {
            typedValue = new TypedValue();
        }
        if ((i11 & 4) != 0) {
            z10 = true;
        }
        return s1Var.f(context, i10, typedValue, z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i(f5.f fVar) {
        fVar.d().invoke();
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j(f5.f fVar) {
        fVar.e().invoke();
        return Unit.f32464a;
    }

    @Override // ym.k
    /* renamed from: h */
    public void a(final f5.f rendering, ym.a0 viewEnvironment) {
        RemoteImage remoteImage;
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        io.j jVar = this.f22341b;
        up.a c10 = rendering.c();
        Function0 function0 = new Function0() { // from class: eo.p1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit i10;
                i10 = s1.i(f5.f.this);
                return i10;
            }
        };
        Function0 function02 = new Function0() { // from class: eo.q1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j10;
                j10 = s1.j(f5.f.this);
                return j10;
            }
        };
        Pi2NavigationBar navigationBar = jVar.f28635e;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        ConstraintLayout root = jVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        up.e.b(c10, function0, function02, navigationBar, root);
        if (rendering.h().length() == 0) {
            jVar.f28637g.setVisibility(8);
        } else {
            jVar.f28637g.setText(rendering.h());
            TextView title = jVar.f28637g;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            wp.s.e(title);
        }
        if (rendering.b().length() == 0) {
            jVar.f28633c.setVisibility(8);
        } else {
            jVar.f28633c.setText(rendering.b());
        }
        NextStep.GovernmentId.AssetConfig.PendingPage a10 = rendering.a();
        if (a10 != null) {
            remoteImage = a10.getLoadingPictograph();
        } else {
            remoteImage = null;
        }
        if (remoteImage != null && this.f22342c == null) {
            ConstraintLayout animationContainer = this.f22341b.f28632b;
            Intrinsics.checkNotNullExpressionValue(animationContainer, "animationContainer");
            this.f22342c = hq.b.c(remoteImage, animationContainer, false, 2, null);
            jVar.f28636f.setVisibility(8);
        }
        StepStyles.GovernmentIdStepStyle g10 = rendering.g();
        if (g10 != null) {
            e(g10, viewEnvironment, rendering.f());
        }
    }
}
