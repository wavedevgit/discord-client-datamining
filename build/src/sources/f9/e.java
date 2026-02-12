package f9;

import android.content.Context;
import com.facebook.common.internal.Supplier;
import com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilder;
import com.facebook.imagepipeline.core.ImagePipeline;
import java.util.Set;
import n8.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e implements Supplier {

    /* renamed from: a  reason: collision with root package name */
    private final Context f23621a;

    /* renamed from: b  reason: collision with root package name */
    private final ImagePipeline f23622b;

    /* renamed from: c  reason: collision with root package name */
    private final f f23623c;

    /* renamed from: d  reason: collision with root package name */
    private final Set f23624d;

    /* renamed from: e  reason: collision with root package name */
    private final Set f23625e;

    public e(Context context, b bVar) {
        this(context, com.facebook.imagepipeline.core.b.l(), bVar);
    }

    @Override // com.facebook.common.internal.Supplier
    /* renamed from: a */
    public PipelineDraweeControllerBuilder get() {
        return new PipelineDraweeControllerBuilder(this.f23621a, this.f23623c, this.f23622b, this.f23624d, this.f23625e).N(null);
    }

    public e(Context context, com.facebook.imagepipeline.core.b bVar, b bVar2) {
        this(context, bVar, null, null, bVar2);
    }

    public e(Context context, com.facebook.imagepipeline.core.b bVar, Set set, Set set2, b bVar2) {
        this.f23621a = context;
        ImagePipeline j10 = bVar.j();
        this.f23622b = j10;
        if (bVar2 != null && bVar2.d() != null) {
            this.f23623c = bVar2.d();
        } else {
            this.f23623c = new f();
        }
        this.f23623c.a(context.getResources(), i9.a.b(), bVar.b(context), bVar.q(), i.y(), j10.q(), bVar2 != null ? bVar2.a() : null, bVar2 != null ? bVar2.b() : null);
        this.f23624d = set;
        this.f23625e = set2;
        if (bVar2 != null) {
            bVar2.c();
        }
    }
}
