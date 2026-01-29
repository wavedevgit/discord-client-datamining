package k5;

import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Rect;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class n {

    /* renamed from: a  reason: collision with root package name */
    public static final n f33026a = new n();

    private n() {
    }

    private final boolean b(Bitmap bitmap, Bitmap.Config config) {
        if (bitmap.getConfig() == a.e(config)) {
            return true;
        }
        return false;
    }

    private final boolean c(boolean z10, Bitmap bitmap, h5.i iVar, h5.h hVar) {
        int A;
        int A2;
        if (z10) {
            return true;
        }
        int width = bitmap.getWidth();
        int height = bitmap.getHeight();
        if (h5.b.b(iVar)) {
            A = bitmap.getWidth();
        } else {
            A = k.A(iVar.d(), hVar);
        }
        if (h5.b.b(iVar)) {
            A2 = bitmap.getHeight();
        } else {
            A2 = k.A(iVar.c(), hVar);
        }
        if (x4.j.c(width, height, A, A2, hVar) == 1.0d) {
            return true;
        }
        return false;
    }

    public final Bitmap a(Drawable drawable, Bitmap.Config config, h5.i iVar, h5.h hVar, boolean z10) {
        int A;
        int A2;
        if (drawable instanceof BitmapDrawable) {
            Bitmap bitmap = ((BitmapDrawable) drawable).getBitmap();
            if (b(bitmap, config) && c(z10, bitmap, iVar, hVar)) {
                return bitmap;
            }
        }
        Drawable mutate = drawable.mutate();
        int p10 = k.p(mutate);
        int i10 = IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
        if (p10 <= 0) {
            p10 = 512;
        }
        int i11 = k.i(mutate);
        if (i11 > 0) {
            i10 = i11;
        }
        if (h5.b.b(iVar)) {
            A = p10;
        } else {
            A = k.A(iVar.d(), hVar);
        }
        if (h5.b.b(iVar)) {
            A2 = i10;
        } else {
            A2 = k.A(iVar.c(), hVar);
        }
        double c10 = x4.j.c(p10, i10, A, A2, hVar);
        int b10 = xr.a.b(p10 * c10);
        int b11 = xr.a.b(c10 * i10);
        Bitmap createBitmap = Bitmap.createBitmap(b10, b11, a.e(config));
        Rect bounds = mutate.getBounds();
        int i12 = bounds.left;
        int i13 = bounds.top;
        int i14 = bounds.right;
        int i15 = bounds.bottom;
        mutate.setBounds(0, 0, b10, b11);
        mutate.draw(new Canvas(createBitmap));
        mutate.setBounds(i12, i13, i14, i15);
        return createBitmap;
    }
}
