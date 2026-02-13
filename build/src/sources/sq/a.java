package sq;

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
    private final FrameLayout f48755a;

    /* renamed from: b  reason: collision with root package name */
    public final FrameLayout f48756b;

    /* renamed from: c  reason: collision with root package name */
    public final LinearLayout f48757c;

    /* renamed from: d  reason: collision with root package name */
    public final View f48758d;

    /* renamed from: e  reason: collision with root package name */
    public final RecyclerView f48759e;

    /* renamed from: f  reason: collision with root package name */
    public final TextInputEditText f48760f;

    /* renamed from: g  reason: collision with root package name */
    public final TextInputLayout f48761g;

    /* renamed from: h  reason: collision with root package name */
    public final View f48762h;

    /* renamed from: i  reason: collision with root package name */
    public final TextView f48763i;

    /* renamed from: j  reason: collision with root package name */
    public final MaterialToolbar f48764j;

    private a(FrameLayout frameLayout, FrameLayout frameLayout2, LinearLayout linearLayout, View view, RecyclerView recyclerView, TextInputEditText textInputEditText, TextInputLayout textInputLayout, View view2, TextView textView, MaterialToolbar materialToolbar) {
        this.f48755a = frameLayout;
        this.f48756b = frameLayout2;
        this.f48757c = linearLayout;
        this.f48758d = view;
        this.f48759e = recyclerView;
        this.f48760f = textInputEditText;
        this.f48761g = textInputLayout;
        this.f48762h = view2;
        this.f48763i = textView;
        this.f48764j = materialToolbar;
    }

    public static a a(View view) {
        View a10;
        View a11;
        int i10 = nq.e.f38843n;
        FrameLayout frameLayout = (FrameLayout) e4.a.a(view, i10);
        if (frameLayout != null) {
            i10 = nq.e.X;
            LinearLayout linearLayout = (LinearLayout) e4.a.a(view, i10);
            if (linearLayout != null && (a10 = e4.a.a(view, (i10 = nq.e.Y))) != null) {
                i10 = nq.e.f38850q0;
                RecyclerView recyclerView = (RecyclerView) e4.a.a(view, i10);
                if (recyclerView != null) {
                    i10 = nq.e.f38854s0;
                    TextInputEditText textInputEditText = (TextInputEditText) e4.a.a(view, i10);
                    if (textInputEditText != null) {
                        i10 = nq.e.f38856t0;
                        TextInputLayout textInputLayout = (TextInputLayout) e4.a.a(view, i10);
                        if (textInputLayout != null && (a11 = e4.a.a(view, (i10 = nq.e.f38862w0))) != null) {
                            i10 = nq.e.A0;
                            TextView textView = (TextView) e4.a.a(view, i10);
                            if (textView != null) {
                                i10 = nq.e.C0;
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
        View inflate = layoutInflater.inflate(nq.f.f38869a, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public FrameLayout getRoot() {
        return this.f48755a;
    }
}
