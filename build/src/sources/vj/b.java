package vj;

import android.media.Image;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b {

    /* renamed from: a  reason: collision with root package name */
    private final Image f51177a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Image image) {
        this.f51177a = image;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final Image a() {
        return this.f51177a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final Image.Plane[] b() {
        return this.f51177a.getPlanes();
    }
}
