package ko;

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
import en.k;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e5 implements en.b {
    private final StepStyles.GovernmentIdStepStyle A;
    private final boolean B;
    private final en.c0 C;

    /* renamed from: d  reason: collision with root package name */
    private final v4.h f31085d;

    /* renamed from: e  reason: collision with root package name */
    private final String f31086e;

    /* renamed from: i  reason: collision with root package name */
    private final String f31087i;

    /* renamed from: o  reason: collision with root package name */
    private final String f31088o;

    /* renamed from: p  reason: collision with root package name */
    private final String f31089p;

    /* renamed from: q  reason: collision with root package name */
    private final String f31090q;

    /* renamed from: r  reason: collision with root package name */
    private final String f31091r;

    /* renamed from: s  reason: collision with root package name */
    private final String f31092s;

    /* renamed from: t  reason: collision with root package name */
    private final aq.a f31093t;

    /* renamed from: u  reason: collision with root package name */
    private final Function0 f31094u;

    /* renamed from: v  reason: collision with root package name */
    private final Function0 f31095v;

    /* renamed from: w  reason: collision with root package name */
    private final Function0 f31096w;

    /* renamed from: x  reason: collision with root package name */
    private final Function0 f31097x;

    /* renamed from: y  reason: collision with root package name */
    private final String f31098y;

    /* renamed from: z  reason: collision with root package name */
    private final Function0 f31099z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f31100d = new a();

        a() {
            super(3, oo.h.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2GovernmentidReviewSelectedImageBinding;", 0);
        }

        public final oo.h a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return oo.h.c(p02, viewGroup, z10);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
        }
    }

    public e5(v4.h imageLoader, String title, String body, String confirmButtonText, String chooseNewPhotoText, String fileToReviewPath, String fileMimeType, String str, aq.a navigationState, Function0 onUsePhotoClick, Function0 onChooseNewPhotoClick, Function0 onBack, Function0 onCancel, String str2, Function0 onErrorDismissed, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, boolean z10) {
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
        this.f31085d = imageLoader;
        this.f31086e = title;
        this.f31087i = body;
        this.f31088o = confirmButtonText;
        this.f31089p = chooseNewPhotoText;
        this.f31090q = fileToReviewPath;
        this.f31091r = fileMimeType;
        this.f31092s = str;
        this.f31093t = navigationState;
        this.f31094u = onUsePhotoClick;
        this.f31095v = onChooseNewPhotoClick;
        this.f31096w = onBack;
        this.f31097x = onCancel;
        this.f31098y = str2;
        this.f31099z = onErrorDismissed;
        this.A = governmentIdStepStyle;
        this.B = z10;
        k.a aVar = en.k.f21834a;
        this.C = new en.z(Reflection.getOrCreateKotlinClass(e5.class), a.f31100d, new Function1() { // from class: ko.y4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                en.k i10;
                i10 = e5.i(e5.this, (oo.h) obj);
                return i10;
            }
        });
    }

    private final void h(StepStyles.GovernmentIdStepStyle governmentIdStepStyle, View view, Pi2NavigationBar pi2NavigationBar, TextView textView, TextView textView2, ButtonWithLoadingIndicator buttonWithLoadingIndicator, Button button, en.a0 a0Var) {
        Integer backgroundColorValue = governmentIdStepStyle.getBackgroundColorValue();
        if (backgroundColorValue != null) {
            int intValue = backgroundColorValue.intValue();
            view.setBackgroundColor(intValue);
            bq.c.a(a0Var, intValue);
        }
        Context context = view.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Drawable a10 = nq.c.a(governmentIdStepStyle, context);
        if (a10 != null) {
            view.setBackground(a10);
        }
        Integer headerButtonColorValue = governmentIdStepStyle.getHeaderButtonColorValue();
        if (headerButtonColorValue != null) {
            pi2NavigationBar.setControlsColor(headerButtonColorValue.intValue());
        }
        TextBasedComponentStyle titleStyleValue = governmentIdStepStyle.getTitleStyleValue();
        if (titleStyleValue != null) {
            lq.f0.n(textView, titleStyleValue, null, 2, null);
        }
        TextBasedComponentStyle textStyleValue = governmentIdStepStyle.getTextStyleValue();
        if (textStyleValue != null) {
            lq.f0.n(textView2, textStyleValue, null, 2, null);
        }
        ButtonSubmitComponentStyle buttonPrimaryStyleValue = governmentIdStepStyle.getButtonPrimaryStyleValue();
        if (buttonPrimaryStyleValue != null) {
            lq.e.d(buttonWithLoadingIndicator, buttonPrimaryStyleValue);
        }
        ButtonCancelComponentStyle buttonSecondaryStyleValue = governmentIdStepStyle.getButtonSecondaryStyleValue();
        if (buttonSecondaryStyleValue != null) {
            lq.e.f(button, buttonSecondaryStyleValue, false, false, 6, null);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.k i(final e5 e5Var, final oo.h binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        CoordinatorLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        cq.f.d(root, false, false, false, false, 15, null);
        return new en.k() { // from class: ko.z4
            @Override // en.k
            public final void a(Object obj, en.a0 a0Var) {
                e5.j(oo.h.this, e5Var, (e5) obj, a0Var);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(oo.h hVar, final e5 e5Var, final e5 rendering, en.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        hVar.f42526i.setText(rendering.f31086e);
        hVar.f42519b.setText(rendering.f31087i);
        hVar.f42527j.setText(e5Var.f31088o);
        hVar.f42527j.setOnClickListener(new View.OnClickListener() { // from class: ko.a5
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                e5.k(e5.this, view);
            }
        });
        hVar.f42520c.setText(e5Var.f31089p);
        hVar.f42520c.setOnClickListener(new View.OnClickListener() { // from class: ko.b5
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                e5.l(e5.this, view);
            }
        });
        File file = new File(e5Var.f31090q);
        BitmapFactory.Options options = new BitmapFactory.Options();
        options.inJustDecodeBounds = true;
        BitmapFactory.decodeFile(e5Var.f31090q, options);
        if (StringsKt.P(e5Var.f31091r, "image/", false, 2, null)) {
            ImageView imageView = hVar.f42523f;
            Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
            v4.h hVar2 = e5Var.f31085d;
            h.a r10 = new h.a(imageView.getContext()).d(file).r(imageView);
            GradientDrawable gradientDrawable = new GradientDrawable();
            gradientDrawable.setShape(0);
            gradientDrawable.setSize(options.outWidth, options.outHeight);
            gradientDrawable.setColor(0);
            r10.i(gradientDrawable);
            hVar2.a(r10.a());
        } else {
            hVar.f42523f.setVisibility(8);
            hVar.f42521d.setVisibility(0);
            hVar.f42522e.setVisibility(0);
            hVar.f42522e.setText(e5Var.f31092s);
        }
        aq.a aVar = rendering.f31093t;
        Function0 function0 = new Function0() { // from class: ko.c5
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit m10;
                m10 = e5.m(e5.this);
                return m10;
            }
        };
        Function0 function02 = new Function0() { // from class: ko.d5
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit n10;
                n10 = e5.n(e5.this);
                return n10;
            }
        };
        Pi2NavigationBar navigationBar = hVar.f42525h;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        CoordinatorLayout root = hVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        aq.e.b(aVar, function0, function02, navigationBar, root);
        hVar.f42527j.setIsLoading(rendering.B);
        CoordinatorLayout root2 = hVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
        sp.z.b(root2, rendering.f31098y, rendering.f31099z, null, 0, 0, 56, null);
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = e5Var.A;
        if (governmentIdStepStyle != null) {
            CoordinatorLayout root3 = hVar.getRoot();
            Intrinsics.checkNotNullExpressionValue(root3, "getRoot(...)");
            Pi2NavigationBar navigationBar2 = hVar.f42525h;
            Intrinsics.checkNotNullExpressionValue(navigationBar2, "navigationBar");
            TextView title = hVar.f42526i;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            TextView body = hVar.f42519b;
            Intrinsics.checkNotNullExpressionValue(body, "body");
            ButtonWithLoadingIndicator usePhotoButton = hVar.f42527j;
            Intrinsics.checkNotNullExpressionValue(usePhotoButton, "usePhotoButton");
            Button chooseNewPhotoButton = hVar.f42520c;
            Intrinsics.checkNotNullExpressionValue(chooseNewPhotoButton, "chooseNewPhotoButton");
            e5Var.h(governmentIdStepStyle, root3, navigationBar2, title, body, usePhotoButton, chooseNewPhotoButton, viewEnvironment);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(e5 e5Var, View view) {
        e5Var.f31094u.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void l(e5 e5Var, View view) {
        e5Var.f31095v.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(e5 e5Var) {
        e5Var.f31096w.invoke();
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n(e5 e5Var) {
        e5Var.f31097x.invoke();
        return Unit.f31765a;
    }

    @Override // en.b
    public en.c0 a() {
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
        if (Intrinsics.areEqual(this.f31085d, e5Var.f31085d) && Intrinsics.areEqual(this.f31086e, e5Var.f31086e) && Intrinsics.areEqual(this.f31087i, e5Var.f31087i) && Intrinsics.areEqual(this.f31088o, e5Var.f31088o) && Intrinsics.areEqual(this.f31089p, e5Var.f31089p) && Intrinsics.areEqual(this.f31090q, e5Var.f31090q) && Intrinsics.areEqual(this.f31091r, e5Var.f31091r) && Intrinsics.areEqual(this.f31092s, e5Var.f31092s) && Intrinsics.areEqual(this.f31093t, e5Var.f31093t) && Intrinsics.areEqual(this.f31094u, e5Var.f31094u) && Intrinsics.areEqual(this.f31095v, e5Var.f31095v) && Intrinsics.areEqual(this.f31096w, e5Var.f31096w) && Intrinsics.areEqual(this.f31097x, e5Var.f31097x) && Intrinsics.areEqual(this.f31098y, e5Var.f31098y) && Intrinsics.areEqual(this.f31099z, e5Var.f31099z) && Intrinsics.areEqual(this.A, e5Var.A) && this.B == e5Var.B) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3 = ((((((((((((this.f31085d.hashCode() * 31) + this.f31086e.hashCode()) * 31) + this.f31087i.hashCode()) * 31) + this.f31088o.hashCode()) * 31) + this.f31089p.hashCode()) * 31) + this.f31090q.hashCode()) * 31) + this.f31091r.hashCode()) * 31;
        String str = this.f31092s;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode4 = (((((((((((hashCode3 + hashCode) * 31) + this.f31093t.hashCode()) * 31) + this.f31094u.hashCode()) * 31) + this.f31095v.hashCode()) * 31) + this.f31096w.hashCode()) * 31) + this.f31097x.hashCode()) * 31;
        String str2 = this.f31098y;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int hashCode5 = (((hashCode4 + hashCode2) * 31) + this.f31099z.hashCode()) * 31;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.A;
        if (governmentIdStepStyle != null) {
            i10 = governmentIdStepStyle.hashCode();
        }
        return ((hashCode5 + i10) * 31) + Boolean.hashCode(this.B);
    }

    public String toString() {
        v4.h hVar = this.f31085d;
        String str = this.f31086e;
        String str2 = this.f31087i;
        String str3 = this.f31088o;
        String str4 = this.f31089p;
        String str5 = this.f31090q;
        String str6 = this.f31091r;
        String str7 = this.f31092s;
        aq.a aVar = this.f31093t;
        Function0 function0 = this.f31094u;
        Function0 function02 = this.f31095v;
        Function0 function03 = this.f31096w;
        Function0 function04 = this.f31097x;
        String str8 = this.f31098y;
        Function0 function05 = this.f31099z;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.A;
        boolean z10 = this.B;
        return "ReviewSelectedImageView(imageLoader=" + hVar + ", title=" + str + ", body=" + str2 + ", confirmButtonText=" + str3 + ", chooseNewPhotoText=" + str4 + ", fileToReviewPath=" + str5 + ", fileMimeType=" + str6 + ", fileName=" + str7 + ", navigationState=" + aVar + ", onUsePhotoClick=" + function0 + ", onChooseNewPhotoClick=" + function02 + ", onBack=" + function03 + ", onCancel=" + function04 + ", error=" + str8 + ", onErrorDismissed=" + function05 + ", styles=" + governmentIdStepStyle + ", isAutoClassifying=" + z10 + ")";
    }
}
