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
    private final v4.h f49077d;

    /* renamed from: e  reason: collision with root package name */
    private final String f49078e;

    /* renamed from: i  reason: collision with root package name */
    private final String f49079i;

    /* renamed from: o  reason: collision with root package name */
    private final String f49080o;

    /* renamed from: p  reason: collision with root package name */
    private final String f49081p;

    /* renamed from: q  reason: collision with root package name */
    private final String f49082q;

    /* renamed from: r  reason: collision with root package name */
    private final String f49083r;

    /* renamed from: s  reason: collision with root package name */
    private final String f49084s;

    /* renamed from: t  reason: collision with root package name */
    private final jq.a f49085t;

    /* renamed from: u  reason: collision with root package name */
    private final Function0 f49086u;

    /* renamed from: v  reason: collision with root package name */
    private final Function0 f49087v;

    /* renamed from: w  reason: collision with root package name */
    private final Function0 f49088w;

    /* renamed from: x  reason: collision with root package name */
    private final Function0 f49089x;

    /* renamed from: y  reason: collision with root package name */
    private final String f49090y;

    /* renamed from: z  reason: collision with root package name */
    private final Function0 f49091z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f49092d = new a();

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
        this.f49077d = imageLoader;
        this.f49078e = title;
        this.f49079i = body;
        this.f49080o = confirmButtonText;
        this.f49081p = chooseNewPhotoText;
        this.f49082q = fileToReviewPath;
        this.f49083r = fileMimeType;
        this.f49084s = str;
        this.f49085t = navigationState;
        this.f49086u = onUsePhotoClick;
        this.f49087v = onChooseNewPhotoClick;
        this.f49088w = onBack;
        this.f49089x = onCancel;
        this.f49090y = str2;
        this.f49091z = onErrorDismissed;
        this.A = governmentIdStepStyle;
        this.B = z10;
        k.a aVar = gn.k.f25848a;
        this.C = new gn.z(Reflection.getOrCreateKotlinClass(e5.class), a.f49092d, new Function1() { // from class: to.y4
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
        hVar.f55049i.setText(rendering.f49078e);
        hVar.f55042b.setText(rendering.f49079i);
        hVar.f55050j.setText(e5Var.f49080o);
        hVar.f55050j.setOnClickListener(new View.OnClickListener() { // from class: to.a5
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                e5.k(e5.this, view);
            }
        });
        hVar.f55043c.setText(e5Var.f49081p);
        hVar.f55043c.setOnClickListener(new View.OnClickListener() { // from class: to.b5
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                e5.l(e5.this, view);
            }
        });
        File file = new File(e5Var.f49082q);
        BitmapFactory.Options options = new BitmapFactory.Options();
        options.inJustDecodeBounds = true;
        BitmapFactory.decodeFile(e5Var.f49082q, options);
        if (StringsKt.P(e5Var.f49083r, "image/", false, 2, null)) {
            ImageView imageView = hVar.f55046f;
            Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
            v4.h hVar2 = e5Var.f49077d;
            h.a r10 = new h.a(imageView.getContext()).d(file).r(imageView);
            GradientDrawable gradientDrawable = new GradientDrawable();
            gradientDrawable.setShape(0);
            gradientDrawable.setSize(options.outWidth, options.outHeight);
            gradientDrawable.setColor(0);
            r10.i(gradientDrawable);
            hVar2.a(r10.a());
        } else {
            hVar.f55046f.setVisibility(8);
            hVar.f55044d.setVisibility(0);
            hVar.f55045e.setVisibility(0);
            hVar.f55045e.setText(e5Var.f49084s);
        }
        jq.a aVar = rendering.f49085t;
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
        Pi2NavigationBar navigationBar = hVar.f55048h;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        CoordinatorLayout root = hVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        jq.e.b(aVar, function0, function02, navigationBar, root);
        hVar.f55050j.setIsLoading(rendering.B);
        CoordinatorLayout root2 = hVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
        bq.z.b(root2, rendering.f49090y, rendering.f49091z, null, 0, 0, 56, null);
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = e5Var.A;
        if (governmentIdStepStyle != null) {
            CoordinatorLayout root3 = hVar.getRoot();
            Intrinsics.checkNotNullExpressionValue(root3, "getRoot(...)");
            Pi2NavigationBar navigationBar2 = hVar.f55048h;
            Intrinsics.checkNotNullExpressionValue(navigationBar2, "navigationBar");
            TextView title = hVar.f55049i;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            TextView body = hVar.f55042b;
            Intrinsics.checkNotNullExpressionValue(body, "body");
            ButtonWithLoadingIndicator usePhotoButton = hVar.f55050j;
            Intrinsics.checkNotNullExpressionValue(usePhotoButton, "usePhotoButton");
            Button chooseNewPhotoButton = hVar.f55043c;
            Intrinsics.checkNotNullExpressionValue(chooseNewPhotoButton, "chooseNewPhotoButton");
            e5Var.h(governmentIdStepStyle, root3, navigationBar2, title, body, usePhotoButton, chooseNewPhotoButton, viewEnvironment);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(e5 e5Var, View view) {
        e5Var.f49086u.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void l(e5 e5Var, View view) {
        e5Var.f49087v.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(e5 e5Var) {
        e5Var.f49088w.invoke();
        return Unit.f31987a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n(e5 e5Var) {
        e5Var.f49089x.invoke();
        return Unit.f31987a;
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
        if (Intrinsics.areEqual(this.f49077d, e5Var.f49077d) && Intrinsics.areEqual(this.f49078e, e5Var.f49078e) && Intrinsics.areEqual(this.f49079i, e5Var.f49079i) && Intrinsics.areEqual(this.f49080o, e5Var.f49080o) && Intrinsics.areEqual(this.f49081p, e5Var.f49081p) && Intrinsics.areEqual(this.f49082q, e5Var.f49082q) && Intrinsics.areEqual(this.f49083r, e5Var.f49083r) && Intrinsics.areEqual(this.f49084s, e5Var.f49084s) && Intrinsics.areEqual(this.f49085t, e5Var.f49085t) && Intrinsics.areEqual(this.f49086u, e5Var.f49086u) && Intrinsics.areEqual(this.f49087v, e5Var.f49087v) && Intrinsics.areEqual(this.f49088w, e5Var.f49088w) && Intrinsics.areEqual(this.f49089x, e5Var.f49089x) && Intrinsics.areEqual(this.f49090y, e5Var.f49090y) && Intrinsics.areEqual(this.f49091z, e5Var.f49091z) && Intrinsics.areEqual(this.A, e5Var.A) && this.B == e5Var.B) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3 = ((((((((((((this.f49077d.hashCode() * 31) + this.f49078e.hashCode()) * 31) + this.f49079i.hashCode()) * 31) + this.f49080o.hashCode()) * 31) + this.f49081p.hashCode()) * 31) + this.f49082q.hashCode()) * 31) + this.f49083r.hashCode()) * 31;
        String str = this.f49084s;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode4 = (((((((((((hashCode3 + hashCode) * 31) + this.f49085t.hashCode()) * 31) + this.f49086u.hashCode()) * 31) + this.f49087v.hashCode()) * 31) + this.f49088w.hashCode()) * 31) + this.f49089x.hashCode()) * 31;
        String str2 = this.f49090y;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int hashCode5 = (((hashCode4 + hashCode2) * 31) + this.f49091z.hashCode()) * 31;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.A;
        if (governmentIdStepStyle != null) {
            i10 = governmentIdStepStyle.hashCode();
        }
        return ((hashCode5 + i10) * 31) + Boolean.hashCode(this.B);
    }

    public String toString() {
        v4.h hVar = this.f49077d;
        String str = this.f49078e;
        String str2 = this.f49079i;
        String str3 = this.f49080o;
        String str4 = this.f49081p;
        String str5 = this.f49082q;
        String str6 = this.f49083r;
        String str7 = this.f49084s;
        jq.a aVar = this.f49085t;
        Function0 function0 = this.f49086u;
        Function0 function02 = this.f49087v;
        Function0 function03 = this.f49088w;
        Function0 function04 = this.f49089x;
        String str8 = this.f49090y;
        Function0 function05 = this.f49091z;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.A;
        boolean z10 = this.B;
        return "ReviewSelectedImageView(imageLoader=" + hVar + ", title=" + str + ", body=" + str2 + ", confirmButtonText=" + str3 + ", chooseNewPhotoText=" + str4 + ", fileToReviewPath=" + str5 + ", fileMimeType=" + str6 + ", fileName=" + str7 + ", navigationState=" + aVar + ", onUsePhotoClick=" + function0 + ", onChooseNewPhotoClick=" + function02 + ", onBack=" + function03 + ", onCancel=" + function04 + ", error=" + str8 + ", onErrorDismissed=" + function05 + ", styles=" + governmentIdStepStyle + ", isAutoClassifying=" + z10 + ")";
    }
}
