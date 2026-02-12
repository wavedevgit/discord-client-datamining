package zn;

import android.view.View;
import android.view.animation.Animation;
import android.view.animation.Transformation;
import com.swmansion.rnscreens.b0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends Animation {

    /* renamed from: d  reason: collision with root package name */
    private final b0 f56534d;

    public b(b0 mFragment) {
        Intrinsics.checkNotNullParameter(mFragment, "mFragment");
        this.f56534d = mFragment;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void b(b bVar, float f10) {
        b0 b0Var = bVar.f56534d;
        b0Var.F(f10, !b0Var.isResumed());
    }

    @Override // android.view.animation.Animation
    protected void applyTransformation(final float f10, Transformation t10) {
        Intrinsics.checkNotNullParameter(t10, "t");
        super.applyTransformation(f10, t10);
        View view = this.f56534d.getView();
        if (view != null) {
            view.post(new Runnable() { // from class: zn.a
                @Override // java.lang.Runnable
                public final void run() {
                    b.b(b.this, f10);
                }
            });
        }
    }
}
