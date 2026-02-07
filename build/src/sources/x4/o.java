package x4;

import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.RectF;
import okio.BufferedSource;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class o {

    /* renamed from: a  reason: collision with root package name */
    public static final o f54540a = new o();

    /* renamed from: b  reason: collision with root package name */
    private static final Paint f54541b = new Paint(3);

    private o() {
    }

    public final l a(String str, BufferedSource bufferedSource, n nVar) {
        if (p.c(nVar, str)) {
            e3.a aVar = new e3.a(new m(bufferedSource.peek().n2()));
            return new l(aVar.H(), aVar.w());
        }
        return l.f54530d;
    }

    public final Bitmap b(Bitmap bitmap, l lVar) {
        Bitmap createBitmap;
        if (!lVar.b() && !p.a(lVar)) {
            return bitmap;
        }
        Matrix matrix = new Matrix();
        float width = bitmap.getWidth() / 2.0f;
        float height = bitmap.getHeight() / 2.0f;
        if (lVar.b()) {
            matrix.postScale(-1.0f, 1.0f, width, height);
        }
        if (p.a(lVar)) {
            matrix.postRotate(lVar.a(), width, height);
        }
        RectF rectF = new RectF(0.0f, 0.0f, bitmap.getWidth(), bitmap.getHeight());
        matrix.mapRect(rectF);
        float f10 = rectF.left;
        if (f10 != 0.0f || rectF.top != 0.0f) {
            matrix.postTranslate(-f10, -rectF.top);
        }
        if (p.b(lVar)) {
            createBitmap = Bitmap.createBitmap(bitmap.getHeight(), bitmap.getWidth(), k5.a.c(bitmap));
        } else {
            createBitmap = Bitmap.createBitmap(bitmap.getWidth(), bitmap.getHeight(), k5.a.c(bitmap));
        }
        new Canvas(createBitmap).drawBitmap(bitmap, matrix, f54541b);
        bitmap.recycle();
        return createBitmap;
    }
}
