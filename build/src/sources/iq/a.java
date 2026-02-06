package iq;

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
    private final FrameLayout f29175a;

    /* renamed from: b  reason: collision with root package name */
    public final FrameLayout f29176b;

    /* renamed from: c  reason: collision with root package name */
    public final LinearLayout f29177c;

    /* renamed from: d  reason: collision with root package name */
    public final View f29178d;

    /* renamed from: e  reason: collision with root package name */
    public final RecyclerView f29179e;

    /* renamed from: f  reason: collision with root package name */
    public final TextInputEditText f29180f;

    /* renamed from: g  reason: collision with root package name */
    public final TextInputLayout f29181g;

    /* renamed from: h  reason: collision with root package name */
    public final View f29182h;

    /* renamed from: i  reason: collision with root package name */
    public final TextView f29183i;

    /* renamed from: j  reason: collision with root package name */
    public final MaterialToolbar f29184j;

    private a(FrameLayout frameLayout, FrameLayout frameLayout2, LinearLayout linearLayout, View view, RecyclerView recyclerView, TextInputEditText textInputEditText, TextInputLayout textInputLayout, View view2, TextView textView, MaterialToolbar materialToolbar) {
        this.f29175a = frameLayout;
        this.f29176b = frameLayout2;
        this.f29177c = linearLayout;
        this.f29178d = view;
        this.f29179e = recyclerView;
        this.f29180f = textInputEditText;
        this.f29181g = textInputLayout;
        this.f29182h = view2;
        this.f29183i = textView;
        this.f29184j = materialToolbar;
    }

    public static a a(View view) {
        View a10;
        View a11;
        int i10 = dq.e.f21050n;
        FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
        if (frameLayout != null) {
            i10 = dq.e.X;
            LinearLayout linearLayout = (LinearLayout) e4.a.a(view, i10);
            if (linearLayout != null && (a10 = e4.a.a(view, (i10 = dq.e.Y))) != null) {
                i10 = dq.e.f21057q0;
                RecyclerView recyclerView = (RecyclerView) e4.a.a(view, i10);
                if (recyclerView != null) {
                    i10 = dq.e.f21061s0;
                    TextInputEditText textInputEditText = (TextInputEditText) e4.a.a(view, i10);
                    if (textInputEditText != null) {
                        i10 = dq.e.f21063t0;
                        TextInputLayout textInputLayout = (TextInputLayout) e4.a.a(view, i10);
                        if (textInputLayout != null && (a11 = e4.a.a(view, (i10 = dq.e.f21069w0))) != null) {
                            i10 = dq.e.A0;
                            TextView textView = (TextView) e4.a.a(view, i10);
                            if (textView != null) {
                                i10 = dq.e.C0;
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
        View inflate = layoutInflater.inflate(dq.f.f21076a, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public FrameLayout getRoot() {
        return this.f29175a;
    }
}
