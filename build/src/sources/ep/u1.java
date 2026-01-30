package ep;

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
import ep.a1;
import ep.u1;
import ep.x5;
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
import vm.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u1 implements vm.k {

    /* renamed from: f  reason: collision with root package name */
    public static final a f23407f = new a(null);

    /* renamed from: b  reason: collision with root package name */
    private final fp.f f23408b;

    /* renamed from: c  reason: collision with root package name */
    private final b f23409c;

    /* renamed from: d  reason: collision with root package name */
    private final LinearLayoutManager f23410d;

    /* renamed from: e  reason: collision with root package name */
    private final GridAutoFitLayoutManager f23411e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements vm.c0 {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ vm.c0 f23412a;

        /* renamed from: ep.u1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class C0303a extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final C0303a f23413d = new C0303a();

            C0303a() {
                super(3, fp.f.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/selfie/databinding/Pi2SelfieReviewCapturesBinding;", 0);
            }

            public final fp.f a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return fp.f.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            public static final b f23414d = new b();

            b() {
                super(1, u1.class, "<init>", "<init>(Lcom/withpersona/sdk2/inquiry/selfie/databinding/Pi2SelfieReviewCapturesBinding;)V", 0);
            }

            @Override // kotlin.jvm.functions.Function1
            /* renamed from: a */
            public final u1 invoke(fp.f p02) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return new u1(p02);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @Override // vm.c0
        /* renamed from: b */
        public View a(x5.d.e initialRendering, vm.a0 initialViewEnvironment, Context contextForNewView, ViewGroup viewGroup) {
            Intrinsics.checkNotNullParameter(initialRendering, "initialRendering");
            Intrinsics.checkNotNullParameter(initialViewEnvironment, "initialViewEnvironment");
            Intrinsics.checkNotNullParameter(contextForNewView, "contextForNewView");
            return this.f23412a.a(initialRendering, initialViewEnvironment, contextForNewView, viewGroup);
        }

        @Override // vm.c0
        public KClass getType() {
            return this.f23412a.getType();
        }

        private a() {
            k.a aVar = vm.k.f51283a;
            this.f23412a = new vm.z(Reflection.getOrCreateKotlinClass(x5.d.e.class), C0303a.f23413d, b.f23414d);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends RecyclerView.Adapter {

        /* renamed from: a  reason: collision with root package name */
        private x5.d.e.a f23415a;

        /* renamed from: b  reason: collision with root package name */
        private List f23416b = CollectionsKt.l();

        /* renamed from: c  reason: collision with root package name */
        private TextBasedComponentStyle f23417c;

        /* renamed from: d  reason: collision with root package name */
        private final jp.e f23418d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a {

            /* renamed from: a  reason: collision with root package name */
            private final String f23419a;

            /* renamed from: b  reason: collision with root package name */
            private final a1 f23420b;

            public a(String str, a1 selfie) {
                Intrinsics.checkNotNullParameter(selfie, "selfie");
                this.f23419a = str;
                this.f23420b = selfie;
            }

            public final String a() {
                return this.f23419a;
            }

            public final a1 b() {
                return this.f23420b;
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (!(obj instanceof a)) {
                    return false;
                }
                a aVar = (a) obj;
                if (Intrinsics.areEqual(this.f23419a, aVar.f23419a) && Intrinsics.areEqual(this.f23420b, aVar.f23420b)) {
                    return true;
                }
                return false;
            }

            public int hashCode() {
                int hashCode;
                String str = this.f23419a;
                if (str == null) {
                    hashCode = 0;
                } else {
                    hashCode = str.hashCode();
                }
                return (hashCode * 31) + this.f23420b.hashCode();
            }

            public String toString() {
                String str = this.f23419a;
                a1 a1Var = this.f23420b;
                return "SelfieItem(label=" + str + ", selfie=" + a1Var + ")";
            }
        }

        /* renamed from: ep.u1$b$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public /* synthetic */ class C0304b {

            /* renamed from: a  reason: collision with root package name */
            public static final /* synthetic */ int[] f23421a;

            static {
                int[] iArr = new int[a1.b.values().length];
                try {
                    iArr[a1.b.f23012d.ordinal()] = 1;
                } catch (NoSuchFieldError unused) {
                }
                try {
                    iArr[a1.b.f23013e.ordinal()] = 2;
                } catch (NoSuchFieldError unused2) {
                }
                try {
                    iArr[a1.b.f23014i.ordinal()] = 3;
                } catch (NoSuchFieldError unused3) {
                }
                f23421a = iArr;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        /* synthetic */ class c extends FunctionReferenceImpl implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            public static final c f23422d = new c();

            c() {
                super(3, fp.g.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/selfie/databinding/Pi2SelfieReviewItemBinding;", 0);
            }

            public final fp.g a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
                Intrinsics.checkNotNullParameter(p02, "p0");
                return fp.g.c(p02, viewGroup, z10);
            }

            @Override // kotlin.jvm.functions.Function3
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
                return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
            }
        }

        public b() {
            jp.e eVar = new jp.e(new Function2() { // from class: ep.v1
                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(Object obj, Object obj2) {
                    boolean c10;
                    c10 = u1.b.c((u1.b.a) obj, (u1.b.a) obj2);
                    return Boolean.valueOf(c10);
                }
            }, null, null, 6, null);
            eVar.j(Reflection.getOrCreateKotlinClass(a.class), Reflection.getOrCreateKotlinClass(fp.g.class), c.f23422d, new Function3() { // from class: ep.w1
                @Override // kotlin.jvm.functions.Function3
                public final Object invoke(Object obj, Object obj2, Object obj3) {
                    Unit d10;
                    d10 = u1.b.d(u1.b.this, (u1.b.a) obj, (fp.g) obj2, (RecyclerView.ViewHolder) obj3);
                    return d10;
                }
            }, null);
            this.f23418d = eVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final boolean c(a old, a aVar) {
            Intrinsics.checkNotNullParameter(old, "old");
            Intrinsics.checkNotNullParameter(aVar, "new");
            return Intrinsics.areEqual(old.b().a(), aVar.b().a());
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit d(b bVar, a item, fp.g b10, RecyclerView.ViewHolder h10) {
            Intrinsics.checkNotNullParameter(item, "item");
            Intrinsics.checkNotNullParameter(b10, "b");
            Intrinsics.checkNotNullParameter(h10, "h");
            ShapeableImageView image = b10.f25486b;
            Intrinsics.checkNotNullExpressionValue(image, "image");
            v4.a.a(image.getContext()).a(new h.a(image.getContext()).d(item.b().a()).r(image).a());
            String a10 = item.a();
            if (a10 != null && !StringsKt.k0(a10)) {
                b10.f25487c.setVisibility(0);
                TextView label = b10.f25487c;
                Intrinsics.checkNotNullExpressionValue(label, "label");
                yp.f.d(label, item.a());
            } else {
                b10.f25487c.setVisibility(8);
            }
            TextBasedComponentStyle textBasedComponentStyle = bVar.f23417c;
            if (textBasedComponentStyle != null) {
                TextView label2 = b10.f25487c;
                Intrinsics.checkNotNullExpressionValue(label2, "label");
                cq.f0.n(label2, textBasedComponentStyle, null, 2, null);
            }
            b10.getRoot().setContentDescription(item.a());
            return Unit.f33298a;
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r3v2, types: [ep.u1$b$a] */
        private final void e() {
            ArrayList arrayList = new ArrayList();
            for (a1 a1Var : this.f23416b) {
                String str = null;
                if (a1Var instanceof a1.c) {
                    int i10 = C0304b.f23421a[((a1.c) a1Var).d().ordinal()];
                    if (i10 != 1) {
                        if (i10 != 2) {
                            if (i10 == 3) {
                                x5.d.e.a aVar = this.f23415a;
                                if (aVar != null) {
                                    str = aVar.e();
                                }
                            } else {
                                throw new ir.p();
                            }
                        } else {
                            x5.d.e.a aVar2 = this.f23415a;
                            if (aVar2 != null) {
                                str = aVar2.d();
                            }
                        }
                    } else {
                        x5.d.e.a aVar3 = this.f23415a;
                        if (aVar3 != null) {
                            str = aVar3.c();
                        }
                    }
                    str = new a(str, a1Var);
                } else if (!(a1Var instanceof a1.d)) {
                    throw new ir.p();
                }
                if (str != null) {
                    arrayList.add(str);
                }
            }
            jp.e.t(this.f23418d, arrayList, this, null, 4, null);
        }

        public final void f(TextBasedComponentStyle textStyle) {
            Intrinsics.checkNotNullParameter(textStyle, "textStyle");
            this.f23417c = textStyle;
            e();
        }

        public final void g(x5.d.e.a strings) {
            Intrinsics.checkNotNullParameter(strings, "strings");
            this.f23415a = strings;
            e();
        }

        @Override // androidx.recyclerview.widget.RecyclerView.Adapter
        public int getItemCount() {
            return this.f23418d.m();
        }

        @Override // androidx.recyclerview.widget.RecyclerView.Adapter
        public int getItemViewType(int i10) {
            return this.f23418d.o(i10);
        }

        @Override // androidx.recyclerview.widget.RecyclerView.Adapter
        public void onBindViewHolder(RecyclerView.ViewHolder holder, int i10) {
            Intrinsics.checkNotNullParameter(holder, "holder");
            this.f23418d.q(holder, i10);
        }

        @Override // androidx.recyclerview.widget.RecyclerView.Adapter
        public RecyclerView.ViewHolder onCreateViewHolder(ViewGroup parent, int i10) {
            Intrinsics.checkNotNullParameter(parent, "parent");
            return this.f23418d.r(parent, i10);
        }

        public final void setData(List data) {
            Intrinsics.checkNotNullParameter(data, "data");
            this.f23416b = data;
            e();
        }
    }

    public u1(fp.f binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        this.f23408b = binding;
        b bVar = new b();
        this.f23409c = bVar;
        this.f23410d = new LinearLayoutManager(binding.getRoot().getContext());
        Context context = binding.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        this.f23411e = new GridAutoFitLayoutManager(context, binding.getRoot().getContext().getResources().getDimensionPixelSize(u0.f23406a));
        binding.f25481e.setAdapter(bVar);
        binding.f25481e.setHasFixedSize(true);
        ConstraintLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        tp.f.d(root, false, false, false, false, 15, null);
    }

    private final void f(StepStyles.SelfieStepStyle selfieStepStyle, vm.a0 a0Var) {
        StepStyles.StepCancelButtonComponentStyleContainer base;
        ButtonCancelComponentStyle base2;
        TextBasedComponentStyle titleStyleValue = selfieStepStyle.getTitleStyleValue();
        if (titleStyleValue != null) {
            TextView textView = this.f23408b.f25483g;
            textView.setPadding(textView.getPaddingLeft(), 0, this.f23408b.f25483g.getPaddingRight(), 0);
            TextView title = this.f23408b.f25483g;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            cq.f0.n(title, titleStyleValue, null, 2, null);
        }
        TextBasedComponentStyle textStyleValue = selfieStepStyle.getTextStyleValue();
        if (textStyleValue != null) {
            TextView textView2 = this.f23408b.f25478b;
            textView2.setPadding(textView2.getPaddingLeft(), 0, this.f23408b.f25478b.getPaddingRight(), 0);
            TextView body = this.f23408b.f25478b;
            Intrinsics.checkNotNullExpressionValue(body, "body");
            cq.f0.n(body, textStyleValue, null, 2, null);
            this.f23409c.f(textStyleValue);
        }
        Integer backgroundColorValue = selfieStepStyle.getBackgroundColorValue();
        if (backgroundColorValue != null) {
            int intValue = backgroundColorValue.intValue();
            this.f23408b.getRoot().setBackgroundColor(intValue);
            sp.c.a(a0Var, intValue);
        }
        Context context = this.f23408b.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Drawable a10 = eq.c.a(selfieStepStyle, context);
        if (a10 != null) {
            this.f23408b.getRoot().setBackground(a10);
        }
        Integer headerButtonColorValue = selfieStepStyle.getHeaderButtonColorValue();
        if (headerButtonColorValue != null) {
            this.f23408b.f25480d.setControlsColor(headerButtonColorValue.intValue());
        }
        ButtonSubmitComponentStyle buttonPrimaryStyleValue = selfieStepStyle.getButtonPrimaryStyleValue();
        if (buttonPrimaryStyleValue != null) {
            Button usePhotosButton = this.f23408b.f25484h;
            Intrinsics.checkNotNullExpressionValue(usePhotosButton, "usePhotosButton");
            cq.e.f(usePhotosButton, buttonPrimaryStyleValue, false, false, 6, null);
        }
        StepStyles.StepSecondaryButtonComponentStyle buttonSecondaryStyle = selfieStepStyle.getButtonSecondaryStyle();
        if (buttonSecondaryStyle != null && (base = buttonSecondaryStyle.getBase()) != null && (base2 = base.getBase()) != null) {
            Button retakeButton = this.f23408b.f25482f;
            Intrinsics.checkNotNullExpressionValue(retakeButton, "retakeButton");
            cq.e.f(retakeButton, base2, false, false, 6, null);
        }
        Integer headerButtonColorValue2 = selfieStepStyle.getHeaderButtonColorValue();
        if (headerButtonColorValue2 != null) {
            this.f23408b.f25480d.setControlsColor(headerButtonColorValue2.intValue());
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
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit k(x5.d.e eVar) {
        eVar.c().invoke();
        return Unit.f33298a;
    }

    @Override // vm.k
    /* renamed from: g */
    public void a(final x5.d.e rendering, vm.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        fp.f fVar = this.f23408b;
        if (rendering.f().size() <= 1) {
            fVar.f25481e.setLayoutManager(this.f23410d);
        } else {
            fVar.f25481e.setLayoutManager(this.f23411e);
        }
        TextView title = fVar.f25483g;
        Intrinsics.checkNotNullExpressionValue(title, "title");
        yp.f.d(title, rendering.g().g());
        TextView body = fVar.f25478b;
        Intrinsics.checkNotNullExpressionValue(body, "body");
        yp.f.d(body, rendering.g().a());
        fVar.f25484h.setText(rendering.g().f());
        fVar.f25484h.setOnClickListener(new View.OnClickListener() { // from class: ep.q1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                u1.h(x5.d.e.this, view);
            }
        });
        fVar.f25482f.setText(rendering.g().b());
        fVar.f25482f.setOnClickListener(new View.OnClickListener() { // from class: ep.r1
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                u1.i(x5.d.e.this, view);
            }
        });
        if (rendering.h() != null) {
            f(rendering.h(), viewEnvironment);
        }
        this.f23409c.g(rendering.g());
        this.f23409c.setData(rendering.f());
        rp.a a10 = rendering.a();
        Function0 function0 = new Function0() { // from class: ep.s1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit j10;
                j10 = u1.j(x5.d.e.this);
                return j10;
            }
        };
        Function0 function02 = new Function0() { // from class: ep.t1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit k10;
                k10 = u1.k(x5.d.e.this);
                return k10;
            }
        };
        Pi2NavigationBar navigationBar = this.f23408b.f25480d;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        ConstraintLayout root = this.f23408b.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        rp.e.b(a10, function0, function02, navigationBar, root);
    }
}
