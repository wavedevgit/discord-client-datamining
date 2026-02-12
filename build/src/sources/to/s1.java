package to;

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
import gn.k;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import to.f5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s1 implements gn.k {

    /* renamed from: d  reason: collision with root package name */
    public static final a f49640d = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final xo.j f49641b;

    /* renamed from: c  reason: collision with root package name */
    private View f49642c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements gn.c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ gn.c0 f49643a;

        /* renamed from: to.s1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0678a extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0678a f49644d = new C0678a();

            C0678a() {
                super(3, xo.j.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2GovernmentidSubmittingScreenBinding;", 0);
            }

            public final xo.j a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return xo.j.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final b f49645d = new b();

            b() {
                super(1, s1.class, "<init>", "<init>(Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2GovernmentidSubmittingScreenBinding;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final s1 invoke(xo.j p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new s1(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // gn.c0
        /* renamed from: b */
        public View a(f5.f initialRendering, gn.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f49643a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // gn.c0
        public KClass getType() {
            return this.f49643a.getType();
        }

        private a() {
            k.a aVar = gn.k.f25849a;
            this.f49643a = new gn.z(Reflection.getOrCreateKotlinClass(f5.f.class), C0678a.f49644d, b.f49645d);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f49646a;

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
            f49646a = iArr;
        }
    }

    public s1(final xo.j binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.f49641b = binding;
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Integer f10 = bq.s.f(context, tp.a.f49766n, null, false, 6, null);
        if (f10 != null) {
            binding.f55066f.setAnimation(f10.intValue());
            binding.f55066f.v();
        } else {
            binding.f55066f.l(new r5.e("scanner", "**"), l5.b0.f35546a, new z5.e() { // from class: to.r1
                @Override // z5.e
                public final Object a(z5.b bVar) {
                    return s1.c(s1.this, binding, bVar);
                }
            });
        }
        ConstraintLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        lq.f.d(root, false, false, false, false, 15, null);
    }

    public static Integer c(s1 s1Var, xo.j jVar, z5.b bVar) {
        Context context = jVar.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        return Integer.valueOf(g(s1Var, context, f.a.f23299w, null, false, 6, null));
    }

    private final void e(StepStyles.GovernmentIdStepStyle governmentIdStepStyle, gn.a0 a0Var, PendingPageTextPosition pendingPageTextPosition) {
        float f10;
        StyleElements.PositionType pendingPageAlignmentValue = governmentIdStepStyle.getPendingPageAlignmentValue();
        if (pendingPageAlignmentValue == null) {
            if (pendingPageTextPosition == PendingPageTextPosition.TOP) {
                pendingPageAlignmentValue = StyleElements.PositionType.START;
            } else {
                pendingPageAlignmentValue = StyleElements.PositionType.CENTER;
            }
        }
        int[] iArr = pendingPageTextPosition == PendingPageTextPosition.TOP ? new int[]{this.f49641b.f55067g.getId(), this.f49641b.f55063c.getId(), this.f49641b.f55062b.getId()} : new int[]{this.f49641b.f55062b.getId(), this.f49641b.f55067g.getId(), this.f49641b.f55063c.getId()};
        ConstraintSet constraintSet = new ConstraintSet();
        constraintSet.f(this.f49641b.f55064d);
        int i10 = b.f49646a[pendingPageAlignmentValue.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    f10 = 1.0f;
                } else {
                    throw new as.p();
                }
            } else {
                f10 = 0.5f;
            }
        } else {
            f10 = 0.0f;
        }
        constraintSet.p(0, 3, 0, 4, iArr, null, 2);
        constraintSet.D(kotlin.collections.i.T(iArr), f10);
        constraintSet.c(this.f49641b.f55064d);
        Integer backgroundColorValue = governmentIdStepStyle.getBackgroundColorValue();
        if (backgroundColorValue != null) {
            int intValue = backgroundColorValue.intValue();
            this.f49641b.getRoot().setBackgroundColor(intValue);
            kq.c.a(a0Var, intValue);
        }
        Context context = this.f49641b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Drawable a10 = wq.c.a(governmentIdStepStyle, context);
        if (a10 != null) {
            this.f49641b.getRoot().setBackground(a10);
        }
        TextBasedComponentStyle processingTitleStyleValue = governmentIdStepStyle.getProcessingTitleStyleValue();
        if (processingTitleStyleValue != null) {
            TextView title = this.f49641b.f55067g;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            uq.f0.n(title, processingTitleStyleValue, null, 2, null);
        }
        TextBasedComponentStyle processingTextStyleValue = governmentIdStepStyle.getProcessingTextStyleValue();
        if (processingTextStyleValue != null) {
            TextView body = this.f49641b.f55063c;
            Intrinsics.checkNotNullExpressionValue(body, "body");
            uq.f0.n(body, processingTextStyleValue, null, 2, null);
        }
        Integer fillColorValue = governmentIdStepStyle.getFillColorValue();
        if (fillColorValue != null) {
            int intValue2 = fillColorValue.intValue();
            this.f49641b.f55066f.I(Color.parseColor("#AA85FF"), intValue2);
            this.f49641b.f55066f.I(Color.parseColor("#4600EB"), intValue2);
        }
        Integer strokeColorValue = governmentIdStepStyle.getStrokeColorValue();
        if (strokeColorValue != null) {
            this.f49641b.f55066f.I(Color.parseColor("#190052"), strokeColorValue.intValue());
        }
        Integer backgroundColorValue2 = governmentIdStepStyle.getBackgroundColorValue();
        if (backgroundColorValue2 != null) {
            int intValue3 = backgroundColorValue2.intValue();
            this.f49641b.f55066f.I(Color.parseColor("#FFFFFF"), intValue3);
            this.f49641b.f55066f.I(Color.parseColor("#F1EBFF"), intValue3);
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
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j(f5.f fVar) {
        fVar.e().invoke();
        return Unit.f31988a;
    }

    @Override // gn.k
    /* renamed from: h */
    public void a(final f5.f rendering, gn.a0 viewEnvironment) {
        RemoteImage remoteImage;
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        xo.j jVar = this.f49641b;
        jq.a c10 = rendering.c();
        Function0 function0 = new Function0() { // from class: to.p1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit i10;
                i10 = s1.i(f5.f.this);
                return i10;
            }
        };
        Function0 function02 = new Function0() { // from class: to.q1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j10;
                j10 = s1.j(f5.f.this);
                return j10;
            }
        };
        Pi2NavigationBar navigationBar = jVar.f55065e;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        ConstraintLayout root = jVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        jq.e.b(c10, function0, function02, navigationBar, root);
        if (rendering.h().length() == 0) {
            jVar.f55067g.setVisibility(8);
        } else {
            jVar.f55067g.setText(rendering.h());
            TextView title = jVar.f55067g;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            lq.s.e(title);
        }
        if (rendering.b().length() == 0) {
            jVar.f55063c.setVisibility(8);
        } else {
            jVar.f55063c.setText(rendering.b());
        }
        NextStep.GovernmentId.AssetConfig.PendingPage a10 = rendering.a();
        if (a10 != null) {
            remoteImage = a10.getLoadingPictograph();
        } else {
            remoteImage = null;
        }
        if (remoteImage != null && this.f49642c == null) {
            ConstraintLayout animationContainer = this.f49641b.f55062b;
            Intrinsics.checkNotNullExpressionValue(animationContainer, "animationContainer");
            this.f49642c = wq.b.c(remoteImage, animationContainer, false, 2, null);
            jVar.f55066f.setVisibility(8);
        }
        StepStyles.GovernmentIdStepStyle g10 = rendering.g();
        if (g10 != null) {
            e(g10, viewEnvironment, rendering.f());
        }
    }
}
