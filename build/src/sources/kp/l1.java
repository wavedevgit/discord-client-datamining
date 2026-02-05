package kp;

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
import bn.k;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonSubmitComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import kp.x5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l1 implements bn.k {

    /* renamed from: d  reason: collision with root package name */
    public static final a f35328d = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final lp.e f35329b;

    /* renamed from: c  reason: collision with root package name */
    private View f35330c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements bn.c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ bn.c0 f35331a;

        /* renamed from: kp.l1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0455a extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0455a f35332d = new C0455a();

            C0455a() {
                super(3, lp.e.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/selfie/databinding/Pi2SelfieInstructionsBinding;", 0);
            }

            public final lp.e a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return lp.e.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final b f35333d = new b();

            b() {
                super(1, l1.class, "<init>", "<init>(Lcom/withpersona/sdk2/inquiry/selfie/databinding/Pi2SelfieInstructionsBinding;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final l1 invoke(lp.e p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new l1(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // bn.c0
        /* renamed from: b */
        public View a(x5.d.b initialRendering, bn.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f35331a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // bn.c0
        public KClass getType() {
            return this.f35331a.getType();
        }

        private a() {
            k.a aVar = bn.k.f6590a;
            this.f35331a = new bn.z(Reflection.getOrCreateKotlinClass(x5.d.b.class), C0455a.f35332d, b.f35333d);
        }
    }

    public l1(lp.e binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.f35329b = binding;
        ScrollView root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        zp.f.d(root, false, false, false, false, 15, null);
    }

    private final void e(StepStyles.SelfieStepStyle selfieStepStyle, bn.a0 a0Var) {
        TextBasedComponentStyle titleStyleValue = selfieStepStyle.getTitleStyleValue();
        if (titleStyleValue != null) {
            TextView textView = this.f35329b.f37173m;
            textView.setPadding(textView.getPaddingLeft(), 0, this.f35329b.f37173m.getPaddingRight(), 0);
            TextView textviewSelfieStartTitle = this.f35329b.f37173m;
            Intrinsics.checkNotNullExpressionValue(textviewSelfieStartTitle, "textviewSelfieStartTitle");
            iq.f0.n(textviewSelfieStartTitle, titleStyleValue, null, 2, null);
        }
        TextBasedComponentStyle textStyleValue = selfieStepStyle.getTextStyleValue();
        if (textStyleValue != null) {
            TextView textView2 = this.f35329b.f37172l;
            textView2.setPadding(textView2.getPaddingLeft(), 0, this.f35329b.f37172l.getPaddingRight(), 0);
            TextView textviewSelfieStartBody = this.f35329b.f37172l;
            Intrinsics.checkNotNullExpressionValue(textviewSelfieStartBody, "textviewSelfieStartBody");
            iq.f0.n(textviewSelfieStartBody, textStyleValue, null, 2, null);
        }
        TextBasedComponentStyle disclaimerStyleValue = selfieStepStyle.getDisclaimerStyleValue();
        if (disclaimerStyleValue != null) {
            TextView textView3 = this.f35329b.f37171k;
            textView3.setPadding(textView3.getPaddingLeft(), 0, this.f35329b.f37171k.getPaddingRight(), 0);
            TextView textviewSelfieDisclosure = this.f35329b.f37171k;
            Intrinsics.checkNotNullExpressionValue(textviewSelfieDisclosure, "textviewSelfieDisclosure");
            iq.f0.n(textviewSelfieDisclosure, disclaimerStyleValue, null, 2, null);
        }
        Integer backgroundColorValue = selfieStepStyle.getBackgroundColorValue();
        if (backgroundColorValue != null) {
            int intValue = backgroundColorValue.intValue();
            this.f35329b.getRoot().setBackgroundColor(intValue);
            yp.c.a(a0Var, intValue);
        }
        Context context = this.f35329b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Drawable a10 = kq.c.a(selfieStepStyle, context);
        if (a10 != null) {
            this.f35329b.getRoot().setBackground(a10);
        }
        Integer headerButtonColorValue = selfieStepStyle.getHeaderButtonColorValue();
        if (headerButtonColorValue != null) {
            this.f35329b.f37167g.setControlsColor(headerButtonColorValue.intValue());
        }
        ButtonSubmitComponentStyle buttonPrimaryStyleValue = selfieStepStyle.getButtonPrimaryStyleValue();
        if (buttonPrimaryStyleValue != null) {
            Button startButton = this.f35329b.f37170j;
            Intrinsics.checkNotNullExpressionValue(startButton, "startButton");
            iq.e.f(startButton, buttonPrimaryStyleValue, false, false, 6, null);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void g(x5.d.b bVar, View view) {
        bVar.f().invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h(x5.d.b bVar) {
        bVar.d().invoke();
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i(x5.d.b bVar) {
        bVar.e().invoke();
        return Unit.f31988a;
    }

    private final void j(StepStyles.SelfieStepStyle selfieStepStyle) {
        if (selfieStepStyle != null) {
            ThemeableLottieAnimationView instructionAnimation = this.f35329b.f37165e;
            Intrinsics.checkNotNullExpressionValue(instructionAnimation, "instructionAnimation");
            iq.g.c(instructionAnimation, selfieStepStyle.getSelfieStartIconStyle(), new String[]{"#022050"}, new String[]{"#AA85FF"}, new String[]{"#DBCCFF"});
            return;
        }
        ThemeableLottieAnimationView themeableLottieAnimationView = this.f35329b.f37165e;
        int parseColor = Color.parseColor("#022050");
        Context context = this.f35329b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        themeableLottieAnimationView.I(parseColor, pp.s.d(context, zg.b.f55556m, null, false, 6, null));
        ThemeableLottieAnimationView themeableLottieAnimationView2 = this.f35329b.f37165e;
        int parseColor2 = Color.parseColor("#AA85FF");
        Context context2 = this.f35329b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        themeableLottieAnimationView2.I(parseColor2, pp.s.d(context2, zg.b.f55557n, null, false, 6, null));
        Context context3 = this.f35329b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context3, "getContext(...)");
        int d10 = pp.s.d(context3, zg.b.f55557n, null, false, 6, null);
        Context context4 = this.f35329b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context4, "getContext(...)");
        this.f35329b.f37165e.I(Color.parseColor("#DBCCFF"), r1.c.c(d10, pp.s.d(context4, zg.b.f55558o, null, false, 6, null), 0.66f));
    }

    @Override // bn.k
    /* renamed from: f */
    public void a(final x5.d.b rendering, bn.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        lp.e eVar = this.f35329b;
        Context context = eVar.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Integer f10 = pp.s.f(context, hp.a.f26784t, null, false, 6, null);
        if (f10 != null) {
            this.f35329b.f37164d.setImageResource(f10.intValue());
            this.f35329b.f37164d.setVisibility(0);
        }
        eVar.f37173m.setText(rendering.j());
        eVar.f37172l.setText(rendering.g());
        gr.e.b(eVar.f37171k.getContext()).c(eVar.f37171k, rendering.a());
        eVar.f37170j.setText(rendering.h());
        eVar.f37170j.setOnClickListener(new View.OnClickListener() { // from class: kp.i1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                l1.g(x5.d.b.this, view);
            }
        });
        xp.a c10 = rendering.c();
        Function0 function0 = new Function0() { // from class: kp.j1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit h10;
                h10 = l1.h(x5.d.b.this);
                return h10;
            }
        };
        Function0 function02 = new Function0() { // from class: kp.k1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit i10;
                i10 = l1.i(x5.d.b.this);
                return i10;
            }
        };
        Pi2NavigationBar navigationBar = eVar.f37167g;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        ScrollView root = eVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        xp.e.b(c10, function0, function02, navigationBar, root);
        Context context2 = this.f35329b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        Integer f11 = pp.s.f(context2, hp.a.f26779o, null, false, 6, null);
        if (rendering.b() != null) {
            if (this.f35330c == null) {
                RemoteImage b10 = rendering.b();
                ConstraintLayout nestedUiContainer = eVar.f37168h;
                Intrinsics.checkNotNullExpressionValue(nestedUiContainer, "nestedUiContainer");
                this.f35330c = kq.b.c(b10, nestedUiContainer, false, 2, null);
                eVar.f37165e.setVisibility(8);
            }
        } else if (f11 != null) {
            eVar.f37165e.setAnimation(f11.intValue());
            eVar.f37165e.v();
        } else {
            j(rendering.i());
        }
        if (rendering.i() != null) {
            e(rendering.i(), viewEnvironment);
        }
    }
}
