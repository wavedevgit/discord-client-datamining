package tm;

import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KType;
import kotlinx.coroutines.flow.Flow;
import tm.o;
@Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u000e\n\u0002\b\u0007\b\u0001\u0018\u0000*\u0004\b\u0000\u0010\u00012\b\u0012\u0004\u0012\u00028\u00000\u0002B\u001d\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\f\u0010\u0006\u001a\b\u0012\u0004\u0012\u00028\u00000\u0005¢\u0006\u0004\b\u0007\u0010\bJ\u0015\u0010\t\u001a\b\u0012\u0004\u0012\u00028\u00000\u0005H\u0016¢\u0006\u0004\b\t\u0010\nJ\u000f\u0010\f\u001a\u00020\u000bH\u0016¢\u0006\u0004\b\f\u0010\rR\u0014\u0010\u0004\u001a\u00020\u00038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u000e\u0010\u000fR\u001a\u0010\u0006\u001a\b\u0012\u0004\u0012\u00028\u00000\u00058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0010\u0010\u0011¨\u0006\u0012"}, d2 = {"Ltm/n;", "OutputT", "Ltm/o;", "Lkotlin/reflect/KType;", "outputType", "Lkotlinx/coroutines/flow/Flow;", "work", "<init>", "(Lkotlin/reflect/KType;Lkotlinx/coroutines/flow/Flow;)V", "run", "()Lkotlinx/coroutines/flow/Flow;", "", "toString", "()Ljava/lang/String;", "b", "Lkotlin/reflect/KType;", "c", "Lkotlinx/coroutines/flow/Flow;", "wf1-workflow-core"}, k = 1, mv = {1, 6, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n<OutputT> implements o<OutputT> {

    /* renamed from: b  reason: collision with root package name */
    private final KType f49724b;

    /* renamed from: c  reason: collision with root package name */
    private final Flow f49725c;

    public n(KType outputType, Flow work) {
        Intrinsics.checkNotNullParameter(outputType, "outputType");
        Intrinsics.checkNotNullParameter(work, "work");
        this.f49724b = outputType;
        this.f49725c = work;
    }

    @Override // tm.o
    public boolean a(o oVar) {
        return o.b.a(this, oVar);
    }

    @Override // tm.o
    public Flow run() {
        return this.f49725c;
    }

    public String toString() {
        return "TypedWorker(" + this.f49724b + ')';
    }
}
