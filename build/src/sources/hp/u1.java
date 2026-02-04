package hp;

import android.content.Context;
import android.graphics.drawable.Drawable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import com.google.android.material.imageview.ShapeableImageView;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonCancelComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonSubmitComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.selfie.GridAutoFitLayoutManager;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import g5.h;
import hp.a1;
import hp.u1;
import hp.x5;
import java.util.ArrayList;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import kotlin.text.StringsKt;
import ym.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u1 implements ym.k {

    /* renamed from: f  reason: collision with root package name */
    public static final a f27533f = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final ip.f f27534b;

    /* renamed from: c  reason: collision with root package name */
    private final b f27535c;

    /* renamed from: d  reason: collision with root package name */
    private final LinearLayoutManager f27536d;

    /* renamed from: e  reason: collision with root package name */
    private final GridAutoFitLayoutManager f27537e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements ym.c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ ym.c0 f27538a;

        /* renamed from: hp.u1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0355a extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0355a f27539d = new C0355a();

            C0355a() {
                super(3, ip.f.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/selfie/databinding/Pi2SelfieReviewCapturesBinding;", 0);
            }

            public final ip.f a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return ip.f.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final b f27540d = new b();

            b() {
                super(1, u1.class, "<init>", "<init>(Lcom/withpersona/sdk2/inquiry/selfie/databinding/Pi2SelfieReviewCapturesBinding;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final u1 invoke(ip.f p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new u1(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // ym.c0
        /* renamed from: b */
        public View a(x5.d.e initialRendering, ym.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f27538a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // ym.c0
        public KClass getType() {
            return this.f27538a.getType();
        }

        private a() {
            k.a aVar = ym.k.f54645a;
            this.f27538a = new ym.z(Reflection.getOrCreateKotlinClass(x5.d.e.class), C0355a.f27539d, b.f27540d);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends RecyclerView.Adapter {

        /* renamed from: a  reason: collision with root package name */
        private x5.d.e.a f27541a;

        /* renamed from: b  reason: collision with root package name */
        private List f27542b = CollectionsKt.l();

        /* renamed from: c  reason: collision with root package name */
        private TextBasedComponentStyle f27543c;

        /* renamed from: d  reason: collision with root package name */
        private final mp.e f27544d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private final String f27545a;

            /* renamed from: b  reason: collision with root package name */
            private final a1 f27546b;

            public a(String str, a1 selfie) {
                Intrinsics.checkNotNullParameter(selfie, "selfie");
                this.f27545a = str;
                this.f27546b = selfie;
            }

            public final String a() {
                return this.f27545a;
            }

            public final a1 b() {
                return this.f27546b;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof a)) {
                    return false;
                }
                a aVar = (a) obj;
                if (Intrinsics.areEqual(this.f27545a, aVar.f27545a) && Intrinsics.areEqual(this.f27546b, aVar.f27546b)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                int hashCode;
                String str = this.f27545a;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                return (hashCode * 31) + this.f27546b.hashCode();
            }

            public String toString() {
                String str = this.f27545a;
                a1 a1Var = this.f27546b;
                return "SelfieItem(label=" + str + ", selfie=" + a1Var + ")";
            }
        }

        /* renamed from: hp.u1$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class C0356b {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f27547a;

            static {
                int[] iArr = new int[a1.b.values().length];
                try {
                    iArr[a1.b.f27138d.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[a1.b.f27139e.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                try {
                    iArr[a1.b.f27140i.ordinal()] = 3;
                } catch (NoSuchFieldError unused3) {
                }
                f27547a = iArr;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class c extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final c f27548d = new c();

            c() {
                super(3, ip.g.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/selfie/databinding/Pi2SelfieReviewItemBinding;", 0);
            }

            public final ip.g a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return ip.g.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        public b() {
            mp.e eVar = new mp.e(new Function2() { // from class: hp.v1
                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(Object obj, Object obj2) {
                    boolean c10;
                    c10 = u1.b.c((u1.b.a) obj, (u1.b.a) obj2);
                    return Boolean.valueOf(c10);
                }
            }, null, null, 6, null);
            eVar.j(Reflection.getOrCreateKotlinClass(a.class), Reflection.getOrCreateKotlinClass(ip.g.class), c.f27548d, new Function3() { // from class: hp.w1
                @Override // kotlin.jvm.functions.Function3
                public final Object invoke(Object obj, Object obj2, Object obj3) {
                    Unit d10;
                    d10 = u1.b.d(u1.b.this, (u1.b.a) obj, (ip.g) obj2, (RecyclerView.ViewHolder) obj3);
                    return d10;
                }
            }, null);
            this.f27544d = eVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final boolean c(a old, a aVar) {
            Intrinsics.checkNotNullParameter(old, "old");
            Intrinsics.checkNotNullParameter(aVar, "new");
            return Intrinsics.areEqual(old.b().a(), aVar.b().a());
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit d(b bVar, a item, ip.g b10, RecyclerView.ViewHolder h10) {
            Intrinsics.checkNotNullParameter(item, "item");
            Intrinsics.checkNotNullParameter(b10, "b");
            Intrinsics.checkNotNullParameter(h10, "h");
            ShapeableImageView image = b10.f31033b;
            Intrinsics.checkNotNullExpressionValue(image, "image");
            v4.a.a(image.getContext()).a(new h.a(image.getContext()).d(item.b().a()).r(image).a());
            String a10 = item.a();
            if (a10 != null && !StringsKt.k0(a10)) {
                b10.f31034c.setVisibility(0);
                TextView label = b10.f31034c;
                Intrinsics.checkNotNullExpressionValue(label, "label");
                bq.f.d(label, item.a());
            } else {
                b10.f31034c.setVisibility(8);
            }
            TextBasedComponentStyle textBasedComponentStyle = bVar.f27543c;
            if (textBasedComponentStyle != null) {
                TextView label2 = b10.f31034c;
                Intrinsics.checkNotNullExpressionValue(label2, "label");
                fq.f0.n(label2, textBasedComponentStyle, null, 2, null);
            }
            b10.getRoot().setContentDescription(item.a());
            return Unit.f32464a;
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r3v2, types: [hp.u1$b$a] */
        private final void e() {
            ArrayList arrayList = new ArrayList();
            for (a1 a1Var : this.f27542b) {
                String str = null;
                if (a1Var instanceof a1.c) {
                    int i10 = C0356b.f27547a[((a1.c) a1Var).d().ordinal()];
                    if (i10 != 1) {
                        if (i10 != 2) {
                            if (i10 == 3) {
                                x5.d.e.a aVar = this.f27541a;
                                if (aVar != null) {
                                    str = aVar.e();
                                }
                            } else {
                                throw new lr.p();
                            }
                        } else {
                            x5.d.e.a aVar2 = this.f27541a;
                            if (aVar2 != null) {
                                str = aVar2.d();
                            }
                        }
                    } else {
                        x5.d.e.a aVar3 = this.f27541a;
                        if (aVar3 != null) {
                            str = aVar3.c();
                        }
                    }
                    str = new a(str, a1Var);
                } else if (!(a1Var instanceof a1.d)) {
                    throw new lr.p();
                }
                if (str != null) {
                    arrayList.add(str);
                }
            }
            mp.e.t(this.f27544d, arrayList, this, null, 4, null);
        }

        public final void f(TextBasedComponentStyle textStyle) {
            Intrinsics.checkNotNullParameter(textStyle, "textStyle");
            this.f27543c = textStyle;
            e();
        }

        public final void g(x5.d.e.a strings) {
            Intrinsics.checkNotNullParameter(strings, "strings");
            this.f27541a = strings;
            e();
        }

        @Override // androidx.recyclerview.widget.RecyclerView.Adapter
        public int getItemCount() {
            return this.f27544d.m();
        }

        @Override // androidx.recyclerview.widget.RecyclerView.Adapter
        public int getItemViewType(int i10) {
            return this.f27544d.o(i10);
        }

        @Override // androidx.recyclerview.widget.RecyclerView.Adapter
        public void onBindViewHolder(RecyclerView.ViewHolder holder, int i10) {
            Intrinsics.checkNotNullParameter(holder, "holder");
            this.f27544d.q(holder, i10);
        }

        @Override // androidx.recyclerview.widget.RecyclerView.Adapter
        public RecyclerView.ViewHolder onCreateViewHolder(ViewGroup parent, int i10) {
            Intrinsics.checkNotNullParameter(parent, "parent");
            return this.f27544d.r(parent, i10);
        }

        public final void setData(List data) {
            Intrinsics.checkNotNullParameter(data, "data");
            this.f27542b = data;
            e();
        }
    }

    public u1(ip.f binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.f27534b = binding;
        b bVar = new b();
        this.f27535c = bVar;
        this.f27536d = new LinearLayoutManager(binding.getRoot().getContext());
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        this.f27537e = new GridAutoFitLayoutManager(context, binding.getRoot().getContext().getResources().getDimensionPixelSize(u0.f27532a));
        binding.f31028e.setAdapter(bVar);
        binding.f31028e.setHasFixedSize(true);
        ConstraintLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        wp.f.d(root, false, false, false, false, 15, null);
    }

    private final void f(StepStyles.SelfieStepStyle selfieStepStyle, ym.a0 a0Var) {
        StepStyles.StepCancelButtonComponentStyleContainer base;
        ButtonCancelComponentStyle base2;
        TextBasedComponentStyle titleStyleValue = selfieStepStyle.getTitleStyleValue();
        if (titleStyleValue != null) {
            TextView textView = this.f27534b.f31030g;
            textView.setPadding(textView.getPaddingLeft(), 0, this.f27534b.f31030g.getPaddingRight(), 0);
            TextView title = this.f27534b.f31030g;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            fq.f0.n(title, titleStyleValue, null, 2, null);
        }
        TextBasedComponentStyle textStyleValue = selfieStepStyle.getTextStyleValue();
        if (textStyleValue != null) {
            TextView textView2 = this.f27534b.f31025b;
            textView2.setPadding(textView2.getPaddingLeft(), 0, this.f27534b.f31025b.getPaddingRight(), 0);
            TextView body = this.f27534b.f31025b;
            Intrinsics.checkNotNullExpressionValue(body, "body");
            fq.f0.n(body, textStyleValue, null, 2, null);
            this.f27535c.f(textStyleValue);
        }
        Integer backgroundColorValue = selfieStepStyle.getBackgroundColorValue();
        if (backgroundColorValue != null) {
            int intValue = backgroundColorValue.intValue();
            this.f27534b.getRoot().setBackgroundColor(intValue);
            vp.c.a(a0Var, intValue);
        }
        Context context = this.f27534b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Drawable a10 = hq.c.a(selfieStepStyle, context);
        if (a10 != null) {
            this.f27534b.getRoot().setBackground(a10);
        }
        Integer headerButtonColorValue = selfieStepStyle.getHeaderButtonColorValue();
        if (headerButtonColorValue != null) {
            this.f27534b.f31027d.setControlsColor(headerButtonColorValue.intValue());
        }
        ButtonSubmitComponentStyle buttonPrimaryStyleValue = selfieStepStyle.getButtonPrimaryStyleValue();
        if (buttonPrimaryStyleValue != null) {
            Button usePhotosButton = this.f27534b.f31031h;
            Intrinsics.checkNotNullExpressionValue(usePhotosButton, "usePhotosButton");
            fq.e.f(usePhotosButton, buttonPrimaryStyleValue, false, false, 6, null);
        }
        StepStyles.StepSecondaryButtonComponentStyle buttonSecondaryStyle = selfieStepStyle.getButtonSecondaryStyle();
        if (buttonSecondaryStyle != null && (base = buttonSecondaryStyle.getBase()) != null && (base2 = base.getBase()) != null) {
            Button retakeButton = this.f27534b.f31029f;
            Intrinsics.checkNotNullExpressionValue(retakeButton, "retakeButton");
            fq.e.f(retakeButton, base2, false, false, 6, null);
        }
        Integer headerButtonColorValue2 = selfieStepStyle.getHeaderButtonColorValue();
        if (headerButtonColorValue2 != null) {
            this.f27534b.f31027d.setControlsColor(headerButtonColorValue2.intValue());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void h(x5.d.e eVar, View view) {
        eVar.e().invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void i(x5.d.e eVar, View view) {
        eVar.d().invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit j(x5.d.e eVar) {
        eVar.b().invoke();
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k(x5.d.e eVar) {
        eVar.c().invoke();
        return Unit.f32464a;
    }

    @Override // ym.k
    /* renamed from: g */
    public void a(final x5.d.e rendering, ym.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        ip.f fVar = this.f27534b;
        if (rendering.f().size() <= 1) {
            fVar.f31028e.setLayoutManager(this.f27536d);
        } else {
            fVar.f31028e.setLayoutManager(this.f27537e);
        }
        TextView title = fVar.f31030g;
        Intrinsics.checkNotNullExpressionValue(title, "title");
        bq.f.d(title, rendering.g().g());
        TextView body = fVar.f31025b;
        Intrinsics.checkNotNullExpressionValue(body, "body");
        bq.f.d(body, rendering.g().a());
        fVar.f31031h.setText(rendering.g().f());
        fVar.f31031h.setOnClickListener(new View.OnClickListener() { // from class: hp.q1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                u1.h(x5.d.e.this, view);
            }
        });
        fVar.f31029f.setText(rendering.g().b());
        fVar.f31029f.setOnClickListener(new View.OnClickListener() { // from class: hp.r1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                u1.i(x5.d.e.this, view);
            }
        });
        if (rendering.h() != null) {
            f(rendering.h(), viewEnvironment);
        }
        this.f27535c.g(rendering.g());
        this.f27535c.setData(rendering.f());
        up.a a10 = rendering.a();
        Function0 function0 = new Function0() { // from class: hp.s1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j10;
                j10 = u1.j(x5.d.e.this);
                return j10;
            }
        };
        Function0 function02 = new Function0() { // from class: hp.t1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit k10;
                k10 = u1.k(x5.d.e.this);
                return k10;
            }
        };
        Pi2NavigationBar navigationBar = this.f27534b.f31027d;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        ConstraintLayout root = this.f27534b.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        up.e.b(a10, function0, function02, navigationBar, root);
    }
}
