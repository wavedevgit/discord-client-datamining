package i5;

import android.graphics.drawable.Drawable;
import android.widget.ImageView;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b extends a {

    /* renamed from: e  reason: collision with root package name */
    private final ImageView f28033e;

    public b(ImageView imageView) {
        this.f28033e = imageView;
    }

    @Override // i5.a
    public void d(Drawable drawable) {
        getView().setImageDrawable(drawable);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof b) && Intrinsics.areEqual(getView(), ((b) obj).getView())) {
            return true;
        }
        return false;
    }

    @Override // i5.a, j5.d
    public Drawable getDrawable() {
        return getView().getDrawable();
    }

    public int hashCode() {
        return getView().hashCode();
    }

    @Override // i5.d
    /* renamed from: i */
    public ImageView getView() {
        return this.f28033e;
    }
}
