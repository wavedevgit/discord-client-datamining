package androidx.camera.core;

import a0.q2;
import android.graphics.Matrix;
import android.graphics.Rect;
import android.media.Image;
import androidx.camera.core.n;
import java.nio.ByteBuffer;
import x.p0;
import x.v0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class a implements n {

    /* renamed from: d  reason: collision with root package name */
    private final Image f2386d;

    /* renamed from: e  reason: collision with root package name */
    private final C0023a[] f2387e;

    /* renamed from: i  reason: collision with root package name */
    private final p0 f2388i;

    /* renamed from: androidx.camera.core.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class C0023a implements n.a {

        /* renamed from: a  reason: collision with root package name */
        private final Image.Plane f2389a;

        C0023a(Image.Plane plane) {
            this.f2389a = plane;
        }

        @Override // androidx.camera.core.n.a
        public ByteBuffer e() {
            return this.f2389a.getBuffer();
        }

        @Override // androidx.camera.core.n.a
        public int f() {
            return this.f2389a.getRowStride();
        }

        @Override // androidx.camera.core.n.a
        public int g() {
            return this.f2389a.getPixelStride();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(Image image) {
        this.f2386d = image;
        Image.Plane[] planes = image.getPlanes();
        if (planes != null) {
            this.f2387e = new C0023a[planes.length];
            for (int i10 = 0; i10 < planes.length; i10++) {
                this.f2387e[i10] = new C0023a(planes[i10]);
            }
        } else {
            this.f2387e = new C0023a[0];
        }
        this.f2388i = v0.e(q2.b(), image.getTimestamp(), 0, new Matrix());
    }

    @Override // androidx.camera.core.n
    public void C0(Rect rect) {
        this.f2386d.setCropRect(rect);
    }

    @Override // androidx.camera.core.n
    public p0 E() {
        return this.f2388i;
    }

    @Override // androidx.camera.core.n
    public Image F() {
        return this.f2386d;
    }

    @Override // androidx.camera.core.n
    public n.a[] c1() {
        return this.f2387e;
    }

    @Override // androidx.camera.core.n, java.lang.AutoCloseable
    public void close() {
        this.f2386d.close();
    }

    @Override // androidx.camera.core.n
    public int getFormat() {
        return this.f2386d.getFormat();
    }

    @Override // androidx.camera.core.n
    public int getHeight() {
        return this.f2386d.getHeight();
    }

    @Override // androidx.camera.core.n
    public int getWidth() {
        return this.f2386d.getWidth();
    }
}
