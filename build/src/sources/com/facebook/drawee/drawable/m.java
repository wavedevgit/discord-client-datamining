package com.facebook.drawee.drawable;

import android.graphics.Canvas;
import android.graphics.drawable.NinePatchDrawable;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class m extends l {
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public m(NinePatchDrawable ninePatchDrawable) {
        super(ninePatchDrawable);
        Intrinsics.checkNotNullParameter(ninePatchDrawable, "ninePatchDrawable");
    }

    @Override // com.facebook.drawee.drawable.l, android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        if (ya.b.d()) {
            ya.b.a("RoundedNinePatchDrawable#draw");
        }
        if (!k()) {
            super.draw(canvas);
            if (ya.b.d()) {
                ya.b.b();
                return;
            }
            return;
        }
        m();
        l();
        canvas.clipPath(this.f11109p);
        super.draw(canvas);
        if (ya.b.d()) {
            ya.b.b();
        }
    }
}
