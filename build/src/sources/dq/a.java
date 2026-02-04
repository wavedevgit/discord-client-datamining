package dq;

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
    private final FrameLayout f20724a;

    /* renamed from: b  reason: collision with root package name */
    public final FrameLayout f20725b;

    /* renamed from: c  reason: collision with root package name */
    public final LinearLayout f20726c;

    /* renamed from: d  reason: collision with root package name */
    public final View f20727d;

    /* renamed from: e  reason: collision with root package name */
    public final RecyclerView f20728e;

    /* renamed from: f  reason: collision with root package name */
    public final TextInputEditText f20729f;

    /* renamed from: g  reason: collision with root package name */
    public final TextInputLayout f20730g;

    /* renamed from: h  reason: collision with root package name */
    public final View f20731h;

    /* renamed from: i  reason: collision with root package name */
    public final TextView f20732i;

    /* renamed from: j  reason: collision with root package name */
    public final MaterialToolbar f20733j;

    private a(FrameLayout frameLayout, FrameLayout frameLayout2, LinearLayout linearLayout, View view, RecyclerView recyclerView, TextInputEditText textInputEditText, TextInputLayout textInputLayout, View view2, TextView textView, MaterialToolbar materialToolbar) {
        this.f20724a = frameLayout;
        this.f20725b = frameLayout2;
        this.f20726c = linearLayout;
        this.f20727d = view;
        this.f20728e = recyclerView;
        this.f20729f = textInputEditText;
        this.f20730g = textInputLayout;
        this.f20731h = view2;
        this.f20732i = textView;
        this.f20733j = materialToolbar;
    }

    public static a a(View view) {
        View a10;
        View a11;
        int i10 = yp.e.f55189n;
        FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
        if (frameLayout != null) {
            i10 = yp.e.X;
            LinearLayout linearLayout = (LinearLayout) e4.a.a(view, i10);
            if (linearLayout != null && (a10 = e4.a.a(view, (i10 = yp.e.Y))) != null) {
                i10 = yp.e.f55196q0;
                RecyclerView recyclerView = (RecyclerView) e4.a.a(view, i10);
                if (recyclerView != null) {
                    i10 = yp.e.f55200s0;
                    TextInputEditText textInputEditText = (TextInputEditText) e4.a.a(view, i10);
                    if (textInputEditText != null) {
                        i10 = yp.e.f55202t0;
                        TextInputLayout textInputLayout = (TextInputLayout) e4.a.a(view, i10);
                        if (textInputLayout != null && (a11 = e4.a.a(view, (i10 = yp.e.f55208w0))) != null) {
                            i10 = yp.e.A0;
                            TextView textView = (TextView) e4.a.a(view, i10);
                            if (textView != null) {
                                i10 = yp.e.C0;
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
        View inflate = layoutInflater.inflate(yp.f.f55215a, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public FrameLayout getRoot() {
        return this.f20724a;
    }
}
