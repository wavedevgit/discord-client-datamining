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
    private final Object f55912d;

    /* renamed from: e  reason: collision with root package name */
    private final int f55913e;

    /* renamed from: i  reason: collision with root package name */
    private final int f55914i;

    /* renamed from: o  reason: collision with root package name */
    private final Rect f55915o;

    /* renamed from: p  reason: collision with root package name */
    n.a[] f55916p;

    /* renamed from: q  reason: collision with root package name */
    private final x.p0 f55917q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements n.a {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ int f55918a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ int f55919b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ ByteBuffer f55920c;

        a(int i10, int i11, ByteBuffer byteBuffer) {
            this.f55918a = i10;
            this.f55919b = i11;
            this.f55920c = byteBuffer;
        }

        @Override // androidx.camera.core.n.a
        public ByteBuffer e() {
            return this.f55920c;
        }

        @Override // androidx.camera.core.n.a
        public int f() {
            return this.f55918a;
        }

        @Override // androidx.camera.core.n.a
        public int g() {
            return this.f55919b;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements x.p0 {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ long f55921a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ int f55922b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Matrix f55923c;

        b(long j10, int i10, Matrix matrix) {
            this.f55921a = j10;
            this.f55922b = i10;
            this.f55923c = matrix;
        }

        @Override // x.p0
        public long a() {
            return this.f55921a;
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
            return this.f55922b;
        }
    }

    public t0(j0.z zVar) {
        this((Bitmap) zVar.c(), zVar.b(), zVar.f(), zVar.g(), zVar.a().a());
    }

    private void a() {
        boolean z10;
        synchronized (this.f55912d) {
            if (this.f55916p != null) {
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
    public void A0(Rect rect) {
        synchronized (this.f55912d) {
            try {
                a();
                if (rect != null) {
                    this.f55915o.set(rect);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // androidx.camera.core.n
    public x.p0 E() {
        x.p0 p0Var;
        synchronized (this.f55912d) {
            a();
            p0Var = this.f55917q;
        }
        return p0Var;
    }

    @Override // androidx.camera.core.n
    public Image F() {
        synchronized (this.f55912d) {
            a();
        }
        return null;
    }

    @Override // androidx.camera.core.n
    public n.a[] Z0() {
        n.a[] aVarArr;
        synchronized (this.f55912d) {
            a();
            n.a[] aVarArr2 = this.f55916p;
            Objects.requireNonNull(aVarArr2);
            aVarArr = aVarArr2;
        }
        return aVarArr;
    }

    @Override // androidx.camera.core.n, java.lang.AutoCloseable
    public void close() {
        synchronized (this.f55912d) {
            a();
            this.f55916p = null;
        }
    }

    @Override // androidx.camera.core.n
    public int getFormat() {
        synchronized (this.f55912d) {
            a();
        }
        return 1;
    }

    @Override // androidx.camera.core.n
    public int getHeight() {
        int i10;
        synchronized (this.f55912d) {
            a();
            i10 = this.f55914i;
        }
        return i10;
    }

    @Override // androidx.camera.core.n
    public int getWidth() {
        int i10;
        synchronized (this.f55912d) {
            a();
            i10 = this.f55913e;
        }
        return i10;
    }

    public t0(Bitmap bitmap, Rect rect, int i10, Matrix matrix, long j10) {
        this(i0.b.e(bitmap), 4, bitmap.getWidth(), bitmap.getHeight(), rect, i10, matrix, j10);
    }

    public t0(ByteBuffer byteBuffer, int i10, int i11, int i12, Rect rect, int i13, Matrix matrix, long j10) {
        this.f55912d = new Object();
        this.f55913e = i11;
        this.f55914i = i12;
        this.f55915o = rect;
        this.f55917q = g(j10, i13, matrix);
        byteBuffer.rewind();
        this.f55916p = new n.a[]{k(byteBuffer, i11 * i10, i10)};
    }
}
