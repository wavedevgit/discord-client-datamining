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
    private final Image f2057d;

    /* renamed from: e  reason: collision with root package name */
    private final C0025a[] f2058e;

    /* renamed from: i  reason: collision with root package name */
    private final p0 f2059i;

    /* renamed from: androidx.camera.core.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class C0025a implements n.a {

        /* renamed from: a  reason: collision with root package name */
        private final Image.Plane f2060a;

        C0025a(Image.Plane plane) {
            this.f2060a = plane;
        }

        @Override // androidx.camera.core.n.a
        public ByteBuffer f() {
            return this.f2060a.getBuffer();
        }

        @Override // androidx.camera.core.n.a
        public int g() {
            return this.f2060a.getRowStride();
        }

        @Override // androidx.camera.core.n.a
        public int h() {
            return this.f2060a.getPixelStride();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(Image image) {
        this.f2057d = image;
        Image.Plane[] planes = image.getPlanes();
        if (planes != null) {
            this.f2058e = new C0025a[planes.length];
            for (int i10 = 0; i10 < planes.length; i10++) {
                this.f2058e[i10] = new C0025a(planes[i10]);
            }
        } else {
            this.f2058e = new C0025a[0];
        }
        this.f2059i = v0.e(q2.b(), image.getTimestamp(), 0, new Matrix());
    }

    @Override // androidx.camera.core.n
    public p0 A() {
        return this.f2059i;
    }

    @Override // androidx.camera.core.n
    public void A0(Rect rect) {
        this.f2057d.setCropRect(rect);
    }

    @Override // androidx.camera.core.n
    public Image B() {
        return this.f2057d;
    }

    @Override // androidx.camera.core.n, java.lang.AutoCloseable
    public void close() {
        this.f2057d.close();
    }

    @Override // androidx.camera.core.n
    public n.a[] d1() {
        return this.f2058e;
    }

    @Override // androidx.camera.core.n
    public int getFormat() {
        return this.f2057d.getFormat();
    }

    @Override // androidx.camera.core.n
    public int getHeight() {
        return this.f2057d.getHeight();
    }

    @Override // androidx.camera.core.n
    public int getWidth() {
        return this.f2057d.getWidth();
    }
}
