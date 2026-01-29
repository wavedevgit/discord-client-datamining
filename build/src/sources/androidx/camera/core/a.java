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
    private final Image f1932d;

    /* renamed from: e  reason: collision with root package name */
    private final C0022a[] f1933e;

    /* renamed from: i  reason: collision with root package name */
    private final p0 f1934i;

    /* renamed from: androidx.camera.core.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class C0022a implements n.a {

        /* renamed from: a  reason: collision with root package name */
        private final Image.Plane f1935a;

        C0022a(Image.Plane plane) {
            this.f1935a = plane;
        }

        @Override // androidx.camera.core.n.a
        public ByteBuffer e() {
            return this.f1935a.getBuffer();
        }

        @Override // androidx.camera.core.n.a
        public int f() {
            return this.f1935a.getRowStride();
        }

        @Override // androidx.camera.core.n.a
        public int g() {
            return this.f1935a.getPixelStride();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(Image image) {
        this.f1932d = image;
        Image.Plane[] planes = image.getPlanes();
        if (planes != null) {
            this.f1933e = new C0022a[planes.length];
            for (int i10 = 0; i10 < planes.length; i10++) {
                this.f1933e[i10] = new C0022a(planes[i10]);
            }
        } else {
            this.f1933e = new C0022a[0];
        }
        this.f1934i = v0.e(q2.b(), image.getTimestamp(), 0, new Matrix());
    }

    @Override // androidx.camera.core.n
    public Image A() {
        return this.f1932d;
    }

    @Override // androidx.camera.core.n
    public n.a[] c1() {
        return this.f1933e;
    }

    @Override // androidx.camera.core.n, java.lang.AutoCloseable
    public void close() {
        this.f1932d.close();
    }

    @Override // androidx.camera.core.n
    public int getFormat() {
        return this.f1932d.getFormat();
    }

    @Override // androidx.camera.core.n
    public int getHeight() {
        return this.f1932d.getHeight();
    }

    @Override // androidx.camera.core.n
    public int getWidth() {
        return this.f1932d.getWidth();
    }

    @Override // androidx.camera.core.n
    public p0 z() {
        return this.f1934i;
    }

    @Override // androidx.camera.core.n
    public void z0(Rect rect) {
        this.f1932d.setCropRect(rect);
    }
}
