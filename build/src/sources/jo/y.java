package jo;

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
import dn.k;
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
public final class y implements dn.b {
    private View A;
    private final dn.c0 B;

    /* renamed from: d  reason: collision with root package name */
    private final List f30727d;

    /* renamed from: e  reason: collision with root package name */
    private final String f30728e;

    /* renamed from: i  reason: collision with root package name */
    private final String f30729i;

    /* renamed from: o  reason: collision with root package name */
    private final String f30730o;

    /* renamed from: p  reason: collision with root package name */
    private final String f30731p;

    /* renamed from: q  reason: collision with root package name */
    private final zp.a f30732q;

    /* renamed from: r  reason: collision with root package name */
    private final Function0 f30733r;

    /* renamed from: s  reason: collision with root package name */
    private final Function0 f30734s;

    /* renamed from: t  reason: collision with root package name */
    private final Function0 f30735t;

    /* renamed from: u  reason: collision with root package name */
    private final Function0 f30736u;

    /* renamed from: v  reason: collision with root package name */
    private final String f30737v;

    /* renamed from: w  reason: collision with root package name */
    private final Function0 f30738w;

    /* renamed from: x  reason: collision with root package name */
    private final StepStyles.GovernmentIdStepStyle f30739x;

    /* renamed from: y  reason: collision with root package name */
    private final RemoteImage f30740y;

    /* renamed from: z  reason: collision with root package name */
    private final int f30741z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f30742d = new a();

        a() {
            super(3, no.d.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2GovernmentidChooseCaptureMethodBinding;", 0);
        }

        public final no.d a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return no.d.c(p02, viewGroup, z10);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
        }
    }

    public y(List captureOptions, String title, String body, String cameraText, String uploadButtonText, zp.a navigationState, Function0 onCameraCaptureClick, Function0 onUploadClick, Function0 onBack, Function0 onCancel, String str, Function0 onErrorDismissed, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, RemoteImage remoteImage, int i10) {
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
        this.f30727d = captureOptions;
        this.f30728e = title;
        this.f30729i = body;
        this.f30730o = cameraText;
        this.f30731p = uploadButtonText;
        this.f30732q = navigationState;
        this.f30733r = onCameraCaptureClick;
        this.f30734s = onUploadClick;
        this.f30735t = onBack;
        this.f30736u = onCancel;
        this.f30737v = str;
        this.f30738w = onErrorDismissed;
        this.f30739x = governmentIdStepStyle;
        this.f30740y = remoteImage;
        this.f30741z = i10;
        k.a aVar = dn.k.f20913a;
        this.B = new dn.z(Reflection.getOrCreateKotlinClass(y.class), a.f30742d, new Function1() { // from class: jo.s
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                dn.k i11;
                i11 = y.i(y.this, (no.d) obj);
                return i11;
            }
        });
    }

    private final void h(StepStyles.GovernmentIdStepStyle governmentIdStepStyle, View view, Pi2NavigationBar pi2NavigationBar, TextView textView, TextView textView2, Button button, Button button2, ThemeableLottieAnimationView themeableLottieAnimationView, View view2, dn.a0 a0Var) {
        Integer backgroundColorValue = governmentIdStepStyle.getBackgroundColorValue();
        if (backgroundColorValue != null) {
            int intValue = backgroundColorValue.intValue();
            view.setBackgroundColor(intValue);
            aq.c.a(a0Var, intValue);
        }
        Context context = view.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Drawable a10 = mq.c.a(governmentIdStepStyle, context);
        if (a10 != null) {
            view.setBackground(a10);
        }
        Integer headerButtonColorValue = governmentIdStepStyle.getHeaderButtonColorValue();
        if (headerButtonColorValue != null) {
            pi2NavigationBar.setControlsColor(headerButtonColorValue.intValue());
        }
        TextBasedComponentStyle titleStyleValue = governmentIdStepStyle.getTitleStyleValue();
        if (titleStyleValue != null) {
            kq.f0.n(textView, titleStyleValue, null, 2, null);
        }
        TextBasedComponentStyle textStyleValue = governmentIdStepStyle.getTextStyleValue();
        if (textStyleValue != null) {
            kq.f0.n(textView2, textStyleValue, null, 2, null);
        }
        ButtonSubmitComponentStyle buttonPrimaryStyleValue = governmentIdStepStyle.getButtonPrimaryStyleValue();
        if (buttonPrimaryStyleValue != null) {
            kq.e.f(button, buttonPrimaryStyleValue, false, false, 6, null);
        }
        ButtonCancelComponentStyle buttonSecondaryStyleValue = governmentIdStepStyle.getButtonSecondaryStyleValue();
        if (buttonSecondaryStyleValue != null) {
            kq.e.f(button2, buttonSecondaryStyleValue, false, false, 6, null);
        }
        Integer fillColorValue = governmentIdStepStyle.getFillColorValue();
        if (fillColorValue != null) {
            view2.setBackground(new ColorDrawable(fillColorValue.intValue()));
        }
        kq.g.g(themeableLottieAnimationView, governmentIdStepStyle.getStrokeColorValue(), governmentIdStepStyle.getFillColorValue(), null, new String[]{"#000000", "#190052", "#190051"}, new String[]{"#8751FF", "#AA85FF", "#AA84FF"}, new String[0]);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final dn.k i(final y yVar, final no.d binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        CoordinatorLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        bq.f.d(root, false, false, false, false, 15, null);
        return new dn.k() { // from class: jo.t
            @Override // dn.k
            public final void a(Object obj, dn.a0 a0Var) {
                y.j(no.d.this, yVar, (y) obj, a0Var);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(no.d dVar, y yVar, final y rendering, dn.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        Context context = dVar.getRoot().getContext();
        dVar.f41000i.setText(rendering.f30728e);
        dVar.f40993b.setText(rendering.f30729i);
        if (yVar.f30727d.contains(CaptureOptionNativeMobile.MOBILE_CAMERA)) {
            if (!StringsKt.k0(yVar.f30730o)) {
                dVar.f40994c.setText(yVar.f30730o);
                dVar.f40994c.setIcon(null);
            } else {
                dVar.f40994c.setText((CharSequence) null);
                dVar.f40994c.setIcon(g.a.b(context, l4.f30357c));
            }
            dVar.f40994c.setOnClickListener(new View.OnClickListener() { // from class: jo.u
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    y.k(y.this, view);
                }
            });
        }
        if (yVar.f30727d.contains(CaptureOptionNativeMobile.UPLOAD)) {
            dVar.f41001j.setText(rendering.f30731p);
            dVar.f41001j.setOnClickListener(new View.OnClickListener() { // from class: jo.v
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    y.l(y.this, view);
                }
            });
        }
        zp.a aVar = rendering.f30732q;
        Function0 function0 = new Function0() { // from class: jo.w
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit m10;
                m10 = y.m(y.this);
                return m10;
            }
        };
        Function0 function02 = new Function0() { // from class: jo.x
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit n10;
                n10 = y.n(y.this);
                return n10;
            }
        };
        Pi2NavigationBar navigationBar = dVar.f40999h;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        CoordinatorLayout root = dVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        zp.e.b(aVar, function0, function02, navigationBar, root);
        CoordinatorLayout root2 = dVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
        rp.z.b(root2, rendering.f30737v, rendering.f30738w, null, 0, 0, 56, null);
        RemoteImage remoteImage = yVar.f30740y;
        if (remoteImage != null) {
            if (yVar.A == null) {
                ConstraintLayout imageViewContainer = dVar.f40997f;
                Intrinsics.checkNotNullExpressionValue(imageViewContainer, "imageViewContainer");
                yVar.A = mq.b.c(remoteImage, imageViewContainer, false, 2, null);
                dVar.f40998g.setVisibility(8);
            }
        } else {
            dVar.f40995d.setAnimation(yVar.f30741z);
        }
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = yVar.f30739x;
        if (governmentIdStepStyle != null) {
            CoordinatorLayout root3 = dVar.getRoot();
            Intrinsics.checkNotNullExpressionValue(root3, "getRoot(...)");
            Pi2NavigationBar navigationBar2 = dVar.f40999h;
            Intrinsics.checkNotNullExpressionValue(navigationBar2, "navigationBar");
            TextView title = dVar.f41000i;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            TextView body = dVar.f40993b;
            Intrinsics.checkNotNullExpressionValue(body, "body");
            MaterialButton cameraButton = dVar.f40994c;
            Intrinsics.checkNotNullExpressionValue(cameraButton, "cameraButton");
            Button uploadButton = dVar.f41001j;
            Intrinsics.checkNotNullExpressionValue(uploadButton, "uploadButton");
            ThemeableLottieAnimationView idImage = dVar.f40995d;
            Intrinsics.checkNotNullExpressionValue(idImage, "idImage");
            View idImageContainer = dVar.f40996e;
            Intrinsics.checkNotNullExpressionValue(idImageContainer, "idImageContainer");
            yVar.h(governmentIdStepStyle, root3, navigationBar2, title, body, cameraButton, uploadButton, idImage, idImageContainer, viewEnvironment);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(y yVar, View view) {
        yVar.f30733r.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void l(y yVar, View view) {
        yVar.f30734s.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(y yVar) {
        yVar.f30735t.invoke();
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n(y yVar) {
        yVar.f30736u.invoke();
        return Unit.f32008a;
    }

    @Override // dn.b
    public dn.c0 a() {
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
        if (Intrinsics.areEqual(this.f30727d, yVar.f30727d) && Intrinsics.areEqual(this.f30728e, yVar.f30728e) && Intrinsics.areEqual(this.f30729i, yVar.f30729i) && Intrinsics.areEqual(this.f30730o, yVar.f30730o) && Intrinsics.areEqual(this.f30731p, yVar.f30731p) && Intrinsics.areEqual(this.f30732q, yVar.f30732q) && Intrinsics.areEqual(this.f30733r, yVar.f30733r) && Intrinsics.areEqual(this.f30734s, yVar.f30734s) && Intrinsics.areEqual(this.f30735t, yVar.f30735t) && Intrinsics.areEqual(this.f30736u, yVar.f30736u) && Intrinsics.areEqual(this.f30737v, yVar.f30737v) && Intrinsics.areEqual(this.f30738w, yVar.f30738w) && Intrinsics.areEqual(this.f30739x, yVar.f30739x) && Intrinsics.areEqual(this.f30740y, yVar.f30740y) && this.f30741z == yVar.f30741z) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3 = ((((((((((((((((((this.f30727d.hashCode() * 31) + this.f30728e.hashCode()) * 31) + this.f30729i.hashCode()) * 31) + this.f30730o.hashCode()) * 31) + this.f30731p.hashCode()) * 31) + this.f30732q.hashCode()) * 31) + this.f30733r.hashCode()) * 31) + this.f30734s.hashCode()) * 31) + this.f30735t.hashCode()) * 31) + this.f30736u.hashCode()) * 31;
        String str = this.f30737v;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode4 = (((hashCode3 + hashCode) * 31) + this.f30738w.hashCode()) * 31;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.f30739x;
        if (governmentIdStepStyle == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = governmentIdStepStyle.hashCode();
        }
        int i11 = (hashCode4 + hashCode2) * 31;
        RemoteImage remoteImage = this.f30740y;
        if (remoteImage != null) {
            i10 = remoteImage.hashCode();
        }
        return ((i11 + i10) * 31) + Integer.hashCode(this.f30741z);
    }

    public String toString() {
        List list = this.f30727d;
        String str = this.f30728e;
        String str2 = this.f30729i;
        String str3 = this.f30730o;
        String str4 = this.f30731p;
        zp.a aVar = this.f30732q;
        Function0 function0 = this.f30733r;
        Function0 function02 = this.f30734s;
        Function0 function03 = this.f30735t;
        Function0 function04 = this.f30736u;
        String str5 = this.f30737v;
        Function0 function05 = this.f30738w;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.f30739x;
        RemoteImage remoteImage = this.f30740y;
        int i10 = this.f30741z;
        return "ChooseCaptureMethodView(captureOptions=" + list + ", title=" + str + ", body=" + str2 + ", cameraText=" + str3 + ", uploadButtonText=" + str4 + ", navigationState=" + aVar + ", onCameraCaptureClick=" + function0 + ", onUploadClick=" + function02 + ", onBack=" + function03 + ", onCancel=" + function04 + ", error=" + str5 + ", onErrorDismissed=" + function05 + ", styles=" + governmentIdStepStyle + ", pictographAsset=" + remoteImage + ", localAsset=" + i10 + ")";
    }
}
