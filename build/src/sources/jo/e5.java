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
    private final v4.h f30134d;

    /* renamed from: e  reason: collision with root package name */
    private final String f30135e;

    /* renamed from: i  reason: collision with root package name */
    private final String f30136i;

    /* renamed from: o  reason: collision with root package name */
    private final String f30137o;

    /* renamed from: p  reason: collision with root package name */
    private final String f30138p;

    /* renamed from: q  reason: collision with root package name */
    private final String f30139q;

    /* renamed from: r  reason: collision with root package name */
    private final String f30140r;

    /* renamed from: s  reason: collision with root package name */
    private final String f30141s;

    /* renamed from: t  reason: collision with root package name */
    private final zp.a f30142t;

    /* renamed from: u  reason: collision with root package name */
    private final Function0 f30143u;

    /* renamed from: v  reason: collision with root package name */
    private final Function0 f30144v;

    /* renamed from: w  reason: collision with root package name */
    private final Function0 f30145w;

    /* renamed from: x  reason: collision with root package name */
    private final Function0 f30146x;

    /* renamed from: y  reason: collision with root package name */
    private final String f30147y;

    /* renamed from: z  reason: collision with root package name */
    private final Function0 f30148z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f30149d = new a();

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
        this.f30134d = imageLoader;
        this.f30135e = title;
        this.f30136i = body;
        this.f30137o = confirmButtonText;
        this.f30138p = chooseNewPhotoText;
        this.f30139q = fileToReviewPath;
        this.f30140r = fileMimeType;
        this.f30141s = str;
        this.f30142t = navigationState;
        this.f30143u = onUsePhotoClick;
        this.f30144v = onChooseNewPhotoClick;
        this.f30145w = onBack;
        this.f30146x = onCancel;
        this.f30147y = str2;
        this.f30148z = onErrorDismissed;
        this.A = governmentIdStepStyle;
        this.B = z10;
        k.a aVar = dn.k.f20913a;
        this.C = new dn.z(Reflection.getOrCreateKotlinClass(e5.class), a.f30149d, new Function1() { // from class: jo.y4
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
        hVar.f41099i.setText(rendering.f30135e);
        hVar.f41092b.setText(rendering.f30136i);
        hVar.f41100j.setText(e5Var.f30137o);
        hVar.f41100j.setOnClickListener(new View.OnClickListener() { // from class: jo.a5
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                e5.k(e5.this, view);
            }
        });
        hVar.f41093c.setText(e5Var.f30138p);
        hVar.f41093c.setOnClickListener(new View.OnClickListener() { // from class: jo.b5
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                e5.l(e5.this, view);
            }
        });
        File file = new File(e5Var.f30139q);
        BitmapFactory.Options options = new BitmapFactory.Options();
        options.inJustDecodeBounds = true;
        BitmapFactory.decodeFile(e5Var.f30139q, options);
        if (StringsKt.P(e5Var.f30140r, "image/", false, 2, null)) {
            ImageView imageView = hVar.f41096f;
            Intrinsics.checkNotNullExpressionValue(imageView, "imageView");
            v4.h hVar2 = e5Var.f30134d;
            h.a r10 = new h.a(imageView.getContext()).d(file).r(imageView);
            GradientDrawable gradientDrawable = new GradientDrawable();
            gradientDrawable.setShape(0);
            gradientDrawable.setSize(options.outWidth, options.outHeight);
            gradientDrawable.setColor(0);
            r10.i(gradientDrawable);
            hVar2.a(r10.a());
        } else {
            hVar.f41096f.setVisibility(8);
            hVar.f41094d.setVisibility(0);
            hVar.f41095e.setVisibility(0);
            hVar.f41095e.setText(e5Var.f30141s);
        }
        zp.a aVar = rendering.f30142t;
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
        Pi2NavigationBar navigationBar = hVar.f41098h;
        Intrinsics.checkNotNullExpressionValue(navigationBar, "navigationBar");
        CoordinatorLayout root = hVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        zp.e.b(aVar, function0, function02, navigationBar, root);
        hVar.f41100j.setIsLoading(rendering.B);
        CoordinatorLayout root2 = hVar.getRoot();
        Intrinsics.checkNotNullExpressionValue(root2, "getRoot(...)");
        rp.z.b(root2, rendering.f30147y, rendering.f30148z, null, 0, 0, 56, null);
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = e5Var.A;
        if (governmentIdStepStyle != null) {
            CoordinatorLayout root3 = hVar.getRoot();
            Intrinsics.checkNotNullExpressionValue(root3, "getRoot(...)");
            Pi2NavigationBar navigationBar2 = hVar.f41098h;
            Intrinsics.checkNotNullExpressionValue(navigationBar2, "navigationBar");
            TextView title = hVar.f41099i;
            Intrinsics.checkNotNullExpressionValue(title, "title");
            TextView body = hVar.f41092b;
            Intrinsics.checkNotNullExpressionValue(body, "body");
            ButtonWithLoadingIndicator usePhotoButton = hVar.f41100j;
            Intrinsics.checkNotNullExpressionValue(usePhotoButton, "usePhotoButton");
            Button chooseNewPhotoButton = hVar.f41093c;
            Intrinsics.checkNotNullExpressionValue(chooseNewPhotoButton, "chooseNewPhotoButton");
            e5Var.h(governmentIdStepStyle, root3, navigationBar2, title, body, usePhotoButton, chooseNewPhotoButton, viewEnvironment);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void k(e5 e5Var, View view) {
        e5Var.f30143u.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void l(e5 e5Var, View view) {
        e5Var.f30144v.invoke();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(e5 e5Var) {
        e5Var.f30145w.invoke();
        return Unit.f32056a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit n(e5 e5Var) {
        e5Var.f30146x.invoke();
        return Unit.f32056a;
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
        if (Intrinsics.areEqual(this.f30134d, e5Var.f30134d) && Intrinsics.areEqual(this.f30135e, e5Var.f30135e) && Intrinsics.areEqual(this.f30136i, e5Var.f30136i) && Intrinsics.areEqual(this.f30137o, e5Var.f30137o) && Intrinsics.areEqual(this.f30138p, e5Var.f30138p) && Intrinsics.areEqual(this.f30139q, e5Var.f30139q) && Intrinsics.areEqual(this.f30140r, e5Var.f30140r) && Intrinsics.areEqual(this.f30141s, e5Var.f30141s) && Intrinsics.areEqual(this.f30142t, e5Var.f30142t) && Intrinsics.areEqual(this.f30143u, e5Var.f30143u) && Intrinsics.areEqual(this.f30144v, e5Var.f30144v) && Intrinsics.areEqual(this.f30145w, e5Var.f30145w) && Intrinsics.areEqual(this.f30146x, e5Var.f30146x) && Intrinsics.areEqual(this.f30147y, e5Var.f30147y) && Intrinsics.areEqual(this.f30148z, e5Var.f30148z) && Intrinsics.areEqual(this.A, e5Var.A) && this.B == e5Var.B) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3 = ((((((((((((this.f30134d.hashCode() * 31) + this.f30135e.hashCode()) * 31) + this.f30136i.hashCode()) * 31) + this.f30137o.hashCode()) * 31) + this.f30138p.hashCode()) * 31) + this.f30139q.hashCode()) * 31) + this.f30140r.hashCode()) * 31;
        String str = this.f30141s;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode4 = (((((((((((hashCode3 + hashCode) * 31) + this.f30142t.hashCode()) * 31) + this.f30143u.hashCode()) * 31) + this.f30144v.hashCode()) * 31) + this.f30145w.hashCode()) * 31) + this.f30146x.hashCode()) * 31;
        String str2 = this.f30147y;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int hashCode5 = (((hashCode4 + hashCode2) * 31) + this.f30148z.hashCode()) * 31;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.A;
        if (governmentIdStepStyle != null) {
            i10 = governmentIdStepStyle.hashCode();
        }
        return ((hashCode5 + i10) * 31) + Boolean.hashCode(this.B);
    }

    public String toString() {
        v4.h hVar = this.f30134d;
        String str = this.f30135e;
        String str2 = this.f30136i;
        String str3 = this.f30137o;
        String str4 = this.f30138p;
        String str5 = this.f30139q;
        String str6 = this.f30140r;
        String str7 = this.f30141s;
        zp.a aVar = this.f30142t;
        Function0 function0 = this.f30143u;
        Function0 function02 = this.f30144v;
        Function0 function03 = this.f30145w;
        Function0 function04 = this.f30146x;
        String str8 = this.f30147y;
        Function0 function05 = this.f30148z;
        StepStyles.GovernmentIdStepStyle governmentIdStepStyle = this.A;
        boolean z10 = this.B;
        return "ReviewSelectedImageView(imageLoader=" + hVar + ", title=" + str + ", body=" + str2 + ", confirmButtonText=" + str3 + ", chooseNewPhotoText=" + str4 + ", fileToReviewPath=" + str5 + ", fileMimeType=" + str6 + ", fileName=" + str7 + ", navigationState=" + aVar + ", onUsePhotoClick=" + function0 + ", onChooseNewPhotoClick=" + function02 + ", onBack=" + function03 + ", onCancel=" + function04 + ", error=" + str8 + ", onErrorDismissed=" + function05 + ", styles=" + governmentIdStepStyle + ", isAutoClassifying=" + z10 + ")";
    }
}
