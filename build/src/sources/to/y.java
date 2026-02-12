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
    private final List f49719d;

    /* renamed from: e  reason: collision with root package name */
    private final String f49720e;

    /* renamed from: i  reason: collision with root package name */
    private final String f49721i;

    /* renamed from: o  reason: collision with root package name */
    private final String f49722o;

    /* renamed from: p  reason: collision with root package name */
    private final String f49723p;

    /* renamed from: q  reason: collision with root package name */
    private final jq.a f49724q;

    /* renamed from: r  reason: collision with root package name */
    private final Function0 f49725r;

    /* renamed from: s  reason: collision with root package name */
    private final Function0 f49726s;

    /* renamed from: t  reason: collision with root package name */
    private final Function0 f49727t;

    /* renamed from: u  reason: collision with root package name */
    private final Function0 f49728u;

    /* renamed from: v  reason: collision with root package name */
    private final String f49729v;

    /* renamed from: w  reason: collision with root package name */
    private final Function0 f49730w;

    /* renamed from: x  reason: collision with root package name */
    private final StepStyles.GovernmentIdStepStyle f49731x;

    /* renamed from: y  reason: collision with root package name */
    private final RemoteImage f49732y;

    /* renamed from: z  reason: collision with root package name */
    private final int f49733z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f49734d = new a();

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
        this.f49719d = captureOptions;
        this.f49720e = title;
        this.f49721i = body;
        this.f49722o = cameraText;
        this.f49723p = uploadButtonText;
        this.f49724q = navigationState;
        this.f49725r = onCameraCaptureClick;
        this.f49726s = onUploadClick;
        this.f49727t = onBack;
        this.f49728u = onCancel;
        this.f49729v = str;
        this.f49730w = onErrorDismissed;
        this.f49731x = governmentIdStepStyle;
        this.f49732y = remoteImage;
        this.f49733z = i10;
        k.a aVar = gn.k.f25849a;
        this.B = new gn.z(Reflection.getOrCreateKotlinClass(y.class), a.f49734d, new Function1() { // from class: to.s
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
        dVar.f54999i.setText(rendering.f49720e);
        dVar.f54992b.setText(rendering.f49721i);
        if (yVar.f49719d.contains(CaptureOptionNativeMobile.MOBILE_CAMERA)) {
            if (!StringsKt.k0(yVar.f49722o)) {
                dVar.f54993c.setText(yVar.f49722o);
                dVar.f54993c.setIcon(null);
            } else {
                dVar.f54993c.setText((CharSequence) null);
                dVar.f54993c.setIcon(g.a.b(context, l4.f49349c));
            }
            dVar.f54993c.setOnClickListener(new View.OnClickListener() { // from class: to.u
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    y.k(y.this, view);
                }
            });
        }
        if (yVar.f49719d.contains(CaptureOptionNativeMobile.UPLOAD)) {
            dVar.f55000j.setText(rendering.f49723p);
            dVar.f55000j.setOnClickListener(new View.OnClickListener() { // from class: to.v
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    y.l(y.this, view);
                }
            });
        }
        jq.a aVar = rendering.f49724q;
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
        Pi2NavigationBar navigationBar = dVar.f54998h;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        CoordinatorLayout root = dVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        jq.e.b(aVar, function0, function02, navigationBar, root);
        CoordinatorLayout root2 = dVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
        bq.z.b(root2, rendering.f49729v, rendering.f49730w, null, 0, 0, 56, null);
        RemoteImage remoteImage = yVar.f49732y;
        if (remoteImage != null) {
            if (yVar.A == null) {
                ConstraintLayout imageViewContainer = dVar.f54996f;
                Intrinsics.checkNotNullExpressionValue(imageViewContainer, "imageViewContainer");
                yVar.A = wq.b.c(remoteImage, imageViewContainer, false, 2, null);
                dVar.f54997g.setVisibility(8);
            }
        } else {
            dVar.f54994d.setAnimation(yVar.f49733z);
        }
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = yVar.f49731x;
        if (governmentIdStepStyle != null) {
            CoordinatorLayout root3 = dVar.getRoot();
            Intrinsics.checkNotNullExpressionValue(root3, "getRoot(...)");
            Pi2NavigationBar navigationBar2 = dVar.f54998h;
            Intrinsics.checkNotNullExpressionValue(navigationBar2, "navigationBar");
            TextView title = dVar.f54999i;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            TextView body = dVar.f54992b;
            Intrinsics.checkNotNullExpressionValue(body, "body");
            MaterialButton cameraButton = dVar.f54993c;
            Intrinsics.checkNotNullExpressionValue(cameraButton, "cameraButton");
            Button uploadButton = dVar.f55000j;
            Intrinsics.checkNotNullExpressionValue(uploadButton, "uploadButton");
            ThemeableLottieAnimationView idImage = dVar.f54994d;
            Intrinsics.checkNotNullExpressionValue(idImage, "idImage");
            View idImageContainer = dVar.f54995e;
            Intrinsics.checkNotNullExpressionValue(idImageContainer, "idImageContainer");
            yVar.h(governmentIdStepStyle, root3, navigationBar2, title, body, cameraButton, uploadButton, idImage, idImageContainer, viewEnvironment);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(y yVar, View view) {
        yVar.f49725r.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void l(y yVar, View view) {
        yVar.f49726s.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(y yVar) {
        yVar.f49727t.invoke();
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n(y yVar) {
        yVar.f49728u.invoke();
        return Unit.f31988a;
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
        if (Intrinsics.areEqual(this.f49719d, yVar.f49719d) && Intrinsics.areEqual(this.f49720e, yVar.f49720e) && Intrinsics.areEqual(this.f49721i, yVar.f49721i) && Intrinsics.areEqual(this.f49722o, yVar.f49722o) && Intrinsics.areEqual(this.f49723p, yVar.f49723p) && Intrinsics.areEqual(this.f49724q, yVar.f49724q) && Intrinsics.areEqual(this.f49725r, yVar.f49725r) && Intrinsics.areEqual(this.f49726s, yVar.f49726s) && Intrinsics.areEqual(this.f49727t, yVar.f49727t) && Intrinsics.areEqual(this.f49728u, yVar.f49728u) && Intrinsics.areEqual(this.f49729v, yVar.f49729v) && Intrinsics.areEqual(this.f49730w, yVar.f49730w) && Intrinsics.areEqual(this.f49731x, yVar.f49731x) && Intrinsics.areEqual(this.f49732y, yVar.f49732y) && this.f49733z == yVar.f49733z) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3 = ((((((((((((((((((this.f49719d.hashCode() * 31) + this.f49720e.hashCode()) * 31) + this.f49721i.hashCode()) * 31) + this.f49722o.hashCode()) * 31) + this.f49723p.hashCode()) * 31) + this.f49724q.hashCode()) * 31) + this.f49725r.hashCode()) * 31) + this.f49726s.hashCode()) * 31) + this.f49727t.hashCode()) * 31) + this.f49728u.hashCode()) * 31;
        String str = this.f49729v;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode4 = (((hashCode3 + hashCode) * 31) + this.f49730w.hashCode()) * 31;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.f49731x;
        if (governmentIdStepStyle == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = governmentIdStepStyle.hashCode();
        }
        int i11 = (hashCode4 + hashCode2) * 31;
        RemoteImage remoteImage = this.f49732y;
        if (remoteImage != null) {
            i10 = remoteImage.hashCode();
        }
        return ((i11 + i10) * 31) + Integer.hashCode(this.f49733z);
    }

    public String toString() {
        List list = this.f49719d;
        String str = this.f49720e;
        String str2 = this.f49721i;
        String str3 = this.f49722o;
        String str4 = this.f49723p;
        jq.a aVar = this.f49724q;
        Function0 function0 = this.f49725r;
        Function0 function02 = this.f49726s;
        Function0 function03 = this.f49727t;
        Function0 function04 = this.f49728u;
        String str5 = this.f49729v;
        Function0 function05 = this.f49730w;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.f49731x;
        RemoteImage remoteImage = this.f49732y;
        int i10 = this.f49733z;
        return "ChooseCaptureMethodView(captureOptions=" + list + ", title=" + str + ", body=" + str2 + ", cameraText=" + str3 + ", uploadButtonText=" + str4 + ", navigationState=" + aVar + ", onCameraCaptureClick=" + function0 + ", onUploadClick=" + function02 + ", onBack=" + function03 + ", onCancel=" + function04 + ", error=" + str5 + ", onErrorDismissed=" + function05 + ", styles=" + governmentIdStepStyle + ", pictographAsset=" + remoteImage + ", localAsset=" + i10 + ")";
    }
}
