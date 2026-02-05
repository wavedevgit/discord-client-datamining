package ho;

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
import bn.k;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y implements bn.b {
    private View A;
    private final bn.c0 B;

    /* renamed from: d  reason: collision with root package name */
    private final List f26731d;

    /* renamed from: e  reason: collision with root package name */
    private final String f26732e;

    /* renamed from: i  reason: collision with root package name */
    private final String f26733i;

    /* renamed from: o  reason: collision with root package name */
    private final String f26734o;

    /* renamed from: p  reason: collision with root package name */
    private final String f26735p;

    /* renamed from: q  reason: collision with root package name */
    private final xp.a f26736q;

    /* renamed from: r  reason: collision with root package name */
    private final Function0 f26737r;

    /* renamed from: s  reason: collision with root package name */
    private final Function0 f26738s;

    /* renamed from: t  reason: collision with root package name */
    private final Function0 f26739t;

    /* renamed from: u  reason: collision with root package name */
    private final Function0 f26740u;

    /* renamed from: v  reason: collision with root package name */
    private final String f26741v;

    /* renamed from: w  reason: collision with root package name */
    private final Function0 f26742w;

    /* renamed from: x  reason: collision with root package name */
    private final StepStyles.GovernmentIdStepStyle f26743x;

    /* renamed from: y  reason: collision with root package name */
    private final RemoteImage f26744y;

    /* renamed from: z  reason: collision with root package name */
    private final int f26745z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f26746d = new a();

        a() {
            super(3, lo.d.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2GovernmentidChooseCaptureMethodBinding;", 0);
        }

        public final lo.d a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return lo.d.c(p02, viewGroup, z10);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
        }
    }

    public y(List captureOptions, String title, String body, String cameraText, String uploadButtonText, xp.a navigationState, Function0 onCameraCaptureClick, Function0 onUploadClick, Function0 onBack, Function0 onCancel, String str, Function0 onErrorDismissed, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, RemoteImage remoteImage, int i10) {
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
        this.f26731d = captureOptions;
        this.f26732e = title;
        this.f26733i = body;
        this.f26734o = cameraText;
        this.f26735p = uploadButtonText;
        this.f26736q = navigationState;
        this.f26737r = onCameraCaptureClick;
        this.f26738s = onUploadClick;
        this.f26739t = onBack;
        this.f26740u = onCancel;
        this.f26741v = str;
        this.f26742w = onErrorDismissed;
        this.f26743x = governmentIdStepStyle;
        this.f26744y = remoteImage;
        this.f26745z = i10;
        k.a aVar = bn.k.f6590a;
        this.B = new bn.z(Reflection.getOrCreateKotlinClass(y.class), a.f26746d, new Function1() { // from class: ho.s
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                bn.k i11;
                i11 = y.i(y.this, (lo.d) obj);
                return i11;
            }
        });
    }

    private final void h(StepStyles.GovernmentIdStepStyle governmentIdStepStyle, View view, Pi2NavigationBar pi2NavigationBar, TextView textView, TextView textView2, Button button, Button button2, ThemeableLottieAnimationView themeableLottieAnimationView, View view2, bn.a0 a0Var) {
        Integer backgroundColorValue = governmentIdStepStyle.getBackgroundColorValue();
        if (backgroundColorValue != null) {
            int intValue = backgroundColorValue.intValue();
            view.setBackgroundColor(intValue);
            yp.c.a(a0Var, intValue);
        }
        Context context = view.getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        Drawable a10 = kq.c.a(governmentIdStepStyle, context);
        if (a10 != null) {
            view.setBackground(a10);
        }
        Integer headerButtonColorValue = governmentIdStepStyle.getHeaderButtonColorValue();
        if (headerButtonColorValue != null) {
            pi2NavigationBar.setControlsColor(headerButtonColorValue.intValue());
        }
        TextBasedComponentStyle titleStyleValue = governmentIdStepStyle.getTitleStyleValue();
        if (titleStyleValue != null) {
            iq.f0.n(textView, titleStyleValue, null, 2, null);
        }
        TextBasedComponentStyle textStyleValue = governmentIdStepStyle.getTextStyleValue();
        if (textStyleValue != null) {
            iq.f0.n(textView2, textStyleValue, null, 2, null);
        }
        ButtonSubmitComponentStyle buttonPrimaryStyleValue = governmentIdStepStyle.getButtonPrimaryStyleValue();
        if (buttonPrimaryStyleValue != null) {
            iq.e.f(button, buttonPrimaryStyleValue, false, false, 6, null);
        }
        ButtonCancelComponentStyle buttonSecondaryStyleValue = governmentIdStepStyle.getButtonSecondaryStyleValue();
        if (buttonSecondaryStyleValue != null) {
            iq.e.f(button2, buttonSecondaryStyleValue, false, false, 6, null);
        }
        Integer fillColorValue = governmentIdStepStyle.getFillColorValue();
        if (fillColorValue != null) {
            view2.setBackground(new ColorDrawable(fillColorValue.intValue()));
        }
        iq.g.g(themeableLottieAnimationView, governmentIdStepStyle.getStrokeColorValue(), governmentIdStepStyle.getFillColorValue(), null, new String[]{"#000000", "#190052", "#190051"}, new String[]{"#8751FF", "#AA85FF", "#AA84FF"}, new String[0]);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.k i(final y yVar, final lo.d binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        CoordinatorLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        zp.f.d(root, false, false, false, false, 15, null);
        return new bn.k() { // from class: ho.t
            @Override // bn.k
            public final void a(Object obj, bn.a0 a0Var) {
                y.j(lo.d.this, yVar, (y) obj, a0Var);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(lo.d dVar, y yVar, final y rendering, bn.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        Context context = dVar.getRoot().getContext();
        dVar.f37044i.setText(rendering.f26732e);
        dVar.f37037b.setText(rendering.f26733i);
        if (yVar.f26731d.contains(CaptureOptionNativeMobile.MOBILE_CAMERA)) {
            if (!StringsKt.k0(yVar.f26734o)) {
                dVar.f37038c.setText(yVar.f26734o);
                dVar.f37038c.setIcon(null);
            } else {
                dVar.f37038c.setText((CharSequence) null);
                dVar.f37038c.setIcon(g.a.b(context, l4.f26361c));
            }
            dVar.f37038c.setOnClickListener(new View.OnClickListener() { // from class: ho.u
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    y.k(y.this, view);
                }
            });
        }
        if (yVar.f26731d.contains(CaptureOptionNativeMobile.UPLOAD)) {
            dVar.f37045j.setText(rendering.f26735p);
            dVar.f37045j.setOnClickListener(new View.OnClickListener() { // from class: ho.v
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    y.l(y.this, view);
                }
            });
        }
        xp.a aVar = rendering.f26736q;
        Function0 function0 = new Function0() { // from class: ho.w
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit m10;
                m10 = y.m(y.this);
                return m10;
            }
        };
        Function0 function02 = new Function0() { // from class: ho.x
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit n10;
                n10 = y.n(y.this);
                return n10;
            }
        };
        Pi2NavigationBar navigationBar = dVar.f37043h;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        CoordinatorLayout root = dVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        xp.e.b(aVar, function0, function02, navigationBar, root);
        CoordinatorLayout root2 = dVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
        pp.z.b(root2, rendering.f26741v, rendering.f26742w, null, 0, 0, 56, null);
        RemoteImage remoteImage = yVar.f26744y;
        if (remoteImage != null) {
            if (yVar.A == null) {
                ConstraintLayout imageViewContainer = dVar.f37041f;
                Intrinsics.checkNotNullExpressionValue(imageViewContainer, "imageViewContainer");
                yVar.A = kq.b.c(remoteImage, imageViewContainer, false, 2, null);
                dVar.f37042g.setVisibility(8);
            }
        } else {
            dVar.f37039d.setAnimation(yVar.f26745z);
        }
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = yVar.f26743x;
        if (governmentIdStepStyle != null) {
            CoordinatorLayout root3 = dVar.getRoot();
            Intrinsics.checkNotNullExpressionValue(root3, "getRoot(...)");
            Pi2NavigationBar navigationBar2 = dVar.f37043h;
            Intrinsics.checkNotNullExpressionValue(navigationBar2, "navigationBar");
            TextView title = dVar.f37044i;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            TextView body = dVar.f37037b;
            Intrinsics.checkNotNullExpressionValue(body, "body");
            MaterialButton cameraButton = dVar.f37038c;
            Intrinsics.checkNotNullExpressionValue(cameraButton, "cameraButton");
            Button uploadButton = dVar.f37045j;
            Intrinsics.checkNotNullExpressionValue(uploadButton, "uploadButton");
            ThemeableLottieAnimationView idImage = dVar.f37039d;
            Intrinsics.checkNotNullExpressionValue(idImage, "idImage");
            View idImageContainer = dVar.f37040e;
            Intrinsics.checkNotNullExpressionValue(idImageContainer, "idImageContainer");
            yVar.h(governmentIdStepStyle, root3, navigationBar2, title, body, cameraButton, uploadButton, idImage, idImageContainer, viewEnvironment);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(y yVar, View view) {
        yVar.f26737r.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void l(y yVar, View view) {
        yVar.f26738s.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(y yVar) {
        yVar.f26739t.invoke();
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n(y yVar) {
        yVar.f26740u.invoke();
        return Unit.f31988a;
    }

    @Override // bn.b
    public bn.c0 a() {
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
        if (Intrinsics.areEqual(this.f26731d, yVar.f26731d) && Intrinsics.areEqual(this.f26732e, yVar.f26732e) && Intrinsics.areEqual(this.f26733i, yVar.f26733i) && Intrinsics.areEqual(this.f26734o, yVar.f26734o) && Intrinsics.areEqual(this.f26735p, yVar.f26735p) && Intrinsics.areEqual(this.f26736q, yVar.f26736q) && Intrinsics.areEqual(this.f26737r, yVar.f26737r) && Intrinsics.areEqual(this.f26738s, yVar.f26738s) && Intrinsics.areEqual(this.f26739t, yVar.f26739t) && Intrinsics.areEqual(this.f26740u, yVar.f26740u) && Intrinsics.areEqual(this.f26741v, yVar.f26741v) && Intrinsics.areEqual(this.f26742w, yVar.f26742w) && Intrinsics.areEqual(this.f26743x, yVar.f26743x) && Intrinsics.areEqual(this.f26744y, yVar.f26744y) && this.f26745z == yVar.f26745z) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3 = ((((((((((((((((((this.f26731d.hashCode() * 31) + this.f26732e.hashCode()) * 31) + this.f26733i.hashCode()) * 31) + this.f26734o.hashCode()) * 31) + this.f26735p.hashCode()) * 31) + this.f26736q.hashCode()) * 31) + this.f26737r.hashCode()) * 31) + this.f26738s.hashCode()) * 31) + this.f26739t.hashCode()) * 31) + this.f26740u.hashCode()) * 31;
        String str = this.f26741v;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode4 = (((hashCode3 + hashCode) * 31) + this.f26742w.hashCode()) * 31;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.f26743x;
        if (governmentIdStepStyle == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = governmentIdStepStyle.hashCode();
        }
        int i11 = (hashCode4 + hashCode2) * 31;
        RemoteImage remoteImage = this.f26744y;
        if (remoteImage != null) {
            i10 = remoteImage.hashCode();
        }
        return ((i11 + i10) * 31) + Integer.hashCode(this.f26745z);
    }

    public String toString() {
        List list = this.f26731d;
        String str = this.f26732e;
        String str2 = this.f26733i;
        String str3 = this.f26734o;
        String str4 = this.f26735p;
        xp.a aVar = this.f26736q;
        Function0 function0 = this.f26737r;
        Function0 function02 = this.f26738s;
        Function0 function03 = this.f26739t;
        Function0 function04 = this.f26740u;
        String str5 = this.f26741v;
        Function0 function05 = this.f26742w;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.f26743x;
        RemoteImage remoteImage = this.f26744y;
        int i10 = this.f26745z;
        return "ChooseCaptureMethodView(captureOptions=" + list + ", title=" + str + ", body=" + str2 + ", cameraText=" + str3 + ", uploadButtonText=" + str4 + ", navigationState=" + aVar + ", onCameraCaptureClick=" + function0 + ", onUploadClick=" + function02 + ", onBack=" + function03 + ", onCancel=" + function04 + ", error=" + str5 + ", onErrorDismissed=" + function05 + ", styles=" + governmentIdStepStyle + ", pictographAsset=" + remoteImage + ", localAsset=" + i10 + ")";
    }
}
