package bo;

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
import java.util.List;
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
public final class y implements wm.b {
    private View A;
    private final wm.c0 B;

    /* renamed from: d  reason: collision with root package name */
    private final List f7364d;

    /* renamed from: e  reason: collision with root package name */
    private final String f7365e;

    /* renamed from: i  reason: collision with root package name */
    private final String f7366i;

    /* renamed from: o  reason: collision with root package name */
    private final String f7367o;

    /* renamed from: p  reason: collision with root package name */
    private final String f7368p;

    /* renamed from: q  reason: collision with root package name */
    private final sp.a f7369q;

    /* renamed from: r  reason: collision with root package name */
    private final Function0 f7370r;

    /* renamed from: s  reason: collision with root package name */
    private final Function0 f7371s;

    /* renamed from: t  reason: collision with root package name */
    private final Function0 f7372t;

    /* renamed from: u  reason: collision with root package name */
    private final Function0 f7373u;

    /* renamed from: v  reason: collision with root package name */
    private final String f7374v;

    /* renamed from: w  reason: collision with root package name */
    private final Function0 f7375w;

    /* renamed from: x  reason: collision with root package name */
    private final StepStyles.GovernmentIdStepStyle f7376x;

    /* renamed from: y  reason: collision with root package name */
    private final RemoteImage f7377y;

    /* renamed from: z  reason: collision with root package name */
    private final int f7378z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f7379d = new a();

        a() {
            super(3, go.d.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2GovernmentidChooseCaptureMethodBinding;", 0);
        }

        public final go.d a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return go.d.c(p02, viewGroup, z10);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
        }
    }

    public y(List captureOptions, String title, String body, String cameraText, String uploadButtonText, sp.a navigationState, Function0 onCameraCaptureClick, Function0 onUploadClick, Function0 onBack, Function0 onCancel, String str, Function0 onErrorDismissed, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, RemoteImage remoteImage, int i10) {
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
        this.f7364d = captureOptions;
        this.f7365e = title;
        this.f7366i = body;
        this.f7367o = cameraText;
        this.f7368p = uploadButtonText;
        this.f7369q = navigationState;
        this.f7370r = onCameraCaptureClick;
        this.f7371s = onUploadClick;
        this.f7372t = onBack;
        this.f7373u = onCancel;
        this.f7374v = str;
        this.f7375w = onErrorDismissed;
        this.f7376x = governmentIdStepStyle;
        this.f7377y = remoteImage;
        this.f7378z = i10;
        k.a aVar = wm.k.f52359a;
        this.B = new wm.z(Reflection.getOrCreateKotlinClass(y.class), a.f7379d, new Function1() { // from class: bo.s
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                wm.k i11;
                i11 = y.i(y.this, (go.d) obj);
                return i11;
            }
        });
    }

    private final void h(StepStyles.GovernmentIdStepStyle governmentIdStepStyle, View view, Pi2NavigationBar pi2NavigationBar, TextView textView, TextView textView2, Button button, Button button2, ThemeableLottieAnimationView themeableLottieAnimationView, View view2, wm.a0 a0Var) {
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
            dq.e.f(button, buttonPrimaryStyleValue, false, false, 6, null);
        }
        ButtonCancelComponentStyle buttonSecondaryStyleValue = governmentIdStepStyle.getButtonSecondaryStyleValue();
        if (buttonSecondaryStyleValue != null) {
            dq.e.f(button2, buttonSecondaryStyleValue, false, false, 6, null);
        }
        Integer fillColorValue = governmentIdStepStyle.getFillColorValue();
        if (fillColorValue != null) {
            view2.setBackground(new ColorDrawable(fillColorValue.intValue()));
        }
        dq.g.g(themeableLottieAnimationView, governmentIdStepStyle.getStrokeColorValue(), governmentIdStepStyle.getFillColorValue(), null, new String[]{"#000000", "#190052", "#190051"}, new String[]{"#8751FF", "#AA85FF", "#AA84FF"}, new String[0]);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final wm.k i(final y yVar, final go.d binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        CoordinatorLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        up.f.d(root, false, false, false, false, 15, null);
        return new wm.k() { // from class: bo.t
            @Override // wm.k
            public final void a(Object obj, wm.a0 a0Var) {
                y.j(go.d.this, yVar, (y) obj, a0Var);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(go.d dVar, y yVar, final y rendering, wm.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        Context context = dVar.getRoot().getContext();
        dVar.f27240i.setText(rendering.f7365e);
        dVar.f27233b.setText(rendering.f7366i);
        if (yVar.f7364d.contains(CaptureOptionNativeMobile.MOBILE_CAMERA)) {
            if (!StringsKt.k0(yVar.f7367o)) {
                dVar.f27234c.setText(yVar.f7367o);
                dVar.f27234c.setIcon(null);
            } else {
                dVar.f27234c.setText((CharSequence) null);
                dVar.f27234c.setIcon(g.a.b(context, l4.f6994c));
            }
            dVar.f27234c.setOnClickListener(new View.OnClickListener() { // from class: bo.u
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    y.k(y.this, view);
                }
            });
        }
        if (yVar.f7364d.contains(CaptureOptionNativeMobile.UPLOAD)) {
            dVar.f27241j.setText(rendering.f7368p);
            dVar.f27241j.setOnClickListener(new View.OnClickListener() { // from class: bo.v
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    y.l(y.this, view);
                }
            });
        }
        sp.a aVar = rendering.f7369q;
        Function0 function0 = new Function0() { // from class: bo.w
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit m10;
                m10 = y.m(y.this);
                return m10;
            }
        };
        Function0 function02 = new Function0() { // from class: bo.x
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit n10;
                n10 = y.n(y.this);
                return n10;
            }
        };
        Pi2NavigationBar navigationBar = dVar.f27239h;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        CoordinatorLayout root = dVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        sp.e.b(aVar, function0, function02, navigationBar, root);
        CoordinatorLayout root2 = dVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
        kp.z.b(root2, rendering.f7374v, rendering.f7375w, null, 0, 0, 56, null);
        RemoteImage remoteImage = yVar.f7377y;
        if (remoteImage != null) {
            if (yVar.A == null) {
                ConstraintLayout imageViewContainer = dVar.f27237f;
                Intrinsics.checkNotNullExpressionValue(imageViewContainer, "imageViewContainer");
                yVar.A = fq.b.c(remoteImage, imageViewContainer, false, 2, null);
                dVar.f27238g.setVisibility(8);
            }
        } else {
            dVar.f27235d.setAnimation(yVar.f7378z);
        }
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = yVar.f7376x;
        if (governmentIdStepStyle != null) {
            CoordinatorLayout root3 = dVar.getRoot();
            Intrinsics.checkNotNullExpressionValue(root3, "getRoot(...)");
            Pi2NavigationBar navigationBar2 = dVar.f27239h;
            Intrinsics.checkNotNullExpressionValue(navigationBar2, "navigationBar");
            TextView title = dVar.f27240i;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            TextView body = dVar.f27233b;
            Intrinsics.checkNotNullExpressionValue(body, "body");
            MaterialButton cameraButton = dVar.f27234c;
            Intrinsics.checkNotNullExpressionValue(cameraButton, "cameraButton");
            Button uploadButton = dVar.f27241j;
            Intrinsics.checkNotNullExpressionValue(uploadButton, "uploadButton");
            ThemeableLottieAnimationView idImage = dVar.f27235d;
            Intrinsics.checkNotNullExpressionValue(idImage, "idImage");
            View idImageContainer = dVar.f27236e;
            Intrinsics.checkNotNullExpressionValue(idImageContainer, "idImageContainer");
            yVar.h(governmentIdStepStyle, root3, navigationBar2, title, body, cameraButton, uploadButton, idImage, idImageContainer, viewEnvironment);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(y yVar, View view) {
        yVar.f7370r.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void l(y yVar, View view) {
        yVar.f7371s.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(y yVar) {
        yVar.f7372t.invoke();
        return Unit.f33074a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n(y yVar) {
        yVar.f7373u.invoke();
        return Unit.f33074a;
    }

    @Override // wm.b
    public wm.c0 a() {
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
        if (Intrinsics.areEqual(this.f7364d, yVar.f7364d) && Intrinsics.areEqual(this.f7365e, yVar.f7365e) && Intrinsics.areEqual(this.f7366i, yVar.f7366i) && Intrinsics.areEqual(this.f7367o, yVar.f7367o) && Intrinsics.areEqual(this.f7368p, yVar.f7368p) && Intrinsics.areEqual(this.f7369q, yVar.f7369q) && Intrinsics.areEqual(this.f7370r, yVar.f7370r) && Intrinsics.areEqual(this.f7371s, yVar.f7371s) && Intrinsics.areEqual(this.f7372t, yVar.f7372t) && Intrinsics.areEqual(this.f7373u, yVar.f7373u) && Intrinsics.areEqual(this.f7374v, yVar.f7374v) && Intrinsics.areEqual(this.f7375w, yVar.f7375w) && Intrinsics.areEqual(this.f7376x, yVar.f7376x) && Intrinsics.areEqual(this.f7377y, yVar.f7377y) && this.f7378z == yVar.f7378z) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3 = ((((((((((((((((((this.f7364d.hashCode() * 31) + this.f7365e.hashCode()) * 31) + this.f7366i.hashCode()) * 31) + this.f7367o.hashCode()) * 31) + this.f7368p.hashCode()) * 31) + this.f7369q.hashCode()) * 31) + this.f7370r.hashCode()) * 31) + this.f7371s.hashCode()) * 31) + this.f7372t.hashCode()) * 31) + this.f7373u.hashCode()) * 31;
        String str = this.f7374v;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode4 = (((hashCode3 + hashCode) * 31) + this.f7375w.hashCode()) * 31;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.f7376x;
        if (governmentIdStepStyle == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = governmentIdStepStyle.hashCode();
        }
        int i11 = (hashCode4 + hashCode2) * 31;
        RemoteImage remoteImage = this.f7377y;
        if (remoteImage != null) {
            i10 = remoteImage.hashCode();
        }
        return ((i11 + i10) * 31) + Integer.hashCode(this.f7378z);
    }

    public String toString() {
        List list = this.f7364d;
        String str = this.f7365e;
        String str2 = this.f7366i;
        String str3 = this.f7367o;
        String str4 = this.f7368p;
        sp.a aVar = this.f7369q;
        Function0 function0 = this.f7370r;
        Function0 function02 = this.f7371s;
        Function0 function03 = this.f7372t;
        Function0 function04 = this.f7373u;
        String str5 = this.f7374v;
        Function0 function05 = this.f7375w;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.f7376x;
        RemoteImage remoteImage = this.f7377y;
        int i10 = this.f7378z;
        return "ChooseCaptureMethodView(captureOptions=" + list + ", title=" + str + ", body=" + str2 + ", cameraText=" + str3 + ", uploadButtonText=" + str4 + ", navigationState=" + aVar + ", onCameraCaptureClick=" + function0 + ", onUploadClick=" + function02 + ", onBack=" + function03 + ", onCancel=" + function04 + ", error=" + str5 + ", onErrorDismissed=" + function05 + ", styles=" + governmentIdStepStyle + ", pictographAsset=" + remoteImage + ", localAsset=" + i10 + ")";
    }
}
