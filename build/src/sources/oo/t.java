package oo;

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
import oo.d;
import oo.r2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class t implements gn.k {

    /* renamed from: c  reason: collision with root package name */
    public static final a f40974c = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final po.c f40975b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements gn.c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ gn.c0 f40976a;

        /* renamed from: oo.t$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0571a extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0571a f40977d = new C0571a();

            C0571a() {
                super(3, po.c.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/document/databinding/Pi2DocumentReviewBinding;", 0);
            }

            public final po.c a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return po.c.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final b f40978d = new b();

            b() {
                super(1, t.class, "<init>", "<init>(Lcom/withpersona/sdk2/inquiry/document/databinding/Pi2DocumentReviewBinding;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final t invoke(po.c p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new t(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // gn.c0
        /* renamed from: b */
        public View a(r2.d.b initialRendering, gn.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f40976a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // gn.c0
        public KClass getType() {
            return this.f40976a.getType();
        }

        private a() {
            k.a aVar = gn.k.f25849a;
            this.f40976a = new gn.z(Reflection.getOrCreateKotlinClass(r2.d.b.class), C0571a.f40977d, b.f40978d);
        }
    }

    public t(po.c binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.f40975b = binding;
        CoordinatorLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        lq.f.d(root, false, false, false, false, 15, null);
    }

    private final void f(StepStyles.DocumentStepStyle documentStepStyle, gn.a0 a0Var) {
        ButtonSubmitComponentStyle buttonPrimaryStyleValue;
        TextBasedComponentStyle disclaimerStyleValue;
        TextBasedComponentStyle textStyleValue;
        TextBasedComponentStyle titleStyleValue;
        Integer headerButtonColorValue;
        Integer backgroundColorValue;
        if (documentStepStyle != null && (backgroundColorValue = documentStepStyle.getBackgroundColorValue()) != null) {
            int intValue = backgroundColorValue.intValue();
            this.f40975b.getRoot().setBackgroundColor(intValue);
            kq.c.a(a0Var, intValue);
        }
        if (documentStepStyle != null) {
            Context context = this.f40975b.getRoot().getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            Drawable a10 = wq.c.a(documentStepStyle, context);
            if (a10 != null) {
                this.f40975b.getRoot().setBackground(a10);
            }
        }
        if (documentStepStyle != null && (headerButtonColorValue = documentStepStyle.getHeaderButtonColorValue()) != null) {
            this.f40975b.f42860f.setControlsColor(headerButtonColorValue.intValue());
        }
        if (documentStepStyle != null && (titleStyleValue = documentStepStyle.getTitleStyleValue()) != null) {
            TextView title = this.f40975b.f42864j;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            uq.f0.n(title, titleStyleValue, null, 2, null);
        }
        if (documentStepStyle != null && (textStyleValue = documentStepStyle.getTextStyleValue()) != null) {
            TextView body = this.f40975b.f42856b;
            Intrinsics.checkNotNullExpressionValue(body, "body");
            uq.f0.n(body, textStyleValue, null, 2, null);
        }
        if (documentStepStyle != null && (disclaimerStyleValue = documentStepStyle.getDisclaimerStyleValue()) != null) {
            TextView disclaimer = this.f40975b.f42858d;
            Intrinsics.checkNotNullExpressionValue(disclaimer, "disclaimer");
            uq.f0.n(disclaimer, disclaimerStyleValue, null, 2, null);
        }
        if (documentStepStyle != null && (buttonPrimaryStyleValue = documentStepStyle.getButtonPrimaryStyleValue()) != null) {
            Button submitButton = this.f40975b.f42863i;
            Intrinsics.checkNotNullExpressionValue(submitButton, "submitButton");
            uq.e.f(submitButton, buttonPrimaryStyleValue, false, false, 6, null);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h(r2.d.b bVar, d it) {
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof d.b) {
            bVar.k().invoke(it);
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void i(r2.d.b bVar, View view) {
        bVar.l().invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j(r2.d.b bVar) {
        bVar.h().invoke();
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k(r2.d.b bVar) {
        bVar.i().invoke();
        return Unit.f31988a;
    }

    @Override // gn.k
    /* renamed from: g */
    public void a(final r2.d.b rendering, gn.a0 viewEnvironment) {
        x xVar;
        boolean z10;
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        po.c cVar = this.f40975b;
        cVar.f42864j.setText(rendering.r());
        String n10 = rendering.n();
        if (n10 != null) {
            sr.e.b(this.f40975b.getRoot().getContext()).c(cVar.f42856b, n10);
        }
        cVar.f42858d.setText(rendering.c());
        if (cVar.f42861g.getAdapter() == null) {
            Context context = this.f40975b.getRoot().getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            xVar = new x(context, rendering.f(), rendering.m(), rendering.o());
            cVar.f42861g.setAdapter(xVar);
        } else {
            RecyclerView.Adapter adapter = cVar.f42861g.getAdapter();
            Intrinsics.checkNotNull(adapter, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.document.DocumentTileAdapter");
            xVar = (x) adapter;
        }
        if (!rendering.b() && rendering.a()) {
            z10 = true;
        } else {
            z10 = false;
        }
        xVar.i(z10, rendering.d());
        xVar.h(new Function1() { // from class: oo.p
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit h10;
                h10 = t.h(r2.d.b.this, (d) obj);
                return h10;
            }
        });
        cVar.f42863i.setText(rendering.q());
        cVar.f42863i.setEnabled(rendering.p());
        cVar.f42863i.setOnClickListener(new View.OnClickListener() { // from class: oo.q
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                t.i(r2.d.b.this, view);
            }
        });
        jq.a g10 = rendering.g();
        Function0 function0 = new Function0() { // from class: oo.r
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j10;
                j10 = t.j(r2.d.b.this);
                return j10;
            }
        };
        Function0 function02 = new Function0() { // from class: oo.s
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit k10;
                k10 = t.k(r2.d.b.this);
                return k10;
            }
        };
        Pi2NavigationBar navigationBar = cVar.f42860f;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        CoordinatorLayout root = cVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        jq.e.b(g10, function0, function02, navigationBar, root);
        CoordinatorLayout root2 = this.f40975b.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
        bq.z.a(root2, rendering.e(), rendering.j(), this.f40975b.f42863i, 4, 10000);
        f(rendering.o(), viewEnvironment);
    }
}
