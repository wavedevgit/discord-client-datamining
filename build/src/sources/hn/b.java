package hn;

import android.view.View;
import android.view.animation.Animation;
import android.view.animation.Transformation;
import com.swmansion.rnscreens.w;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends Animation {

    /* renamed from: d  reason: collision with root package name */
    private final w f27614d;

    public b(w mFragment) {
        Intrinsics.checkNotNullParameter(mFragment, "mFragment");
        this.f27614d = mFragment;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void b(b bVar, float f10) {
        w wVar = bVar.f27614d;
        wVar.F(f10, !wVar.isResumed());
    }

    @Override // android.view.animation.Animation
    protected void applyTransformation(final float f10, Transformation t10) {
        Intrinsics.checkNotNullParameter(t10, "t");
        super.applyTransformation(f10, t10);
        View view = this.f27614d.getView();
        if (view != null) {
            view.post(new Runnable() { // from class: hn.a
                @Override // java.lang.Runnable
                public final void run() {
                    b.b(b.this, f10);
                }
            });
        }
    }
}
