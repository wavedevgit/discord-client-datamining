package to;

import android.content.Context;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import com.google.android.material.button.MaterialButton;
import com.withpersona.sdk2.inquiry.network.dto.government_id.CaptureOptionNativeMobile;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonCancelComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonSubmitComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import gn.k;
import java.util.List;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y implements gn.b {
    private View A;
    private final gn.c0 B;

    /* renamed from: d  reason: collision with root package name */
    private final List f50287d;

    /* renamed from: e  reason: collision with root package name */
    private final String f50288e;

    /* renamed from: i  reason: collision with root package name */
    private final String f50289i;

    /* renamed from: o  reason: collision with root package name */
    private final String f50290o;

    /* renamed from: p  reason: collision with root package name */
    private final String f50291p;

    /* renamed from: q  reason: collision with root package name */
    private final jq.a f50292q;

    /* renamed from: r  reason: collision with root package name */
    private final Function0 f50293r;

    /* renamed from: s  reason: collision with root package name */
    private final Function0 f50294s;

    /* renamed from: t  reason: collision with root package name */
    private final Function0 f50295t;

    /* renamed from: u  reason: collision with root package name */
    private final Function0 f50296u;

    /* renamed from: v  reason: collision with root package name */
    private final String f50297v;

    /* renamed from: w  reason: collision with root package name */
    private final Function0 f50298w;

    /* renamed from: x  reason: collision with root package name */
    private final StepStyles.GovernmentIdStepStyle f50299x;

    /* renamed from: y  reason: collision with root package name */
    private final RemoteImage f50300y;

    /* renamed from: z  reason: collision with root package name */
    private final int f50301z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f50302d = new a();

        a() {
            super(3, xo.d.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2GovernmentidChooseCaptureMethodBinding;", 0);
        }

        public final xo.d a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return xo.d.c(p02, viewGroup, z10);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
        }
    }

    public y(List captureOptions, String title, String body, String cameraText, String uploadButtonText, jq.a navigationState, Function0 onCameraCaptureClick, Function0 onUploadClick, Function0 onBack, Function0 onCancel, String str, Function0 onErrorDismissed, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, RemoteImage remoteImage, int i10) {
        Intrinsics.checkNotNullParameter(captureOptions, "captureOptions");
        Intrinsics.checkNotNullParameter(title, "title");
        Intrinsics.checkNotNullParameter(body, "body");
        Intrinsics.checkNotNullParameter(cameraText, "cameraText");
        Intrinsics.checkNotNullParameter(uploadButtonText, "uploadButtonText");
        Intrinsics.checkNotNullParameter(navigationState, "navigationState");
        Intrinsics.checkNotNullParameter(onCameraCaptureClick, "onCameraCaptureClick");
        Intrinsics.checkNotNullParameter(onUploadClick, "onUploadClick");
        Intrinsics.checkNotNullParameter(onBack, "onBack");
        Intrinsics.checkNotNullParameter(onCancel, "onCancel");
        Intrinsics.checkNotNullParameter(onErrorDismissed, "onErrorDismissed");
        this.f50287d = captureOptions;
        this.f50288e = title;
        this.f50289i = body;
        this.f50290o = cameraText;
        this.f50291p = uploadButtonText;
        this.f50292q = navigationState;
        this.f50293r = onCameraCaptureClick;
        this.f50294s = onUploadClick;
        this.f50295t = onBack;
        this.f50296u = onCancel;
        this.f50297v = str;
        this.f50298w = onErrorDismissed;
        this.f50299x = governmentIdStepStyle;
        this.f50300y = remoteImage;
        this.f50301z = i10;
        k.a aVar = gn.k.f25849a;
        this.B = new gn.z(Reflection.getOrCreateKotlinClass(y.class), a.f50302d, new Function1() { // from class: to.s
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                gn.k i11;
                i11 = y.i(y.this, (xo.d) obj);
                return i11;
            }
        });
    }

    private final void h(StepStyles.GovernmentIdStepStyle governmentIdStepStyle, View view, Pi2NavigationBar pi2NavigationBar, TextView textView, TextView textView2, Button button, Button button2, ThemeableLottieAnimationView themeableLottieAnimationView, View view2, gn.a0 a0Var) {
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
            uq.e.f(button, buttonPrimaryStyleValue, false, false, 6, null);
        }
        ButtonCancelComponentStyle buttonSecondaryStyleValue = governmentIdStepStyle.getButtonSecondaryStyleValue();
        if (buttonSecondaryStyleValue != null) {
            uq.e.f(button2, buttonSecondaryStyleValue, false, false, 6, null);
        }
        Integer fillColorValue = governmentIdStepStyle.getFillColorValue();
        if (fillColorValue != null) {
            view2.setBackground(new ColorDrawable(fillColorValue.intValue()));
        }
        uq.g.g(themeableLottieAnimationView, governmentIdStepStyle.getStrokeColorValue(), governmentIdStepStyle.getFillColorValue(), null, new String[]{"#000000", "#190052", "#190051"}, new String[]{"#8751FF", "#AA85FF", "#AA84FF"}, new String[0]);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final gn.k i(final y yVar, final xo.d binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        CoordinatorLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        lq.f.d(root, false, false, false, false, 15, null);
        return new gn.k() { // from class: to.t
            @Override // gn.k
            public final void a(Object obj, gn.a0 a0Var) {
                y.j(xo.d.this, yVar, (y) obj, a0Var);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(xo.d dVar, y yVar, final y rendering, gn.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        Context context = dVar.getRoot().getContext();
        dVar.f55567i.setText(rendering.f50288e);
        dVar.f55560b.setText(rendering.f50289i);
        if (yVar.f50287d.contains(CaptureOptionNativeMobile.MOBILE_CAMERA)) {
            if (!StringsKt.k0(yVar.f50290o)) {
                dVar.f55561c.setText(yVar.f50290o);
                dVar.f55561c.setIcon(null);
            } else {
                dVar.f55561c.setText((CharSequence) null);
                dVar.f55561c.setIcon(g.a.b(context, l4.f49917c));
            }
            dVar.f55561c.setOnClickListener(new View.OnClickListener() { // from class: to.u
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    y.k(y.this, view);
                }
            });
        }
        if (yVar.f50287d.contains(CaptureOptionNativeMobile.UPLOAD)) {
            dVar.f55568j.setText(rendering.f50291p);
            dVar.f55568j.setOnClickListener(new View.OnClickListener() { // from class: to.v
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    y.l(y.this, view);
                }
            });
        }
        jq.a aVar = rendering.f50292q;
        Function0 function0 = new Function0() { // from class: to.w
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit m10;
                m10 = y.m(y.this);
                return m10;
            }
        };
        Function0 function02 = new Function0() { // from class: to.x
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit n10;
                n10 = y.n(y.this);
                return n10;
            }
        };
        Pi2NavigationBar navigationBar = dVar.f55566h;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        CoordinatorLayout root = dVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        jq.e.b(aVar, function0, function02, navigationBar, root);
        CoordinatorLayout root2 = dVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
        bq.z.b(root2, rendering.f50297v, rendering.f50298w, null, 0, 0, 56, null);
        RemoteImage remoteImage = yVar.f50300y;
        if (remoteImage != null) {
            if (yVar.A == null) {
                ConstraintLayout imageViewContainer = dVar.f55564f;
                Intrinsics.checkNotNullExpressionValue(imageViewContainer, "imageViewContainer");
                yVar.A = wq.b.c(remoteImage, imageViewContainer, false, 2, null);
                dVar.f55565g.setVisibility(8);
            }
        } else {
            dVar.f55562d.setAnimation(yVar.f50301z);
        }
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = yVar.f50299x;
        if (governmentIdStepStyle != null) {
            CoordinatorLayout root3 = dVar.getRoot();
            Intrinsics.checkNotNullExpressionValue(root3, "getRoot(...)");
            Pi2NavigationBar navigationBar2 = dVar.f55566h;
            Intrinsics.checkNotNullExpressionValue(navigationBar2, "navigationBar");
            TextView title = dVar.f55567i;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            TextView body = dVar.f55560b;
            Intrinsics.checkNotNullExpressionValue(body, "body");
            MaterialButton cameraButton = dVar.f55561c;
            Intrinsics.checkNotNullExpressionValue(cameraButton, "cameraButton");
            Button uploadButton = dVar.f55568j;
            Intrinsics.checkNotNullExpressionValue(uploadButton, "uploadButton");
            ThemeableLottieAnimationView idImage = dVar.f55562d;
            Intrinsics.checkNotNullExpressionValue(idImage, "idImage");
            View idImageContainer = dVar.f55563e;
            Intrinsics.checkNotNullExpressionValue(idImageContainer, "idImageContainer");
            yVar.h(governmentIdStepStyle, root3, navigationBar2, title, body, cameraButton, uploadButton, idImage, idImageContainer, viewEnvironment);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(y yVar, View view) {
        yVar.f50293r.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void l(y yVar, View view) {
        yVar.f50294s.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(y yVar) {
        yVar.f50295t.invoke();
        return Unit.f32556a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n(y yVar) {
        yVar.f50296u.invoke();
        return Unit.f32556a;
    }

    @Override // gn.b
    public gn.c0 a() {
        return this.B;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof y)) {
            return false;
        }
        y yVar = (y) obj;
        if (Intrinsics.areEqual(this.f50287d, yVar.f50287d) && Intrinsics.areEqual(this.f50288e, yVar.f50288e) && Intrinsics.areEqual(this.f50289i, yVar.f50289i) && Intrinsics.areEqual(this.f50290o, yVar.f50290o) && Intrinsics.areEqual(this.f50291p, yVar.f50291p) && Intrinsics.areEqual(this.f50292q, yVar.f50292q) && Intrinsics.areEqual(this.f50293r, yVar.f50293r) && Intrinsics.areEqual(this.f50294s, yVar.f50294s) && Intrinsics.areEqual(this.f50295t, yVar.f50295t) && Intrinsics.areEqual(this.f50296u, yVar.f50296u) && Intrinsics.areEqual(this.f50297v, yVar.f50297v) && Intrinsics.areEqual(this.f50298w, yVar.f50298w) && Intrinsics.areEqual(this.f50299x, yVar.f50299x) && Intrinsics.areEqual(this.f50300y, yVar.f50300y) && this.f50301z == yVar.f50301z) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3 = ((((((((((((((((((this.f50287d.hashCode() * 31) + this.f50288e.hashCode()) * 31) + this.f50289i.hashCode()) * 31) + this.f50290o.hashCode()) * 31) + this.f50291p.hashCode()) * 31) + this.f50292q.hashCode()) * 31) + this.f50293r.hashCode()) * 31) + this.f50294s.hashCode()) * 31) + this.f50295t.hashCode()) * 31) + this.f50296u.hashCode()) * 31;
        String str = this.f50297v;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode4 = (((hashCode3 + hashCode) * 31) + this.f50298w.hashCode()) * 31;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.f50299x;
        if (governmentIdStepStyle == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = governmentIdStepStyle.hashCode();
        }
        int i11 = (hashCode4 + hashCode2) * 31;
        RemoteImage remoteImage = this.f50300y;
        if (remoteImage != null) {
            i10 = remoteImage.hashCode();
        }
        return ((i11 + i10) * 31) + Integer.hashCode(this.f50301z);
    }

    public String toString() {
        List list = this.f50287d;
        String str = this.f50288e;
        String str2 = this.f50289i;
        String str3 = this.f50290o;
        String str4 = this.f50291p;
        jq.a aVar = this.f50292q;
        Function0 function0 = this.f50293r;
        Function0 function02 = this.f50294s;
        Function0 function03 = this.f50295t;
        Function0 function04 = this.f50296u;
        String str5 = this.f50297v;
        Function0 function05 = this.f50298w;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.f50299x;
        RemoteImage remoteImage = this.f50300y;
        int i10 = this.f50301z;
        return "ChooseCaptureMethodView(captureOptions=" + list + ", title=" + str + ", body=" + str2 + ", cameraText=" + str3 + ", uploadButtonText=" + str4 + ", navigationState=" + aVar + ", onCameraCaptureClick=" + function0 + ", onUploadClick=" + function02 + ", onBack=" + function03 + ", onCancel=" + function04 + ", error=" + str5 + ", onErrorDismissed=" + function05 + ", styles=" + governmentIdStepStyle + ", pictographAsset=" + remoteImage + ", localAsset=" + i10 + ")";
    }
}
