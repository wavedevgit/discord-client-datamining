package com.facebook.drawee.drawable;

import android.graphics.drawable.Drawable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    public static final d f10687a = new d();

    private d() {
    }

    public static final void a(Drawable drawable, Drawable drawable2) {
        if (drawable2 != null && drawable != null && drawable != drawable2) {
            drawable.setBounds(drawable2.getBounds());
            drawable.setChangingConfigurations(drawable2.getChangingConfigurations());
            drawable.setLevel(drawable2.getLevel());
            drawable.setVisible(drawable2.isVisible(), false);
            drawable.setState(drawable2.getState());
        }
    }

    public static final int b(int i10) {
        int i11 = i10 >>> 24;
        if (i11 != 0) {
            return i11 != 255 ? -3 : -1;
        }
        return -2;
    }

    public static final int c(int i10, int i11) {
        if (i11 == 255) {
            return i10;
        }
        if (i11 == 0) {
            return i10 & 16777215;
        }
        return (i10 & 16777215) | ((((i10 >>> 24) * (i11 + (i11 >> 7))) >> 8) << 24);
    }

    public static final void d(Drawable drawable, Drawable.Callback callback, TransformCallback transformCallback) {
        a0 a0Var;
        if (drawable != null) {
            drawable.setCallback(callback);
            if (drawable instanceof a0) {
                a0Var = (a0) drawable;
            } else {
                a0Var = null;
            }
            if (a0Var != null) {
                a0Var.setTransformCallback(transformCallback);
            }
        }
    }

    public static final void e(Drawable drawable, DrawableProperties drawableProperties) {
        if (drawable != null && drawableProperties != null) {
            drawableProperties.a(drawable);
        }
    }
}
