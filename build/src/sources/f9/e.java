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
    private final Context f22495a;

    /* renamed from: b  reason: collision with root package name */
    private final ImagePipeline f22496b;

    /* renamed from: c  reason: collision with root package name */
    private final f f22497c;

    /* renamed from: d  reason: collision with root package name */
    private final Set f22498d;

    /* renamed from: e  reason: collision with root package name */
    private final Set f22499e;

    public e(Context context, b bVar) {
        this(context, com.facebook.imagepipeline.core.b.l(), bVar);
    }

    @Override // com.facebook.common.internal.Supplier
    /* renamed from: a */
    public PipelineDraweeControllerBuilder get() {
        return new PipelineDraweeControllerBuilder(this.f22495a, this.f22497c, this.f22496b, this.f22498d, this.f22499e).N(null);
    }

    public e(Context context, com.facebook.imagepipeline.core.b bVar, b bVar2) {
        this(context, bVar, null, null, bVar2);
    }

    public e(Context context, com.facebook.imagepipeline.core.b bVar, Set set, Set set2, b bVar2) {
        this.f22495a = context;
        ImagePipeline j10 = bVar.j();
        this.f22496b = j10;
        if (bVar2 != null && bVar2.d() != null) {
            this.f22497c = bVar2.d();
        } else {
            this.f22497c = new f();
        }
        this.f22497c.a(context.getResources(), i9.a.b(), bVar.b(context), bVar.q(), i.y(), j10.q(), bVar2 != null ? bVar2.a() : null, bVar2 != null ? bVar2.b() : null);
        this.f22498d = set;
        this.f22499e = set2;
        if (bVar2 != null) {
            bVar2.c();
        }
    }
}
