package ko;

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
import en.k;
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
public final class y implements en.b {
    private View A;
    private final en.c0 B;

    /* renamed from: d  reason: collision with root package name */
    private final List f31726d;

    /* renamed from: e  reason: collision with root package name */
    private final String f31727e;

    /* renamed from: i  reason: collision with root package name */
    private final String f31728i;

    /* renamed from: o  reason: collision with root package name */
    private final String f31729o;

    /* renamed from: p  reason: collision with root package name */
    private final String f31730p;

    /* renamed from: q  reason: collision with root package name */
    private final aq.a f31731q;

    /* renamed from: r  reason: collision with root package name */
    private final Function0 f31732r;

    /* renamed from: s  reason: collision with root package name */
    private final Function0 f31733s;

    /* renamed from: t  reason: collision with root package name */
    private final Function0 f31734t;

    /* renamed from: u  reason: collision with root package name */
    private final Function0 f31735u;

    /* renamed from: v  reason: collision with root package name */
    private final String f31736v;

    /* renamed from: w  reason: collision with root package name */
    private final Function0 f31737w;

    /* renamed from: x  reason: collision with root package name */
    private final StepStyles.GovernmentIdStepStyle f31738x;

    /* renamed from: y  reason: collision with root package name */
    private final RemoteImage f31739y;

    /* renamed from: z  reason: collision with root package name */
    private final int f31740z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f31741d = new a();

        a() {
            super(3, oo.d.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2GovernmentidChooseCaptureMethodBinding;", 0);
        }

        public final oo.d a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return oo.d.c(p02, viewGroup, z10);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
        }
    }

    public y(List captureOptions, String title, String body, String cameraText, String uploadButtonText, aq.a navigationState, Function0 onCameraCaptureClick, Function0 onUploadClick, Function0 onBack, Function0 onCancel, String str, Function0 onErrorDismissed, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, RemoteImage remoteImage, int i10) {
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
        this.f31726d = captureOptions;
        this.f31727e = title;
        this.f31728i = body;
        this.f31729o = cameraText;
        this.f31730p = uploadButtonText;
        this.f31731q = navigationState;
        this.f31732r = onCameraCaptureClick;
        this.f31733s = onUploadClick;
        this.f31734t = onBack;
        this.f31735u = onCancel;
        this.f31736v = str;
        this.f31737w = onErrorDismissed;
        this.f31738x = governmentIdStepStyle;
        this.f31739y = remoteImage;
        this.f31740z = i10;
        k.a aVar = en.k.f21834a;
        this.B = new en.z(Reflection.getOrCreateKotlinClass(y.class), a.f31741d, new Function1() { // from class: ko.s
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                en.k i11;
                i11 = y.i(y.this, (oo.d) obj);
                return i11;
            }
        });
    }

    private final void h(StepStyles.GovernmentIdStepStyle governmentIdStepStyle, View view, Pi2NavigationBar pi2NavigationBar, TextView textView, TextView textView2, Button button, Button button2, ThemeableLottieAnimationView themeableLottieAnimationView, View view2, en.a0 a0Var) {
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
            lq.e.f(button, buttonPrimaryStyleValue, false, false, 6, null);
        }
        ButtonCancelComponentStyle buttonSecondaryStyleValue = governmentIdStepStyle.getButtonSecondaryStyleValue();
        if (buttonSecondaryStyleValue != null) {
            lq.e.f(button2, buttonSecondaryStyleValue, false, false, 6, null);
        }
        Integer fillColorValue = governmentIdStepStyle.getFillColorValue();
        if (fillColorValue != null) {
            view2.setBackground(new ColorDrawable(fillColorValue.intValue()));
        }
        lq.g.g(themeableLottieAnimationView, governmentIdStepStyle.getStrokeColorValue(), governmentIdStepStyle.getFillColorValue(), null, new String[]{"#000000", "#190052", "#190051"}, new String[]{"#8751FF", "#AA85FF", "#AA84FF"}, new String[0]);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final en.k i(final y yVar, final oo.d binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        CoordinatorLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        cq.f.d(root, false, false, false, false, 15, null);
        return new en.k() { // from class: ko.t
            @Override // en.k
            public final void a(Object obj, en.a0 a0Var) {
                y.j(oo.d.this, yVar, (y) obj, a0Var);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(oo.d dVar, y yVar, final y rendering, en.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        Context context = dVar.getRoot().getContext();
        dVar.f42475i.setText(rendering.f31727e);
        dVar.f42468b.setText(rendering.f31728i);
        if (yVar.f31726d.contains(CaptureOptionNativeMobile.MOBILE_CAMERA)) {
            if (!StringsKt.k0(yVar.f31729o)) {
                dVar.f42469c.setText(yVar.f31729o);
                dVar.f42469c.setIcon(null);
            } else {
                dVar.f42469c.setText((CharSequence) null);
                dVar.f42469c.setIcon(g.a.b(context, l4.f31356c));
            }
            dVar.f42469c.setOnClickListener(new View.OnClickListener() { // from class: ko.u
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    y.k(y.this, view);
                }
            });
        }
        if (yVar.f31726d.contains(CaptureOptionNativeMobile.UPLOAD)) {
            dVar.f42476j.setText(rendering.f31730p);
            dVar.f42476j.setOnClickListener(new View.OnClickListener() { // from class: ko.v
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    y.l(y.this, view);
                }
            });
        }
        aq.a aVar = rendering.f31731q;
        Function0 function0 = new Function0() { // from class: ko.w
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit m10;
                m10 = y.m(y.this);
                return m10;
            }
        };
        Function0 function02 = new Function0() { // from class: ko.x
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit n10;
                n10 = y.n(y.this);
                return n10;
            }
        };
        Pi2NavigationBar navigationBar = dVar.f42474h;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        CoordinatorLayout root = dVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        aq.e.b(aVar, function0, function02, navigationBar, root);
        CoordinatorLayout root2 = dVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
        sp.z.b(root2, rendering.f31736v, rendering.f31737w, null, 0, 0, 56, null);
        RemoteImage remoteImage = yVar.f31739y;
        if (remoteImage != null) {
            if (yVar.A == null) {
                ConstraintLayout imageViewContainer = dVar.f42472f;
                Intrinsics.checkNotNullExpressionValue(imageViewContainer, "imageViewContainer");
                yVar.A = nq.b.c(remoteImage, imageViewContainer, false, 2, null);
                dVar.f42473g.setVisibility(8);
            }
        } else {
            dVar.f42470d.setAnimation(yVar.f31740z);
        }
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = yVar.f31738x;
        if (governmentIdStepStyle != null) {
            CoordinatorLayout root3 = dVar.getRoot();
            Intrinsics.checkNotNullExpressionValue(root3, "getRoot(...)");
            Pi2NavigationBar navigationBar2 = dVar.f42474h;
            Intrinsics.checkNotNullExpressionValue(navigationBar2, "navigationBar");
            TextView title = dVar.f42475i;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            TextView body = dVar.f42468b;
            Intrinsics.checkNotNullExpressionValue(body, "body");
            MaterialButton cameraButton = dVar.f42469c;
            Intrinsics.checkNotNullExpressionValue(cameraButton, "cameraButton");
            Button uploadButton = dVar.f42476j;
            Intrinsics.checkNotNullExpressionValue(uploadButton, "uploadButton");
            ThemeableLottieAnimationView idImage = dVar.f42470d;
            Intrinsics.checkNotNullExpressionValue(idImage, "idImage");
            View idImageContainer = dVar.f42471e;
            Intrinsics.checkNotNullExpressionValue(idImageContainer, "idImageContainer");
            yVar.h(governmentIdStepStyle, root3, navigationBar2, title, body, cameraButton, uploadButton, idImage, idImageContainer, viewEnvironment);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(y yVar, View view) {
        yVar.f31732r.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void l(y yVar, View view) {
        yVar.f31733s.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(y yVar) {
        yVar.f31734t.invoke();
        return Unit.f31765a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n(y yVar) {
        yVar.f31735u.invoke();
        return Unit.f31765a;
    }

    @Override // en.b
    public en.c0 a() {
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
        if (Intrinsics.areEqual(this.f31726d, yVar.f31726d) && Intrinsics.areEqual(this.f31727e, yVar.f31727e) && Intrinsics.areEqual(this.f31728i, yVar.f31728i) && Intrinsics.areEqual(this.f31729o, yVar.f31729o) && Intrinsics.areEqual(this.f31730p, yVar.f31730p) && Intrinsics.areEqual(this.f31731q, yVar.f31731q) && Intrinsics.areEqual(this.f31732r, yVar.f31732r) && Intrinsics.areEqual(this.f31733s, yVar.f31733s) && Intrinsics.areEqual(this.f31734t, yVar.f31734t) && Intrinsics.areEqual(this.f31735u, yVar.f31735u) && Intrinsics.areEqual(this.f31736v, yVar.f31736v) && Intrinsics.areEqual(this.f31737w, yVar.f31737w) && Intrinsics.areEqual(this.f31738x, yVar.f31738x) && Intrinsics.areEqual(this.f31739y, yVar.f31739y) && this.f31740z == yVar.f31740z) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3 = ((((((((((((((((((this.f31726d.hashCode() * 31) + this.f31727e.hashCode()) * 31) + this.f31728i.hashCode()) * 31) + this.f31729o.hashCode()) * 31) + this.f31730p.hashCode()) * 31) + this.f31731q.hashCode()) * 31) + this.f31732r.hashCode()) * 31) + this.f31733s.hashCode()) * 31) + this.f31734t.hashCode()) * 31) + this.f31735u.hashCode()) * 31;
        String str = this.f31736v;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode4 = (((hashCode3 + hashCode) * 31) + this.f31737w.hashCode()) * 31;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.f31738x;
        if (governmentIdStepStyle == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = governmentIdStepStyle.hashCode();
        }
        int i11 = (hashCode4 + hashCode2) * 31;
        RemoteImage remoteImage = this.f31739y;
        if (remoteImage != null) {
            i10 = remoteImage.hashCode();
        }
        return ((i11 + i10) * 31) + Integer.hashCode(this.f31740z);
    }

    public String toString() {
        List list = this.f31726d;
        String str = this.f31727e;
        String str2 = this.f31728i;
        String str3 = this.f31729o;
        String str4 = this.f31730p;
        aq.a aVar = this.f31731q;
        Function0 function0 = this.f31732r;
        Function0 function02 = this.f31733s;
        Function0 function03 = this.f31734t;
        Function0 function04 = this.f31735u;
        String str5 = this.f31736v;
        Function0 function05 = this.f31737w;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.f31738x;
        RemoteImage remoteImage = this.f31739y;
        int i10 = this.f31740z;
        return "ChooseCaptureMethodView(captureOptions=" + list + ", title=" + str + ", body=" + str2 + ", cameraText=" + str3 + ", uploadButtonText=" + str4 + ", navigationState=" + aVar + ", onCameraCaptureClick=" + function0 + ", onUploadClick=" + function02 + ", onBack=" + function03 + ", onCancel=" + function04 + ", error=" + str5 + ", onErrorDismissed=" + function05 + ", styles=" + governmentIdStepStyle + ", pictographAsset=" + remoteImage + ", localAsset=" + i10 + ")";
    }
}
