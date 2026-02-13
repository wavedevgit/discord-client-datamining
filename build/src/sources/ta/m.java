package ta;

import com.facebook.imagepipeline.image.ImageInfo;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class m implements ImageInfo {

    /* renamed from: d  reason: collision with root package name */
    private final int f49235d;

    /* renamed from: e  reason: collision with root package name */
    private final int f49236e;

    /* renamed from: i  reason: collision with root package name */
    private final int f49237i;

    /* renamed from: o  reason: collision with root package name */
    private final o f49238o;

    /* renamed from: p  reason: collision with root package name */
    private final Map f49239p;

    public m(int i10, int i11, int i12, o oVar, Map map) {
        this.f49235d = i10;
        this.f49236e = i11;
        this.f49237i = i12;
        this.f49238o = oVar;
        this.f49239p = map;
    }

    @Override // ta.l, z9.a
    public Map getExtras() {
        return this.f49239p;
    }

    @Override // com.facebook.imagepipeline.image.ImageInfo
    public int getHeight() {
        return this.f49236e;
    }

    @Override // com.facebook.imagepipeline.image.ImageInfo
    public int getWidth() {
        return this.f49235d;
    }
}
