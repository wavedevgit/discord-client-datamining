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
    private final Image f2083d;

    /* renamed from: e  reason: collision with root package name */
    private final C0025a[] f2084e;

    /* renamed from: i  reason: collision with root package name */
    private final p0 f2085i;

    /* renamed from: androidx.camera.core.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class C0025a implements n.a {

        /* renamed from: a  reason: collision with root package name */
        private final Image.Plane f2086a;

        C0025a(Image.Plane plane) {
            this.f2086a = plane;
        }

        @Override // androidx.camera.core.n.a
        public ByteBuffer e() {
            return this.f2086a.getBuffer();
        }

        @Override // androidx.camera.core.n.a
        public int f() {
            return this.f2086a.getRowStride();
        }

        @Override // androidx.camera.core.n.a
        public int g() {
            return this.f2086a.getPixelStride();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(Image image) {
        this.f2083d = image;
        Image.Plane[] planes = image.getPlanes();
        if (planes != null) {
            this.f2084e = new C0025a[planes.length];
            for (int i10 = 0; i10 < planes.length; i10++) {
                this.f2084e[i10] = new C0025a(planes[i10]);
            }
        } else {
            this.f2084e = new C0025a[0];
        }
        this.f2085i = v0.e(q2.b(), image.getTimestamp(), 0, new Matrix());
    }

    @Override // androidx.camera.core.n
    public void A0(Rect rect) {
        this.f2083d.setCropRect(rect);
    }

    @Override // androidx.camera.core.n
    public p0 E() {
        return this.f2085i;
    }

    @Override // androidx.camera.core.n
    public Image F() {
        return this.f2083d;
    }

    @Override // androidx.camera.core.n
    public n.a[] Z0() {
        return this.f2084e;
    }

    @Override // androidx.camera.core.n, java.lang.AutoCloseable
    public void close() {
        this.f2083d.close();
    }

    @Override // androidx.camera.core.n
    public int getFormat() {
        return this.f2083d.getFormat();
    }

    @Override // androidx.camera.core.n
    public int getHeight() {
        return this.f2083d.getHeight();
    }

    @Override // androidx.camera.core.n
    public int getWidth() {
        return this.f2083d.getWidth();
    }
}
