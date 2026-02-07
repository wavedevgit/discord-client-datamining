package z;

import a0.q2;
import android.graphics.Bitmap;
import android.graphics.Matrix;
import android.graphics.Rect;
import android.media.Image;
import androidx.camera.core.n;
import b0.h;
import java.nio.ByteBuffer;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class t0 implements androidx.camera.core.n {

    /* renamed from: d  reason: collision with root package name */
    private final Object f55816d;

    /* renamed from: e  reason: collision with root package name */
    private final int f55817e;

    /* renamed from: i  reason: collision with root package name */
    private final int f55818i;

    /* renamed from: o  reason: collision with root package name */
    private final Rect f55819o;

    /* renamed from: p  reason: collision with root package name */
    n.a[] f55820p;

    /* renamed from: q  reason: collision with root package name */
    private final x.p0 f55821q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements n.a {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ int f55822a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ int f55823b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ ByteBuffer f55824c;

        a(int i10, int i11, ByteBuffer byteBuffer) {
            this.f55822a = i10;
            this.f55823b = i11;
            this.f55824c = byteBuffer;
        }

        @Override // androidx.camera.core.n.a
        public ByteBuffer e() {
            return this.f55824c;
        }

        @Override // androidx.camera.core.n.a
        public int f() {
            return this.f55822a;
        }

        @Override // androidx.camera.core.n.a
        public int g() {
            return this.f55823b;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements x.p0 {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ long f55825a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ int f55826b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Matrix f55827c;

        b(long j10, int i10, Matrix matrix) {
            this.f55825a = j10;
            this.f55826b = i10;
            this.f55827c = matrix;
        }

        @Override // x.p0
        public long a() {
            return this.f55825a;
        }

        @Override // x.p0
        public void b(h.b bVar) {
            throw new UnsupportedOperationException("Custom ImageProxy does not contain Exif data.");
        }

        @Override // x.p0
        public q2 c() {
            throw new UnsupportedOperationException("Custom ImageProxy does not contain TagBundle");
        }

        @Override // x.p0
        public int d() {
            return this.f55826b;
        }
    }

    public t0(j0.z zVar) {
        this((Bitmap) zVar.c(), zVar.b(), zVar.f(), zVar.g(), zVar.a().a());
    }

    private void a() {
        boolean z10;
        synchronized (this.f55816d) {
            if (this.f55820p != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            b2.e.j(z10, "The image is closed.");
        }
    }

    private static x.p0 g(long j10, int i10, Matrix matrix) {
        return new b(j10, i10, matrix);
    }

    private static n.a k(ByteBuffer byteBuffer, int i10, int i11) {
        return new a(i10, i11, byteBuffer);
    }

    @Override // androidx.camera.core.n
    public void C0(Rect rect) {
        synchronized (this.f55816d) {
            try {
                a();
                if (rect != null) {
                    this.f55819o.set(rect);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // androidx.camera.core.n
    public x.p0 E() {
        x.p0 p0Var;
        synchronized (this.f55816d) {
            a();
            p0Var = this.f55821q;
        }
        return p0Var;
    }

    @Override // androidx.camera.core.n
    public Image F() {
        synchronized (this.f55816d) {
            a();
        }
        return null;
    }

    @Override // androidx.camera.core.n
    public n.a[] c1() {
        n.a[] aVarArr;
        synchronized (this.f55816d) {
            a();
            n.a[] aVarArr2 = this.f55820p;
            Objects.requireNonNull(aVarArr2);
            aVarArr = aVarArr2;
        }
        return aVarArr;
    }

    @Override // androidx.camera.core.n, java.lang.AutoCloseable
    public void close() {
        synchronized (this.f55816d) {
            a();
            this.f55820p = null;
        }
    }

    @Override // androidx.camera.core.n
    public int getFormat() {
        synchronized (this.f55816d) {
            a();
        }
        return 1;
    }

    @Override // androidx.camera.core.n
    public int getHeight() {
        int i10;
        synchronized (this.f55816d) {
            a();
            i10 = this.f55818i;
        }
        return i10;
    }

    @Override // androidx.camera.core.n
    public int getWidth() {
        int i10;
        synchronized (this.f55816d) {
            a();
            i10 = this.f55817e;
        }
        return i10;
    }

    public t0(Bitmap bitmap, Rect rect, int i10, Matrix matrix, long j10) {
        this(i0.b.e(bitmap), 4, bitmap.getWidth(), bitmap.getHeight(), rect, i10, matrix, j10);
    }

    public t0(ByteBuffer byteBuffer, int i10, int i11, int i12, Rect rect, int i13, Matrix matrix, long j10) {
        this.f55816d = new Object();
        this.f55817e = i11;
        this.f55818i = i12;
        this.f55819o = rect;
        this.f55821q = g(j10, i13, matrix);
        byteBuffer.rewind();
        this.f55820p = new n.a[]{k(byteBuffer, i11 * i10, i10)};
    }
}
