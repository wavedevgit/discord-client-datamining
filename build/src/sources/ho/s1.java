package ho;

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
import bn.k;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.PendingPageTextPosition;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import ho.f5;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s1 implements bn.k {

    /* renamed from: d  reason: collision with root package name */
    public static final a f26652d = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final lo.j f26653b;

    /* renamed from: c  reason: collision with root package name */
    private View f26654c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements bn.c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ bn.c0 f26655a;

        /* renamed from: ho.s1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0367a extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0367a f26656d = new C0367a();

            C0367a() {
                super(3, lo.j.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2GovernmentidSubmittingScreenBinding;", 0);
            }

            public final lo.j a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return lo.j.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final b f26657d = new b();

            b() {
                super(1, s1.class, "<init>", "<init>(Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2GovernmentidSubmittingScreenBinding;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final s1 invoke(lo.j p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new s1(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // bn.c0
        /* renamed from: b */
        public View a(f5.f initialRendering, bn.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f26655a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // bn.c0
        public KClass getType() {
            return this.f26655a.getType();
        }

        private a() {
            k.a aVar = bn.k.f6590a;
            this.f26655a = new bn.z(Reflection.getOrCreateKotlinClass(f5.f.class), C0367a.f26656d, b.f26657d);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f26658a;

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
            f26658a = iArr;
        }
    }

    public s1(final lo.j binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.f26653b = binding;
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Integer f10 = pp.s.f(context, hp.a.f26778n, null, false, 6, null);
        if (f10 != null) {
            binding.f37111f.setAnimation(f10.intValue());
            binding.f37111f.v();
        } else {
            binding.f37111f.l(new q5.e("scanner", "**"), l5.a0.f36372a, new y5.e() { // from class: ho.r1
                @Override // y5.e
                public final Object a(y5.b bVar) {
                    return s1.c(s1.this, binding, bVar);
                }
            });
        }
        ConstraintLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        zp.f.d(root, false, false, false, false, 15, null);
    }

    public static Integer c(s1 s1Var, lo.j jVar, y5.b bVar) {
        Context context = jVar.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        return Integer.valueOf(g(s1Var, context, f.a.f21918v, null, false, 6, null));
    }

    private final void e(StepStyles.GovernmentIdStepStyle governmentIdStepStyle, bn.a0 a0Var, PendingPageTextPosition pendingPageTextPosition) {
        float f10;
        StyleElements.PositionType pendingPageAlignmentValue = governmentIdStepStyle.getPendingPageAlignmentValue();
        if (pendingPageAlignmentValue == null) {
            if (pendingPageTextPosition == PendingPageTextPosition.TOP) {
                pendingPageAlignmentValue = StyleElements.PositionType.START;
            } else {
                pendingPageAlignmentValue = StyleElements.PositionType.CENTER;
            }
        }
        int[] iArr = pendingPageTextPosition == PendingPageTextPosition.TOP ? new int[]{this.f26653b.f37112g.getId(), this.f26653b.f37108c.getId(), this.f26653b.f37107b.getId()} : new int[]{this.f26653b.f37107b.getId(), this.f26653b.f37112g.getId(), this.f26653b.f37108c.getId()};
        ConstraintSet constraintSet = new ConstraintSet();
        constraintSet.f(this.f26653b.f37109d);
        int i10 = b.f26658a[pendingPageAlignmentValue.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    f10 = 1.0f;
                } else {
                    throw new or.p();
                }
            } else {
                f10 = 0.5f;
            }
        } else {
            f10 = 0.0f;
        }
        constraintSet.p(0, 3, 0, 4, iArr, null, 2);
        constraintSet.D(kotlin.collections.i.T(iArr), f10);
        constraintSet.c(this.f26653b.f37109d);
        Integer backgroundColorValue = governmentIdStepStyle.getBackgroundColorValue();
        if (backgroundColorValue != null) {
            int intValue = backgroundColorValue.intValue();
            this.f26653b.getRoot().setBackgroundColor(intValue);
            yp.c.a(a0Var, intValue);
        }
        Context context = this.f26653b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Drawable a10 = kq.c.a(governmentIdStepStyle, context);
        if (a10 != null) {
            this.f26653b.getRoot().setBackground(a10);
        }
        TextBasedComponentStyle processingTitleStyleValue = governmentIdStepStyle.getProcessingTitleStyleValue();
        if (processingTitleStyleValue != null) {
            TextView title = this.f26653b.f37112g;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            iq.f0.n(title, processingTitleStyleValue, null, 2, null);
        }
        TextBasedComponentStyle processingTextStyleValue = governmentIdStepStyle.getProcessingTextStyleValue();
        if (processingTextStyleValue != null) {
            TextView body = this.f26653b.f37108c;
            Intrinsics.checkNotNullExpressionValue(body, "body");
            iq.f0.n(body, processingTextStyleValue, null, 2, null);
        }
        Integer fillColorValue = governmentIdStepStyle.getFillColorValue();
        if (fillColorValue != null) {
            int intValue2 = fillColorValue.intValue();
            this.f26653b.f37111f.I(Color.parseColor("#AA85FF"), intValue2);
            this.f26653b.f37111f.I(Color.parseColor("#4600EB"), intValue2);
        }
        Integer strokeColorValue = governmentIdStepStyle.getStrokeColorValue();
        if (strokeColorValue != null) {
            this.f26653b.f37111f.I(Color.parseColor("#190052"), strokeColorValue.intValue());
        }
        Integer backgroundColorValue2 = governmentIdStepStyle.getBackgroundColorValue();
        if (backgroundColorValue2 != null) {
            int intValue3 = backgroundColorValue2.intValue();
            this.f26653b.f37111f.I(Color.parseColor("#FFFFFF"), intValue3);
            this.f26653b.f37111f.I(Color.parseColor("#F1EBFF"), intValue3);
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

    @Override // bn.k
    /* renamed from: h */
    public void a(final f5.f rendering, bn.a0 viewEnvironment) {
        RemoteImage remoteImage;
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        lo.j jVar = this.f26653b;
        xp.a c10 = rendering.c();
        Function0 function0 = new Function0() { // from class: ho.p1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit i10;
                i10 = s1.i(f5.f.this);
                return i10;
            }
        };
        Function0 function02 = new Function0() { // from class: ho.q1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j10;
                j10 = s1.j(f5.f.this);
                return j10;
            }
        };
        Pi2NavigationBar navigationBar = jVar.f37110e;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        ConstraintLayout root = jVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        xp.e.b(c10, function0, function02, navigationBar, root);
        if (rendering.h().length() == 0) {
            jVar.f37112g.setVisibility(8);
        } else {
            jVar.f37112g.setText(rendering.h());
            TextView title = jVar.f37112g;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            zp.s.e(title);
        }
        if (rendering.b().length() == 0) {
            jVar.f37108c.setVisibility(8);
        } else {
            jVar.f37108c.setText(rendering.b());
        }
        NextStep.GovernmentId.AssetConfig.PendingPage a10 = rendering.a();
        if (a10 != null) {
            remoteImage = a10.getLoadingPictograph();
        } else {
            remoteImage = null;
        }
        if (remoteImage != null && this.f26654c == null) {
            ConstraintLayout animationContainer = this.f26653b.f37107b;
            Intrinsics.checkNotNullExpressionValue(animationContainer, "animationContainer");
            this.f26654c = kq.b.c(remoteImage, animationContainer, false, 2, null);
            jVar.f37111f.setVisibility(8);
        }
        StepStyles.GovernmentIdStepStyle g10 = rendering.g();
        if (g10 != null) {
            e(g10, viewEnvironment, rendering.f());
        }
    }
}
