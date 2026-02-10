package np;

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
import en.k;
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
import np.a1;
import np.u1;
import np.x5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u1 implements en.k {

    /* renamed from: f  reason: collision with root package name */
    public static final a f39415f = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final op.f f39416b;

    /* renamed from: c  reason: collision with root package name */
    private final b f39417c;

    /* renamed from: d  reason: collision with root package name */
    private final LinearLayoutManager f39418d;

    /* renamed from: e  reason: collision with root package name */
    private final GridAutoFitLayoutManager f39419e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements en.c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ en.c0 f39420a;

        /* renamed from: np.u1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0565a extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0565a f39421d = new C0565a();

            C0565a() {
                super(3, op.f.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/selfie/databinding/Pi2SelfieReviewCapturesBinding;", 0);
            }

            public final op.f a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return op.f.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final b f39422d = new b();

            b() {
                super(1, u1.class, "<init>", "<init>(Lcom/withpersona/sdk2/inquiry/selfie/databinding/Pi2SelfieReviewCapturesBinding;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final u1 invoke(op.f p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new u1(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // en.c0
        /* renamed from: b */
        public View a(x5.d.e initialRendering, en.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f39420a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // en.c0
        public KClass getType() {
            return this.f39420a.getType();
        }

        private a() {
            k.a aVar = en.k.f21834a;
            this.f39420a = new en.z(Reflection.getOrCreateKotlinClass(x5.d.e.class), C0565a.f39421d, b.f39422d);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends RecyclerView.Adapter {

        /* renamed from: a  reason: collision with root package name */
        private x5.d.e.a f39423a;

        /* renamed from: b  reason: collision with root package name */
        private List f39424b = CollectionsKt.l();

        /* renamed from: c  reason: collision with root package name */
        private TextBasedComponentStyle f39425c;

        /* renamed from: d  reason: collision with root package name */
        private final sp.e f39426d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private final String f39427a;

            /* renamed from: b  reason: collision with root package name */
            private final a1 f39428b;

            public a(String str, a1 selfie) {
                Intrinsics.checkNotNullParameter(selfie, "selfie");
                this.f39427a = str;
                this.f39428b = selfie;
            }

            public final String a() {
                return this.f39427a;
            }

            public final a1 b() {
                return this.f39428b;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof a)) {
                    return false;
                }
                a aVar = (a) obj;
                if (Intrinsics.areEqual(this.f39427a, aVar.f39427a) && Intrinsics.areEqual(this.f39428b, aVar.f39428b)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                int hashCode;
                String str = this.f39427a;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                return (hashCode * 31) + this.f39428b.hashCode();
            }

            public String toString() {
                String str = this.f39427a;
                a1 a1Var = this.f39428b;
                return "SelfieItem(label=" + str + ", selfie=" + a1Var + ")";
            }
        }

        /* renamed from: np.u1$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class C0566b {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f39429a;

            static {
                int[] iArr = new int[a1.b.values().length];
                try {
                    iArr[a1.b.f39020d.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[a1.b.f39021e.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                try {
                    iArr[a1.b.f39022i.ordinal()] = 3;
                } catch (NoSuchFieldError unused3) {
                }
                f39429a = iArr;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class c extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final c f39430d = new c();

            c() {
                super(3, op.g.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/selfie/databinding/Pi2SelfieReviewItemBinding;", 0);
            }

            public final op.g a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return op.g.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        public b() {
            sp.e eVar = new sp.e(new Function2() { // from class: np.v1
                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(Object obj, Object obj2) {
                    boolean c10;
                    c10 = u1.b.c((u1.b.a) obj, (u1.b.a) obj2);
                    return Boolean.valueOf(c10);
                }
            }, null, null, 6, null);
            eVar.j(Reflection.getOrCreateKotlinClass(a.class), Reflection.getOrCreateKotlinClass(op.g.class), c.f39430d, new Function3() { // from class: np.w1
                @Override // kotlin.jvm.functions.Function3
                public final Object invoke(Object obj, Object obj2, Object obj3) {
                    Unit d10;
                    d10 = u1.b.d(u1.b.this, (u1.b.a) obj, (op.g) obj2, (RecyclerView.ViewHolder) obj3);
                    return d10;
                }
            }, null);
            this.f39426d = eVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final boolean c(a old, a aVar) {
            Intrinsics.checkNotNullParameter(old, "old");
            Intrinsics.checkNotNullParameter(aVar, "new");
            return Intrinsics.areEqual(old.b().a(), aVar.b().a());
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit d(b bVar, a item, op.g b10, RecyclerView.ViewHolder h10) {
            Intrinsics.checkNotNullParameter(item, "item");
            Intrinsics.checkNotNullParameter(b10, "b");
            Intrinsics.checkNotNullParameter(h10, "h");
            ShapeableImageView image = b10.f42614b;
            Intrinsics.checkNotNullExpressionValue(image, "image");
            v4.a.a(image.getContext()).a(new h.a(image.getContext()).d(item.b().a()).r(image).a());
            String a10 = item.a();
            if (a10 != null && !StringsKt.k0(a10)) {
                b10.f42615c.setVisibility(0);
                TextView label = b10.f42615c;
                Intrinsics.checkNotNullExpressionValue(label, "label");
                hq.f.d(label, item.a());
            } else {
                b10.f42615c.setVisibility(8);
            }
            TextBasedComponentStyle textBasedComponentStyle = bVar.f39425c;
            if (textBasedComponentStyle != null) {
                TextView label2 = b10.f42615c;
                Intrinsics.checkNotNullExpressionValue(label2, "label");
                lq.f0.n(label2, textBasedComponentStyle, null, 2, null);
            }
            b10.getRoot().setContentDescription(item.a());
            return Unit.f31765a;
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r3v2, types: [np.u1$b$a] */
        private final void e() {
            ArrayList arrayList = new ArrayList();
            for (a1 a1Var : this.f39424b) {
                String str = null;
                if (a1Var instanceof a1.c) {
                    int i10 = C0566b.f39429a[((a1.c) a1Var).d().ordinal()];
                    if (i10 != 1) {
                        if (i10 != 2) {
                            if (i10 == 3) {
                                x5.d.e.a aVar = this.f39423a;
                                if (aVar != null) {
                                    str = aVar.e();
                                }
                            } else {
                                throw new rr.p();
                            }
                        } else {
                            x5.d.e.a aVar2 = this.f39423a;
                            if (aVar2 != null) {
                                str = aVar2.d();
                            }
                        }
                    } else {
                        x5.d.e.a aVar3 = this.f39423a;
                        if (aVar3 != null) {
                            str = aVar3.c();
                        }
                    }
                    str = new a(str, a1Var);
                } else if (!(a1Var instanceof a1.d)) {
                    throw new rr.p();
                }
                if (str != null) {
                    arrayList.add(str);
                }
            }
            sp.e.t(this.f39426d, arrayList, this, null, 4, null);
        }

        public final void f(TextBasedComponentStyle textStyle) {
            Intrinsics.checkNotNullParameter(textStyle, "textStyle");
            this.f39425c = textStyle;
            e();
        }

        public final void g(x5.d.e.a strings) {
            Intrinsics.checkNotNullParameter(strings, "strings");
            this.f39423a = strings;
            e();
        }

        @Override // androidx.recyclerview.widget.RecyclerView.Adapter
        public int getItemCount() {
            return this.f39426d.m();
        }

        @Override // androidx.recyclerview.widget.RecyclerView.Adapter
        public int getItemViewType(int i10) {
            return this.f39426d.o(i10);
        }

        @Override // androidx.recyclerview.widget.RecyclerView.Adapter
        public void onBindViewHolder(RecyclerView.ViewHolder holder, int i10) {
            Intrinsics.checkNotNullParameter(holder, "holder");
            this.f39426d.q(holder, i10);
        }

        @Override // androidx.recyclerview.widget.RecyclerView.Adapter
        public RecyclerView.ViewHolder onCreateViewHolder(ViewGroup parent, int i10) {
            Intrinsics.checkNotNullParameter(parent, "parent");
            return this.f39426d.r(parent, i10);
        }

        public final void setData(List data) {
            Intrinsics.checkNotNullParameter(data, "data");
            this.f39424b = data;
            e();
        }
    }

    public u1(op.f binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.f39416b = binding;
        b bVar = new b();
        this.f39417c = bVar;
        this.f39418d = new LinearLayoutManager(binding.getRoot().getContext());
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        this.f39419e = new GridAutoFitLayoutManager(context, binding.getRoot().getContext().getResources().getDimensionPixelSize(u0.f39414a));
        binding.f42609e.setAdapter(bVar);
        binding.f42609e.setHasFixedSize(true);
        ConstraintLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        cq.f.d(root, false, false, false, false, 15, null);
    }

    private final void f(StepStyles.SelfieStepStyle selfieStepStyle, en.a0 a0Var) {
        StepStyles.StepCancelButtonComponentStyleContainer base;
        ButtonCancelComponentStyle base2;
        TextBasedComponentStyle titleStyleValue = selfieStepStyle.getTitleStyleValue();
        if (titleStyleValue != null) {
            TextView textView = this.f39416b.f42611g;
            textView.setPadding(textView.getPaddingLeft(), 0, this.f39416b.f42611g.getPaddingRight(), 0);
            TextView title = this.f39416b.f42611g;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            lq.f0.n(title, titleStyleValue, null, 2, null);
        }
        TextBasedComponentStyle textStyleValue = selfieStepStyle.getTextStyleValue();
        if (textStyleValue != null) {
            TextView textView2 = this.f39416b.f42606b;
            textView2.setPadding(textView2.getPaddingLeft(), 0, this.f39416b.f42606b.getPaddingRight(), 0);
            TextView body = this.f39416b.f42606b;
            Intrinsics.checkNotNullExpressionValue(body, "body");
            lq.f0.n(body, textStyleValue, null, 2, null);
            this.f39417c.f(textStyleValue);
        }
        Integer backgroundColorValue = selfieStepStyle.getBackgroundColorValue();
        if (backgroundColorValue != null) {
            int intValue = backgroundColorValue.intValue();
            this.f39416b.getRoot().setBackgroundColor(intValue);
            bq.c.a(a0Var, intValue);
        }
        Context context = this.f39416b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Drawable a10 = nq.c.a(selfieStepStyle, context);
        if (a10 != null) {
            this.f39416b.getRoot().setBackground(a10);
        }
        Integer headerButtonColorValue = selfieStepStyle.getHeaderButtonColorValue();
        if (headerButtonColorValue != null) {
            this.f39416b.f42608d.setControlsColor(headerButtonColorValue.intValue());
        }
        ButtonSubmitComponentStyle buttonPrimaryStyleValue = selfieStepStyle.getButtonPrimaryStyleValue();
        if (buttonPrimaryStyleValue != null) {
            Button usePhotosButton = this.f39416b.f42612h;
            Intrinsics.checkNotNullExpressionValue(usePhotosButton, "usePhotosButton");
            lq.e.f(usePhotosButton, buttonPrimaryStyleValue, false, false, 6, null);
        }
        StepStyles.StepSecondaryButtonComponentStyle buttonSecondaryStyle = selfieStepStyle.getButtonSecondaryStyle();
        if (buttonSecondaryStyle != null && (base = buttonSecondaryStyle.getBase()) != null && (base2 = base.getBase()) != null) {
            Button retakeButton = this.f39416b.f42610f;
            Intrinsics.checkNotNullExpressionValue(retakeButton, "retakeButton");
            lq.e.f(retakeButton, base2, false, false, 6, null);
        }
        Integer headerButtonColorValue2 = selfieStepStyle.getHeaderButtonColorValue();
        if (headerButtonColorValue2 != null) {
            this.f39416b.f42608d.setControlsColor(headerButtonColorValue2.intValue());
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
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k(x5.d.e eVar) {
        eVar.c().invoke();
        return Unit.f31765a;
    }

    @Override // en.k
    /* renamed from: g */
    public void a(final x5.d.e rendering, en.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        op.f fVar = this.f39416b;
        if (rendering.f().size() <= 1) {
            fVar.f42609e.setLayoutManager(this.f39418d);
        } else {
            fVar.f42609e.setLayoutManager(this.f39419e);
        }
        TextView title = fVar.f42611g;
        Intrinsics.checkNotNullExpressionValue(title, "title");
        hq.f.d(title, rendering.g().g());
        TextView body = fVar.f42606b;
        Intrinsics.checkNotNullExpressionValue(body, "body");
        hq.f.d(body, rendering.g().a());
        fVar.f42612h.setText(rendering.g().f());
        fVar.f42612h.setOnClickListener(new View.OnClickListener() { // from class: np.q1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                u1.h(x5.d.e.this, view);
            }
        });
        fVar.f42610f.setText(rendering.g().b());
        fVar.f42610f.setOnClickListener(new View.OnClickListener() { // from class: np.r1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                u1.i(x5.d.e.this, view);
            }
        });
        if (rendering.h() != null) {
            f(rendering.h(), viewEnvironment);
        }
        this.f39417c.g(rendering.g());
        this.f39417c.setData(rendering.f());
        aq.a a10 = rendering.a();
        Function0 function0 = new Function0() { // from class: np.s1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j10;
                j10 = u1.j(x5.d.e.this);
                return j10;
            }
        };
        Function0 function02 = new Function0() { // from class: np.t1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit k10;
                k10 = u1.k(x5.d.e.this);
                return k10;
            }
        };
        Pi2NavigationBar navigationBar = this.f39416b.f42608d;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        ConstraintLayout root = this.f39416b.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        aq.e.b(a10, function0, function02, navigationBar, root);
    }
}
