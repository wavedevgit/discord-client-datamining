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
    private final Context f22659a;

    /* renamed from: b  reason: collision with root package name */
    private final ImagePipeline f22660b;

    /* renamed from: c  reason: collision with root package name */
    private final f f22661c;

    /* renamed from: d  reason: collision with root package name */
    private final Set f22662d;

    /* renamed from: e  reason: collision with root package name */
    private final Set f22663e;

    public e(Context context, b bVar) {
        this(context, com.facebook.imagepipeline.core.b.l(), bVar);
    }

    @Override // com.facebook.common.internal.Supplier
    /* renamed from: a */
    public PipelineDraweeControllerBuilder get() {
        return new PipelineDraweeControllerBuilder(this.f22659a, this.f22661c, this.f22660b, this.f22662d, this.f22663e).N(null);
    }

    public e(Context context, com.facebook.imagepipeline.core.b bVar, b bVar2) {
        this(context, bVar, null, null, bVar2);
    }

    public e(Context context, com.facebook.imagepipeline.core.b bVar, Set set, Set set2, b bVar2) {
        this.f22659a = context;
        ImagePipeline j10 = bVar.j();
        this.f22660b = j10;
        if (bVar2 != null && bVar2.d() != null) {
            this.f22661c = bVar2.d();
        } else {
            this.f22661c = new f();
        }
        this.f22661c.a(context.getResources(), h9.a.b(), bVar.b(context), bVar.q(), i.F(), j10.q(), bVar2 != null ? bVar2.a() : null, bVar2 != null ? bVar2.b() : null);
        this.f22662d = set;
        this.f22663e = set2;
        if (bVar2 != null) {
            bVar2.c();
        }
    }
}
