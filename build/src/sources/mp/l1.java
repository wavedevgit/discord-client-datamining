package mp;

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
public final class l1 implements dn.k {

    /* renamed from: d  reason: collision with root package name */
    public static final a f37484d = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final np.e f37485b;

    /* renamed from: c  reason: collision with root package name */
    private View f37486c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements dn.c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ dn.c0 f37487a;

        /* renamed from: mp.l1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0509a extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0509a f37488d = new C0509a();

            C0509a() {
                super(3, np.e.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/selfie/databinding/Pi2SelfieInstructionsBinding;", 0);
            }

            public final np.e a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return np.e.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final b f37489d = new b();

            b() {
                super(1, l1.class, "<init>", "<init>(Lcom/withpersona/sdk2/inquiry/selfie/databinding/Pi2SelfieInstructionsBinding;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final l1 invoke(np.e p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new l1(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // dn.c0
        /* renamed from: b */
        public View a(x5.d.b initialRendering, dn.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f37487a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // dn.c0
        public KClass getType() {
            return this.f37487a.getType();
        }

        private a() {
            k.a aVar = dn.k.f20913a;
            this.f37487a = new dn.z(Reflection.getOrCreateKotlinClass(x5.d.b.class), C0509a.f37488d, b.f37489d);
        }
    }

    public l1(np.e binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.f37485b = binding;
        ScrollView root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        bq.f.d(root, false, false, false, false, 15, null);
    }

    private final void e(StepStyles.SelfieStepStyle selfieStepStyle, dn.a0 a0Var) {
        TextBasedComponentStyle titleStyleValue = selfieStepStyle.getTitleStyleValue();
        if (titleStyleValue != null) {
            TextView textView = this.f37485b.f41129m;
            textView.setPadding(textView.getPaddingLeft(), 0, this.f37485b.f41129m.getPaddingRight(), 0);
            TextView textviewSelfieStartTitle = this.f37485b.f41129m;
            Intrinsics.checkNotNullExpressionValue(textviewSelfieStartTitle, "textviewSelfieStartTitle");
            kq.f0.n(textviewSelfieStartTitle, titleStyleValue, null, 2, null);
        }
        TextBasedComponentStyle textStyleValue = selfieStepStyle.getTextStyleValue();
        if (textStyleValue != null) {
            TextView textView2 = this.f37485b.f41128l;
            textView2.setPadding(textView2.getPaddingLeft(), 0, this.f37485b.f41128l.getPaddingRight(), 0);
            TextView textviewSelfieStartBody = this.f37485b.f41128l;
            Intrinsics.checkNotNullExpressionValue(textviewSelfieStartBody, "textviewSelfieStartBody");
            kq.f0.n(textviewSelfieStartBody, textStyleValue, null, 2, null);
        }
        TextBasedComponentStyle disclaimerStyleValue = selfieStepStyle.getDisclaimerStyleValue();
        if (disclaimerStyleValue != null) {
            TextView textView3 = this.f37485b.f41127k;
            textView3.setPadding(textView3.getPaddingLeft(), 0, this.f37485b.f41127k.getPaddingRight(), 0);
            TextView textviewSelfieDisclosure = this.f37485b.f41127k;
            Intrinsics.checkNotNullExpressionValue(textviewSelfieDisclosure, "textviewSelfieDisclosure");
            kq.f0.n(textviewSelfieDisclosure, disclaimerStyleValue, null, 2, null);
        }
        Integer backgroundColorValue = selfieStepStyle.getBackgroundColorValue();
        if (backgroundColorValue != null) {
            int intValue = backgroundColorValue.intValue();
            this.f37485b.getRoot().setBackgroundColor(intValue);
            aq.c.a(a0Var, intValue);
        }
        Context context = this.f37485b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Drawable a10 = mq.c.a(selfieStepStyle, context);
        if (a10 != null) {
            this.f37485b.getRoot().setBackground(a10);
        }
        Integer headerButtonColorValue = selfieStepStyle.getHeaderButtonColorValue();
        if (headerButtonColorValue != null) {
            this.f37485b.f41123g.setControlsColor(headerButtonColorValue.intValue());
        }
        ButtonSubmitComponentStyle buttonPrimaryStyleValue = selfieStepStyle.getButtonPrimaryStyleValue();
        if (buttonPrimaryStyleValue != null) {
            Button startButton = this.f37485b.f41126j;
            Intrinsics.checkNotNullExpressionValue(startButton, "startButton");
            kq.e.f(startButton, buttonPrimaryStyleValue, false, false, 6, null);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void g(x5.d.b bVar, View view) {
        bVar.f().invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h(x5.d.b bVar) {
        bVar.d().invoke();
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i(x5.d.b bVar) {
        bVar.e().invoke();
        return Unit.f32008a;
    }

    private final void j(StepStyles.SelfieStepStyle selfieStepStyle) {
        if (selfieStepStyle != null) {
            ThemeableLottieAnimationView instructionAnimation = this.f37485b.f41121e;
            Intrinsics.checkNotNullExpressionValue(instructionAnimation, "instructionAnimation");
            kq.g.c(instructionAnimation, selfieStepStyle.getSelfieStartIconStyle(), new String[]{"#022050"}, new String[]{"#AA85FF"}, new String[]{"#DBCCFF"});
            return;
        }
        ThemeableLottieAnimationView themeableLottieAnimationView = this.f37485b.f41121e;
        int parseColor = Color.parseColor("#022050");
        Context context = this.f37485b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        themeableLottieAnimationView.I(parseColor, rp.s.d(context, ah.b.f651m, null, false, 6, null));
        ThemeableLottieAnimationView themeableLottieAnimationView2 = this.f37485b.f41121e;
        int parseColor2 = Color.parseColor("#AA85FF");
        Context context2 = this.f37485b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        themeableLottieAnimationView2.I(parseColor2, rp.s.d(context2, ah.b.f652n, null, false, 6, null));
        Context context3 = this.f37485b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context3, "getContext(...)");
        int d10 = rp.s.d(context3, ah.b.f652n, null, false, 6, null);
        Context context4 = this.f37485b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context4, "getContext(...)");
        this.f37485b.f41121e.I(Color.parseColor("#DBCCFF"), r1.c.c(d10, rp.s.d(context4, ah.b.f653o, null, false, 6, null), 0.66f));
    }

    @Override // dn.k
    /* renamed from: f */
    public void a(final x5.d.b rendering, dn.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        np.e eVar = this.f37485b;
        Context context = eVar.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Integer f10 = rp.s.f(context, jp.a.f30780t, null, false, 6, null);
        if (f10 != null) {
            this.f37485b.f41120d.setImageResource(f10.intValue());
            this.f37485b.f41120d.setVisibility(0);
        }
        eVar.f41129m.setText(rendering.j());
        eVar.f41128l.setText(rendering.g());
        ir.e.b(eVar.f41127k.getContext()).c(eVar.f41127k, rendering.a());
        eVar.f41126j.setText(rendering.h());
        eVar.f41126j.setOnClickListener(new View.OnClickListener() { // from class: mp.i1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                l1.g(x5.d.b.this, view);
            }
        });
        zp.a c10 = rendering.c();
        Function0 function0 = new Function0() { // from class: mp.j1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit h10;
                h10 = l1.h(x5.d.b.this);
                return h10;
            }
        };
        Function0 function02 = new Function0() { // from class: mp.k1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit i10;
                i10 = l1.i(x5.d.b.this);
                return i10;
            }
        };
        Pi2NavigationBar navigationBar = eVar.f41123g;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        ScrollView root = eVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        zp.e.b(c10, function0, function02, navigationBar, root);
        Context context2 = this.f37485b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        Integer f11 = rp.s.f(context2, jp.a.f30775o, null, false, 6, null);
        if (rendering.b() != null) {
            if (this.f37486c == null) {
                RemoteImage b10 = rendering.b();
                ConstraintLayout nestedUiContainer = eVar.f41124h;
                Intrinsics.checkNotNullExpressionValue(nestedUiContainer, "nestedUiContainer");
                this.f37486c = mq.b.c(b10, nestedUiContainer, false, 2, null);
                eVar.f41121e.setVisibility(8);
            }
        } else if (f11 != null) {
            eVar.f41121e.setAnimation(f11.intValue());
            eVar.f41121e.v();
        } else {
            j(rendering.i());
        }
        if (rendering.i() != null) {
            e(rendering.i(), viewEnvironment);
        }
    }
}
