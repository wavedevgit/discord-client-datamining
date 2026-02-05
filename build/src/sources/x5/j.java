package x5;

import android.content.Context;
import android.content.res.Resources;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.PathMeasure;
import android.graphics.PointF;
import android.graphics.RectF;
import android.provider.Settings;
import java.io.Closeable;
import java.io.InterruptedIOException;
import java.net.ProtocolException;
import java.net.SocketException;
import java.net.UnknownHostException;
import java.net.UnknownServiceException;
import java.nio.channels.ClosedChannelException;
import javax.net.ssl.SSLException;
import n5.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class j {

    /* renamed from: a  reason: collision with root package name */
    private static final ThreadLocal f53729a = new a();

    /* renamed from: b  reason: collision with root package name */
    private static final ThreadLocal f53730b = new b();

    /* renamed from: c  reason: collision with root package name */
    private static final ThreadLocal f53731c = new c();

    /* renamed from: d  reason: collision with root package name */
    private static final ThreadLocal f53732d = new d();

    /* renamed from: e  reason: collision with root package name */
    private static final float f53733e = (float) (Math.sqrt(2.0d) / 2.0d);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a extends ThreadLocal {
        a() {
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // java.lang.ThreadLocal
        /* renamed from: a */
        public PathMeasure initialValue() {
            return new PathMeasure();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b extends ThreadLocal {
        b() {
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // java.lang.ThreadLocal
        /* renamed from: a */
        public Path initialValue() {
            return new Path();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class c extends ThreadLocal {
        c() {
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // java.lang.ThreadLocal
        /* renamed from: a */
        public Path initialValue() {
            return new Path();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class d extends ThreadLocal {
        d() {
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // java.lang.ThreadLocal
        /* renamed from: a */
        public float[] initialValue() {
            return new float[4];
        }
    }

    public static void a(Path path, float f10, float f11, float f12) {
        l5.e.b("applyTrimPathIfNeeded");
        PathMeasure pathMeasure = (PathMeasure) f53729a.get();
        Path path2 = (Path) f53730b.get();
        Path path3 = (Path) f53731c.get();
        pathMeasure.setPath(path, false);
        float length = pathMeasure.getLength();
        if (f10 == 1.0f && f11 == 0.0f) {
            l5.e.c("applyTrimPathIfNeeded");
        } else if (length >= 1.0f && Math.abs((f11 - f10) - 1.0f) >= 0.01d) {
            float f13 = f10 * length;
            float f14 = f11 * length;
            float f15 = f12 * length;
            float min = Math.min(f13, f14) + f15;
            float max = Math.max(f13, f14) + f15;
            if (min >= length && max >= length) {
                min = i.f(min, length);
                max = i.f(max, length);
            }
            if (min < 0.0f) {
                min = i.f(min, length);
            }
            if (max < 0.0f) {
                max = i.f(max, length);
            }
            int i10 = (min > max ? 1 : (min == max ? 0 : -1));
            if (i10 == 0) {
                path.reset();
                l5.e.c("applyTrimPathIfNeeded");
                return;
            }
            if (i10 >= 0) {
                min -= length;
            }
            path2.reset();
            pathMeasure.getSegment(min, max, path2, true);
            if (max > length) {
                path3.reset();
                pathMeasure.getSegment(0.0f, max % length, path3, true);
                path2.addPath(path3);
            } else if (min < 0.0f) {
                path3.reset();
                pathMeasure.getSegment(min + length, length, path3, true);
                path2.addPath(path3);
            }
            path.set(path2);
            l5.e.c("applyTrimPathIfNeeded");
        } else {
            l5.e.c("applyTrimPathIfNeeded");
        }
    }

    public static void b(Path path, u uVar) {
        if (uVar != null && !uVar.k()) {
            a(path, ((o5.d) uVar.i()).q() / 100.0f, ((o5.d) uVar.d()).q() / 100.0f, ((o5.d) uVar.f()).q() / 360.0f);
        }
    }

    public static void c(Closeable closeable) {
        if (closeable != null) {
            try {
                closeable.close();
            } catch (RuntimeException e10) {
                throw e10;
            } catch (Exception unused) {
            }
        }
    }

    public static Path d(PointF pointF, PointF pointF2, PointF pointF3, PointF pointF4) {
        Path path = new Path();
        path.moveTo(pointF.x, pointF.y);
        if (pointF3 != null && pointF4 != null && (pointF3.length() != 0.0f || pointF4.length() != 0.0f)) {
            float f10 = pointF2.x;
            float f11 = pointF2.y;
            path.cubicTo(pointF.x + pointF3.x, pointF.y + pointF3.y, f10 + pointF4.x, f11 + pointF4.y, f10, f11);
            return path;
        }
        path.lineTo(pointF2.x, pointF2.y);
        return path;
    }

    public static float e() {
        return Resources.getSystem().getDisplayMetrics().density;
    }

    public static float f(Context context) {
        return Settings.Global.getFloat(context.getContentResolver(), "animator_duration_scale", 1.0f);
    }

    public static float g(Matrix matrix) {
        float[] fArr = (float[]) f53732d.get();
        fArr[0] = 0.0f;
        fArr[1] = 0.0f;
        float f10 = f53733e;
        fArr[2] = f10;
        fArr[3] = f10;
        matrix.mapPoints(fArr);
        return (float) Math.hypot(fArr[2] - fArr[0], fArr[3] - fArr[1]);
    }

    public static boolean h(Matrix matrix) {
        float[] fArr = (float[]) f53732d.get();
        fArr[0] = 0.0f;
        fArr[1] = 0.0f;
        fArr[2] = 37394.73f;
        fArr[3] = 39575.234f;
        matrix.mapPoints(fArr);
        if (fArr[0] != fArr[2] && fArr[1] != fArr[3]) {
            return false;
        }
        return true;
    }

    public static int i(float f10, float f11, float f12, float f13) {
        int i10;
        if (f10 != 0.0f) {
            i10 = (int) (527 * f10);
        } else {
            i10 = 17;
        }
        if (f11 != 0.0f) {
            i10 = (int) (i10 * 31 * f11);
        }
        if (f12 != 0.0f) {
            i10 = (int) (i10 * 31 * f12);
        }
        if (f13 != 0.0f) {
            return (int) (i10 * 31 * f13);
        }
        return i10;
    }

    public static boolean j(int i10, int i11, int i12, int i13, int i14, int i15) {
        if (i10 < i13) {
            return false;
        }
        if (i10 > i13) {
            return true;
        }
        if (i11 < i14) {
            return false;
        }
        if (i11 <= i14 && i12 < i15) {
            return false;
        }
        return true;
    }

    public static boolean k(Throwable th2) {
        if (!(th2 instanceof SocketException) && !(th2 instanceof ClosedChannelException) && !(th2 instanceof InterruptedIOException) && !(th2 instanceof ProtocolException) && !(th2 instanceof SSLException) && !(th2 instanceof UnknownHostException) && !(th2 instanceof UnknownServiceException)) {
            return false;
        }
        return true;
    }

    public static Bitmap l(Bitmap bitmap, int i10, int i11) {
        if (bitmap.getWidth() == i10 && bitmap.getHeight() == i11) {
            return bitmap;
        }
        Bitmap createScaledBitmap = Bitmap.createScaledBitmap(bitmap, i10, i11, true);
        bitmap.recycle();
        return createScaledBitmap;
    }

    public static void m(Canvas canvas, RectF rectF, Paint paint) {
        n(canvas, rectF, paint, 31);
    }

    public static void n(Canvas canvas, RectF rectF, Paint paint, int i10) {
        l5.e.b("Utils#saveLayer");
        canvas.saveLayer(rectF, paint);
        l5.e.c("Utils#saveLayer");
    }
}
