package eo;

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
import ym.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e5 implements ym.b {
    private final StepStyles.GovernmentIdStepStyle A;
    private final boolean B;
    private final ym.c0 C;

    /* renamed from: d  reason: collision with root package name */
    private final v4.h f21778d;

    /* renamed from: e  reason: collision with root package name */
    private final String f21779e;

    /* renamed from: i  reason: collision with root package name */
    private final String f21780i;

    /* renamed from: o  reason: collision with root package name */
    private final String f21781o;

    /* renamed from: p  reason: collision with root package name */
    private final String f21782p;

    /* renamed from: q  reason: collision with root package name */
    private final String f21783q;

    /* renamed from: r  reason: collision with root package name */
    private final String f21784r;

    /* renamed from: s  reason: collision with root package name */
    private final String f21785s;

    /* renamed from: t  reason: collision with root package name */
    private final up.a f21786t;

    /* renamed from: u  reason: collision with root package name */
    private final Function0 f21787u;

    /* renamed from: v  reason: collision with root package name */
    private final Function0 f21788v;

    /* renamed from: w  reason: collision with root package name */
    private final Function0 f21789w;

    /* renamed from: x  reason: collision with root package name */
    private final Function0 f21790x;

    /* renamed from: y  reason: collision with root package name */
    private final String f21791y;

    /* renamed from: z  reason: collision with root package name */
    private final Function0 f21792z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f21793d = new a();

        a() {
            super(3, io.h.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2GovernmentidReviewSelectedImageBinding;", 0);
        }

        public final io.h a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return io.h.c(p02, viewGroup, z10);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
        }
    }

    public e5(v4.h imageLoader, String title, String body, String confirmButtonText, String chooseNewPhotoText, String fileToReviewPath, String fileMimeType, String str, up.a navigationState, Function0 onUsePhotoClick, Function0 onChooseNewPhotoClick, Function0 onBack, Function0 onCancel, String str2, Function0 onErrorDismissed, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, boolean z10) {
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
        this.f21778d = imageLoader;
        this.f21779e = title;
        this.f21780i = body;
        this.f21781o = confirmButtonText;
        this.f21782p = chooseNewPhotoText;
        this.f21783q = fileToReviewPath;
        this.f21784r = fileMimeType;
        this.f21785s = str;
        this.f21786t = navigationState;
        this.f21787u = onUsePhotoClick;
        this.f21788v = onChooseNewPhotoClick;
        this.f21789w = onBack;
        this.f21790x = onCancel;
        this.f21791y = str2;
        this.f21792z = onErrorDismissed;
        this.A = governmentIdStepStyle;
        this.B = z10;
        k.a aVar = ym.k.f54648a;
        this.C = new ym.z(Reflection.getOrCreateKotlinClass(e5.class), a.f21793d, new Function1() { // from class: eo.y4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                ym.k i10;
                i10 = e5.i(e5.this, (io.h) obj);
                return i10;
            }
        });
    }

    private final void h(StepStyles.GovernmentIdStepStyle governmentIdStepStyle, View view, Pi2NavigationBar pi2NavigationBar, TextView textView, TextView textView2, ButtonWithLoadingIndicator buttonWithLoadingIndicator, Button button, ym.a0 a0Var) {
        Integer backgroundColorValue = governmentIdStepStyle.getBackgroundColorValue();
        if (backgroundColorValue != null) {
            int intValue = backgroundColorValue.intValue();
            view.setBackgroundColor(intValue);
            vp.c.a(a0Var, intValue);
        }
        Context context = view.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Drawable a10 = hq.c.a(governmentIdStepStyle, context);
        if (a10 != null) {
            view.setBackground(a10);
        }
        Integer headerButtonColorValue = governmentIdStepStyle.getHeaderButtonColorValue();
        if (headerButtonColorValue != null) {
            pi2NavigationBar.setControlsColor(headerButtonColorValue.intValue());
        }
        TextBasedComponentStyle titleStyleValue = governmentIdStepStyle.getTitleStyleValue();
        if (titleStyleValue != null) {
            fq.f0.n(textView, titleStyleValue, null, 2, null);
        }
        TextBasedComponentStyle textStyleValue = governmentIdStepStyle.getTextStyleValue();
        if (textStyleValue != null) {
            fq.f0.n(textView2, textStyleValue, null, 2, null);
        }
        ButtonSubmitComponentStyle buttonPrimaryStyleValue = governmentIdStepStyle.getButtonPrimaryStyleValue();
        if (buttonPrimaryStyleValue != null) {
            fq.e.d(buttonWithLoadingIndicator, buttonPrimaryStyleValue);
        }
        ButtonCancelComponentStyle buttonSecondaryStyleValue = governmentIdStepStyle.getButtonSecondaryStyleValue();
        if (buttonSecondaryStyleValue != null) {
            fq.e.f(button, buttonSecondaryStyleValue, false, false, 6, null);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ym.k i(final e5 e5Var, final io.h binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        CoordinatorLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        wp.f.d(root, false, false, false, false, 15, null);
        return new ym.k() { // from class: eo.z4
            @Override // ym.k
            public final void a(Object obj, ym.a0 a0Var) {
                e5.j(io.h.this, e5Var, (e5) obj, a0Var);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(io.h hVar, final e5 e5Var, final e5 rendering, ym.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        hVar.f28620i.setText(rendering.f21779e);
        hVar.f28613b.setText(rendering.f21780i);
        hVar.f28621j.setText(e5Var.f21781o);
        hVar.f28621j.setOnClickListener(new View.OnClickListener() { // from class: eo.a5
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                e5.k(e5.this, view);
            }
        });
        hVar.f28614c.setText(e5Var.f21782p);
        hVar.f28614c.setOnClickListener(new View.OnClickListener() { // from class: eo.b5
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                e5.l(e5.this, view);
            }
        });
        File file = new File(e5Var.f21783q);
        BitmapFactory.Options options = new BitmapFactory.Options();
        options.inJustDecodeBounds = true;
        BitmapFactory.decodeFile(e5Var.f21783q, options);
        if (StringsKt.P(e5Var.f21784r, "image/", false, 2, null)) {
            ImageView imageView = hVar.f28617f;
            Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
            v4.h hVar2 = e5Var.f21778d;
            h.a r10 = new h.a(imageView.getContext()).d(file).r(imageView);
            GradientDrawable gradientDrawable = new GradientDrawable();
            gradientDrawable.setShape(0);
            gradientDrawable.setSize(options.outWidth, options.outHeight);
            gradientDrawable.setColor(0);
            r10.i(gradientDrawable);
            hVar2.a(r10.a());
        } else {
            hVar.f28617f.setVisibility(8);
            hVar.f28615d.setVisibility(0);
            hVar.f28616e.setVisibility(0);
            hVar.f28616e.setText(e5Var.f21785s);
        }
        up.a aVar = rendering.f21786t;
        Function0 function0 = new Function0() { // from class: eo.c5
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit m10;
                m10 = e5.m(e5.this);
                return m10;
            }
        };
        Function0 function02 = new Function0() { // from class: eo.d5
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit n10;
                n10 = e5.n(e5.this);
                return n10;
            }
        };
        Pi2NavigationBar navigationBar = hVar.f28619h;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        CoordinatorLayout root = hVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        up.e.b(aVar, function0, function02, navigationBar, root);
        hVar.f28621j.setIsLoading(rendering.B);
        CoordinatorLayout root2 = hVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
        mp.z.b(root2, rendering.f21791y, rendering.f21792z, null, 0, 0, 56, null);
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = e5Var.A;
        if (governmentIdStepStyle != null) {
            CoordinatorLayout root3 = hVar.getRoot();
            Intrinsics.checkNotNullExpressionValue(root3, "getRoot(...)");
            Pi2NavigationBar navigationBar2 = hVar.f28619h;
            Intrinsics.checkNotNullExpressionValue(navigationBar2, "navigationBar");
            TextView title = hVar.f28620i;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            TextView body = hVar.f28613b;
            Intrinsics.checkNotNullExpressionValue(body, "body");
            ButtonWithLoadingIndicator usePhotoButton = hVar.f28621j;
            Intrinsics.checkNotNullExpressionValue(usePhotoButton, "usePhotoButton");
            Button chooseNewPhotoButton = hVar.f28614c;
            Intrinsics.checkNotNullExpressionValue(chooseNewPhotoButton, "chooseNewPhotoButton");
            e5Var.h(governmentIdStepStyle, root3, navigationBar2, title, body, usePhotoButton, chooseNewPhotoButton, viewEnvironment);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(e5 e5Var, View view) {
        e5Var.f21787u.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void l(e5 e5Var, View view) {
        e5Var.f21788v.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(e5 e5Var) {
        e5Var.f21789w.invoke();
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n(e5 e5Var) {
        e5Var.f21790x.invoke();
        return Unit.f32464a;
    }

    @Override // ym.b
    public ym.c0 a() {
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
        if (Intrinsics.areEqual(this.f21778d, e5Var.f21778d) && Intrinsics.areEqual(this.f21779e, e5Var.f21779e) && Intrinsics.areEqual(this.f21780i, e5Var.f21780i) && Intrinsics.areEqual(this.f21781o, e5Var.f21781o) && Intrinsics.areEqual(this.f21782p, e5Var.f21782p) && Intrinsics.areEqual(this.f21783q, e5Var.f21783q) && Intrinsics.areEqual(this.f21784r, e5Var.f21784r) && Intrinsics.areEqual(this.f21785s, e5Var.f21785s) && Intrinsics.areEqual(this.f21786t, e5Var.f21786t) && Intrinsics.areEqual(this.f21787u, e5Var.f21787u) && Intrinsics.areEqual(this.f21788v, e5Var.f21788v) && Intrinsics.areEqual(this.f21789w, e5Var.f21789w) && Intrinsics.areEqual(this.f21790x, e5Var.f21790x) && Intrinsics.areEqual(this.f21791y, e5Var.f21791y) && Intrinsics.areEqual(this.f21792z, e5Var.f21792z) && Intrinsics.areEqual(this.A, e5Var.A) && this.B == e5Var.B) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3 = ((((((((((((this.f21778d.hashCode() * 31) + this.f21779e.hashCode()) * 31) + this.f21780i.hashCode()) * 31) + this.f21781o.hashCode()) * 31) + this.f21782p.hashCode()) * 31) + this.f21783q.hashCode()) * 31) + this.f21784r.hashCode()) * 31;
        String str = this.f21785s;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode4 = (((((((((((hashCode3 + hashCode) * 31) + this.f21786t.hashCode()) * 31) + this.f21787u.hashCode()) * 31) + this.f21788v.hashCode()) * 31) + this.f21789w.hashCode()) * 31) + this.f21790x.hashCode()) * 31;
        String str2 = this.f21791y;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int hashCode5 = (((hashCode4 + hashCode2) * 31) + this.f21792z.hashCode()) * 31;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.A;
        if (governmentIdStepStyle != null) {
            i10 = governmentIdStepStyle.hashCode();
        }
        return ((hashCode5 + i10) * 31) + Boolean.hashCode(this.B);
    }

    public String toString() {
        v4.h hVar = this.f21778d;
        String str = this.f21779e;
        String str2 = this.f21780i;
        String str3 = this.f21781o;
        String str4 = this.f21782p;
        String str5 = this.f21783q;
        String str6 = this.f21784r;
        String str7 = this.f21785s;
        up.a aVar = this.f21786t;
        Function0 function0 = this.f21787u;
        Function0 function02 = this.f21788v;
        Function0 function03 = this.f21789w;
        Function0 function04 = this.f21790x;
        String str8 = this.f21791y;
        Function0 function05 = this.f21792z;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.A;
        boolean z10 = this.B;
        return "ReviewSelectedImageView(imageLoader=" + hVar + ", title=" + str + ", body=" + str2 + ", confirmButtonText=" + str3 + ", chooseNewPhotoText=" + str4 + ", fileToReviewPath=" + str5 + ", fileMimeType=" + str6 + ", fileName=" + str7 + ", navigationState=" + aVar + ", onUsePhotoClick=" + function0 + ", onChooseNewPhotoClick=" + function02 + ", onBack=" + function03 + ", onCancel=" + function04 + ", error=" + str8 + ", onErrorDismissed=" + function05 + ", styles=" + governmentIdStepStyle + ", isAutoClassifying=" + z10 + ")";
    }
}
