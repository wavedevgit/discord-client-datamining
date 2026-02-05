package yj;

import android.media.Image;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Image f54791a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Image image) {
        this.f54791a = image;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final Image a() {
        return this.f54791a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final Image.Plane[] b() {
        return this.f54791a.getPlanes();
    }
}
