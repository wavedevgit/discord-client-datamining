package vn;

import android.content.Context;
import android.graphics.drawable.Drawable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.recyclerview.widget.RecyclerView;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonSubmitComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import vm.k;
import vn.d;
import vn.r2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class t implements vm.k {

    /* renamed from: c  reason: collision with root package name */
    public static final a f51640c = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final wn.c f51641b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements vm.c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ vm.c0 f51642a;

        /* renamed from: vn.t$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0699a extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0699a f51643d = new C0699a();

            C0699a() {
                super(3, wn.c.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/document/databinding/Pi2DocumentReviewBinding;", 0);
            }

            public final wn.c a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return wn.c.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final b f51644d = new b();

            b() {
                super(1, t.class, "<init>", "<init>(Lcom/withpersona/sdk2/inquiry/document/databinding/Pi2DocumentReviewBinding;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final t invoke(wn.c p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new t(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // vm.c0
        /* renamed from: b */
        public View a(r2.d.b initialRendering, vm.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f51642a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // vm.c0
        public KClass getType() {
            return this.f51642a.getType();
        }

        private a() {
            k.a aVar = vm.k.f51267a;
            this.f51642a = new vm.z(Reflection.getOrCreateKotlinClass(r2.d.b.class), C0699a.f51643d, b.f51644d);
        }
    }

    public t(wn.c binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.f51641b = binding;
        CoordinatorLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        tp.f.d(root, false, false, false, false, 15, null);
    }

    private final void f(StepStyles.DocumentStepStyle documentStepStyle, vm.a0 a0Var) {
        ButtonSubmitComponentStyle buttonPrimaryStyleValue;
        TextBasedComponentStyle disclaimerStyleValue;
        TextBasedComponentStyle textStyleValue;
        TextBasedComponentStyle titleStyleValue;
        Integer headerButtonColorValue;
        Integer backgroundColorValue;
        if (documentStepStyle != null && (backgroundColorValue = documentStepStyle.getBackgroundColorValue()) != null) {
            int intValue = backgroundColorValue.intValue();
            this.f51641b.getRoot().setBackgroundColor(intValue);
            sp.c.a(a0Var, intValue);
        }
        if (documentStepStyle != null) {
            Context context = this.f51641b.getRoot().getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            Drawable a10 = eq.c.a(documentStepStyle, context);
            if (a10 != null) {
                this.f51641b.getRoot().setBackground(a10);
            }
        }
        if (documentStepStyle != null && (headerButtonColorValue = documentStepStyle.getHeaderButtonColorValue()) != null) {
            this.f51641b.f52716f.setControlsColor(headerButtonColorValue.intValue());
        }
        if (documentStepStyle != null && (titleStyleValue = documentStepStyle.getTitleStyleValue()) != null) {
            TextView title = this.f51641b.f52720j;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            cq.f0.n(title, titleStyleValue, null, 2, null);
        }
        if (documentStepStyle != null && (textStyleValue = documentStepStyle.getTextStyleValue()) != null) {
            TextView body = this.f51641b.f52712b;
            Intrinsics.checkNotNullExpressionValue(body, "body");
            cq.f0.n(body, textStyleValue, null, 2, null);
        }
        if (documentStepStyle != null && (disclaimerStyleValue = documentStepStyle.getDisclaimerStyleValue()) != null) {
            TextView disclaimer = this.f51641b.f52714d;
            Intrinsics.checkNotNullExpressionValue(disclaimer, "disclaimer");
            cq.f0.n(disclaimer, disclaimerStyleValue, null, 2, null);
        }
        if (documentStepStyle != null && (buttonPrimaryStyleValue = documentStepStyle.getButtonPrimaryStyleValue()) != null) {
            Button submitButton = this.f51641b.f52719i;
            Intrinsics.checkNotNullExpressionValue(submitButton, "submitButton");
            cq.e.f(submitButton, buttonPrimaryStyleValue, false, false, 6, null);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h(r2.d.b bVar, d it) {
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof d.b) {
            bVar.k().invoke(it);
        }
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void i(r2.d.b bVar, View view) {
        bVar.l().invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j(r2.d.b bVar) {
        bVar.h().invoke();
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k(r2.d.b bVar) {
        bVar.i().invoke();
        return Unit.f33282a;
    }

    @Override // vm.k
    /* renamed from: g */
    public void a(final r2.d.b rendering, vm.a0 viewEnvironment) {
        x xVar;
        boolean z10;
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        wn.c cVar = this.f51641b;
        cVar.f52720j.setText(rendering.r());
        String n10 = rendering.n();
        if (n10 != null) {
            ar.e.b(this.f51641b.getRoot().getContext()).c(cVar.f52712b, n10);
        }
        cVar.f52714d.setText(rendering.c());
        if (cVar.f52717g.getAdapter() == null) {
            Context context = this.f51641b.getRoot().getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            xVar = new x(context, rendering.f(), rendering.m(), rendering.o());
            cVar.f52717g.setAdapter(xVar);
        } else {
            RecyclerView.Adapter adapter = cVar.f52717g.getAdapter();
            Intrinsics.checkNotNull(adapter, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.document.DocumentTileAdapter");
            xVar = (x) adapter;
        }
        if (!rendering.b() && rendering.a()) {
            z10 = true;
        } else {
            z10 = false;
        }
        xVar.i(z10, rendering.d());
        xVar.h(new Function1() { // from class: vn.p
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit h10;
                h10 = t.h(r2.d.b.this, (d) obj);
                return h10;
            }
        });
        cVar.f52719i.setText(rendering.q());
        cVar.f52719i.setEnabled(rendering.p());
        cVar.f52719i.setOnClickListener(new View.OnClickListener() { // from class: vn.q
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                t.i(r2.d.b.this, view);
            }
        });
        rp.a g10 = rendering.g();
        Function0 function0 = new Function0() { // from class: vn.r
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j10;
                j10 = t.j(r2.d.b.this);
                return j10;
            }
        };
        Function0 function02 = new Function0() { // from class: vn.s
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit k10;
                k10 = t.k(r2.d.b.this);
                return k10;
            }
        };
        Pi2NavigationBar navigationBar = cVar.f52716f;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        CoordinatorLayout root = cVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        rp.e.b(g10, function0, function02, navigationBar, root);
        CoordinatorLayout root2 = this.f51641b.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
        jp.z.a(root2, rendering.e(), rendering.j(), this.f51641b.f52719i, 4, 10000);
        f(rendering.o(), viewEnvironment);
    }
}
