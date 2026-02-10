package ta;

import com.facebook.imagepipeline.image.ImageInfo;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class m implements ImageInfo {

    /* renamed from: d  reason: collision with root package name */
    private final int f50734d;

    /* renamed from: e  reason: collision with root package name */
    private final int f50735e;

    /* renamed from: i  reason: collision with root package name */
    private final int f50736i;

    /* renamed from: o  reason: collision with root package name */
    private final o f50737o;

    /* renamed from: p  reason: collision with root package name */
    private final Map f50738p;

    public m(int i10, int i11, int i12, o oVar, Map map) {
        this.f50734d = i10;
        this.f50735e = i11;
        this.f50736i = i12;
        this.f50737o = oVar;
        this.f50738p = map;
    }

    @Override // ta.l, z9.a
    public Map getExtras() {
        return this.f50738p;
    }

    @Override // com.facebook.imagepipeline.image.ImageInfo
    public int getHeight() {
        return this.f50735e;
    }

    @Override // com.facebook.imagepipeline.image.ImageInfo
    public int getWidth() {
        return this.f50734d;
    }
}
