package bq;

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
    private final FrameLayout f7408a;

    /* renamed from: b  reason: collision with root package name */
    public final FrameLayout f7409b;

    /* renamed from: c  reason: collision with root package name */
    public final LinearLayout f7410c;

    /* renamed from: d  reason: collision with root package name */
    public final View f7411d;

    /* renamed from: e  reason: collision with root package name */
    public final RecyclerView f7412e;

    /* renamed from: f  reason: collision with root package name */
    public final TextInputEditText f7413f;

    /* renamed from: g  reason: collision with root package name */
    public final TextInputLayout f7414g;

    /* renamed from: h  reason: collision with root package name */
    public final View f7415h;

    /* renamed from: i  reason: collision with root package name */
    public final TextView f7416i;

    /* renamed from: j  reason: collision with root package name */
    public final MaterialToolbar f7417j;

    private a(FrameLayout frameLayout, FrameLayout frameLayout2, LinearLayout linearLayout, View view, RecyclerView recyclerView, TextInputEditText textInputEditText, TextInputLayout textInputLayout, View view2, TextView textView, MaterialToolbar materialToolbar) {
        this.f7408a = frameLayout;
        this.f7409b = frameLayout2;
        this.f7410c = linearLayout;
        this.f7411d = view;
        this.f7412e = recyclerView;
        this.f7413f = textInputEditText;
        this.f7414g = textInputLayout;
        this.f7415h = view2;
        this.f7416i = textView;
        this.f7417j = materialToolbar;
    }

    public static a a(View view) {
        View a10;
        View a11;
        int i10 = wp.e.f52903n;
        FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
        if (frameLayout != null) {
            i10 = wp.e.X;
            LinearLayout linearLayout = (LinearLayout) e4.a.a(view, i10);
            if (linearLayout != null && (a10 = e4.a.a(view, (i10 = wp.e.Y))) != null) {
                i10 = wp.e.f52910q0;
                RecyclerView recyclerView = (RecyclerView) e4.a.a(view, i10);
                if (recyclerView != null) {
                    i10 = wp.e.f52914s0;
                    TextInputEditText textInputEditText = (TextInputEditText) e4.a.a(view, i10);
                    if (textInputEditText != null) {
                        i10 = wp.e.f52916t0;
                        TextInputLayout textInputLayout = (TextInputLayout) e4.a.a(view, i10);
                        if (textInputLayout != null && (a11 = e4.a.a(view, (i10 = wp.e.f52922w0))) != null) {
                            i10 = wp.e.A0;
                            TextView textView = (TextView) e4.a.a(view, i10);
                            if (textView != null) {
                                i10 = wp.e.C0;
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
        View inflate = layoutInflater.inflate(wp.f.f52929a, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public FrameLayout getRoot() {
        return this.f7408a;
    }
}
