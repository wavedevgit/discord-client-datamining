package yn;

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
import ym.k;
import yn.d;
import yn.r2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class t implements ym.k {

    /* renamed from: c  reason: collision with root package name */
    public static final a f55018c = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final zn.c f55019b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements ym.c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ ym.c0 f55020a;

        /* renamed from: yn.t$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0764a extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0764a f55021d = new C0764a();

            C0764a() {
                super(3, zn.c.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/document/databinding/Pi2DocumentReviewBinding;", 0);
            }

            public final zn.c a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return zn.c.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final b f55022d = new b();

            b() {
                super(1, t.class, "<init>", "<init>(Lcom/withpersona/sdk2/inquiry/document/databinding/Pi2DocumentReviewBinding;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final t invoke(zn.c p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new t(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // ym.c0
        /* renamed from: b */
        public View a(r2.d.b initialRendering, ym.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f55020a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // ym.c0
        public KClass getType() {
            return this.f55020a.getType();
        }

        private a() {
            k.a aVar = ym.k.f54645a;
            this.f55020a = new ym.z(Reflection.getOrCreateKotlinClass(r2.d.b.class), C0764a.f55021d, b.f55022d);
        }
    }

    public t(zn.c binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.f55019b = binding;
        CoordinatorLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        wp.f.d(root, false, false, false, false, 15, null);
    }

    private final void f(StepStyles.DocumentStepStyle documentStepStyle, ym.a0 a0Var) {
        ButtonSubmitComponentStyle buttonPrimaryStyleValue;
        TextBasedComponentStyle disclaimerStyleValue;
        TextBasedComponentStyle textStyleValue;
        TextBasedComponentStyle titleStyleValue;
        Integer headerButtonColorValue;
        Integer backgroundColorValue;
        if (documentStepStyle != null && (backgroundColorValue = documentStepStyle.getBackgroundColorValue()) != null) {
            int intValue = backgroundColorValue.intValue();
            this.f55019b.getRoot().setBackgroundColor(intValue);
            vp.c.a(a0Var, intValue);
        }
        if (documentStepStyle != null) {
            Context context = this.f55019b.getRoot().getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            Drawable a10 = hq.c.a(documentStepStyle, context);
            if (a10 != null) {
                this.f55019b.getRoot().setBackground(a10);
            }
        }
        if (documentStepStyle != null && (headerButtonColorValue = documentStepStyle.getHeaderButtonColorValue()) != null) {
            this.f55019b.f56097f.setControlsColor(headerButtonColorValue.intValue());
        }
        if (documentStepStyle != null && (titleStyleValue = documentStepStyle.getTitleStyleValue()) != null) {
            TextView title = this.f55019b.f56101j;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            fq.f0.n(title, titleStyleValue, null, 2, null);
        }
        if (documentStepStyle != null && (textStyleValue = documentStepStyle.getTextStyleValue()) != null) {
            TextView body = this.f55019b.f56093b;
            Intrinsics.checkNotNullExpressionValue(body, "body");
            fq.f0.n(body, textStyleValue, null, 2, null);
        }
        if (documentStepStyle != null && (disclaimerStyleValue = documentStepStyle.getDisclaimerStyleValue()) != null) {
            TextView disclaimer = this.f55019b.f56095d;
            Intrinsics.checkNotNullExpressionValue(disclaimer, "disclaimer");
            fq.f0.n(disclaimer, disclaimerStyleValue, null, 2, null);
        }
        if (documentStepStyle != null && (buttonPrimaryStyleValue = documentStepStyle.getButtonPrimaryStyleValue()) != null) {
            Button submitButton = this.f55019b.f56100i;
            Intrinsics.checkNotNullExpressionValue(submitButton, "submitButton");
            fq.e.f(submitButton, buttonPrimaryStyleValue, false, false, 6, null);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit h(r2.d.b bVar, d it) {
        Intrinsics.checkNotNullParameter(it, "it");
        if (it instanceof d.b) {
            bVar.k().invoke(it);
        }
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void i(r2.d.b bVar, View view) {
        bVar.l().invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j(r2.d.b bVar) {
        bVar.h().invoke();
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k(r2.d.b bVar) {
        bVar.i().invoke();
        return Unit.f32464a;
    }

    @Override // ym.k
    /* renamed from: g */
    public void a(final r2.d.b rendering, ym.a0 viewEnvironment) {
        x xVar;
        boolean z10;
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        zn.c cVar = this.f55019b;
        cVar.f56101j.setText(rendering.r());
        String n10 = rendering.n();
        if (n10 != null) {
            dr.e.b(this.f55019b.getRoot().getContext()).c(cVar.f56093b, n10);
        }
        cVar.f56095d.setText(rendering.c());
        if (cVar.f56098g.getAdapter() == null) {
            Context context = this.f55019b.getRoot().getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            xVar = new x(context, rendering.f(), rendering.m(), rendering.o());
            cVar.f56098g.setAdapter(xVar);
        } else {
            RecyclerView.Adapter adapter = cVar.f56098g.getAdapter();
            Intrinsics.checkNotNull(adapter, "null cannot be cast to non-null type com.withpersona.sdk2.inquiry.document.DocumentTileAdapter");
            xVar = (x) adapter;
        }
        if (!rendering.b() && rendering.a()) {
            z10 = true;
        } else {
            z10 = false;
        }
        xVar.i(z10, rendering.d());
        xVar.h(new Function1() { // from class: yn.p
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit h10;
                h10 = t.h(r2.d.b.this, (d) obj);
                return h10;
            }
        });
        cVar.f56100i.setText(rendering.q());
        cVar.f56100i.setEnabled(rendering.p());
        cVar.f56100i.setOnClickListener(new View.OnClickListener() { // from class: yn.q
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                t.i(r2.d.b.this, view);
            }
        });
        up.a g10 = rendering.g();
        Function0 function0 = new Function0() { // from class: yn.r
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j10;
                j10 = t.j(r2.d.b.this);
                return j10;
            }
        };
        Function0 function02 = new Function0() { // from class: yn.s
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit k10;
                k10 = t.k(r2.d.b.this);
                return k10;
            }
        };
        Pi2NavigationBar navigationBar = cVar.f56097f;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        CoordinatorLayout root = cVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        up.e.b(g10, function0, function02, navigationBar, root);
        CoordinatorLayout root2 = this.f55019b.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
        mp.z.a(root2, rendering.e(), rendering.j(), this.f55019b.f56100i, 4, 10000);
        f(rendering.o(), viewEnvironment);
    }
}
