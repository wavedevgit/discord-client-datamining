package com.yalantis.ucrop;

import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.PorterDuff;
import android.graphics.drawable.Animatable;
import android.graphics.drawable.Drawable;
import android.net.Uri;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.view.animation.AccelerateInterpolator;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.TextView;
import androidx.activity.b0;
import androidx.activity.n;
import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.app.AppCompatDelegate;
import androidx.appcompat.widget.Toolbar;
import androidx.core.graphics.Insets;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.h0;
import androidx.core.view.v;
import androidx.transition.Transition;
import androidx.transition.x;
import com.yalantis.ucrop.UCropActivity;
import com.yalantis.ucrop.view.GestureCropImageView;
import com.yalantis.ucrop.view.OverlayView;
import com.yalantis.ucrop.view.UCropView;
import com.yalantis.ucrop.view.b;
import com.yalantis.ucrop.view.widget.AspectRatioTextView;
import com.yalantis.ucrop.view.widget.HorizontalProgressWheelView;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import uq.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class UCropActivity extends AppCompatActivity {
    public static final Bitmap.CompressFormat O = Bitmap.CompressFormat.JPEG;
    private ViewGroup A;
    private ViewGroup B;
    private ViewGroup C;
    private ViewGroup D;
    private TextView F;
    private TextView G;
    private View H;
    private Transition I;

    /* renamed from: d  reason: collision with root package name */
    private String f19472d;

    /* renamed from: e  reason: collision with root package name */
    private int f19473e;

    /* renamed from: i  reason: collision with root package name */
    private int f19474i;

    /* renamed from: o  reason: collision with root package name */
    private int f19475o;

    /* renamed from: p  reason: collision with root package name */
    private int f19476p;

    /* renamed from: q  reason: collision with root package name */
    private int f19477q;

    /* renamed from: r  reason: collision with root package name */
    private int f19478r;

    /* renamed from: s  reason: collision with root package name */
    private int f19479s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f19480t;

    /* renamed from: v  reason: collision with root package name */
    private UCropView f19482v;

    /* renamed from: w  reason: collision with root package name */
    private GestureCropImageView f19483w;

    /* renamed from: x  reason: collision with root package name */
    private OverlayView f19484x;

    /* renamed from: y  reason: collision with root package name */
    private ViewGroup f19485y;

    /* renamed from: z  reason: collision with root package name */
    private ViewGroup f19486z;

    /* renamed from: u  reason: collision with root package name */
    private boolean f19481u = true;
    private List E = new ArrayList();
    private Bitmap.CompressFormat J = O;
    private int K = 90;
    private int[] L = {1, 2, 3};
    private b.InterfaceC0251b M = new a();
    private final View.OnClickListener N = new g();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements b.InterfaceC0251b {
        a() {
        }

        @Override // com.yalantis.ucrop.view.b.InterfaceC0251b
        public void a() {
            UCropActivity.this.f19482v.animate().alpha(1.0f).setDuration(300L).setInterpolator(new AccelerateInterpolator());
            UCropActivity.this.H.setClickable(false);
            UCropActivity.this.f19481u = false;
            UCropActivity.this.supportInvalidateOptionsMenu();
        }

        @Override // com.yalantis.ucrop.view.b.InterfaceC0251b
        public void b(Exception exc) {
            UCropActivity.this.Y(exc);
            UCropActivity.this.finish();
        }

        @Override // com.yalantis.ucrop.view.b.InterfaceC0251b
        public void c(float f10) {
            UCropActivity.this.a0(f10);
        }

        @Override // com.yalantis.ucrop.view.b.InterfaceC0251b
        public void d(float f10) {
            UCropActivity.this.U(f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements View.OnClickListener {
        b() {
        }

        @Override // android.view.View.OnClickListener
        public void onClick(View view) {
            boolean z10;
            UCropActivity.this.f19483w.setTargetAspectRatio(((AspectRatioTextView) ((ViewGroup) view).getChildAt(0)).g(view.isSelected()));
            UCropActivity.this.f19483w.z();
            if (!view.isSelected()) {
                for (ViewGroup viewGroup : UCropActivity.this.E) {
                    if (viewGroup == view) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    viewGroup.setSelected(z10);
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c implements HorizontalProgressWheelView.a {
        c() {
        }

        @Override // com.yalantis.ucrop.view.widget.HorizontalProgressWheelView.a
        public void a() {
            UCropActivity.this.f19483w.z();
        }

        @Override // com.yalantis.ucrop.view.widget.HorizontalProgressWheelView.a
        public void b() {
            UCropActivity.this.f19483w.t();
        }

        @Override // com.yalantis.ucrop.view.widget.HorizontalProgressWheelView.a
        public void c(float f10, float f11) {
            UCropActivity.this.f19483w.x(f10 / 42.0f);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class d implements View.OnClickListener {
        d() {
        }

        @Override // android.view.View.OnClickListener
        public void onClick(View view) {
            UCropActivity.this.R();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class e implements View.OnClickListener {
        e() {
        }

        @Override // android.view.View.OnClickListener
        public void onClick(View view) {
            UCropActivity.this.S(90);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class f implements HorizontalProgressWheelView.a {
        f() {
        }

        @Override // com.yalantis.ucrop.view.widget.HorizontalProgressWheelView.a
        public void a() {
            UCropActivity.this.f19483w.z();
        }

        @Override // com.yalantis.ucrop.view.widget.HorizontalProgressWheelView.a
        public void b() {
            UCropActivity.this.f19483w.t();
        }

        @Override // com.yalantis.ucrop.view.widget.HorizontalProgressWheelView.a
        public void c(float f10, float f11) {
            if (f10 > 0.0f) {
                UCropActivity.this.f19483w.C(UCropActivity.this.f19483w.getCurrentScale() + (f10 * ((UCropActivity.this.f19483w.getMaxScale() - UCropActivity.this.f19483w.getMinScale()) / 15000.0f)));
            } else {
                UCropActivity.this.f19483w.E(UCropActivity.this.f19483w.getCurrentScale() + (f10 * ((UCropActivity.this.f19483w.getMaxScale() - UCropActivity.this.f19483w.getMinScale()) / 15000.0f)));
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class g implements View.OnClickListener {
        g() {
        }

        @Override // android.view.View.OnClickListener
        public void onClick(View view) {
            if (!view.isSelected()) {
                UCropActivity.this.c0(view.getId());
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class h implements rq.a {
        h() {
        }

        @Override // rq.a
        public void a(Uri uri, int i10, int i11, int i12, int i13) {
            UCropActivity uCropActivity = UCropActivity.this;
            uCropActivity.Z(uri, uCropActivity.f19483w.getTargetAspectRatio(), i10, i11, i12, i13);
            UCropActivity.this.finish();
        }

        @Override // rq.a
        public void b(Throwable th2) {
            UCropActivity.this.Y(th2);
            UCropActivity.this.finish();
        }
    }

    static {
        AppCompatDelegate.J(true);
    }

    public static /* synthetic */ WindowInsetsCompat A(View view, WindowInsetsCompat windowInsetsCompat) {
        Insets f10 = windowInsetsCompat.f(WindowInsetsCompat.p.h());
        view.setPaddingRelative(f10.f3163a, f10.f3164b, f10.f3165c, 0);
        return windowInsetsCompat;
    }

    public static /* synthetic */ WindowInsetsCompat B(int i10, View view, WindowInsetsCompat windowInsetsCompat) {
        Insets f10 = windowInsetsCompat.f(WindowInsetsCompat.p.h());
        view.setPaddingRelative(f10.f3163a, 0, f10.f3165c, f10.f3166d);
        ViewGroup.LayoutParams layoutParams = view.getLayoutParams();
        int i11 = i10 + f10.f3166d;
        if (layoutParams.height != i11) {
            layoutParams.height = i11;
            view.setLayoutParams(layoutParams);
        }
        return windowInsetsCompat;
    }

    private void M() {
        if (this.H == null) {
            this.H = new View(this);
            RelativeLayout.LayoutParams layoutParams = new RelativeLayout.LayoutParams(-1, -1);
            layoutParams.addRule(3, qq.d.f48102t);
            this.H.setLayoutParams(layoutParams);
            this.H.setClickable(true);
        }
        ((RelativeLayout) findViewById(qq.d.f48106x)).addView(this.H);
    }

    private void N(int i10) {
        int i11;
        int i12;
        x.a((ViewGroup) findViewById(qq.d.f48106x), this.I);
        View findViewById = this.A.findViewById(qq.d.f48101s);
        int i13 = 8;
        if (i10 == qq.d.f48098p) {
            i11 = 0;
        } else {
            i11 = 8;
        }
        findViewById.setVisibility(i11);
        View findViewById2 = this.f19485y.findViewById(qq.d.f48099q);
        if (i10 == qq.d.f48096n) {
            i12 = 0;
        } else {
            i12 = 8;
        }
        findViewById2.setVisibility(i12);
        View findViewById3 = this.f19486z.findViewById(qq.d.f48100r);
        if (i10 == qq.d.f48097o) {
            i13 = 0;
        }
        findViewById3.setVisibility(i13);
    }

    private void P() {
        UCropView uCropView = (UCropView) findViewById(qq.d.f48104v);
        this.f19482v = uCropView;
        this.f19483w = uCropView.getCropImageView();
        this.f19484x = this.f19482v.getOverlayView();
        this.f19483w.setTransformImageListener(this.M);
        ((ImageView) findViewById(qq.d.f48085c)).setColorFilter(this.f19479s, PorterDuff.Mode.SRC_ATOP);
        findViewById(qq.d.f48105w).setBackgroundColor(this.f19476p);
        if (!this.f19480t) {
            ((RelativeLayout.LayoutParams) findViewById(qq.d.f48105w).getLayoutParams()).bottomMargin = 0;
            findViewById(qq.d.f48105w).requestLayout();
        }
    }

    private void Q(Intent intent) {
        Bitmap.CompressFormat compressFormat;
        String stringExtra = intent.getStringExtra("com.yalantis.ucrop.CompressionFormatName");
        if (!TextUtils.isEmpty(stringExtra)) {
            compressFormat = Bitmap.CompressFormat.valueOf(stringExtra);
        } else {
            compressFormat = null;
        }
        if (compressFormat == null) {
            compressFormat = O;
        }
        this.J = compressFormat;
        this.K = intent.getIntExtra("com.yalantis.ucrop.CompressionQuality", 90);
        int[] intArrayExtra = intent.getIntArrayExtra("com.yalantis.ucrop.AllowedGestures");
        if (intArrayExtra != null && intArrayExtra.length == 3) {
            this.L = intArrayExtra;
        }
        this.f19483w.setMaxBitmapSize(intent.getIntExtra("com.yalantis.ucrop.MaxBitmapSize", 0));
        this.f19483w.setMaxScaleMultiplier(intent.getFloatExtra("com.yalantis.ucrop.MaxScaleMultiplier", 10.0f));
        this.f19483w.setImageToWrapCropBoundsAnimDuration(intent.getIntExtra("com.yalantis.ucrop.ImageToCropBoundsAnimDuration", 500));
        this.f19484x.setFreestyleCropEnabled(intent.getBooleanExtra("com.yalantis.ucrop.FreeStyleCrop", false));
        this.f19484x.setDimmedColor(intent.getIntExtra("com.yalantis.ucrop.DimmedLayerColor", getResources().getColor(qq.a.f48062e)));
        this.f19484x.setCircleDimmedLayer(intent.getBooleanExtra("com.yalantis.ucrop.CircleDimmedLayer", false));
        this.f19484x.setShowCropFrame(intent.getBooleanExtra("com.yalantis.ucrop.ShowCropFrame", true));
        this.f19484x.setCropFrameColor(intent.getIntExtra("com.yalantis.ucrop.CropFrameColor", getResources().getColor(qq.a.f48060c)));
        this.f19484x.setCropFrameStrokeWidth(intent.getIntExtra("com.yalantis.ucrop.CropFrameStrokeWidth", getResources().getDimensionPixelSize(qq.b.f48070a)));
        this.f19484x.setShowCropGrid(intent.getBooleanExtra("com.yalantis.ucrop.ShowCropGrid", true));
        this.f19484x.setCropGridRowCount(intent.getIntExtra("com.yalantis.ucrop.CropGridRowCount", 2));
        this.f19484x.setCropGridColumnCount(intent.getIntExtra("com.yalantis.ucrop.CropGridColumnCount", 2));
        this.f19484x.setCropGridColor(intent.getIntExtra("com.yalantis.ucrop.CropGridColor", getResources().getColor(qq.a.f48061d)));
        this.f19484x.setCropGridCornerColor(intent.getIntExtra("com.yalantis.ucrop.CropGridCornerColor", getResources().getColor(qq.a.f48061d)));
        this.f19484x.setCropGridStrokeWidth(intent.getIntExtra("com.yalantis.ucrop.CropGridStrokeWidth", getResources().getDimensionPixelSize(qq.b.f48071b)));
        float floatExtra = intent.getFloatExtra("com.yalantis.ucrop.AspectRatioX", -1.0f);
        float floatExtra2 = intent.getFloatExtra("com.yalantis.ucrop.AspectRatioY", -1.0f);
        int intExtra = intent.getIntExtra("com.yalantis.ucrop.AspectRatioSelectedByDefault", 0);
        ArrayList parcelableArrayListExtra = intent.getParcelableArrayListExtra("com.yalantis.ucrop.AspectRatioOptions");
        float f10 = 0.0f;
        if (floatExtra >= 0.0f && floatExtra2 >= 0.0f) {
            ViewGroup viewGroup = this.f19485y;
            if (viewGroup != null) {
                viewGroup.setVisibility(8);
            }
            float f11 = floatExtra / floatExtra2;
            GestureCropImageView gestureCropImageView = this.f19483w;
            if (!Float.isNaN(f11)) {
                f10 = f11;
            }
            gestureCropImageView.setTargetAspectRatio(f10);
        } else if (parcelableArrayListExtra != null && intExtra < parcelableArrayListExtra.size()) {
            float b10 = ((sq.a) parcelableArrayListExtra.get(intExtra)).b() / ((sq.a) parcelableArrayListExtra.get(intExtra)).c();
            GestureCropImageView gestureCropImageView2 = this.f19483w;
            if (!Float.isNaN(b10)) {
                f10 = b10;
            }
            gestureCropImageView2.setTargetAspectRatio(f10);
        } else {
            this.f19483w.setTargetAspectRatio(0.0f);
        }
        int intExtra2 = intent.getIntExtra("com.yalantis.ucrop.MaxSizeX", 0);
        int intExtra3 = intent.getIntExtra("com.yalantis.ucrop.MaxSizeY", 0);
        if (intExtra2 > 0 && intExtra3 > 0) {
            this.f19483w.setMaxResultImageSizeX(intExtra2);
            this.f19483w.setMaxResultImageSizeY(intExtra3);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void R() {
        GestureCropImageView gestureCropImageView = this.f19483w;
        gestureCropImageView.x(-gestureCropImageView.getCurrentAngle());
        this.f19483w.z();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void S(int i10) {
        this.f19483w.x(i10);
        this.f19483w.z();
    }

    private void T(int i10) {
        boolean z10;
        GestureCropImageView gestureCropImageView = this.f19483w;
        int i11 = this.L[i10];
        boolean z11 = false;
        if (i11 != 3 && i11 != 1) {
            z10 = false;
        } else {
            z10 = true;
        }
        gestureCropImageView.setScaleEnabled(z10);
        GestureCropImageView gestureCropImageView2 = this.f19483w;
        int i12 = this.L[i10];
        if (i12 == 3 || i12 == 2) {
            z11 = true;
        }
        gestureCropImageView2.setRotateEnabled(z11);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void U(float f10) {
        TextView textView = this.F;
        if (textView != null) {
            textView.setText(String.format(Locale.getDefault(), "%.1f°", Float.valueOf(f10)));
        }
    }

    private void V(int i10) {
        TextView textView = this.F;
        if (textView != null) {
            textView.setTextColor(i10);
        }
    }

    private void W(Intent intent) {
        Uri uri = (Uri) intent.getParcelableExtra("com.yalantis.ucrop.InputUri");
        Uri uri2 = (Uri) intent.getParcelableExtra("com.yalantis.ucrop.OutputUri");
        Q(intent);
        if (uri != null && uri2 != null) {
            try {
                this.f19483w.n(uri, uri2);
                return;
            } catch (Exception e10) {
                Y(e10);
                finish();
                return;
            }
        }
        Y(new NullPointerException(getString(qq.g.f48114a)));
        finish();
    }

    private void X() {
        if (this.f19480t) {
            if (this.f19485y.getVisibility() == 0) {
                c0(qq.d.f48096n);
                return;
            } else {
                c0(qq.d.f48098p);
                return;
            }
        }
        T(0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void a0(float f10) {
        TextView textView = this.G;
        if (textView != null) {
            textView.setText(String.format(Locale.getDefault(), "%d%%", Integer.valueOf((int) (f10 * 100.0f))));
        }
    }

    private void b0(int i10) {
        TextView textView = this.G;
        if (textView != null) {
            textView.setTextColor(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void c0(int i10) {
        boolean z10;
        boolean z11;
        boolean z12;
        int i11;
        int i12;
        if (!this.f19480t) {
            return;
        }
        ViewGroup viewGroup = this.f19485y;
        if (i10 == qq.d.f48096n) {
            z10 = true;
        } else {
            z10 = false;
        }
        viewGroup.setSelected(z10);
        ViewGroup viewGroup2 = this.f19486z;
        if (i10 == qq.d.f48097o) {
            z11 = true;
        } else {
            z11 = false;
        }
        viewGroup2.setSelected(z11);
        ViewGroup viewGroup3 = this.A;
        if (i10 == qq.d.f48098p) {
            z12 = true;
        } else {
            z12 = false;
        }
        viewGroup3.setSelected(z12);
        ViewGroup viewGroup4 = this.B;
        int i13 = 8;
        if (i10 == qq.d.f48096n) {
            i11 = 0;
        } else {
            i11 = 8;
        }
        viewGroup4.setVisibility(i11);
        ViewGroup viewGroup5 = this.C;
        if (i10 == qq.d.f48097o) {
            i12 = 0;
        } else {
            i12 = 8;
        }
        viewGroup5.setVisibility(i12);
        ViewGroup viewGroup6 = this.D;
        if (i10 == qq.d.f48098p) {
            i13 = 0;
        }
        viewGroup6.setVisibility(i13);
        N(i10);
        if (i10 == qq.d.f48098p) {
            T(0);
        } else if (i10 == qq.d.f48097o) {
            T(1);
        } else {
            T(2);
        }
    }

    private void d0() {
        Toolbar toolbar = (Toolbar) findViewById(qq.d.f48102t);
        h0.D0(toolbar, new v() { // from class: qq.j
            @Override // androidx.core.view.v
            public final WindowInsetsCompat a(View view, WindowInsetsCompat windowInsetsCompat) {
                return UCropActivity.A(view, windowInsetsCompat);
            }
        });
        toolbar.setBackgroundColor(this.f19473e);
        toolbar.setTitleTextColor(this.f19475o);
        TextView textView = (TextView) toolbar.findViewById(qq.d.f48103u);
        textView.setTextColor(this.f19475o);
        textView.setText(this.f19472d);
        Drawable mutate = androidx.core.content.a.e(this, this.f19477q).mutate();
        mutate.setColorFilter(this.f19475o, PorterDuff.Mode.SRC_ATOP);
        toolbar.setNavigationIcon(mutate);
        setSupportActionBar(toolbar);
        ActionBar supportActionBar = getSupportActionBar();
        if (supportActionBar != null) {
            supportActionBar.t(false);
        }
    }

    private void e0(Intent intent) {
        int intExtra = intent.getIntExtra("com.yalantis.ucrop.AspectRatioSelectedByDefault", 0);
        ArrayList parcelableArrayListExtra = intent.getParcelableArrayListExtra("com.yalantis.ucrop.AspectRatioOptions");
        if (parcelableArrayListExtra == null || parcelableArrayListExtra.isEmpty()) {
            parcelableArrayListExtra = new ArrayList();
            parcelableArrayListExtra.add(new sq.a(null, 1.0f, 1.0f));
            parcelableArrayListExtra.add(new sq.a(null, 3.0f, 4.0f));
            parcelableArrayListExtra.add(new sq.a(getString(qq.g.f48116c).toUpperCase(), 0.0f, 0.0f));
            parcelableArrayListExtra.add(new sq.a(null, 3.0f, 2.0f));
            parcelableArrayListExtra.add(new sq.a(null, 16.0f, 9.0f));
            intExtra = 2;
        }
        LinearLayout linearLayout = (LinearLayout) findViewById(qq.d.f48089g);
        LinearLayout.LayoutParams layoutParams = new LinearLayout.LayoutParams(0, -1);
        layoutParams.weight = 1.0f;
        Iterator it = parcelableArrayListExtra.iterator();
        while (it.hasNext()) {
            FrameLayout frameLayout = (FrameLayout) getLayoutInflater().inflate(qq.e.f48110b, (ViewGroup) null);
            frameLayout.setLayoutParams(layoutParams);
            AspectRatioTextView aspectRatioTextView = (AspectRatioTextView) frameLayout.getChildAt(0);
            aspectRatioTextView.setActiveColor(this.f19474i);
            aspectRatioTextView.setAspectRatio((sq.a) it.next());
            linearLayout.addView(frameLayout);
            this.E.add(frameLayout);
        }
        ((ViewGroup) this.E.get(intExtra)).setSelected(true);
        for (ViewGroup viewGroup : this.E) {
            viewGroup.setOnClickListener(new b());
        }
    }

    private void f0() {
        this.F = (TextView) findViewById(qq.d.f48100r);
        ((HorizontalProgressWheelView) findViewById(qq.d.f48094l)).setScrollingListener(new c());
        ((HorizontalProgressWheelView) findViewById(qq.d.f48094l)).setMiddleLineColor(this.f19474i);
        findViewById(qq.d.A).setOnClickListener(new d());
        findViewById(qq.d.B).setOnClickListener(new e());
        V(this.f19474i);
    }

    private void g0() {
        this.G = (TextView) findViewById(qq.d.f48101s);
        ((HorizontalProgressWheelView) findViewById(qq.d.f48095m)).setScrollingListener(new f());
        ((HorizontalProgressWheelView) findViewById(qq.d.f48095m)).setMiddleLineColor(this.f19474i);
        b0(this.f19474i);
    }

    private void h0() {
        ImageView imageView = (ImageView) findViewById(qq.d.f48088f);
        ImageView imageView2 = (ImageView) findViewById(qq.d.f48087e);
        ImageView imageView3 = (ImageView) findViewById(qq.d.f48086d);
        imageView.setImageDrawable(new i(imageView.getDrawable(), this.f19474i));
        imageView2.setImageDrawable(new i(imageView2.getDrawable(), this.f19474i));
        imageView3.setImageDrawable(new i(imageView3.getDrawable(), this.f19474i));
    }

    private void i0(Intent intent) {
        b0 a10;
        b0 a11;
        boolean booleanExtra = intent.getBooleanExtra("com.yalantis.ucrop.StatusBarLight", true);
        boolean booleanExtra2 = intent.getBooleanExtra("com.yalantis.ucrop.NavigationBarLight", false);
        if (booleanExtra) {
            a10 = b0.g(0, 0);
        } else {
            a10 = b0.a(0);
        }
        if (booleanExtra2) {
            a11 = b0.g(0, 0);
        } else {
            a11 = b0.a(0);
        }
        n.a(this, a10, a11);
    }

    private void j0(Intent intent) {
        this.f19473e = intent.getIntExtra("com.yalantis.ucrop.ToolbarColor", androidx.core.content.a.c(this, qq.a.f48065h));
        this.f19474i = intent.getIntExtra("com.yalantis.ucrop.UcropColorControlsWidgetActive", androidx.core.content.a.c(this, qq.a.f48058a));
        this.f19475o = intent.getIntExtra("com.yalantis.ucrop.UcropToolbarWidgetColor", androidx.core.content.a.c(this, qq.a.f48066i));
        this.f19477q = intent.getIntExtra("com.yalantis.ucrop.UcropToolbarCancelDrawable", qq.c.f48081a);
        this.f19478r = intent.getIntExtra("com.yalantis.ucrop.UcropToolbarCropDrawable", qq.c.f48082b);
        String stringExtra = intent.getStringExtra("com.yalantis.ucrop.UcropToolbarTitleText");
        this.f19472d = stringExtra;
        if (stringExtra == null) {
            stringExtra = getResources().getString(qq.g.f48115b);
        }
        this.f19472d = stringExtra;
        this.f19479s = intent.getIntExtra("com.yalantis.ucrop.UcropLogoColor", androidx.core.content.a.c(this, qq.a.f48063f));
        this.f19480t = !intent.getBooleanExtra("com.yalantis.ucrop.HideBottomControls", false);
        this.f19476p = intent.getIntExtra("com.yalantis.ucrop.UcropRootViewBackgroundColor", androidx.core.content.a.c(this, qq.a.f48059b));
        d0();
        P();
        if (this.f19480t) {
            ViewGroup viewGroup = (ViewGroup) ((ViewGroup) findViewById(qq.d.f48106x)).findViewById(qq.d.f48083a);
            viewGroup.setVisibility(0);
            LayoutInflater.from(this).inflate(qq.e.f48111c, viewGroup, true);
            androidx.transition.a aVar = new androidx.transition.a();
            this.I = aVar;
            aVar.l0(50L);
            ViewGroup viewGroup2 = (ViewGroup) findViewById(qq.d.f48096n);
            this.f19485y = viewGroup2;
            viewGroup2.setOnClickListener(this.N);
            ViewGroup viewGroup3 = (ViewGroup) findViewById(qq.d.f48097o);
            this.f19486z = viewGroup3;
            viewGroup3.setOnClickListener(this.N);
            ViewGroup viewGroup4 = (ViewGroup) findViewById(qq.d.f48098p);
            this.A = viewGroup4;
            viewGroup4.setOnClickListener(this.N);
            this.B = (ViewGroup) findViewById(qq.d.f48089g);
            this.C = (ViewGroup) findViewById(qq.d.f48090h);
            this.D = (ViewGroup) findViewById(qq.d.f48091i);
            View findViewById = findViewById(qq.d.f48083a);
            final int dimensionPixelSize = getResources().getDimensionPixelSize(qq.b.f48076g);
            h0.D0(findViewById.findViewById(qq.d.C), new v() { // from class: qq.i
                @Override // androidx.core.view.v
                public final WindowInsetsCompat a(View view, WindowInsetsCompat windowInsetsCompat) {
                    return UCropActivity.B(dimensionPixelSize, view, windowInsetsCompat);
                }
            });
            e0(intent);
            f0();
            g0();
            h0();
        }
    }

    protected void O() {
        this.H.setClickable(true);
        this.f19481u = true;
        supportInvalidateOptionsMenu();
        this.f19483w.u(this.J, this.K, new h());
    }

    protected void Y(Throwable th2) {
        setResult(96, new Intent().putExtra("com.yalantis.ucrop.Error", th2));
    }

    protected void Z(Uri uri, float f10, int i10, int i11, int i12, int i13) {
        setResult(-1, new Intent().putExtra("com.yalantis.ucrop.OutputUri", uri).putExtra("com.yalantis.ucrop.CropAspectRatio", f10).putExtra("com.yalantis.ucrop.ImageWidth", i12).putExtra("com.yalantis.ucrop.ImageHeight", i13).putExtra("com.yalantis.ucrop.OffsetX", i10).putExtra("com.yalantis.ucrop.OffsetY", i11));
    }

    @Override // androidx.fragment.app.FragmentActivity, androidx.activity.ComponentActivity, androidx.core.app.ComponentActivity, android.app.Activity
    public void onCreate(Bundle bundle) {
        super.onCreate(bundle);
        Intent intent = getIntent();
        i0(intent);
        setContentView(qq.e.f48109a);
        j0(intent);
        W(intent);
        X();
        M();
    }

    @Override // android.app.Activity
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(qq.f.f48113a, menu);
        MenuItem findItem = menu.findItem(qq.d.f48093k);
        Drawable icon = findItem.getIcon();
        if (icon != null) {
            try {
                icon.mutate();
                icon.setColorFilter(this.f19475o, PorterDuff.Mode.SRC_ATOP);
                findItem.setIcon(icon);
            } catch (IllegalStateException e10) {
                Log.i("UCropActivity", String.format("%s - %s", e10.getMessage(), getString(qq.g.f48117d)));
            }
            ((Animatable) findItem.getIcon()).start();
        }
        MenuItem findItem2 = menu.findItem(qq.d.f48092j);
        Drawable e11 = androidx.core.content.a.e(this, this.f19478r);
        if (e11 != null) {
            e11.mutate();
            e11.setColorFilter(this.f19475o, PorterDuff.Mode.SRC_ATOP);
            findItem2.setIcon(e11);
            return true;
        }
        return true;
    }

    @Override // android.app.Activity
    public boolean onOptionsItemSelected(MenuItem menuItem) {
        if (menuItem.getItemId() == qq.d.f48092j) {
            O();
            return true;
        } else if (menuItem.getItemId() == 16908332) {
            onBackPressed();
            return true;
        } else {
            return super.onOptionsItemSelected(menuItem);
        }
    }

    @Override // android.app.Activity
    public boolean onPrepareOptionsMenu(Menu menu) {
        menu.findItem(qq.d.f48092j).setVisible(!this.f19481u);
        menu.findItem(qq.d.f48093k).setVisible(this.f19481u);
        return super.onPrepareOptionsMenu(menu);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.appcompat.app.AppCompatActivity, androidx.fragment.app.FragmentActivity, android.app.Activity
    public void onStop() {
        super.onStop();
        GestureCropImageView gestureCropImageView = this.f19483w;
        if (gestureCropImageView != null) {
            gestureCropImageView.t();
        }
    }
}
