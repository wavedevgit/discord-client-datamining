package np;

import android.content.Context;
import android.graphics.Color;
import android.graphics.drawable.Drawable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ScrollView;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonSubmitComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
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
public final class l1 implements en.k {

    /* renamed from: d  reason: collision with root package name */
    public static final a f39217d = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final op.e f39218b;

    /* renamed from: c  reason: collision with root package name */
    private View f39219c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements en.c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ en.c0 f39220a;

        /* renamed from: np.l1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0563a extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0563a f39221d = new C0563a();

            C0563a() {
                super(3, op.e.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/selfie/databinding/Pi2SelfieInstructionsBinding;", 0);
            }

            public final op.e a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return op.e.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final b f39222d = new b();

            b() {
                super(1, l1.class, "<init>", "<init>(Lcom/withpersona/sdk2/inquiry/selfie/databinding/Pi2SelfieInstructionsBinding;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final l1 invoke(op.e p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new l1(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // en.c0
        /* renamed from: b */
        public View a(x5.d.b initialRendering, en.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f39220a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // en.c0
        public KClass getType() {
            return this.f39220a.getType();
        }

        private a() {
            k.a aVar = en.k.f21834a;
            this.f39220a = new en.z(Reflection.getOrCreateKotlinClass(x5.d.b.class), C0563a.f39221d, b.f39222d);
        }
    }

    public l1(op.e binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.f39218b = binding;
        ScrollView root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        cq.f.d(root, false, false, false, false, 15, null);
    }

    private final void e(StepStyles.SelfieStepStyle selfieStepStyle, en.a0 a0Var) {
        TextBasedComponentStyle titleStyleValue = selfieStepStyle.getTitleStyleValue();
        if (titleStyleValue != null) {
            TextView textView = this.f39218b.f42604m;
            textView.setPadding(textView.getPaddingLeft(), 0, this.f39218b.f42604m.getPaddingRight(), 0);
            TextView textviewSelfieStartTitle = this.f39218b.f42604m;
            Intrinsics.checkNotNullExpressionValue(textviewSelfieStartTitle, "textviewSelfieStartTitle");
            lq.f0.n(textviewSelfieStartTitle, titleStyleValue, null, 2, null);
        }
        TextBasedComponentStyle textStyleValue = selfieStepStyle.getTextStyleValue();
        if (textStyleValue != null) {
            TextView textView2 = this.f39218b.f42603l;
            textView2.setPadding(textView2.getPaddingLeft(), 0, this.f39218b.f42603l.getPaddingRight(), 0);
            TextView textviewSelfieStartBody = this.f39218b.f42603l;
            Intrinsics.checkNotNullExpressionValue(textviewSelfieStartBody, "textviewSelfieStartBody");
            lq.f0.n(textviewSelfieStartBody, textStyleValue, null, 2, null);
        }
        TextBasedComponentStyle disclaimerStyleValue = selfieStepStyle.getDisclaimerStyleValue();
        if (disclaimerStyleValue != null) {
            TextView textView3 = this.f39218b.f42602k;
            textView3.setPadding(textView3.getPaddingLeft(), 0, this.f39218b.f42602k.getPaddingRight(), 0);
            TextView textviewSelfieDisclosure = this.f39218b.f42602k;
            Intrinsics.checkNotNullExpressionValue(textviewSelfieDisclosure, "textviewSelfieDisclosure");
            lq.f0.n(textviewSelfieDisclosure, disclaimerStyleValue, null, 2, null);
        }
        Integer backgroundColorValue = selfieStepStyle.getBackgroundColorValue();
        if (backgroundColorValue != null) {
            int intValue = backgroundColorValue.intValue();
            this.f39218b.getRoot().setBackgroundColor(intValue);
            bq.c.a(a0Var, intValue);
        }
        Context context = this.f39218b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Drawable a10 = nq.c.a(selfieStepStyle, context);
        if (a10 != null) {
            this.f39218b.getRoot().setBackground(a10);
        }
        Integer headerButtonColorValue = selfieStepStyle.getHeaderButtonColorValue();
        if (headerButtonColorValue != null) {
            this.f39218b.f42598g.setControlsColor(headerButtonColorValue.intValue());
        }
        ButtonSubmitComponentStyle buttonPrimaryStyleValue = selfieStepStyle.getButtonPrimaryStyleValue();
        if (buttonPrimaryStyleValue != null) {
            Button startButton = this.f39218b.f42601j;
            Intrinsics.checkNotNullExpressionValue(startButton, "startButton");
            lq.e.f(startButton, buttonPrimaryStyleValue, false, false, 6, null);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void g(x5.d.b bVar, View view) {
        bVar.f().invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h(x5.d.b bVar) {
        bVar.d().invoke();
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i(x5.d.b bVar) {
        bVar.e().invoke();
        return Unit.f31765a;
    }

    private final void j(StepStyles.SelfieStepStyle selfieStepStyle) {
        if (selfieStepStyle != null) {
            ThemeableLottieAnimationView instructionAnimation = this.f39218b.f42596e;
            Intrinsics.checkNotNullExpressionValue(instructionAnimation, "instructionAnimation");
            lq.g.c(instructionAnimation, selfieStepStyle.getSelfieStartIconStyle(), new String[]{"#022050"}, new String[]{"#AA85FF"}, new String[]{"#DBCCFF"});
            return;
        }
        ThemeableLottieAnimationView themeableLottieAnimationView = this.f39218b.f42596e;
        int parseColor = Color.parseColor("#022050");
        Context context = this.f39218b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        themeableLottieAnimationView.I(parseColor, sp.s.d(context, bh.b.f6639m, null, false, 6, null));
        ThemeableLottieAnimationView themeableLottieAnimationView2 = this.f39218b.f42596e;
        int parseColor2 = Color.parseColor("#AA85FF");
        Context context2 = this.f39218b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        themeableLottieAnimationView2.I(parseColor2, sp.s.d(context2, bh.b.f6640n, null, false, 6, null));
        Context context3 = this.f39218b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context3, "getContext(...)");
        int d10 = sp.s.d(context3, bh.b.f6640n, null, false, 6, null);
        Context context4 = this.f39218b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context4, "getContext(...)");
        this.f39218b.f42596e.I(Color.parseColor("#DBCCFF"), r1.c.c(d10, sp.s.d(context4, bh.b.f6641o, null, false, 6, null), 0.66f));
    }

    @Override // en.k
    /* renamed from: f */
    public void a(final x5.d.b rendering, en.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        op.e eVar = this.f39218b;
        Context context = eVar.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Integer f10 = sp.s.f(context, kp.a.f34920t, null, false, 6, null);
        if (f10 != null) {
            this.f39218b.f42595d.setImageResource(f10.intValue());
            this.f39218b.f42595d.setVisibility(0);
        }
        eVar.f42604m.setText(rendering.j());
        eVar.f42603l.setText(rendering.g());
        jr.e.b(eVar.f42602k.getContext()).c(eVar.f42602k, rendering.a());
        eVar.f42601j.setText(rendering.h());
        eVar.f42601j.setOnClickListener(new View.OnClickListener() { // from class: np.i1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                l1.g(x5.d.b.this, view);
            }
        });
        aq.a c10 = rendering.c();
        Function0 function0 = new Function0() { // from class: np.j1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit h10;
                h10 = l1.h(x5.d.b.this);
                return h10;
            }
        };
        Function0 function02 = new Function0() { // from class: np.k1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit i10;
                i10 = l1.i(x5.d.b.this);
                return i10;
            }
        };
        Pi2NavigationBar navigationBar = eVar.f42598g;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        ScrollView root = eVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        aq.e.b(c10, function0, function02, navigationBar, root);
        Context context2 = this.f39218b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        Integer f11 = sp.s.f(context2, kp.a.f34915o, null, false, 6, null);
        if (rendering.b() != null) {
            if (this.f39219c == null) {
                RemoteImage b10 = rendering.b();
                ConstraintLayout nestedUiContainer = eVar.f42599h;
                Intrinsics.checkNotNullExpressionValue(nestedUiContainer, "nestedUiContainer");
                this.f39219c = nq.b.c(b10, nestedUiContainer, false, 2, null);
                eVar.f42596e.setVisibility(8);
            }
        } else if (f11 != null) {
            eVar.f42596e.setAnimation(f11.intValue());
            eVar.f42596e.v();
        } else {
            j(rendering.i());
        }
        if (rendering.i() != null) {
            e(rendering.i(), viewEnvironment);
        }
    }
}
