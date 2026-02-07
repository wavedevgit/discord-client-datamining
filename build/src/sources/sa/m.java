package sa;

import com.facebook.imagepipeline.image.ImageInfo;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class m implements ImageInfo {

    /* renamed from: d  reason: collision with root package name */
    private final int f49893d;

    /* renamed from: e  reason: collision with root package name */
    private final int f49894e;

    /* renamed from: i  reason: collision with root package name */
    private final int f49895i;

    /* renamed from: o  reason: collision with root package name */
    private final o f49896o;

    /* renamed from: p  reason: collision with root package name */
    private final Map f49897p;

    public m(int i10, int i11, int i12, o oVar, Map map) {
        this.f49893d = i10;
        this.f49894e = i11;
        this.f49895i = i12;
        this.f49896o = oVar;
        this.f49897p = map;
    }

    @Override // sa.l, y9.a
    public Map getExtras() {
        return this.f49897p;
    }

    @Override // com.facebook.imagepipeline.image.ImageInfo
    public int getHeight() {
        return this.f49894e;
    }

    @Override // com.facebook.imagepipeline.image.ImageInfo
    public int getWidth() {
        return this.f49893d;
    }
}
