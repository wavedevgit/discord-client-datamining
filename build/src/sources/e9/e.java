package e9;

import android.content.Context;
import com.facebook.common.internal.Supplier;
import com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilder;
import com.facebook.imagepipeline.core.ImagePipeline;
import java.util.Set;
import m8.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e implements Supplier {

    /* renamed from: a  reason: collision with root package name */
    private final Context f21387a;

    /* renamed from: b  reason: collision with root package name */
    private final ImagePipeline f21388b;

    /* renamed from: c  reason: collision with root package name */
    private final f f21389c;

    /* renamed from: d  reason: collision with root package name */
    private final Set f21390d;

    /* renamed from: e  reason: collision with root package name */
    private final Set f21391e;

    public e(Context context, b bVar) {
        this(context, com.facebook.imagepipeline.core.b.l(), bVar);
    }

    @Override // com.facebook.common.internal.Supplier
    /* renamed from: a */
    public PipelineDraweeControllerBuilder get() {
        return new PipelineDraweeControllerBuilder(this.f21387a, this.f21389c, this.f21388b, this.f21390d, this.f21391e).N(null);
    }

    public e(Context context, com.facebook.imagepipeline.core.b bVar, b bVar2) {
        this(context, bVar, null, null, bVar2);
    }

    public e(Context context, com.facebook.imagepipeline.core.b bVar, Set set, Set set2, b bVar2) {
        this.f21387a = context;
        ImagePipeline j10 = bVar.j();
        this.f21388b = j10;
        if (bVar2 != null && bVar2.d() != null) {
            this.f21389c = bVar2.d();
        } else {
            this.f21389c = new f();
        }
        this.f21389c.a(context.getResources(), h9.a.b(), bVar.b(context), bVar.q(), i.y(), j10.q(), bVar2 != null ? bVar2.a() : null, bVar2 != null ? bVar2.b() : null);
        this.f21390d = set;
        this.f21391e = set2;
        if (bVar2 != null) {
            bVar2.c();
        }
    }
}
