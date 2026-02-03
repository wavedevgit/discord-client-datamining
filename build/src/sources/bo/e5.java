package bo;

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
import wm.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e5 implements wm.b {
    private final StepStyles.GovernmentIdStepStyle A;
    private final boolean B;
    private final wm.c0 C;

    /* renamed from: d  reason: collision with root package name */
    private final v4.h f6723d;

    /* renamed from: e  reason: collision with root package name */
    private final String f6724e;

    /* renamed from: i  reason: collision with root package name */
    private final String f6725i;

    /* renamed from: o  reason: collision with root package name */
    private final String f6726o;

    /* renamed from: p  reason: collision with root package name */
    private final String f6727p;

    /* renamed from: q  reason: collision with root package name */
    private final String f6728q;

    /* renamed from: r  reason: collision with root package name */
    private final String f6729r;

    /* renamed from: s  reason: collision with root package name */
    private final String f6730s;

    /* renamed from: t  reason: collision with root package name */
    private final sp.a f6731t;

    /* renamed from: u  reason: collision with root package name */
    private final Function0 f6732u;

    /* renamed from: v  reason: collision with root package name */
    private final Function0 f6733v;

    /* renamed from: w  reason: collision with root package name */
    private final Function0 f6734w;

    /* renamed from: x  reason: collision with root package name */
    private final Function0 f6735x;

    /* renamed from: y  reason: collision with root package name */
    private final String f6736y;

    /* renamed from: z  reason: collision with root package name */
    private final Function0 f6737z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f6738d = new a();

        a() {
            super(3, go.h.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2GovernmentidReviewSelectedImageBinding;", 0);
        }

        public final go.h a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return go.h.c(p02, viewGroup, z10);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
        }
    }

    public e5(v4.h imageLoader, String title, String body, String confirmButtonText, String chooseNewPhotoText, String fileToReviewPath, String fileMimeType, String str, sp.a navigationState, Function0 onUsePhotoClick, Function0 onChooseNewPhotoClick, Function0 onBack, Function0 onCancel, String str2, Function0 onErrorDismissed, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, boolean z10) {
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
        this.f6723d = imageLoader;
        this.f6724e = title;
        this.f6725i = body;
        this.f6726o = confirmButtonText;
        this.f6727p = chooseNewPhotoText;
        this.f6728q = fileToReviewPath;
        this.f6729r = fileMimeType;
        this.f6730s = str;
        this.f6731t = navigationState;
        this.f6732u = onUsePhotoClick;
        this.f6733v = onChooseNewPhotoClick;
        this.f6734w = onBack;
        this.f6735x = onCancel;
        this.f6736y = str2;
        this.f6737z = onErrorDismissed;
        this.A = governmentIdStepStyle;
        this.B = z10;
        k.a aVar = wm.k.f52359a;
        this.C = new wm.z(Reflection.getOrCreateKotlinClass(e5.class), a.f6738d, new Function1() { // from class: bo.y4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                wm.k i10;
                i10 = e5.i(e5.this, (go.h) obj);
                return i10;
            }
        });
    }

    private final void h(StepStyles.GovernmentIdStepStyle governmentIdStepStyle, View view, Pi2NavigationBar pi2NavigationBar, TextView textView, TextView textView2, ButtonWithLoadingIndicator buttonWithLoadingIndicator, Button button, wm.a0 a0Var) {
        Integer backgroundColorValue = governmentIdStepStyle.getBackgroundColorValue();
        if (backgroundColorValue != null) {
            int intValue = backgroundColorValue.intValue();
            view.setBackgroundColor(intValue);
            tp.c.a(a0Var, intValue);
        }
        Context context = view.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Drawable a10 = fq.c.a(governmentIdStepStyle, context);
        if (a10 != null) {
            view.setBackground(a10);
        }
        Integer headerButtonColorValue = governmentIdStepStyle.getHeaderButtonColorValue();
        if (headerButtonColorValue != null) {
            pi2NavigationBar.setControlsColor(headerButtonColorValue.intValue());
        }
        TextBasedComponentStyle titleStyleValue = governmentIdStepStyle.getTitleStyleValue();
        if (titleStyleValue != null) {
            dq.f0.n(textView, titleStyleValue, null, 2, null);
        }
        TextBasedComponentStyle textStyleValue = governmentIdStepStyle.getTextStyleValue();
        if (textStyleValue != null) {
            dq.f0.n(textView2, textStyleValue, null, 2, null);
        }
        ButtonSubmitComponentStyle buttonPrimaryStyleValue = governmentIdStepStyle.getButtonPrimaryStyleValue();
        if (buttonPrimaryStyleValue != null) {
            dq.e.d(buttonWithLoadingIndicator, buttonPrimaryStyleValue);
        }
        ButtonCancelComponentStyle buttonSecondaryStyleValue = governmentIdStepStyle.getButtonSecondaryStyleValue();
        if (buttonSecondaryStyleValue != null) {
            dq.e.f(button, buttonSecondaryStyleValue, false, false, 6, null);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.k i(final e5 e5Var, final go.h binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        CoordinatorLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        up.f.d(root, false, false, false, false, 15, null);
        return new wm.k() { // from class: bo.z4
            @Override // wm.k
            public final void a(Object obj, wm.a0 a0Var) {
                e5.j(go.h.this, e5Var, (e5) obj, a0Var);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(go.h hVar, final e5 e5Var, final e5 rendering, wm.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        hVar.f27291i.setText(rendering.f6724e);
        hVar.f27284b.setText(rendering.f6725i);
        hVar.f27292j.setText(e5Var.f6726o);
        hVar.f27292j.setOnClickListener(new View.OnClickListener() { // from class: bo.a5
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                e5.k(e5.this, view);
            }
        });
        hVar.f27285c.setText(e5Var.f6727p);
        hVar.f27285c.setOnClickListener(new View.OnClickListener() { // from class: bo.b5
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                e5.l(e5.this, view);
            }
        });
        File file = new File(e5Var.f6728q);
        BitmapFactory.Options options = new BitmapFactory.Options();
        options.inJustDecodeBounds = true;
        BitmapFactory.decodeFile(e5Var.f6728q, options);
        if (StringsKt.P(e5Var.f6729r, "image/", false, 2, null)) {
            ImageView imageView = hVar.f27288f;
            Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
            v4.h hVar2 = e5Var.f6723d;
            h.a r10 = new h.a(imageView.getContext()).d(file).r(imageView);
            GradientDrawable gradientDrawable = new GradientDrawable();
            gradientDrawable.setShape(0);
            gradientDrawable.setSize(options.outWidth, options.outHeight);
            gradientDrawable.setColor(0);
            r10.i(gradientDrawable);
            hVar2.a(r10.a());
        } else {
            hVar.f27288f.setVisibility(8);
            hVar.f27286d.setVisibility(0);
            hVar.f27287e.setVisibility(0);
            hVar.f27287e.setText(e5Var.f6730s);
        }
        sp.a aVar = rendering.f6731t;
        Function0 function0 = new Function0() { // from class: bo.c5
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit m10;
                m10 = e5.m(e5.this);
                return m10;
            }
        };
        Function0 function02 = new Function0() { // from class: bo.d5
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit n10;
                n10 = e5.n(e5.this);
                return n10;
            }
        };
        Pi2NavigationBar navigationBar = hVar.f27290h;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        CoordinatorLayout root = hVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        sp.e.b(aVar, function0, function02, navigationBar, root);
        hVar.f27292j.setIsLoading(rendering.B);
        CoordinatorLayout root2 = hVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
        kp.z.b(root2, rendering.f6736y, rendering.f6737z, null, 0, 0, 56, null);
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = e5Var.A;
        if (governmentIdStepStyle != null) {
            CoordinatorLayout root3 = hVar.getRoot();
            Intrinsics.checkNotNullExpressionValue(root3, "getRoot(...)");
            Pi2NavigationBar navigationBar2 = hVar.f27290h;
            Intrinsics.checkNotNullExpressionValue(navigationBar2, "navigationBar");
            TextView title = hVar.f27291i;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            TextView body = hVar.f27284b;
            Intrinsics.checkNotNullExpressionValue(body, "body");
            ButtonWithLoadingIndicator usePhotoButton = hVar.f27292j;
            Intrinsics.checkNotNullExpressionValue(usePhotoButton, "usePhotoButton");
            Button chooseNewPhotoButton = hVar.f27285c;
            Intrinsics.checkNotNullExpressionValue(chooseNewPhotoButton, "chooseNewPhotoButton");
            e5Var.h(governmentIdStepStyle, root3, navigationBar2, title, body, usePhotoButton, chooseNewPhotoButton, viewEnvironment);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(e5 e5Var, View view) {
        e5Var.f6732u.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void l(e5 e5Var, View view) {
        e5Var.f6733v.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(e5 e5Var) {
        e5Var.f6734w.invoke();
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n(e5 e5Var) {
        e5Var.f6735x.invoke();
        return Unit.f33074a;
    }

    @Override // wm.b
    public wm.c0 a() {
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
        if (Intrinsics.areEqual(this.f6723d, e5Var.f6723d) && Intrinsics.areEqual(this.f6724e, e5Var.f6724e) && Intrinsics.areEqual(this.f6725i, e5Var.f6725i) && Intrinsics.areEqual(this.f6726o, e5Var.f6726o) && Intrinsics.areEqual(this.f6727p, e5Var.f6727p) && Intrinsics.areEqual(this.f6728q, e5Var.f6728q) && Intrinsics.areEqual(this.f6729r, e5Var.f6729r) && Intrinsics.areEqual(this.f6730s, e5Var.f6730s) && Intrinsics.areEqual(this.f6731t, e5Var.f6731t) && Intrinsics.areEqual(this.f6732u, e5Var.f6732u) && Intrinsics.areEqual(this.f6733v, e5Var.f6733v) && Intrinsics.areEqual(this.f6734w, e5Var.f6734w) && Intrinsics.areEqual(this.f6735x, e5Var.f6735x) && Intrinsics.areEqual(this.f6736y, e5Var.f6736y) && Intrinsics.areEqual(this.f6737z, e5Var.f6737z) && Intrinsics.areEqual(this.A, e5Var.A) && this.B == e5Var.B) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3 = ((((((((((((this.f6723d.hashCode() * 31) + this.f6724e.hashCode()) * 31) + this.f6725i.hashCode()) * 31) + this.f6726o.hashCode()) * 31) + this.f6727p.hashCode()) * 31) + this.f6728q.hashCode()) * 31) + this.f6729r.hashCode()) * 31;
        String str = this.f6730s;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode4 = (((((((((((hashCode3 + hashCode) * 31) + this.f6731t.hashCode()) * 31) + this.f6732u.hashCode()) * 31) + this.f6733v.hashCode()) * 31) + this.f6734w.hashCode()) * 31) + this.f6735x.hashCode()) * 31;
        String str2 = this.f6736y;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int hashCode5 = (((hashCode4 + hashCode2) * 31) + this.f6737z.hashCode()) * 31;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.A;
        if (governmentIdStepStyle != null) {
            i10 = governmentIdStepStyle.hashCode();
        }
        return ((hashCode5 + i10) * 31) + Boolean.hashCode(this.B);
    }

    public String toString() {
        v4.h hVar = this.f6723d;
        String str = this.f6724e;
        String str2 = this.f6725i;
        String str3 = this.f6726o;
        String str4 = this.f6727p;
        String str5 = this.f6728q;
        String str6 = this.f6729r;
        String str7 = this.f6730s;
        sp.a aVar = this.f6731t;
        Function0 function0 = this.f6732u;
        Function0 function02 = this.f6733v;
        Function0 function03 = this.f6734w;
        Function0 function04 = this.f6735x;
        String str8 = this.f6736y;
        Function0 function05 = this.f6737z;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.A;
        boolean z10 = this.B;
        return "ReviewSelectedImageView(imageLoader=" + hVar + ", title=" + str + ", body=" + str2 + ", confirmButtonText=" + str3 + ", chooseNewPhotoText=" + str4 + ", fileToReviewPath=" + str5 + ", fileMimeType=" + str6 + ", fileName=" + str7 + ", navigationState=" + aVar + ", onUsePhotoClick=" + function0 + ", onChooseNewPhotoClick=" + function02 + ", onBack=" + function03 + ", onCancel=" + function04 + ", error=" + str8 + ", onErrorDismissed=" + function05 + ", styles=" + governmentIdStepStyle + ", isAutoClassifying=" + z10 + ")";
    }
}
