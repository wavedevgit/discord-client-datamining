package eo;

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
import ym.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y implements ym.b {
    private View A;
    private final ym.c0 B;

    /* renamed from: d  reason: collision with root package name */
    private final List f22419d;

    /* renamed from: e  reason: collision with root package name */
    private final String f22420e;

    /* renamed from: i  reason: collision with root package name */
    private final String f22421i;

    /* renamed from: o  reason: collision with root package name */
    private final String f22422o;

    /* renamed from: p  reason: collision with root package name */
    private final String f22423p;

    /* renamed from: q  reason: collision with root package name */
    private final up.a f22424q;

    /* renamed from: r  reason: collision with root package name */
    private final Function0 f22425r;

    /* renamed from: s  reason: collision with root package name */
    private final Function0 f22426s;

    /* renamed from: t  reason: collision with root package name */
    private final Function0 f22427t;

    /* renamed from: u  reason: collision with root package name */
    private final Function0 f22428u;

    /* renamed from: v  reason: collision with root package name */
    private final String f22429v;

    /* renamed from: w  reason: collision with root package name */
    private final Function0 f22430w;

    /* renamed from: x  reason: collision with root package name */
    private final StepStyles.GovernmentIdStepStyle f22431x;

    /* renamed from: y  reason: collision with root package name */
    private final RemoteImage f22432y;

    /* renamed from: z  reason: collision with root package name */
    private final int f22433z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f22434d = new a();

        a() {
            super(3, io.d.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2GovernmentidChooseCaptureMethodBinding;", 0);
        }

        public final io.d a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return io.d.c(p02, viewGroup, z10);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
        }
    }

    public y(List captureOptions, String title, String body, String cameraText, String uploadButtonText, up.a navigationState, Function0 onCameraCaptureClick, Function0 onUploadClick, Function0 onBack, Function0 onCancel, String str, Function0 onErrorDismissed, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, RemoteImage remoteImage, int i10) {
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
        this.f22419d = captureOptions;
        this.f22420e = title;
        this.f22421i = body;
        this.f22422o = cameraText;
        this.f22423p = uploadButtonText;
        this.f22424q = navigationState;
        this.f22425r = onCameraCaptureClick;
        this.f22426s = onUploadClick;
        this.f22427t = onBack;
        this.f22428u = onCancel;
        this.f22429v = str;
        this.f22430w = onErrorDismissed;
        this.f22431x = governmentIdStepStyle;
        this.f22432y = remoteImage;
        this.f22433z = i10;
        k.a aVar = ym.k.f54645a;
        this.B = new ym.z(Reflection.getOrCreateKotlinClass(y.class), a.f22434d, new Function1() { // from class: eo.s
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                ym.k i11;
                i11 = y.i(y.this, (io.d) obj);
                return i11;
            }
        });
    }

    private final void h(StepStyles.GovernmentIdStepStyle governmentIdStepStyle, View view, Pi2NavigationBar pi2NavigationBar, TextView textView, TextView textView2, Button button, Button button2, ThemeableLottieAnimationView themeableLottieAnimationView, View view2, ym.a0 a0Var) {
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
            fq.e.f(button, buttonPrimaryStyleValue, false, false, 6, null);
        }
        ButtonCancelComponentStyle buttonSecondaryStyleValue = governmentIdStepStyle.getButtonSecondaryStyleValue();
        if (buttonSecondaryStyleValue != null) {
            fq.e.f(button2, buttonSecondaryStyleValue, false, false, 6, null);
        }
        Integer fillColorValue = governmentIdStepStyle.getFillColorValue();
        if (fillColorValue != null) {
            view2.setBackground(new ColorDrawable(fillColorValue.intValue()));
        }
        fq.g.g(themeableLottieAnimationView, governmentIdStepStyle.getStrokeColorValue(), governmentIdStepStyle.getFillColorValue(), null, new String[]{"#000000", "#190052", "#190051"}, new String[]{"#8751FF", "#AA85FF", "#AA84FF"}, new String[0]);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ym.k i(final y yVar, final io.d binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        CoordinatorLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        wp.f.d(root, false, false, false, false, 15, null);
        return new ym.k() { // from class: eo.t
            @Override // ym.k
            public final void a(Object obj, ym.a0 a0Var) {
                y.j(io.d.this, yVar, (y) obj, a0Var);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(io.d dVar, y yVar, final y rendering, ym.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        Context context = dVar.getRoot().getContext();
        dVar.f28569i.setText(rendering.f22420e);
        dVar.f28562b.setText(rendering.f22421i);
        if (yVar.f22419d.contains(CaptureOptionNativeMobile.MOBILE_CAMERA)) {
            if (!StringsKt.k0(yVar.f22422o)) {
                dVar.f28563c.setText(yVar.f22422o);
                dVar.f28563c.setIcon(null);
            } else {
                dVar.f28563c.setText((CharSequence) null);
                dVar.f28563c.setIcon(g.a.b(context, l4.f22049c));
            }
            dVar.f28563c.setOnClickListener(new View.OnClickListener() { // from class: eo.u
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    y.k(y.this, view);
                }
            });
        }
        if (yVar.f22419d.contains(CaptureOptionNativeMobile.UPLOAD)) {
            dVar.f28570j.setText(rendering.f22423p);
            dVar.f28570j.setOnClickListener(new View.OnClickListener() { // from class: eo.v
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    y.l(y.this, view);
                }
            });
        }
        up.a aVar = rendering.f22424q;
        Function0 function0 = new Function0() { // from class: eo.w
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit m10;
                m10 = y.m(y.this);
                return m10;
            }
        };
        Function0 function02 = new Function0() { // from class: eo.x
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit n10;
                n10 = y.n(y.this);
                return n10;
            }
        };
        Pi2NavigationBar navigationBar = dVar.f28568h;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        CoordinatorLayout root = dVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        up.e.b(aVar, function0, function02, navigationBar, root);
        CoordinatorLayout root2 = dVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
        mp.z.b(root2, rendering.f22429v, rendering.f22430w, null, 0, 0, 56, null);
        RemoteImage remoteImage = yVar.f22432y;
        if (remoteImage != null) {
            if (yVar.A == null) {
                ConstraintLayout imageViewContainer = dVar.f28566f;
                Intrinsics.checkNotNullExpressionValue(imageViewContainer, "imageViewContainer");
                yVar.A = hq.b.c(remoteImage, imageViewContainer, false, 2, null);
                dVar.f28567g.setVisibility(8);
            }
        } else {
            dVar.f28564d.setAnimation(yVar.f22433z);
        }
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = yVar.f22431x;
        if (governmentIdStepStyle != null) {
            CoordinatorLayout root3 = dVar.getRoot();
            Intrinsics.checkNotNullExpressionValue(root3, "getRoot(...)");
            Pi2NavigationBar navigationBar2 = dVar.f28568h;
            Intrinsics.checkNotNullExpressionValue(navigationBar2, "navigationBar");
            TextView title = dVar.f28569i;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            TextView body = dVar.f28562b;
            Intrinsics.checkNotNullExpressionValue(body, "body");
            MaterialButton cameraButton = dVar.f28563c;
            Intrinsics.checkNotNullExpressionValue(cameraButton, "cameraButton");
            Button uploadButton = dVar.f28570j;
            Intrinsics.checkNotNullExpressionValue(uploadButton, "uploadButton");
            ThemeableLottieAnimationView idImage = dVar.f28564d;
            Intrinsics.checkNotNullExpressionValue(idImage, "idImage");
            View idImageContainer = dVar.f28565e;
            Intrinsics.checkNotNullExpressionValue(idImageContainer, "idImageContainer");
            yVar.h(governmentIdStepStyle, root3, navigationBar2, title, body, cameraButton, uploadButton, idImage, idImageContainer, viewEnvironment);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(y yVar, View view) {
        yVar.f22425r.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void l(y yVar, View view) {
        yVar.f22426s.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(y yVar) {
        yVar.f22427t.invoke();
        return Unit.f32464a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n(y yVar) {
        yVar.f22428u.invoke();
        return Unit.f32464a;
    }

    @Override // ym.b
    public ym.c0 a() {
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
        if (Intrinsics.areEqual(this.f22419d, yVar.f22419d) && Intrinsics.areEqual(this.f22420e, yVar.f22420e) && Intrinsics.areEqual(this.f22421i, yVar.f22421i) && Intrinsics.areEqual(this.f22422o, yVar.f22422o) && Intrinsics.areEqual(this.f22423p, yVar.f22423p) && Intrinsics.areEqual(this.f22424q, yVar.f22424q) && Intrinsics.areEqual(this.f22425r, yVar.f22425r) && Intrinsics.areEqual(this.f22426s, yVar.f22426s) && Intrinsics.areEqual(this.f22427t, yVar.f22427t) && Intrinsics.areEqual(this.f22428u, yVar.f22428u) && Intrinsics.areEqual(this.f22429v, yVar.f22429v) && Intrinsics.areEqual(this.f22430w, yVar.f22430w) && Intrinsics.areEqual(this.f22431x, yVar.f22431x) && Intrinsics.areEqual(this.f22432y, yVar.f22432y) && this.f22433z == yVar.f22433z) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3 = ((((((((((((((((((this.f22419d.hashCode() * 31) + this.f22420e.hashCode()) * 31) + this.f22421i.hashCode()) * 31) + this.f22422o.hashCode()) * 31) + this.f22423p.hashCode()) * 31) + this.f22424q.hashCode()) * 31) + this.f22425r.hashCode()) * 31) + this.f22426s.hashCode()) * 31) + this.f22427t.hashCode()) * 31) + this.f22428u.hashCode()) * 31;
        String str = this.f22429v;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode4 = (((hashCode3 + hashCode) * 31) + this.f22430w.hashCode()) * 31;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.f22431x;
        if (governmentIdStepStyle == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = governmentIdStepStyle.hashCode();
        }
        int i11 = (hashCode4 + hashCode2) * 31;
        RemoteImage remoteImage = this.f22432y;
        if (remoteImage != null) {
            i10 = remoteImage.hashCode();
        }
        return ((i11 + i10) * 31) + Integer.hashCode(this.f22433z);
    }

    public String toString() {
        List list = this.f22419d;
        String str = this.f22420e;
        String str2 = this.f22421i;
        String str3 = this.f22422o;
        String str4 = this.f22423p;
        up.a aVar = this.f22424q;
        Function0 function0 = this.f22425r;
        Function0 function02 = this.f22426s;
        Function0 function03 = this.f22427t;
        Function0 function04 = this.f22428u;
        String str5 = this.f22429v;
        Function0 function05 = this.f22430w;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.f22431x;
        RemoteImage remoteImage = this.f22432y;
        int i10 = this.f22433z;
        return "ChooseCaptureMethodView(captureOptions=" + list + ", title=" + str + ", body=" + str2 + ", cameraText=" + str3 + ", uploadButtonText=" + str4 + ", navigationState=" + aVar + ", onCameraCaptureClick=" + function0 + ", onUploadClick=" + function02 + ", onBack=" + function03 + ", onCancel=" + function04 + ", error=" + str5 + ", onErrorDismissed=" + function05 + ", styles=" + governmentIdStepStyle + ", pictographAsset=" + remoteImage + ", localAsset=" + i10 + ")";
    }
}
