package ao;

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
import vm.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y implements vm.b {
    private View A;
    private final vm.c0 B;

    /* renamed from: d  reason: collision with root package name */
    private final List f6541d;

    /* renamed from: e  reason: collision with root package name */
    private final String f6542e;

    /* renamed from: i  reason: collision with root package name */
    private final String f6543i;

    /* renamed from: o  reason: collision with root package name */
    private final String f6544o;

    /* renamed from: p  reason: collision with root package name */
    private final String f6545p;

    /* renamed from: q  reason: collision with root package name */
    private final rp.a f6546q;

    /* renamed from: r  reason: collision with root package name */
    private final Function0 f6547r;

    /* renamed from: s  reason: collision with root package name */
    private final Function0 f6548s;

    /* renamed from: t  reason: collision with root package name */
    private final Function0 f6549t;

    /* renamed from: u  reason: collision with root package name */
    private final Function0 f6550u;

    /* renamed from: v  reason: collision with root package name */
    private final String f6551v;

    /* renamed from: w  reason: collision with root package name */
    private final Function0 f6552w;

    /* renamed from: x  reason: collision with root package name */
    private final StepStyles.GovernmentIdStepStyle f6553x;

    /* renamed from: y  reason: collision with root package name */
    private final RemoteImage f6554y;

    /* renamed from: z  reason: collision with root package name */
    private final int f6555z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f6556d = new a();

        a() {
            super(3, fo.d.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2GovernmentidChooseCaptureMethodBinding;", 0);
        }

        public final fo.d a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return fo.d.c(p02, viewGroup, z10);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
        }
    }

    public y(List captureOptions, String title, String body, String cameraText, String uploadButtonText, rp.a navigationState, Function0 onCameraCaptureClick, Function0 onUploadClick, Function0 onBack, Function0 onCancel, String str, Function0 onErrorDismissed, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, RemoteImage remoteImage, int i10) {
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
        this.f6541d = captureOptions;
        this.f6542e = title;
        this.f6543i = body;
        this.f6544o = cameraText;
        this.f6545p = uploadButtonText;
        this.f6546q = navigationState;
        this.f6547r = onCameraCaptureClick;
        this.f6548s = onUploadClick;
        this.f6549t = onBack;
        this.f6550u = onCancel;
        this.f6551v = str;
        this.f6552w = onErrorDismissed;
        this.f6553x = governmentIdStepStyle;
        this.f6554y = remoteImage;
        this.f6555z = i10;
        k.a aVar = vm.k.f51283a;
        this.B = new vm.z(Reflection.getOrCreateKotlinClass(y.class), a.f6556d, new Function1() { // from class: ao.s
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                vm.k i11;
                i11 = y.i(y.this, (fo.d) obj);
                return i11;
            }
        });
    }

    private final void h(StepStyles.GovernmentIdStepStyle governmentIdStepStyle, View view, Pi2NavigationBar pi2NavigationBar, TextView textView, TextView textView2, Button button, Button button2, ThemeableLottieAnimationView themeableLottieAnimationView, View view2, vm.a0 a0Var) {
        Integer backgroundColorValue = governmentIdStepStyle.getBackgroundColorValue();
        if (backgroundColorValue != null) {
            int intValue = backgroundColorValue.intValue();
            view.setBackgroundColor(intValue);
            sp.c.a(a0Var, intValue);
        }
        Context context = view.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Drawable a10 = eq.c.a(governmentIdStepStyle, context);
        if (a10 != null) {
            view.setBackground(a10);
        }
        Integer headerButtonColorValue = governmentIdStepStyle.getHeaderButtonColorValue();
        if (headerButtonColorValue != null) {
            pi2NavigationBar.setControlsColor(headerButtonColorValue.intValue());
        }
        TextBasedComponentStyle titleStyleValue = governmentIdStepStyle.getTitleStyleValue();
        if (titleStyleValue != null) {
            cq.f0.n(textView, titleStyleValue, null, 2, null);
        }
        TextBasedComponentStyle textStyleValue = governmentIdStepStyle.getTextStyleValue();
        if (textStyleValue != null) {
            cq.f0.n(textView2, textStyleValue, null, 2, null);
        }
        ButtonSubmitComponentStyle buttonPrimaryStyleValue = governmentIdStepStyle.getButtonPrimaryStyleValue();
        if (buttonPrimaryStyleValue != null) {
            cq.e.f(button, buttonPrimaryStyleValue, false, false, 6, null);
        }
        ButtonCancelComponentStyle buttonSecondaryStyleValue = governmentIdStepStyle.getButtonSecondaryStyleValue();
        if (buttonSecondaryStyleValue != null) {
            cq.e.f(button2, buttonSecondaryStyleValue, false, false, 6, null);
        }
        Integer fillColorValue = governmentIdStepStyle.getFillColorValue();
        if (fillColorValue != null) {
            view2.setBackground(new ColorDrawable(fillColorValue.intValue()));
        }
        cq.g.g(themeableLottieAnimationView, governmentIdStepStyle.getStrokeColorValue(), governmentIdStepStyle.getFillColorValue(), null, new String[]{"#000000", "#190052", "#190051"}, new String[]{"#8751FF", "#AA85FF", "#AA84FF"}, new String[0]);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final vm.k i(final y yVar, final fo.d binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        CoordinatorLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        tp.f.d(root, false, false, false, false, 15, null);
        return new vm.k() { // from class: ao.t
            @Override // vm.k
            public final void a(Object obj, vm.a0 a0Var) {
                y.j(fo.d.this, yVar, (y) obj, a0Var);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(fo.d dVar, y yVar, final y rendering, vm.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        Context context = dVar.getRoot().getContext();
        dVar.f25347i.setText(rendering.f6542e);
        dVar.f25340b.setText(rendering.f6543i);
        if (yVar.f6541d.contains(CaptureOptionNativeMobile.MOBILE_CAMERA)) {
            if (!StringsKt.k0(yVar.f6544o)) {
                dVar.f25341c.setText(yVar.f6544o);
                dVar.f25341c.setIcon(null);
            } else {
                dVar.f25341c.setText((CharSequence) null);
                dVar.f25341c.setIcon(g.a.b(context, l4.f6171c));
            }
            dVar.f25341c.setOnClickListener(new View.OnClickListener() { // from class: ao.u
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    y.k(y.this, view);
                }
            });
        }
        if (yVar.f6541d.contains(CaptureOptionNativeMobile.UPLOAD)) {
            dVar.f25348j.setText(rendering.f6545p);
            dVar.f25348j.setOnClickListener(new View.OnClickListener() { // from class: ao.v
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    y.l(y.this, view);
                }
            });
        }
        rp.a aVar = rendering.f6546q;
        Function0 function0 = new Function0() { // from class: ao.w
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit m10;
                m10 = y.m(y.this);
                return m10;
            }
        };
        Function0 function02 = new Function0() { // from class: ao.x
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit n10;
                n10 = y.n(y.this);
                return n10;
            }
        };
        Pi2NavigationBar navigationBar = dVar.f25346h;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        CoordinatorLayout root = dVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        rp.e.b(aVar, function0, function02, navigationBar, root);
        CoordinatorLayout root2 = dVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
        jp.z.b(root2, rendering.f6551v, rendering.f6552w, null, 0, 0, 56, null);
        RemoteImage remoteImage = yVar.f6554y;
        if (remoteImage != null) {
            if (yVar.A == null) {
                ConstraintLayout imageViewContainer = dVar.f25344f;
                Intrinsics.checkNotNullExpressionValue(imageViewContainer, "imageViewContainer");
                yVar.A = eq.b.c(remoteImage, imageViewContainer, false, 2, null);
                dVar.f25345g.setVisibility(8);
            }
        } else {
            dVar.f25342d.setAnimation(yVar.f6555z);
        }
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = yVar.f6553x;
        if (governmentIdStepStyle != null) {
            CoordinatorLayout root3 = dVar.getRoot();
            Intrinsics.checkNotNullExpressionValue(root3, "getRoot(...)");
            Pi2NavigationBar navigationBar2 = dVar.f25346h;
            Intrinsics.checkNotNullExpressionValue(navigationBar2, "navigationBar");
            TextView title = dVar.f25347i;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            TextView body = dVar.f25340b;
            Intrinsics.checkNotNullExpressionValue(body, "body");
            MaterialButton cameraButton = dVar.f25341c;
            Intrinsics.checkNotNullExpressionValue(cameraButton, "cameraButton");
            Button uploadButton = dVar.f25348j;
            Intrinsics.checkNotNullExpressionValue(uploadButton, "uploadButton");
            ThemeableLottieAnimationView idImage = dVar.f25342d;
            Intrinsics.checkNotNullExpressionValue(idImage, "idImage");
            View idImageContainer = dVar.f25343e;
            Intrinsics.checkNotNullExpressionValue(idImageContainer, "idImageContainer");
            yVar.h(governmentIdStepStyle, root3, navigationBar2, title, body, cameraButton, uploadButton, idImage, idImageContainer, viewEnvironment);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(y yVar, View view) {
        yVar.f6547r.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void l(y yVar, View view) {
        yVar.f6548s.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(y yVar) {
        yVar.f6549t.invoke();
        return Unit.f33298a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n(y yVar) {
        yVar.f6550u.invoke();
        return Unit.f33298a;
    }

    @Override // vm.b
    public vm.c0 a() {
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
        if (Intrinsics.areEqual(this.f6541d, yVar.f6541d) && Intrinsics.areEqual(this.f6542e, yVar.f6542e) && Intrinsics.areEqual(this.f6543i, yVar.f6543i) && Intrinsics.areEqual(this.f6544o, yVar.f6544o) && Intrinsics.areEqual(this.f6545p, yVar.f6545p) && Intrinsics.areEqual(this.f6546q, yVar.f6546q) && Intrinsics.areEqual(this.f6547r, yVar.f6547r) && Intrinsics.areEqual(this.f6548s, yVar.f6548s) && Intrinsics.areEqual(this.f6549t, yVar.f6549t) && Intrinsics.areEqual(this.f6550u, yVar.f6550u) && Intrinsics.areEqual(this.f6551v, yVar.f6551v) && Intrinsics.areEqual(this.f6552w, yVar.f6552w) && Intrinsics.areEqual(this.f6553x, yVar.f6553x) && Intrinsics.areEqual(this.f6554y, yVar.f6554y) && this.f6555z == yVar.f6555z) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3 = ((((((((((((((((((this.f6541d.hashCode() * 31) + this.f6542e.hashCode()) * 31) + this.f6543i.hashCode()) * 31) + this.f6544o.hashCode()) * 31) + this.f6545p.hashCode()) * 31) + this.f6546q.hashCode()) * 31) + this.f6547r.hashCode()) * 31) + this.f6548s.hashCode()) * 31) + this.f6549t.hashCode()) * 31) + this.f6550u.hashCode()) * 31;
        String str = this.f6551v;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode4 = (((hashCode3 + hashCode) * 31) + this.f6552w.hashCode()) * 31;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.f6553x;
        if (governmentIdStepStyle == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = governmentIdStepStyle.hashCode();
        }
        int i11 = (hashCode4 + hashCode2) * 31;
        RemoteImage remoteImage = this.f6554y;
        if (remoteImage != null) {
            i10 = remoteImage.hashCode();
        }
        return ((i11 + i10) * 31) + Integer.hashCode(this.f6555z);
    }

    public String toString() {
        List list = this.f6541d;
        String str = this.f6542e;
        String str2 = this.f6543i;
        String str3 = this.f6544o;
        String str4 = this.f6545p;
        rp.a aVar = this.f6546q;
        Function0 function0 = this.f6547r;
        Function0 function02 = this.f6548s;
        Function0 function03 = this.f6549t;
        Function0 function04 = this.f6550u;
        String str5 = this.f6551v;
        Function0 function05 = this.f6552w;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.f6553x;
        RemoteImage remoteImage = this.f6554y;
        int i10 = this.f6555z;
        return "ChooseCaptureMethodView(captureOptions=" + list + ", title=" + str + ", body=" + str2 + ", cameraText=" + str3 + ", uploadButtonText=" + str4 + ", navigationState=" + aVar + ", onCameraCaptureClick=" + function0 + ", onUploadClick=" + function02 + ", onBack=" + function03 + ", onCancel=" + function04 + ", error=" + str5 + ", onErrorDismissed=" + function05 + ", styles=" + governmentIdStepStyle + ", pictographAsset=" + remoteImage + ", localAsset=" + i10 + ")";
    }
}
