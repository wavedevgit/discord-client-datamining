package hp;

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
import hp.x5;
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
public final class c2 implements ym.k {

    /* renamed from: d  reason: collision with root package name */
    public static final a f27198d = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final ip.h f27199b;

    /* renamed from: c  reason: collision with root package name */
    private View f27200c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements ym.c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ ym.c0 f27201a;

        /* renamed from: hp.c2$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0352a extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0352a f27202d = new C0352a();

            C0352a() {
                super(3, ip.h.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/selfie/databinding/Pi2SelfieSubmittingScreenBinding;", 0);
            }

            public final ip.h a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return ip.h.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final b f27203d = new b();

            b() {
                super(1, c2.class, "<init>", "<init>(Lcom/withpersona/sdk2/inquiry/selfie/databinding/Pi2SelfieSubmittingScreenBinding;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final c2 invoke(ip.h p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new c2(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // ym.c0
        /* renamed from: b */
        public View a(x5.d.f initialRendering, ym.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f27201a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // ym.c0
        public KClass getType() {
            return this.f27201a.getType();
        }

        private a() {
            k.a aVar = ym.k.f54648a;
            this.f27201a = new ym.z(Reflection.getOrCreateKotlinClass(x5.d.f.class), C0352a.f27202d, b.f27203d);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f27204a;

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
            f27204a = iArr;
        }
    }

    public c2(final ip.h binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.f27199b = binding;
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Integer f10 = mp.s.f(context, ep.a.f22466n, null, false, 6, null);
        if (f10 != null) {
            binding.f31040f.setAnimation(f10.intValue());
            binding.f31040f.u();
        } else {
            binding.f31040f.l(new q5.e("scanner", "**"), l5.a0.f36445a, new y5.e() { // from class: hp.z1
                @Override // y5.e
                public final Object a(y5.b bVar) {
                    return c2.d(ip.h.this, bVar);
                }
            });
        }
        ConstraintLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        wp.f.d(root, false, false, false, false, 15, null);
    }

    public static Integer d(ip.h hVar, y5.b bVar) {
        Context context = hVar.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        return Integer.valueOf(mp.s.d(context, f.a.f22893v, null, false, 6, null));
    }

    private final void e(StepStyles.SelfieStepStyle selfieStepStyle, ym.a0 a0Var, PendingPageTextPosition pendingPageTextPosition) {
        float f10;
        StyleElements.PositionType pendingPageAlignmentValue = selfieStepStyle.getPendingPageAlignmentValue();
        if (pendingPageAlignmentValue == null) {
            if (pendingPageTextPosition == PendingPageTextPosition.TOP) {
                pendingPageAlignmentValue = StyleElements.PositionType.START;
            } else {
                pendingPageAlignmentValue = StyleElements.PositionType.CENTER;
            }
        }
        int[] iArr = pendingPageTextPosition == PendingPageTextPosition.TOP ? new int[]{this.f27199b.f31041g.getId(), this.f27199b.f31037c.getId(), this.f27199b.f31036b.getId()} : new int[]{this.f27199b.f31036b.getId(), this.f27199b.f31041g.getId(), this.f27199b.f31037c.getId()};
        ConstraintSet constraintSet = new ConstraintSet();
        constraintSet.f(this.f27199b.f31038d);
        int i10 = b.f27204a[pendingPageAlignmentValue.ordinal()];
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
        constraintSet.c(this.f27199b.f31038d);
        Integer backgroundColorValue = selfieStepStyle.getBackgroundColorValue();
        if (backgroundColorValue != null) {
            int intValue = backgroundColorValue.intValue();
            this.f27199b.getRoot().setBackgroundColor(intValue);
            vp.c.a(a0Var, intValue);
        }
        Context context = this.f27199b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Drawable a10 = hq.c.a(selfieStepStyle, context);
        if (a10 != null) {
            this.f27199b.getRoot().setBackground(a10);
        }
        TextBasedComponentStyle processingTitleStyleValue = selfieStepStyle.getProcessingTitleStyleValue();
        if (processingTitleStyleValue != null) {
            TextView title = this.f27199b.f31041g;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            fq.f0.n(title, processingTitleStyleValue, null, 2, null);
        }
        TextBasedComponentStyle processingTextStyleValue = selfieStepStyle.getProcessingTextStyleValue();
        if (processingTextStyleValue != null) {
            TextView body = this.f27199b.f31037c;
            Intrinsics.checkNotNullExpressionValue(body, "body");
            fq.f0.n(body, processingTextStyleValue, null, 2, null);
        }
        Integer fillColorValue = selfieStepStyle.getFillColorValue();
        if (fillColorValue != null) {
            int intValue2 = fillColorValue.intValue();
            this.f27199b.f31040f.I(Color.parseColor("#AA85FF"), intValue2);
            this.f27199b.f31040f.I(Color.parseColor("#4600EB"), intValue2);
        }
        Integer strokeColorValue = selfieStepStyle.getStrokeColorValue();
        if (strokeColorValue != null) {
            this.f27199b.f31040f.I(Color.parseColor("#190052"), strokeColorValue.intValue());
        }
        Integer backgroundColorValue2 = selfieStepStyle.getBackgroundColorValue();
        if (backgroundColorValue2 != null) {
            int intValue3 = backgroundColorValue2.intValue();
            this.f27199b.f31040f.I(Color.parseColor("#FFFFFF"), intValue3);
            this.f27199b.f31040f.I(Color.parseColor("#F1EBFF"), intValue3);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g(x5.d.f fVar) {
        fVar.d().invoke();
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h(x5.d.f fVar) {
        fVar.e().invoke();
        return Unit.f32464a;
    }

    @Override // ym.k
    /* renamed from: f */
    public void a(final x5.d.f rendering, ym.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        ip.h hVar = this.f27199b;
        up.a c10 = rendering.c();
        Function0 function0 = new Function0() { // from class: hp.a2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit g10;
                g10 = c2.g(x5.d.f.this);
                return g10;
            }
        };
        Function0 function02 = new Function0() { // from class: hp.b2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit h10;
                h10 = c2.h(x5.d.f.this);
                return h10;
            }
        };
        Pi2NavigationBar navigationBar = hVar.f31039e;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        ConstraintLayout root = hVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        up.e.b(c10, function0, function02, navigationBar, root);
        if (rendering.h().length() == 0) {
            hVar.f31041g.setVisibility(8);
        } else {
            hVar.f31041g.setText(rendering.h());
            TextView title = hVar.f31041g;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            wp.s.e(title);
        }
        if (rendering.b().length() == 0) {
            hVar.f31037c.setVisibility(8);
        } else {
            hVar.f31037c.setText(rendering.b());
        }
        RemoteImage a10 = rendering.a();
        if (a10 != null && this.f27200c == null) {
            ConstraintLayout animationContainer = hVar.f31036b;
            Intrinsics.checkNotNullExpressionValue(animationContainer, "animationContainer");
            this.f27200c = hq.b.c(a10, animationContainer, false, 2, null);
            hVar.f31040f.setVisibility(8);
        }
        StepStyles.SelfieStepStyle g10 = rendering.g();
        if (g10 != null) {
            e(g10, viewEnvironment, rendering.f());
        }
    }
}
