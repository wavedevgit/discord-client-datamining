package lo;

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
import en.k;
import gq.b4;
import gq.c2;
import java.util.List;
import ko.f5;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f0 implements en.k {

    /* renamed from: d  reason: collision with root package name */
    public static final a f36225d = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final oo.i f36226b;

    /* renamed from: c  reason: collision with root package name */
    private final kq.k f36227c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements en.c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ en.c0 f36228a;

        /* renamed from: lo.f0$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0515a extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0515a f36229d = new C0515a();

            C0515a() {
                super(3, oo.i.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2GovernmentidSelectCountryAndIdClassBinding;", 0);
            }

            public final oo.i a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return oo.i.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final b f36230d = new b();

            b() {
                super(1, f0.class, "<init>", "<init>(Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2GovernmentidSelectCountryAndIdClassBinding;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final f0 invoke(oo.i p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new f0(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // en.c0
        /* renamed from: b */
        public View a(f5.a initialRendering, en.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f36228a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // en.c0
        public KClass getType() {
            return this.f36228a.getType();
        }

        private a() {
            k.a aVar = en.k.f21834a;
            this.f36228a = new en.z(Reflection.getOrCreateKotlinClass(f5.a.class), C0515a.f36229d, b.f36230d);
        }
    }

    public f0(oo.i binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.f36226b = binding;
        CoordinatorLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        this.f36227c = new kq.k(root);
        LinearLayout contentView = binding.f42529b;
        Intrinsics.checkNotNullExpressionValue(contentView, "contentView");
        cq.f.d(contentView, false, false, false, false, 15, null);
    }

    private final void j(oo.i iVar, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, en.a0 a0Var) {
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
                bq.c.a(a0Var, intValue);
            }
            StepStyles.GovernmentIdStepTitleComponentStyle titleStyle = governmentIdStepStyle.getTitleStyle();
            if (titleStyle != null && (base7 = titleStyle.getBase()) != null && (base8 = base7.getBase()) != null) {
                TextView title = iVar.f42536i;
                Intrinsics.checkNotNullExpressionValue(title, "title");
                lq.f0.n(title, base8, null, 2, null);
            }
            StepStyles.GovernmentIdStepTextBasedComponentStyle textStyle = governmentIdStepStyle.getTextStyle();
            if (textStyle != null && (base5 = textStyle.getBase()) != null && (base6 = base5.getBase()) != null) {
                TextView countrySelectorText = iVar.f42532e;
                Intrinsics.checkNotNullExpressionValue(countrySelectorText, "countrySelectorText");
                lq.f0.n(countrySelectorText, base6, null, 2, null);
                TextView idClassSelectorText = iVar.f42534g;
                Intrinsics.checkNotNullExpressionValue(idClassSelectorText, "idClassSelectorText");
                lq.f0.n(idClassSelectorText, base6, null, 2, null);
            }
            StepStyles.GovernmentIdStepInputSelectStyle inputSelectStyle = governmentIdStepStyle.getInputSelectStyle();
            if (inputSelectStyle != null && (base3 = inputSelectStyle.getBase()) != null && (base4 = base3.getBase()) != null) {
                TextInputLayout countrySelector = iVar.f42531d;
                Intrinsics.checkNotNullExpressionValue(countrySelector, "countrySelector");
                lq.o.i(countrySelector, base4);
                TextInputLayout idClassSelector = iVar.f42533f;
                Intrinsics.checkNotNullExpressionValue(idClassSelector, "idClassSelector");
                lq.o.i(idClassSelector, base4);
            }
            StepStyles.GovernmentIdStepPrimaryButtonComponentStyle buttonPrimaryStyle = governmentIdStepStyle.getButtonPrimaryStyle();
            if (buttonPrimaryStyle != null && (base = buttonPrimaryStyle.getBase()) != null && (base2 = base.getBase()) != null) {
                Button continueButton = iVar.f42530c;
                Intrinsics.checkNotNullExpressionValue(continueButton, "continueButton");
                lq.e.f(continueButton, base2, false, false, 6, null);
            }
        }
    }

    private final void k(c2 c2Var, final Function1 function1) {
        this.f36227c.u(c2Var, new Function1() { // from class: lo.e0
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
            return Unit.f31765a;
        }
        function1.invoke(b4Var);
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n(f5.a aVar) {
        aVar.g().invoke();
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit o(f5.a aVar) {
        aVar.h().invoke();
        return Unit.f31765a;
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

    @Override // en.k
    /* renamed from: m */
    public void a(final f5.a rendering, en.a0 viewEnvironment) {
        String str;
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        oo.i iVar = this.f36226b;
        aq.a f10 = rendering.f();
        Function0 function0 = new Function0() { // from class: lo.x
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit n10;
                n10 = f0.n(f5.a.this);
                return n10;
            }
        };
        Function0 function02 = new Function0() { // from class: lo.y
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit o10;
                o10 = f0.o(f5.a.this);
                return o10;
            }
        };
        Pi2NavigationBar navigationBar = iVar.f42535h;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        CoordinatorLayout root = iVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        aq.e.b(f10, function0, function02, navigationBar, root);
        iVar.f42536i.setText(rendering.m());
        b4 b4Var = (b4) CollectionsKt.firstOrNull(rendering.c().f());
        String str2 = null;
        if (b4Var != null) {
            str = b4Var.getText();
        } else {
            str = null;
        }
        iVar.f42531d.setOnClickListener(new View.OnClickListener() { // from class: lo.z
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                f0.p(f0.this, rendering, view);
            }
        });
        EditText editText = iVar.f42531d.getEditText();
        if (editText != null) {
            editText.setOnClickListener(new View.OnClickListener() { // from class: lo.a0
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    f0.q(f0.this, rendering, view);
                }
            });
        }
        EditText editText2 = iVar.f42531d.getEditText();
        if (editText2 != null) {
            editText2.setText(str);
        }
        if (str != null) {
            iVar.f42533f.setEnabled(true);
            EditText editText3 = iVar.f42533f.getEditText();
            if (editText3 != null) {
                editText3.setEnabled(true);
            }
            iVar.f42533f.setOnClickListener(new View.OnClickListener() { // from class: lo.b0
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    f0.r(f0.this, rendering, view);
                }
            });
            EditText editText4 = iVar.f42533f.getEditText();
            if (editText4 != null) {
                editText4.setOnClickListener(new View.OnClickListener() { // from class: lo.c0
                    @Override // android.view.View.OnClickListener
                    public final void onClick(View view) {
                        f0.s(f0.this, rendering, view);
                    }
                });
            }
            EditText editText5 = iVar.f42533f.getEditText();
            if (editText5 != null) {
                b4 b4Var2 = (b4) CollectionsKt.firstOrNull(rendering.e().f());
                if (b4Var2 != null) {
                    str2 = b4Var2.getText();
                }
                editText5.setText(str2);
            }
        } else {
            iVar.f42533f.setEnabled(false);
            EditText editText6 = iVar.f42533f.getEditText();
            if (editText6 != null) {
                editText6.setEnabled(false);
            }
        }
        iVar.f42532e.setText(rendering.b());
        iVar.f42534g.setText(rendering.d());
        iVar.f42530c.setEnabled(rendering.n());
        iVar.f42530c.setOnClickListener(new View.OnClickListener() { // from class: lo.d0
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                f0.t(f5.a.this, view);
            }
        });
        iVar.f42530c.setText(rendering.a());
        j(iVar, rendering.l(), viewEnvironment);
    }
}
