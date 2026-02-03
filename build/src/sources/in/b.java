package in;

import android.view.View;
import android.view.animation.Animation;
import android.view.animation.Transformation;
import com.swmansion.rnscreens.w;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends Animation {

    /* renamed from: d  reason: collision with root package name */
    private final w f28252d;

    public b(w mFragment) {
        Intrinsics.checkNotNullParameter(mFragment, "mFragment");
        this.f28252d = mFragment;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void b(b bVar, float f10) {
        w wVar = bVar.f28252d;
        wVar.F(f10, !wVar.isResumed());
    }

    @Override // android.view.animation.Animation
    protected void applyTransformation(final float f10, Transformation t10) {
        Intrinsics.checkNotNullParameter(t10, "t");
        super.applyTransformation(f10, t10);
        View view = this.f28252d.getView();
        if (view != null) {
            view.post(new Runnable() { // from class: in.a
                @Override // java.lang.Runnable
                public final void run() {
                    b.b(b.this, f10);
                }
            });
        }
    }
}
