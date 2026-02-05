package ho;

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
import bn.k;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonCancelComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.ButtonSubmitComponentStyle;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.TextBasedComponentStyle;
import com.withpersona.sdk2.inquiry.shared.ui.ButtonWithLoadingIndicator;
import com.withpersona.sdk2.inquiry.shared.ui.Pi2NavigationBar;
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
public final class e5 implements bn.b {
    private final StepStyles.GovernmentIdStepStyle A;
    private final boolean B;
    private final bn.c0 C;

    /* renamed from: d  reason: collision with root package name */
    private final v4.h f26090d;

    /* renamed from: e  reason: collision with root package name */
    private final String f26091e;

    /* renamed from: i  reason: collision with root package name */
    private final String f26092i;

    /* renamed from: o  reason: collision with root package name */
    private final String f26093o;

    /* renamed from: p  reason: collision with root package name */
    private final String f26094p;

    /* renamed from: q  reason: collision with root package name */
    private final String f26095q;

    /* renamed from: r  reason: collision with root package name */
    private final String f26096r;

    /* renamed from: s  reason: collision with root package name */
    private final String f26097s;

    /* renamed from: t  reason: collision with root package name */
    private final xp.a f26098t;

    /* renamed from: u  reason: collision with root package name */
    private final Function0 f26099u;

    /* renamed from: v  reason: collision with root package name */
    private final Function0 f26100v;

    /* renamed from: w  reason: collision with root package name */
    private final Function0 f26101w;

    /* renamed from: x  reason: collision with root package name */
    private final Function0 f26102x;

    /* renamed from: y  reason: collision with root package name */
    private final String f26103y;

    /* renamed from: z  reason: collision with root package name */
    private final Function0 f26104z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f26105d = new a();

        a() {
            super(3, lo.h.class, "inflate", "inflate(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Z)Lcom/withpersona/sdk2/inquiry/governmentid/databinding/Pi2GovernmentidReviewSelectedImageBinding;", 0);
        }

        public final lo.h a(LayoutInflater p02, ViewGroup viewGroup, boolean z10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return lo.h.c(p02, viewGroup, z10);
        }

        @Override // kotlin.jvm.functions.Function3
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
            return a((LayoutInflater) obj, (ViewGroup) obj2, ((Boolean) obj3).booleanValue());
        }
    }

    public e5(v4.h imageLoader, String title, String body, String confirmButtonText, String chooseNewPhotoText, String fileToReviewPath, String fileMimeType, String str, xp.a navigationState, Function0 onUsePhotoClick, Function0 onChooseNewPhotoClick, Function0 onBack, Function0 onCancel, String str2, Function0 onErrorDismissed, StepStyles.GovernmentIdStepStyle governmentIdStepStyle, boolean z10) {
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
        this.f26090d = imageLoader;
        this.f26091e = title;
        this.f26092i = body;
        this.f26093o = confirmButtonText;
        this.f26094p = chooseNewPhotoText;
        this.f26095q = fileToReviewPath;
        this.f26096r = fileMimeType;
        this.f26097s = str;
        this.f26098t = navigationState;
        this.f26099u = onUsePhotoClick;
        this.f26100v = onChooseNewPhotoClick;
        this.f26101w = onBack;
        this.f26102x = onCancel;
        this.f26103y = str2;
        this.f26104z = onErrorDismissed;
        this.A = governmentIdStepStyle;
        this.B = z10;
        k.a aVar = bn.k.f6590a;
        this.C = new bn.z(Reflection.getOrCreateKotlinClass(e5.class), a.f26105d, new Function1() { // from class: ho.y4
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                bn.k i10;
                i10 = e5.i(e5.this, (lo.h) obj);
                return i10;
            }
        });
    }

    private final void h(StepStyles.GovernmentIdStepStyle governmentIdStepStyle, View view, Pi2NavigationBar pi2NavigationBar, TextView textView, TextView textView2, ButtonWithLoadingIndicator buttonWithLoadingIndicator, Button button, bn.a0 a0Var) {
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
            iq.e.d(buttonWithLoadingIndicator, buttonPrimaryStyleValue);
        }
        ButtonCancelComponentStyle buttonSecondaryStyleValue = governmentIdStepStyle.getButtonSecondaryStyleValue();
        if (buttonSecondaryStyleValue != null) {
            iq.e.f(button, buttonSecondaryStyleValue, false, false, 6, null);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final bn.k i(final e5 e5Var, final lo.h binding) {
        Intrinsics.checkNotNullParameter(binding, "binding");
        CoordinatorLayout root = binding.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        zp.f.d(root, false, false, false, false, 15, null);
        return new bn.k() { // from class: ho.z4
            @Override // bn.k
            public final void a(Object obj, bn.a0 a0Var) {
                e5.j(lo.h.this, e5Var, (e5) obj, a0Var);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void j(lo.h hVar, final e5 e5Var, final e5 rendering, bn.a0 viewEnvironment) {
        Intrinsics.checkNotNullParameter(rendering, "rendering");
        Intrinsics.checkNotNullParameter(viewEnvironment, "viewEnvironment");
        hVar.f37095i.setText(rendering.f26091e);
        hVar.f37088b.setText(rendering.f26092i);
        hVar.f37096j.setText(e5Var.f26093o);
        hVar.f37096j.setOnClickListener(new View.OnClickListener() { // from class: ho.a5
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                e5.k(e5.this, view);
            }
        });
        hVar.f37089c.setText(e5Var.f26094p);
        hVar.f37089c.setOnClickListener(new View.OnClickListener() { // from class: ho.b5
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                e5.l(e5.this, view);
            }
        });
        File file = new File(e5Var.f26095q);
        BitmapFactory.Options options = new BitmapFactory.Options();
        options.inJustDecodeBounds = true;
        BitmapFactory.decodeFile(e5Var.f26095q, options);
        if (StringsKt.P(e5Var.f26096r, "image/", false, 2, null)) {
            ImageView imageView = hVar.f37092f;
            Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
            v4.h hVar2 = e5Var.f26090d;
            h.a r10 = new h.a(imageView.getContext()).d(file).r(imageView);
            GradientDrawable gradientDrawable = new GradientDrawable();
            gradientDrawable.setShape(0);
            gradientDrawable.setSize(options.outWidth, options.outHeight);
            gradientDrawable.setColor(0);
            r10.i(gradientDrawable);
            hVar2.a(r10.a());
        } else {
            hVar.f37092f.setVisibility(8);
            hVar.f37090d.setVisibility(0);
            hVar.f37091e.setVisibility(0);
            hVar.f37091e.setText(e5Var.f26097s);
        }
        xp.a aVar = rendering.f26098t;
        Function0 function0 = new Function0() { // from class: ho.c5
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit m10;
                m10 = e5.m(e5.this);
                return m10;
            }
        };
        Function0 function02 = new Function0() { // from class: ho.d5
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit n10;
                n10 = e5.n(e5.this);
                return n10;
            }
        };
        Pi2NavigationBar navigationBar = hVar.f37094h;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        CoordinatorLayout root = hVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        xp.e.b(aVar, function0, function02, navigationBar, root);
        hVar.f37096j.setIsLoading(rendering.B);
        CoordinatorLayout root2 = hVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
        pp.z.b(root2, rendering.f26103y, rendering.f26104z, null, 0, 0, 56, null);
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = e5Var.A;
        if (governmentIdStepStyle != null) {
            CoordinatorLayout root3 = hVar.getRoot();
            Intrinsics.checkNotNullExpressionValue(root3, "getRoot(...)");
            Pi2NavigationBar navigationBar2 = hVar.f37094h;
            Intrinsics.checkNotNullExpressionValue(navigationBar2, "navigationBar");
            TextView title = hVar.f37095i;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            TextView body = hVar.f37088b;
            Intrinsics.checkNotNullExpressionValue(body, "body");
            ButtonWithLoadingIndicator usePhotoButton = hVar.f37096j;
            Intrinsics.checkNotNullExpressionValue(usePhotoButton, "usePhotoButton");
            Button chooseNewPhotoButton = hVar.f37089c;
            Intrinsics.checkNotNullExpressionValue(chooseNewPhotoButton, "chooseNewPhotoButton");
            e5Var.h(governmentIdStepStyle, root3, navigationBar2, title, body, usePhotoButton, chooseNewPhotoButton, viewEnvironment);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(e5 e5Var, View view) {
        e5Var.f26099u.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void l(e5 e5Var, View view) {
        e5Var.f26100v.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(e5 e5Var) {
        e5Var.f26101w.invoke();
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n(e5 e5Var) {
        e5Var.f26102x.invoke();
        return Unit.f31988a;
    }

    @Override // bn.b
    public bn.c0 a() {
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
        if (Intrinsics.areEqual(this.f26090d, e5Var.f26090d) && Intrinsics.areEqual(this.f26091e, e5Var.f26091e) && Intrinsics.areEqual(this.f26092i, e5Var.f26092i) && Intrinsics.areEqual(this.f26093o, e5Var.f26093o) && Intrinsics.areEqual(this.f26094p, e5Var.f26094p) && Intrinsics.areEqual(this.f26095q, e5Var.f26095q) && Intrinsics.areEqual(this.f26096r, e5Var.f26096r) && Intrinsics.areEqual(this.f26097s, e5Var.f26097s) && Intrinsics.areEqual(this.f26098t, e5Var.f26098t) && Intrinsics.areEqual(this.f26099u, e5Var.f26099u) && Intrinsics.areEqual(this.f26100v, e5Var.f26100v) && Intrinsics.areEqual(this.f26101w, e5Var.f26101w) && Intrinsics.areEqual(this.f26102x, e5Var.f26102x) && Intrinsics.areEqual(this.f26103y, e5Var.f26103y) && Intrinsics.areEqual(this.f26104z, e5Var.f26104z) && Intrinsics.areEqual(this.A, e5Var.A) && this.B == e5Var.B) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3 = ((((((((((((this.f26090d.hashCode() * 31) + this.f26091e.hashCode()) * 31) + this.f26092i.hashCode()) * 31) + this.f26093o.hashCode()) * 31) + this.f26094p.hashCode()) * 31) + this.f26095q.hashCode()) * 31) + this.f26096r.hashCode()) * 31;
        String str = this.f26097s;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode4 = (((((((((((hashCode3 + hashCode) * 31) + this.f26098t.hashCode()) * 31) + this.f26099u.hashCode()) * 31) + this.f26100v.hashCode()) * 31) + this.f26101w.hashCode()) * 31) + this.f26102x.hashCode()) * 31;
        String str2 = this.f26103y;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int hashCode5 = (((hashCode4 + hashCode2) * 31) + this.f26104z.hashCode()) * 31;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.A;
        if (governmentIdStepStyle != null) {
            i10 = governmentIdStepStyle.hashCode();
        }
        return ((hashCode5 + i10) * 31) + Boolean.hashCode(this.B);
    }

    public String toString() {
        v4.h hVar = this.f26090d;
        String str = this.f26091e;
        String str2 = this.f26092i;
        String str3 = this.f26093o;
        String str4 = this.f26094p;
        String str5 = this.f26095q;
        String str6 = this.f26096r;
        String str7 = this.f26097s;
        xp.a aVar = this.f26098t;
        Function0 function0 = this.f26099u;
        Function0 function02 = this.f26100v;
        Function0 function03 = this.f26101w;
        Function0 function04 = this.f26102x;
        String str8 = this.f26103y;
        Function0 function05 = this.f26104z;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.A;
        boolean z10 = this.B;
        return "ReviewSelectedImageView(imageLoader=" + hVar + ", title=" + str + ", body=" + str2 + ", confirmButtonText=" + str3 + ", chooseNewPhotoText=" + str4 + ", fileToReviewPath=" + str5 + ", fileMimeType=" + str6 + ", fileName=" + str7 + ", navigationState=" + aVar + ", onUsePhotoClick=" + function0 + ", onChooseNewPhotoClick=" + function02 + ", onBack=" + function03 + ", onCancel=" + function04 + ", error=" + str8 + ", onErrorDismissed=" + function05 + ", styles=" + governmentIdStepStyle + ", isAutoClassifying=" + z10 + ")";
    }
}
