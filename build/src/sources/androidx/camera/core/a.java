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
    private final Image f2086d;

    /* renamed from: e  reason: collision with root package name */
    private final C0022a[] f2087e;

    /* renamed from: i  reason: collision with root package name */
    private final p0 f2088i;

    /* renamed from: androidx.camera.core.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class C0022a implements n.a {

        /* renamed from: a  reason: collision with root package name */
        private final Image.Plane f2089a;

        C0022a(Image.Plane plane) {
            this.f2089a = plane;
        }

        @Override // androidx.camera.core.n.a
        public ByteBuffer f() {
            return this.f2089a.getBuffer();
        }

        @Override // androidx.camera.core.n.a
        public int g() {
            return this.f2089a.getRowStride();
        }

        @Override // androidx.camera.core.n.a
        public int h() {
            return this.f2089a.getPixelStride();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(Image image) {
        this.f2086d = image;
        Image.Plane[] planes = image.getPlanes();
        if (planes != null) {
            this.f2087e = new C0022a[planes.length];
            for (int i10 = 0; i10 < planes.length; i10++) {
                this.f2087e[i10] = new C0022a(planes[i10]);
            }
        } else {
            this.f2087e = new C0022a[0];
        }
        this.f2088i = v0.e(q2.b(), image.getTimestamp(), 0, new Matrix());
    }

    @Override // androidx.camera.core.n
    public void B0(Rect rect) {
        this.f2086d.setCropRect(rect);
    }

    @Override // androidx.camera.core.n
    public p0 E() {
        return this.f2088i;
    }

    @Override // androidx.camera.core.n
    public Image F() {
        return this.f2086d;
    }

    @Override // androidx.camera.core.n, java.lang.AutoCloseable
    public void close() {
        this.f2086d.close();
    }

    @Override // androidx.camera.core.n
    public n.a[] e1() {
        return this.f2087e;
    }

    @Override // androidx.camera.core.n
    public int getFormat() {
        return this.f2086d.getFormat();
    }

    @Override // androidx.camera.core.n
    public int getHeight() {
        return this.f2086d.getHeight();
    }

    @Override // androidx.camera.core.n
    public int getWidth() {
        return this.f2086d.getWidth();
    }
}
