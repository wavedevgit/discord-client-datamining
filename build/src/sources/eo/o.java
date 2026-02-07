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
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import dn.k;
import eo.r2;
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
public final class o implements dn.k {

    /* renamed from: d  reason: collision with root package name */
    public static final a f21824d = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final fo.a f21825b;

    /* renamed from: c  reason: collision with root package name */
    private View f21826c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements dn.c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ dn.c0 f21827a;

        /* renamed from: eo.o$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0296a extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0296a f21828d = new C0296a();

            C0296a() {
                super(3, fo.a.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/document/databinding/Pi2DocumentLoadingBinding;", 0);
            }

            public final fo.a a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return fo.a.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final b f21829d = new b();

            b() {
                super(1, o.class, "<init>", "<init>(Lcom/withpersona/sdk2/inquiry/document/databinding/Pi2DocumentLoadingBinding;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final o invoke(fo.a p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new o(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // dn.c0
        /* renamed from: b */
        public View a(r2.d.a initialRendering, dn.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f21827a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // dn.c0
        public KClass getType() {
            return this.f21827a.getType();
        }

        private a() {
            k.a aVar = dn.k.f20913a;
            this.f21827a = new dn.z(Reflection.getOrCreateKotlinClass(r2.d.a.class), C0296a.f21828d, b.f21829d);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f21830a;

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
            f21830a = iArr;
        }
    }

    public o(fo.a binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.f21825b = binding;
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Integer f10 = rp.s.f(context, jp.a.f30822n, null, false, 6, null);
        if (f10 != null) {
            binding.f23373f.setAnimation(f10.intValue());
            binding.f23373f.v();
        } else {
            ThemeableLottieAnimationView themeableLottieAnimationView = binding.f23373f;
            int parseColor = Color.parseColor("#4600EB");
            Context context2 = binding.getRoot().getContext();
            Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
            themeableLottieAnimationView.I(parseColor, f(this, context2, f.a.f22219v, null, false, 6, null));
        }
        ConstraintLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        bq.f.d(root, false, false, false, false, 15, null);
    }

    private final void d(StepStyles.DocumentStepStyle documentStepStyle, dn.a0 a0Var, PendingPageTextPosition pendingPageTextPosition) {
        float f10;
        StyleElements.PositionType pendingPageAlignmentValue = documentStepStyle.getPendingPageAlignmentValue();
        if (pendingPageAlignmentValue == null) {
            if (pendingPageTextPosition == PendingPageTextPosition.TOP) {
                pendingPageAlignmentValue = StyleElements.PositionType.START;
            } else {
                pendingPageAlignmentValue = StyleElements.PositionType.CENTER;
            }
        }
        int[] iArr = pendingPageTextPosition == PendingPageTextPosition.TOP ? new int[]{this.f21825b.f23374g.getId(), this.f21825b.f23370c.getId(), this.f21825b.f23369b.getId()} : new int[]{this.f21825b.f23369b.getId(), this.f21825b.f23374g.getId(), this.f21825b.f23370c.getId()};
        ConstraintSet constraintSet = new ConstraintSet();
        constraintSet.f(this.f21825b.f23371d);
        int i10 = b.f21830a[pendingPageAlignmentValue.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    f10 = 1.0f;
                } else {
                    throw new qr.p();
                }
            } else {
                f10 = 0.5f;
            }
        } else {
            f10 = 0.0f;
        }
        constraintSet.p(0, 3, 0, 4, iArr, null, 2);
        constraintSet.D(kotlin.collections.i.T(iArr), f10);
        constraintSet.c(this.f21825b.f23371d);
        Integer backgroundColorValue = documentStepStyle.getBackgroundColorValue();
        if (backgroundColorValue != null) {
            int intValue = backgroundColorValue.intValue();
            this.f21825b.getRoot().setBackgroundColor(intValue);
            aq.c.a(a0Var, intValue);
        }
        Context context = this.f21825b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Drawable a10 = mq.c.a(documentStepStyle, context);
        if (a10 != null) {
            this.f21825b.getRoot().setBackground(a10);
        }
        TextBasedComponentStyle processingTitleStyleValue = documentStepStyle.getProcessingTitleStyleValue();
        if (processingTitleStyleValue != null) {
            TextView title = this.f21825b.f23374g;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            kq.f0.n(title, processingTitleStyleValue, null, 2, null);
        }
        TextBasedComponentStyle processingTextStyleValue = documentStepStyle.getProcessingTextStyleValue();
        if (processingTextStyleValue != null) {
            TextView body = this.f21825b.f23370c;
            Intrinsics.checkNotNullExpressionValue(body, "body");
            kq.f0.n(body, processingTextStyleValue, null, 2, null);
        }
        Integer fillColorValue = documentStepStyle.getFillColorValue();
        if (fillColorValue != null) {
            this.f21825b.f23373f.I(Color.parseColor("#4600EB"), fillColorValue.intValue());
        }
        Integer strokeColorValue = documentStepStyle.getStrokeColorValue();
        if (strokeColorValue != null) {
            int intValue2 = strokeColorValue.intValue();
            this.f21825b.f23373f.I(Color.parseColor("#180052"), intValue2);
            this.f21825b.f23373f.I(Color.parseColor("#190052"), intValue2);
        }
    }

    private final int e(Context context, int i10, TypedValue typedValue, boolean z10) {
        context.getTheme().resolveAttribute(i10, typedValue, z10);
        return typedValue.data;
    }

    static /* synthetic */ int f(o oVar, Context context, int i10, TypedValue typedValue, boolean z10, int i11, Object obj) {
        if ((i11 & 2) != 0) {
            typedValue = new TypedValue();
        }
        if ((i11 & 4) != 0) {
            z10 = true;
        }
        return oVar.e(context, i10, typedValue, z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h(r2.d.a aVar) {
        aVar.c().invoke();
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i(r2.d.a aVar) {
        aVar.d().invoke();
        return Unit.f32056a;
    }

    @Override // dn.k
    /* renamed from: g */
    public void a(final r2.d.a rendering, dn.a0 viewEnvironment) {
        RemoteImage remoteImage;
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        fo.a aVar = this.f21825b;
        zp.a b10 = rendering.b();
        Function0 function0 = new Function0() { // from class: eo.m
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit h10;
                h10 = o.h(r2.d.a.this);
                return h10;
            }
        };
        Function0 function02 = new Function0() { // from class: eo.n
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit i10;
                i10 = o.i(r2.d.a.this);
                return i10;
            }
        };
        Pi2NavigationBar navigationBar = aVar.f23372e;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        ConstraintLayout root = aVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        zp.e.b(b10, function0, function02, navigationBar, root);
        String h10 = rendering.h();
        if (h10 != null && h10.length() != 0) {
            aVar.f23374g.setText(rendering.h());
            TextView title = aVar.f23374g;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            bq.s.e(title);
        } else {
            aVar.f23374g.setVisibility(8);
        }
        String f10 = rendering.f();
        if (f10 != null && f10.length() != 0) {
            aVar.f23370c.setText(rendering.f());
        } else {
            aVar.f23370c.setVisibility(8);
        }
        NextStep.Document.AssetConfig.PendingPage a10 = rendering.a();
        if (a10 != null) {
            remoteImage = a10.getLoadingPictograph();
        } else {
            remoteImage = null;
        }
        if (remoteImage != null && this.f21826c == null) {
            ConstraintLayout animationContainer = aVar.f23369b;
            Intrinsics.checkNotNullExpressionValue(animationContainer, "animationContainer");
            this.f21826c = mq.b.c(remoteImage, animationContainer, false, 2, null);
            aVar.f23373f.setVisibility(8);
        }
        StepStyles.DocumentStepStyle g10 = rendering.g();
        if (g10 != null) {
            d(g10, viewEnvironment, rendering.e());
        }
    }
}
