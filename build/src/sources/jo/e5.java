package jo;

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
import dn.k;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e5 implements dn.b {
    private final StepStyles.GovernmentIdStepStyle A;
    private final boolean B;
    private final dn.c0 C;

    /* renamed from: d  reason: collision with root package name */
    private final v4.h f30086d;

    /* renamed from: e  reason: collision with root package name */
    private final String f30087e;

    /* renamed from: i  reason: collision with root package name */
    private final String f30088i;

    /* renamed from: o  reason: collision with root package name */
    private final String f30089o;

    /* renamed from: p  reason: collision with root package name */
    private final String f30090p;

    /* renamed from: q  reason: collision with root package name */
    private final String f30091q;

    /* renamed from: r  reason: collision with root package name */
    private final String f30092r;

    /* renamed from: s  reason: collision with root package name */
    private final String f30093s;

    /* renamed from: t  reason: collision with root package name */
    private final zp.a f30094t;

    /* renamed from: u  reason: collision with root package name */
    private final Function0 f30095u;

    /* renamed from: v  reason: collision with root package name */
    private final Function0 f30096v;

    /* renamed from: w  reason: collision with root package name */
    private final Function0 f30097w;

    /* renamed from: x  reason: collision with root package name */
    private final Function0 f30098x;

    /* renamed from: y  reason: collision with root package name */
    private final String f30099y;

    /* renamed from: z  reason: collision with root package name */
    private final Function0 f30100z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f30101d = new a();

        a() {
            super(3, no.h.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2GovernmentidReviewSelectedImageBinding;", 0);
        }

        public final no.h a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return no.h.c(p02, viewGroup, z10);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
        }
    }

    public e5(v4.h imageLoader, String title, String body, String confirmButtonText, String chooseNewPhotoText, String fileToReviewPath, String fileMimeType, String str, zp.a navigationState, Function0 onUsePhotoClick, Function0 onChooseNewPhotoClick, Function0 onBack, Function0 onCancel, String str2, Function0 onErrorDismissed, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, boolean z10) {
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
        this.f30086d = imageLoader;
        this.f30087e = title;
        this.f30088i = body;
        this.f30089o = confirmButtonText;
        this.f30090p = chooseNewPhotoText;
        this.f30091q = fileToReviewPath;
        this.f30092r = fileMimeType;
        this.f30093s = str;
        this.f30094t = navigationState;
        this.f30095u = onUsePhotoClick;
        this.f30096v = onChooseNewPhotoClick;
        this.f30097w = onBack;
        this.f30098x = onCancel;
        this.f30099y = str2;
        this.f30100z = onErrorDismissed;
        this.A = governmentIdStepStyle;
        this.B = z10;
        k.a aVar = dn.k.f20913a;
        this.C = new dn.z(Reflection.getOrCreateKotlinClass(e5.class), a.f30101d, new Function1() { // from class: jo.y4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                dn.k i10;
                i10 = e5.i(e5.this, (no.h) obj);
                return i10;
            }
        });
    }

    private final void h(StepStyles.GovernmentIdStepStyle governmentIdStepStyle, View view, Pi2NavigationBar pi2NavigationBar, TextView textView, TextView textView2, ButtonWithLoadingIndicator buttonWithLoadingIndicator, Button button, dn.a0 a0Var) {
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
            kq.e.d(buttonWithLoadingIndicator, buttonPrimaryStyleValue);
        }
        ButtonCancelComponentStyle buttonSecondaryStyleValue = governmentIdStepStyle.getButtonSecondaryStyleValue();
        if (buttonSecondaryStyleValue != null) {
            kq.e.f(button, buttonSecondaryStyleValue, false, false, 6, null);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final dn.k i(final e5 e5Var, final no.h binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        CoordinatorLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        bq.f.d(root, false, false, false, false, 15, null);
        return new dn.k() { // from class: jo.z4
            @Override // dn.k
            public final void a(Object obj, dn.a0 a0Var) {
                e5.j(no.h.this, e5Var, (e5) obj, a0Var);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(no.h hVar, final e5 e5Var, final e5 rendering, dn.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        hVar.f41051i.setText(rendering.f30087e);
        hVar.f41044b.setText(rendering.f30088i);
        hVar.f41052j.setText(e5Var.f30089o);
        hVar.f41052j.setOnClickListener(new View.OnClickListener() { // from class: jo.a5
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                e5.k(e5.this, view);
            }
        });
        hVar.f41045c.setText(e5Var.f30090p);
        hVar.f41045c.setOnClickListener(new View.OnClickListener() { // from class: jo.b5
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                e5.l(e5.this, view);
            }
        });
        File file = new File(e5Var.f30091q);
        BitmapFactory.Options options = new BitmapFactory.Options();
        options.inJustDecodeBounds = true;
        BitmapFactory.decodeFile(e5Var.f30091q, options);
        if (StringsKt.P(e5Var.f30092r, "image/", false, 2, null)) {
            ImageView imageView = hVar.f41048f;
            Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
            v4.h hVar2 = e5Var.f30086d;
            h.a r10 = new h.a(imageView.getContext()).d(file).r(imageView);
            GradientDrawable gradientDrawable = new GradientDrawable();
            gradientDrawable.setShape(0);
            gradientDrawable.setSize(options.outWidth, options.outHeight);
            gradientDrawable.setColor(0);
            r10.i(gradientDrawable);
            hVar2.a(r10.a());
        } else {
            hVar.f41048f.setVisibility(8);
            hVar.f41046d.setVisibility(0);
            hVar.f41047e.setVisibility(0);
            hVar.f41047e.setText(e5Var.f30093s);
        }
        zp.a aVar = rendering.f30094t;
        Function0 function0 = new Function0() { // from class: jo.c5
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit m10;
                m10 = e5.m(e5.this);
                return m10;
            }
        };
        Function0 function02 = new Function0() { // from class: jo.d5
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit n10;
                n10 = e5.n(e5.this);
                return n10;
            }
        };
        Pi2NavigationBar navigationBar = hVar.f41050h;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        CoordinatorLayout root = hVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        zp.e.b(aVar, function0, function02, navigationBar, root);
        hVar.f41052j.setIsLoading(rendering.B);
        CoordinatorLayout root2 = hVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
        rp.z.b(root2, rendering.f30099y, rendering.f30100z, null, 0, 0, 56, null);
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = e5Var.A;
        if (governmentIdStepStyle != null) {
            CoordinatorLayout root3 = hVar.getRoot();
            Intrinsics.checkNotNullExpressionValue(root3, "getRoot(...)");
            Pi2NavigationBar navigationBar2 = hVar.f41050h;
            Intrinsics.checkNotNullExpressionValue(navigationBar2, "navigationBar");
            TextView title = hVar.f41051i;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            TextView body = hVar.f41044b;
            Intrinsics.checkNotNullExpressionValue(body, "body");
            ButtonWithLoadingIndicator usePhotoButton = hVar.f41052j;
            Intrinsics.checkNotNullExpressionValue(usePhotoButton, "usePhotoButton");
            Button chooseNewPhotoButton = hVar.f41045c;
            Intrinsics.checkNotNullExpressionValue(chooseNewPhotoButton, "chooseNewPhotoButton");
            e5Var.h(governmentIdStepStyle, root3, navigationBar2, title, body, usePhotoButton, chooseNewPhotoButton, viewEnvironment);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(e5 e5Var, View view) {
        e5Var.f30095u.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void l(e5 e5Var, View view) {
        e5Var.f30096v.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(e5 e5Var) {
        e5Var.f30097w.invoke();
        return Unit.f32008a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n(e5 e5Var) {
        e5Var.f30098x.invoke();
        return Unit.f32008a;
    }

    @Override // dn.b
    public dn.c0 a() {
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
        if (Intrinsics.areEqual(this.f30086d, e5Var.f30086d) && Intrinsics.areEqual(this.f30087e, e5Var.f30087e) && Intrinsics.areEqual(this.f30088i, e5Var.f30088i) && Intrinsics.areEqual(this.f30089o, e5Var.f30089o) && Intrinsics.areEqual(this.f30090p, e5Var.f30090p) && Intrinsics.areEqual(this.f30091q, e5Var.f30091q) && Intrinsics.areEqual(this.f30092r, e5Var.f30092r) && Intrinsics.areEqual(this.f30093s, e5Var.f30093s) && Intrinsics.areEqual(this.f30094t, e5Var.f30094t) && Intrinsics.areEqual(this.f30095u, e5Var.f30095u) && Intrinsics.areEqual(this.f30096v, e5Var.f30096v) && Intrinsics.areEqual(this.f30097w, e5Var.f30097w) && Intrinsics.areEqual(this.f30098x, e5Var.f30098x) && Intrinsics.areEqual(this.f30099y, e5Var.f30099y) && Intrinsics.areEqual(this.f30100z, e5Var.f30100z) && Intrinsics.areEqual(this.A, e5Var.A) && this.B == e5Var.B) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3 = ((((((((((((this.f30086d.hashCode() * 31) + this.f30087e.hashCode()) * 31) + this.f30088i.hashCode()) * 31) + this.f30089o.hashCode()) * 31) + this.f30090p.hashCode()) * 31) + this.f30091q.hashCode()) * 31) + this.f30092r.hashCode()) * 31;
        String str = this.f30093s;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode4 = (((((((((((hashCode3 + hashCode) * 31) + this.f30094t.hashCode()) * 31) + this.f30095u.hashCode()) * 31) + this.f30096v.hashCode()) * 31) + this.f30097w.hashCode()) * 31) + this.f30098x.hashCode()) * 31;
        String str2 = this.f30099y;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int hashCode5 = (((hashCode4 + hashCode2) * 31) + this.f30100z.hashCode()) * 31;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.A;
        if (governmentIdStepStyle != null) {
            i10 = governmentIdStepStyle.hashCode();
        }
        return ((hashCode5 + i10) * 31) + Boolean.hashCode(this.B);
    }

    public String toString() {
        v4.h hVar = this.f30086d;
        String str = this.f30087e;
        String str2 = this.f30088i;
        String str3 = this.f30089o;
        String str4 = this.f30090p;
        String str5 = this.f30091q;
        String str6 = this.f30092r;
        String str7 = this.f30093s;
        zp.a aVar = this.f30094t;
        Function0 function0 = this.f30095u;
        Function0 function02 = this.f30096v;
        Function0 function03 = this.f30097w;
        Function0 function04 = this.f30098x;
        String str8 = this.f30099y;
        Function0 function05 = this.f30100z;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.A;
        boolean z10 = this.B;
        return "ReviewSelectedImageView(imageLoader=" + hVar + ", title=" + str + ", body=" + str2 + ", confirmButtonText=" + str3 + ", chooseNewPhotoText=" + str4 + ", fileToReviewPath=" + str5 + ", fileMimeType=" + str6 + ", fileName=" + str7 + ", navigationState=" + aVar + ", onUsePhotoClick=" + function0 + ", onChooseNewPhotoClick=" + function02 + ", onBack=" + function03 + ", onCancel=" + function04 + ", error=" + str8 + ", onErrorDismissed=" + function05 + ", styles=" + governmentIdStepStyle + ", isAutoClassifying=" + z10 + ")";
    }
}
