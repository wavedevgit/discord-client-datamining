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
import xq.i;
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
    private String f19878d;

    /* renamed from: e  reason: collision with root package name */
    private int f19879e;

    /* renamed from: i  reason: collision with root package name */
    private int f19880i;

    /* renamed from: o  reason: collision with root package name */
    private int f19881o;

    /* renamed from: p  reason: collision with root package name */
    private int f19882p;

    /* renamed from: q  reason: collision with root package name */
    private int f19883q;

    /* renamed from: r  reason: collision with root package name */
    private int f19884r;

    /* renamed from: s  reason: collision with root package name */
    private int f19885s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f19886t;

    /* renamed from: v  reason: collision with root package name */
    private UCropView f19888v;

    /* renamed from: w  reason: collision with root package name */
    private GestureCropImageView f19889w;

    /* renamed from: x  reason: collision with root package name */
    private OverlayView f19890x;

    /* renamed from: y  reason: collision with root package name */
    private ViewGroup f19891y;

    /* renamed from: z  reason: collision with root package name */
    private ViewGroup f19892z;

    /* renamed from: u  reason: collision with root package name */
    private boolean f19887u = true;
    private List E = new ArrayList();
    private Bitmap.CompressFormat J = O;
    private int K = 90;
    private int[] L = {1, 2, 3};
    private b.InterfaceC0269b M = new a();
    private final View.OnClickListener N = new g();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements b.InterfaceC0269b {
        a() {
        }

        @Override // com.yalantis.ucrop.view.b.InterfaceC0269b
        public void a() {
            UCropActivity.this.f19888v.animate().alpha(1.0f).setDuration(300L).setInterpolator(new AccelerateInterpolator());
            UCropActivity.this.H.setClickable(false);
            UCropActivity.this.f19887u = false;
            UCropActivity.this.supportInvalidateOptionsMenu();
        }

        @Override // com.yalantis.ucrop.view.b.InterfaceC0269b
        public void b(Exception exc) {
            UCropActivity.this.Y(exc);
            UCropActivity.this.finish();
        }

        @Override // com.yalantis.ucrop.view.b.InterfaceC0269b
        public void c(float f10) {
            UCropActivity.this.a0(f10);
        }

        @Override // com.yalantis.ucrop.view.b.InterfaceC0269b
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
            UCropActivity.this.f19889w.setTargetAspectRatio(((AspectRatioTextView) ((ViewGroup) view).getChildAt(0)).g(view.isSelected()));
            UCropActivity.this.f19889w.z();
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
            UCropActivity.this.f19889w.z();
        }

        @Override // com.yalantis.ucrop.view.widget.HorizontalProgressWheelView.a
        public void b() {
            UCropActivity.this.f19889w.t();
        }

        @Override // com.yalantis.ucrop.view.widget.HorizontalProgressWheelView.a
        public void c(float f10, float f11) {
            UCropActivity.this.f19889w.x(f10 / 42.0f);
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
            UCropActivity.this.f19889w.z();
        }

        @Override // com.yalantis.ucrop.view.widget.HorizontalProgressWheelView.a
        public void b() {
            UCropActivity.this.f19889w.t();
        }

        @Override // com.yalantis.ucrop.view.widget.HorizontalProgressWheelView.a
        public void c(float f10, float f11) {
            if (f10 > 0.0f) {
                UCropActivity.this.f19889w.C(UCropActivity.this.f19889w.getCurrentScale() + (f10 * ((UCropActivity.this.f19889w.getMaxScale() - UCropActivity.this.f19889w.getMinScale()) / 15000.0f)));
            } else {
                UCropActivity.this.f19889w.E(UCropActivity.this.f19889w.getCurrentScale() + (f10 * ((UCropActivity.this.f19889w.getMaxScale() - UCropActivity.this.f19889w.getMinScale()) / 15000.0f)));
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
    public class h implements uq.a {
        h() {
        }

        @Override // uq.a
        public void a(Uri uri, int i10, int i11, int i12, int i13) {
            UCropActivity uCropActivity = UCropActivity.this;
            uCropActivity.Z(uri, uCropActivity.f19889w.getTargetAspectRatio(), i10, i11, i12, i13);
            UCropActivity.this.finish();
        }

        @Override // uq.a
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
        view.setPaddingRelative(f10.f3275a, f10.f3276b, f10.f3277c, 0);
        return windowInsetsCompat;
    }

    public static /* synthetic */ WindowInsetsCompat B(int i10, View view, WindowInsetsCompat windowInsetsCompat) {
        Insets f10 = windowInsetsCompat.f(WindowInsetsCompat.p.h());
        view.setPaddingRelative(f10.f3275a, 0, f10.f3277c, f10.f3278d);
        ViewGroup.LayoutParams layoutParams = view.getLayoutParams();
        int i11 = i10 + f10.f3278d;
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
            layoutParams.addRule(3, tq.d.f50966t);
            this.H.setLayoutParams(layoutParams);
            this.H.setClickable(true);
        }
        ((RelativeLayout) findViewById(tq.d.f50970x)).addView(this.H);
    }

    private void N(int i10) {
        int i11;
        int i12;
        x.a((ViewGroup) findViewById(tq.d.f50970x), this.I);
        View findViewById = this.A.findViewById(tq.d.f50965s);
        int i13 = 8;
        if (i10 == tq.d.f50962p) {
            i11 = 0;
        } else {
            i11 = 8;
        }
        findViewById.setVisibility(i11);
        View findViewById2 = this.f19891y.findViewById(tq.d.f50963q);
        if (i10 == tq.d.f50960n) {
            i12 = 0;
        } else {
            i12 = 8;
        }
        findViewById2.setVisibility(i12);
        View findViewById3 = this.f19892z.findViewById(tq.d.f50964r);
        if (i10 == tq.d.f50961o) {
            i13 = 0;
        }
        findViewById3.setVisibility(i13);
    }

    private void P() {
        UCropView uCropView = (UCropView) findViewById(tq.d.f50968v);
        this.f19888v = uCropView;
        this.f19889w = uCropView.getCropImageView();
        this.f19890x = this.f19888v.getOverlayView();
        this.f19889w.setTransformImageListener(this.M);
        ((ImageView) findViewById(tq.d.f50949c)).setColorFilter(this.f19885s, PorterDuff.Mode.SRC_ATOP);
        findViewById(tq.d.f50969w).setBackgroundColor(this.f19882p);
        if (!this.f19886t) {
            ((RelativeLayout.LayoutParams) findViewById(tq.d.f50969w).getLayoutParams()).bottomMargin = 0;
            findViewById(tq.d.f50969w).requestLayout();
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
        this.f19889w.setMaxBitmapSize(intent.getIntExtra("com.yalantis.ucrop.MaxBitmapSize", 0));
        this.f19889w.setMaxScaleMultiplier(intent.getFloatExtra("com.yalantis.ucrop.MaxScaleMultiplier", 10.0f));
        this.f19889w.setImageToWrapCropBoundsAnimDuration(intent.getIntExtra("com.yalantis.ucrop.ImageToCropBoundsAnimDuration", 500));
        this.f19890x.setFreestyleCropEnabled(intent.getBooleanExtra("com.yalantis.ucrop.FreeStyleCrop", false));
        this.f19890x.setDimmedColor(intent.getIntExtra("com.yalantis.ucrop.DimmedLayerColor", getResources().getColor(tq.a.f50926e)));
        this.f19890x.setCircleDimmedLayer(intent.getBooleanExtra("com.yalantis.ucrop.CircleDimmedLayer", false));
        this.f19890x.setShowCropFrame(intent.getBooleanExtra("com.yalantis.ucrop.ShowCropFrame", true));
        this.f19890x.setCropFrameColor(intent.getIntExtra("com.yalantis.ucrop.CropFrameColor", getResources().getColor(tq.a.f50924c)));
        this.f19890x.setCropFrameStrokeWidth(intent.getIntExtra("com.yalantis.ucrop.CropFrameStrokeWidth", getResources().getDimensionPixelSize(tq.b.f50934a)));
        this.f19890x.setShowCropGrid(intent.getBooleanExtra("com.yalantis.ucrop.ShowCropGrid", true));
        this.f19890x.setCropGridRowCount(intent.getIntExtra("com.yalantis.ucrop.CropGridRowCount", 2));
        this.f19890x.setCropGridColumnCount(intent.getIntExtra("com.yalantis.ucrop.CropGridColumnCount", 2));
        this.f19890x.setCropGridColor(intent.getIntExtra("com.yalantis.ucrop.CropGridColor", getResources().getColor(tq.a.f50925d)));
        this.f19890x.setCropGridCornerColor(intent.getIntExtra("com.yalantis.ucrop.CropGridCornerColor", getResources().getColor(tq.a.f50925d)));
        this.f19890x.setCropGridStrokeWidth(intent.getIntExtra("com.yalantis.ucrop.CropGridStrokeWidth", getResources().getDimensionPixelSize(tq.b.f50935b)));
        float floatExtra = intent.getFloatExtra("com.yalantis.ucrop.AspectRatioX", -1.0f);
        float floatExtra2 = intent.getFloatExtra("com.yalantis.ucrop.AspectRatioY", -1.0f);
        int intExtra = intent.getIntExtra("com.yalantis.ucrop.AspectRatioSelectedByDefault", 0);
        ArrayList parcelableArrayListExtra = intent.getParcelableArrayListExtra("com.yalantis.ucrop.AspectRatioOptions");
        float f10 = 0.0f;
        if (floatExtra >= 0.0f && floatExtra2 >= 0.0f) {
            ViewGroup viewGroup = this.f19891y;
            if (viewGroup != null) {
                viewGroup.setVisibility(8);
            }
            float f11 = floatExtra / floatExtra2;
            GestureCropImageView gestureCropImageView = this.f19889w;
            if (!Float.isNaN(f11)) {
                f10 = f11;
            }
            gestureCropImageView.setTargetAspectRatio(f10);
        } else if (parcelableArrayListExtra != null && intExtra < parcelableArrayListExtra.size()) {
            float b10 = ((vq.a) parcelableArrayListExtra.get(intExtra)).b() / ((vq.a) parcelableArrayListExtra.get(intExtra)).c();
            GestureCropImageView gestureCropImageView2 = this.f19889w;
            if (!Float.isNaN(b10)) {
                f10 = b10;
            }
            gestureCropImageView2.setTargetAspectRatio(f10);
        } else {
            this.f19889w.setTargetAspectRatio(0.0f);
        }
        int intExtra2 = intent.getIntExtra("com.yalantis.ucrop.MaxSizeX", 0);
        int intExtra3 = intent.getIntExtra("com.yalantis.ucrop.MaxSizeY", 0);
        if (intExtra2 > 0 && intExtra3 > 0) {
            this.f19889w.setMaxResultImageSizeX(intExtra2);
            this.f19889w.setMaxResultImageSizeY(intExtra3);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void R() {
        GestureCropImageView gestureCropImageView = this.f19889w;
        gestureCropImageView.x(-gestureCropImageView.getCurrentAngle());
        this.f19889w.z();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void S(int i10) {
        this.f19889w.x(i10);
        this.f19889w.z();
    }

    private void T(int i10) {
        boolean z10;
        GestureCropImageView gestureCropImageView = this.f19889w;
        int i11 = this.L[i10];
        boolean z11 = false;
        if (i11 != 3 && i11 != 1) {
            z10 = false;
        } else {
            z10 = true;
        }
        gestureCropImageView.setScaleEnabled(z10);
        GestureCropImageView gestureCropImageView2 = this.f19889w;
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
                this.f19889w.n(uri, uri2);
                return;
            } catch (Exception e10) {
                Y(e10);
                finish();
                return;
            }
        }
        Y(new NullPointerException(getString(tq.g.f50978a)));
        finish();
    }

    private void X() {
        if (this.f19886t) {
            if (this.f19891y.getVisibility() == 0) {
                c0(tq.d.f50960n);
                return;
            } else {
                c0(tq.d.f50962p);
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
        if (!this.f19886t) {
            return;
        }
        ViewGroup viewGroup = this.f19891y;
        if (i10 == tq.d.f50960n) {
            z10 = true;
        } else {
            z10 = false;
        }
        viewGroup.setSelected(z10);
        ViewGroup viewGroup2 = this.f19892z;
        if (i10 == tq.d.f50961o) {
            z11 = true;
        } else {
            z11 = false;
        }
        viewGroup2.setSelected(z11);
        ViewGroup viewGroup3 = this.A;
        if (i10 == tq.d.f50962p) {
            z12 = true;
        } else {
            z12 = false;
        }
        viewGroup3.setSelected(z12);
        ViewGroup viewGroup4 = this.B;
        int i13 = 8;
        if (i10 == tq.d.f50960n) {
            i11 = 0;
        } else {
            i11 = 8;
        }
        viewGroup4.setVisibility(i11);
        ViewGroup viewGroup5 = this.C;
        if (i10 == tq.d.f50961o) {
            i12 = 0;
        } else {
            i12 = 8;
        }
        viewGroup5.setVisibility(i12);
        ViewGroup viewGroup6 = this.D;
        if (i10 == tq.d.f50962p) {
            i13 = 0;
        }
        viewGroup6.setVisibility(i13);
        N(i10);
        if (i10 == tq.d.f50962p) {
            T(0);
        } else if (i10 == tq.d.f50961o) {
            T(1);
        } else {
            T(2);
        }
    }

    private void d0() {
        Toolbar toolbar = (Toolbar) findViewById(tq.d.f50966t);
        h0.D0(toolbar, new v() { // from class: tq.j
            @Override // androidx.core.view.v
            public final WindowInsetsCompat a(View view, WindowInsetsCompat windowInsetsCompat) {
                return UCropActivity.A(view, windowInsetsCompat);
            }
        });
        toolbar.setBackgroundColor(this.f19879e);
        toolbar.setTitleTextColor(this.f19881o);
        TextView textView = (TextView) toolbar.findViewById(tq.d.f50967u);
        textView.setTextColor(this.f19881o);
        textView.setText(this.f19878d);
        Drawable mutate = androidx.core.content.a.e(this, this.f19883q).mutate();
        mutate.setColorFilter(this.f19881o, PorterDuff.Mode.SRC_ATOP);
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
            parcelableArrayListExtra.add(new vq.a(null, 1.0f, 1.0f));
            parcelableArrayListExtra.add(new vq.a(null, 3.0f, 4.0f));
            parcelableArrayListExtra.add(new vq.a(getString(tq.g.f50980c).toUpperCase(), 0.0f, 0.0f));
            parcelableArrayListExtra.add(new vq.a(null, 3.0f, 2.0f));
            parcelableArrayListExtra.add(new vq.a(null, 16.0f, 9.0f));
            intExtra = 2;
        }
        LinearLayout linearLayout = (LinearLayout) findViewById(tq.d.f50953g);
        LinearLayout.LayoutParams layoutParams = new LinearLayout.LayoutParams(0, -1);
        layoutParams.weight = 1.0f;
        Iterator it = parcelableArrayListExtra.iterator();
        while (it.hasNext()) {
            FrameLayout frameLayout = (FrameLayout) getLayoutInflater().inflate(tq.e.f50974b, (ViewGroup) null);
            frameLayout.setLayoutParams(layoutParams);
            AspectRatioTextView aspectRatioTextView = (AspectRatioTextView) frameLayout.getChildAt(0);
            aspectRatioTextView.setActiveColor(this.f19880i);
            aspectRatioTextView.setAspectRatio((vq.a) it.next());
            linearLayout.addView(frameLayout);
            this.E.add(frameLayout);
        }
        ((ViewGroup) this.E.get(intExtra)).setSelected(true);
        for (ViewGroup viewGroup : this.E) {
            viewGroup.setOnClickListener(new b());
        }
    }

    private void f0() {
        this.F = (TextView) findViewById(tq.d.f50964r);
        ((HorizontalProgressWheelView) findViewById(tq.d.f50958l)).setScrollingListener(new c());
        ((HorizontalProgressWheelView) findViewById(tq.d.f50958l)).setMiddleLineColor(this.f19880i);
        findViewById(tq.d.A).setOnClickListener(new d());
        findViewById(tq.d.B).setOnClickListener(new e());
        V(this.f19880i);
    }

    private void g0() {
        this.G = (TextView) findViewById(tq.d.f50965s);
        ((HorizontalProgressWheelView) findViewById(tq.d.f50959m)).setScrollingListener(new f());
        ((HorizontalProgressWheelView) findViewById(tq.d.f50959m)).setMiddleLineColor(this.f19880i);
        b0(this.f19880i);
    }

    private void h0() {
        ImageView imageView = (ImageView) findViewById(tq.d.f50952f);
        ImageView imageView2 = (ImageView) findViewById(tq.d.f50951e);
        ImageView imageView3 = (ImageView) findViewById(tq.d.f50950d);
        imageView.setImageDrawable(new i(imageView.getDrawable(), this.f19880i));
        imageView2.setImageDrawable(new i(imageView2.getDrawable(), this.f19880i));
        imageView3.setImageDrawable(new i(imageView3.getDrawable(), this.f19880i));
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
        this.f19879e = intent.getIntExtra("com.yalantis.ucrop.ToolbarColor", androidx.core.content.a.c(this, tq.a.f50929h));
        this.f19880i = intent.getIntExtra("com.yalantis.ucrop.UcropColorControlsWidgetActive", androidx.core.content.a.c(this, tq.a.f50922a));
        this.f19881o = intent.getIntExtra("com.yalantis.ucrop.UcropToolbarWidgetColor", androidx.core.content.a.c(this, tq.a.f50930i));
        this.f19883q = intent.getIntExtra("com.yalantis.ucrop.UcropToolbarCancelDrawable", tq.c.f50945a);
        this.f19884r = intent.getIntExtra("com.yalantis.ucrop.UcropToolbarCropDrawable", tq.c.f50946b);
        String stringExtra = intent.getStringExtra("com.yalantis.ucrop.UcropToolbarTitleText");
        this.f19878d = stringExtra;
        if (stringExtra == null) {
            stringExtra = getResources().getString(tq.g.f50979b);
        }
        this.f19878d = stringExtra;
        this.f19885s = intent.getIntExtra("com.yalantis.ucrop.UcropLogoColor", androidx.core.content.a.c(this, tq.a.f50927f));
        this.f19886t = !intent.getBooleanExtra("com.yalantis.ucrop.HideBottomControls", false);
        this.f19882p = intent.getIntExtra("com.yalantis.ucrop.UcropRootViewBackgroundColor", androidx.core.content.a.c(this, tq.a.f50923b));
        d0();
        P();
        if (this.f19886t) {
            ViewGroup viewGroup = (ViewGroup) ((ViewGroup) findViewById(tq.d.f50970x)).findViewById(tq.d.f50947a);
            viewGroup.setVisibility(0);
            LayoutInflater.from(this).inflate(tq.e.f50975c, viewGroup, true);
            androidx.transition.a aVar = new androidx.transition.a();
            this.I = aVar;
            aVar.m0(50L);
            ViewGroup viewGroup2 = (ViewGroup) findViewById(tq.d.f50960n);
            this.f19891y = viewGroup2;
            viewGroup2.setOnClickListener(this.N);
            ViewGroup viewGroup3 = (ViewGroup) findViewById(tq.d.f50961o);
            this.f19892z = viewGroup3;
            viewGroup3.setOnClickListener(this.N);
            ViewGroup viewGroup4 = (ViewGroup) findViewById(tq.d.f50962p);
            this.A = viewGroup4;
            viewGroup4.setOnClickListener(this.N);
            this.B = (ViewGroup) findViewById(tq.d.f50953g);
            this.C = (ViewGroup) findViewById(tq.d.f50954h);
            this.D = (ViewGroup) findViewById(tq.d.f50955i);
            View findViewById = findViewById(tq.d.f50947a);
            final int dimensionPixelSize = getResources().getDimensionPixelSize(tq.b.f50940g);
            h0.D0(findViewById.findViewById(tq.d.C), new v() { // from class: tq.i
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
        this.f19887u = true;
        supportInvalidateOptionsMenu();
        this.f19889w.u(this.J, this.K, new h());
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
        setContentView(tq.e.f50973a);
        j0(intent);
        W(intent);
        X();
        M();
    }

    @Override // android.app.Activity
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(tq.f.f50977a, menu);
        MenuItem findItem = menu.findItem(tq.d.f50957k);
        Drawable icon = findItem.getIcon();
        if (icon != null) {
            try {
                icon.mutate();
                icon.setColorFilter(this.f19881o, PorterDuff.Mode.SRC_ATOP);
                findItem.setIcon(icon);
            } catch (IllegalStateException e10) {
                Log.i("UCropActivity", String.format("%s - %s", e10.getMessage(), getString(tq.g.f50981d)));
            }
            ((Animatable) findItem.getIcon()).start();
        }
        MenuItem findItem2 = menu.findItem(tq.d.f50956j);
        Drawable e11 = androidx.core.content.a.e(this, this.f19884r);
        if (e11 != null) {
            e11.mutate();
            e11.setColorFilter(this.f19881o, PorterDuff.Mode.SRC_ATOP);
            findItem2.setIcon(e11);
            return true;
        }
        return true;
    }

    @Override // android.app.Activity
    public boolean onOptionsItemSelected(MenuItem menuItem) {
        if (menuItem.getItemId() == tq.d.f50956j) {
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
        menu.findItem(tq.d.f50956j).setVisible(!this.f19887u);
        menu.findItem(tq.d.f50957k).setVisible(this.f19887u);
        return super.onPrepareOptionsMenu(menu);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.appcompat.app.AppCompatActivity, androidx.fragment.app.FragmentActivity, android.app.Activity
    public void onStop() {
        super.onStop();
        GestureCropImageView gestureCropImageView = this.f19889w;
        if (gestureCropImageView != null) {
            gestureCropImageView.t();
        }
    }
}
