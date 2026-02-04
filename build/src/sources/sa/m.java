package sa;

import com.facebook.imagepipeline.image.ImageInfo;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class m implements ImageInfo {

    /* renamed from: d  reason: collision with root package name */
    private final int f49361d;

    /* renamed from: e  reason: collision with root package name */
    private final int f49362e;

    /* renamed from: i  reason: collision with root package name */
    private final int f49363i;

    /* renamed from: o  reason: collision with root package name */
    private final o f49364o;

    /* renamed from: p  reason: collision with root package name */
    private final Map f49365p;

    public m(int i10, int i11, int i12, o oVar, Map map) {
        this.f49361d = i10;
        this.f49362e = i11;
        this.f49363i = i12;
        this.f49364o = oVar;
        this.f49365p = map;
    }

    @Override // sa.l, y9.a
    public Map getExtras() {
        return this.f49365p;
    }

    @Override // com.facebook.imagepipeline.image.ImageInfo
    public int getHeight() {
        return this.f49362e;
    }

    @Override // com.facebook.imagepipeline.image.ImageInfo
    public int getWidth() {
        return this.f49361d;
    }
}
