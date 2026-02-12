package wp;

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
import wp.x5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c2 implements gn.k {

    /* renamed from: d  reason: collision with root package name */
    public static final a f53031d = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final xp.h f53032b;

    /* renamed from: c  reason: collision with root package name */
    private View f53033c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements gn.c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ gn.c0 f53034a;

        /* renamed from: wp.c2$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0741a extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0741a f53035d = new C0741a();

            C0741a() {
                super(3, xp.h.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/selfie/databinding/Pi2SelfieSubmittingScreenBinding;", 0);
            }

            public final xp.h a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return xp.h.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final b f53036d = new b();

            b() {
                super(1, c2.class, "<init>", "<init>(Lcom/withpersona/sdk2/inquiry/selfie/databinding/Pi2SelfieSubmittingScreenBinding;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final c2 invoke(xp.h p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new c2(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // gn.c0
        /* renamed from: b */
        public View a(x5.d.f initialRendering, gn.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f53034a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // gn.c0
        public KClass getType() {
            return this.f53034a.getType();
        }

        private a() {
            k.a aVar = gn.k.f25849a;
            this.f53034a = new gn.z(Reflection.getOrCreateKotlinClass(x5.d.f.class), C0741a.f53035d, b.f53036d);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f53037a;

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
            f53037a = iArr;
        }
    }

    public c2(final xp.h binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.f53032b = binding;
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Integer f10 = bq.s.f(context, tp.a.f49766n, null, false, 6, null);
        if (f10 != null) {
            binding.f55145f.setAnimation(f10.intValue());
            binding.f55145f.u();
        } else {
            binding.f55145f.l(new r5.e("scanner", "**"), l5.b0.f35546a, new z5.e() { // from class: wp.z1
                @Override // z5.e
                public final Object a(z5.b bVar) {
                    return c2.d(xp.h.this, bVar);
                }
            });
        }
        ConstraintLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        lq.f.d(root, false, false, false, false, 15, null);
    }

    public static Integer d(xp.h hVar, z5.b bVar) {
        Context context = hVar.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        return Integer.valueOf(bq.s.d(context, f.a.f23299w, null, false, 6, null));
    }

    private final void e(StepStyles.SelfieStepStyle selfieStepStyle, gn.a0 a0Var, PendingPageTextPosition pendingPageTextPosition) {
        float f10;
        StyleElements.PositionType pendingPageAlignmentValue = selfieStepStyle.getPendingPageAlignmentValue();
        if (pendingPageAlignmentValue == null) {
            if (pendingPageTextPosition == PendingPageTextPosition.TOP) {
                pendingPageAlignmentValue = StyleElements.PositionType.START;
            } else {
                pendingPageAlignmentValue = StyleElements.PositionType.CENTER;
            }
        }
        int[] iArr = pendingPageTextPosition == PendingPageTextPosition.TOP ? new int[]{this.f53032b.f55146g.getId(), this.f53032b.f55142c.getId(), this.f53032b.f55141b.getId()} : new int[]{this.f53032b.f55141b.getId(), this.f53032b.f55146g.getId(), this.f53032b.f55142c.getId()};
        ConstraintSet constraintSet = new ConstraintSet();
        constraintSet.f(this.f53032b.f55143d);
        int i10 = b.f53037a[pendingPageAlignmentValue.ordinal()];
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
        constraintSet.c(this.f53032b.f55143d);
        Integer backgroundColorValue = selfieStepStyle.getBackgroundColorValue();
        if (backgroundColorValue != null) {
            int intValue = backgroundColorValue.intValue();
            this.f53032b.getRoot().setBackgroundColor(intValue);
            kq.c.a(a0Var, intValue);
        }
        Context context = this.f53032b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Drawable a10 = wq.c.a(selfieStepStyle, context);
        if (a10 != null) {
            this.f53032b.getRoot().setBackground(a10);
        }
        TextBasedComponentStyle processingTitleStyleValue = selfieStepStyle.getProcessingTitleStyleValue();
        if (processingTitleStyleValue != null) {
            TextView title = this.f53032b.f55146g;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            uq.f0.n(title, processingTitleStyleValue, null, 2, null);
        }
        TextBasedComponentStyle processingTextStyleValue = selfieStepStyle.getProcessingTextStyleValue();
        if (processingTextStyleValue != null) {
            TextView body = this.f53032b.f55142c;
            Intrinsics.checkNotNullExpressionValue(body, "body");
            uq.f0.n(body, processingTextStyleValue, null, 2, null);
        }
        Integer fillColorValue = selfieStepStyle.getFillColorValue();
        if (fillColorValue != null) {
            int intValue2 = fillColorValue.intValue();
            this.f53032b.f55145f.I(Color.parseColor("#AA85FF"), intValue2);
            this.f53032b.f55145f.I(Color.parseColor("#4600EB"), intValue2);
        }
        Integer strokeColorValue = selfieStepStyle.getStrokeColorValue();
        if (strokeColorValue != null) {
            this.f53032b.f55145f.I(Color.parseColor("#190052"), strokeColorValue.intValue());
        }
        Integer backgroundColorValue2 = selfieStepStyle.getBackgroundColorValue();
        if (backgroundColorValue2 != null) {
            int intValue3 = backgroundColorValue2.intValue();
            this.f53032b.f55145f.I(Color.parseColor("#FFFFFF"), intValue3);
            this.f53032b.f55145f.I(Color.parseColor("#F1EBFF"), intValue3);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g(x5.d.f fVar) {
        fVar.d().invoke();
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h(x5.d.f fVar) {
        fVar.e().invoke();
        return Unit.f31988a;
    }

    @Override // gn.k
    /* renamed from: f */
    public void a(final x5.d.f rendering, gn.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        xp.h hVar = this.f53032b;
        jq.a c10 = rendering.c();
        Function0 function0 = new Function0() { // from class: wp.a2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit g10;
                g10 = c2.g(x5.d.f.this);
                return g10;
            }
        };
        Function0 function02 = new Function0() { // from class: wp.b2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit h10;
                h10 = c2.h(x5.d.f.this);
                return h10;
            }
        };
        Pi2NavigationBar navigationBar = hVar.f55144e;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        ConstraintLayout root = hVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        jq.e.b(c10, function0, function02, navigationBar, root);
        if (rendering.h().length() == 0) {
            hVar.f55146g.setVisibility(8);
        } else {
            hVar.f55146g.setText(rendering.h());
            TextView title = hVar.f55146g;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            lq.s.e(title);
        }
        if (rendering.b().length() == 0) {
            hVar.f55142c.setVisibility(8);
        } else {
            hVar.f55142c.setText(rendering.b());
        }
        RemoteImage a10 = rendering.a();
        if (a10 != null && this.f53033c == null) {
            ConstraintLayout animationContainer = hVar.f55141b;
            Intrinsics.checkNotNullExpressionValue(animationContainer, "animationContainer");
            this.f53033c = wq.b.c(a10, animationContainer, false, 2, null);
            hVar.f55145f.setVisibility(8);
        }
        StepStyles.SelfieStepStyle g10 = rendering.g();
        if (g10 != null) {
            e(g10, viewEnvironment, rendering.f());
        }
    }
}
