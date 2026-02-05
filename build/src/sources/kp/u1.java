package kp;

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
import bn.k;
import com.google.android.material.imageview.ShapeableImageView;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonCancelComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonSubmitComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.selfie.GridAutoFitLayoutManager;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import g5.h;
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
import kp.a1;
import kp.u1;
import kp.x5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u1 implements bn.k {

    /* renamed from: f  reason: collision with root package name */
    public static final a f35526f = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final lp.f f35527b;

    /* renamed from: c  reason: collision with root package name */
    private final b f35528c;

    /* renamed from: d  reason: collision with root package name */
    private final LinearLayoutManager f35529d;

    /* renamed from: e  reason: collision with root package name */
    private final GridAutoFitLayoutManager f35530e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements bn.c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ bn.c0 f35531a;

        /* renamed from: kp.u1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0457a extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0457a f35532d = new C0457a();

            C0457a() {
                super(3, lp.f.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/selfie/databinding/Pi2SelfieReviewCapturesBinding;", 0);
            }

            public final lp.f a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return lp.f.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final b f35533d = new b();

            b() {
                super(1, u1.class, "<init>", "<init>(Lcom/withpersona/sdk2/inquiry/selfie/databinding/Pi2SelfieReviewCapturesBinding;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final u1 invoke(lp.f p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new u1(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // bn.c0
        /* renamed from: b */
        public View a(x5.d.e initialRendering, bn.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f35531a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // bn.c0
        public KClass getType() {
            return this.f35531a.getType();
        }

        private a() {
            k.a aVar = bn.k.f6590a;
            this.f35531a = new bn.z(Reflection.getOrCreateKotlinClass(x5.d.e.class), C0457a.f35532d, b.f35533d);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends RecyclerView.Adapter {

        /* renamed from: a  reason: collision with root package name */
        private x5.d.e.a f35534a;

        /* renamed from: b  reason: collision with root package name */
        private List f35535b = CollectionsKt.l();

        /* renamed from: c  reason: collision with root package name */
        private TextBasedComponentStyle f35536c;

        /* renamed from: d  reason: collision with root package name */
        private final pp.e f35537d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private final String f35538a;

            /* renamed from: b  reason: collision with root package name */
            private final a1 f35539b;

            public a(String str, a1 selfie) {
                Intrinsics.checkNotNullParameter(selfie, "selfie");
                this.f35538a = str;
                this.f35539b = selfie;
            }

            public final String a() {
                return this.f35538a;
            }

            public final a1 b() {
                return this.f35539b;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof a)) {
                    return false;
                }
                a aVar = (a) obj;
                if (Intrinsics.areEqual(this.f35538a, aVar.f35538a) && Intrinsics.areEqual(this.f35539b, aVar.f35539b)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                int hashCode;
                String str = this.f35538a;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                return (hashCode * 31) + this.f35539b.hashCode();
            }

            public String toString() {
                String str = this.f35538a;
                a1 a1Var = this.f35539b;
                return "SelfieItem(label=" + str + ", selfie=" + a1Var + ")";
            }
        }

        /* renamed from: kp.u1$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class C0458b {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f35540a;

            static {
                int[] iArr = new int[a1.b.values().length];
                try {
                    iArr[a1.b.f35131d.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[a1.b.f35132e.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                try {
                    iArr[a1.b.f35133i.ordinal()] = 3;
                } catch (NoSuchFieldError unused3) {
                }
                f35540a = iArr;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class c extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final c f35541d = new c();

            c() {
                super(3, lp.g.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/selfie/databinding/Pi2SelfieReviewItemBinding;", 0);
            }

            public final lp.g a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return lp.g.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        public b() {
            pp.e eVar = new pp.e(new Function2() { // from class: kp.v1
                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(Object obj, Object obj2) {
                    boolean c10;
                    c10 = u1.b.c((u1.b.a) obj, (u1.b.a) obj2);
                    return Boolean.valueOf(c10);
                }
            }, null, null, 6, null);
            eVar.j(Reflection.getOrCreateKotlinClass(a.class), Reflection.getOrCreateKotlinClass(lp.g.class), c.f35541d, new Function3() { // from class: kp.w1
                @Override // kotlin.jvm.functions.Function3
                public final Object invoke(Object obj, Object obj2, Object obj3) {
                    Unit d10;
                    d10 = u1.b.d(u1.b.this, (u1.b.a) obj, (lp.g) obj2, (RecyclerView.ViewHolder) obj3);
                    return d10;
                }
            }, null);
            this.f35537d = eVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final boolean c(a old, a aVar) {
            Intrinsics.checkNotNullParameter(old, "old");
            Intrinsics.checkNotNullParameter(aVar, "new");
            return Intrinsics.areEqual(old.b().a(), aVar.b().a());
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit d(b bVar, a item, lp.g b10, RecyclerView.ViewHolder h10) {
            Intrinsics.checkNotNullParameter(item, "item");
            Intrinsics.checkNotNullParameter(b10, "b");
            Intrinsics.checkNotNullParameter(h10, "h");
            ShapeableImageView image = b10.f37183b;
            Intrinsics.checkNotNullExpressionValue(image, "image");
            v4.a.a(image.getContext()).a(new h.a(image.getContext()).d(item.b().a()).r(image).a());
            String a10 = item.a();
            if (a10 != null && !StringsKt.k0(a10)) {
                b10.f37184c.setVisibility(0);
                TextView label = b10.f37184c;
                Intrinsics.checkNotNullExpressionValue(label, "label");
                eq.f.d(label, item.a());
            } else {
                b10.f37184c.setVisibility(8);
            }
            TextBasedComponentStyle textBasedComponentStyle = bVar.f35536c;
            if (textBasedComponentStyle != null) {
                TextView label2 = b10.f37184c;
                Intrinsics.checkNotNullExpressionValue(label2, "label");
                iq.f0.n(label2, textBasedComponentStyle, null, 2, null);
            }
            b10.getRoot().setContentDescription(item.a());
            return Unit.f31988a;
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r3v2, types: [kp.u1$b$a] */
        private final void e() {
            ArrayList arrayList = new ArrayList();
            for (a1 a1Var : this.f35535b) {
                String str = null;
                if (a1Var instanceof a1.c) {
                    int i10 = C0458b.f35540a[((a1.c) a1Var).d().ordinal()];
                    if (i10 != 1) {
                        if (i10 != 2) {
                            if (i10 == 3) {
                                x5.d.e.a aVar = this.f35534a;
                                if (aVar != null) {
                                    str = aVar.e();
                                }
                            } else {
                                throw new or.p();
                            }
                        } else {
                            x5.d.e.a aVar2 = this.f35534a;
                            if (aVar2 != null) {
                                str = aVar2.d();
                            }
                        }
                    } else {
                        x5.d.e.a aVar3 = this.f35534a;
                        if (aVar3 != null) {
                            str = aVar3.c();
                        }
                    }
                    str = new a(str, a1Var);
                } else if (!(a1Var instanceof a1.d)) {
                    throw new or.p();
                }
                if (str != null) {
                    arrayList.add(str);
                }
            }
            pp.e.t(this.f35537d, arrayList, this, null, 4, null);
        }

        public final void f(TextBasedComponentStyle textStyle) {
            Intrinsics.checkNotNullParameter(textStyle, "textStyle");
            this.f35536c = textStyle;
            e();
        }

        public final void g(x5.d.e.a strings) {
            Intrinsics.checkNotNullParameter(strings, "strings");
            this.f35534a = strings;
            e();
        }

        @Override // androidx.recyclerview.widget.RecyclerView.Adapter
        public int getItemCount() {
            return this.f35537d.m();
        }

        @Override // androidx.recyclerview.widget.RecyclerView.Adapter
        public int getItemViewType(int i10) {
            return this.f35537d.o(i10);
        }

        @Override // androidx.recyclerview.widget.RecyclerView.Adapter
        public void onBindViewHolder(RecyclerView.ViewHolder holder, int i10) {
            Intrinsics.checkNotNullParameter(holder, "holder");
            this.f35537d.q(holder, i10);
        }

        @Override // androidx.recyclerview.widget.RecyclerView.Adapter
        public RecyclerView.ViewHolder onCreateViewHolder(ViewGroup parent, int i10) {
            Intrinsics.checkNotNullParameter(parent, "parent");
            return this.f35537d.r(parent, i10);
        }

        public final void setData(List data) {
            Intrinsics.checkNotNullParameter(data, "data");
            this.f35535b = data;
            e();
        }
    }

    public u1(lp.f binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.f35527b = binding;
        b bVar = new b();
        this.f35528c = bVar;
        this.f35529d = new LinearLayoutManager(binding.getRoot().getContext());
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        this.f35530e = new GridAutoFitLayoutManager(context, binding.getRoot().getContext().getResources().getDimensionPixelSize(u0.f35525a));
        binding.f37178e.setAdapter(bVar);
        binding.f37178e.setHasFixedSize(true);
        ConstraintLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        zp.f.d(root, false, false, false, false, 15, null);
    }

    private final void f(StepStyles.SelfieStepStyle selfieStepStyle, bn.a0 a0Var) {
        StepStyles.StepCancelButtonComponentStyleContainer base;
        ButtonCancelComponentStyle base2;
        TextBasedComponentStyle titleStyleValue = selfieStepStyle.getTitleStyleValue();
        if (titleStyleValue != null) {
            TextView textView = this.f35527b.f37180g;
            textView.setPadding(textView.getPaddingLeft(), 0, this.f35527b.f37180g.getPaddingRight(), 0);
            TextView title = this.f35527b.f37180g;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            iq.f0.n(title, titleStyleValue, null, 2, null);
        }
        TextBasedComponentStyle textStyleValue = selfieStepStyle.getTextStyleValue();
        if (textStyleValue != null) {
            TextView textView2 = this.f35527b.f37175b;
            textView2.setPadding(textView2.getPaddingLeft(), 0, this.f35527b.f37175b.getPaddingRight(), 0);
            TextView body = this.f35527b.f37175b;
            Intrinsics.checkNotNullExpressionValue(body, "body");
            iq.f0.n(body, textStyleValue, null, 2, null);
            this.f35528c.f(textStyleValue);
        }
        Integer backgroundColorValue = selfieStepStyle.getBackgroundColorValue();
        if (backgroundColorValue != null) {
            int intValue = backgroundColorValue.intValue();
            this.f35527b.getRoot().setBackgroundColor(intValue);
            yp.c.a(a0Var, intValue);
        }
        Context context = this.f35527b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Drawable a10 = kq.c.a(selfieStepStyle, context);
        if (a10 != null) {
            this.f35527b.getRoot().setBackground(a10);
        }
        Integer headerButtonColorValue = selfieStepStyle.getHeaderButtonColorValue();
        if (headerButtonColorValue != null) {
            this.f35527b.f37177d.setControlsColor(headerButtonColorValue.intValue());
        }
        ButtonSubmitComponentStyle buttonPrimaryStyleValue = selfieStepStyle.getButtonPrimaryStyleValue();
        if (buttonPrimaryStyleValue != null) {
            Button usePhotosButton = this.f35527b.f37181h;
            Intrinsics.checkNotNullExpressionValue(usePhotosButton, "usePhotosButton");
            iq.e.f(usePhotosButton, buttonPrimaryStyleValue, false, false, 6, null);
        }
        StepStyles.StepSecondaryButtonComponentStyle buttonSecondaryStyle = selfieStepStyle.getButtonSecondaryStyle();
        if (buttonSecondaryStyle != null && (base = buttonSecondaryStyle.getBase()) != null && (base2 = base.getBase()) != null) {
            Button retakeButton = this.f35527b.f37179f;
            Intrinsics.checkNotNullExpressionValue(retakeButton, "retakeButton");
            iq.e.f(retakeButton, base2, false, false, 6, null);
        }
        Integer headerButtonColorValue2 = selfieStepStyle.getHeaderButtonColorValue();
        if (headerButtonColorValue2 != null) {
            this.f35527b.f37177d.setControlsColor(headerButtonColorValue2.intValue());
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
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k(x5.d.e eVar) {
        eVar.c().invoke();
        return Unit.f31988a;
    }

    @Override // bn.k
    /* renamed from: g */
    public void a(final x5.d.e rendering, bn.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        lp.f fVar = this.f35527b;
        if (rendering.f().size() <= 1) {
            fVar.f37178e.setLayoutManager(this.f35529d);
        } else {
            fVar.f37178e.setLayoutManager(this.f35530e);
        }
        TextView title = fVar.f37180g;
        Intrinsics.checkNotNullExpressionValue(title, "title");
        eq.f.d(title, rendering.g().g());
        TextView body = fVar.f37175b;
        Intrinsics.checkNotNullExpressionValue(body, "body");
        eq.f.d(body, rendering.g().a());
        fVar.f37181h.setText(rendering.g().f());
        fVar.f37181h.setOnClickListener(new View.OnClickListener() { // from class: kp.q1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                u1.h(x5.d.e.this, view);
            }
        });
        fVar.f37179f.setText(rendering.g().b());
        fVar.f37179f.setOnClickListener(new View.OnClickListener() { // from class: kp.r1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                u1.i(x5.d.e.this, view);
            }
        });
        if (rendering.h() != null) {
            f(rendering.h(), viewEnvironment);
        }
        this.f35528c.g(rendering.g());
        this.f35528c.setData(rendering.f());
        xp.a a10 = rendering.a();
        Function0 function0 = new Function0() { // from class: kp.s1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j10;
                j10 = u1.j(x5.d.e.this);
                return j10;
            }
        };
        Function0 function02 = new Function0() { // from class: kp.t1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit k10;
                k10 = u1.k(x5.d.e.this);
                return k10;
            }
        };
        Pi2NavigationBar navigationBar = this.f35527b.f37177d;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        ConstraintLayout root = this.f35527b.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        xp.e.b(a10, function0, function02, navigationBar, root);
    }
}
