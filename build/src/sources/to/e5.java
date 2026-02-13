package to;

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
import gn.k;
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
public final class e5 implements gn.b {
    private final StepStyles.GovernmentIdStepStyle A;
    private final boolean B;
    private final gn.c0 C;

    /* renamed from: d  reason: collision with root package name */
    private final v4.h f49646d;

    /* renamed from: e  reason: collision with root package name */
    private final String f49647e;

    /* renamed from: i  reason: collision with root package name */
    private final String f49648i;

    /* renamed from: o  reason: collision with root package name */
    private final String f49649o;

    /* renamed from: p  reason: collision with root package name */
    private final String f49650p;

    /* renamed from: q  reason: collision with root package name */
    private final String f49651q;

    /* renamed from: r  reason: collision with root package name */
    private final String f49652r;

    /* renamed from: s  reason: collision with root package name */
    private final String f49653s;

    /* renamed from: t  reason: collision with root package name */
    private final jq.a f49654t;

    /* renamed from: u  reason: collision with root package name */
    private final Function0 f49655u;

    /* renamed from: v  reason: collision with root package name */
    private final Function0 f49656v;

    /* renamed from: w  reason: collision with root package name */
    private final Function0 f49657w;

    /* renamed from: x  reason: collision with root package name */
    private final Function0 f49658x;

    /* renamed from: y  reason: collision with root package name */
    private final String f49659y;

    /* renamed from: z  reason: collision with root package name */
    private final Function0 f49660z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f49661d = new a();

        a() {
            super(3, xo.h.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2GovernmentidReviewSelectedImageBinding;", 0);
        }

        public final xo.h a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return xo.h.c(p02, viewGroup, z10);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
        }
    }

    public e5(v4.h imageLoader, String title, String body, String confirmButtonText, String chooseNewPhotoText, String fileToReviewPath, String fileMimeType, String str, jq.a navigationState, Function0 onUsePhotoClick, Function0 onChooseNewPhotoClick, Function0 onBack, Function0 onCancel, String str2, Function0 onErrorDismissed, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, boolean z10) {
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
        this.f49646d = imageLoader;
        this.f49647e = title;
        this.f49648i = body;
        this.f49649o = confirmButtonText;
        this.f49650p = chooseNewPhotoText;
        this.f49651q = fileToReviewPath;
        this.f49652r = fileMimeType;
        this.f49653s = str;
        this.f49654t = navigationState;
        this.f49655u = onUsePhotoClick;
        this.f49656v = onChooseNewPhotoClick;
        this.f49657w = onBack;
        this.f49658x = onCancel;
        this.f49659y = str2;
        this.f49660z = onErrorDismissed;
        this.A = governmentIdStepStyle;
        this.B = z10;
        k.a aVar = gn.k.f25849a;
        this.C = new gn.z(Reflection.getOrCreateKotlinClass(e5.class), a.f49661d, new Function1() { // from class: to.y4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                gn.k i10;
                i10 = e5.i(e5.this, (xo.h) obj);
                return i10;
            }
        });
    }

    private final void h(StepStyles.GovernmentIdStepStyle governmentIdStepStyle, View view, Pi2NavigationBar pi2NavigationBar, TextView textView, TextView textView2, ButtonWithLoadingIndicator buttonWithLoadingIndicator, Button button, gn.a0 a0Var) {
        Integer backgroundColorValue = governmentIdStepStyle.getBackgroundColorValue();
        if (backgroundColorValue != null) {
            int intValue = backgroundColorValue.intValue();
            view.setBackgroundColor(intValue);
            kq.c.a(a0Var, intValue);
        }
        Context context = view.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Drawable a10 = wq.c.a(governmentIdStepStyle, context);
        if (a10 != null) {
            view.setBackground(a10);
        }
        Integer headerButtonColorValue = governmentIdStepStyle.getHeaderButtonColorValue();
        if (headerButtonColorValue != null) {
            pi2NavigationBar.setControlsColor(headerButtonColorValue.intValue());
        }
        TextBasedComponentStyle titleStyleValue = governmentIdStepStyle.getTitleStyleValue();
        if (titleStyleValue != null) {
            uq.f0.n(textView, titleStyleValue, null, 2, null);
        }
        TextBasedComponentStyle textStyleValue = governmentIdStepStyle.getTextStyleValue();
        if (textStyleValue != null) {
            uq.f0.n(textView2, textStyleValue, null, 2, null);
        }
        ButtonSubmitComponentStyle buttonPrimaryStyleValue = governmentIdStepStyle.getButtonPrimaryStyleValue();
        if (buttonPrimaryStyleValue != null) {
            uq.e.d(buttonWithLoadingIndicator, buttonPrimaryStyleValue);
        }
        ButtonCancelComponentStyle buttonSecondaryStyleValue = governmentIdStepStyle.getButtonSecondaryStyleValue();
        if (buttonSecondaryStyleValue != null) {
            uq.e.f(button, buttonSecondaryStyleValue, false, false, 6, null);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final gn.k i(final e5 e5Var, final xo.h binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        CoordinatorLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        lq.f.d(root, false, false, false, false, 15, null);
        return new gn.k() { // from class: to.z4
            @Override // gn.k
            public final void a(Object obj, gn.a0 a0Var) {
                e5.j(xo.h.this, e5Var, (e5) obj, a0Var);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(xo.h hVar, final e5 e5Var, final e5 rendering, gn.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        hVar.f55618i.setText(rendering.f49647e);
        hVar.f55611b.setText(rendering.f49648i);
        hVar.f55619j.setText(e5Var.f49649o);
        hVar.f55619j.setOnClickListener(new View.OnClickListener() { // from class: to.a5
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                e5.k(e5.this, view);
            }
        });
        hVar.f55612c.setText(e5Var.f49650p);
        hVar.f55612c.setOnClickListener(new View.OnClickListener() { // from class: to.b5
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                e5.l(e5.this, view);
            }
        });
        File file = new File(e5Var.f49651q);
        BitmapFactory.Options options = new BitmapFactory.Options();
        options.inJustDecodeBounds = true;
        BitmapFactory.decodeFile(e5Var.f49651q, options);
        if (StringsKt.P(e5Var.f49652r, "image/", false, 2, null)) {
            ImageView imageView = hVar.f55615f;
            Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
            v4.h hVar2 = e5Var.f49646d;
            h.a r10 = new h.a(imageView.getContext()).d(file).r(imageView);
            GradientDrawable gradientDrawable = new GradientDrawable();
            gradientDrawable.setShape(0);
            gradientDrawable.setSize(options.outWidth, options.outHeight);
            gradientDrawable.setColor(0);
            r10.i(gradientDrawable);
            hVar2.a(r10.a());
        } else {
            hVar.f55615f.setVisibility(8);
            hVar.f55613d.setVisibility(0);
            hVar.f55614e.setVisibility(0);
            hVar.f55614e.setText(e5Var.f49653s);
        }
        jq.a aVar = rendering.f49654t;
        Function0 function0 = new Function0() { // from class: to.c5
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit m10;
                m10 = e5.m(e5.this);
                return m10;
            }
        };
        Function0 function02 = new Function0() { // from class: to.d5
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit n10;
                n10 = e5.n(e5.this);
                return n10;
            }
        };
        Pi2NavigationBar navigationBar = hVar.f55617h;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        CoordinatorLayout root = hVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        jq.e.b(aVar, function0, function02, navigationBar, root);
        hVar.f55619j.setIsLoading(rendering.B);
        CoordinatorLayout root2 = hVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
        bq.z.b(root2, rendering.f49659y, rendering.f49660z, null, 0, 0, 56, null);
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = e5Var.A;
        if (governmentIdStepStyle != null) {
            CoordinatorLayout root3 = hVar.getRoot();
            Intrinsics.checkNotNullExpressionValue(root3, "getRoot(...)");
            Pi2NavigationBar navigationBar2 = hVar.f55617h;
            Intrinsics.checkNotNullExpressionValue(navigationBar2, "navigationBar");
            TextView title = hVar.f55618i;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            TextView body = hVar.f55611b;
            Intrinsics.checkNotNullExpressionValue(body, "body");
            ButtonWithLoadingIndicator usePhotoButton = hVar.f55619j;
            Intrinsics.checkNotNullExpressionValue(usePhotoButton, "usePhotoButton");
            Button chooseNewPhotoButton = hVar.f55612c;
            Intrinsics.checkNotNullExpressionValue(chooseNewPhotoButton, "chooseNewPhotoButton");
            e5Var.h(governmentIdStepStyle, root3, navigationBar2, title, body, usePhotoButton, chooseNewPhotoButton, viewEnvironment);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(e5 e5Var, View view) {
        e5Var.f49655u.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void l(e5 e5Var, View view) {
        e5Var.f49656v.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(e5 e5Var) {
        e5Var.f49657w.invoke();
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n(e5 e5Var) {
        e5Var.f49658x.invoke();
        return Unit.f32556a;
    }

    @Override // gn.b
    public gn.c0 a() {
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
        if (Intrinsics.areEqual(this.f49646d, e5Var.f49646d) && Intrinsics.areEqual(this.f49647e, e5Var.f49647e) && Intrinsics.areEqual(this.f49648i, e5Var.f49648i) && Intrinsics.areEqual(this.f49649o, e5Var.f49649o) && Intrinsics.areEqual(this.f49650p, e5Var.f49650p) && Intrinsics.areEqual(this.f49651q, e5Var.f49651q) && Intrinsics.areEqual(this.f49652r, e5Var.f49652r) && Intrinsics.areEqual(this.f49653s, e5Var.f49653s) && Intrinsics.areEqual(this.f49654t, e5Var.f49654t) && Intrinsics.areEqual(this.f49655u, e5Var.f49655u) && Intrinsics.areEqual(this.f49656v, e5Var.f49656v) && Intrinsics.areEqual(this.f49657w, e5Var.f49657w) && Intrinsics.areEqual(this.f49658x, e5Var.f49658x) && Intrinsics.areEqual(this.f49659y, e5Var.f49659y) && Intrinsics.areEqual(this.f49660z, e5Var.f49660z) && Intrinsics.areEqual(this.A, e5Var.A) && this.B == e5Var.B) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3 = ((((((((((((this.f49646d.hashCode() * 31) + this.f49647e.hashCode()) * 31) + this.f49648i.hashCode()) * 31) + this.f49649o.hashCode()) * 31) + this.f49650p.hashCode()) * 31) + this.f49651q.hashCode()) * 31) + this.f49652r.hashCode()) * 31;
        String str = this.f49653s;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode4 = (((((((((((hashCode3 + hashCode) * 31) + this.f49654t.hashCode()) * 31) + this.f49655u.hashCode()) * 31) + this.f49656v.hashCode()) * 31) + this.f49657w.hashCode()) * 31) + this.f49658x.hashCode()) * 31;
        String str2 = this.f49659y;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int hashCode5 = (((hashCode4 + hashCode2) * 31) + this.f49660z.hashCode()) * 31;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.A;
        if (governmentIdStepStyle != null) {
            i10 = governmentIdStepStyle.hashCode();
        }
        return ((hashCode5 + i10) * 31) + Boolean.hashCode(this.B);
    }

    public String toString() {
        v4.h hVar = this.f49646d;
        String str = this.f49647e;
        String str2 = this.f49648i;
        String str3 = this.f49649o;
        String str4 = this.f49650p;
        String str5 = this.f49651q;
        String str6 = this.f49652r;
        String str7 = this.f49653s;
        jq.a aVar = this.f49654t;
        Function0 function0 = this.f49655u;
        Function0 function02 = this.f49656v;
        Function0 function03 = this.f49657w;
        Function0 function04 = this.f49658x;
        String str8 = this.f49659y;
        Function0 function05 = this.f49660z;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.A;
        boolean z10 = this.B;
        return "ReviewSelectedImageView(imageLoader=" + hVar + ", title=" + str + ", body=" + str2 + ", confirmButtonText=" + str3 + ", chooseNewPhotoText=" + str4 + ", fileToReviewPath=" + str5 + ", fileMimeType=" + str6 + ", fileName=" + str7 + ", navigationState=" + aVar + ", onUsePhotoClick=" + function0 + ", onChooseNewPhotoClick=" + function02 + ", onBack=" + function03 + ", onCancel=" + function04 + ", error=" + str8 + ", onErrorDismissed=" + function05 + ", styles=" + governmentIdStepStyle + ", isAutoClassifying=" + z10 + ")";
    }
}
