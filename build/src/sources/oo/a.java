package oo;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;
import androidx.constraintlayout.helper.widget.Flow;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import mo.f2;
import mo.g2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f44596a;

    /* renamed from: b  reason: collision with root package name */
    public final ConstraintLayout f44597b;

    /* renamed from: c  reason: collision with root package name */
    public final Button f44598c;

    /* renamed from: d  reason: collision with root package name */
    public final Flow f44599d;

    /* renamed from: e  reason: collision with root package name */
    public final TextView f44600e;

    /* renamed from: f  reason: collision with root package name */
    public final TextView f44601f;

    /* renamed from: g  reason: collision with root package name */
    public final Button f44602g;

    private a(ConstraintLayout constraintLayout, ConstraintLayout constraintLayout2, Button button, Flow flow, TextView textView, TextView textView2, Button button2) {
        this.f44596a = constraintLayout;
        this.f44597b = constraintLayout2;
        this.f44598c = button;
        this.f44599d = flow;
        this.f44600e = textView;
        this.f44601f = textView2;
        this.f44602g = button2;
    }

    public static a a(View view) {
        ConstraintLayout constraintLayout = (ConstraintLayout) view;
        int i10 = f2.f39400b;
        Button button = (Button) e4.a.a(view, i10);
        if (button != null) {
            i10 = f2.f39401c;
            Flow flow = (Flow) e4.a.a(view, i10);
            if (flow != null) {
                i10 = f2.f39403e;
                TextView textView = (TextView) e4.a.a(view, i10);
                if (textView != null) {
                    i10 = f2.f39404f;
                    TextView textView2 = (TextView) e4.a.a(view, i10);
                    if (textView2 != null) {
                        i10 = f2.f39407i;
                        Button button2 = (Button) e4.a.a(view, i10);
                        if (button2 != null) {
                            return new a(constraintLayout, constraintLayout, button, flow, textView, textView2, button2);
                        }
                    }
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static a c(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(g2.f39434a, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f44596a;
    }
}
