package uo;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import com.google.android.material.textfield.TextInputLayout;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonSubmitComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.InputSelectComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import gn.k;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import pq.b4;
import pq.c2;
import to.f5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f0 implements gn.k {

    /* renamed from: d  reason: collision with root package name */
    public static final a f50831d = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final xo.i f50832b;

    /* renamed from: c  reason: collision with root package name */
    private final tq.k f50833c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements gn.c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ gn.c0 f50834a;

        /* renamed from: uo.f0$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0699a extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0699a f50835d = new C0699a();

            C0699a() {
                super(3, xo.i.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2GovernmentidSelectCountryAndIdClassBinding;", 0);
            }

            public final xo.i a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return xo.i.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final b f50836d = new b();

            b() {
                super(1, f0.class, "<init>", "<init>(Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2GovernmentidSelectCountryAndIdClassBinding;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final f0 invoke(xo.i p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new f0(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // gn.c0
        /* renamed from: b */
        public View a(f5.a initialRendering, gn.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f50834a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // gn.c0
        public KClass getType() {
            return this.f50834a.getType();
        }

        private a() {
            k.a aVar = gn.k.f25849a;
            this.f50834a = new gn.z(Reflection.getOrCreateKotlinClass(f5.a.class), C0699a.f50835d, b.f50836d);
        }
    }

    public f0(xo.i binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.f50832b = binding;
        CoordinatorLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        this.f50833c = new tq.k(root);
        LinearLayout contentView = binding.f55053b;
        Intrinsics.checkNotNullExpressionValue(contentView, "contentView");
        lq.f.d(contentView, false, false, false, false, 15, null);
    }

    private final void j(xo.i iVar, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, gn.a0 a0Var) {
        StepStyles.StepSubmitButtonComponentStyleContainer base;
        ButtonSubmitComponentStyle base2;
        StepStyles.InputSelectStyleContainer base3;
        InputSelectComponentStyle base4;
        StepStyles.StepTextBasedComponentStyleContainer base5;
        TextBasedComponentStyle base6;
        StepStyles.StepTextBasedComponentStyleContainer base7;
        TextBasedComponentStyle base8;
        if (governmentIdStepStyle != null) {
            Integer backgroundColorValue = governmentIdStepStyle.getBackgroundColorValue();
            if (backgroundColorValue != null) {
                int intValue = backgroundColorValue.intValue();
                iVar.getRoot().setBackgroundColor(intValue);
                kq.c.a(a0Var, intValue);
            }
            StepStyles.GovernmentIdStepTitleComponentStyle titleStyle = governmentIdStepStyle.getTitleStyle();
            if (titleStyle != null && (base7 = titleStyle.getBase()) != null && (base8 = base7.getBase()) != null) {
                TextView title = iVar.f55060i;
                Intrinsics.checkNotNullExpressionValue(title, "title");
                uq.f0.n(title, base8, null, 2, null);
            }
            StepStyles.GovernmentIdStepTextBasedComponentStyle textStyle = governmentIdStepStyle.getTextStyle();
            if (textStyle != null && (base5 = textStyle.getBase()) != null && (base6 = base5.getBase()) != null) {
                TextView countrySelectorText = iVar.f55056e;
                Intrinsics.checkNotNullExpressionValue(countrySelectorText, "countrySelectorText");
                uq.f0.n(countrySelectorText, base6, null, 2, null);
                TextView idClassSelectorText = iVar.f55058g;
                Intrinsics.checkNotNullExpressionValue(idClassSelectorText, "idClassSelectorText");
                uq.f0.n(idClassSelectorText, base6, null, 2, null);
            }
            StepStyles.GovernmentIdStepInputSelectStyle inputSelectStyle = governmentIdStepStyle.getInputSelectStyle();
            if (inputSelectStyle != null && (base3 = inputSelectStyle.getBase()) != null && (base4 = base3.getBase()) != null) {
                TextInputLayout countrySelector = iVar.f55055d;
                Intrinsics.checkNotNullExpressionValue(countrySelector, "countrySelector");
                uq.o.i(countrySelector, base4);
                TextInputLayout idClassSelector = iVar.f55057f;
                Intrinsics.checkNotNullExpressionValue(idClassSelector, "idClassSelector");
                uq.o.i(idClassSelector, base4);
            }
            StepStyles.GovernmentIdStepPrimaryButtonComponentStyle buttonPrimaryStyle = governmentIdStepStyle.getButtonPrimaryStyle();
            if (buttonPrimaryStyle != null && (base = buttonPrimaryStyle.getBase()) != null && (base2 = base.getBase()) != null) {
                Button continueButton = iVar.f55054c;
                Intrinsics.checkNotNullExpressionValue(continueButton, "continueButton");
                uq.e.f(continueButton, base2, false, false, 6, null);
            }
        }
    }

    private final void k(c2 c2Var, final Function1 function1) {
        this.f50833c.u(c2Var, new Function1() { // from class: uo.e0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit l10;
                l10 = f0.l(Function1.this, (List) obj);
                return l10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit l(Function1 function1, List selectedItems) {
        Intrinsics.checkNotNullParameter(selectedItems, "selectedItems");
        b4 b4Var = (b4) CollectionsKt.firstOrNull(selectedItems);
        if (b4Var == null) {
            return Unit.f31988a;
        }
        function1.invoke(b4Var);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n(f5.a aVar) {
        aVar.g().invoke();
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o(f5.a aVar) {
        aVar.h().invoke();
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void p(f0 f0Var, f5.a aVar, View view) {
        f0Var.k(aVar.c(), aVar.j());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void q(f0 f0Var, f5.a aVar, View view) {
        f0Var.k(aVar.c(), aVar.j());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void r(f0 f0Var, f5.a aVar, View view) {
        f0Var.k(aVar.e(), aVar.k());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void s(f0 f0Var, f5.a aVar, View view) {
        f0Var.k(aVar.e(), aVar.k());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void t(f5.a aVar, View view) {
        aVar.i().invoke();
    }

    @Override // gn.k
    /* renamed from: m */
    public void a(final f5.a rendering, gn.a0 viewEnvironment) {
        String str;
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        xo.i iVar = this.f50832b;
        jq.a f10 = rendering.f();
        Function0 function0 = new Function0() { // from class: uo.x
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit n10;
                n10 = f0.n(f5.a.this);
                return n10;
            }
        };
        Function0 function02 = new Function0() { // from class: uo.y
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit o10;
                o10 = f0.o(f5.a.this);
                return o10;
            }
        };
        Pi2NavigationBar navigationBar = iVar.f55059h;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        CoordinatorLayout root = iVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        jq.e.b(f10, function0, function02, navigationBar, root);
        iVar.f55060i.setText(rendering.m());
        b4 b4Var = (b4) CollectionsKt.firstOrNull(rendering.c().f());
        String str2 = null;
        if (b4Var != null) {
            str = b4Var.getText();
        } else {
            str = null;
        }
        iVar.f55055d.setOnClickListener(new View.OnClickListener() { // from class: uo.z
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                f0.p(f0.this, rendering, view);
            }
        });
        EditText editText = iVar.f55055d.getEditText();
        if (editText != null) {
            editText.setOnClickListener(new View.OnClickListener() { // from class: uo.a0
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    f0.q(f0.this, rendering, view);
                }
            });
        }
        EditText editText2 = iVar.f55055d.getEditText();
        if (editText2 != null) {
            editText2.setText(str);
        }
        if (str != null) {
            iVar.f55057f.setEnabled(true);
            EditText editText3 = iVar.f55057f.getEditText();
            if (editText3 != null) {
                editText3.setEnabled(true);
            }
            iVar.f55057f.setOnClickListener(new View.OnClickListener() { // from class: uo.b0
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    f0.r(f0.this, rendering, view);
                }
            });
            EditText editText4 = iVar.f55057f.getEditText();
            if (editText4 != null) {
                editText4.setOnClickListener(new View.OnClickListener() { // from class: uo.c0
                    @Override // android.view.View.OnClickListener
                    public final void onClick(View view) {
                        f0.s(f0.this, rendering, view);
                    }
                });
            }
            EditText editText5 = iVar.f55057f.getEditText();
            if (editText5 != null) {
                b4 b4Var2 = (b4) CollectionsKt.firstOrNull(rendering.e().f());
                if (b4Var2 != null) {
                    str2 = b4Var2.getText();
                }
                editText5.setText(str2);
            }
        } else {
            iVar.f55057f.setEnabled(false);
            EditText editText6 = iVar.f55057f.getEditText();
            if (editText6 != null) {
                editText6.setEnabled(false);
            }
        }
        iVar.f55056e.setText(rendering.b());
        iVar.f55058g.setText(rendering.d());
        iVar.f55054c.setEnabled(rendering.n());
        iVar.f55054c.setOnClickListener(new View.OnClickListener() { // from class: uo.d0
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                f0.t(f5.a.this, view);
            }
        });
        iVar.f55054c.setText(rendering.a());
        j(iVar, rendering.l(), viewEnvironment);
    }
}
