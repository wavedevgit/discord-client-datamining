package lp;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import androidx.viewbinding.ViewBinding;
import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.squareup.workflow1.ui.WorkflowViewStub;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements ViewBinding {

    /* renamed from: a  reason: collision with root package name */
    private final CoordinatorLayout f36501a;

    /* renamed from: b  reason: collision with root package name */
    public final WorkflowViewStub f36502b;

    /* renamed from: c  reason: collision with root package name */
    public final FloatingActionButton f36503c;

    private b(CoordinatorLayout coordinatorLayout, WorkflowViewStub workflowViewStub, FloatingActionButton floatingActionButton) {
        this.f36501a = coordinatorLayout;
        this.f36502b = workflowViewStub;
        this.f36503c = floatingActionButton;
    }

    public static b a(View view) {
        int i10 = kp.a.f35144a;
        WorkflowViewStub workflowViewStub = (WorkflowViewStub) e4.a.a(view, i10);
        if (workflowViewStub != null) {
            i10 = kp.a.f35145b;
            FloatingActionButton floatingActionButton = (FloatingActionButton) e4.a.a(view, i10);
            if (floatingActionButton != null) {
                return new b((CoordinatorLayout) view, workflowViewStub, floatingActionButton);
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    public static b c(LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(kp.b.f35149b, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return a(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    /* renamed from: b */
    public CoordinatorLayout getRoot() {
        return this.f36501a;
    }
}
