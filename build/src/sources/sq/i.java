package sq;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.google.android.material.checkbox.MaterialCheckBox;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f48246a;

    /* renamed from: b  reason: collision with root package name */
    public final MaterialCheckBox f48247b;

    /* renamed from: c  reason: collision with root package name */
    public final TextView f48248c;

    /* renamed from: d  reason: collision with root package name */
    public final TextView f48249d;

    /* renamed from: e  reason: collision with root package name */
    public final TextView f48250e;

    private i(ConstraintLayout constraintLayout, MaterialCheckBox materialCheckBox, TextView textView, TextView textView2, TextView textView3) {
        this.f48246a = constraintLayout;
        this.f48247b = materialCheckBox;
        this.f48248c = textView;
        this.f48249d = textView2;
        this.f48250e = textView3;
    }

    public static i a(View view) {
        int i10 = nq.e.f38277o;
        MaterialCheckBox materialCheckBox = (MaterialCheckBox) e4.a.a(view, i10);
        if (materialCheckBox != null) {
            i10 = nq.e.f38279p;
            TextView textView = (TextView) e4.a.a(view, i10);
            if (textView != null) {
                i10 = nq.e.f38281q;
                TextView textView2 = (TextView) e4.a.a(view, i10);
                if (textView2 != null) {
                    i10 = nq.e.f38289u;
                    TextView textView3 = (TextView) e4.a.a(view, i10);
                    if (textView3 != null) {
                        return new i((ConstraintLayout) view, materialCheckBox, textView, textView2, textView3);
                    }
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static i c(LayoutInflater layoutInflater) {
        return d(layoutInflater, null, false);
    }

    public static i d(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(nq.f.f38310j, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f48246a;
    }
}
