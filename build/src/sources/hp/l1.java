package hp;

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
public final class l1 implements ym.k {

    /* renamed from: d  reason: collision with root package name */
    public static final a f27335d = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final ip.e f27336b;

    /* renamed from: c  reason: collision with root package name */
    private View f27337c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements ym.c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ ym.c0 f27338a;

        /* renamed from: hp.l1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0353a extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0353a f27339d = new C0353a();

            C0353a() {
                super(3, ip.e.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/selfie/databinding/Pi2SelfieInstructionsBinding;", 0);
            }

            public final ip.e a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return ip.e.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final b f27340d = new b();

            b() {
                super(1, l1.class, "<init>", "<init>(Lcom/withpersona/sdk2/inquiry/selfie/databinding/Pi2SelfieInstructionsBinding;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final l1 invoke(ip.e p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new l1(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // ym.c0
        /* renamed from: b */
        public View a(x5.d.b initialRendering, ym.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f27338a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // ym.c0
        public KClass getType() {
            return this.f27338a.getType();
        }

        private a() {
            k.a aVar = ym.k.f54648a;
            this.f27338a = new ym.z(Reflection.getOrCreateKotlinClass(x5.d.b.class), C0353a.f27339d, b.f27340d);
        }
    }

    public l1(ip.e binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.f27336b = binding;
        ScrollView root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        wp.f.d(root, false, false, false, false, 15, null);
    }

    private final void e(StepStyles.SelfieStepStyle selfieStepStyle, ym.a0 a0Var) {
        TextBasedComponentStyle titleStyleValue = selfieStepStyle.getTitleStyleValue();
        if (titleStyleValue != null) {
            TextView textView = this.f27336b.f31023m;
            textView.setPadding(textView.getPaddingLeft(), 0, this.f27336b.f31023m.getPaddingRight(), 0);
            TextView textviewSelfieStartTitle = this.f27336b.f31023m;
            Intrinsics.checkNotNullExpressionValue(textviewSelfieStartTitle, "textviewSelfieStartTitle");
            fq.f0.n(textviewSelfieStartTitle, titleStyleValue, null, 2, null);
        }
        TextBasedComponentStyle textStyleValue = selfieStepStyle.getTextStyleValue();
        if (textStyleValue != null) {
            TextView textView2 = this.f27336b.f31022l;
            textView2.setPadding(textView2.getPaddingLeft(), 0, this.f27336b.f31022l.getPaddingRight(), 0);
            TextView textviewSelfieStartBody = this.f27336b.f31022l;
            Intrinsics.checkNotNullExpressionValue(textviewSelfieStartBody, "textviewSelfieStartBody");
            fq.f0.n(textviewSelfieStartBody, textStyleValue, null, 2, null);
        }
        TextBasedComponentStyle disclaimerStyleValue = selfieStepStyle.getDisclaimerStyleValue();
        if (disclaimerStyleValue != null) {
            TextView textView3 = this.f27336b.f31021k;
            textView3.setPadding(textView3.getPaddingLeft(), 0, this.f27336b.f31021k.getPaddingRight(), 0);
            TextView textviewSelfieDisclosure = this.f27336b.f31021k;
            Intrinsics.checkNotNullExpressionValue(textviewSelfieDisclosure, "textviewSelfieDisclosure");
            fq.f0.n(textviewSelfieDisclosure, disclaimerStyleValue, null, 2, null);
        }
        Integer backgroundColorValue = selfieStepStyle.getBackgroundColorValue();
        if (backgroundColorValue != null) {
            int intValue = backgroundColorValue.intValue();
            this.f27336b.getRoot().setBackgroundColor(intValue);
            vp.c.a(a0Var, intValue);
        }
        Context context = this.f27336b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Drawable a10 = hq.c.a(selfieStepStyle, context);
        if (a10 != null) {
            this.f27336b.getRoot().setBackground(a10);
        }
        Integer headerButtonColorValue = selfieStepStyle.getHeaderButtonColorValue();
        if (headerButtonColorValue != null) {
            this.f27336b.f31017g.setControlsColor(headerButtonColorValue.intValue());
        }
        ButtonSubmitComponentStyle buttonPrimaryStyleValue = selfieStepStyle.getButtonPrimaryStyleValue();
        if (buttonPrimaryStyleValue != null) {
            Button startButton = this.f27336b.f31020j;
            Intrinsics.checkNotNullExpressionValue(startButton, "startButton");
            fq.e.f(startButton, buttonPrimaryStyleValue, false, false, 6, null);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void g(x5.d.b bVar, View view) {
        bVar.f().invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h(x5.d.b bVar) {
        bVar.d().invoke();
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i(x5.d.b bVar) {
        bVar.e().invoke();
        return Unit.f32464a;
    }

    private final void j(StepStyles.SelfieStepStyle selfieStepStyle) {
        if (selfieStepStyle != null) {
            ThemeableLottieAnimationView instructionAnimation = this.f27336b.f31015e;
            Intrinsics.checkNotNullExpressionValue(instructionAnimation, "instructionAnimation");
            fq.g.c(instructionAnimation, selfieStepStyle.getSelfieStartIconStyle(), new String[]{"#022050"}, new String[]{"#AA85FF"}, new String[]{"#DBCCFF"});
            return;
        }
        ThemeableLottieAnimationView themeableLottieAnimationView = this.f27336b.f31015e;
        int parseColor = Color.parseColor("#022050");
        Context context = this.f27336b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        themeableLottieAnimationView.I(parseColor, mp.s.d(context, yg.b.f54101m, null, false, 6, null));
        ThemeableLottieAnimationView themeableLottieAnimationView2 = this.f27336b.f31015e;
        int parseColor2 = Color.parseColor("#AA85FF");
        Context context2 = this.f27336b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        themeableLottieAnimationView2.I(parseColor2, mp.s.d(context2, yg.b.f54102n, null, false, 6, null));
        Context context3 = this.f27336b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context3, "getContext(...)");
        int d10 = mp.s.d(context3, yg.b.f54102n, null, false, 6, null);
        Context context4 = this.f27336b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context4, "getContext(...)");
        this.f27336b.f31015e.I(Color.parseColor("#DBCCFF"), r1.c.c(d10, mp.s.d(context4, yg.b.f54103o, null, false, 6, null), 0.66f));
    }

    @Override // ym.k
    /* renamed from: f */
    public void a(final x5.d.b rendering, ym.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        ip.e eVar = this.f27336b;
        Context context = eVar.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Integer f10 = mp.s.f(context, ep.a.f22472t, null, false, 6, null);
        if (f10 != null) {
            this.f27336b.f31014d.setImageResource(f10.intValue());
            this.f27336b.f31014d.setVisibility(0);
        }
        eVar.f31023m.setText(rendering.j());
        eVar.f31022l.setText(rendering.g());
        dr.e.b(eVar.f31021k.getContext()).c(eVar.f31021k, rendering.a());
        eVar.f31020j.setText(rendering.h());
        eVar.f31020j.setOnClickListener(new View.OnClickListener() { // from class: hp.i1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                l1.g(x5.d.b.this, view);
            }
        });
        up.a c10 = rendering.c();
        Function0 function0 = new Function0() { // from class: hp.j1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit h10;
                h10 = l1.h(x5.d.b.this);
                return h10;
            }
        };
        Function0 function02 = new Function0() { // from class: hp.k1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit i10;
                i10 = l1.i(x5.d.b.this);
                return i10;
            }
        };
        Pi2NavigationBar navigationBar = eVar.f31017g;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        ScrollView root = eVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        up.e.b(c10, function0, function02, navigationBar, root);
        Context context2 = this.f27336b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        Integer f11 = mp.s.f(context2, ep.a.f22467o, null, false, 6, null);
        if (rendering.b() != null) {
            if (this.f27337c == null) {
                RemoteImage b10 = rendering.b();
                ConstraintLayout nestedUiContainer = eVar.f31018h;
                Intrinsics.checkNotNullExpressionValue(nestedUiContainer, "nestedUiContainer");
                this.f27337c = hq.b.c(b10, nestedUiContainer, false, 2, null);
                eVar.f31015e.setVisibility(8);
            }
        } else if (f11 != null) {
            eVar.f31015e.setAnimation(f11.intValue());
            eVar.f31015e.v();
        } else {
            j(rendering.i());
        }
        if (rendering.i() != null) {
            e(rendering.i(), viewEnvironment);
        }
    }
}
