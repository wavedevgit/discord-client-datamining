package sa;

import com.facebook.imagepipeline.image.ImageInfo;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class m implements ImageInfo {

    /* renamed from: d  reason: collision with root package name */
    private final int f48954d;

    /* renamed from: e  reason: collision with root package name */
    private final int f48955e;

    /* renamed from: i  reason: collision with root package name */
    private final int f48956i;

    /* renamed from: o  reason: collision with root package name */
    private final o f48957o;

    /* renamed from: p  reason: collision with root package name */
    private final Map f48958p;

    public m(int i10, int i11, int i12, o oVar, Map map) {
        this.f48954d = i10;
        this.f48955e = i11;
        this.f48956i = i12;
        this.f48957o = oVar;
        this.f48958p = map;
    }

    @Override // sa.l, y9.a
    public Map getExtras() {
        return this.f48958p;
    }

    @Override // com.facebook.imagepipeline.image.ImageInfo
    public int getHeight() {
        return this.f48955e;
    }

    @Override // com.facebook.imagepipeline.image.ImageInfo
    public int getWidth() {
        return this.f48954d;
    }
}
