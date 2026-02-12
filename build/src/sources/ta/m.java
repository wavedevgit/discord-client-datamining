package ta;

import com.facebook.imagepipeline.image.ImageInfo;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class m implements ImageInfo {

    /* renamed from: d  reason: collision with root package name */
    private final int f48667d;

    /* renamed from: e  reason: collision with root package name */
    private final int f48668e;

    /* renamed from: i  reason: collision with root package name */
    private final int f48669i;

    /* renamed from: o  reason: collision with root package name */
    private final o f48670o;

    /* renamed from: p  reason: collision with root package name */
    private final Map f48671p;

    public m(int i10, int i11, int i12, o oVar, Map map) {
        this.f48667d = i10;
        this.f48668e = i11;
        this.f48669i = i12;
        this.f48670o = oVar;
        this.f48671p = map;
    }

    @Override // ta.l, z9.a
    public Map getExtras() {
        return this.f48671p;
    }

    @Override // com.facebook.imagepipeline.image.ImageInfo
    public int getHeight() {
        return this.f48668e;
    }

    @Override // com.facebook.imagepipeline.image.ImageInfo
    public int getWidth() {
        return this.f48667d;
    }
}
