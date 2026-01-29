package aq;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.recyclerview.widget.RecyclerView;
import androidx.viewbinding.ViewBinding;
import com.google.android.material.appbar.MaterialToolbar;
import com.google.android.material.textfield.TextInputEditText;
import com.google.android.material.textfield.TextInputLayout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final FrameLayout f6594a;

    /* renamed from: b  reason: collision with root package name */
    public final FrameLayout f6595b;

    /* renamed from: c  reason: collision with root package name */
    public final LinearLayout f6596c;

    /* renamed from: d  reason: collision with root package name */
    public final View f6597d;

    /* renamed from: e  reason: collision with root package name */
    public final RecyclerView f6598e;

    /* renamed from: f  reason: collision with root package name */
    public final TextInputEditText f6599f;

    /* renamed from: g  reason: collision with root package name */
    public final TextInputLayout f6600g;

    /* renamed from: h  reason: collision with root package name */
    public final View f6601h;

    /* renamed from: i  reason: collision with root package name */
    public final TextView f6602i;

    /* renamed from: j  reason: collision with root package name */
    public final MaterialToolbar f6603j;

    private a(FrameLayout frameLayout, FrameLayout frameLayout2, LinearLayout linearLayout, View view, RecyclerView recyclerView, TextInputEditText textInputEditText, TextInputLayout textInputLayout, View view2, TextView textView, MaterialToolbar materialToolbar) {
        this.f6594a = frameLayout;
        this.f6595b = frameLayout2;
        this.f6596c = linearLayout;
        this.f6597d = view;
        this.f6598e = recyclerView;
        this.f6599f = textInputEditText;
        this.f6600g = textInputLayout;
        this.f6601h = view2;
        this.f6602i = textView;
        this.f6603j = materialToolbar;
    }

    public static a a(View view) {
        View a10;
        View a11;
        int i10 = vp.e.f51811n;
        FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
        if (frameLayout != null) {
            i10 = vp.e.X;
            LinearLayout linearLayout = (LinearLayout) e4.a.a(view, i10);
            if (linearLayout != null && (a10 = e4.a.a(view, (i10 = vp.e.Y))) != null) {
                i10 = vp.e.f51818q0;
                RecyclerView recyclerView = (RecyclerView) e4.a.a(view, i10);
                if (recyclerView != null) {
                    i10 = vp.e.f51822s0;
                    TextInputEditText textInputEditText = (TextInputEditText) e4.a.a(view, i10);
                    if (textInputEditText != null) {
                        i10 = vp.e.f51824t0;
                        TextInputLayout textInputLayout = (TextInputLayout) e4.a.a(view, i10);
                        if (textInputLayout != null && (a11 = e4.a.a(view, (i10 = vp.e.f51830w0))) != null) {
                            i10 = vp.e.A0;
                            TextView textView = (TextView) e4.a.a(view, i10);
                            if (textView != null) {
                                i10 = vp.e.C0;
                                MaterialToolbar materialToolbar = (MaterialToolbar) e4.a.a(view, i10);
                                if (materialToolbar != null) {
                                    return new a((FrameLayout) view, frameLayout, linearLayout, a10, recyclerView, textInputEditText, textInputLayout, a11, textView, materialToolbar);
                                }
                            }
                        }
                    }
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static a c(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(vp.f.f51837a, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public FrameLayout getRoot() {
        return this.f6594a;
    }
}
