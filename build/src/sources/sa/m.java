package sa;

import com.facebook.imagepipeline.image.ImageInfo;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class m implements ImageInfo {

    /* renamed from: d  reason: collision with root package name */
    private final int f49364d;

    /* renamed from: e  reason: collision with root package name */
    private final int f49365e;

    /* renamed from: i  reason: collision with root package name */
    private final int f49366i;

    /* renamed from: o  reason: collision with root package name */
    private final o f49367o;

    /* renamed from: p  reason: collision with root package name */
    private final Map f49368p;

    public m(int i10, int i11, int i12, o oVar, Map map) {
        this.f49364d = i10;
        this.f49365e = i11;
        this.f49366i = i12;
        this.f49367o = oVar;
        this.f49368p = map;
    }

    @Override // sa.l, y9.a
    public Map getExtras() {
        return this.f49368p;
    }

    @Override // com.facebook.imagepipeline.image.ImageInfo
    public int getHeight() {
        return this.f49365e;
    }

    @Override // com.facebook.imagepipeline.image.ImageInfo
    public int getWidth() {
        return this.f49364d;
    }
}
