package vp;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.google.android.material.appbar.MaterialToolbar;
import com.google.android.material.materialswitch.MaterialSwitch;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final ConstraintLayout f52305a;

    /* renamed from: b  reason: collision with root package name */
    public final MaterialSwitch f52306b;

    /* renamed from: c  reason: collision with root package name */
    public final MaterialToolbar f52307c;

    private a(ConstraintLayout constraintLayout, MaterialSwitch materialSwitch, MaterialToolbar materialToolbar) {
        this.f52305a = constraintLayout;
        this.f52306b = materialSwitch;
        this.f52307c = materialToolbar;
    }

    public static a a(View view) {
        int i10 = up.a.f51447c;
        MaterialSwitch materialSwitch = (MaterialSwitch) e4.a.a(view, i10);
        if (materialSwitch != null) {
            i10 = up.a.f51448d;
            MaterialToolbar materialToolbar = (MaterialToolbar) e4.a.a(view, i10);
            if (materialToolbar != null) {
                return new a((ConstraintLayout) view, materialSwitch, materialToolbar);
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static a c(LayoutInflater layoutInflater) {
        return d(layoutInflater, null, false);
    }

    public static a d(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(up.b.f51449a, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public ConstraintLayout getRoot() {
        return this.f52305a;
    }
}
