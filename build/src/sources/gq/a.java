package gq;

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
    private final FrameLayout f25048a;

    /* renamed from: b  reason: collision with root package name */
    public final FrameLayout f25049b;

    /* renamed from: c  reason: collision with root package name */
    public final LinearLayout f25050c;

    /* renamed from: d  reason: collision with root package name */
    public final View f25051d;

    /* renamed from: e  reason: collision with root package name */
    public final RecyclerView f25052e;

    /* renamed from: f  reason: collision with root package name */
    public final TextInputEditText f25053f;

    /* renamed from: g  reason: collision with root package name */
    public final TextInputLayout f25054g;

    /* renamed from: h  reason: collision with root package name */
    public final View f25055h;

    /* renamed from: i  reason: collision with root package name */
    public final TextView f25056i;

    /* renamed from: j  reason: collision with root package name */
    public final MaterialToolbar f25057j;

    private a(FrameLayout frameLayout, FrameLayout frameLayout2, LinearLayout linearLayout, View view, RecyclerView recyclerView, TextInputEditText textInputEditText, TextInputLayout textInputLayout, View view2, TextView textView, MaterialToolbar materialToolbar) {
        this.f25048a = frameLayout;
        this.f25049b = frameLayout2;
        this.f25050c = linearLayout;
        this.f25051d = view;
        this.f25052e = recyclerView;
        this.f25053f = textInputEditText;
        this.f25054g = textInputLayout;
        this.f25055h = view2;
        this.f25056i = textView;
        this.f25057j = materialToolbar;
    }

    public static a a(View view) {
        View a10;
        View a11;
        int i10 = bq.e.f7134n;
        FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
        if (frameLayout != null) {
            i10 = bq.e.X;
            LinearLayout linearLayout = (LinearLayout) e4.a.a(view, i10);
            if (linearLayout != null && (a10 = e4.a.a(view, (i10 = bq.e.Y))) != null) {
                i10 = bq.e.f7141q0;
                RecyclerView recyclerView = (RecyclerView) e4.a.a(view, i10);
                if (recyclerView != null) {
                    i10 = bq.e.f7145s0;
                    TextInputEditText textInputEditText = (TextInputEditText) e4.a.a(view, i10);
                    if (textInputEditText != null) {
                        i10 = bq.e.f7147t0;
                        TextInputLayout textInputLayout = (TextInputLayout) e4.a.a(view, i10);
                        if (textInputLayout != null && (a11 = e4.a.a(view, (i10 = bq.e.f7153w0))) != null) {
                            i10 = bq.e.A0;
                            TextView textView = (TextView) e4.a.a(view, i10);
                            if (textView != null) {
                                i10 = bq.e.C0;
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
        View inflate = layoutInflater.inflate(bq.f.f7160a, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public FrameLayout getRoot() {
        return this.f25048a;
    }
}
