package fo;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonSubmitComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.LocalImageComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import ym.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w implements ym.b {

    /* renamed from: d  reason: collision with root package name */
    private final String f24308d;

    /* renamed from: e  reason: collision with root package name */
    private final String f24309e;

    /* renamed from: i  reason: collision with root package name */
    private final StepStyles.GovernmentIdStepStyle f24310i;

    /* renamed from: o  reason: collision with root package name */
    private final up.a f24311o;

    /* renamed from: p  reason: collision with root package name */
    private final Function0 f24312p;

    /* renamed from: q  reason: collision with root package name */
    private final Function0 f24313q;

    /* renamed from: r  reason: collision with root package name */
    private final Function0 f24314r;

    /* renamed from: s  reason: collision with root package name */
    private final ym.c0 f24315s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f24316d = new a();

        a() {
            super(3, io.a.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2ErrorBinding;", 0);
        }

        public final io.a a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return io.a.c(p02, viewGroup, z10);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
        }
    }

    public w(String str, String str2, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, up.a navigationState, Function0 onContinueClick, Function0 onBackClick, Function0 onCancelClick) {
        Intrinsics.checkNotNullParameter(navigationState, "navigationState");
        Intrinsics.checkNotNullParameter(onContinueClick, "onContinueClick");
        Intrinsics.checkNotNullParameter(onBackClick, "onBackClick");
        Intrinsics.checkNotNullParameter(onCancelClick, "onCancelClick");
        this.f24308d = str;
        this.f24309e = str2;
        this.f24310i = governmentIdStepStyle;
        this.f24311o = navigationState;
        this.f24312p = onContinueClick;
        this.f24313q = onBackClick;
        this.f24314r = onCancelClick;
        k.a aVar = ym.k.f54648a;
        this.f24315s = new ym.z(Reflection.getOrCreateKotlinClass(w.class), a.f24316d, new Function1() { // from class: fo.q
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                ym.k i10;
                i10 = w.i(w.this, (io.a) obj);
                return i10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ym.k i(final w wVar, final io.a binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        CoordinatorLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        wp.f.d(root, false, false, false, false, 15, null);
        return new ym.k() { // from class: fo.r
            @Override // ym.k
            public final void a(Object obj, ym.a0 a0Var) {
                w.j(io.a.this, wVar, (w) obj, a0Var);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(final io.a aVar, final w wVar, final w rendering, ym.a0 viewEnvironment) {
        final LocalImageComponentStyle localImageComponentStyle;
        StepStyles.GovernmentIdStepImageLocalStyle imageLocalStyle;
        StepStyles.GovernmentIdStepImageLocalStyleContainer illustration;
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        up.a aVar2 = rendering.f24311o;
        Function0 function0 = new Function0() { // from class: fo.s
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit k10;
                k10 = w.k(w.this);
                return k10;
            }
        };
        Function0 function02 = new Function0() { // from class: fo.t
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit l10;
                l10 = w.l(w.this);
                return l10;
            }
        };
        Pi2NavigationBar navigationBar = aVar.f28521e;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        CoordinatorLayout root = aVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        up.e.b(aVar2, function0, function02, navigationBar, root);
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = rendering.f24310i;
        if (governmentIdStepStyle != null && (imageLocalStyle = governmentIdStepStyle.getImageLocalStyle()) != null && (illustration = imageLocalStyle.getIllustration()) != null) {
            localImageComponentStyle = illustration.getBase();
        } else {
            localImageComponentStyle = null;
        }
        aVar.f28520d.setAnimation(mp.o.f39016i);
        if (localImageComponentStyle != null) {
            CoordinatorLayout root2 = aVar.getRoot();
            Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
            wp.s.b(root2, new Function0() { // from class: fo.u
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit m10;
                    m10 = w.m(io.a.this, localImageComponentStyle);
                    return m10;
                }
            });
        }
        aVar.f28522f.setText(rendering.f24308d);
        aVar.f28519c.setText(rendering.f24309e);
        aVar.f28519c.setOnClickListener(new View.OnClickListener() { // from class: fo.v
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                w.n(w.this, view);
            }
        });
        Intrinsics.checkNotNull(aVar);
        wVar.h(aVar, rendering.f24310i, viewEnvironment);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k(w wVar) {
        wVar.f24313q.invoke();
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l(w wVar) {
        wVar.f24314r.invoke();
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(io.a aVar, LocalImageComponentStyle localImageComponentStyle) {
        ThemeableLottieAnimationView illustration = aVar.f28520d;
        Intrinsics.checkNotNullExpressionValue(illustration, "illustration");
        fq.g.c(illustration, localImageComponentStyle, new String[]{"#190051"}, new String[]{"#AA84FF"}, new String[0]);
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void n(w wVar, View view) {
        wVar.f24312p.invoke();
    }

    @Override // ym.b
    public ym.c0 a() {
        return this.f24315s;
    }

    public final void h(io.a aVar, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, ym.a0 viewEnvironment) {
        StepStyles.StepSubmitButtonComponentStyleContainer base;
        ButtonSubmitComponentStyle base2;
        StepStyles.StepTextBasedComponentStyleContainer base3;
        TextBasedComponentStyle base4;
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        if (governmentIdStepStyle != null) {
            Integer backgroundColorValue = governmentIdStepStyle.getBackgroundColorValue();
            if (backgroundColorValue != null) {
                int intValue = backgroundColorValue.intValue();
                aVar.getRoot().setBackgroundColor(intValue);
                vp.c.a(viewEnvironment, intValue);
            }
            StepStyles.GovernmentIdStepTitleComponentStyle titleStyle = governmentIdStepStyle.getTitleStyle();
            if (titleStyle != null && (base3 = titleStyle.getBase()) != null && (base4 = base3.getBase()) != null) {
                TextView title = aVar.f28522f;
                Intrinsics.checkNotNullExpressionValue(title, "title");
                fq.f0.n(title, base4, null, 2, null);
            }
            StepStyles.GovernmentIdStepPrimaryButtonComponentStyle buttonPrimaryStyle = governmentIdStepStyle.getButtonPrimaryStyle();
            if (buttonPrimaryStyle != null && (base = buttonPrimaryStyle.getBase()) != null && (base2 = base.getBase()) != null) {
                Button continueButton = aVar.f28519c;
                Intrinsics.checkNotNullExpressionValue(continueButton, "continueButton");
                fq.e.f(continueButton, base2, false, false, 6, null);
            }
        }
    }
}
