package sa;

import android.graphics.drawable.Drawable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j extends h implements g {

    /* renamed from: o  reason: collision with root package name */
    private Drawable f49348o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f49349p;

    public j(Drawable drawable) {
        this.f49348o = drawable;
    }

    @Override // sa.g
    public Drawable F1() {
        Drawable.ConstantState constantState;
        Drawable drawable = this.f49348o;
        if (drawable != null && (constantState = drawable.getConstantState()) != null) {
            return constantState.newDrawable();
        }
        return null;
    }

    @Override // sa.e, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f49348o = null;
        this.f49349p = true;
    }

    @Override // sa.e, com.facebook.imagepipeline.image.ImageInfo
    public int getHeight() {
        Drawable drawable = this.f49348o;
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

    @Override // sa.e, com.facebook.imagepipeline.image.ImageInfo
    public int getWidth() {
        Drawable drawable = this.f49348o;
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

    @Override // sa.e
    public boolean isClosed() {
        return this.f49349p;
    }

    @Override // sa.e
    public int t() {
        return getWidth() * getHeight() * 4;
    }
}
