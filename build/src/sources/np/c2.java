package np;

import android.content.Context;
import android.graphics.Color;
import android.graphics.drawable.Drawable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.constraintlayout.widget.ConstraintSet;
import com.withpersona.sdk2.inquiry.network.dto.PendingPageTextPosition;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import en.k;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import np.x5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c2 implements en.k {

    /* renamed from: d  reason: collision with root package name */
    public static final a f39080d = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final op.h f39081b;

    /* renamed from: c  reason: collision with root package name */
    private View f39082c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements en.c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ en.c0 f39083a;

        /* renamed from: np.c2$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0562a extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0562a f39084d = new C0562a();

            C0562a() {
                super(3, op.h.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/selfie/databinding/Pi2SelfieSubmittingScreenBinding;", 0);
            }

            public final op.h a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return op.h.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final b f39085d = new b();

            b() {
                super(1, c2.class, "<init>", "<init>(Lcom/withpersona/sdk2/inquiry/selfie/databinding/Pi2SelfieSubmittingScreenBinding;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final c2 invoke(op.h p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new c2(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // en.c0
        /* renamed from: b */
        public View a(x5.d.f initialRendering, en.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f39083a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // en.c0
        public KClass getType() {
            return this.f39083a.getType();
        }

        private a() {
            k.a aVar = en.k.f21834a;
            this.f39083a = new en.z(Reflection.getOrCreateKotlinClass(x5.d.f.class), C0562a.f39084d, b.f39085d);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f39086a;

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
            f39086a = iArr;
        }
    }

    public c2(final op.h binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.f39081b = binding;
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Integer f10 = sp.s.f(context, kp.a.f34914n, null, false, 6, null);
        if (f10 != null) {
            binding.f42621f.setAnimation(f10.intValue());
            binding.f42621f.u();
        } else {
            binding.f42621f.l(new r5.e("scanner", "**"), l5.b0.f35648a, new z5.e() { // from class: np.z1
                @Override // z5.e
                public final Object a(z5.b bVar) {
                    return c2.d(op.h.this, bVar);
                }
            });
        }
        ConstraintLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        cq.f.d(root, false, false, false, false, 15, null);
    }

    public static Integer d(op.h hVar, z5.b bVar) {
        Context context = hVar.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        return Integer.valueOf(sp.s.d(context, f.a.f22174v, null, false, 6, null));
    }

    private final void e(StepStyles.SelfieStepStyle selfieStepStyle, en.a0 a0Var, PendingPageTextPosition pendingPageTextPosition) {
        float f10;
        StyleElements.PositionType pendingPageAlignmentValue = selfieStepStyle.getPendingPageAlignmentValue();
        if (pendingPageAlignmentValue == null) {
            if (pendingPageTextPosition == PendingPageTextPosition.TOP) {
                pendingPageAlignmentValue = StyleElements.PositionType.START;
            } else {
                pendingPageAlignmentValue = StyleElements.PositionType.CENTER;
            }
        }
        int[] iArr = pendingPageTextPosition == PendingPageTextPosition.TOP ? new int[]{this.f39081b.f42622g.getId(), this.f39081b.f42618c.getId(), this.f39081b.f42617b.getId()} : new int[]{this.f39081b.f42617b.getId(), this.f39081b.f42622g.getId(), this.f39081b.f42618c.getId()};
        ConstraintSet constraintSet = new ConstraintSet();
        constraintSet.f(this.f39081b.f42619d);
        int i10 = b.f39086a[pendingPageAlignmentValue.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    f10 = 1.0f;
                } else {
                    throw new rr.p();
                }
            } else {
                f10 = 0.5f;
            }
        } else {
            f10 = 0.0f;
        }
        constraintSet.p(0, 3, 0, 4, iArr, null, 2);
        constraintSet.D(kotlin.collections.i.T(iArr), f10);
        constraintSet.c(this.f39081b.f42619d);
        Integer backgroundColorValue = selfieStepStyle.getBackgroundColorValue();
        if (backgroundColorValue != null) {
            int intValue = backgroundColorValue.intValue();
            this.f39081b.getRoot().setBackgroundColor(intValue);
            bq.c.a(a0Var, intValue);
        }
        Context context = this.f39081b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Drawable a10 = nq.c.a(selfieStepStyle, context);
        if (a10 != null) {
            this.f39081b.getRoot().setBackground(a10);
        }
        TextBasedComponentStyle processingTitleStyleValue = selfieStepStyle.getProcessingTitleStyleValue();
        if (processingTitleStyleValue != null) {
            TextView title = this.f39081b.f42622g;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            lq.f0.n(title, processingTitleStyleValue, null, 2, null);
        }
        TextBasedComponentStyle processingTextStyleValue = selfieStepStyle.getProcessingTextStyleValue();
        if (processingTextStyleValue != null) {
            TextView body = this.f39081b.f42618c;
            Intrinsics.checkNotNullExpressionValue(body, "body");
            lq.f0.n(body, processingTextStyleValue, null, 2, null);
        }
        Integer fillColorValue = selfieStepStyle.getFillColorValue();
        if (fillColorValue != null) {
            int intValue2 = fillColorValue.intValue();
            this.f39081b.f42621f.I(Color.parseColor("#AA85FF"), intValue2);
            this.f39081b.f42621f.I(Color.parseColor("#4600EB"), intValue2);
        }
        Integer strokeColorValue = selfieStepStyle.getStrokeColorValue();
        if (strokeColorValue != null) {
            this.f39081b.f42621f.I(Color.parseColor("#190052"), strokeColorValue.intValue());
        }
        Integer backgroundColorValue2 = selfieStepStyle.getBackgroundColorValue();
        if (backgroundColorValue2 != null) {
            int intValue3 = backgroundColorValue2.intValue();
            this.f39081b.f42621f.I(Color.parseColor("#FFFFFF"), intValue3);
            this.f39081b.f42621f.I(Color.parseColor("#F1EBFF"), intValue3);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g(x5.d.f fVar) {
        fVar.d().invoke();
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h(x5.d.f fVar) {
        fVar.e().invoke();
        return Unit.f31765a;
    }

    @Override // en.k
    /* renamed from: f */
    public void a(final x5.d.f rendering, en.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        op.h hVar = this.f39081b;
        aq.a c10 = rendering.c();
        Function0 function0 = new Function0() { // from class: np.a2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit g10;
                g10 = c2.g(x5.d.f.this);
                return g10;
            }
        };
        Function0 function02 = new Function0() { // from class: np.b2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit h10;
                h10 = c2.h(x5.d.f.this);
                return h10;
            }
        };
        Pi2NavigationBar navigationBar = hVar.f42620e;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        ConstraintLayout root = hVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        aq.e.b(c10, function0, function02, navigationBar, root);
        if (rendering.h().length() == 0) {
            hVar.f42622g.setVisibility(8);
        } else {
            hVar.f42622g.setText(rendering.h());
            TextView title = hVar.f42622g;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            cq.s.e(title);
        }
        if (rendering.b().length() == 0) {
            hVar.f42618c.setVisibility(8);
        } else {
            hVar.f42618c.setText(rendering.b());
        }
        RemoteImage a10 = rendering.a();
        if (a10 != null && this.f39082c == null) {
            ConstraintLayout animationContainer = hVar.f42617b;
            Intrinsics.checkNotNullExpressionValue(animationContainer, "animationContainer");
            this.f39082c = nq.b.c(a10, animationContainer, false, 2, null);
            hVar.f42621f.setVisibility(8);
        }
        StepStyles.SelfieStepStyle g10 = rendering.g();
        if (g10 != null) {
            e(g10, viewEnvironment, rendering.f());
        }
    }
}
