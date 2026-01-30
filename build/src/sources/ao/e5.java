package ao;

import android.content.Context;
import android.graphics.BitmapFactory;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.GradientDrawable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonCancelComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonSubmitComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.shared.ui.ButtonWithLoadingIndicator;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import g5.h;
import java.io.File;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.text.StringsKt;
import vm.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e5 implements vm.b {
    private final StepStyles.GovernmentIdStepStyle A;
    private final boolean B;
    private final vm.c0 C;

    /* renamed from: d  reason: collision with root package name */
    private final v4.h f5900d;

    /* renamed from: e  reason: collision with root package name */
    private final String f5901e;

    /* renamed from: i  reason: collision with root package name */
    private final String f5902i;

    /* renamed from: o  reason: collision with root package name */
    private final String f5903o;

    /* renamed from: p  reason: collision with root package name */
    private final String f5904p;

    /* renamed from: q  reason: collision with root package name */
    private final String f5905q;

    /* renamed from: r  reason: collision with root package name */
    private final String f5906r;

    /* renamed from: s  reason: collision with root package name */
    private final String f5907s;

    /* renamed from: t  reason: collision with root package name */
    private final rp.a f5908t;

    /* renamed from: u  reason: collision with root package name */
    private final Function0 f5909u;

    /* renamed from: v  reason: collision with root package name */
    private final Function0 f5910v;

    /* renamed from: w  reason: collision with root package name */
    private final Function0 f5911w;

    /* renamed from: x  reason: collision with root package name */
    private final Function0 f5912x;

    /* renamed from: y  reason: collision with root package name */
    private final String f5913y;

    /* renamed from: z  reason: collision with root package name */
    private final Function0 f5914z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f5915d = new a();

        a() {
            super(3, fo.h.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2GovernmentidReviewSelectedImageBinding;", 0);
        }

        public final fo.h a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return fo.h.c(p02, viewGroup, z10);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
        }
    }

    public e5(v4.h imageLoader, String title, String body, String confirmButtonText, String chooseNewPhotoText, String fileToReviewPath, String fileMimeType, String str, rp.a navigationState, Function0 onUsePhotoClick, Function0 onChooseNewPhotoClick, Function0 onBack, Function0 onCancel, String str2, Function0 onErrorDismissed, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, boolean z10) {
        Intrinsics.checkNotNullParameter(imageLoader, "imageLoader");
        Intrinsics.checkNotNullParameter(title, "title");
        Intrinsics.checkNotNullParameter(body, "body");
        Intrinsics.checkNotNullParameter(confirmButtonText, "confirmButtonText");
        Intrinsics.checkNotNullParameter(chooseNewPhotoText, "chooseNewPhotoText");
        Intrinsics.checkNotNullParameter(fileToReviewPath, "fileToReviewPath");
        Intrinsics.checkNotNullParameter(fileMimeType, "fileMimeType");
        Intrinsics.checkNotNullParameter(navigationState, "navigationState");
        Intrinsics.checkNotNullParameter(onUsePhotoClick, "onUsePhotoClick");
        Intrinsics.checkNotNullParameter(onChooseNewPhotoClick, "onChooseNewPhotoClick");
        Intrinsics.checkNotNullParameter(onBack, "onBack");
        Intrinsics.checkNotNullParameter(onCancel, "onCancel");
        Intrinsics.checkNotNullParameter(onErrorDismissed, "onErrorDismissed");
        this.f5900d = imageLoader;
        this.f5901e = title;
        this.f5902i = body;
        this.f5903o = confirmButtonText;
        this.f5904p = chooseNewPhotoText;
        this.f5905q = fileToReviewPath;
        this.f5906r = fileMimeType;
        this.f5907s = str;
        this.f5908t = navigationState;
        this.f5909u = onUsePhotoClick;
        this.f5910v = onChooseNewPhotoClick;
        this.f5911w = onBack;
        this.f5912x = onCancel;
        this.f5913y = str2;
        this.f5914z = onErrorDismissed;
        this.A = governmentIdStepStyle;
        this.B = z10;
        k.a aVar = vm.k.f51283a;
        this.C = new vm.z(Reflection.getOrCreateKotlinClass(e5.class), a.f5915d, new Function1() { // from class: ao.y4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                vm.k i10;
                i10 = e5.i(e5.this, (fo.h) obj);
                return i10;
            }
        });
    }

    private final void h(StepStyles.GovernmentIdStepStyle governmentIdStepStyle, View view, Pi2NavigationBar pi2NavigationBar, TextView textView, TextView textView2, ButtonWithLoadingIndicator buttonWithLoadingIndicator, Button button, vm.a0 a0Var) {
        Integer backgroundColorValue = governmentIdStepStyle.getBackgroundColorValue();
        if (backgroundColorValue != null) {
            int intValue = backgroundColorValue.intValue();
            view.setBackgroundColor(intValue);
            sp.c.a(a0Var, intValue);
        }
        Context context = view.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Drawable a10 = eq.c.a(governmentIdStepStyle, context);
        if (a10 != null) {
            view.setBackground(a10);
        }
        Integer headerButtonColorValue = governmentIdStepStyle.getHeaderButtonColorValue();
        if (headerButtonColorValue != null) {
            pi2NavigationBar.setControlsColor(headerButtonColorValue.intValue());
        }
        TextBasedComponentStyle titleStyleValue = governmentIdStepStyle.getTitleStyleValue();
        if (titleStyleValue != null) {
            cq.f0.n(textView, titleStyleValue, null, 2, null);
        }
        TextBasedComponentStyle textStyleValue = governmentIdStepStyle.getTextStyleValue();
        if (textStyleValue != null) {
            cq.f0.n(textView2, textStyleValue, null, 2, null);
        }
        ButtonSubmitComponentStyle buttonPrimaryStyleValue = governmentIdStepStyle.getButtonPrimaryStyleValue();
        if (buttonPrimaryStyleValue != null) {
            cq.e.d(buttonWithLoadingIndicator, buttonPrimaryStyleValue);
        }
        ButtonCancelComponentStyle buttonSecondaryStyleValue = governmentIdStepStyle.getButtonSecondaryStyleValue();
        if (buttonSecondaryStyleValue != null) {
            cq.e.f(button, buttonSecondaryStyleValue, false, false, 6, null);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final vm.k i(final e5 e5Var, final fo.h binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        CoordinatorLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        tp.f.d(root, false, false, false, false, 15, null);
        return new vm.k() { // from class: ao.z4
            @Override // vm.k
            public final void a(Object obj, vm.a0 a0Var) {
                e5.j(fo.h.this, e5Var, (e5) obj, a0Var);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(fo.h hVar, final e5 e5Var, final e5 rendering, vm.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        hVar.f25398i.setText(rendering.f5901e);
        hVar.f25391b.setText(rendering.f5902i);
        hVar.f25399j.setText(e5Var.f5903o);
        hVar.f25399j.setOnClickListener(new View.OnClickListener() { // from class: ao.a5
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                e5.k(e5.this, view);
            }
        });
        hVar.f25392c.setText(e5Var.f5904p);
        hVar.f25392c.setOnClickListener(new View.OnClickListener() { // from class: ao.b5
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                e5.l(e5.this, view);
            }
        });
        File file = new File(e5Var.f5905q);
        BitmapFactory.Options options = new BitmapFactory.Options();
        options.inJustDecodeBounds = true;
        BitmapFactory.decodeFile(e5Var.f5905q, options);
        if (StringsKt.P(e5Var.f5906r, "image/", false, 2, null)) {
            ImageView imageView = hVar.f25395f;
            Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
            v4.h hVar2 = e5Var.f5900d;
            h.a r10 = new h.a(imageView.getContext()).d(file).r(imageView);
            GradientDrawable gradientDrawable = new GradientDrawable();
            gradientDrawable.setShape(0);
            gradientDrawable.setSize(options.outWidth, options.outHeight);
            gradientDrawable.setColor(0);
            r10.i(gradientDrawable);
            hVar2.a(r10.a());
        } else {
            hVar.f25395f.setVisibility(8);
            hVar.f25393d.setVisibility(0);
            hVar.f25394e.setVisibility(0);
            hVar.f25394e.setText(e5Var.f5907s);
        }
        rp.a aVar = rendering.f5908t;
        Function0 function0 = new Function0() { // from class: ao.c5
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit m10;
                m10 = e5.m(e5.this);
                return m10;
            }
        };
        Function0 function02 = new Function0() { // from class: ao.d5
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit n10;
                n10 = e5.n(e5.this);
                return n10;
            }
        };
        Pi2NavigationBar navigationBar = hVar.f25397h;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        CoordinatorLayout root = hVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        rp.e.b(aVar, function0, function02, navigationBar, root);
        hVar.f25399j.setIsLoading(rendering.B);
        CoordinatorLayout root2 = hVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
        jp.z.b(root2, rendering.f5913y, rendering.f5914z, null, 0, 0, 56, null);
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = e5Var.A;
        if (governmentIdStepStyle != null) {
            CoordinatorLayout root3 = hVar.getRoot();
            Intrinsics.checkNotNullExpressionValue(root3, "getRoot(...)");
            Pi2NavigationBar navigationBar2 = hVar.f25397h;
            Intrinsics.checkNotNullExpressionValue(navigationBar2, "navigationBar");
            TextView title = hVar.f25398i;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            TextView body = hVar.f25391b;
            Intrinsics.checkNotNullExpressionValue(body, "body");
            ButtonWithLoadingIndicator usePhotoButton = hVar.f25399j;
            Intrinsics.checkNotNullExpressionValue(usePhotoButton, "usePhotoButton");
            Button chooseNewPhotoButton = hVar.f25392c;
            Intrinsics.checkNotNullExpressionValue(chooseNewPhotoButton, "chooseNewPhotoButton");
            e5Var.h(governmentIdStepStyle, root3, navigationBar2, title, body, usePhotoButton, chooseNewPhotoButton, viewEnvironment);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(e5 e5Var, View view) {
        e5Var.f5909u.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void l(e5 e5Var, View view) {
        e5Var.f5910v.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(e5 e5Var) {
        e5Var.f5911w.invoke();
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n(e5 e5Var) {
        e5Var.f5912x.invoke();
        return Unit.f33298a;
    }

    @Override // vm.b
    public vm.c0 a() {
        return this.C;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof e5)) {
            return false;
        }
        e5 e5Var = (e5) obj;
        if (Intrinsics.areEqual(this.f5900d, e5Var.f5900d) && Intrinsics.areEqual(this.f5901e, e5Var.f5901e) && Intrinsics.areEqual(this.f5902i, e5Var.f5902i) && Intrinsics.areEqual(this.f5903o, e5Var.f5903o) && Intrinsics.areEqual(this.f5904p, e5Var.f5904p) && Intrinsics.areEqual(this.f5905q, e5Var.f5905q) && Intrinsics.areEqual(this.f5906r, e5Var.f5906r) && Intrinsics.areEqual(this.f5907s, e5Var.f5907s) && Intrinsics.areEqual(this.f5908t, e5Var.f5908t) && Intrinsics.areEqual(this.f5909u, e5Var.f5909u) && Intrinsics.areEqual(this.f5910v, e5Var.f5910v) && Intrinsics.areEqual(this.f5911w, e5Var.f5911w) && Intrinsics.areEqual(this.f5912x, e5Var.f5912x) && Intrinsics.areEqual(this.f5913y, e5Var.f5913y) && Intrinsics.areEqual(this.f5914z, e5Var.f5914z) && Intrinsics.areEqual(this.A, e5Var.A) && this.B == e5Var.B) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3 = ((((((((((((this.f5900d.hashCode() * 31) + this.f5901e.hashCode()) * 31) + this.f5902i.hashCode()) * 31) + this.f5903o.hashCode()) * 31) + this.f5904p.hashCode()) * 31) + this.f5905q.hashCode()) * 31) + this.f5906r.hashCode()) * 31;
        String str = this.f5907s;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode4 = (((((((((((hashCode3 + hashCode) * 31) + this.f5908t.hashCode()) * 31) + this.f5909u.hashCode()) * 31) + this.f5910v.hashCode()) * 31) + this.f5911w.hashCode()) * 31) + this.f5912x.hashCode()) * 31;
        String str2 = this.f5913y;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int hashCode5 = (((hashCode4 + hashCode2) * 31) + this.f5914z.hashCode()) * 31;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.A;
        if (governmentIdStepStyle != null) {
            i10 = governmentIdStepStyle.hashCode();
        }
        return ((hashCode5 + i10) * 31) + Boolean.hashCode(this.B);
    }

    public String toString() {
        v4.h hVar = this.f5900d;
        String str = this.f5901e;
        String str2 = this.f5902i;
        String str3 = this.f5903o;
        String str4 = this.f5904p;
        String str5 = this.f5905q;
        String str6 = this.f5906r;
        String str7 = this.f5907s;
        rp.a aVar = this.f5908t;
        Function0 function0 = this.f5909u;
        Function0 function02 = this.f5910v;
        Function0 function03 = this.f5911w;
        Function0 function04 = this.f5912x;
        String str8 = this.f5913y;
        Function0 function05 = this.f5914z;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.A;
        boolean z10 = this.B;
        return "ReviewSelectedImageView(imageLoader=" + hVar + ", title=" + str + ", body=" + str2 + ", confirmButtonText=" + str3 + ", chooseNewPhotoText=" + str4 + ", fileToReviewPath=" + str5 + ", fileMimeType=" + str6 + ", fileName=" + str7 + ", navigationState=" + aVar + ", onUsePhotoClick=" + function0 + ", onChooseNewPhotoClick=" + function02 + ", onBack=" + function03 + ", onCancel=" + function04 + ", error=" + str8 + ", onErrorDismissed=" + function05 + ", styles=" + governmentIdStepStyle + ", isAutoClassifying=" + z10 + ")";
    }
}
