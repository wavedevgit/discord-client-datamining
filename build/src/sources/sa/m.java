package sa;

import com.facebook.imagepipeline.image.ImageInfo;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class m implements ImageInfo {

    /* renamed from: d  reason: collision with root package name */
    private final int f49510d;

    /* renamed from: e  reason: collision with root package name */
    private final int f49511e;

    /* renamed from: i  reason: collision with root package name */
    private final int f49512i;

    /* renamed from: o  reason: collision with root package name */
    private final o f49513o;

    /* renamed from: p  reason: collision with root package name */
    private final Map f49514p;

    public m(int i10, int i11, int i12, o oVar, Map map) {
        this.f49510d = i10;
        this.f49511e = i11;
        this.f49512i = i12;
        this.f49513o = oVar;
        this.f49514p = map;
    }

    @Override // sa.l, y9.a
    public Map getExtras() {
        return this.f49514p;
    }

    @Override // com.facebook.imagepipeline.image.ImageInfo
    public int getHeight() {
        return this.f49511e;
    }

    @Override // com.facebook.imagepipeline.image.ImageInfo
    public int getWidth() {
        return this.f49510d;
    }
}
