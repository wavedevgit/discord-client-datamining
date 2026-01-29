package sa;

import com.facebook.imagepipeline.image.ImageInfo;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class m implements ImageInfo {

    /* renamed from: d  reason: collision with root package name */
    private final int f48884d;

    /* renamed from: e  reason: collision with root package name */
    private final int f48885e;

    /* renamed from: i  reason: collision with root package name */
    private final int f48886i;

    /* renamed from: o  reason: collision with root package name */
    private final o f48887o;

    /* renamed from: p  reason: collision with root package name */
    private final Map f48888p;

    public m(int i10, int i11, int i12, o oVar, Map map) {
        this.f48884d = i10;
        this.f48885e = i11;
        this.f48886i = i12;
        this.f48887o = oVar;
        this.f48888p = map;
    }

    @Override // sa.l, y9.a
    public Map getExtras() {
        return this.f48888p;
    }

    @Override // com.facebook.imagepipeline.image.ImageInfo
    public int getHeight() {
        return this.f48885e;
    }

    @Override // com.facebook.imagepipeline.image.ImageInfo
    public int getWidth() {
        return this.f48884d;
    }
}
