package mp;

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
import dn.k;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import mp.x5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c2 implements dn.k {

    /* renamed from: d  reason: collision with root package name */
    public static final a f37395d = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final np.h f37396b;

    /* renamed from: c  reason: collision with root package name */
    private View f37397c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements dn.c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ dn.c0 f37398a;

        /* renamed from: mp.c2$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0508a extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0508a f37399d = new C0508a();

            C0508a() {
                super(3, np.h.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/selfie/databinding/Pi2SelfieSubmittingScreenBinding;", 0);
            }

            public final np.h a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return np.h.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final b f37400d = new b();

            b() {
                super(1, c2.class, "<init>", "<init>(Lcom/withpersona/sdk2/inquiry/selfie/databinding/Pi2SelfieSubmittingScreenBinding;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final c2 invoke(np.h p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new c2(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // dn.c0
        /* renamed from: b */
        public View a(x5.d.f initialRendering, dn.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f37398a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // dn.c0
        public KClass getType() {
            return this.f37398a.getType();
        }

        private a() {
            k.a aVar = dn.k.f20913a;
            this.f37398a = new dn.z(Reflection.getOrCreateKotlinClass(x5.d.f.class), C0508a.f37399d, b.f37400d);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f37401a;

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
            f37401a = iArr;
        }
    }

    public c2(final np.h binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.f37396b = binding;
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Integer f10 = rp.s.f(context, jp.a.f30822n, null, false, 6, null);
        if (f10 != null) {
            binding.f41194f.setAnimation(f10.intValue());
            binding.f41194f.u();
        } else {
            binding.f41194f.l(new q5.e("scanner", "**"), l5.a0.f35813a, new y5.e() { // from class: mp.z1
                @Override // y5.e
                public final Object a(y5.b bVar) {
                    return c2.d(np.h.this, bVar);
                }
            });
        }
        ConstraintLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        bq.f.d(root, false, false, false, false, 15, null);
    }

    public static Integer d(np.h hVar, y5.b bVar) {
        Context context = hVar.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        return Integer.valueOf(rp.s.d(context, f.a.f22219v, null, false, 6, null));
    }

    private final void e(StepStyles.SelfieStepStyle selfieStepStyle, dn.a0 a0Var, PendingPageTextPosition pendingPageTextPosition) {
        float f10;
        StyleElements.PositionType pendingPageAlignmentValue = selfieStepStyle.getPendingPageAlignmentValue();
        if (pendingPageAlignmentValue == null) {
            if (pendingPageTextPosition == PendingPageTextPosition.TOP) {
                pendingPageAlignmentValue = StyleElements.PositionType.START;
            } else {
                pendingPageAlignmentValue = StyleElements.PositionType.CENTER;
            }
        }
        int[] iArr = pendingPageTextPosition == PendingPageTextPosition.TOP ? new int[]{this.f37396b.f41195g.getId(), this.f37396b.f41191c.getId(), this.f37396b.f41190b.getId()} : new int[]{this.f37396b.f41190b.getId(), this.f37396b.f41195g.getId(), this.f37396b.f41191c.getId()};
        ConstraintSet constraintSet = new ConstraintSet();
        constraintSet.f(this.f37396b.f41192d);
        int i10 = b.f37401a[pendingPageAlignmentValue.ordinal()];
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
        constraintSet.c(this.f37396b.f41192d);
        Integer backgroundColorValue = selfieStepStyle.getBackgroundColorValue();
        if (backgroundColorValue != null) {
            int intValue = backgroundColorValue.intValue();
            this.f37396b.getRoot().setBackgroundColor(intValue);
            aq.c.a(a0Var, intValue);
        }
        Context context = this.f37396b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Drawable a10 = mq.c.a(selfieStepStyle, context);
        if (a10 != null) {
            this.f37396b.getRoot().setBackground(a10);
        }
        TextBasedComponentStyle processingTitleStyleValue = selfieStepStyle.getProcessingTitleStyleValue();
        if (processingTitleStyleValue != null) {
            TextView title = this.f37396b.f41195g;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            kq.f0.n(title, processingTitleStyleValue, null, 2, null);
        }
        TextBasedComponentStyle processingTextStyleValue = selfieStepStyle.getProcessingTextStyleValue();
        if (processingTextStyleValue != null) {
            TextView body = this.f37396b.f41191c;
            Intrinsics.checkNotNullExpressionValue(body, "body");
            kq.f0.n(body, processingTextStyleValue, null, 2, null);
        }
        Integer fillColorValue = selfieStepStyle.getFillColorValue();
        if (fillColorValue != null) {
            int intValue2 = fillColorValue.intValue();
            this.f37396b.f41194f.I(Color.parseColor("#AA85FF"), intValue2);
            this.f37396b.f41194f.I(Color.parseColor("#4600EB"), intValue2);
        }
        Integer strokeColorValue = selfieStepStyle.getStrokeColorValue();
        if (strokeColorValue != null) {
            this.f37396b.f41194f.I(Color.parseColor("#190052"), strokeColorValue.intValue());
        }
        Integer backgroundColorValue2 = selfieStepStyle.getBackgroundColorValue();
        if (backgroundColorValue2 != null) {
            int intValue3 = backgroundColorValue2.intValue();
            this.f37396b.f41194f.I(Color.parseColor("#FFFFFF"), intValue3);
            this.f37396b.f41194f.I(Color.parseColor("#F1EBFF"), intValue3);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g(x5.d.f fVar) {
        fVar.d().invoke();
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h(x5.d.f fVar) {
        fVar.e().invoke();
        return Unit.f32056a;
    }

    @Override // dn.k
    /* renamed from: f */
    public void a(final x5.d.f rendering, dn.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        np.h hVar = this.f37396b;
        zp.a c10 = rendering.c();
        Function0 function0 = new Function0() { // from class: mp.a2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit g10;
                g10 = c2.g(x5.d.f.this);
                return g10;
            }
        };
        Function0 function02 = new Function0() { // from class: mp.b2
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit h10;
                h10 = c2.h(x5.d.f.this);
                return h10;
            }
        };
        Pi2NavigationBar navigationBar = hVar.f41193e;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        ConstraintLayout root = hVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        zp.e.b(c10, function0, function02, navigationBar, root);
        if (rendering.h().length() == 0) {
            hVar.f41195g.setVisibility(8);
        } else {
            hVar.f41195g.setText(rendering.h());
            TextView title = hVar.f41195g;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            bq.s.e(title);
        }
        if (rendering.b().length() == 0) {
            hVar.f41191c.setVisibility(8);
        } else {
            hVar.f41191c.setText(rendering.b());
        }
        RemoteImage a10 = rendering.a();
        if (a10 != null && this.f37397c == null) {
            ConstraintLayout animationContainer = hVar.f41190b;
            Intrinsics.checkNotNullExpressionValue(animationContainer, "animationContainer");
            this.f37397c = mq.b.c(a10, animationContainer, false, 2, null);
            hVar.f41194f.setVisibility(8);
        }
        StepStyles.SelfieStepStyle g10 = rendering.g();
        if (g10 != null) {
            e(g10, viewEnvironment, rendering.f());
        }
    }
}
