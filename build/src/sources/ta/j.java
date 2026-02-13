package ta;

import android.graphics.drawable.Drawable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j extends h implements g {

    /* renamed from: o  reason: collision with root package name */
    private Drawable f49219o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f49220p;

    public j(Drawable drawable) {
        this.f49219o = drawable;
    }

    @Override // ta.g
    public Drawable F1() {
        Drawable.ConstantState constantState;
        Drawable drawable = this.f49219o;
        if (drawable != null && (constantState = drawable.getConstantState()) != null) {
            return constantState.newDrawable();
        }
        return null;
    }

    @Override // ta.e, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f49219o = null;
        this.f49220p = true;
    }

    @Override // ta.e, com.facebook.imagepipeline.image.ImageInfo
    public int getHeight() {
        Drawable drawable = this.f49219o;
        if (drawable != null) {
            Integer valueOf = Integer.valueOf(drawable.getIntrinsicHeight());
            if (valueOf.intValue() < 0) {
                valueOf = null;
            }
            if (valueOf != null) {
                return valueOf.intValue();
            }
            return 0;
        }
        return 0;
    }

    @Override // ta.e, com.facebook.imagepipeline.image.ImageInfo
    public int getWidth() {
        Drawable drawable = this.f49219o;
        if (drawable != null) {
            Integer valueOf = Integer.valueOf(drawable.getIntrinsicWidth());
            if (valueOf.intValue() < 0) {
                valueOf = null;
            }
            if (valueOf != null) {
                return valueOf.intValue();
            }
            return 0;
        }
        return 0;
    }

    @Override // ta.e
    public boolean isClosed() {
        return this.f49220p;
    }

    @Override // ta.e
    public int w() {
        return getWidth() * getHeight() * 4;
    }
}
