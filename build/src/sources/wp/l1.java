package wp;

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
public final class l1 implements gn.k {

    /* renamed from: d  reason: collision with root package name */
    public static final a f53167d = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final xp.e f53168b;

    /* renamed from: c  reason: collision with root package name */
    private View f53169c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements gn.c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ gn.c0 f53170a;

        /* renamed from: wp.l1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0742a extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0742a f53171d = new C0742a();

            C0742a() {
                super(3, xp.e.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/selfie/databinding/Pi2SelfieInstructionsBinding;", 0);
            }

            public final xp.e a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return xp.e.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final b f53172d = new b();

            b() {
                super(1, l1.class, "<init>", "<init>(Lcom/withpersona/sdk2/inquiry/selfie/databinding/Pi2SelfieInstructionsBinding;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final l1 invoke(xp.e p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new l1(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // gn.c0
        /* renamed from: b */
        public View a(x5.d.b initialRendering, gn.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f53170a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // gn.c0
        public KClass getType() {
            return this.f53170a.getType();
        }

        private a() {
            k.a aVar = gn.k.f25848a;
            this.f53170a = new gn.z(Reflection.getOrCreateKotlinClass(x5.d.b.class), C0742a.f53171d, b.f53172d);
        }
    }

    public l1(xp.e binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.f53168b = binding;
        ScrollView root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        lq.f.d(root, false, false, false, false, 15, null);
    }

    private final void e(StepStyles.SelfieStepStyle selfieStepStyle, gn.a0 a0Var) {
        TextBasedComponentStyle titleStyleValue = selfieStepStyle.getTitleStyleValue();
        if (titleStyleValue != null) {
            TextView textView = this.f53168b.f55127m;
            textView.setPadding(textView.getPaddingLeft(), 0, this.f53168b.f55127m.getPaddingRight(), 0);
            TextView textviewSelfieStartTitle = this.f53168b.f55127m;
            Intrinsics.checkNotNullExpressionValue(textviewSelfieStartTitle, "textviewSelfieStartTitle");
            uq.f0.n(textviewSelfieStartTitle, titleStyleValue, null, 2, null);
        }
        TextBasedComponentStyle textStyleValue = selfieStepStyle.getTextStyleValue();
        if (textStyleValue != null) {
            TextView textView2 = this.f53168b.f55126l;
            textView2.setPadding(textView2.getPaddingLeft(), 0, this.f53168b.f55126l.getPaddingRight(), 0);
            TextView textviewSelfieStartBody = this.f53168b.f55126l;
            Intrinsics.checkNotNullExpressionValue(textviewSelfieStartBody, "textviewSelfieStartBody");
            uq.f0.n(textviewSelfieStartBody, textStyleValue, null, 2, null);
        }
        TextBasedComponentStyle disclaimerStyleValue = selfieStepStyle.getDisclaimerStyleValue();
        if (disclaimerStyleValue != null) {
            TextView textView3 = this.f53168b.f55125k;
            textView3.setPadding(textView3.getPaddingLeft(), 0, this.f53168b.f55125k.getPaddingRight(), 0);
            TextView textviewSelfieDisclosure = this.f53168b.f55125k;
            Intrinsics.checkNotNullExpressionValue(textviewSelfieDisclosure, "textviewSelfieDisclosure");
            uq.f0.n(textviewSelfieDisclosure, disclaimerStyleValue, null, 2, null);
        }
        Integer backgroundColorValue = selfieStepStyle.getBackgroundColorValue();
        if (backgroundColorValue != null) {
            int intValue = backgroundColorValue.intValue();
            this.f53168b.getRoot().setBackgroundColor(intValue);
            kq.c.a(a0Var, intValue);
        }
        Context context = this.f53168b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Drawable a10 = wq.c.a(selfieStepStyle, context);
        if (a10 != null) {
            this.f53168b.getRoot().setBackground(a10);
        }
        Integer headerButtonColorValue = selfieStepStyle.getHeaderButtonColorValue();
        if (headerButtonColorValue != null) {
            this.f53168b.f55121g.setControlsColor(headerButtonColorValue.intValue());
        }
        ButtonSubmitComponentStyle buttonPrimaryStyleValue = selfieStepStyle.getButtonPrimaryStyleValue();
        if (buttonPrimaryStyleValue != null) {
            Button startButton = this.f53168b.f55124j;
            Intrinsics.checkNotNullExpressionValue(startButton, "startButton");
            uq.e.f(startButton, buttonPrimaryStyleValue, false, false, 6, null);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void g(x5.d.b bVar, View view) {
        bVar.f().invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h(x5.d.b bVar) {
        bVar.d().invoke();
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit i(x5.d.b bVar) {
        bVar.e().invoke();
        return Unit.f31987a;
    }

    private final void j(StepStyles.SelfieStepStyle selfieStepStyle) {
        if (selfieStepStyle != null) {
            ThemeableLottieAnimationView instructionAnimation = this.f53168b.f55119e;
            Intrinsics.checkNotNullExpressionValue(instructionAnimation, "instructionAnimation");
            uq.g.c(instructionAnimation, selfieStepStyle.getSelfieStartIconStyle(), new String[]{"#022050"}, new String[]{"#AA85FF"}, new String[]{"#DBCCFF"});
            return;
        }
        ThemeableLottieAnimationView themeableLottieAnimationView = this.f53168b.f55119e;
        int parseColor = Color.parseColor("#022050");
        Context context = this.f53168b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        themeableLottieAnimationView.I(parseColor, bq.s.d(context, bh.b.f6745l, null, false, 6, null));
        ThemeableLottieAnimationView themeableLottieAnimationView2 = this.f53168b.f55119e;
        int parseColor2 = Color.parseColor("#AA85FF");
        Context context2 = this.f53168b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        themeableLottieAnimationView2.I(parseColor2, bq.s.d(context2, bh.b.f6747m, null, false, 6, null));
        Context context3 = this.f53168b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context3, "getContext(...)");
        int d10 = bq.s.d(context3, bh.b.f6747m, null, false, 6, null);
        Context context4 = this.f53168b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context4, "getContext(...)");
        this.f53168b.f55119e.I(Color.parseColor("#DBCCFF"), r1.c.c(d10, bq.s.d(context4, bh.b.f6751o, null, false, 6, null), 0.66f));
    }

    @Override // gn.k
    /* renamed from: f */
    public void a(final x5.d.b rendering, gn.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        xp.e eVar = this.f53168b;
        Context context = eVar.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Integer f10 = bq.s.f(context, tp.a.f49771t, null, false, 6, null);
        if (f10 != null) {
            this.f53168b.f55118d.setImageResource(f10.intValue());
            this.f53168b.f55118d.setVisibility(0);
        }
        eVar.f55127m.setText(rendering.j());
        eVar.f55126l.setText(rendering.g());
        sr.e.b(eVar.f55125k.getContext()).c(eVar.f55125k, rendering.a());
        eVar.f55124j.setText(rendering.h());
        eVar.f55124j.setOnClickListener(new View.OnClickListener() { // from class: wp.i1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                l1.g(x5.d.b.this, view);
            }
        });
        jq.a c10 = rendering.c();
        Function0 function0 = new Function0() { // from class: wp.j1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit h10;
                h10 = l1.h(x5.d.b.this);
                return h10;
            }
        };
        Function0 function02 = new Function0() { // from class: wp.k1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit i10;
                i10 = l1.i(x5.d.b.this);
                return i10;
            }
        };
        Pi2NavigationBar navigationBar = eVar.f55121g;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        ScrollView root = eVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        jq.e.b(c10, function0, function02, navigationBar, root);
        Context context2 = this.f53168b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        Integer f11 = bq.s.f(context2, tp.a.f49766o, null, false, 6, null);
        if (rendering.b() != null) {
            if (this.f53169c == null) {
                RemoteImage b10 = rendering.b();
                ConstraintLayout nestedUiContainer = eVar.f55122h;
                Intrinsics.checkNotNullExpressionValue(nestedUiContainer, "nestedUiContainer");
                this.f53169c = wq.b.c(b10, nestedUiContainer, false, 2, null);
                eVar.f55119e.setVisibility(8);
            }
        } else if (f11 != null) {
            eVar.f55119e.setAnimation(f11.intValue());
            eVar.f55119e.v();
        } else {
            j(rendering.i());
        }
        if (rendering.i() != null) {
            e(rendering.i(), viewEnvironment);
        }
    }
}
