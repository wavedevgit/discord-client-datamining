package androidx.appcompat.widget;

import android.app.Activity;
import android.content.Context;
import android.content.ContextWrapper;
import android.content.res.Resources;
import android.graphics.Rect;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowManager;
import android.widget.TextView;
import com.reactnativecommunity.webview.RNCWebViewManager;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class e1 {

    /* renamed from: a  reason: collision with root package name */
    private final Context f1665a;

    /* renamed from: b  reason: collision with root package name */
    private final View f1666b;

    /* renamed from: c  reason: collision with root package name */
    private final TextView f1667c;

    /* renamed from: d  reason: collision with root package name */
    private final WindowManager.LayoutParams f1668d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f1669e;

    /* renamed from: f  reason: collision with root package name */
    private final int[] f1670f;

    /* renamed from: g  reason: collision with root package name */
    private final int[] f1671g;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e1(Context context) {
        WindowManager.LayoutParams layoutParams = new WindowManager.LayoutParams();
        this.f1668d = layoutParams;
        this.f1669e = new Rect();
        this.f1670f = new int[2];
        this.f1671g = new int[2];
        this.f1665a = context;
        View inflate = LayoutInflater.from(context).inflate(f.g.f23398s, (ViewGroup) null);
        this.f1666b = inflate;
        this.f1667c = (TextView) inflate.findViewById(f.f.f23373t);
        layoutParams.setTitle(getClass().getSimpleName());
        layoutParams.packageName = context.getPackageName();
        layoutParams.type = RNCWebViewManager.COMMAND_CLEAR_HISTORY;
        layoutParams.width = -2;
        layoutParams.height = -2;
        layoutParams.format = -3;
        layoutParams.windowAnimations = f.i.f23414a;
        layoutParams.flags = 24;
    }

    private void a(View view, int i10, int i11, boolean z10, WindowManager.LayoutParams layoutParams) {
        int height;
        int i12;
        int i13;
        int i14;
        layoutParams.token = view.getApplicationWindowToken();
        int dimensionPixelOffset = this.f1665a.getResources().getDimensionPixelOffset(f.d.f23325k);
        if (view.getWidth() < dimensionPixelOffset) {
            i10 = view.getWidth() / 2;
        }
        if (view.getHeight() >= dimensionPixelOffset) {
            int dimensionPixelOffset2 = this.f1665a.getResources().getDimensionPixelOffset(f.d.f23324j);
            height = i11 + dimensionPixelOffset2;
            i12 = i11 - dimensionPixelOffset2;
        } else {
            height = view.getHeight();
            i12 = 0;
        }
        layoutParams.gravity = 49;
        Resources resources = this.f1665a.getResources();
        if (z10) {
            i13 = f.d.f23327m;
        } else {
            i13 = f.d.f23326l;
        }
        int dimensionPixelOffset3 = resources.getDimensionPixelOffset(i13);
        View b10 = b(view);
        if (b10 == null) {
            Log.e("TooltipPopup", "Cannot find app view");
            return;
        }
        b10.getWindowVisibleDisplayFrame(this.f1669e);
        Rect rect = this.f1669e;
        if (rect.left < 0 && rect.top < 0) {
            Resources resources2 = this.f1665a.getResources();
            int identifier = resources2.getIdentifier("status_bar_height", "dimen", "android");
            if (identifier != 0) {
                i14 = resources2.getDimensionPixelSize(identifier);
            } else {
                i14 = 0;
            }
            DisplayMetrics displayMetrics = resources2.getDisplayMetrics();
            this.f1669e.set(0, i14, displayMetrics.widthPixels, displayMetrics.heightPixels);
        }
        b10.getLocationOnScreen(this.f1671g);
        view.getLocationOnScreen(this.f1670f);
        int[] iArr = this.f1670f;
        int i15 = iArr[0];
        int[] iArr2 = this.f1671g;
        int i16 = i15 - iArr2[0];
        iArr[0] = i16;
        iArr[1] = iArr[1] - iArr2[1];
        layoutParams.x = (i16 + i10) - (b10.getWidth() / 2);
        int makeMeasureSpec = View.MeasureSpec.makeMeasureSpec(0, 0);
        this.f1666b.measure(makeMeasureSpec, makeMeasureSpec);
        int measuredHeight = this.f1666b.getMeasuredHeight();
        int i17 = this.f1670f[1];
        int i18 = ((i12 + i17) - dimensionPixelOffset3) - measuredHeight;
        int i19 = i17 + height + dimensionPixelOffset3;
        if (z10) {
            if (i18 >= 0) {
                layoutParams.y = i18;
            } else {
                layoutParams.y = i19;
            }
        } else if (measuredHeight + i19 <= this.f1669e.height()) {
            layoutParams.y = i19;
        } else {
            layoutParams.y = i18;
        }
    }

    private static View b(View view) {
        View rootView = view.getRootView();
        ViewGroup.LayoutParams layoutParams = rootView.getLayoutParams();
        if (!(layoutParams instanceof WindowManager.LayoutParams) || ((WindowManager.LayoutParams) layoutParams).type != 2) {
            for (Context context = view.getContext(); context instanceof ContextWrapper; context = ((ContextWrapper) context).getBaseContext()) {
                if (context instanceof Activity) {
                    return ((Activity) context).getWindow().getDecorView();
                }
            }
        }
        return rootView;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c() {
        if (!d()) {
            return;
        }
        ((WindowManager) this.f1665a.getSystemService("window")).removeView(this.f1666b);
    }

    boolean d() {
        if (this.f1666b.getParent() != null) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(View view, int i10, int i11, boolean z10, CharSequence charSequence) {
        if (d()) {
            c();
        }
        this.f1667c.setText(charSequence);
        a(view, i10, i11, z10, this.f1668d);
        ((WindowManager) this.f1665a.getSystemService("window")).addView(this.f1666b, this.f1668d);
    }
}
