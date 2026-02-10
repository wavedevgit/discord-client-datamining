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
    private final Object f55951d;

    /* renamed from: e  reason: collision with root package name */
    private final int f55952e;

    /* renamed from: i  reason: collision with root package name */
    private final int f55953i;

    /* renamed from: o  reason: collision with root package name */
    private final Rect f55954o;

    /* renamed from: p  reason: collision with root package name */
    n.a[] f55955p;

    /* renamed from: q  reason: collision with root package name */
    private final x.p0 f55956q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements n.a {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ int f55957a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ int f55958b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ ByteBuffer f55959c;

        a(int i10, int i11, ByteBuffer byteBuffer) {
            this.f55957a = i10;
            this.f55958b = i11;
            this.f55959c = byteBuffer;
        }

        @Override // androidx.camera.core.n.a
        public ByteBuffer f() {
            return this.f55959c;
        }

        @Override // androidx.camera.core.n.a
        public int g() {
            return this.f55957a;
        }

        @Override // androidx.camera.core.n.a
        public int h() {
            return this.f55958b;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements x.p0 {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ long f55960a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ int f55961b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Matrix f55962c;

        b(long j10, int i10, Matrix matrix) {
            this.f55960a = j10;
            this.f55961b = i10;
            this.f55962c = matrix;
        }

        @Override // x.p0
        public long a() {
            return this.f55960a;
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
            return this.f55961b;
        }
    }

    public t0(j0.z zVar) {
        this((Bitmap) zVar.c(), zVar.b(), zVar.f(), zVar.g(), zVar.a().a());
    }

    private void a() {
        boolean z10;
        synchronized (this.f55951d) {
            if (this.f55955p != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            b2.e.j(z10, "The image is closed.");
        }
    }

    private static x.p0 h(long j10, int i10, Matrix matrix) {
        return new b(j10, i10, matrix);
    }

    private static n.a i(ByteBuffer byteBuffer, int i10, int i11) {
        return new a(i10, i11, byteBuffer);
    }

    @Override // androidx.camera.core.n
    public void B0(Rect rect) {
        synchronized (this.f55951d) {
            try {
                a();
                if (rect != null) {
                    this.f55954o.set(rect);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Override // androidx.camera.core.n
    public x.p0 E() {
        x.p0 p0Var;
        synchronized (this.f55951d) {
            a();
            p0Var = this.f55956q;
        }
        return p0Var;
    }

    @Override // androidx.camera.core.n
    public Image F() {
        synchronized (this.f55951d) {
            a();
        }
        return null;
    }

    @Override // androidx.camera.core.n, java.lang.AutoCloseable
    public void close() {
        synchronized (this.f55951d) {
            a();
            this.f55955p = null;
        }
    }

    @Override // androidx.camera.core.n
    public n.a[] e1() {
        n.a[] aVarArr;
        synchronized (this.f55951d) {
            a();
            n.a[] aVarArr2 = this.f55955p;
            Objects.requireNonNull(aVarArr2);
            aVarArr = aVarArr2;
        }
        return aVarArr;
    }

    @Override // androidx.camera.core.n
    public int getFormat() {
        synchronized (this.f55951d) {
            a();
        }
        return 1;
    }

    @Override // androidx.camera.core.n
    public int getHeight() {
        int i10;
        synchronized (this.f55951d) {
            a();
            i10 = this.f55953i;
        }
        return i10;
    }

    @Override // androidx.camera.core.n
    public int getWidth() {
        int i10;
        synchronized (this.f55951d) {
            a();
            i10 = this.f55952e;
        }
        return i10;
    }

    public t0(Bitmap bitmap, Rect rect, int i10, Matrix matrix, long j10) {
        this(i0.b.e(bitmap), 4, bitmap.getWidth(), bitmap.getHeight(), rect, i10, matrix, j10);
    }

    public t0(ByteBuffer byteBuffer, int i10, int i11, int i12, Rect rect, int i13, Matrix matrix, long j10) {
        this.f55951d = new Object();
        this.f55952e = i11;
        this.f55953i = i12;
        this.f55954o = rect;
        this.f55956q = h(j10, i13, matrix);
        byteBuffer.rewind();
        this.f55955p = new n.a[]{i(byteBuffer, i11 * i10, i10)};
    }
}
